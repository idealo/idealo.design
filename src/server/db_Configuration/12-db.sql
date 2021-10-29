ALTER TABLE components RENAME COLUMN figma_usage TO usage;
ALTER TABLE components ALTER COLUMN usage TYPE TEXT;
ALTER TABLE components ADD COLUMN implementation JSONB DEFAULT ('{"guidelines":null, "anatomy":null}'::JSONB);
ALTER TABLE components ADD COLUMN definition TEXT;
ALTER TABLE components ADD COLUMN design TEXT;