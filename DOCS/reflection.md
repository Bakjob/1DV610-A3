** Reflektion över varje kapitel i boken Clean Code. (kap 2-11) **
2. Jag tycker jag följer det clean code förespråkar väldigt bra från chapter 2. Mina namn på views och components är typ standardpraxis för vuejs. Om det är en view så har jag med view i namnet om det är en komponent så har jag med Component i namnet. Man skulle kunna göra argumentet för att vissa av namnet är för långa. Mina vue componenter fungerar ungefär som klasser här. Jag tycker jag följer hur de ska användas. Router är ett substantiv. Den hanterar routes. Nu heter den index.js men det är standard för det är enda filen inuti router mappen. Annars är det väldigt tydligt vad alla olika komponenter gör utifrån namnen jag gett dem.

3. Jag tycker jag följer chapter 3 väldigt bra också. Jag har brytit ut så mycket som just jag är kapabel till/har tid för. Funktionerna är små och jag upprepar väldigt lite kod. Dock har jag en sak jag tänker på. Jag tror att det är möjligt att göra så att jag slipper ha en view för varje typ av conversion för det är mycket upprepningar i varje. Men för det krävs det en viktig sak. Min UnitConverter modul måste då ha som getter att man kan få ut alla supported unit types. Då kan jag generera upp views utan att behöva definiera alla unit types igen. Då kan jag också ha allt på samma sida. Så det är största förbättringen jag kan komma på. Jag skulle nog kunnat lösa det med mer tid. Men jag tänkte endå förmedla att jag vet om att det är något som är tydlig förbättring för denna kod. Error handling är endast med i ConverterComponent som jag brutit ut ur varje view. Jag är nöjd med hur jag följt detta kapitel överlag.

4. Jag tror inte jag har med kommetarer någonstans i min kod för denna app. Däremot har jag med det för min modul. Möjligt att en del av kommentarerna där är onödiga. Jag vill ju inte ha onödiga kommentarer som förklarar självklarheter som man kan få ut ur funktionsnamnen. Men jag tror att överlag så är det bra mängd kommentarer. De ger vital kontext för mer komplexa delar i min kod i modulen. Ingen kommentar är misleading tycker jag. Kanske onödiga kommentarer på vissa ställen som sagt. Jag har undvikit HTML kommentarer för precis som boken säger så är dem en "abomination" vilekt jag håller med om. Det är ganska komplex html kod i ConverterComponent som möjligtvis skulle kunna behöva någon kommentar. Men det här är lite nackdelen med vue på ett sätt. Sättet man kan lösa detta är att igen, bryta ut templaten till en annan komponent för att minska "blobben" med HTML som man måste använda. Men jag valde att behålla det som det är nu för jag tyckte att det var okej. Ibland kan det bli rejält i en template och det blir väldigt svårt att hålla koll på allt. Det kan vara en v-for loop som inte är lätt att följa för den kanske innehåller v-if osv. Det kan bli väldigt mycket indentering i HTMl och det är helt enkelt inte lättläsligt. Jag överväger att ta bort kommentarerna runt min felhantering. När man läser vilken error som kastas så är det väldigt tydligt vad för fel metoden letar efter. Dessutom ligger dessa kommentarer på ett sätt som gör koden lite osmakligt horisontell.

5. Igen detta kapitel är inte så superrelevant för min applikation. Men jag tror att förbättringar kan göras i min UnitConverter utifrån Newspaper Metaphor till exempel. Man vill kunna läsa den uppifrån och ner. Då förväntar man sig att se "main" metoderna högst upp i koden. För mig är det felhanteringen som ligger högst upp i koden. Dessa metoder borde nog ligga längre ner eller i en annan klass för man behöver inte läsa dem för att veta vad de gör. Så alla converter metoder längst upp. Sedan sortera utifrån relevans när man skrollar neråt hade nog varit bra tror jag. Vertikala densiteten ser okej ut tycker jag. Som sagt är min HTML i ConverterComponent ganska dense. Men det är svårt att undvika här. Där jag definierar alla unit types i UnitConverter är det också ganska dense och oläsligt. Skulle kunna bryta ut det i en separat JSON fil eller liknande.

6. inte så mycket mer att säga om detta kapitel heller. Min Data/Object Symmentry är bra. Men det är nog för att alla mina metoder är så pass korta. Det finns ingen konstig indentering som sticker ut någonstans tycker jag. Allt är ganska så välformatterat. Förrutom den där textblobben med definitioner för varje Unit type. Den är som jag sagt många gånger ett problem för läsbarheten i min kod.

