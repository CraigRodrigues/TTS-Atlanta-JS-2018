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

```
$ npm init
package name: simple math
version: (1.0.0)
description: Super simple math functions
entry point: index.js
test command:
git repository:
keywords:
author:
license: (ISC)
```

Press Enter to accept the defaults, then type yes to confirm. This will create a package.json file at the root of the project.

```JSON
{
  "name": "simple math",
  "version": "1.0.0",
  "description": "Super simple math functions",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

**If you want a quicker way to generate a package.json file use `npm init --y`**

The main field is the primary entry point to your program and the scripts field lets you specify script commands that are run at various times. We will go further into npm scripts a little bit later.

Now let’s try and install Tape.

`npm install Tape`

Now if we have a look in `package.json` we will see that a dependencies field has been added:

```
{
  ...
  "dependencies": {
    "tape": "^4.9.0"
  }
}
```

## Managing dependencies with package.json

As you can see, Tape v4.9.0 was installed in our project.

The caret (^) at the front of the version number indicates that when installing, npm will pull in the highest version of the package it can find where the only the major version has to match (unless a package-lock.json file is present). In our case, that would be anything below v2.0.0.

This method of versioning dependencies (major.minor.patch) is known as semantic versioning. You can read more about it here: [Semantic Versioning: Why You Should Be Using it.](https://www.sitepoint.com/semantic-versioning-why-you-should-using/)

Also notice that Tape was saved as a property of the dependencies field. This has become the default in the latest version of npm and is used for packages required for the application to run.

It would also be possible to save a package as a devDependency by specifying a -D flag. devDependencies are packages used for development purposes, for example for running tests (with Tape) or transpiling code.

By far and away the biggest reason for using package.json to specify a project’s dependencies is **portability**.

For example, when you clone someone else’s code, all you have to do is run `npm i` in the project root and npm will resolve and fetch all of the necessary packages for you to run the app.

## Uninstalling a Package

npm is a package manager so it must be able to remove a package.

`npm uninstall tape`

## Installing a specific version of a package

`npm install tape@4.9.0`

## Tape and TDD in Node

Let's reinstall tape, however this time as a Dev Dependency! `npm i -D tape`

You can read all about Tape here: [https://www.npmjs.com/package/tape](https://www.npmjs.com/package/tape)

## Exercise 02

You will now use tape to write some unit tests for the functions you've already created. Try to think of edge cases like negative numbers and multiplying/dividing by zero.

## Homework due 4/6

### Lowdasher ES6...with Testing!

Complete these functions for your Lowdasher (ES6) Refactor with Tests!

1. Clone this repo
1. Run `npm i` to install the dependencies
1. Take a look at the code that has already been done for you as examples
1. Code
1. Write tests! (**Hint: Look at the tests that were already made and add your own**)

- identity
- first
- last
- each
- indexof
- filter
- reject
- uniq
- map

**BONUS** Convert the rest of Lowdasher (Part 2) to ES6 using Node.