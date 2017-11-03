Backend megvalósítása
=========

## Fejlesztői környezet bemutatása, beállítása, használt technológiák
A programot a IntelliJ fejlesztői környezetben készítettük, ami igencsak megkönnyíti a programozó dolgát a teljes körű támogatásával.
A Maven project elkészítéséhez a Spring Boot keretrendszert használjuk, adatbázisnak pedig egy H2 adatbázist használtunk.
Az adatbázis beállítása az *application.properties* fájban található meg.

## Adatbázis terv
![Adatbázis terv](https://user-images.githubusercontent.com/32617074/31457195-543d46b0-aebc-11e7-895b-16f6374421f4.png)
A Rating és Vehicle tábla között sok-sok (ManyToMany) kapcsolat van amit egy jointable segítségével valósítunk meg, a User és Rental, illetve a Vehicle és Rental tábla között 1-sok (OneToMany/ManyToOne) kapcsolat van.

## Könyvtárstruktúra bemutatása
![structure](https://user-images.githubusercontent.com/32617074/32297610-f2cf417c-bf4f-11e7-91ee-1ad2e95ad8af.png)

A project könyvtárstruktúrája a fenti képen látható. A programunk az MVC szerkezeti mintát követi. Az *entity* packageben találhatóak az adatbázisban található táblák megvalósításai. Minden egyes entitáshoz a *repository* packageben található egy repó amik segítségével kérhetünk le rekordokat az adatbázisból. Ezeket a repókat a *service* packageben találhato @Service classokban használjuk. Ezekben az osztályokban történik az adatbázissal való kommunikáció, a *regisztráció, kölcsönzés indítása/lezárása stb..* folyamatok megvalósítása. A *controller* packageben találhatóak a @RestController osztályok. Minden metódus felé egy @RequestMapping annotáció található, ami segítségével tudjuk, hogy melyik kérésre melyik metódust kell végrehajtani. Ha van beérkező adat azt egy @Service osztály kapja meg, aztán az elvégzi a kívánt műveletet.

## Végpont tervek és leírások
A *controller* packageben levő osztályok minden metódusa felett van egy @RequestMapping annotáció, amiben meghatározom a végpont nevét. Ebben a projektben ez úgy épül fel, hogy a regisztráció és a bejelentkezés az */auth/{page}* végponton vannak rajta. Itt a *page* az vagy a *login* vagy pedig a *registration*. Azoknak a metódusoknak amik a megjelenítéshez szolgálnak adatokat */r/{page}* végpontokat kapnak (Ha például a kölcsönzéseket akarjuk megnézni akkor a *page* ez esetben *rentals*, ha a profilunkat akarjuk megnézni akkor *profile*). Azok a metódusok pedig amik adatokat dolgoznak fel (pl kölcsönzés, regisztráció) */api* kezdetű végpontokon vannak.

## Egy végpont működésének leírása
### Regisztráció
![szekvencia](https://user-images.githubusercontent.com/32617074/32300041-18fa0bea-bf58-11e7-8327-26bed113758f.png)

Miután a felhasználó kitöltötte a formot és elküldte azt, a */api/registration* végpontra érkezik meg a kérés. Itt begyűjtjük a beérkező adatokat és átadjuk a UserService *createUser* metódusának. Ebben az osztályban fognak végrehajtódni az adatok validációja és az adatbázisba mentés. Miután megkapta a service osztály az adatokat levalidálja őket. Ha valamelyik adat hibás a metódus visszatérési értéke *false*. Ha minden adat helyes akkor létrehozunk egy új User entitást, kitöltjük az adatait és elmentjük az adatbázisba. Ha nem sikerül a mentés akkor a metódus visszatérési értéke *false*. Ha az adatok helyesek voltak, és sikerült elmenteni az adatbázisba is akkor a visszatérési érték *true*. Ezután a controller, ahova beérkezett a kérés tájékoztatja a felhasználót a folyamat végeredményéről.
