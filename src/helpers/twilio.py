from twilio.rest import Client


def get_phones(client: Client) -> list:
    """

    :param client:
    :return:
    """
    return [
        {'number': phone.phone_number, 'platform': 'twilio'}
        for phone in client.incoming_phone_numbers.list()
    ]


def get_contacts(client: Client) -> dict:
    """

    :param client:
    :return:
    """
    messages = client.messages.list()
    contacts = {}

    for message in messages:
        number = message.to
        if number not in contacts.keys():
            contacts[number] = {
                'last_message': message.body,
                'last_message_date_sent': message.date_sent,
            }

    return contacts
