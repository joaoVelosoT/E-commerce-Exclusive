CREATE DATABASE ecommerceexclusive;

USE ecommerceexclusive;


CREATE TABLE cliente(
	id_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
	nome_cliente VARCHAR(100) NOT NULL,
    email_cliente VARCHAR(256) NOT NULL UNIQUE,
    senha_cliente VARCHAR(100) NOT NULL,
    cpf_cliente VARCHAR(11) NOT NULL UNIQUE
);
INSERT INTO cliente(nome_cliente,email_cliente,senha_cliente,cpf_cliente) VALUES
("Joao Vitor","email@teste","senhateste","46757911802");
SELECT * FROM cliente;

CREATE TABLE categorias(
	id_categoria INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_categoria VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO categorias(nome_categoria) VALUES
("Eletronicos");

SELECT * FROM categorias;

CREATE TABLE vendedores(
	id_vendedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_vendedor VARCHAR(100) NOT NULL,
    email_vendedor VARCHAR(256) NOT NULL UNIQUE,
    senha_vendedor VARCHAR(100) NOT NULL UNIQUE,
    cnpj_vendedor VARCHAR(14) NOT NULL UNIQUE
);

INSERT INTO vendedores(nome_vendedor,email_vendedor,senha_vendedor,cnpj_vendedor) VALUES
("Samsung", "samsung123@gmail.com","senhasamsung123","57861585000151");

SELECT * FROM vendedores;


CREATE TABLE produtos (
    id_produto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_produto VARCHAR(100) NOT NULL,
    descricao_produto VARCHAR(1000) NOT NULL,
    preco_produto DOUBLE NOT NULL,
    quantidade_produto INT NOT NULL,
    id_categoria INT NOT NULL,
    id_vendedor INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
    FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_vendedor)
);

-- ALTER TABLE produtos ADD quantidade_produto INT NOT NULL;

-- DELETE FROM produtos WHERE id_produto = 1;

INSERT INTO produtos(nome_produto,descricao_produto,preco_produto,quantidade_produto,id_categoria,id_vendedor) VALUES
("Samsung Galaxy S23 256 Gb 5g Preto 8 Gb Ram",
 "O Samsung Galaxy S23 5G é ideal para quem busca tecnologia. Ele possui o tipo de processador Octa Core, com velocidade 3.36GHz, 2.8GHz e 2GHz, tela com 6,1'', tecnologia AMOLED dinâmico 2X, resolução 2340 x 1080 (FHD+) e taxa de atualização máxima com 120 Hz.",
 2.875,
 100,
 1,
 1
 );
 
 -- ALTER TABLE produtos MODIFY id_categoria INT NOT NULL;
 -- ALTER TABLE produtos MODIFY id_vendedor INT NOT NULL;
 
 SELECT * FROM produtos;



CREATE TABLE imagens_produtos(
	id_imagem_produto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    url_imagem VARCHAR(255) NOT NULL,
    descricao_imagem VARCHAR(255) NOT NULL,
    id_produto INT NOT NULL,
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto) ON DELETE CASCADE
);



INSERT INTO imagens_produtos(url_imagem,descricao_imagem,id_produto) VALUES
("https://http2.mlstatic.com/D_NQ_NP_969408-MLU75401927010_042024-O.webp",
"Samsung Galaxy S23 256 Gb 5g Preto 8 Gb Ram, mostrando a trazeira e a frente",
1
);

CREATE TABLE cartoes_clientes(
	id_cartao_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    numero_cartao VARCHAR(16) NOT NULL ,
    nome_no_cartao VARCHAR(255) NOT NULL,
    validade DATE NOT NULL,
    cvv VARCHAR(4) NOT NULL,
    apelido_cartao VARCHAR(100),
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) ON DELETE CASCADE
);

INSERT INTO cartoes_clientes(numero_cartao,nome_no_cartao,validade,cvv,apelido_cartao,id_cliente) VALUES
("5488907073901239",
"Joao Vitor Veloso T",
'2026-01-08',
"964",
"Nubank Credito",
1
);

SELECT * FROM cartoes_clientes;

CREATE TABLE enderecos_clientes(
	id_endereco_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    rua VARCHAR(255) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(100) NOT NULL,
    cep VARCHAR(20) NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) ON DELETE CASCADE
);

INSERT INTO enderecos_clientes(rua,cidade,estado,cep,id_cliente) VALUES
("Avenida Valdete Guedes de Aquino",
"Paragominas",
"Pará",
"68630565",
1
);

SELECT * FROM enderecos_clientes;

SELECT * FROM imagens_produtos;

CREATE TABLE pedidos(
	id_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    data_pedido DATE NOT NULL,
    preco_total DOUBLE NOT NULL,
	id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente) ON DELETE CASCADE
);

INSERT INTO pedidos(data_pedido,preco_total,id_cliente) VALUES
('2024-09-08',2.875,1);
	

SELECT * FROM pedidos;

CREATE TABLE itens_pedidos(
	id_itens_pedido INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_pedido INT NOT NULL,
    id_produto INT NOT NULL,
    quantidade INT NOT NULL,
    preco_unitario DOUBLE NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);


INSERT INTO itens_pedidos(id_pedido,id_produto,quantidade,preco_unitario) VALUES
(1,1,1,2.875);

SELECT * FROM itens_pedidos;

CREATE TABLE entregas(
	id_entrega INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_endereco_entrega INT NOT NULL,
    id_pedido INT NOT NULL,
    data_envio DATE NOT NULL,
    data_entrega_estimada DATE NOT NULL,
    data_entrega DATE NOT NULL,
    status ENUM('pendente','enviado','entregue','cancelado') DEFAULT 'pendente',
    FOREIGN KEY (id_endereco_entrega) REFERENCES enderecos_clientes(id_endereco_cliente),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

-- ALTER TABLE entregas MODIFY status ENUM('pendente','enviado','entregue','cancelado') DEFAULT 'pendente';

INSERT INTO entregas(id_endereco_entrega,id_pedido,data_envio,data_entrega_estimada,data_entrega) VALUES
(1,1,'2024-09-08','2024-09-13','2024-08-10');



UPDATE entregas SET status = 'entregue' WHERE id_entrega = 1;