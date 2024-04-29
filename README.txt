***Arbetslivserfarenheter API***
Detta API hanterar arbetslivserfarenheter och tillåter användare att utföra CRUD-operationer (Create, Read, Update, Delete).

***Installation, databas***
APIet använder en noSQL-databas. I aktuellt fall används MongoDB-databas. 
Klona ner källkodsfilerna, kör kommando npm install för att installera nödvändiga npm-paket. 
Starta servern med npm start 

***URI's för att använda CRUD:***

***Hämta alla data från databasen***
GET /cv
Denna URI används för att all data som finns i databasen.

***Lägg till ny post i databasen***
POST /cv
Denna URI används för att lägga till ny data i databasen. Användaren måste skicka med följande parametrar i request body: companyname, jobtitle, location.

***Uppdatera en befintlig post i databasen***
PUT /cv/:id
Denna URI används för att uppdatera en befintlig post i databasen. 
Användaren måste ange ID:t för den arbetslivserfarenhet som ska uppdateras i URL:en och skicka med de uppdaterade uppgifterna i request body: companyname, jobtitle, location, responsibilities.

***Ta bort en befintlig post i databasen***
DELETE /cv/:id
Denna URI används för att ta bort en befintlig post från databasen. Användaren måste ange ID:t för den arbetslivserfarenhet som ska tas bort i URL:en.

Användning
För att använda API:et, skicka HTTP-förfrågningar till de angivna URI:erna med lämpliga HTTP-metoder (GET, POST, PUT, DELETE) och följande datastrukturer:

För GET och DELETE behövs ingen request body.
För POST och PUT, skicka med data i JSON-format i request body enligt ovanstående specifikationer.

Ett kurs-objekt returneras/skickas som JSON med följande struktur:

   {
       "_id": "6628d4ba160966c9ee75dd77",
    "companyname": "Hägerstens Håltagning AB",
    "jobtitle": "Håltagaremästare",
    "location": "Stockholm",
    "__v": 0
  }
