// Day 05 – Multiplication Table Generator
// Prints multiplication tables using for loops, nested loops, and continue.

const number = 5;

for (let i = 1; i < 13; i++) {
    console.log (`${number} x ${i} = ${number*i}`);
}

for (let i = 1; i <= 5; i++) {
    for (let n = 1; n <= 12; n++) {
        console.log(`${i} x ${n} = ${i*n}`);
    }
}

for (let i = 1; i <= 5; i++) {
    for (let n = 1; n <= 12; n++) {
        if ((i*n)%2 === 0) {
            continue;
        }
        console.log(`${i} x ${n} = ${i*n}`);
    }
}