// Main stopwatch functions

// function timeRemaining()

// function startTimer()

// function stopTimer()


// Basic Timer - Seconds

var timer = new Timer();
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#basicUsage').html(timer.getTimeValues().toString());
});

// Start, Pause, Stop and Reset Chronometer

// var timer = new Timer();
// $('#chronoExample .startButton').click(function () {
//     timer.start();
// });
// $('#chronoExample .pauseButton').click(function () {
//     timer.pause();
// });
// $('#chronoExample .stopButton').click(function () {
//     timer.stop();
// });
// $('#chronoExample .resetButton').click(function () {
//     timer.reset();
// });
// timer.addEventListener('secondsUpdated', function (e) {
//     $('#chronoExample .values').html(timer.getTimeValues().toString());
// });
// timer.addEventListener('started', function (e) {
//     $('#chronoExample .values').html(timer.getTimeValues().toString());
// });
// timer.addEventListener('reset', function (e) {
//     $('#chronoExample .values').html(timer.getTimeValues().toString());
// });

