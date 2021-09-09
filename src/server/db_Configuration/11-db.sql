delete from blogposts where id > 6;

update blogposts set nextpost=NULL;
update blogposts set previouspost=Null;

alter table blogposts alter column previouspost type integer using previouspost::integer;
alter table blogposts alter column nextpost type integer using nextpost::integer;

UPDATE blogposts SET previouspost = 2 where id=1;
UPDATE blogposts SET previouspost = 3, nextpost = 1 where id=2;
UPDATE blogposts SET previouspost = 4, nextpost = 2 where id=3;
UPDATE blogposts SET previouspost = 5, nextpost = 3 where id=4;
UPDATE blogposts SET previouspost = 6, nextpost = 4 where id=5;
UPDATE blogposts SET nextpost = 5 where id=6;