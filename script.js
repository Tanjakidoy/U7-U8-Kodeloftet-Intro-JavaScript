/* UNDERVISNING 7-8 : INTRO JAVASCRIPT */

function loginCheck(username, currentHour, isLoggedIn) // Function er en blokk med kode som kan kalles ved å bruke funksjonsnavnet

{
  if (isLoggedIn) // Boolean representerer enten sann (true) eller usann (false) 

/* The log() method writes (logs) a message to the console */    
{ 
    console.log("Login successful!");
    console.log("Username: " + username);
    console.log("Logged in at: " + currentHour + " hours.");
  } 
  
  else {
      console.log("Login failed. Please try again."); // Boolean representerer enten sann (true) eller usann (false)
  }
}

/* 
const er en variabel som ikke kan endres etter den er tildelt 
*/
const username = "Tanja"; // "Tanja" er et vavlgfritt navn

/* 
"let" er ett nøkkelord for å lage en ny variabel. ("let" er en variabel som kan endres etter den er tildelt verdi.)
*/
let currentHour = new Date().getHours(); // 
let isLoggedIn = true;

loginCheck(username, currentHour, isLoggedIn);
