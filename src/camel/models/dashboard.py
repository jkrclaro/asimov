import string
import random

from slugify import slugify

from . import db, TimestampMixin


def generate_uid() -> str:
    return ''.join(
        random.SystemRandom().choice(string.ascii_letters + string.digits)
        for _ in range(14)
    )


class Product(db.Model, TimestampMixin):
    __tablename__ = 'products'
    uid = db.Column(db.String(255))
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    etsy = db.relationship('ProductEtsy', uselist=False, back_populates='product')
    inventories = db.relationship('Inventory', backref='products')

    def __init__(self, account_id: int, uid: str = ''):
        """SQLALchemy model for products table.

        :param account_id: Account ID associated that owns this product.
        :param uid: Unique ID for product.
        """
        self.account_id = account_id
        self.uid = uid if uid else f'prd-{generate_uid()}'

    def __repr__(self):
        return self.uid

    def get_title(self):
        return self.etsy.title

    def get_category(self):
        return self.etsy.category

    def get_renewal(self):
        return self.etsy.renewal

    def get_type(self):
        return self.etsy.type

    def get_description(self):
        return self.etsy.description


class ProductEtsy(db.Model, TimestampMixin):
    __tablename__ = 'products_etsy'
    title = db.Column(db.String(255))
    category = db.Column(db.String(255))
    renewal = db.Column(db.String(30))
    type = db.Column(db.String(30))
    description = db.Column(db.String(255))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    product = db.relationship('Product', back_populates='etsy')

    def __init__(
            self,
            title: str,
            category: str,
            renewal: str,
            type: str,
            description: str
    ):
        """SQLALchemy model for products_etsy table.

        :param title: Title of product.
        :param category: Category of this product.
        :param renewal: How product will be renewed after expiring.
        :param type: If product is digital or physical.
        :param description: Long description of product.
        """
        self.title = title
        self.category = category
        self.renewal = renewal
        self.type = type
        self.description = description

    def __repr__(self):
        return self.id


class Inventory(db.Model, TimestampMixin):
    __tablename__ = 'inventories'
    price = db.Column(db.Integer)
    available = db.Column(db.Integer)
    sku = db.Column(db.String(255))
    when_sold = db.Column(db.String(30))
    incoming = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    channels = db.relationship('Listing', back_populates='inventory')

    def __init__(
            self,
            product_id: int,
            when_sold: str = 'Stop selling',
            available: int = 0,
            incoming: int = 0,
            price: int = 0,
            sku: str = '',
            is_active: bool = False
    ):
        """SQLALchemy model for inventories table.

        :param product_id: ID for SQLAlchemy model of Product
        :param available: Number of available stocks
        :param when_sold: What to do when inventory is sold out
        :param incoming: Number of stocks incoming
        :param sku: Stock keeping unit for this inventory
        :param is_active: If inventory is currently listed somewhere
        """
        self.product_id = product_id
        self.available = available
        self.when_sold = when_sold
        self.incoming = incoming
        self.price = price
        self.is_active = is_active
        self.sku = slugify(sku) if sku else f'sku-{generate_uid()}'

    def __repr__(self):
        return self.sku


class Listing(db.Model, TimestampMixin):
    __tablename__ = 'listings'
    inventory_id = db.Column(db.Integer, db.ForeignKey('inventories.id'))
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id'))
    inventory = db.relationship('Inventory', back_populates='channels')
    channel = db.relationship('Channel', back_populates='inventories')
    etsy = db.relationship('ListingEtsy', uselist=False, back_populates='listing')

    def __init__(self, inventory_id, channel_id):
        """SQLAlchemy association table for inventories and channels"""
        self.inventory_id = inventory_id
        self.channel_id = channel_id

    def __repr__(self):
        return f"{self.inventory} in {self.channel}"


class ListingEtsy(db.Model, TimestampMixin):
    __tablename__ = 'listings_etsy'
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'))
    listing = db.relationship('Listing', uselist=False, back_populates='etsy')
    listing_etsy_id = db.Column(db.Integer)

    def __init__(self, listing_etsy_id: int):
        """SQLALchemy model for listings_etsy table.

        :param listing_etsy_id: Listing ID as on Etsy.
        """
        self.listing_etsy_id = listing_etsy_id

    def __repr__(self):
        return self.listing_etsy_id


class Channel(db.Model, TimestampMixin):
    __tablename__ = 'channels'
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'))
    platform = db.relationship('Platform', back_populates='channel')
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    inventories = db.relationship('Listing', back_populates='channel')
    etsy = db.relationship('ChannelEtsy', uselist=False, back_populates='channel')

    def __init__(self, platform_id, account_id):
        """SQLAlchemy model for channels table

        :param platform_id: ID of platform
        :param account_id: Account ID of a user
        """
        self.platform_id = platform_id
        self.account_id = account_id

    def __repr__(self):
        return f'{self.etsy}'


class ChannelEtsy(db.Model, TimestampMixin):
    __tablename__ = 'channels_etsy'
    oauth_token = db.Column(db.String(255))
    oauth_token_secret = db.Column(db.String(255))
    shop_id = db.Column(db.String(255))
    shop_name = db.Column(db.String(255))
    user_id = db.Column(db.String(255))
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id'))
    channel = db.relationship('Channel', uselist=False, back_populates='etsy')

    def __init__(
            self,
            oauth_token: str,
            oauth_token_secret: str,
            shop_id: str,
            shop_name: str,
            user_id: str
    ):
        """SQLAlchemy model for channels_etsy table.

        :param oauth_token: Token key received from access token
        :param oauth_token_secret: Token secret received from access token
        :param shop_id: ID of an Etsy shop
        :param shop_name: Name of an Etsy shop
        :param user_id: ID of an Etsy user
        """
        self.oauth_token = oauth_token
        self.oauth_token_secret = oauth_token_secret
        self.shop_id = shop_id
        self.shop_name = shop_name
        self.user_id = user_id

    def __repr__(self):
        return self.shop_name


class Platform(db.Model, TimestampMixin):
    __tablename__ = 'platforms'
    name = db.Column(db.String(30), unique=True)
    channel = db.relationship(
        'Channel',
        uselist=False,
        back_populates='platform'
    )

    def __init__(self, name):
        """SQLAlchemy model for platforms table.

        :param name: Name of platform
        """
        self.name = name

    def __repr__(self):
        return self.name
