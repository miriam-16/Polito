CREATE TABLE TIMEDIM(
   TimeID  INTEGER  NOT NULL PRIMARY KEY 
  ,DatetimeVisit   VARCHAR(12)  NOT NULL
  ,DateVisit DATE NOT NULL
  ,Holiday CHAR(1) NOT NULL
  ,Month  VARCHAR(7)  NOT NULL
  ,Bimester VARCHAR(6) NOT NULL
  ,Trimester VARCHAR(6) NOT NULL
  ,Semester VARCHAR(6) NOT NULL
  ,Year INTEGER NOT NULL
);

INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(1, '01-01-2023-1', DATE '2023-01-01', 1, '01-2023', '1-2023', '1-2023', '1-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(2, '15-02-2023-2', DATE '2023-02-15', 0, '02-2023', '1-2023', '1-2023', '1-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(3, '20-03-2023-3', DATE '2023-03-20', 1, '03-2023', '2-2023', '2-2023', '2-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(4, '10-05-2023-1', DATE '2023-05-10', 0, '05-2023', '2-2023', '2-2023', '2-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(5, '15-06-2023-2', DATE '2023-06-15', 1, '06-2023', '2-2023', '2-2023', '2-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(6, '20-07-2023-3', DATE '2023-07-20', 0, '07-2023', '3-2023', '3-2023', '3-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(7, '25-08-2023-1', DATE '2023-08-25', 1, '08-2023', '3-2023', '3-2023', '3-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(8, '30-09-2023-2', DATE '2023-09-30', 0, '09-2023', '3-2023', '3-2023', '3-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(9, '05-10-2023-3', DATE '2023-10-05', 1, '10-2023', '4-2023', '4-2023', '4-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(10, '15-11-2023-1', DATE '2023-11-15', 0, '11-2023', '4-2023', '4-2023', '4-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(11, '20-12-2023-2', DATE '2023-12-20', 1, '12-2023', '4-2023', '4-2023', '4-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(12, '25-01-2023-1', DATE '2023-01-25', 0, '01-2023', '1-2023', '1-2023', '1-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(15, '10-04-2023-3', DATE '2023-04-10', 1, '04-2023', '2-2023', '2-2023', '2-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(13, '28-02-2023-1', DATE '2023-02-28', 1, '02-2023', '1-2023', '1-2023', '1-2023', 2023);
INSERT INTO TIMEDIM (TimeID, DatetimeVisit, DateVisit, Holiday, Month, Bimester, Trimester, Semester, Year)
VALUES(14, '05-03-2023-2', DATE '2023-03-05', 0, '03-2023', '1-2023', '1-2023', '1-2023', 2023);



