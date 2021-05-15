const { Subject, interval } = rxjs;
const { tap, share, multicast, refCount } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};


// share Operator
const interval$ = interval(1000).pipe(
    tap(value => console.log("Value: ", value)),
    share(),
)

interval$.subscribe(observer);
interval$.subscribe(observer);


// multicast Operator
const multicastInterval$ = interval$.pipe(
    multicast(() => new Subject())
)
multicastInterval$.connect();

multicastInterval$.subscribe(observer);
multicastInterval$.subscribe(observer);


// refCount Operator
const multicastInterval2$ = interval$.pipe(
    multicast(() => new Subject()),
    refCount(),
)

multicastInterval2$.subscribe(observer);
multicastInterval2$.subscribe(observer);