from .auth import (
    ForgotPasswordForm,
    LoginForm,
    ConfirmForm,
    ResetPasswordForm,
    SignupForm
)
from .profile import EditPasswordForm, EditNameForm, EditEmailForm

from .product import ProductBaseForm
from .inventory import InventoryBaseForm, InventoryCreateForm
from .variant import VariantBaseForm
from .newsletter import NewsletterForm