import scrapy

from ..items import LeadItem


class Foobar(scrapy.Spider):
    name = "foobar"

    def start_requests(self):
        urls = [
            'http://quotes.toscrape.com/page/1/',
            'http://quotes.toscrape.com/page/2/',
        ]
        for url in urls:
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        lead = LeadItem()
        lead['name'] = 'John'
        lead['website'] = 'N/A'
        lead['email'] = 'N/A'

        yield lead
