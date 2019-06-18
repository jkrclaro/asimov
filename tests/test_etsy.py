from channelry.etsy import Etsy


class TestEtsy(unittest.TestCase):

    def test_etsy(self):
        etsy = Etsy('12345')
        print(etsy.get_listings())
