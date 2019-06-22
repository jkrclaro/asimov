from flask import redirect, current_app


def url():
    return current_app.config.get('DASHBOARD_URL')


def go(uri):
    """Redirect user to any dashboard uri."""
    return redirect(f"{current_app.config.get('DASHBOARD_URL')}/{uri}")
