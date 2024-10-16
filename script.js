/* UNDERVISNING 7-8 : INTRO JAVASCRIPT */

function loginCheck(username, currentHour, isLoggedIn) // Function er en blokk med kode som kan kalles ved å bruke funksjonsnavnet
{ 
  if (isLoggedIn)  // Boolean representerer enten sann (true) eller usann (false) 

// The log() method writes (logs) a message to the console 
    
{ 
  console.log("Login successful!"); 
  console.log("Username: " + username); 
  console.log("Logged in at: " + currentHour + " hours.");  
}
  else // Boolean representerer enten sann (true) eller usann (false)
    
{ 
  console.log("Login failed. Please try again."); 
  }
}

const username = "Tanja"; // const er en variabel som ikke kan endres etter den er tildelt 

/*
"username" er et valgfritt navn. 
"=" lagrer verdien på høyre side i navnet på venstre side.
"Tanja" er verdien som blir lagret
*/

let currentHour = new Date().getHours();) 

/* 
Når vi skriver "new Date()", får vi et objekt som representerer nøyaktig dato og klokkeslett akkurat nå.
Når vi skriver ".getHours" brukes det en metode som henter (eller "returnerer") timen fra Date-objektet.
*/

let isLoggedIn = true; // Når "isLoggedIn" er satt til "true", betyr det at brukeren i dette tilfellet er logget inn.

/* 
"let" er ett nøkkelord for å lage en ny variabel. ("let" er en variabel som kan endres etter den er tildelt verdi.
*/
