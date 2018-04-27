# Arithmetic.js

## Instructions

1. Clone down this repo.
1. Complete the functions for add, divide, multiply and subtract
1. Use node modules to require and export all the functions
1. We will add to this repo as we go!

## Functions - Part 1

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

- Adds two or more values
- Generates the product of single array of values
- Takes an array and a value and multiplies that value by every item in the array and returns a **NEW array** (does not mutate)

```javascript
multiply(4, 5.2);             // returns 20.8
multiply(2, 3, 4);            // returns 24
multiply([1, 2, 3, 4])        // returns 24
multiply([5, 10, 15, 20], 5)  // returns array [25, 50, 75, 100]
```

## Functions - Part 2

### Abs

- Returns the absolute value of a single number
- Returns the absolute value as an array for every value in an array of numbers

### Square

- Returns the square of a single value
- Returns the square of every number in an array of numbers and returns a **NEW array** (does not mutate)

### Cube

- Cubes a value
- Cubes an array of of values and returns a **NEW array** (does not mutate)

### Power

- Takes a value and exponent and returns that number raised to that exponent
- Takes an array of values and a single exponent and returns a **NEW array** (does not mutate) of numbers that are that value raised to the exponent

### Minimum

- Returns the minimum value from one or more numbers
- Returns the minimum from an array of values

### Maximum

- Returns the maximum value from one or more numbers
- Returns the minimum from an array of values

### Mean

- Returns the average value from one or more numbers
- Returns the average from an array of values

### Median

- Computes the median from any amount of numbers
- Computes the mediam from an array of numbers
- **In case of an even number of values, the average of the two middle values is returned**

### Mode

- Computes the mode of a any amount of numbers (the one that appears the most number of times)
- Computes the mode from an array of numbers. **If there is more than one mode, it returns an array of those values.**