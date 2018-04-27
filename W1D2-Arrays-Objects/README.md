# W1D2 - Arrays and Objects

## Review

* Review RPS Homework
* Review Mario Homework
* Review REPL.it

## Recap

* Last class we learned about variables and flow control
* Tonight we'll be learning about Data Structures - Arrays and Objects

## Arrays

* Arrays are ordered lists with methods to traverse and edit.
* Zero based index
* Dynamic length and types

### Creating an Array

```javascript
var teachers = ['Assaf', 'Shane'];
```

### Addressing an Array

```javascript
console.log(teachers[0]); //'Assaf'
```

### Get Array Length

```javascript
var a = [1, 2, 3];
teachers.length == 3;
```

### Push and Pop (like a pez dispenser)

```javascript
var teachers = ['Assaf', 'Shane'];
teachers.push('Zack'); //['Assaf', 'Shane', 'Zack']
var teacher1 = teachers.pop(); //teacher1 == 'Zack', teachers == ['Assaf', 'Shane']
```

### Shift and Unshift (from the front)

```javascript
var teachers = ['Assaf', 'Shane'];
teachers.unshift('Zack'); // ['Zack', Assaf', 'Shane']
var teacher = teachers.shift(); //teacher == 'Zack', teachers = ['Assaf', Shane']
```

### Arbitrary Adding

```javascript
teachers[4] = 'Cam Newton'; // ['Assaf', 'Shane', 'Zack', undefined, 'CamNewton'];
```

### Finding an item

```javascript
var a = [10, 11, 20];
a.indexOf(11); //1
a.indexOf(50); //-1
```

### Slicing and Splicing

```javascript
var a = [1, 2, 3, 4];

//Slice - doesn't mutate array, slice(start,end)
a.slice(0, 2); //[1,2]

//Splice - splice(start,numToRemove,...items to add) - so dumb
a.splice(1, 2, 'a', 'b'); //a is [1,'a','b',4]
```

### Iterating Over an Array

```javascript
//Iterating over Arrays using for loop and forEach
var teachers = ['Assaf', 'Shane', 'Zack'];
for (var i = 0; i < teachers.length; i++) {
    console.log(teachers[i]);
}

//Uses a function, more on that next class
teachers.forEach(function(item, index) {
    console.log(item, index);
});
```

### Converting Arrays to Strings

```javascript
//Stringifying
teachers = ['Assaf', 'Shane'];
teachers.toString();
('Assaf,Shane');
teachers.join('&');
('Assaf&Shane');
```

### Ordering Sorting

```javascript
//Sorting
var a = [2, 1, 3];
a.sort(); //[1,2,3]

a.reverse(); //[3,2,1]

//Alternatively a.sort(mySortFunction);
```

## Exercise 1

