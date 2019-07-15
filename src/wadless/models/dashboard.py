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
    when_sold_id = db.Column(db.Integer, db.ForeignKey('inventories_when_sold.id', ondelete='CASCADE'))
    variant_id = db.Column(db.Integer, db.ForeignKey('variants.id', ondelete='CASCADE'))
    menus = db.relationship('Listing', back_populates='inventory', passive_deletes=True)
    when_sold = db.relationship('InventoryWhenSold', back_populates='inventory')

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
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'))
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    platform = db.relationship('Platform', uselist=False, back_populates='menu')
    inventories = db.relationship('Listing', back_populates='menu')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return f'{self.id}'

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)


class Platform(db.Model, BaseModel):
    __tablename__ = 'platforms'
    name = db.Column(db.String(30), unique=True)
    menu = db.relationship('Menu', uselist=False, back_populates='platform')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)
