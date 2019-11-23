# Migrations

Guide for those perfoming database migrations

## Requirements
- SQLAlchemy
- Alembic
- Flask-SQLAlchemy

# Ensure alembic_version is up to date with latest revision
- Connect via PSQL
- Match version in `alembic_versions` table with latest revision in `migrations/`


## Modifying existing tables

[Altering existing columns](https://stackoverflow.com/questions/41149554/default-for-column-xxxx-cannot-be-cast-automatically-to-type-boolean-in-postgr)

## Schema

https://stackoverflow.com/questions/3327312/how-can-i-drop-all-the-tables-in-a-postgresql-database