* Reference [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

You're going to the grocery store and decide to use an array to keep track of your shopping list.

1. Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
2. Add 'fruit loops' to the list.
3. Update 'coffee' to 'fair trade coffee'
4. Replace 'chips' and 'salsa' with 'rice' and 'beans'
5. Create an empty array to represent your shopping cart.
6. Remove the last item from your shopping list and add it to your cart
7. Remove the first item from your shopping list and add it to the cart
8. Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.
9. Sort the items in your cart alphabetically... backwards
10. Print the list of items in your shopping cart to the console as comma separated string.

### Exercise 1 answer

```javascript
// will be updated after all homework is submitted
```

## Objects

An object is a set of keys and values, like a dictionary. Values can be

```javascript
var course = {
    name: 'JavaScript Applications',
    awesome: true
};
```

Values can be primative objects, arrays, or other objects

```javascript
var course = {
    name: 'JavaScript Applications',
    awesome: true,
    students: ['Jim', 'Katy'],
    instructor: {
        name: 'Assaf',
        company: 'Levvel'
    }
};
```

### Addressing an Object

Object properties can be referenced in two ways. The more common _dot_ notation, or the _bracket_ notation, which is useful if you have a property name saved in a string.

```javascript
course.name;
course['name'];
```

You can combine dot and bracket notation to address infinitely deeply nested values inside objects.

```javascript
var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane']
};

console.log(course.teachers[0]); //Assaf
```

A more complex example:

```javascript
var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        }
    ]
};

console.log(course.students[0].computer.OS);
```

### Update an Object

Properties of objects can be updated after an object is created.

```javascript
course.name = 'super duper class';
```

### Mutate an Object

You can also assign entirely new keys, delete existing ones.

```javascript
course.fun = true; //add a property
delete course.name; //remove one
```

## Exercise: Addressing Objects

Given the following object:

```javascript
var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }
    ],
    preReqs: {
        skills: ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};
```

### Get the following values:

1. Name of the course ('JavaScript Applications')
2. Name of the second teacher ('Shane')
3. Name of the first student ('Steve')
4. Katy's computer type ('macbook')
5. The preReq equipment object
6. The second OSOption from equipment prereqs ('osx')
7. string listing the OSOptions separated by 'or' ('linux or osx')
8. An array of all the students that are using OSX.

### Addressing Objects Answer

```javascript
// will be updated after all homework is turned in
```

## Homework

### **Due 2/27/2018**

* **MANDATORY**: Go through [Udacity's Intro to JavaScript](https://www.udacity.com/course/intro-to-javascript--ud803) **Lessons 1-7** _OR_ [Codecademy: Introduction to Javascript](https://www.codecademy.com/learn/introduction-to-javascript) **Lessons 1-8** (2-4 hours)
* **MANDATORY**: Go through ALL of these slides **in order** (2 hours)
    1. [Values & Types](https://docs.google.com/presentation/d/e/2PACX-1vRb_3QdjNS12sjZ1kJfMlqetl5eg1loP46eOECJLdLhgrqPRXBfPAXtmWaiHfW1ZEQpsy4GVLVrZ3s-/pub?start=false&loop=false&delayms=60000)
    1. [Operators, Expressions and Statements](https://docs.google.com/presentation/d/e/2PACX-1vRK6r0OKJ7pRyp_1Kyl8tI5OLtW0KjRZdxiRuG6aVbuuEqzm7NIwoP5ngy3timaFms_rg80ElEHI-a1/pub?start=false&loop=false&delayms=60000)
    1. [Variables](https://docs.google.com/presentation/d/e/2PACX-1vRXqEZptKk0jQWAH5bhZh_ZxoEBFC0uiUUUob0RQIy_54updTwZdgE2JLgJ1Xh_3g9QIewGaj4GunhD/pub?start=false&loop=false&delayms=60000)
    1. [Objects and Properties](https://docs.google.com/presentation/d/e/2PACX-1vQYQYKRBShuARKvY0-sGRHkZsi20k2VSrKUh7_ulfeQGkG5usbR7fM_NgAO8kH5xZOHc3jXQB3VU-gP/pub?start=false&loop=false&delayms=60000)
    1. [Arrays](https://docs.google.com/presentation/d/e/2PACX-1vQtqS3SPknhtO2fNEtPFeVsQdss7umt1hZk1q4vsF9-TJ_lyK2RuID7hedZPWE49eRPzfksnUV9GK3z/pub?start=false&loop=false&delayms=60000)
    1. [Functions](https://docs.google.com/presentation/d/e/2PACX-1vTF9h9nSLD1F6GMeUxWzSVo-ssJ9or0IFFF3ZPo9NI6qAJggmS1-mSttCoGJqqNTdkscRPnn2T3zoSF/pub?start=false&loop=false&delayms=60000)
    1. [Parameters and Arguments](https://docs.google.com/presentation/d/e/2PACX-1vTGi17gRmTYPOrjeSvlGChVmdiX7S7JbPg1PHMAA3Q2qKv-DzgJk8vZU9fDLVMxVYVFst99hHbcv58C/pub?start=false&loop=false&delayms=60000)
    1. [Passing Functions to Functions](https://docs.google.com/presentation/d/e/2PACX-1vQRjM3hQS4gYOEIgyxwL06eALrBk31DrilAgdJcDySv3wk4TIz-VzkAW9Uu_k5EQVQXAIiNBtKGS-ku/pub?start=false&loop=false&delayms=60000)
* EXTRA: [Eloquent JavaScript 3rd Edition Chapters 1-4](https://eloquentjavascript.net/3rd_edition/) (10 hours)
* Next class we will briefly review functions, higher order functions, then dive into Git and Github

## Extra Resources and Reading

[JavaScript for Cats](http://jsforcats.com)

Array Reference
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Javascript types
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

JSON tutorial
[http://www.w3schools.com/json/default.asp](http://www.w3schools.com/json/default.asp)
