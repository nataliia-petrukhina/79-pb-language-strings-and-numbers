/*
Task 1

You have 2 variables containing the birthdates of 2 persons

- extract the year from the 2 dates and save them into 2 new variables
- using the ternary operator on these 2 variables, print message to the console 
like "Fiona is older than Jacob" or * "Jacob is older than Fiona", depending 
on the comparison between the 2 years

*/

let jacobBirthdate = "20/06/1991";
let fionaBirthdate = "12/11/1992";


let jacobYear = jacobBirthdate.split("/")[2]; /* Wir teilen das Geburtsdatum mit der Methode split() durch das Zeichen / auf. */
let fionaYear = fionaBirthdate.split("/")[2]; 


/* Umwandlung des Strings in eine Zahl mit parseInt:
parseInt("1995", 10) benötigt zwei Parameter:
"1995" – den String, den wir in eine Zahl umwandeln möchten.
10 – die Basis des Zahlensystems, hier das Dezimalsystem.
parseInt gibt die Ganzzahl 1995 zurück, sodass jacobYear nun eine Zahl und kein String ist. */


let message = jacobYear > fionaYear ? "Fiona is older than Jacob" : "Jacob is older than Fiona" ;
console.log(message);

/*
Task 1.1

Using the variables from Task 1, calculate the age difference between Jacob and Fiona

Print a message to the console, like:

Fiona is 3 years older than Jacob 

Use conditional statements if needed
*/

let ageDifference = Math.abs(jacobYear - fionaYear); /* Math.abs() gibt den absoluten Wert einer Zahl zurück. */
let ageMessage = ageDifference === 1
? `Fiona is 1 year older than Jacob`
: `Fiona is ${ageDifference} years older than Jacob`;

console.log(ageMessage);
