CREATE TABLE IF NOT EXISTS users (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('user', 'artist', 'admin') NOT NULL DEFAULT 'user',
    dislay_name VARCHAR(255)
    profile_picture VARCHAR(255),
    bio VARCHAR(255)
);
