CREATE DATABASE bookmarklet_db;

USE bookmarklet_db;

CREATE TABLE bookmarks (
  id INT NOT NULL AUTO_INCREMENT,
  url VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);