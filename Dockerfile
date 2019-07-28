FROM python:alpine3.7
RUN apk add --update py-pip
RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev && \
    apk add postgresql-dev
RUN apk add libffi-dev

# Create /app directory in docker and change directory to /app
RUN mkdir /server
WORKDIR /server

# Install pipenv, move Pipefile files and install the Pipfile dependencies
RUN pip install pipenv
COPY Pipfile .
COPY Pipfile.lock .
RUN pipenv install --system --deploy

# Move everything to docker
RUN mkdir src/
COPY src/ src/
COPY app.py .

EXPOSE 5000
ENTRYPOINT ["gunicorn"]
CMD ["app:app", "-b", "0.0.0.0:5000", "--worker-tmp-dir", "/dev/shm", "--workers", "2", "--threads", "4", "--worker-class", "gthread"]