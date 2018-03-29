# ES6 Part 2 - Maps, Sets, Modules and Class Syntax

## Maps

**Map** is a new way to store **key/value** pairs, while similar to objects **Map** is a bit more reliable when storing key/values. *This is due to the fact that Objects convert both keys and values to strings.*

According to [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) 
> The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.

```javascript
let student = {name: "Latori"};
let status = new Map();

status.set(name, "Latori");
status.set("feeling", "awesome")
console.log(status.get(name));
console.log(status.get("feeling"))
//Latori
//awesome
```
- to set a value use `set`
- to get an object use `get`

## Sets

**Set** is a collection of unique values

```javascript
let student = new Set();
student.add('Katy').add({mood: "happy"});

console.log(student);
// ["Katy",{"mood":"happy"}]
```

## Aside: Running a Server Locally

- Why do we need a server instead of running out app directly from the file?
- What does `http-server` do behind the scenes?

 ### http-server

- `npm install -g http-server` (we will cover what npm does in the next class)
- Run the server by typing `http-server` in your terminal at your youtube clone directory
- You will see a list of IP addresses you can put into your browser to access the app
- Take a note of the GET requests http-server responds to when you go there
- The app still works correct, except now it uses the actual client-server model the browser expects!

## Modules

🚀 Now we are going to refactor our Youtube Clone app to use ES6 modules! But why use modules?

### Why Modules

This provides several significant benefits including:

- avoids naming conflicts
- removes global variables
- better control over scope
- better control over 3rd party libraries
- logical load order
- faster tests

To many, this is the most exciting feature of ES2015

Modules consist of **export** and **import** statements

According to Mozilla:

Export:

> ...is used to export functions, objects or primitives from a given file (or module).

Import:

> ...is used to import functions, objects or primitives that have been exported from an external module, another script, etc.


let's take a look some basic examples:


### exporting a single function
```javascript
// ./src/calculator.js

export function add(...numbers) {	
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}
```

```javascript
// .src/index.js

import {add} from './calculator';

console.log(add(1,2,3));
```


### exporting multiple items
```javascript
// ./src/calculator.js

export function add(...numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
};

export function subtract(x,y) {
  return x - y;
};
```

```javascript
// .src/index.js

import {add, subtract} from './calculator';

console.log(add(1,2,3));
console.log(subtract(6,2));
```

**Variables and Constants can also be exported**

```javascript
// ./src/calculator.js

export const numbersArray = [1,2,3,4,5];
```

```javascript
// ./src/index.js

import _ from 'lodash';

console.log(_.shuffle(numbersArray));
```

**Default Exporting** allows you to set one item as default. This is helpful with a module or class that returns a single value

```javascript
// ./src/calculator.js

export default function add(...numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
};
```

```javascript
// ./src/index.js

import add from './calculator';

console.log(add(1,2,3));
```

Only one default can be clarified per module. <br>
Modules can, however, have default and named exports

```javascript
// ./src/calculator.js

export default function add(...numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
};

export function subtract(x,y) {
  return x - y;
};

```

```javascript
// ./src/index.js

import add, {subtract} from './calculator';

console.log(add(1,2,3));
console.log(subtract(6,2));
```

One final way to import is by using the `*` (all, wildcard) operator. This syntax will import all exports. 

```javascript
// ./src/calculator.js

export function add(...numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
};

export function subtract(x,y) {
  return x - y;
};
```

```javascript
// ./src/index.js

import * as calculate from './calculator';

console.log(calculate.add(1,2,3));
console.log(calculate.subtract(6,2));
```

As you can see, writing modular code is the future of JavaScript. The modular pattern will be heavily used as we move into building applications with React. 
