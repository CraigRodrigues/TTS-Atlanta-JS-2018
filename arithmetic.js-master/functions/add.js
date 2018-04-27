/* 
Add

- Adds two or more values
- Sum up a single array of values
- Takes an array and a value and adds that value to every item in the array and returns a **NEW array** (does not mutate)
*/

const add = (...args) => {
    if (args.length === 1 && Array.isArray(args[0])) {
        return args[0].reduce((x, y) => x + y);
    }
    
    if (args.length === 2 && Array.isArray(args[0])) {
        return args[0].map((x) => x + args[1]);
    }
    
    if (args.length > 1) {
        return args.reduce((x, y) => x + y);
    }
    
    return 'Error with arguments';
};

module.exports = add;
