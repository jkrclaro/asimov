import itsdangerous

secret_key = ''
password_salt = ''


def generate(data: dict):
    serializer = itsdangerous.URLSafeTimedSerializer(secret_key)
    return serializer.dumps(data, salt=password_salt)


def confirm(token: str, expiration: int=3600) -> str:
    serializer = itsdangerous.URLSafeTimedSerializer(secret_key)
    try:
        email = serializer.loads(token, salt=password_salt, max_age=expiration)
    except:
        email = ''

    return email
