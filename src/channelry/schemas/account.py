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
    confirm_password = fields.Str(attribute='confirm_password', required=True)
    name = fields.Str(
        attribute='name',
        validate=validate.Length(
            max=100,
            error='Enter a name that is less than 100 characters long'
        ),
        required=False
    )

    @validates_schema(skip_on_field_errors=True)
    def validate_password(self, data, **kwargs):
        if data['password'] != data['confirm_password']:
            raise ValidationError(
                'Re-enter your password confirmation so it matches your password',
                field_names='confirm_password'
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
        validate=validate.Length(min=3, max=320),
        required=False,
        allow_none=True
    )
    currentpassword = fields.Str(
        attribute='currentpassword',
        validate=validate.Length(
            min=8, error='Password must be atleast 8 characters long'
        ),
        required=False,
        allow_none=True
    )
    newpassword = fields.Str(
        attribute='newpassword',
        validate=validate.Length(
            min=8, error='Password must be atleast 8 characters long'
        ),
        required=False,
        allow_none=True
    )
    confirmpassword = fields.Str(
        attribute='confirmpassword',
        required=False,
        allow_none=True
    )

    @validates_schema
    def validate_password(self, data, **kwargs):
        passwords = ('newpassword', 'confirmpassword', 'currentpassword')
        in_only = set(passwords) - set(self.only)
        excluded = set(passwords) - set(self.exclude)

        if in_only and not excluded:
            if data['newpassword'] != data['confirmpassword']:
                raise ValidationError(
                    'Re-enter your password confirmation so it matches your new password',
                    field_names='confirm_password'
                )
