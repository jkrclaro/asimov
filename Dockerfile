FROM python:alpine3.7
RUN apk add --update py-pip
RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev && \
    apk add postgresql-dev
RUN apk add libffi-dev

# Pillow
RUN apk add jpeg-dev zlib-dev

# Create /server directory in docker and change directory to /server
RUN mkdir /server
WORKDIR /server

# Install pipenv, move Pipefile files and install the Pipfile dependencies
RUN pip install pipenv
COPY Pipfile .
COPY Pipfile.lock .
RUN pipenv install --system --deploy

# Move everything to docker
COPY . .

EXPOSE 8000
ENTRYPOINT ["gunicorn"]
CMD ["selfcarto.wsgi:application", "-b", "0.0.0.0:8000", "--worker-tmp-dir", "/dev/shm", "--workers", "2", "--threads", "4", "--worker-class", "gthread"]