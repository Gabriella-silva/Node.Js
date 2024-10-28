/*APRENDI COMO MANIPULAR DADOS NO MYSQL APARTIR DO CMD*/


CREATE TABLE users(
    nome VARCHAR (32), 
    email VARCHAR (100),
    age INT
);

INSERT INTO users(nome,email,age) VALUES(
    "gabbie",
    "gabriellaferreira534@gmail.com",
    18
    
);

INSERT INTO newUsers(name,lastname,age,email) VALUES(
    "MIMI",
    "VI",
    31,
    "MIMI@MAIL"

)

INSERT INTO users(nome,email,age) VALUES(
    "emilly",
    "teste@gmail",
    13
);

INSERT INTO users(nome,email,age) VALUES(
    "Salvuccio",
    "fake@gmail",
    21
);
DELETE FROM users WHERE nome = "gabbie";
SELECT * FROM users Where age 21;

UPDATE users SET nome = "bibi" WHERE nome = "gabbie" ;