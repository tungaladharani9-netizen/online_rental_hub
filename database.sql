CREATE DATABASE IF NOT EXISTS rental_housing_db;
USE rental_housing_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS owners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    owner_id INT NOT NULL,
    flat_type VARCHAR(50) NOT NULL,
    rent DECIMAL(10, 2) NOT NULL,
    facilities TEXT,
    rules TEXT,
    contact_number VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    image_path VARCHAR(255),
    location VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);
