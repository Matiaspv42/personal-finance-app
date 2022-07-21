create database chauchera;
\c chauchera
create table usuarios (id serial, email varchar(50) NOT NULL, password varchar(50) NOT NULL, balance_alimentos int, balance_deudas int, balance_ahorros int, balance_otros int);
alter table usuarios alter column balance_alimentos set default 0;
alter table usuarios alter column balance_deudas set default 0;
alter table usuarios alter column balance_ahorros set default 0;
alter table usuarios alter column balance_otros set default 0;