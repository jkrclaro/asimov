from sqlalchemy.orm import synonym

from . import db, BaseModel, generate_uid


class Merchant(db.Model, BaseModel):
    __tablename__ = 'merchants'
    name = db.Column(db.String(255))
    address = db.Column(db.String(255))
    apartment = db.Column(db.String(255))
    city = db.Column(db.String(255))
    zip_code = db.Column(db.String(255))
    country = db.Column(db.String(255))
    county = db.Column(db.String(255))
    phone_number = db.Column(db.String(255))
    website = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates='merchant')
    products = db.relationship('Product', backref='merchants')
    menus = db.relationship('Menu', backref='merchants')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.address

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Product(db.Model, BaseModel):
    __tablename__ = 'products'
    _uid = db.Column('uid', db.String(255))
    title = db.Column(db.String(255))
    description = db.Column(db.Text)
    merchant_id = db.Column(db.Integer, db.ForeignKey('merchants.id', ondelete='CASCADE'))
    variants = db.relationship('Variant', backref='products')

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


class Variant(db.Model, BaseModel):
    __tablename__ = 'variants'
    title = db.Column(db.String(255))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id', ondelete='CASCADE'))

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Inventory(db.Model, BaseModel):
    __tablename__ = 'inventories'
    _sku = db.Column('sku', db.String(255))
    price = db.Column(db.Integer)
    quantity = db.Column(db.Integer)
    is_active = db.Column(db.Boolean, default=False)
    variant_id = db.Column(db.Integer, db.ForeignKey('variants.id', ondelete='CASCADE'))
    menus = db.relationship('Listing', back_populates='inventory', passive_deletes=True)

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


class Listing(db.Model, BaseModel):
    __tablename__ = 'listings'
    inventory_id = db.Column(db.Integer, db.ForeignKey('inventories.id', ondelete='CASCADE'))
    menu_id = db.Column(db.Integer, db.ForeignKey('menus.id', ondelete='CASCADE'))
    inventory = db.relationship('Inventory', back_populates='menus')
    menu = db.relationship('Menu', back_populates='inventories')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Menu(db.Model, BaseModel):
    __tablename__ = 'menus'
    title = db.Column(db.String(255))
    is_active = db.Column(db.Boolean, default=False)
    merchant_id = db.Column(db.Integer, db.ForeignKey('merchants.id', ondelete='CASCADE'))
    inventories = db.relationship('Listing', back_populates='menu')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return f'{self.id}'

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)
