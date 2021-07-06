create table if not exists screenshots
(
    component_id integer not null,
    screenshot_id serial not null,
    screenshot varchar(255) not null,
    primary key(component_id,screenshot_id),
    foreign key(component_id) references components(component_id) on delete cascade
);