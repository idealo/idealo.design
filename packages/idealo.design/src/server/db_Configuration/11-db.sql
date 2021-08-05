alter table components add column if not exists figma_usage jsonb;
alter table components alter column readme drop not null;