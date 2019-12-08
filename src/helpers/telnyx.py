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
