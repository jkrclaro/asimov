FROM python:alpine3.7
RUN apk add --update py-pip
RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev && \
    apk add postgresql-dev
RUN apk add libffi-dev

# Create /app directory in docker and change directory to /app
RUN mkdir /app
WORKDIR /app

# Install pipenv, move Pipefile files and install the Pipfile dependencies
RUN pip install pipenv
COPY Pipfile .
COPY Pipfile.lock .
RUN pipenv install --system --deploy

# Move everything to docker
COPY . .

EXPOSE 8000
CMD ["gunicorn", "src.wsgi:application", "-b", "0.0.0.0:8000"]