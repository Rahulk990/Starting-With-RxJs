const { Observable } = rxjs;

const observable = new Observable(subscriber => {
    // It contains the data that the observable will pass to the observer
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
})

observable.subscribe({
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
})