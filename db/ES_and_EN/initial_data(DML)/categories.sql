-- Categorías 

-- Vehículos ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Vehículos' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Vehicles' FROM CATEGORY);

-- Inmuebles y propiedades ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Inmuebles y propiedades' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Properties' FROM CATEGORY);

-- Electrónica, video y audio ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Electrónica, video y audio' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Electronics, video and audio' FROM CATEGORY);

-- Celulares, tablets, telefonía y computación ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Celulares, tablets, telefonía y computación' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Cell phones, tablets, telephony and computing' FROM CATEGORY);

-- Consolas y videojuegos ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Consolas y videojuegos' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Consoles and video games' FROM CATEGORY);

-- Electrodomésticos grandes ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Electrodomésticos grandes' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Large appliances' FROM CATEGORY);

-- Electrodomésticos grandes ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Electrodomésticos pequeños' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Small appliances' FROM CATEGORY);

-- Hogar, muebles y jardín ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Hogar, muebles y jardín' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Home, furniture and garden' FROM CATEGORY);

-- Ropa, calzado y accesorios ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Ropa, calzado y accesorios' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Clothing, footwear and accessories' FROM CATEGORY);

-- Salud y belleza ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Salud y belleza' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Health and beauty' FROM CATEGORY);

-- Artículos para bebés ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Artículos para bebés' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Baby items' FROM CATEGORY);

-- Juegos y juguetes para niños ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Juegos y juguetes para niños' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Games and toys for children' FROM CATEGORY);

-- Hobbies y tiempo libre ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Hobbies y tiempo libre' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Hobbies and free time' FROM CATEGORY);

-- Artículos y comida para animales ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Artículos y comida para animales' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Animal food and items' FROM CATEGORY);

-- Alimentos y bebidas ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Alimentos y bebidas' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Foods and drinks' FROM CATEGORY);

-- Servicios ------------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO CATEGORY(ID_CATEGORY) VALUES(DEFAULT);

INSERT INTO CATEGORY_ES(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Servicios' FROM CATEGORY);

INSERT INTO CATEGORY_EN(ID_CATEGORY, NAME) 
(SELECT MAX(ID_CATEGORY), 'Services' FROM CATEGORY);