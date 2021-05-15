const { Subject, interval } = rxjs;
const { tap } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};


// Basic Subject
const subject = new Subject();
const sub1 = subject.subscribe(observer);
subject.next('Hello');
const sub2 = subject.subscribe(observer);
subject.next('Hello');
const sub3 = subject.subscribe(observer);
subject.next('Hello');


// // Observable to Subject 
interval(1000).pipe(
    tap(value => console.log("Value: ", value))
).subscribe(subject);