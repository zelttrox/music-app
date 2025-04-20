-- CREATE TABLE IF NOT EXISTS users (
--     uuid VARCHAR(255) NOT NULL,
--     username VARCHAR(255) NOT NULL,
--     password VARCHAR(255) NOT NULL,
--     role ENUM('user', 'artist', 'admin') NOT NULL
-- );

CREATE TABLE IF NOT EXISTS songs (
    id VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    track VARCHAR(255) NOT NULL
);
