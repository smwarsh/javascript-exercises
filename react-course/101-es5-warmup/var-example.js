log(name); // output: Uncaught TypeError: Cannot read property '1' of null

var tinyize = function(name) {
  log(name); // output: Line 4: Rick

  log(myName); // output: Line 6: undefined
  var myName = "Tiny " + name + "!";
  log(myName); // output: Line 8: Tiny Rick!

  return myName;
};

var name = tinyize("Rick");
log(name); // output: Uncaught TypeError: Cannot read property '1' of null
log(myName); // output: Uncaught ReferenceError: myName is not defined

log(i); // output: Uncaught TypeError: Cannot read property '1' of null
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output (5 times): Uncaught TypeError: Cannot read property '1' of null
  }, 100);
}
log(i); // output: Uncaught TypeError: Cannot read property '1' of null

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  // console.log('callerLine: ' + callerLine);
  // console.log('callerLine.match(/:(\\d+):\\d+\\)/) returns ' + callerLine.match(/:(\d+):\d+/));
  var lineNumber = callerLine.match(/:(\d+):\d+/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