7. Min error handling i denna applikation är ganska bra skulle jag säga. När ett fel uppstår över fel unit type eller whatever. Så kastas ett fel i min UnitConverter klass. Felet berättar vad som inträffats. Detta fel loggas i webbläsaren i konsolen. Jag skulle kunna göra så att det kommer upp en röd ruta med vad felet är för något i sjävla UI på sidan. Men fel inträffar inte tillräckligt ofta så det behövs nog inte. Så överlag är min felhantering bra.

8. I kapitel 8 skrivs det mycket om "boundaries" vilket syftar på att varje metod inte ska overlappa med andra metoder. Varje metod ska enskilt göra en varsin sak. Vilket jag tycker jag följer väldigt bra i min kod. Både i appen och i modulen. "Using code that not yet exist" från boken har jag följt ganska bra tycker jag. Jag har byggt allting från botten upp. Modulen ligger som grund för allting. Testapp Webbapp osv... Så jag behövde inte använda "fake" delar som supplementerar kod som inte än finns. Så jag stötte inte på det problemet i min process.

9. Varje test jag gjort har ett tydligt syfte, finns inga relationer mellan testerna. De är läsvänliga, även om det är otroligt många tester i testfilen. Enda förbättringen jag skulle göra är att skriva om allt (inte så liten förbättring) i ett riktigt test framwork som jest. Att console logga allt fungerar men det kan vara bättre för utvecklare att få mer info om vad som gått fel inte bara svaret på metoderna jag testar.

10. Som sagt är mina views och components lite som klasser. Så jag tänker utvärdera dem utifrån det. Storleken på dem är jag nöjd med. Varje "klass" är så liten som möjligt, jag bröt ut "copy paste" kod från varje view till en separat komponent på ett bra sätt. Varje klass hanterar endast en sak. Alla views definierar info om varje converter och använder klassen ConverterComponent som använder UnitConverter för att simpelt leverera svaren på inmatningarna. Klassen jag är minst nöjd med är just min modul UnitConverter. Den skulle behöva delas upp till en mängd mindre klasser istället för bättre läsbarhet. Men som jag skrev i dokumentationen för modulen i A2 så ville jag simplifiera installationsprocessen så mycket jag kunde så jag behöll den i en fil.

11. Boken rekommenderar att bygga system gradvis. Och efter att jag har gjort denna applikation tillsammans med modul så håller jag helt med om det. Att "singla ut" min modul och bygga den separat först med tydliga end points och bra testning så har jag på ett väldigt bra sätt föränklat min applikation. Vad jag vanligtvis hade gjort om jag skulle göra denna webbapp från början är varje view skulle hantera sin egen logik. Det hade gjort det väldigt mycket svårare om jag ville bygga vidare på applikationen. Målet jag har är just att det ska fungera som "plug and play" med så många delar av applikationen som möjligt. Och att sänka abstraktionen för varje del så mycket som det går. Har varit väldigt lätt att förhindra överlappande logik. Alla delar av systemet håller sig för sig själva på ett smidigt sätt.

## Overall:
Inte så mycket komplicerad kod för att få det att fungera på front end för min UnitConverter. Därför gillar jag att använda vuejs. Det enda viktiga är att definiera tydligt vad alla olika komponenter ska göra. Så har man en väldigt Clean Code att jobba med. Då blev det heller inte så många klassnamn och metodnamn för mig att skapa men jag hoppas att jag endå fick med tankegången och analysen i det jag skrivit ovan så att jag visat att jag förstår koncepten från boken.

## Vad jag kommer ta med mig:
Det jag tycker jag kommer ta med mig mest är nog just hur kraftfullt det är att dela upp kod så mycket som möjligt. Läsbarheten gör det otroligt mycket bättre att jobba i och det är mycket lättare att bygga ut existerande kod. Felhantering med mera. Oändliga positiva saker att säga om det. Med utbruten kod är det också väldigt märkbart om metodnamnen och klassnamnen är tydliga och visar vad de menar att göra utifrån namnen de har. Så det blir en positiv feedback loop nästan. Så för mig är det dem två viktigaste attributen jag har jobbat med under denna kurs. Sen har allt annart varit bra men just dessa två ville jag lyfta fram. Jag är en person som kan ha lite för bråttom när jag kodar och har lätt att hamna i en lat lösning som kanske är lite för lång för att vara lättläslig eller "scaleable".

Igen hade inte tid med jest... Blev lite ont om tid tyvärr.