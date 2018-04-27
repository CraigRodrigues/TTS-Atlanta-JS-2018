// ALL CODE IN THIS FILE SHOULD NOT BE MODIFIED!

const test = require('tape');
const sinon = require('sinon');
const practice = require('../practice.js');

let order = 1;

test(`#${order++} addTwoNumbers`, (t) => {
    t.equal(
        practice.addTwoNumbers(1, 11),
        12,
        'addTwoNumbers should add two numbers correctly'
    );
    t.equal(
        practice.addTwoNumbers(-10, -4),
        -14,
        'addTwoNumbers should add two negative numbers'
    );
    t.equal(
        practice.addTwoNumbers(0, 4),
        4,
        'addTwoNumbers should add zero correctly'
    );
    t.end();
});

test(`#${order++} multiplyTwoNumbers`, (t) => {
    t.equal(
        practice.multiplyTwoNumbers(1, 11),
        11,
        'multiplyTwoNumbers should multiply two numbers correctly'
    );
    t.equal(
        practice.multiplyTwoNumbers(-10, -4),
        40,
        'multiplyTwoNumbers should multiply two negative numbers'
    );
    t.equal(
        practice.multiplyTwoNumbers(0, 4),
        0,
        'multiplyTwoNumbers should multiply zero correctly'
    );
    t.end();
});

test(`#${order++} isOldEnoughToDrink`, (t) => {
    t.equal(
        practice.isOldEnoughToDrink(20),
        false,
        'isOldEnoughToDrink should return false for people under 21'
    );
    t.equal(
        practice.isOldEnoughToDrink(22),
        true,
        'isOldEnoughToDrink should return true for people older than 21'
    );
    t.end();
});

test(`#${order++} isOldEnoughToDrive`, (t) => {
    t.equal(
        practice.isOldEnoughToDrive(10),
        false,
        'isOldEnoughToDrive should return false for people under 16'
    );
    t.equal(
        practice.isOldEnoughToDrive(44),
        true,
        'isOldEnoughToDrive should return true for people older than 16'
    );
    t.end();
});

test(`#${order++} getFirstElement`, (t) => {
    t.equal(
        practice.getFirstElement([1, 2, 3]),
        1,
        'getFirstElement should return the first element in the array'
    );
    t.equal(
        practice.getFirstElement([10]),
        10,
        'getFirstElement should return the only element in the array if there is only one'
    );
    t.end();
});

test(`#${order++} getLastElement`, (t) => {
    t.equal(
        practice.getLastElement([1, 2, 3]),
        3,
        'getLastElement should return the last element in the array'
    );
    t.equal(
        practice.getLastElement([10]),
        10,
        'getLastElement should return the only element in the array if there is only one'
    );
    t.end();
});

test(`#${order++} getNthElement`, (t) => {
    t.equal(
        practice.getNthElement([1, 2, 3], 0),
        1,
        'getNthElement should return 1'
    );
    t.equal(
        practice.getNthElement([1, 2, 3], 2),
        3,
        'getNthElement should return 3'
    );
    t.equal(
        practice.getNthElement([1, 2, 3], 100),
        undefined,
        'getNthElement should return undefined'
    );
    t.end();
});

test(`#${order++} addToFront`, (t) => {
    t.deepEqual(
        practice.addToFront([1, 2, 3], 0),
        [0, 1, 2, 3],
        'addToFront should add 0 to the front of the array'
    );
    t.deepEqual(
        practice.addToFront([1, 2, 3], 2),
        [2, 1, 2, 3],
        'addToFront should return [2, 1, 2, 3]'
    );
    t.deepEqual(
        practice.addToFront([], 100),
        [100],
        'addToFront should add to an empty array'
    );
    t.end();
});

test(`#${order++} addToBack`, (t) => {
    t.deepEqual(
        practice.addToBack([1, 2, 3], 0),
        [1, 2, 3, 0],
        'addToBack should add 0 to the back of the array'
    );
    t.deepEqual(
        practice.addToBack([1, 2, 3], 2),
        [1, 2, 3, 2],
        'addToBack should add 0 to the back of the array'
    );
    t.deepEqual(
        practice.addToBack([], 100),
        [100],
        'addToBack should add to an empty array'
    );
    t.end();
});

test(`#${order++} computeAreaOfARectangle`, (t) => {
    t.equal(
        practice.computeAreaOfARectangle(1, 2),
        2,
        'should return 2'
    );
    t.equal(
        practice.computeAreaOfARectangle(2, 2),
        4,
        'should return 2'
    );
    t.equal(
        practice.computeAreaOfARectangle(0, 2),
        0,
        'should return 2'
    );
    t.end();
});

