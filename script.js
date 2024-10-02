function loginCheck(username, currentHour, isLoggedIn) {
  if (isLoggedIn) {
      console.log("Login successful!");
      console.log("Username: " + username);
      console.log("Logged in at: " + currentHour + " hours.");
  } else {
      console.log("Login failed. Please try again.");
  }
}

const username = "aliceWonder";
let currentHour = new Date().getHours();
let isLoggedIn = true;

loginCheck(username, currentHour, isLoggedIn);