Backend megvalósítása
=========

## Fejlesztői környezet bemutatása, beállítása, használt technológiák
A programot a IntelliJ fejlesztői környezetben készítettük, ami igencsak megkönnyíti a programozó dolgát a teljes körű támogatásával.
A Maven project elkészítéséhez a Spring Boot keretrendszert használjuk, adatbázisnak pedig egy H2 adatbázist használtunk.
Az adatbázis beállítása az *application.properties* fájban található meg.

## Adatbázis terv
![Adatbázis terv](https://user-images.githubusercontent.com/32617074/31457195-543d46b0-aebc-11e7-895b-16f6374421f4.png)
A Rating és Vehicle tábla között sok-sok (ManyToMany) kapcsolat van amit egy jointable segítségével valósítunk meg, a User és Rental, illetve a Vehicle és Rental tábla között 1-sok (OneToMany/ManyToOne) kapcsolat van.

