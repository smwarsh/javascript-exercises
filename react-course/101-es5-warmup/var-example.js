// log(name); // output: Uncaught ReferenceError: Cannot access 'name' before initialization

const tinyize = function(name) {
  log(name); // output: Line 4: Rick

  // log(myName); // output: Uncaught ReferenceError: Cannot access 'myName' before initialization
  const myName = "Tiny " + name + "!";
  log(myName); // output: Line 8: Tiny Rick!

  return myName;
};

const name = tinyize("Rick");
log(name); // output: Line 14: Tiny Rick!
// log(myName); // output: Uncaught ReferenceError: myName is not defined

// log(i); // output: Uncaught ReferenceError: i is not defined
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: Line 20: 0 / Line 20: 1 / Line 20: 2 / Line 20: 3 / Line 20: 4
  }, 100);
}
// log(i); // output: Uncaught ReferenceError: i is not defined

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  const callerLine = new Error().stack.split("\n")[2];
  const lineNumber = callerLine.match(/:(\d+):\d+/)[1]; // Had to change this RegEx so it would work as the instructor intended
  console.log("Line " + lineNumber + ": " + string);
}
