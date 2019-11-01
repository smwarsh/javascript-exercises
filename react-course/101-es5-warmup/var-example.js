log(name); // output: Line 1: Tiny Rick! - HOISTING OK OK

var tinyize = function(name) {
  log(name); // output: Line 4: Rick

  log(myName); // output: Line 6: undefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: Line 8: Tiny Rick!

  return myName;
};

var name = tinyize("Rick");
log(name); // output: Tiny Rick!
// log(myName); // output: Uncaught ReferenceError: myName is not defined

log(i); // output: Line 17: undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output (5 times): Line 20: 5 - CLOSURE! the for loop runs 5 times and THEN looks for the value of i to print, because of the event loop. the log function is at the global level, so each time you call setTimeout it takes the global value of i, which is 5.https://wsvincent.com/javascript-closure-settimeout-for-loop/
  }, 100);
}
log(i); // output: Line 23: 5

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+/)[1]; // Had to change this RegEx so it would work as the instructor intended
  console.log("Line " + lineNumber + ": " + string);
}
