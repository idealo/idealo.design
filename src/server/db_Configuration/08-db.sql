CREATE TABLE if NOT EXISTS components (
    component_id SERIAL,
    slug VARCHAR (255) NOT NULL,
    title VARCHAR (255) NOT NULL,
    readme JSONB,
    figma_usage JSONB,
    updated_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY (component_id)
    );

CREATE TABLE if NOT EXISTS tags (
    tag_id SERIAL,
    tag_name VARCHAR (255) NOT NULL ,
    PRIMARY KEY (tag_id)
    );

CREATE TABLE if NOT EXISTS components_tags_map (
    component_id INTEGER NOT NULL,
    tag_id INTEGER NOT NULL,
    PRIMARY KEY (component_id, tag_id),
    FOREIGN KEY (component_id) REFERENCES components(component_id) ON DELETE CASCADE,
    FOREIGN KEY (tag_id) REFERENCES tags(tag_id)
    );

CREATE TABLE if NOT EXISTS screenshots (
    screenshot_id SERIAL NOT NULL,
    component_id INTEGER NOT NULL,
    screenshot VARCHAR (255) NOT NULL,
    PRIMARY KEY (component_id, screenshot_id),
    FOREIGN KEY (component_id) REFERENCES components(component_id) ON DELETE CASCADE
    );