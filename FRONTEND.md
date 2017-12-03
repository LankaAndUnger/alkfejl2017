Alkalmazások fejlesztése beadandó
=========

## Frontend
Az alkamazás frontend része Angular és Typescript használatával valósult meg. A html oldal designhoz Materialt használtunk.

## Kliensoldali szolgáltatások
A kliensoldal kapcsolatot tart a backenddel. Adatokat kérünk le onnan, amiket feldolgozhatunk majd megjeleníthetünk. Az alkalmazás funkciói közé tartozik többek között új kölcsönzés indítása, kölcsönzés lezárása stb.. Ezek végrehajtásához elengedhetetlen, hogy adatokat küldjünk a szerveroldal felé. Többek között input mezők segítségével adatokat kapunk meg a felhasználótól, amit feldolgozva továbbítunk a szerveroldal felé. A szerveroldal értelmezi az a kapott adatot és megpróbálja elvégezni azt a műveletet, ami az adott címre van mappelve. Majd a kliensoldal megkapja a választ, és a választól függően jelenít meg tartalmat, irányít át másik oldalra stb..

## Egy funkció folyamatának leírása
### Kölcsönzés lezárása
A kölcsönzések egy táblázatban vannak megjelenítve. Minden kölcsönzés egy sor. Amelyik kölcsönzés még nincs lezárva, annál egy gombot találunk az utolsó oszlopban _Lezárás_ néven. Erre a gombra egy _click_ event van kötve. Erre a gombra kattintva meghívódik a _getId()_ függvény a kölcsönzés azonosítójával. Az azonosítót megkapva a _/api/closeRental/id_ végpontra postolja a service modulunk. A szerveroldalunk kikeresi az adott kölcsönzést és lezárja. Majd választ küld a kliensoldal felé, arról, hogy sikeresen végrehajtódott-e a művelet.
