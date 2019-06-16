CREATE DATABASE channelry;
GRANT ALL PRIVILEGES ON DATABASE channelry TO pxdcastadmin;

\connect channelry;
CREATE SCHEMA account;
GRANT USAGE ON SCHEMA account TO pxdcastadmin;

CREATE TABLE users
(
    id serial PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR (355) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
)
