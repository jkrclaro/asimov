FROM python:alpine3.7
RUN apk add --update py-pip
RUN apk update && \
    apk add --virtual build-deps gcc python-dev musl-dev && \
    apk add postgresql-dev
RUN apk add libffi-dev
RUN mkdir /app
WORKDIR /app
RUN pip install pipenv
COPY Pipfile .
RUN pipenv --python 3.7
COPY . .
EXPOSE 5000
ENTRYPOINT ["gunicorn"]
CMD ["app:app", "-b", "0.0.0.0:5000"]
