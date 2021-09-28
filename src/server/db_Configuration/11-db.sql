DELETE FROM blogposts WHERE id > 6;

UPDATE blogposts SET nextpost = NULL;
UPDATE blogposts SET previouspost = NULL;

ALTER TABLE blogposts ALTER COLUMN previouspost TYPE INTEGER USING previouspost::INTEGER;
ALTER TABLE blogposts ALTER COLUMN nextpost TYPE INTEGER USING nextpost::INTEGER;

UPDATE blogposts SET previouspost = 2 WHERE id = 1;
UPDATE blogposts SET previouspost = 3, nextpost = 1 WHERE id = 2;
UPDATE blogposts SET previouspost = 4, nextpost = 2 WHERE id = 3;
UPDATE blogposts SET previouspost = 5, nextpost = 3 WHERE id = 4;
UPDATE blogposts SET previouspost = 6, nextpost = 4 WHERE id = 5;
UPDATE blogposts SET nextpost = 5 WHERE id = 6;