test(`#${order++} addAny`, (t) => {
    t.equal(
        practice.addAny(1, 2, 3, 4, 5, 6, 7, 8, 9),
        45,
        'should add 0 to the back of the array'
    );
    t.equal(
        practice.addAny(-1, 2, -3, 4, -5, 6, 7, 8, 9),
        27,
        'should add 0 to the back of the array'
    );
    t.equal(practice.addAny(0), 0, 'should return 0 if given 0');
    t.end();
});

test(`#${order++} getFullName`, (t) => {
    t.equal(
        practice.getFullName('name', 'name2'),
        'name name2',
        'should return the full name'
    );
    t.equal(
        practice.getFullName('craig', 'rodrigues'),
        'craig rodrigues',
        'should return the full name'
    );
    t.end();
});

test(`#${order++} getLengthOfWord`, (t) => {
    t.equal(
        practice.getLengthOfWord('sniffles'),
        8,
        'should return the length of "sniffles"'
    );
    t.equal(
        practice.getLengthOfWord('abcdefghijklmnopqrstuvwxyz'),
        26,
        'should return 26 for the alphabet'
    );
    t.end();
});

test(`#${order++} indexOfElement`, (t) => {
    t.equal(
        practice.indexOfElement(['a', 'b', 'c', 'd', 'e'], 'b'),
        1,
        'should return the proper index of "b"'
    );
    t.equal(
        practice.indexOfElement(['a', 'b', 'c', 'd', 'e'], 'd'),
        3,
        'should return the proper index of "d"'
    );
    t.equal(
        practice.indexOfElement(['a', 'b', 'c', 'd', 'e'], 'f'),
        -1,
        'should return -1 when the element does not exist in the array'
    );
    t.end();
});

test(`#${order++} getAllElementsButFirst`, (t) => {
    t.deepEqual(
        practice.getAllElementsButFirst(['a', 'b', 'c', 'd', 'e']),
        ['b', 'c', 'd', 'e'],
        'should return an array without the first element'
    );
    t.deepEqual(
        practice.getAllElementsButFirst(['b', 'c', 'd', 'e']),
        ['c', 'd', 'e'],
        'should return an array without the first element again'
    );
    t.deepEqual(
        practice.getAllElementsButFirst([]),
        [],
        'should return an empty array'
    );
    t.end();
});

test(`#${order++} getAllElementsButLast`, (t) => {
    t.deepEqual(
        practice.getAllElementsButLast(['a', 'b', 'c', 'd', 'e']),
        ['a', 'b', 'c', 'd'],
        'should return an array without the last element'
    );
    t.deepEqual(
        practice.getAllElementsButLast(['b', 'c', 'd', 'e']),
        ['b', 'c', 'd'],
        'should return an array without the last element again'
    );
    t.deepEqual(
        practice.getAllElementsButLast([]),
        [],
        'should return an empty array'
    );
    t.end();
});

test(`#${order++} areValidCredentials`, (t) => {
    t.equal(
        practice.areValidCredentials('a', '1212'),
        false,
        'should return false for invalid credentials'
    );
    t.equal(
        practice.areValidCredentials('craig', 'superlongpassword'),
        true,
        'should return true for valid credentials'
    );
    t.equal(
        practice.areValidCredentials('craig', 'a'),
        false,
        'should return false for a valid name, but invalid pass'
    );
    t.equal(
        practice.areValidCredentials('abc', '12345678'),
        false,
        'should return false for an invalid name, but valid pass'
    );
    t.end();
});

test(`#${order++} removeAllEvenNumbers`, (t) => {
    t.deepEqual(
        practice.removeAllEvenNumbers([1, 2, 3, 4, 5, 6]),
        [1, 3, 5],
        'should return an array with only odd numbers'
    );
    t.deepEqual(
        practice.removeAllEvenNumbers([2, 4, 6, 8]),
        [],
        'should return an empty array'
    );
    t.deepEqual(
        practice.removeAllEvenNumbers([1, 1, 3, 3, 5, 5]),
        [1, 1, 3, 3, 5, 5],
        'should remove nothing if no even numbers present'
    );
    t.end();
});

test(`#${order++} removeAllOddNumbers`, (t) => {
    t.deepEqual(
        practice.removeAllOddNumbers([1, 2, 3, 4, 5, 6]),
        [2, 4, 6],
        'should return an array with only even numbers'
    );
    t.deepEqual(
        practice.removeAllOddNumbers([2, 4, 6, 8]),
        [2, 4, 6, 8],
        'should remove nothing if no even numbers present'
    );
    t.deepEqual(
        practice.removeAllOddNumbers([1, 1, 3, 3, 5, 5]),
        [],
        'should return an empty array'
    );
    t.end();
});

test(`#${order++} putNumbersInArray`, (t) => {
    t.deepEqual(
        practice.putNumbersInArray(),
        [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25
        ],
        'should return the right array with numbers in it'
    );
    t.equal(
        practice.putNumbersInArray().length,
        26,
        'should return 26 elements'
    );
    t.end();
});

