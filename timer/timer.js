function startTimer(duration, display) {
  var timer = duration, minutes, seconds;

  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);

}

// BASIC TEST TO SEE CHANGES

function changeHeader() {
  var changeElement = document.getElementById("id01");
  changeElement.innerHTML = "This is a NEW HEADING.";
}


// ONLOAD FUNCTION - CALLS ALL FUNCTIONS

window.onload = function () {
  var twentyMinutes = 60 * 20,
      timeDisplay = document.querySelector('#time');
  startTimer(twentyMinutes, timeDisplay);
  changeHeader();
  changeInstructions();
};
