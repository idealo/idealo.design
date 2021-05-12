Alter table blogposts add COLUMN if not exists isArchived integer CHECK(isArchived >= 0 AND isArchived < 2) not null default 0;

ALTER TABLE blogposts ALTER COLUMN isArchived DROP DEFAULT;
