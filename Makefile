client:
	cd frontend && npm run start

server:
	source ~/virtualenvs/auricle/bin/activate && cd backend && python manage.py makemigrations
	source ~/virtualenvs/auricle/bin/activate && cd backend && python manage.py migrate
	source ~/virtualenvs/auricle/bin/activate && cd backend && gunicorn --bind 0.0.0.0:8000 --workers 4 auricle.wsgi:application
