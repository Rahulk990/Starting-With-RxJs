const { Subject, interval, BehaviorSubject, ReplaySubject, AsyncSubject } = rxjs;
const { tap, share, multicast, refCount } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};
