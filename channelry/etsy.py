import requests
from requests_oauthlib import OAuth1


class Etsy:

    def __init__(self, api_key: str, secret_key: str):
        self.api_key = api_key
        self.secret_key = secret_key
        self.scopes = (
            'email_r',  # Read a member's email address
            'listings_r',  # Read a members's inactive and expired (i.e., non-public) listings.
            'listings_w',  # Create and edit a members's listings.
            'listings_d',  # Delete a members's listings.
            'transactions_r',  # Read a member's purchase and sales data. This applies to buyers as well as sellers.
            'transactions_w',  # Update a member's sales data.
            'billing_r',  # Read a member's Etsy bill charges and payments.
            'profile_r',  # Read a member's private profile information.
            'profile_w',  # Update a member's private profile information.
            'address_r',  # Read a member's shipping addresses.
            'address_w',  # Update and delete a member's shipping address.
            'favorites_rw',  # Add to and remove from a member's favorite listings and users.
            'shops_rw',  # Update a member's shop description, messages and sections.
            'cart_rw',  # Add and remove listings from a member's shopping cart.
            'recommend_rw',  # View, accept and reject a member's recommended listings.
            'feedback_r',  # View all details of a member's feedback (including purchase history.)
            'treasury_r',  # Read a member's treasuries and treasury comments.
            'treasury_w',  # Create and delete treasuries and treasury comments.
        )

    def request_token(self, scopes: list):
        """Perform OAuth authentication to get login URL.

        Get the login URL by via
        >> response = self.request_token(['email_r'])
        >> login_url = response.text

        :param scopes: Permission scopes to be enabled.
        """
        scopes = '&'.join(scopes)
        oauth = OAuth1(self.api_key, client_secret=self.secret_key)
        return requests.post(
            f'https://openapi.etsy.com/v2/oauth/request_token?scope={scopes}',
            auth=oauth
        )

if __name__ == '__main__':
    import os
    etsy = Etsy(os.environ['ETSY_API_KEY'], os.environ['ETSY_SECRET_KEY'])
    login_url = etsy.request_token
    print(login_url)
