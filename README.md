Alkalmazások fejlesztése beadandó
=========

## A program rövid leírása
Az alkamazás keretein belül lehetőségünk nyílik járművek kölcsönzésére, kölcsönzéseink áttekintésére, illetve adminként új járművek hozzáadására és kölcsönzések lezárására.

### Bejelentkezés / Regisztráció
A főoldalon lehetőségünk nyílik a bejeletnekzésre/regisztrációra. Regisztrálásnál vezetéknév, keresztnév, felhasználónév, lakcím, telefonszám, email és jelszó megadásával tudunk új felhasználói fiókot létrehozni. Bejelentkezni a felhasználónevünk és jelszavunk megadásával tudunk.

### Kezdőoldal
Bejelentkezés után a kezdőoldalra kerülünk át, ahol az oldalról egy rövid leírás lesz elérhető. Az oldal tetején egy navigációs menü. Itt a Járművek megtekintése, Új kölcsönzés, és Profil menüpontok fognak szerepelni. Admin esetén a Profil és Új kölcsönzés menüpont nem fog szereplni, helyette az Adminnak lesz egy Kölcsönzés lezárása menüpont.

### Járművek megtekintése
Ezen az oldalon a felhasználónak lehetősége nyílik a járművek adatainek megtekintése (rendszámtábla, márka, típus, évjárat, bérlési díj) A felhasználó szűrni is tud márka és bérlési díj szerint. Admin esetén ezen az oldalon lehetősége nyílik új járművek hozzáadására az adatbázishoz. A felhasználók itt értékelni tudják az adott járműveket 1-5-ös skálán és láthatják más felhasználók értékeléseit is.

### Új kölcsönzés
Sima felhasználó esetén érhető el ez az oldal. Csak azok a járművek jelennek meg amiket éppen senki sem bérel. Járművet kiválasztva, illetve időtartamot megadva, hogy mettől meddig akarjuk bérelni az adott járművet tudunk új kölcsönzést létrehozni.

### Profil
Itt láthatjuk az eddigi kölcsönzéseinket, illetve itt tudjuk megváltoztatni az email címünket, jelszavunkat, lakcímünket és a telefonszámunkat.

### Kölcsönzés lezárása
Admin esetén érhető el ez az oldal. Itt láthatjuk az összes eddigi kölcsönzést egy táblázatban. Lehetőségünk nyílik szűrni a táblában márka, felhasználó és bérlési idő szerint. A már lejárt kölcsönzések más színnel jelennek meg a táblázatban. Egy kölcsönzést kiválasztva tudjuk lezárni azt. Ilyenkor a sima felhasználó a Profil oldalán láthatja, hogy mennyibe került az adott kölcsönzése.

## Adatbázis terv
![Adatbázis terv]()
