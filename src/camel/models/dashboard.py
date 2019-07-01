from . import db


class Product(db.Model):
    __tablename__ = 'products'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    category = db.Column(db.String(255))
    renewal = db.Column(db.String(30))
    type = db.Column(db.String(30))
    description = db.Column(db.String(255))
    inventory = db.relationship(
        'Inventory',
        uselist=False,
        back_populates='product'
    )
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
            description: str
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

    def __repr__(self):
        return '<Product(id={id},title={title},category={category},' \
           'renewal={renewal},kind={kind},description={description})>'.format(
            id=self.id,
            title=self.title,
            category=self.category,
            renewal=self.renewal,
            kind=self.kind,
            description=self.description
            )


class Inventory(db.Model):
    __tablename__ = 'inventories'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    product = db.relationship('Product', back_populates='inventory')
    channels = db.relationship('Listing', back_populates='inventory')
    quantity = db.Column(db.Integer)
    sku = db.Column(db.String(255))
    when_sold = db.Column(db.String(30))
    incoming = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(
        db.DateTime,
        server_default=db.func.now(),
        server_onupdate=db.func.now()
    )

    def __init__(
            self,
            product_id: int,
            channels: list,
            quantity: int,
            sku: str,
            when_sold: str,
            incoming: int
    ):
        """SQLAlchemy model for Product

        :param product_id: ID for SQLAlchemy model of Product
        :param channels: List of channels where inventory is current sold to
        :param quantity: Number of available stocks
        :param sku: Stock keeping unit for this inventory
        :param when_sold: What to do when inventory is sold out
        :param incoming: Number of stocks incoming
        """
        self.product_id = product_id
        self.channels = channels
        self.quantity = quantity
        self.sku = sku
        self.when_sold = when_sold
        self.incoming = incoming


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
        return '<Channel(token={token},secret={secret},' \
           'platform_id={platform_id},account_id={account_id})>'.format(
                token=self.token,
                secret=self.secret,
                platform_id=self.platform_id,
                account_id=self.account_id
            )


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
        return '<Platform(id={id},name={name})>'.format(
            id=self.id,
            name=self.name
        )
