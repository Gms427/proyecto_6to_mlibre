 CREATE TABLE USERS(
	ID_USER SERIAL PRIMARY KEY NOT NULL,
	NAME VARCHAR NOT NULL,
	PASSWORD VARCHAR NOT NULL,
	USERNAME VARCHAR NOT NULL,
	EMAIL VARCHAR NOT NULL,
	DATE_OF_BIRTH DATE NOT NULL,
	PHONE VARCHAR NOT NULL,
	STATUS INTEGER NOT NULL,
	IMAGE VARCHAR,
	ROL INTEGER NOT NULL,
	DEPARTAMENT VARCHAR,
	CITY VARCHAR,
	STREET VARCHAR,
	NEIGHBORHOOD VARCHAR
 );
 
 CREATE TABLE STORE(
	ID_USER SERIAL PRIMARY KEY NOT NULL,
	RUT VACHAR NOT NULL,
	SOCIAL_REASON VARCHAR NOT NULL,
	
	FOREIGN KEY(ID_USER) REFERENCES USER(ID_USER)
 );
 
 CREATE TABLE ADMIN(
	ID_USER SERIAL PRIMARY KEY NOT NULL,
	PASSWORD VARCHAR NOT NULL,
	EMAIL VARCHAR NOT NULL
 );
 
 CREATE TABLE PRODUCT(
	ID_PRODUCT VARCHAR NOT NULL,
	PRICE INTEGER NOT NULL,
	F_CURRENCY NOT NULL,
	DESCRIPTION	VARCHAR NOT NULL,
	CATEGORY VARCHAR NOT NULL,
	NAME VARCHAR NOT NULL,
	STOCK INTEGER,
	WARRANTY VARCHAR
 );
 
 CREATE TABLE PRODUCT_COMMENTS(
	ID_COMMENT SERIAL PRIMARY KEY NOT NULL,
	ID_USER	SERIAL NOT NULL,
	COMMENT	VARCHAR NOT NULL,
	ID_PRODUCT	VARCHAR NOT NULL,
	COMMENT_DATE TIMESTAMP,
	
	FOREIGN KEY(ID_USER) REFERENCES USER(ID_USER),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
 );
 
 CREATE TABLE PRODUCT_RATING(
	ID_USER	SERIAL PRIMARY KEY NOT NULL,
	ID_PRODUCT VARCHAR PRIMARY KEY NOT NULL,
	TITLE VARCHAR,
	RATING_INTEGER INTEGER,
	DESCRIPTION	VARCHAR,
	
	FOREIGN KEY(ID_USER) REFERENCES USER(ID_USER),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
 );
 
 CREATE TABLE FAVOURITE(
	ID_USER	SERIAL PRIMARY KEY NOT NULL,
	ID_PRODUCT	VARCHAR PRIMARY KEY NOT NULL,
	
	FOREIGN KEY(ID_USER) REFERENCES USER(ID_USER),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
 );
 
 CREATE TABLE HISROTY(
	ID_USER	SERIAL PRIMARY KEY NOT NULL,
	ID_PRODUCT	VARCHAR PRIMARY KEY NOT NULL,
	DATE_OF_VISIT TIMESTAMP NOT NULL,
	
	FOREIGN KEY(ID_USER) REFERENCES USER(ID_USER),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
 );
 
 CREATE TABLE COMMENT_ANSWERS(
	ID_ANSWER SERIAL PRIMARY KEY NOT NULL,
	ID_USER	SERIAL,
	ANSWER	VARCHAR,
	ID_PRODUCT VARCHAR,
	ID_COMMENT VARCHAR,
	ANSWER_DATE TIMESTAMP,
	
	FOREIGN KEY(ID_USER) REFERENCES USER(ID_USER),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
 );
 
 CREATE TABLE CATEGORY_ES(
	ID SERIAL PRIMARY KEY NOT NULL,
	MAME VARCHAR NOT NULL,
 );
 
 CREATE TABLE CATEGORY_EN(
	ID SERIAL PRIMARY KEY NOT NULL,
	MAME VARCHAR NOT NULL,
 );
 
 CREATE TABLE SUBCATEGORY_ES(
	ID SERIAL PRIMARY KEY NOT NULL,
	ID_CATEGORY SERIAL PRIMARY LEY NOT NULL,
	MAME VARCHAR NOT NULL,
 );
 
  CREATE TABLE SUBCATEGORY_EN(
	ID SERIAL PRIMARY KEY NOT NULL,
	ID_CATEGORY SERIAL PRIMARY LEY NOT NULL,
	MAME VARCHAR NOT NULL,
 );
 
 CREATE TABLE CATEGORY_BRANDS(
	ID_CATEGORY SERIAL PRIMARY KEY NOT NULL,
	BRAND VARCHAR 
 );
 
  CREATE TABLE SUBCATEGORY_BRANDS(
	ID_SUBCATEGORY SERIAL PRIMARY KEY NOT NULL,
	BRAND VARCHAR 
 );
 
 -- INSERTS
 
 INSERT INTO public.users(name, password, username, email, date_of_birth, phone, status, image, rol, departament, city, street, neighborhood)
	VALUES ('Gonzalo','Manzzi','Gms427', 'gonzalo427@hotmail.com', '11/6/2001', '+56896011626', 1, 'a', 1, 'Montevideo', 'Montevideo', 'Iguá 4450', 'Malvin Norte');
 