test(`#${order++} isInArray`, (t) => {
    t.equal(
        practice.isInArray([1, 2, 3, 4, 5, 6], 6),
        true,
        'should return true'
    );
    t.equal(
        practice.isInArray([1, 2, 3, 4, 5, 6], 7),
        false,
        'should return false'
    );
    t.end();
});

test(`#${order++} addTenToEach`, (t) => {
    t.deepEqual(
        practice.addTenToEach([1, 2, 3, 4, 5, 6]),
        [11, 12, 13, 14, 15, 16],
        'should add ten to positive numbers'
    );
    t.deepEqual(
        practice.addTenToEach([-1, -2, -3, -4, -5, -6]),
        [9, 8 , 7, 6, 5, 4],
        'should add ten to negative numbers'
    );
    t.deepEqual(
        practice.addTenToEach([]),
        [],
        'should do nothing to an empty array'
    )
    t.end();
});

test(`#${order++} personName`, (t) => {
    t.equal(
        practice.personName(),
        'sally',
        'should return the first name'
    );
    t.ok(practice.personName(), 'should not return undefined')
    t.end();
});

test(`#${order++} cityOfBirth`, (t) => {
    t.equal(
        practice.cityOfBirth(),
        'Orem, UT',
        'should return the first name'
    );
    t.ok(practice.cityOfBirth(), 'should not return undefined')
    t.end();
});

test(`#${order++} addPhoneToPocket`, (t) => {
    let actual = practice.addPhoneToPocket({});

    t.ok(
        actual.hasOwnProperty('frontpocket'),
        'should return an object with a frontpocket property'
    );
    t.equal(typeof actual, 'object', 'should return an object');
    t.equal(actual.frontpocket, 'iPhone', 'the object should have an iphone at the property frontpocket')
    t.end();
});

test(`#${order++} movePhoneToBackpocket`, (t) => {
    let actual = practice.movePhoneToBackpocket();

    t.ok(
        actual.hasOwnProperty('backpocket'),
        'should return an object with a backpocket property'
    );
    t.equal(typeof actual, 'object', 'should return an object');
    t.equal(actual.backpocket, 'iPhone', 'the object should have an iPhone at the property backpocket');
    t.end();
});

test(`#${order++} statsLooper`, (t) => {
    let actual = practice.statsLooper();

    t.equal(typeof actual, 'object', 'should return an object');
    t.ok(actual.hasOwnProperty('age'), 'should have an age property');
    t.ok(actual.hasOwnProperty('score'), 'should have an score property');
    t.ok(actual.hasOwnProperty('length'), 'should have an length property');
    t.ok(actual.hasOwnProperty('year'), 'should have an year property');

    for (let key in actual) {
        t.equal(actual[key], 0, `The ${key} property should be 0`);
    }

    t.end();
});

test(`#${order++} statePopulationLooper`, (t) => {
    let actual = practice.statePopulationLooper();

    t.equal(typeof actual, 'object', 'should return an object');
    t.ok(actual.hasOwnProperty('utah'), 'should have an utah property');
    t.ok(actual.hasOwnProperty('texas'), 'should have an texas property');
    t.ok(actual.hasOwnProperty('california'), 'should have an california property');
    t.equal(actual.utah, 2942902, 'Utah should not be 0');
    t.equal(actual.texas, 0, 'Texas should be 0');
    t.equal(actual.california, 0, 'California should be 0');

    t.end();
});

test(`#${order++} cleanUser`, (t) => {
    let user = {
        name: 'Craig',
        password: '',
        age: 34,
        admin: false,
        prop1: 7,
        prop2: 'hi',
        prop3: false,
        prop4: 0,
        prop5: null,
        prop6: undefined,
        prop7: 'still here'
    }

    let expected = {
        name: 'Craig',
        age: 34,
        prop1: 7,
        prop2: 'hi',
        prop7: 'still here'
    }

    let actual = practice.cleanUser(user);

    t.equal(typeof actual, 'object', 'should return an object');
    t.deepEqual(actual, expected, 'should remove any falsy properties');
    t.equal(Object.keys(actual).length, 5, 'should have 5 properties left');

    t.end();
});

test(`#${order++} getAllKeys`, (t) => {
    let spy = sinon.spy(Object, 'keys');

    t.deepEqual(practice.getAllKeys({a: 1, b: 2, c: 3}), ['a', 'b', 'c'], 'should return all keys');
    t.deepEqual(practice.getAllKeys({hello: 1, my: 2, name: 3}), ['hello', 'my', 'name'], 'should return all keys again');
    t.ok(spy.notCalled, 'should not use Object.keys');

    t.end();
});
