FROM python:3.8-alpine

ENV PYTHONBUFFERED 1
RUN apk update
RUN apk add postgresql-dev gcc python3-dev musl-dev # psycopg2
RUN apk add gcc musl-dev libxslt-dev # libxml
RUN apk add python3-dev jpeg-dev zlib-dev # Pillow
RUN mkdir /app
WORKDIR /app
COPY requirements.txt /app/
RUN pip3 install -r requirements.txt
COPY . /app/

CMD ["gunicorn", "--bind", "0.0.0.0:8000", "asimov.wsgi:application"]