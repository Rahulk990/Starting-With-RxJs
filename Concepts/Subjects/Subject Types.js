const { Subject, interval, BehaviorSubject, ReplaySubject, AsyncSubject } = rxjs;
const { tap, share, multicast, refCount } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};


// BehaviorSubject
const subject = new BehaviorSubject('Seed');
const sub1 = subject.subscribe(observer);
subject.next('1');
const sub2 = subject.subscribe(observer);
subject.next('2');
const sub3 = subject.subscribe(observer);
subject.next('3');


// ReplaySubject
const subject = new ReplaySubject(2);
const sub1 = subject.subscribe(observer);
subject.next('1');
const sub2 = subject.subscribe(observer);
subject.next('2');
const sub3 = subject.subscribe(observer);
subject.next('3');


// Async Subject 
const subject = new AsyncSubject(2);
const sub1 = subject.subscribe(observer);
subject.next('1');
const sub2 = subject.subscribe(observer);
subject.next('2');
const sub3 = subject.subscribe(observer);
subject.complete();