create table if not exists components
(
    component_id
    serial,
    slug varchar(255) not null,
    title varchar (255) not null,
    readme text not null,
    updated_on timestamp with time zone default current_timestamp not null,
    primary key(component_id)
);

create table if not exists tags
(
    tag_id
    serial,
    tag_name
    varchar(255) not null,
    primary key(tag_id)
);

create table if not exists components_tags_map
(
    component_id integer not null,
    tag_id integer not null,
    primary key(component_id,tag_id),
    foreign key(component_id) references components(component_id) on delete cascade, foreign key(tag_id) references tags(tag_id)
);