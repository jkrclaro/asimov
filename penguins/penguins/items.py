import scrapy


class LeadItem(scrapy.Item):
    name = scrapy.Field()
    website = scrapy.Field()
    email = scrapy.Field()
