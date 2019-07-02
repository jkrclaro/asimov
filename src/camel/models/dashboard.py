import string
import random

from . import db


def generate_unique_id():
    unique_id = ''.join(
        random.SystemRandom().choice(string.ascii_letters + string.digits)
        for _ in range(14)
    )
    return unique_id


class Product(db.Model):
    __tablename__ = 'products'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    status = db.Column(db.String(30))
    unique_id = db.Column(db.String(255))
    title = db.Column(db.String(255))
    category = db.Column(db.String(255))
    renewal = db.Column(db.String(30))
    type = db.Column(db.String(30))
    description = db.Column(db.String(255))
    inventories = db.relationship('Inventory', backref='products')
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )

    def __init__(
            self,
            title: str,
            account_id: int,
            category: str,
            renewal: str,
            kind: str,
            description: str,
            status: str = 'unlisted'
    ):
        """SQLAlchemy model for Product

        :param title: Title of product.
        :param account_id: Account ID associated that owns this product.
        :param category: Category of this product.
        :param renewal: How product will be renewed after expiring.
        :param kind: If product is digital or physical.
        :param description: Long description of product.
        """
        self.title = title
        self.account_id = account_id
        self.category = category
        self.renewal = renewal
        self.kind = kind
        self.description = description
        self.status = status
        self.unique_id = f'product_{generate_unique_id()}'

    def __repr__(self):
        return f"{self.account_id}'s {self.title}"


class Inventory(db.Model):
    __tablename__ = 'inventories'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer)
    sku = db.Column(db.String(255))
    when_sold = db.Column(db.String(30))
    incoming = db.Column(db.Integer)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    channels = db.relationship('Listing', back_populates='inventory')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )

    def __init__(
            self,
            product_id: int,
            quantity: int,
            sku: str,
            when_sold: str,
            incoming: int
    ):
        """SQLAlchemy model for Product

        :param product_id: ID for SQLAlchemy model of Product
        :param quantity: Number of available stocks
        :param sku: Stock keeping unit for this inventory
        :param when_sold: What to do when inventory is sold out
        :param incoming: Number of stocks incoming
        """
        self.product_id = product_id
        self.quantity = quantity
        self.sku = f'sku_{generate_unique_id()}'
        self.when_sold = when_sold
        self.incoming = incoming

    def __repr__(self):
        return f"{self.product.title} has {self.quantity} in stock"


class Listing(db.Model):
    __tablename__ = 'listings'
    __table_args__ = {'extend_existing': True}
    inventory_id = db.Column(
        db.Integer,
        db.ForeignKey('inventories.id'),
        primary_key=True
    )
    channel_id = db.Column(
        db.Integer,
        db.ForeignKey('channels.id'),
        primary_key=True
    )
    inventory = db.relationship('Inventory', back_populates='channels')
    channel = db.relationship('Channel', back_populates='inventories')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )

    def __init__(self, inventory_id, channel_id):
        self.inventory_id = inventory_id
        self.channel_id = channel_id

    def __repr__(self):
        return f"{self.inventory} in {self.channel}"


class Channel(db.Model):
    __tablename__ = 'channels'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(255))
    secret = db.Column(db.String(255))
    shop_id = db.Column(db.String(255))
    shop_name = db.Column(db.String(255))
    user_id = db.Column(db.String(255))
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'))
    platform = db.relationship('Platform', back_populates='channel')
    inventories = db.relationship('Listing', back_populates='channel')
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )

    def __init__(
            self,
            token: str,
            secret: str,
            platform_id: int,
            account_id: str,
            shop_id: str,
            shop_name: str,
            user_id: str
    ):
        self.token = token
        self.secret = secret
        self.platform_id = platform_id
        self.account_id = account_id
        self.shop_id = shop_id
        self.shop_name = shop_name
        self.user_id = user_id

    def __repr__(self):
        return f"{self.platform.name.title()}'s {self.shop_name}"


class Platform(db.Model):
    __tablename__ = 'platforms'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), unique=True)
    channel = db.relationship(
        'Channel',
        uselist=False,
        back_populates='platform'
    )
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f'{self.name}'
