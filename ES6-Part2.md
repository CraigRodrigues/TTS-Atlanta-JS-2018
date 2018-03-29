# ES6 Part 2 - Maps, Sets, Modules and Class Syntax

## Maps

**Map** is a new way to store **key/value** pairs, while similar to objects **Map** is a bit more reliable when storing key/values. Maps are also know as **Dictionaries**

### Examples

```javascript
let student = { name: "Latori" };
let status = new Map();

status.set(name, "Latori");
status.set("feeling", "awesome")
console.log(status.get(name)); // Latori
console.log(status.get("feeling")) // awesome
```
- To set a value use `set`
- To get an object use `get`

```javascript
var myMap = new Map();

var keyString = 'a string',
    keyObj = {},
    keyFunc = function() {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj');
myMap.set(keyFunc, 'value associated with keyFunc');

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get('a string');   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}
```

### Why use a Map over an Object?

A Map object can iterate its elements in insertion order - and it comes with a `forEach` and `clear` method - along with a `size` property.

Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this, Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better.

An Object has a prototype, so there are default keys in the map. However, this can be bypassed using map = Object.create(null). **The keys of an Object are Strings, where they can be any value for a Map.** You can get the size of a Map easily while you have to manually keep track of size for an Object.

Use maps over objects when keys are unknown until run time, and when all keys are the same type and all values are the same type.

Use objects when there is logic that operates on individual elements.

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
console.log(mySet);// Set [ 1, "some text", Object { a: 1, b: 2 }, Object { a: 1, b: 2 } ]
```

A cool trick with Sets is that you can convert arrays to sets and immediately get out only the unique values.

```javascript
let array = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
let mySet = new Set(array); // {1, 2, 3, 4} --> Set object
let uniqArray = Array.from(mySet);

console.log(uniqArray); // [1, 2, 3, 4]
```

## Modules, Import and Export

🚀 Now we are going to refactor our Youtube Clone app to use ES6 modules! But why use modules?

> Good authors divide their books into chapters and sections; good programmers divide their programs into modules.

> Like a book chapter, modules are just clusters of words (or code, as the case may be).

> Good modules, however, are highly self-contained with distinct functionality, allowing them to be shuffled, removed, or added as necessary, without disrupting the system as a whole.

*[JavaScript Modules: A Beginner’s Guide](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)*

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

## Aside: Running a Server Locally

- Why do we need a server instead of running out app directly from the file?
- What does `http-server` do behind the scenes?

 ### http-server

- `npm install -g http-server` (we will cover what npm does in the next class)
- Run the server by typing `http-server` in your terminal at your youtube clone directory
- You will see a list of IP addresses you can put into your browser to access the app
- Take a note of the GET requests `http-server` responds to when you go there
- The app still works correct, except now it uses the actual client-server model the browser expects!

## ⭐️ On a new branch refactor your Youtube App to use modules ⭐️

### Branching

https://www.atlassian.com/git/tutorials/using-branches

### Checkout/Changing Branches

https://www.atlassian.com/git/tutorials/using-branches/git-checkout

## Class Syntax

One of the more interesting features of ES6 is the introduction of Object Oriented Keywords. People fall on both sides of the fence when it comes to ES6 Classes. Some feel it's not useful at all, others enjoy it. Just remember that this is simply "syntactic sugar", not an actual change to the functional nature of JavaScript. **JavaScript has no REAL notion of Classes!**

The benefit of this feature, is that developers more accustomed to Object Oriented Programming can more easily work with Constructors and Prototypes.

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
	
## ⭐️ On a new branch refactor your Youtube App to use ES6 Classes ⭐️

- You should have one class that handles the homepage
- And another that handles the videopage

## HOMEWORK DUE 4/2/18

### 1. Watch this [video on ES6 Classes](www.youtube.com/watch?v=EUtZRwA7Fqc)

### 2. Finish refactoring your Youtube Clone app to use ES6 Modules and ES6 Classes if you didn't finish in class (be sure to put this stuff on a new branch!)

### 3. Refactor your Jungle Challenge Homework using ES6 Classes! (Instructions below)

#### Create the objects that you feel would best model a jungle using your best Object Oriented design or functional approach and coding practices based on the following requirements:

> 1. The jungle contains several species of animals; tigers, monkeys and snakes.
> 2. All animals can do three things, make a sound, eat food, and sleep.
> 3. Each species of animal knows how many others of its kind exist.
> 4. By default when an animal’s energy level changes, it changes in the following ways:

>      a. -3 for making a sound

>      b. +5 for eating food

>      c. +10 for sleeping

> 5. The jungle can perform a sound off. This involves all of the animals in the jungle each making their sound, along with reporting their energy level.
> 6. Tigers get +5 energy for sleeping.
> 7. Monkeys get +2 energy for eating and -4 energy for making a sound.
> 8. Some animals have the ability to play.
> 9. Only monkeys can play. When they do they say "Oooo Oooo Oooo" and get -8 energy. If a monkey doesn't have enough energy > to play they say "Monkey is too tired".
> 10. The jungle contains several types of food; meat, fish, bugs and grain.
> 11. Tigers can't eat grain because they have sensitive digestive systems.
> 12. Bonus Item: The jungle can have each animal perform a random activity out of the ones possible for that animal. **Include simple unit tests.**

### 🚀 BONUS: Complete the remainder of the [Count to 6](https://github.com/domenic/count-to-6) NodeSchool Module
