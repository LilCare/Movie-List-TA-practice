DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movieList (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(20),
  watched TINYINT NOT NULL DEFAULT 0
);

INSERT INTO movieList(title, watched)
VALUES ('Mean Girls'), ('Hackers'), ('The Grey'), ('Sunshine'), ('Ex Machina');