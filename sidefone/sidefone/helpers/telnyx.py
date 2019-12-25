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


def sms_build(payload: dict) -> dict:
    """Build SMS payload to be used for sending.

    :param payload:
    :return:
    """
    return {
        'from': payload['sender'],
        'to': payload['receiver'],
        'text': payload['message']
    }


def sms_send(client: telnyx, sms: dict) -> (str, str):
    """Send an SMS message.

    :param client:
    :param sms:
    :return:
    """
    message = ''
    category = 'danger'

    try:
        response = client.Message.create(**sms)
        if response:
            message = 'Message sent via Telnyx'
            category = 'success'
    except telnyx.error.PermissionError as permission_error:
        message = permission_error.errors[0]['detail']
    except telnyx.error.APIConnectionError as api_connection_error:
        message = api_connection_error.user_message
    except telnyx.error.InvalidRequestError as invalid_request_error:
        message = invalid_request_error
    except telnyx.error.AuthenticationError as authentication_error:
        message = authentication_error

    return message, category
