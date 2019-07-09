from flask import current_app

from src.camel.models.dashboard import Inventory


class Action:

    def __init__(self, action: str, inventories: list):
        self.inventories = inventories
        method = action.lower().replace(' ', '_')
        getattr(self, method)()

    def continue_selling_when_out_of_stock(self):
        pass

    def stop_selling_when_out_of_stock(self):
        pass

    def sync_to_channels(self):
        for inventory in self.inventories:
            inventory = Inventory.query.get(inventory)
            for channel in inventory.channels:
                current_app.logger.info(channel)
        pass

    def link_channels(self):
        pass

    def update_quantity(self):
        pass

    def delete_inventory(self):
        pass
