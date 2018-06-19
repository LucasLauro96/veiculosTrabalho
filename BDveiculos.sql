create database veiculos;
use veiculos;

create table montadora(
	mon_codigo int not null primary key auto_increment,
    mon_nome varchar(30),
    mon_fantasia varchar(15),
    mon_pais varchar(20)
);

create table automovel(
	aut_codigo int not null primary key auto_increment,
    aut_modelo varchar(20),
    aut_cor varchar(30),
    aut_tipo varchar(15),
    aut_ano int,
    aut_valorcusto decimal(12,2),
    mon_codigo int,
    foreign key (mon_codigo) references montadora(mon_codigo)
);

insert into montadora(mon_nome, mon_fantasia, mon_pais)
value('Grupo Toyota', 'Toyota', 'Japão'),
	 ('GM chevy', 'Chevrolet', 'Estados Unidos'),
     ('Subaru LTDA', 'Subaru', 'Japão');

insert into automovel(
	aut_modelo,
    aut_cor,
    aut_tipo,
    aut_ano,
    aut_valorcusto,
    mon_codigo
    )
    values ('Corolla', 'Branco', 'Sedan', 2012, 80000, 1),
		   ('Corsa', 'Prata', 'Sedan', 2014, 25000, 2),
           ('WRX STI', 'Azul', 'Sedan Esportivo', 2010, 120000, 3); 

