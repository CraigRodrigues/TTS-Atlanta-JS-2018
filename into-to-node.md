# Introduction to Node JS and npm

## What is Node JS exactly?

So far we have been running all of our JavaScript in the browser, but we can also run it on any computer (servers). Node JS was created for this reason.

Just like how the browser adds functionality to JavaScript like the DOM and event listeners, Node adds functionality to JavaScript on the server with methods that allow you to read files, user input from the command line and much more.

Advantages of Node:

1. Ability to handle thousands of concurrent connections with minimal overhead on a single process.
1. JavaScript is perfect for event loops with first class function objects and closures.
1. A lot of people already know JavaScript. It is arguably the most popular programming language and the defacto language of the Web.
1. Using JavaScript on a web server as well as the browser reduces the impedance mismatch between the two programming environments which can communicate data structures via JSON that work the same on both sides of the equation.

## Versioning

While Node is still using JavaScript under the hood, it implements things JavaScript cannot do using C (reading files, streams, deal with HTTP requests). Also the engine that is powering Node is V8 (Google's JS engine that powers Chrome).

Eventhough ES6 has been released, it can only be used in certain versions of Node!

## Node Modules

We have already been introduced to "modules" while using ES6 modules.

A module encapsulates related code into a single unit of code.

Node has its own module system based on what is know as the CommonJS module system.

Let's compare Node module vs ES6 module syntax

### exporting a module

Node
```javascript
// add.js
const add = (a, b) => a + b;

module.exports = { add };
```

ES6
```javascript
// add.js
const add = (a, b) => a + b;

export { add };
```

In Node all your exports are just properties on the `module.exports` object. Just add to it to export properly!

### importing a module

Node
```javascript
// index.js
const math = require('./add');

math.add(2, 2); // 4

// OR WITH DESTRUCTURING

const { add } = require('./add');

add(2, 2); // 4
```

ES6/Browser
```javascript
// index.js
import { add } from './add.js';

add(2, 2); // 4
```

Importing in Node is done via the `require` method, which must be assigned to a variable. Note that both import statements are destructuring the object that is coming back!

Also notice that Node will add .js to the end of the file you are requiring by default unlike with ES6.

## npm

## package.json

## n

## Tape and TDD in Node

## Lowdasher ES6...with Testing!

- identity
- first
- last
- each
- indexof
- filter
- reject
- uniq
- map

## Homework due 4/6

- Complete these functions for your Lowdasher (ES6) Refactor with Tests!
- **BONUS** Convert the rest of Lowdasher to ES6 using Node.