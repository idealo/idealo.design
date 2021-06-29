create table if not exists screenshots
(
    component_id integer not null,
    screenshot_path varchar(255) not null,
    primary key(component_id,screenshot_path),
    foreign key(component_id) references components(component_id)
);