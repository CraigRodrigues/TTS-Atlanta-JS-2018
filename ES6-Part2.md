# ES6 Part 2 - Maps, Sets, Modules and Class Syntax

## Maps

**Map** is a new way to store **key/value** pairs, while similar to objects **Map** is a bit more reliable when storing key/values.

### Why use a Map over an Object?

A Map object can iterate its elements in insertion order - and it comes with a `forEach` and `clear` method - along with a `size` property.

Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this, Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better.

An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). **The keys of an Object are Strings, where they can be any value for a Map.** You can get the size of a Map easily while you have to manually keep track of size for an Object.

Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

Use objects when there is logic that operates on individual elements.

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

**Set** is a like a map, but can only have unique values.

You can iterate through the elements of a set in insertion order with `forEach`. A value in the Set may only occur once; it is unique in the Set's collection.

```javascript
var mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add('some text'); // Set [ 1, 5, 'some text' ]
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

mySet.size; // 4, we just removed one value
console.log(mySet);// Set [ 1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2} ]
```

A cool trick with Sets is that you can convert arrays to sets and immediately get out only the unique values.

```javascript
let array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
let mySet = new Set(array); // {1, 2, 3, 4} --> Set object
let uniqArray = Array.from(mySet);

console.log(uniqArray); // [1, 2, 3, 4]
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

## Modules, Import and Export

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

## ⭐️ Now refactor your Youtube App to use modules ⭐️

## Class Syntax

One of the most interesting/exciting features of ES2015 is the introduction of Object Oriented Keywords. 
The benefit of this feature, is that developers more accustomed to Object Oriented Programming can more easily work with Constructors and Prototypes.

*note: the class features simply syntactic sugar, not an actual change to the functional nature of JavaScript*

##### *the old-fashioned way*
```javascript
function Person (name, job) {
  this.name = name;
  this.job = job;
};
 
Person.prototype.getName = function getName () {
  return this.name;
};
 
Person.prototype.getJob = function getJob () {
  return this.job;
};
var goodGuy = new Person('Jim Gordon', 'Commissioner');
console.log(goodGuy.getName());
// Jim Gordon
```

##### *the ES2015 way*
```javascript
class Person {
 
  constructor (name, job) {
    this.name = name;
    this.job = job;
  }
 
  getName () {
    return this.name;
  }
 
  getJob () {
    return this.job;
  }
}

let goodGuy = new Person('Jim Gordon', 'Commissioner');
console.log(goodGuy);
//Jim Gordon
```

For those of you that have experience in Ruby or Python, this syntax should look and feel familiar. 

- Use the `class` keyword followed by a capitalized name
- add a constructor function 
- add instance methods that give you access to the object's properties

### Inheritance
  
This syntatic sugar also provides a really nice and clean way to create inheritance chains 

*note remember that JS inhertance is still instance based (not class based)*

##### the old-fashioned way
```javascript
function Person (name, job) {
  this.name = name;
  this.job = job;
};
 
Person.prototype.getName = function getName () {
  return this.name;
};
 
Person.prototype.getJob = function getJob () {
  return this.job;
};

function SuperHero (name, heroName) {
  Person.call(this, name, heroName);
}

SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero;

SuperHero.parent = Person.prototype;
SuperHero.prototype.getJob = function () {
  return 'I am '+ this.job + "!"
};

var batman = new SuperHero('Bruce Wayne', 'Batman');

console.log(batman.getJob()); 
```

As you can see, this is pretty verbose. Let's take a look at the ES2015 way 

##### *the ES2015 way*
```javascript
class Person {
 
  constructor (name, job) {
    this.name = name;
    this.job = job;
  }
 
  getName () {
    return this.name;
  }
 
  getJob () {
    return this.job;
  }
}

class SuperHero extends Person {
 
  constructor (name, heroName, superPower) {
    super(name);
    this.heroName = heroName;
    this.superPower = superPower;
  }
  
  secretIdentity(){
    return `${this.heroName} is ${this.name}!!!`
  }
 
}
let batman = new SuperHero("Bruce Wayne", "Batman");

console.log(batman.secretIdentity())
// Batman is Bruce Wayne!!!
```

The 3 things that you'll notice:

- create a new SuperHero `class`
- use the `extends` keyword to indicate you want to inherit from the Person `class`<br> *after all, superhero's are People too*
-  the use of `super()` allows us to:
	-  reuse the exisiting `name` functionality from the Person `class`
	-  add superhero specific features to our constructor function
