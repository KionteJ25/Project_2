-- DROP DATABASE IF EXISTS project2_db;
-- Creates the database --
CREATE DATABASE project2_db;

use project2_db;

create table search (
id int not null auto_increment,
artist varchar(30) not null,
album varchar(30) not null,
track varchar(30) not null,
primary key(id)
);