const { from, interval } = rxjs;
const { take, scan, reduce } = rxjs.operators;

// Reduce Operator
interval(1000).pipe(
    take(5),
    reduce((acc, val) => acc + val),
).subscribe(console.log)


// Scan Operator
interval(1000).pipe(
    take(5),
    scan((acc, val) => acc + val),
).subscribe(console.log)


// With Objects
const users = [
    { name: "Alex", age: 20 },
    { name: "Alex", age: 30 },
    { name: "Brian", age: 20 },
]

from(users).pipe(
    scan((acc, val) => {
        return { ...acc, ...val }
    }, {}),
).subscribe(console.log)
