#!/usr/bin/env bash
export SQLALCHEMY_DATABASE_URI=postgresql://developer:12345@localhost:5432/postgres
flask db upgrade
flask db migrate
flask db upgrade