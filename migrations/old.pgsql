alter table users add column is_confirmed TIMESTAMP;
alter table users drop column is_column;
alter table users drop column is_confirmed;
alter table users add column is_confirmed boolean;

ALTER TABLE users RENAME COLUMN name TO name;

alter table users alter column is_confirmed set default false