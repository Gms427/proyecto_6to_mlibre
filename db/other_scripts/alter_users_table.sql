ALTER TABLE users ALTER COLUMN DATE_OF_BIRTH  DROP  NOT NULL

ALTER TABLE users 
RENAME COLUMN name TO full_name;

ALTER TABLE users 
DROP COLUMN USERNAME;

ALTER TABLE users ALTER COLUMN DATE_OF_BIRTH  DROP  NOT NULL;

ALTER TABLE users ALTER COLUMN ROL  DROP  NOT NULL;