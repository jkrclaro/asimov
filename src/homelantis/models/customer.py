from . import db, BaseModel


class Customer(db.Model, BaseModel):
    __tablename__ = 'customers'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates='customer')

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

    def __str__(self):
        return self.name

    def __repr__(self):
        return '%s(%r)' % (self.__class__, self.__dict__)
