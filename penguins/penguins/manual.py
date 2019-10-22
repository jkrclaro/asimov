import csv
from bs4 import BeautifulSoup


def find_an_audiologist():
    with open('html/ishaa-find-an-audiologist.html') as html:
        soup = BeautifulSoup(html.read(), 'html.parser')
        anchors = soup.find_all('a', href=True)
        for anchor in anchors:
            lead = anchor.text.strip()
            lead = lead.split()

            if 'Dr.' in lead:
                del lead[0]

            if len(lead) > 1:
                name = lead[0]
                name = name.replace('Mr.', '')
                print(name, anchor['href'])


def audiologist():
    with open('html/ishaa-audiologist.html') as html:
        soup = BeautifulSoup(html.read(), 'html.parser')
        email = soup.find('a', {'class': 'email_link'})
        email = email['href'].replace('mailto:', '')

        anchors = soup.find_all('a', href=True)
        website = 'N/A'
        for anchor in anchors:
            href = anchor['href']
            if 'www' in href and 'togetherdigital.ie' not in href and 'ishaa.ie' not in href:
                website = href

        name = soup.find('h1')
        name = name.text
        name = name.replace(' MISHAA', '')
        name = name.strip()
        print(name, email, website)


def pointy():
    with open('html/pointy.html') as html:
        soup = BeautifulSoup(html.read(), 'html.parser')
        for li in soup.find_all('li'):
            latitude = li.get('data-lat')
            longtitude = li.get('data-lng')
            pointy_url = li.get('data-url')

            anchor = li.find('a')
            name = anchor.text
            print(name)


def acupunturecouncilofireland():
    """
    [x] Name
    [x] Address
    [x] Website
    [x] Email
    """
    domain = 'acupuncturecouncilofireland'
    clients = [['Name', 'Address', 'Website', 'Email']]

    for html_file in (f'{domain}.html', f'{domain}-2.html',):
        with open(f'html/{html_file}') as html:
            soup = BeautifulSoup(html.read(), 'html.parser')
            sabai_main = soup.find_all('div', {'class': 'sabai-col-xs-9 sabai-directory-main'})
            for index, main in enumerate(sabai_main):
                # NAME
                sabai_title = main.find('div', {'class': 'sabai-directory-title'})
                title = sabai_title.find('a')
                name = title.text.strip().split()[0]

                # ADDRESS
                sabai_location = main.find('div', {'class': 'sabai-directory-location'})
                address = sabai_location.find('span')
                try:
                    address = address.text.strip()
                    address = address.replace('undefined ', '')
                    address = address.replace('undefined', '').strip()
                except AttributeError:
                    address = 'N/A'

                # WEBSITE
                sabai_website = main.find('div', {'class': 'sabai-directory-contact-website'})
                try:
                    website = sabai_website.find('a')
                    website = website.get('href').strip()
                except AttributeError:
                    website = 'N/A'

                sabai_email = main.find('div', {'class': 'sabai-directory-contact-email'})
                try:
                    email = sabai_email.find('a')
                    email = email.text.strip()
                    email = email.replace(';', '')
                except AttributeError:
                    email = 'N/A'

                irish_counties = (
                    'Carlow', 'Cavan', 'Clare', 'Cork', 'Donegal', 'Dublin', 'Galway',
                    'Kerry', 'Kildare', 'Kilkenny', 'Laois', 'Leitrim', 'Limerick',
                    'Longford', 'Louth', 'Mayo', 'Meath', 'Monaghan', 'Offaly',
                    'Roscommon', 'Sligo', 'Tipperary', 'Waterford', 'Westmeath',
                    'Wexford', 'Wicklow', 'Antrim', 'Armagh', 'Down', 'Fermanagh',
                    'Londonderry', 'Tyrone'
                )
                for irish_county in irish_counties:
                    if irish_county in address:
                        address = irish_county.strip()
                        break
                if address not in irish_counties:
                    address = '???'

                lead = [name, address, website, email]
                email_exists  = False
                for client in clients:
                    lead_email = lead[3]
                    client_email = client[3]
                    if lead_email == client_email:
                        email_exists = True
                        break

                if not email_exists:
                    clients.append(lead)

            with open(f'csv/{domain}.csv', 'w', newline='') as csv_file:
                writer = csv.writer(csv_file)
                for client in clients:
                    writer.writerow(client)
                csv_file.close()


def main():
    # pointy()
    # acupunturecouncilofireland()
    # find_an_audiologist()
    audiologist()


if __name__ == '__main__':
    main()
