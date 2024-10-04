# Dashboard

Med denna app kan du se det aktuella vädret där du. Den visar också din batteriprocent.
Hemskärmen är som ett skrivbord där temperatur och andra väderegenskaper visas upp.
Vid klick skickas man vidare till väderskärmen som presenterar vädret med en text, diagram och en liten bild.

För att köra programmet - npm start och skanna QR från din expo go app (android) eller använd android studios emilator.

Det är uppbyggt med React navigation för att kunna navigera mellan olika screens.
Den har tab stack och screen stack installerat.
Stacken ligger i rooten av projektet som en bas för att kunna bygga vidare på en sökfunktion i högra headern.

Vädret hämtas från ett API. Läs mer om hur det fungerar och hur du får tillgång till en nyckel - https://www.weatherapi.com/docs/

Projekt använder sig av nedan komponenter, MaterialIcons och FontIcons6 från expo/vector-icons, och även LineChart från react-native-chart-kit - Läs mer https://www.npmjs.com/package/react-native-chart-kit

# React native komponenter

- View
- ScrollView
- Text
- Pressable
- ActivityIndicator

# Expo

- expo-location
- expo-image
- expo-linear-gradient (bakgrund ändras beroende på vädret)
- expo-battery

# Kravlista

1. [x] Projektet använder minst 4 stycken RN-komponenter och minst 4 stycken Expo
       komponenter.
2. [x] De utvalda komponenterna MÅSTE antecknas i README filen tillsammans med en
       lista över genomförda krav.
3. [x] React Navigation används för att skapa en bättre upplevelse i appen.
4. [x] Git & GitHub har använts
5. [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
6. [x] Uppgiften lämnas in i tid!
7. [x] Muntlig presentation är genomförd

Krav för väl godkänt:

1. [x] Alla punkter för godkänt är uppfyllda
2. [x] Ytterligare en valfri extern modul används i projektet (ex. react-hook-form).
3. [x] Appen ska prata med ett Web-API för att hämta data.
4. Appen ska förberedas för lansering till en Appstore (Deadline samma dag som kursen
   slutar)
