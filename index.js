// Globals because I am evil

const blue = "\x1b[34m";
const green = "\x1b[32m";
const red = "\x1b[31m";
const magenta = "\x1b[95m";

// this is to shorten those lengthy stack traces
function shortStack() {
  const stack = new Error().stack.split("\n");
  return stack.slice(2, 4).join("\n");
}

// Generic log function
function log(arg) {
  return console.log(blue + arg);
}

// Success function
log.win = function (arg) {
  console.log(green + "[-- SUCCESS --] " + "\n" + arg);
};

// failure log function with short stack trace
log.fail = function (arg) {
  const trace = shortStack();
  console.error(red + "[-- FAIL --]" + "\n" + arg + "\n" + trace);
};

// log grouping if you're into that sort of thing
log.nest = function(arg) {
  console.group(magenta + arg);
}

log.nestEnd = function() {
  console.groupEnd();
}

module.exports = log;
