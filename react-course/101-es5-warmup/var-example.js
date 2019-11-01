log(name); // output: Line 1: null

var tinyize = function(name) {
  log(name); // output: Line 4: Rick

  log(myName); // output: Line 6: null
  var myName = "Tiny " + name + "!";
  log(myName); // output: Line 8: Tiny Rick!

  return myName;
};

var name = tinyize("Rick");
log(name); // output: Line 14: Tiny Rick!
log(myName); // output: Line 15: null

log(i); // output: Line 17: null
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: Line 20: 0 / Line 20: 1 / Line 20: 2 / Line 20: 3 / Line 20: 4
  }, 100);
}
log(i); // output: Line 23: null

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
