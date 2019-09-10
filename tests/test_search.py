import unittest

import responses

from src.spidxr.search import Search


class TestSearch(unittest.TestCase):

    def setUp(self):
        self.search = Search()

    @responses.activate
    def test_itunes(self):
        url = 'https://itunes.apple.com/search?term=joe+rogan&media=podcast'
        data = {
            'resultCount': 1, 
            'results': [
                {
                    'wrapperType': 'track', 
                    'kind': 'podcast', 
                    'artistId': 974891224, 
                    'collectionId': 360084272, 
                    'trackId': 360084272, 
                    'artistName': 'Joe Rogan', 
                    'collectionName': 'The Joe Rogan Experience', 
                    'trackName': 'The Joe Rogan Experience', 
                    'collectionCensoredName': 'The Joe Rogan Experience', 
                    'trackCensoredName': 'The Joe Rogan Experience', 
                    'artistViewUrl': 'https://podcasts.apple.com/us/artist/joe-rogan/974891224?uo=4', 
                    'collectionViewUrl': 'https://podcasts.apple.com/us/podcast/the-joe-rogan-experience/id360084272?uo=4', 
                    'feedUrl': 'http://joeroganexp.joerogan.libsynpro.com/rss', 
                    'trackViewUrl': 'https://podcasts.apple.com/us/podcast/the-joe-rogan-experience/id360084272?uo=4', 
                    'artworkUrl30': 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/fa/9e/b0/fa9eb027-4a39-eed4-8c34-6af6c0fa6daf/source/30x30bb.jpg', 
                    'artworkUrl60': 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/fa/9e/b0/fa9eb027-4a39-eed4-8c34-6af6c0fa6daf/source/60x60bb.jpg', 
                    'artworkUrl100': 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/fa/9e/b0/fa9eb027-4a39-eed4-8c34-6af6c0fa6daf/source/100x100bb.jpg', 
                    'collectionPrice': 0.0, 
                    'trackPrice': 0.0, 
                    'trackRentalPrice': 0, 
                    'collectionHdPrice': 0, 
                    'trackHdPrice': 0, 
                    'trackHdRentalPrice': 0, 
                    'releaseDate': '2019-05-30T01:00:00Z', 
                    'collectionExplicitness': 'explicit', 
                    'trackExplicitness': 'explicit', 
                    'trackCount': 300, 
                    'country': 'USA', 
                    'currency': 'USD', 
                    'primaryGenreName': 'Comedy', 
                    'contentAdvisoryRating': 'Explicit', 
                    'artworkUrl600': 'https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/fa/9e/b0/fa9eb027-4a39-eed4-8c34-6af6c0fa6daf/source/600x600bb.jpg', 
                    'genreIds': ['1303', '26', '1318', '1450', '1324'], 
                    'genres': ['Comedy', 'Podcasts', 'Technology', 'Podcasting', 'Society & Culture']
                }
            ]
        }
        responses.add(responses.GET, url, json=data)
        podcasts = self.search.search_itunes('Joe Rogan', [])

        test_podcasts = [
            {
                'trackViewUrl': data['results'][0]['trackViewUrl'],
                'trackName': data['results'][0]['trackName'],
                'artistName': data['results'][0]['artistName'],
                'artworkUrl100': data['results'][0]['artworkUrl100']
            }
        ]
        assert podcasts == test_podcasts


if __name__ == '__main__':
    unittest.main()
