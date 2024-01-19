CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telefone VARCHAR(20),
    coordenada_x DECIMAL,
    coordenada_y DECIMAL
);