from flask import flash


def flash_errors(errors: list) -> None:
    """Flashes error message then removes it from the list.

    :param errors: Flask-WTF form errors that needs to be removed once flashed
    :return: None
    """
    for index, error in enumerate(errors[:]):
        flash(error, 'danger')
        errors.remove(error)
