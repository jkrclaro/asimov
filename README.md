# Webprecon

API service built with Flask for Webprecon.

## Documentation
TBA

## Installation
TBA

## Requirements
- Docker 1.12.6
- Python 3.7.2
- pip3

## Usage

```
pipenv shell
pipenv install
export FLASK_APP=app.py
export FLASK_ENV=development
flask run
```

## Development

To install awsebcli, use brew instead of pip. This error was using Python3.7 and awsebcli<=3.15.0
```
UnicodeDecodeError - 'ascii' codec can't decode byte 0xe2 in position 1287: ordinal not in range(128)
```

To run tests
```
pytest
```