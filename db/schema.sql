DROP DATABASE IF EXISTS kionDB; 

CREATE DATABASE kionDB;

USE kionDB; 

CREATE TABLE user (
    id INT AUTO_INCREMENT, 
    name VARCHAR(200),
    email VARCHAR(200) NOT NULL UNIQUE, 
    PRIMARY KEY(id)
);
