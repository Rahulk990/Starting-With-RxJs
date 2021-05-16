const { of, interval, asyncScheduler, asapScheduler } = rxjs;
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
asapScheduler.schedule(
    console.log,
    null,
    "Hello World ASAP"
);


// Creation Operators
of(1, 2, 3, asyncScheduler).subscribe(observer);
of(10, 20, 30, asapScheduler).subscribe(observer);


// Sync Message
console.log("Sync Message")
