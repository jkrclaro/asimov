# Developer Guide

## Usage

```
pipenv shell
pipenv install
export FLASK_APP=src/server.py
export FLASK_ENV=development
flask run
```

## Setup

For Mac users. Recommended .bash_profile setup.
```
# Setting PATH for Python 3.7
# The original version is saved in .bash_profile.pysave
PATH="/Users/jkrclaro/Library/Python/3.7/bin:${PATH}"
export PATH

alias python=python3
alias pip=pip3
alias d=docker
alias dc=docker-compose
```

To run tests
```
pytest
```