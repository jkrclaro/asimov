from sqlalchemy.orm import synonym

from . import db, BaseModel, generate_uid


class Product(db.Model, BaseModel):
    __tablename__ = 'products'
    _uid = db.Column('uid', db.String(255))
    title = db.Column(db.String(255))
    url = db.Column(db.String(255))
    caption = db.Column(db.String(255))
    description = db.Column(db.Text)
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id', ondelete='CASCADE'))
    etsy = db.relationship('ProductEtsy', uselist=False, back_populates='product')
    inventories = db.relationship('Inventory', backref='products')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

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
    section = db.Column(db.String(255))
    who_made_it = db.Column(db.String(30))
    what_is_it = db.Column(db.String(30))
    when_was_it_made = db.Column(db.String(30))
    tags = db.Column(db.Text)
    materials = db.Column(db.Text)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id', ondelete='CASCADE'))
    product = db.relationship('Product', back_populates='etsy')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.id

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Inventory(db.Model, BaseModel):
    __tablename__ = 'inventories'
    _sku = db.Column('sku', db.String(255))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=False)
    when_sold_id = db.Column(db.Integer, db.ForeignKey('inventories_when_sold.id', ondelete='CASCADE'))
    when_sold = db.relationship('InventoryWhenSold', back_populates='inventory')
    product_id = db.Column(db.Integer, db.ForeignKey('products.id', ondelete='CASCADE'))
    channels = db.relationship('Listing', back_populates='inventory', passive_deletes=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

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
    inventory = db.relationship('Inventory', uselist=False, back_populates='when_sold', passive_deletes=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Listing(db.Model, BaseModel):
    __tablename__ = 'listings'
    inventory_id = db.Column(db.Integer, db.ForeignKey('inventories.id', ondelete='CASCADE'))
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id', ondelete='CASCADE'))
    inventory = db.relationship('Inventory', back_populates='channels')
    channel = db.relationship('Channel', back_populates='inventories')
    etsy = db.relationship('ListingEtsy', uselist=False, back_populates='listing')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class ListingEtsy(db.Model, BaseModel):
    __tablename__ = 'listings_etsy'
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'))
    listing = db.relationship('Listing', uselist=False, back_populates='etsy')
    listing_etsy_id = db.Column(db.Integer)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __repr__(self):
        return self.listing_etsy_id


class Channel(db.Model, BaseModel):
    __tablename__ = 'channels'
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'))
    platform = db.relationship('Platform', back_populates='channel')
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    inventories = db.relationship('Listing', back_populates='channel')
    etsy = db.relationship('ChannelEtsy', uselist=False)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

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
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id', ondelete='CASCADE'))
    channel = db.relationship('Channel', uselist=False, back_populates='etsy')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.shop_name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Platform(db.Model, BaseModel):
    __tablename__ = 'platforms'
    name = db.Column(db.String(30), unique=True)
    channel = db.relationship('Channel', uselist=False, back_populates='platform')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)
