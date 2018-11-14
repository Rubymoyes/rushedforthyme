// TEMPORARY DATA STORAGE - TEST DATA

let data = {
  "instructions": {
      "19:58" : "Instruction 1",
      "19:55" : "Instruction 2",
      "19:50" : "Instruction number 3!"
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
