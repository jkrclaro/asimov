import telnyx


def get_phones(client: telnyx) -> list:
    """

    :param client:
    :return:
    """
    return [
        {'number': phone['phone_number'], 'platform': 'telnyx'}
        for phone in client.MessagingPhoneNumber.list()['data']
    ]


def sms_create(client: telnyx, message: dict) -> (str, str):
    """

    :param client:
    :param message:
    :return:
    """
    response = {}
    category = 'danger'

    try:
        response = client.Message.create(**message)
        if response:
            message = 'Message sent via Telnyx'
            category = 'success'
        else:
            message = '???'
    except telnyx.error.PermissionError as permission_error:
        message = permission_error.errors[0]['detail']
    except telnyx.error.APIConnectionError as api_connection_error:
        message = api_connection_error.user_message

    return message, category
