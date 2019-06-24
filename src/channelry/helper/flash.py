from flask import flash


def flash_errors(errors: list) -> None:
    """Flashes error message then removes it from the list.

    :param errors:
    :return: None
    """
    for index, error in enumerate(errors[:]):
        flash(error, 'danger')
        errors.remove(error)
