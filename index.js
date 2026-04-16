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
function log(...args) {
  return console.log(blue,  ...args);
}

// Success function
log.win = function (...args) {
  console.log(green + "[-- SUCCESS --] " + "\n", ...args);
};

// failure log function with short stack trace
log.fail = function (...args) {
  const trace = shortStack();
  console.error(red + "[-- FAIL --]" + "\n", ...args, "\n" + trace);
};

// log grouping if you're into that sort of thing
log.nest = function(...args) {
  console.group(magenta, ...args);
}

log.nestEnd = function() {
  console.groupEnd();
}

// TODO: add full suite of logs

module.exports = log;
