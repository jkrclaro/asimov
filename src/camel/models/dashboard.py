from sqlalchemy.orm import synonym

from . import db, BaseModel, generate_uid


class Product(db.Model, BaseModel):
    __tablename__ = 'products'
    _uid = db.Column('uid', db.String(255))
    title = db.Column(db.String(255))
    url = db.Column(db.String(255))
    caption = db.Column(db.String(255))
    description = db.Column(db.Text)
    account_id = db.Column(
        db.Integer,
        db.ForeignKey('accounts.id', ondelete='CASCADE')
    )
    etsy = db.relationship(
        'ProductEtsy',
        uselist=False,
        back_populates='product',
        passive_deletes=True
    )
    inventories = db.relationship('Inventory', backref='products')

    def __init__(
            self,
            account_id: int,
            title: str,
            url: str,
            caption: str,
            description: str,
            uid: str = ''
    ):
        """SQLALchemy model for products table.

        :param account_id: Account ID associated that owns this product.
        :param title: Title of product.
        :param url: Web page of official product.
        :param caption: Short one-line description of product.
        :param description: Full description of product.
        :param uid: Unique ID for product.
        """
        self.account_id = account_id
        self.title = title
        self.url = url
        self.caption = caption
        self.description = description
        self.uid = uid

    @property
    def uid(self):
        return self._uid

    @uid.setter
    def uid(self, value: str):
        self._uid = value if value else f'product-{generate_uid()}'

    uid = synonym('_uid', descriptor=uid)  # https://bit.ly/2xsVGAF

    def __str__(self):
        return self.uid

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class ProductEtsy(db.Model, BaseModel):
    __tablename__ = 'products_etsy'
    category = db.Column(db.String(255))
    renewal = db.Column(db.String(30))
    type = db.Column(db.String(30))
    description = db.Column(db.String(255))
    product_id = db.Column(
        db.Integer,
        db.ForeignKey('products.id', ondelete='CASCADE')
    )
    product = db.relationship(
        'Product',
        back_populates='etsy',
        passive_deletes=True
    )

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


class Inventory(db.Model, BaseModel):
    __tablename__ = 'inventories'
    _sku = db.Column('sku', db.String(255))
    price = db.Column(db.Integer)
    available = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=False)
    when_sold_id = db.Column(
        db.Integer,
        db.ForeignKey('inventories_when_sold.id', ondelete='CASCADE')
    )
    when_sold = db.relationship(
        'InventoryWhenSold',
        back_populates='inventory',
        passive_deletes=True
    )
    product_id = db.Column(
        db.Integer,
        db.ForeignKey('products.id', ondelete='CASCADE')
    )
    channels = db.relationship(
        'Listing',
        back_populates='inventory',
        passive_deletes=True
    )

    def __init__(
            self,
            product_id: int,
            when_sold_id: int,
            available: int = 0,
            price: int = 0,
            sku: str = '',
            is_active: bool = False
    ):
        """SQLALchemy model for inventories table.

        :param product_id: ID for SQLAlchemy model of Product
        :param when_sold_id: ID for SQLAlchemy model of InventoryWhenSold
        :param available: Number of available stocks
        :param sku: Stock keeping unit for this inventory
        :param is_active: If inventory is currently listed somewhere
        """
        self.product_id = product_id
        self.when_sold_id = when_sold_id
        self.available = available
        self.price = price
        self.is_active = is_active
        self.sku = sku

    @property
    def sku(self):
        return self._sku

    @sku.setter
    def sku(self, value: str):
        self._sku = value if value else f'sku-{generate_uid()}'

    sku = synonym('_sku', descriptor=sku)  # https://bit.ly/2xsVGAF

    def __str__(self):
        return self.sku

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class InventoryWhenSold(db.Model, BaseModel):
    __tablename__ = 'inventories_when_sold'
    name = db.Column(db.String(30))
    inventory = db.relationship(
        'Inventory',
        uselist=False,
        back_populates='when_sold',
        passive_deletes=True
    )

    def __init__(self, name):
        """SQLAlchemy model for inventories_when_sold table.

        :param name: Name of when sold
        """
        self.name = name

    def __str__(self):
        return self.name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Listing(db.Model, BaseModel):
    __tablename__ = 'listings'
    inventory_id = db.Column(
        db.Integer,
        db.ForeignKey('inventories.id', ondelete='CASCADE')
    )
    channel_id = db.Column(
        db.Integer,
        db.ForeignKey('channels.id', ondelete='CASCADE')
    )
    inventory = db.relationship(
        'Inventory',
        back_populates='channels',
        passive_deletes=True
    )
    channel = db.relationship(
        'Channel',
        back_populates='inventories',
        passive_deletes=True
    )
    etsy = db.relationship(
        'ListingEtsy',
        uselist=False,
        back_populates='listing'
    )

    def __init__(self, inventory_id, channel_id):
        """SQLAlchemy association table for inventories and channels"""
        self.inventory_id = inventory_id
        self.channel_id = channel_id

    def __repr__(self):
        return f"{self.inventory} in {self.channel}"


class ListingEtsy(db.Model, BaseModel):
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


class Channel(db.Model, BaseModel):
    __tablename__ = 'channels'
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'))
    platform = db.relationship('Platform', back_populates='channel')
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    inventories = db.relationship('Listing', back_populates='channel')
    etsy = db.relationship(
        'ChannelEtsy',
        uselist=False,
        back_populates='channel'
    )

    def __init__(self, platform_id, account_id):
        """SQLAlchemy model for channels table

        :param platform_id: ID of platform
        :param account_id: Account ID of a user
        """
        self.platform_id = platform_id
        self.account_id = account_id

    def __str__(self):
        return f'Etsy {self.etsy}' if self.etsy else 'N/A'

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class ChannelEtsy(db.Model, BaseModel):
    __tablename__ = 'channels_etsy'
    oauth_token = db.Column(db.String(255))
    oauth_token_secret = db.Column(db.String(255))
    shop_id = db.Column(db.String(255))
    shop_name = db.Column(db.String(255))
    user_id = db.Column(db.String(255))
    channel_id = db.Column(
        db.Integer,
        db.ForeignKey('channels.id', ondelete='CASCADE'),
    )
    channel = db.relationship(
        'Channel',
        uselist=False,
        back_populates='etsy',
        passive_deletes=True
    )

    def __init__(
            self,
            oauth_token: str,
            oauth_token_secret: str,
            shop_id: str,
            shop_name: str,
            user_id: str,
            channel_id: int
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
        self.channel_id = channel_id

    def __str__(self):
        return self.shop_name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Platform(db.Model, BaseModel):
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
