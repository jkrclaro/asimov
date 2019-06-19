import itsdangerous

secret_key = ''
password_salt = ''


def generate_confirmation_token(email: str):
    serializer = itsdangerous.URLSafeTimedSerializer(secret_key)
    return serializer.dumps(email, salt=password_salt)


def confirm_conformation_token(token: str, expiration: int=3600) -> str:
    serializer = itsdangerous.URLSafeTimedSerializer(secret_key)
    try:
        email = serializer.loads(token, salt=password_salt, max_age=expiration)
    except:
        email = ''

    return email
