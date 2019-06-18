"""change full_name to fullname

Revision ID: 26e83f12d75f
Revises: 
Create Date: 2019-06-17 13:42:05.240894

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '26e83f12d75f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.alter_column('users', 'full_name', new_column_name='fullname')
    pass


def downgrade():
    op.alter_column('users', 'fullname', new_column_name='full_name')
    pass
