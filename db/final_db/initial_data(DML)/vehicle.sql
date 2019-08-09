CREATE TABLE VEHICLE(
    ID_CATEGORY SERIAL NOT NULL,
    ID_PRODUCT SERIAL NOT NULL,
    YEAR DATE NOT NULL,
    KILOMETERS INTEGER NOT NULL,

    PRIMARY KEY(ID_PRODUCT),
	FOREIGN KEY(ID_CATEGORY) REFERENCES CATEGORY(ID_CATEGORY),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
);

-- Filtros para VEHICLE

-- Año
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Año', 'INPUT', ID_CATEGORY, 0 FROM CATEGORY WHERE NAME = 'Vehículos');

-- Kilómetros
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Kilómetros', 'INPUT', ID_CATEGORY, 0 FROM CATEGORY WHERE NAME = 'Vehículos');

CREATE TABLE CAR(
    ID_SUBCATEGORY SERIAL NOT NULL,
    ID_PRODUCT SERIAL NOT NULL,
    BRAND VARCHAR NOT NULL,
    MODEL VARCHAR NOT NULL,
    ENGINE VARCHAR NOT NULL,
    FUEL_TYPE VARCHAR NOT NULL,
    DIRECTION VARCHAR NOT NULL,
    TRANSMISSION VARCHAR NOT NULL,
    ABS BOOLEAN NOT NULL,
    
    PRIMARY KEY(ID_PRODUCT),
	FOREIGN KEY(ID_SUBCATEGORY) REFERENCES SUBCATEGORY(ID_SUBCATEGORY),
	FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCT(ID_PRODUCT)
);

-- Filtros para CAR

-- Marca
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Marca', 'SELECTIONABLE_LIST', 0, ID_SUBCATEGORY FROM SUBCATEGORY WHERE NAME = 'Autos');

-- Modelo
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Modelo', 'SELECTIONABLE_LIST', 0, ID_SUBCATEGORY FROM SUBCATEGORY WHERE NAME = 'Autos');

-- Motor
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Motor', 'INPUT', 0, ID_SUBCATEGORY FROM SUBCATEGORY WHERE NAME = 'Autos');

-- Tipo de combustible
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Tipo de combustible', 'SELECTIONABLE_LIST', 0, ID_SUBCATEGORY FROM SUBCATEGORY WHERE NAME = 'Autos');

-- Tipo de dirección
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Tipo de dirección', 'SELECTIONABLE_LIST', 0, ID_SUBCATEGORY FROM SUBCATEGORY WHERE NAME = 'Autos');

-- Frenos ABS
INSERT INTO FILTER(IS_GENERIC, FILTER_NAME, FILTER_TYPE, ID_CATEGORY, ID_SUBCATEGORY)
(SELECT 0, 'Frenos ABS', 'BOOLEAN', 0, ID_SUBCATEGORY FROM SUBCATEGORY WHERE NAME = 'Autos');