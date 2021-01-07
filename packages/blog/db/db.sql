create database blog;
create table if not exists blogposts (
    id integer not null,
    title varchar(30) not null,
    nextpost varchar(30) not null,
    previouspost varchar(30) not null,
    categoryDisplayValue varchar(30) not null,
    categorySlug varchar(30) not null,
    slug varchar(30) not null,
    date varchar(30) not null,
    image varchar(30) not null,
    text text not null,
    category varchar(30) not null,
    primary key(id)
);

create table if not exists accounts (
    firstname varchar(15) not null,
    lastname varchar(15) not null,
    email varchar(30) not null,
    instagram varchar(30) not null,
    twitter varchar(30) not null,
    github varchar(30) not null,
    facebook varchar(30) not null,
    primary key(email)
);
