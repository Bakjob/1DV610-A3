# Projekt 1DV610 - Laboration 3: App

## Syfte
Detta projekt bygger vidare på modulen från Laboration 2 (L2M) och använder den för att skapa en App (L3A) som uppfyller specifika användarbehov. Appen utvecklas enligt krav och Clean Code-principer, och målet är att ge en slutanvändare ett värdefullt gränssnitt för interaktion med modulen.

## Innehåll
- **[Modulstruktur](#modulstruktur)**
- **[Testning](#testning)**

## Installation (om du vill köra den lokalt)
1. Klona detta repo.
    bash
    git clone <repo_url>

2. Installera nödvändiga beroenden.
    bash
    npm install

3. Starta applikationen.
    bash
    npm start


> **Notering:** Denna applikation kräver modulen från Laboration 2 (L2M) för att kunna köras. Kontrollera att modulen är installerad och konfigurerad korrekt. Enligt default så är den med. Men konfigurering kan göras om man vill ha med andra konverteringar.

## Användning
Appen är utformad för att hantera interaktionen mellan slutanvändaren och modulen (L2M) genom ett användarvänligt gränssnitt.

- **Navigering:** Det är en separat sida för varje Converter på webbsidan. Nav används för att växla mellan dem, det är en SPA (single page application). Inget laddas om när man navigerar runt på sidan. Man blir serverad allt på en gång. Sedan går det att köra offline om man vill. Finns många fördelar med det.
- **Funktionalitet:** Ange huvudfunktionerna för appen och hur de uppfyller de krav som ställs på projektet.

## Modulstruktur
Denna app är beroende av modulen från Laboration 2 och är uppdelad i tre oberoende delar:
- **Modul (L2):** Grundläggande funktionalitet och metoder.
- **Testmodul (L2T):** Testfall för att verifiera att modulen fungerar korrekt.
- **App (L3):** Använder modulen (L2) för att erbjuda slutanvändaren en komplett upplevelse i användarvänligt gränssnitt.

> Varje del är ett eget projekt och ska fungera enligt specificerad beroendestruktur. Testappen, modulen och själva webbsidan för användare fungerar separat. Dock är modulen ett måste för att webbsidan ska fungera.

## Vision
 - Jag vill ha en hemsida som man kan använda för att simpelt och effektivt med användarvänligt gränssnitt kunna konvertera olika unit types.

## Kravspecifikation
Appen uppfyller följande användarkrav:
- **Krav 1:** Användare ska kunna få ut ett resultat på inmatningar automatiskt utan att behöva klicka på en "convert" knapp varje gång. Uppfylls.
- **Krav 2:** Användare ska kunna växla mellan vilken converter de vill använda. Uppfylls.
- **Krav 3:** Fint gränssnitt. Uppfylls halvt. Jag är ingen expert på css.

## Testning
En tabell med beskrivande testfall finns nedan:

| Testfall        | Typ av test          | Resultat          |
|-----------------|----------------------|---------------------------|
| Testa så att Time Converter korrekt gör om seconds till alla andra enheter. | Manuellt     | PASS      |
| Testa så att Temp Converter korrekt gör om celcius till alla andra enheter. | Manuellt     | PASS      |
| Testa så att Weight Converter korrekt gör om kilograms till alla andra enheter. | Manuellt     | PASS      |
| Testa så att Length Converter korrekt gör om meters till alla andra enheter. | Manuellt     | PASS - förrutom när man försöker göra om meter till meter men jag dömmer det som oviktigt.      |
| Testa så att Volume Converter korrekt gör om liters till alla andra enheter. | Manuellt     | PASS - Samma problem som length ^      |
| Testa så att Speed Converter korrekt gör om miles per hour till alla andra enheter. | Manuellt     | PASS - Igen samma här      |
| Testa så att Area Converter korrekt gör om square meters till alla andra enheter. | Manuellt     | PASS - Samma problem här      |


> **Notering:** Testerna är skapade för att täcka de flesta krav. Manuella tester har utförts på webbsidan automatiska tester har utförts separat för modulen. Det finns lite för många testfall för att testa varenda utfall. Men det borde vara ok att testa lite av varje.

## Clean Code Reflektion
Reflektion över förbättringar enligt Clean Code, kapitel 2-11:
 - Detta ligger i reflection.md

> För detaljerade reflektioner, se dokumentet `reflection.md` där kapitlen och exempel från koden är diskuterade.

## Dokumentation
För varje målgrupp finns relevant dokumentation:
- **Slutanvändare och Apputvecklare:** `README.md` i roten av denna applikation.
- **Modulanvändare och Modulutvecklare:** Dokumentation för modulen finns i respektive repo för modulen.