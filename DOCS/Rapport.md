# Projekt 1DV610 - Laboration 3: App

## Syfte
Detta projekt bygger vidare på modulen från Laboration 2 (L2M) och använder den för att skapa en App (L3A) som uppfyller specifika användarbehov. Appen utvecklas enligt krav och Clean Code-principer, och målet är att ge en slutanvändare ett värdefullt gränssnitt för interaktion med modulen.

## Innehåll
- **[Installation](#installation)**
- **[Användning](#användning)**
- **[Modulstruktur](#modulstruktur)**
- **[Kravspecifikation](#kravspecifikation)**
- **[Testning](#testning)**
- **[Clean Code Reflektion](#clean-code-reflektion)**

## Installation
1. Klona detta repo.
    bash
    git clone <repo_url>

2. Installera nödvändiga beroenden.
    bash
    npm install

3. Starta applikationen.
    bash
    npm start


> **Notering:** Denna applikation kräver modulen från Laboration 2 (L2M) för att kunna köras. Kontrollera att modulen är installerad och konfigurerad korrekt.

## Användning
Appen är utformad för att hantera interaktionen mellan slutanvändaren och modulen (L2M) genom ett användarvänligt gränssnitt.

- **Navigering:** Beskriv här hur användaren navigerar i gränssnittet.
- **Funktionalitet:** Ange huvudfunktionerna för appen och hur de uppfyller de krav som ställs på projektet.

## Modulstruktur
Denna app är beroende av modulen från Laboration 2 och är uppdelad i tre oberoende delar:
- **Modul (L2M):** Grundläggande funktionalitet och metoder.
- **Testmodul (L2T):** Testfall för att verifiera att modulen fungerar korrekt.
- **App (L3A):** Använder modulen (L2M) för att erbjuda slutanvändaren en komplett upplevelse.

> Varje del är ett eget projekt och ska fungera enligt specificerad beroendestruktur.

## Kravspecifikation
Appen uppfyller följande användarkrav:
- **Krav 1:** Beskriv här huvudkravet och hur det realiseras i appen.
- **Krav 2:** Beskriv nästa viktiga krav.
- *(Lägg till fler krav beroende på specifikationen)*

## Testning
En tabell med beskrivande testfall finns nedan:

| Testfall        | Indata               | Förväntat Utfall          |
|-----------------|----------------------|---------------------------|
| Testfall 1      | *(Beskrivning)*      | *(Förväntat utfall)*      |
| Testfall 2      | *(Beskrivning)*      | *(Förväntat utfall)*      |

> **Notering:** Testerna är skapade för att täcka varje krav. Manuella tester har utförts på webbsidan automatiska tester har utförts separat för modulen.

## Clean Code Reflektion
Reflektion över förbättringar enligt Clean Code, kapitel 2-11:
1. **Kapitel 2:** Kort sammanfattning av reflektion för detta kapitel.
2. **Kapitel 3:** Kort sammanfattning för detta kapitel.
3. *(Fortsätt med varje kapitel)*

> För detaljerade reflektioner, se dokumentet `reflection.md` där kapitlen och exempel från koden är diskuterade.

## Dokumentation
För varje målgrupp finns relevant dokumentation:
- **Slutanvändare och Apputvecklare:** `README.md` i roten av denna applikation.
- **Modulanvändare och Modulutvecklare:** Dokumentation för modulen finns i respektive repo för modulen.