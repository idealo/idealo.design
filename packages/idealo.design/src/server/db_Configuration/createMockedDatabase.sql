create database blog;
--go to database blog with \c blog and inserts following statements...
create table if not exists blogposts (
    id integer not null,
    title varchar(255) not null,
    nextpost varchar(255),
    previouspost varchar(255),
    categoryDisplayValue varchar(255) not null,
    categorySlug varchar(255) not null,
    slug varchar(255) not null,
    date timestamp not null,
    image varchar(255) not null,
    blogpostcontent jsonb not null,
    autor varchar(255),
    email varchar(255),
    instagram varchar(255),
    twitter varchar(255),
    github varchar(255),
    facebook varchar(255),
    primary key(id)
);
create sequence blogposts_id_seq;
alter table blogposts alter id set default nextval('blogposts_id_seq');
Alter table blogposts add COLUMN if not exists isArchived integer CHECK(isArchived between 0 and 1) not null default 0;
-- commands to fill database
delete from blogposts;
insert into blogposts (
    id,
    title,
    nextpost,
    previouspost,
    categoryDisplayValue,
    categorySlug,
    slug,
    date,
    image,
    blogpostcontent,
    autor
)
values
(
    1,
    'Docker',
    NULL,
    'Einstieg-in-die-Welt-der-Datenbanken',
    'Docker',
    'docker',
    'Docker',
    '2021-01-20 14:45:45.351Z',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/2000px-Docker_%28container_engine%29_logo.svg.png',
    '{"blocks": [{"key": "3aovb", "data": {}, "text": "Das ist Docker.", "type": "unstyled", "depth": 0, "entityRanges": [], "inlineStyleRanges": []}], "entityMap": {}}',
    'Eda Güngör'
);