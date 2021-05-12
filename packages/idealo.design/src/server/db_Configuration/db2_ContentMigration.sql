Alter table blogposts add COLUMN if not exists isArchived integer CHECK(isArchived between 0 and 1) not null default 0;

ALTER TABLE blogposts ALTER COLUMN isArchived DROP DEFAULT;
