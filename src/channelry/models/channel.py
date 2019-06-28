from . import db


class Channel(db.Model):
    __tablename__ = 'channels'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.String(255))
    secret = db.Column(db.String(255))
    platform_id = db.Column(db.Integer, db.ForeignKey('platforms.id'))
    platform = db.relationship('Platform', back_populates='channel')
    account_id = db.Column(db.Integer, db.ForeignKey('accounts.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, token, secret, platform_id, account_id):
        self.token = token
        self.secret = secret
        self.platform_id = platform_id
        self.account_id = account_id

    def __repr__(self):
        return "<Channel(" \
               "token={token}," \
               "secret={secret}," \
               "platform_id={platform_id}," \
               "account_id={account_id}" \
               ")>".format(
                token=self.token,
                secret=self.secret,
                platform_id=self.platform_id,
                account_id=self.account_id
                )


class Platform(db.Model):
    __tablename__ = 'platforms'
    __table_args__ = {'extend_existing': True}
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30))
    channel = db.relationship('Channel', uselist=False, back_populates='platform')
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return '<Platform(' \
               'id={id},' \
               'name={name}' \
               ')>'.format(
                id=self.id,
                name=self.name
                )
