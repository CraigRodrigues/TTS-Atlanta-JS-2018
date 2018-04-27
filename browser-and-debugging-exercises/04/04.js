function greet(person) {
    if (person === { name: 'amy' }) {
        console.log('hey amy');
    } else {
        console.log('hey arnold');
    }
}

console.log('The greet function should output "hey amy", use the debugger to fix it!');
greet({ name: 'amy' });
