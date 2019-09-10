from flask import flash


def flash_form_errors(errors: dict) -> None:
    """Flashes error message then removes it from the list.

    :param errors: Flask-WTF form errors that needs to be removed once flashed
    :return: None
    """
    for field, errors in errors.items():
        for index, error in enumerate(errors[:]):
            flash(f'{error} for {field}', 'danger')
            errors.remove(error)
