# Introduction to Node JS and npm

## What is Node JS exactly

So far we have been running all of our JavaScript in the browser, but we can also run it on any computer (servers). Node JS was created for this reason.

Just like how the browser adds functionality to JavaScript like the DOM and event listeners, Node adds functionality to JavaScript on the server with methods that allow you to read files, user input from the command line and much more.

### Advantages of Node

1. Ability to handle thousands of concurrent connections with minimal overhead on a single process.
1. JavaScript is perfect for event loops with first class function objects and closures.
1. A lot of people already know JavaScript. It is arguably the most popular programming language and the defacto language of the Web.
1. Using JavaScript on a web server as well as the browser reduces the impedance mismatch between the two programming environments which can communicate data structures via JSON that work the same on both sides of the equation.

## Node Versions

While Node is still using JavaScript under the hood, it implements things JavaScript cannot do using C++ (reading files, streams, deal with HTTP requests). Also the engine that is powering Node is V8 (Google's JS engine that powers Chrome).

Eventhough ES6 has been released, it can only be used in certain versions of Node!

To see the version of node you have running type `node --version` or `node -v`

## Using Node

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

_note: You can export using `exports`, but here is an explaination on how that works and why it's best to stick with `module.exports`: [https://stackoverflow.com/a/16383925](https://stackoverflow.com/a/16383925)_

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

## Exercise 01 - Arithmetic.js

Now we're going to create a simple Arithemtic library.

1. Go to [this repo here](https://github.com/CraigRodrigues/arithmetic.js) and clone it down.
1. See the README for instructions on how to begin.
1. You will be implementing the following four functions to start:

### Add

- Adds two or more values
- Sum up a single array of values
- Takes an array and a value and adds that value to every item in the array and returns a **NEW array** (does not mutate)

```javascript
add(2, 3, 4, 5)     // returns 19
add([1, 5, 10])     // returns 16
add([1, 2, 3], 10)  // returns array [11, 12, 13]
```

### Subtract

- Subtracts two values
- Takes an array and a value and subtracts that value to every item in the array and returns a **NEW array** (does not mutate)

```javascript
subtract(10, 9)         // returns 1
subtract([1, 2, 3], 10) // returns array [-9, -8, -7]
```

### Divide

- Divides two values, `x / y` (x = numerator, y = denominator)
- Takes an array and a value and divides that value (as the denominator) to every item in the array and returns a **NEW array** (does not mutate)

```javascript
divide(2, 3)          // returns 0.6666666666666666
divide([1, 2, 3], 3)  // returns array [0.3333333333333333, 0.6666666666666666, 1]
```

### Multiply

- Multiples two or more values
- Generates the product of single array of values
- Takes an array and a value and multiplies that value by every item in the array and returns a **NEW array** (does not mutate)

```javascript
multiply(4, 5.2);             // returns 20.8
multiply(2, 3, 4);            // returns 24
multiply([1, 2, 3, 4])        // returns 24
multiply([5, 10, 15, 20], 5)  // returns array [25, 50, 75, 100]
```

## npm

### What is it?

npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It automatically comes bundled with Node.

[Intro to NPM Video](https://www.youtube.com/watch?v=x03fjb2VlGY)

### Why is it a thing?

It allows people to use and distribute reusable bundles of code! An alternative is [Yarn](https://yarnpkg.com/en/) which is written and maintained by Facebook.

### Installing a Package

Locally: `npm install <package name>`
Globally: `npm install -g <package name>`

npm can install packages in local or global mode. In local mode it installs the package in a `node_modules` folder in your parent working directory. This location is owned by the current user.

Global packages are installed in `{prefix}/lib/node_modules/` which is owned by root (where `{prefix}` is usually `/usr/` or `/usr/local`). This means you would have to use `sudo` to install packages globally.

## n

We can use an npm package called `n` (just the letter n) to help us keep track of the version of Node we are using (and will also help you update it).

Let's install it globally so we can use the `n` command anywhere: `npm i -g n`

[https://www.npmjs.com/package/n](https://www.npmjs.com/package/n)

## package.json

When you install packages locally, you normally do so using a package.json file. Let’s go ahead and create one for our Arithmetic.js library.

```
$ npm init
package name: arithmetic.js
version: (1.0.0)
description: Super simple math functions
entry point: index.js
test command:
git repository:
keywords:
author: Craig Rodrigues
license: (ISC)
```

Press Enter to accept the defaults, then type yes to confirm. This will create a package.json file at the root of the project.

```JSON
{
  "name": "arithmetic.js",
  "version": "1.0.0",
  "description": "simple math functions",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Craig Rodrigues",
  "license": "ISC"
}
```

**If you want a quicker way to generate a package.json file use `npm init --y`**

The main field is the primary entry point to your program and the scripts field lets you specify script commands that are run at various times. We will go further into npm scripts a little bit later.

## Installing a package/dependency

Now let’s try and install Tape.

`npm install tape`

Now if we have a look in `package.json` we will see that a dependencies field has been added:

```JSON
{
  ...
  "dependencies": {
    "tape": "^4.9.0"
  }
}
```

## Managing dependencies with package.json

As you can see, Tape v4.9.0 was installed in our project.

The caret (^) at the front of the version number indicates that when installing, npm will pull in the highest version of the package it can find where the only the major version has to match (unless a package-lock.json file is present). In our case, that would be anything below v4.0.0.

This method of versioning dependencies (major.minor.patch) is known as semantic versioning. You can read more about it here: [Semantic Versioning: Why You Should Be Using it.](https://www.sitepoint.com/semantic-versioning-why-you-should-using/)

Also notice that Tape was saved as a property of the dependencies field. This has become the default in the latest version of npm and is used for packages required for the application to run.

It would also be possible to save a package as a devDependency by specifying a `-D` flag. devDependencies are packages used for development purposes, for example for running tests (with Tape) or transpiling code.

By far and away the biggest reason for using package.json to specify a project’s dependencies is **portability**.

For example, when you clone someone else’s code, all you have to do is run `npm i` in the project root and npm will resolve and fetch all of the necessary packages for you to run the app.

## Package-lock.json

Introduced in npm 5, the purpose of this file is to ensure that the dependencies remain the same on all machines the project is installed on. It is automatically generated for any operations where npm modifies either the node_modules folder, or package.json file.

For detailed info go here: [https://docs.npmjs.com/files/package-lock.json](https://docs.npmjs.com/files/package-lock.json)

## Uninstalling a Package

npm is a package manager so it must be able to remove a package.

`npm uninstall tape`

## Installing a specific version of a package

`npm install tape@4.9.0`

## Tape and TDD in Node

Let's reinstall tape, however this time as a Dev Dependency! `npm i -D tape`

devDependencies are packages used for development purposes, for example for running tests or transpiling code.

You can read all about Tape here: [https://www.npmjs.com/package/tape](https://www.npmjs.com/package/tape)

## How to write tests with Tape

```javascript
  const test = require('tape');

  test('It should add 2 numbers', (t) => {
      let actual = add(2, 4);
      let expected = 6;

      t.equal(actual, expected);
      t.end();
  });
```

Notice `t.end()`. This is required so tape knows when a test is complete.

Another alternative to using `t.end` is to use `t.plan(n)`. Declare that n assertions should be run. t.end() will be called automatically after the nth assertion. If there are any more assertions after the nth, or after t.end() is called, they will generate errors.

```javascript
  const test = require('tape');

  test('It should add 2 numbers', (t) => {
      let actual = add(2, 4);
      let expected = 6;

      t.plan(1);
      t.equal(actual, expected);
  });
```

## How to run your tests

`tape tests/*.spec.js`

## Using npm scripts to run your tests

Under the scripts property in your `package.json` add in the command to run tape tests.

```JSON
"scripts": {
    "test": "tape tests/*.spec.js"
  },
```

Now we can run our tests by just typing `npm test` or `npm t`

## Exercise 02: Let's add tests for Arithmetic.js

Let's add more functionality to Arthmetic.js.

Add the following functions and try not to use any built in Math methods that javascript has already:

Use tape to write some unit tests for each of the functions (including the one's you've already finished). Every function should have at least 5 tests, enough to cover all major uses you can think of. Try to think of edge cases like negative numbers, multiplying/dividing by zero, and when the user provides too few arguments.

**Don't forget to avoid using native JavScript methods!**

_If you get stuck with tape [reference the documentation](https://github.com/substack/tape)._

### Here is what your files should look like

```
    arithmetic-library
  ├── package.json
  ├── index.js
  ├── functions
      └── add.js
      └── subtract.js
  ├── tests
      └── add.spec.js
      └── subtract.spec.js
```

### Abs

Returns the absolute value of a single number or returns the absolute value as an array for every value in an array of numbers

### Square

Squares a single value or an array of values

### Cube

Cubes a value of an array of values

### Power

Takes a value and exponent or an array of values and a single exponent

### Minimum

Returns the minimum value from one or more numbers or the minimum from an array of values

### Maximum

Returns the maximum value from one or more numbers or the minimum from an array of values

### Mean

Returns the average value from one or more numbers or from an array of values

### Median

Compute the median from any amount of numbers or an array of numbers. In case of an even number of values, the average of the two middle values is returned.

### Mode

Computes the mode of a any amount of numbers or an array of numbers. If there is more than one mode, it returns an array of those values.

## Homework due 4/6

### Finish Arithmetic.js

Complete your Arithmetic.js library with tests.

### Watch this short video on React

[What Is React?](https://www.youtube.com/watch?v=0KlRgFEEz0g) [https://www.youtube.com/watch?v=0KlRgFEEz0g](https://www.youtube.com/watch?v=0KlRgFEEz0g)
