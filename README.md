# smallog
## Node.js Hackathon Project

### Reason For Existence 
Regular logging bores me. Stack traces in the terminal are long,
annoying and the dark grey colour is condescending.
I wanted to shorten the functions themselves so I can save miliseconds aswell.
This is just a basic wrapper.

### How To Install
Just run ```npm i smallog```

### How To Use
Put this at the top of your file
```javascript
const log = require('smallog');
```

Instead of your regular 
```javascript
console.log("Here is text" === 1);
```

Use this instead
```javascript
log("here is text" === 1);
```

For successes
```javascript
log.win("this will be green with a SUCCESS message to show you did the thing correctly!);
```

For bad bigmad
```javascript
log.fail("this will be red with a FAIL message and a short two-line stack trace so your whole terminal doesn't clog up.");
```

And a contrived try/ catch
```javascript
// example failure in action
try {
  a == 1 / 0;
  log.win(a);
} catch (e) {
  log.fail(e);
}
```

How about some grouping
```javascript
log("base");
log.nest("nested");
log("level 2");
log.nest("nested");
log("level 3");
log.nestEnd();
log.fail("Something went wrong");
log.nestEnd();
log.win("Back to base");
```
