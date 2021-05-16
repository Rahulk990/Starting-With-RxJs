const { of, interval, asyncScheduler } = rxjs;
const { tap, map, take, observeOn, subscribeOn } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};


// Standalone
asyncScheduler.schedule(
    console.log,
    2000,
    "Hello World"
);


// Creation Operators
of(1, 2, 3, asyncScheduler).subscribe(observer);


// ObserveOn Operator
of(4, 5, 6).pipe(
    tap(val => console.log('From Tap: ' + val)),
    observeOn(asyncScheduler, 5000),
).subscribe(observer);


// SubscribeOn Operator
of(7, 8, 9).pipe(
    tap(val => console.log('From Tap: ' + val)),
    subscribeOn(asyncScheduler, 5000),
).subscribe(observer);


// Sync Message
console.log("Sync Message")
