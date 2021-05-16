const { of, interval, queueScheduler } = rxjs;
const { tap, map, takeWhile, observeOn, subscribeOn } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};


// Standalone
queueScheduler.schedule(() => {
    queueScheduler.schedule(() => {
        console.log('Inner Queue');
    });
    console.log('First Queue');
});

// Sync Message
console.log("Sync Message")
