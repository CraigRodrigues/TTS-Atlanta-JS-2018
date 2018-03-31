# Introduction to Node JS and npm

## What is Node JS exactly

So far we have been running all of our JavaScript in the browser, but we can also run it on any computer (servers). Node JS was created for this reason.

Just like how the browser adds functionality to JavaScript like the DOM and event listeners, Node adds functionality to JavaScript on the server with methods that allow you to read files, user input from the command line and much more.

### Advantages of Node

1. Ability to handle thousands of concurrent connections with minimal overhead on a single process.
1. JavaScript is perfect for event loops with first class function objects and closures.
1. A lot of people already know JavaScript. It is arguably the most popular programming language and the defacto language of the Web.
1. Using JavaScript on a web server as well as the browser reduces the impedance mismatch between the two programming environments which can communicate data structures via JSON that work the same on both sides of the equation.

## Versioning

While Node is still using JavaScript under the hood, it implements things JavaScript cannot do using C++ (reading files, streams, deal with HTTP requests). Also the engine that is powering Node is V8 (Google's JS engine that powers Chrome).

Eventhough ES6 has been released, it can only be used in certain versions of Node!

To see the version of node you have running type `node --version` or `node -v`

## Using node

In your terminal you can access the Node REPL and use it by typing `node` and hitting ENTER.

You will get another command prompt and you can start typing and evaluating JS.

```node
$ node
> console.log('Node is running');
Node is running
> .help
.break Sometimes you get stuck, this gets you out
.clear Alias for .break
.exit  Exit the repl
.help  Show repl options
.load  Load JS from a file into the REPL session
.save  Save all evaluated commands in this REPL session to a file
> .exit
```

## Node Modules

We have already been introduced to "modules" while using ES6 modules.

A module encapsulates related code into a single unit of code.

Node has its own module system based on what is know as the CommonJS module system.

Let's compare Node module vs ES6 module syntax

### Exporting a module

#### Node

```javascript
// add.js
const add = (a, b) => a + b;

module.exports = { add };
```

#### ES6/Browser

```javascript
// add.js
const add = (a, b) => a + b;

export { add };
```

In Node all your exports are just properties on the `module.exports` object. Just add to it to export properly!

### Importing a module

#### Node

```javascript
// index.js
const math = require('./add');

math.add(2, 2); // 4

// OR WITH DESTRUCTURING

const { add } = require('./add');

add(2, 2); // 4
```

#### ES6/Browser

```javascript
// index.js
import { add } from './add.js';

add(2, 2); // 4
```

Importing in Node is done via the `require` method, which must be assigned to a variable. Note that both import statements are destructuring the object that is coming back!

Also notice that Node will add .js to the end of the file you are requiring by default unlike with ES6.

## Core Modules

Node.js is a light weight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts. **However, you need to import the core module first in order to use it in your application.**

The following table lists some of the important core modules in Node.js.

| Core Module | Description |
| :----------- | :----------|
| http        | http module includes classes, methods and events to create Node.js http server. |
| url         | url module includes methods for URL resolution and parsing |
| querystring | querystring module includes methods to deal with query string. |
| path        | path module includes methods to deal with file paths. |
| fs          | fs module includes classes, methods, and events to work with file I/O. |
| util        | util module includes utility functions useful for programmers. |

Core modules do not need a path to be required. You can just use the name directly like this: `require('http')`

## Exercise 01 - Simple Math

Download and complete the exercise called simple-math.

See the README for instructions

## npm

### What is it?

[Intro to NPM Video](https://www.youtube.com/watch?v=x03fjb2VlGY)

### Why is it a thing?

### Installing a Package

Locally: `npm install <package name>`
Globally: `npm install -g <package name>`

npm can install packages in local or global mode. In local mode it installs the package in a `node_modules` folder in your parent working directory. This location is owned by the current user.

Global packages are installed in `{prefix}/lib/node_modules/` which is owned by root (where `{prefix}` is usually `/usr/` or `/usr/local`). This means you would have to use `sudo` to install packages globally.

## n

We can use an npm package called `n` (just the letter n) to help us keep track of the version of Node we are using (and will also help you update it).

Let's install it globally so we can use the `n` command anywhere: `npm i -g n`

## package.json

When you install packages locally, you normally do so using a package.json file. Let’s go ahead and create one.

```node
$ npm init
package name: (project)
version: (1.0.0)
description: Demo of package.json
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
```

Press Enter to accept the defaults, then type yes to confirm. This will create a package.json file at the root of the project.

```JSON
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

**If you want a quicker way to generate a package.json file use `npm init --y`**

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