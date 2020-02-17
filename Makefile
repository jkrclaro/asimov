client:
	cd frontend && npm run start
admin:
	source ~/virtualenvs/earcast/bin/activate && cd backend && echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('admin', 'jkrclaro@gmail.com', 'basketball')" | python manage.py shell
static:
	source ~/virtualenvs/earcast/bin/activate && cd backend && python manage.py collectstatic --no-input
migrate:
	source ~/virtualenvs/earcast/bin/activate && cd backend && python manage.py makemigrations
	source ~/virtualenvs/earcast/bin/activate && cd backend && python manage.py migrate
virtualenv:
	mkdir -p ~/virtualenvs && virtualenv ~/virtualenvs/earcast --python=python3.8 && source ~/virtualenvs/earcast/bin/activate && pip install -r backend/requirements.txt
server:
	source ~/virtualenvs/earcast/bin/activate && cd backend && gunicorn --bind 0.0.0.0:8000 --workers 4 --reload server.wsgi:application
reset:
	make virtualenv
	source ~/virtualenvs/earcast/bin/activate && make migrate
	source ~/virtualenvs/earcast/bin/activate && make admin
	source ~/virtualenvs/earcast/bin/activate && make static