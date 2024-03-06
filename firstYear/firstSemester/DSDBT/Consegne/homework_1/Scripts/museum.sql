CREATE TABLE MUSEUM(
	MuseumID 	INTEGER NOT NULL PRIMARY KEY
	,Museum	VARCHAR(50) NOT NULL
	,Category VARCHAR(20) NOT NULL
	,CityID INTEGER  NOT NULL
	,ServicesID INTEGER NOT NULL
	,FOREIGN KEY(CityID) REFERENCES CITY(CityID)
	,FOREIGN KEY(ServicesID) REFERENCES SERVICES(ServicesID)
);

INSERT INTO MUSEUM VALUES (1, 'National Museum', 'History', 1, 1);
INSERT INTO MUSEUM VALUES (2, 'Modern Art Museum', 'Art', 2, 2);
INSERT INTO MUSEUM VALUES (3, 'Science Museum', 'Science', 3, 3);
INSERT INTO MUSEUM VALUES (4, 'Children Museum', 'Education', 4, 4);
INSERT INTO MUSEUM VALUES (5, 'Natural History Museum', 'History', 1, 5);
INSERT INTO MUSEUM VALUES (6, 'Contemporary Art Museum', 'Art', 2, 6);
INSERT INTO MUSEUM VALUES (7, 'Technology Museum', 'Science', 3, 7);
INSERT INTO MUSEUM VALUES (8, 'Interactive Museum', 'Education', 4, 8);
INSERT INTO MUSEUM VALUES (9, 'Archaeological Museum', 'History', 1, 9);
INSERT INTO MUSEUM VALUES (10, 'Sculpture Museum', 'Art', 2, 10);