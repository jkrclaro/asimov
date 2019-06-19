from marshmallow import (
    Schema,
    fields,
    validate,
    validates_schema,
    ValidationError
)


class SignupSchema(Schema):
    email = fields.Email(
        attribute='email',
        required=True,
        validate=validate.Length(min=3, max=320)
    )
    password = fields.Str(
        attribute='password',
        required=True,
        validate=validate.Length(
            min=8, error='Password must be atleast 8 characters long'
        )
    )
    confirm = fields.Str(attribute='confirm', required=True)
    name = fields.Str(
        attribute='name',
        validate=validate.Length(
            max=100,
            error='Enter a name that is less than 100 characters long'
        ),
    )

    @validates_schema
    def validate_password(self, data, **kwargs):
        if data['password'] != data['confirm']:
            raise ValidationError(
                'Re-enter your password confirmation so it matches your '
                'password',
                field_names='confirm'
            )


class LoginSchema(Schema):
    email = fields.Email(
        required=True,
        validate=validate.Length(min=3, max=320)
    )
    password = fields.Str(
        required=True,
        validate=validate.Length(
            min=8, error='Password must be atleast 8 characters long'
        )
    )


class ProfileEditSchema(Schema):
    email = fields.Email(
        attribute='email',
        validate=validate.Length(min=3, max=320)
    )
    currentpassword = fields.Str(
        attribute='currentpassword',
        validate=validate.Length(
            min=8, error='Password must be atleast 8 characters long'
        )
    )
    newpassword = fields.Str(
        attribute='newpassword',
        validate=validate.Length(
            min=8, error='Password must be atleast 8 characters long'
        )
    )
    confirmpassword = fields.Str(attribute='confirmpassword', required=True)

    @validates_schema
    def validate_password(self, data, **kwargs):
        if data['newpassword'] != data['confirmpassword']:
            raise ValidationError(
                'Re-enter your password confirmation so it matches your new '
                'password',
                field_names='confirmpassword'
            )
