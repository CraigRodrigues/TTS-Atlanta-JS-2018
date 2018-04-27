var height = 5; // any height you want goes here

for (var line = 0; line < height; line++) {
    var result = '';

    for (var spaces = height - line; spaces > 1; spaces--) {
        result += ' ';
    }

    for (var hashes = 0; hashes < line + 2; hashes++) {
        result += '#';
    }

    // Extra credit below
    // result += ' ';

    // for (var hashesTwo = 0; hashesTwo < line + 2; hashesTwo++) {
    //     result += '#';
    // }

    console.log(result);
}

// a way to do it with one loop and string manipulation
// var height = 5;

// for (var i = 0; i < height; i++) {
// 	console.log(' '.repeat(height - i - 1) + '#'.repeat(2 + i));
// }
