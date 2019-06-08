export $(cat production.env)
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
export $(cat .env)