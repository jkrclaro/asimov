import scrapy
from bs4 import BeautifulSoup

from ..items import LeadItem


class Ishaa(scrapy.Spider):
    name = 'ishaa'

    def start_requests(self):
        urls = [
            'https://www.ishaa.ie/find-an-audiologist'
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        soup = BeautifulSoup(response.text, 'lxml')
        anchors = soup.find_all('a', href=True)
        for anchor in anchors:
            if '/find-an-audiologist' in anchor['href']:
                lead = anchor.text.strip()
                lead = lead.split()

                if 'Dr.' in lead:
                    del lead[0]

                if len(lead) > 1:
                    name = lead[0]
                    name = name.replace('Mr.', '')
                    name = name.title()

                    if name != 'Find':
                        url = 'https://www.ishaa.ie' + anchor['href']
                        yield scrapy.Request(url, callback=self.parse_lead)

    def parse_lead(self, response):
        lead = LeadItem()
        soup = BeautifulSoup(response.text, 'lxml')

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

        lead['name'] = name
        lead['email'] = email
        lead['website'] = website

        return lead
