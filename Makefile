client:
	cd frontend && npm run start
admin:
	source ~/virtualenvs/auricle/bin/activate && cd backend && echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'jkrclaro@gmail.com', 'basketball')" | python manage.py shell
static:
	source ~/virtualenvs/auricle/bin/activate && cd backend && python manage.py collectstatic --no-input
migrate:
	source ~/virtualenvs/auricle/bin/activate && cd backend && python manage.py makemigrations
	source ~/virtualenvs/auricle/bin/activate && cd backend && python manage.py migrate
server:
	source ~/virtualenvs/auricle/bin/activate && cd backend && gunicorn --bind 0.0.0.0:8000 --workers 4 --reload auricle.wsgi:application
