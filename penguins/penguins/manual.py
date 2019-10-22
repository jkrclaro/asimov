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


def main():
    # find_an_audiologist()
    audiologist()


if __name__ == '__main__':
    main()
