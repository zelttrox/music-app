CREATE TABLE IF NOT EXISTS applies (
    number INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    pro_mail VARCHAR(255) NOT NULL,
    label VARCHAR(255) NOT NULL,
    tunecore VARCHAR(255) NOT NULL,
    copyrights VARCHAR(255) NOT NULL
);
