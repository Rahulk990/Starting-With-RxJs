const { Observable } = rxjs;


// Creating the observable
const observable = new Observable(subscriber => {
    // It contains the data that the observable will pass to the observer
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
})


// Observers are simple objects with three callbacks
observable.subscribe({
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
})


// Another way of Subscribing
observable.subscribe(
    next => console.log('Next2', next),
    null,
    () => console.log('Completed2'),
)


// Asynchronous Behaviour
const observable2 = new Observable(subscriber => {
    let count = 0;
    const id = setInterval(() => {
        count++;
        subscriber.next(count);

        if (count == 10) {
            subscriber.complete();
        }
    }, 1000);

    // It is the function that is called when the subscriber function completes
    return () => {
        console.log("Cleaner Called");
        clearInterval(id);
    }
})

console.log("Before");
observable2.subscribe(
    value => console.log("Value: ", value),
    null,
    () => console.log('Completed')
);
console.log("After");


// Unsubscribing from the Observable
let subscription2;
setTimeout(() => {
    subscription2 = observable2.subscribe(value => console.log("Value: ", value),
        null,
        () => console.log('Completed')
    );
}, 2000);
setTimeout(() => {
    console.log("Unsubscribing!");
    subscription2.unsubscribe();
}, 5000);