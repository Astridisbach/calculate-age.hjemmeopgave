"use strict";

let birthYear = prompt('Enter your birth year:');

birthYear = parseInt(birthYear);

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(`You are ${age} years old.`);

//  1. “use strict”;
// - Denne linje aktiverer strict mode, som gør, at koden bliver evalueret mere strengt. Det hjælper med at undgå fejl, som fx brug af 
// udefinerede variabler.

// 2. Indhent brugerinput med prompt:
// - prompt bruges til at få input fra brugeren. I dette tilfælde bliver brugeren bedt om at indtaste sit fødselsår. Det gemmes som 
// en tekststreng i variablen birthYear.
   
// 3. Konverter birthYear til et tal:
// - parseInt(birthYear) konverterer den tekststreng, som brugeren har indtastet, til et heltal. Dette er nødvendigt, fordi vi skal 
// lave matematiske beregninger.
   
// 4. Find det aktuelle år:
// - new Date().getFullYear() henter det nuværende år fra systemets dato. Dette bruges til at beregne brugerens alder.
   
// 5. Beregning af alder:
// - Ved at trække brugerens fødselsår (birthYear) fra det aktuelle år (currentYear), beregnes alderen.
   
// 6. Udskriv resultatet:
// - console.log bruges til at udskrive en besked til konsollen, der fortæller brugeren, hvor gammel de er.
   
// Eksempel på input/output:
// - Hvis brugeren indtaster “2000”, vil birthYear blive 2000, og koden vil udregne alderen som fx 2025 - 2000 = 25 (hvis det nu er år 2025).
   