import itsdangerous
from itsdangerous.exc import (
    SignatureExpired,
    BadData,
    BadHeader,
    BadPayload,
    BadSignature,
    BadTimeSignature,
)

secret_key = ''
salt = ''


def encrypt(data: str):
    serializer = itsdangerous.URLSafeTimedSerializer(secret_key)
    return serializer.dumps(data, salt=salt)


def decrypt(token: str, max_age: int = 86400) -> dict:
    serializer = itsdangerous.URLSafeTimedSerializer(secret_key)
    try:
        return serializer.loads(token, salt=salt, max_age=max_age)
    except (
            SignatureExpired,
            BadData,
            BadHeader,
            BadPayload,
            BadSignature,
            BadTimeSignature
    ) as decrypt_error:
        return ''
