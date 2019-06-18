export $(cat production.env)
python db.py
export $(cat .env)