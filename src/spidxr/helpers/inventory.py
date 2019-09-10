from flask import current_app

from src.spidxr.models.merchant import Inventory


class Actioner:

    def __init__(self, action: str, inventories: list):
        self.inventories = inventories
        method = action.lower().replace(' ', '_')
        getattr(self, method)()

    def continue_selling_when_out_of_stock(self):
        current_app.logger.info('Continue selling...')
        pass

    def stop_selling_when_out_of_stock(self):
        current_app.logger.info('Stop selling...')
        pass

    def sync_to_channels(self):
        current_app.logger.info('Syncing to menus...')
        pass

    def link_channels(self):
        current_app.logger.info('Linking menus...')
        pass

    def update_quantity(self):
        current_app.logger.info('Updating quantity...')
        pass

    def delete_inventory(self):
        current_app.logger.info('Delete inventory...')
        pass
