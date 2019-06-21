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
        error_messages={
            'required': 'Please enter a valid email.',
            'invalid': 'Please enter a valid email.',
            'null': 'Please enter a valid email.'
        }
    )
    password = fields.Str(
        attribute='password',
        required=True,
        validate=validate.Length(
            min=8, error='Your password must be at least 8 characters.'
        ),
        error_messages={
            'required': 'Please enter a password.',
            'null': 'Please enter a password.'
        }
    )
    confirm_password = fields.Str(
        attribute='confirm_password',
        required=False,
        allow_none=True
    )
    name = fields.Str(attribute='name', required=False, allow_none=True)

    @validates_schema(skip_on_field_errors=True)
    def validate_password(self, data, **kwargs):
        if data['password'] != data['confirm_password']:
            raise ValidationError(
                'Re-enter your password confirmation so it matches your password',
                field_names='confirm_password'
            )


class LoginSchema(Schema):
    email = fields.Email(
        attribute='email',
        required=True,
        error_messages={
            'required': 'Please enter a valid email.',
            'invalid': 'Please enter a valid email.',
            'null': 'Please enter a valid email.'
        }
    )
    password = fields.Str(
        attribute='password',
        required=True,
        validate=validate.Length(
            min=8, error='Your password must be at least 8 characters.'
        ),
        error_messages={
            'required': 'Please enter a password.',
            'null': 'Please enter a password.'
        }
    )
