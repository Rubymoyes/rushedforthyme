function timer() {
  var time = {
    sec: 00,
    min: 00,
    hr: 00
  };
  
  var finalLimit = null,
    warnLimit = null,
    errorLimit = null;
  var max = 59;
  var interval = null;

  function init(_hr, _min, _sec) {
    time["hr"] = _hr ? _hr : 0;
    time["min"] = _min ? _min : 0;
    time["sec"] = _sec ? _sec : 0;
    printAll();
  }

  function setLimit(fLimit, wLimit, eLimit) {
    finalLimit = fLimit;
    warnLimit = wLimit;
    errorLimit = eLimit;
  }

  function printAll() {
    print("sec");
    print("min");
    print("hr");
  }

  function update(str) {
    time[str] ++;
    time[str] = time[str] % 60;
    if (time[str] == 0) {
      str == "sec" ? update("min") : update("hr");
    }
    print(str);
  }

  function print(str) {
    var _time = time[str].toString().length == 1 ? "0" + time[str] : time[str];
    document.getElementById("lbl" + str).innerHTML = _time;
  }

  function validateTimer() {
    var className = "";
    var secs = time.sec + (time.min * 60) + (time.hr * 60 * 60);
    if (secs >= finalLimit) {
      stopTimer();
    } else if (secs >= errorLimit) {
      className = "error";
    } else if (secs >= warnLimit) {
      className = "warn";
    }
    var element = document.getElementsByTagName("span");
    document.getElementById("lblsec").className = className;
  }

  function startTimer() {
    init();
    if (interval) stopTimer();
    interval = setInterval(function() {
      update("sec");
      validateTimer();
    }, 1000);
  }

  function stopTimer() {
    window.clearInterval(interval);
  }

  function resetInterval() {
    stopTimer();
    time["sec"] = time["min"] = time["hr"] = 0;
    printAll();
    startTimer();
  }

  return {
    'start': startTimer,
    'stop': stopTimer,
    'reset': resetInterval,
    'init': init,
    'setLimit': setLimit
  }
};

var time = new timer();

function initTimer() {
  time.init(0, 0, 0);
}

function startTimer() {
  time.start();
  time.setLimit(10, 5, 8);
}

function endTimer() {
  time.stop();
}

function resetTimer() {
  time.reset();
}

setTimeout(stopTimer, 400000);