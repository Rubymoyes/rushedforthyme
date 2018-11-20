// TEMPORARY DATA STORAGE - TEST DATA

let data = {
  "instructions": {
    
      "19:59" : "Firstly, pour the 4 cups of boiling water into the pot (and make sure the element is on)",
      "19:30" : "Once semi-boiling, put the diced carrots. Time it for (approximately) four minutes from now. Obviously, the timer will tell you when it's done...",
      "15:50" : "Before bringing the carrots out, drop the peas in quickly for a bit.",
      "15:00" : "Bring the carrots and peas out and drain. Put aside for later use. Put the pot to the side as well, you won't be needing it anymore.",
      "14:00" : "Heat up the wok over some high heat, and pour in the cooking oil. Let simmer for a couple of seconds.",
      "13:30" : "Stir in the carrots and the peas. Feel free to add anything else left in your fridge - for example, spring or green onion, chopped peppers or anything else that you need to get rid of.",
      "13:00" : "Pour in the egg mixture, and stir quickly to mix with the vegetables.",
      "14:30" : "Once the eggs have taken on some colour, stir in the cooked rice and mix well. You can take a quick wine break, and have a chat to your flatmates.",
      "09:00" : "Shake in some soy sauce (use your eyes and common sense) and toss well to coat the rice.",
      "08:00" : "Chuck another little bit of sesame oil in for taste. Toss again.",
      "07:00" : "Turn off the element, and put a little bit more soy sauce in (again, use your eyes) and toss it again.",
      "06:00" : "Prepare to serve the food! Drizzle a little bit of chili oil over it (if you like a bit of heat) and then set aside for a bit to cool off.",
      "05:00" : "This is your moment to call your flatmates for dinner. Get some utensils out (or don't, that's your prerogative, you did cook after all) and set up your eating area.",
      "03:00" : "Get your glass of wine, clean up your space a bit, and remember to bring the sauces to the table/couch/beanbag.",
      "1:00" : "You're finished!"
  }
}

// TIMER FUNCTION

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;

  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      console.log(minutes + ':' +  seconds)
      checkTime(minutes + ':' +  seconds)


      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);


}

// BASIC TEST TO SEE CHANGES

// function changeHeader() {
//   let changeElement = document.getElementById("id01");
//   changeElement.innerHTML = "This is a NEW HEADING.";
// }

// Function to show object value when key is the correct time

function changeInstructions (message) {
  let changeElement = document.getElementById("changingInstructions")
  changeElement.innerHTML = message
}

// Function to check the time for instructions and change instructions based on time
// If else statement - which displays the last instruction until the next instruction

function checkTime (time) {
  if (data.instructions[time] == undefined) {
  } 
  else {
    changeInstructions(data.instructions[time])
  }
    console.log(data.instructions[time])
}


// Make a function to call out in the console log when there is a
// new displayed instruction, w/ time and value.

function consoleCall () {
  
}


// ONLOAD FUNCTION - Calls Timer Functions

window.onload = function () {
  let twentyMinutes = 60 * 20,
      timeDisplay = document.querySelector('#time');
  startTimer(twentyMinutes, timeDisplay);
};
