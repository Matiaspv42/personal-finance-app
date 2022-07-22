-- se crea la base de datos y se crea la tabla usuarios

create database chauchera;
\c chauchera
create table usuarios (id serial, email varchar(50) NOT NULL, password varchar(50) NOT NULL, balance_alimentos int, balance_deudas int, balance_ahorros int, balance_otros int) primary key(id);
alter table usuarios alter column balance_alimentos set default 0;
alter table usuarios alter column balance_deudas set default 0;
alter table usuarios alter column balance_ahorros set default 0;
alter table usuarios alter column balance_otros set default 0;

-- se crea tabla transacciones

create table transsacciones (id serial, fecha date, cantidad_dinero int, categoria_destino varchar(20), id_usuario int, foreign key(id_usuario) references usuarios(id));
alter table transsacciones add categoria_emisora varchar(20) default null;

-- se crea tabla recordatorios

create table recordatorios (id serial, fecha date, descripcion varchar(150), id_usuario int, foreign key(id_usuario) references usuarios(id));