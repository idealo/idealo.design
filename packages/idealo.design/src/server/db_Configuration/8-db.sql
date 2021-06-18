create table if not exists components (
    component_id serial,
    title varchar(255) not null,
    primary key(component_id)
    );

create table if not exists tags (
    tag_id serial,
    tag_name varchar(255) not null,
    primary key(tag_id)
    );

create table if not exists components_tags_map (
    id serial,
    component_id integer not null,
    tag_id integer not null,
    primary key(id),
    foreign key (component_id) references components(component_id),
    foreign key (tag_id) references tags(tag_id)
    );

insert into components (
    title
)
values
(
    'Checkbox1'
),
(
    'Checkbox2'
),
(
    'Checkbox3'
),
(
    'Checkbox4'
),
(
    'Checkbox5'
),
(
    'Checkbox6'
);

insert into tags (
                  tag_name
)
values(
       '#classic'
),
(
       '#react'
),
(
       '#motif-ui'
),
(
        '#figma'
);

insert into components_tags_map (
                                 component_id,
                                 tag_id
)
values(
           1,
           2
),
(
            1,
            3
),
(
            2,
            2
),
(
            2,
            3
),
(
            3,
            3
),
(
            3,
            1
),
(
            4,
            4
),
(
            4,
            2
),
(
            5,
            4
),
(
            5,
            2
),
(
            6,
            1
),
(
            6,
            4
);



