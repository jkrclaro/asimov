from dataclasses import dataclass


@dataclass
class Netlify:
    access_token: str
    url: str = 'https://api.netlify.com/api/v1/'

    def create_site(self):
        return 0


if __name__ == '__main__':
    netlify = Netlify('12345')
    sites = netlify.get_sites()
