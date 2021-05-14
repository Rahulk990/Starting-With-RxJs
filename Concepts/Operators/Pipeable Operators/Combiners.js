const { of, fromEvent, timer, concat, empty, merge, combineLatest, interval, forkJoin } = rxjs;
const { startWith, endWith, delay, withLatestFrom } = rxjs.operators;


// startWith and endWith Operators
of(1, 2, 3).pipe(
    startWith(1, 2, 3),
    endWith(4, 5, 6),
).subscribe(console.log)


// concat Operator
concat(
    of(1, 2, 3),
    empty().pipe(delay(1000)),
    of(4, 5, 6)
).subscribe(console.log)


// merge Operator
merge(
    of(1, 2, 3),
    of(4, 5, 6)
).subscribe(console.log)


// combineLatest Operator
combineLatest(
    of(1, 2, 3),
    of(4, 5, 6)
).subscribe(console.log)


// withLatestFrom Operator
fromEvent(document, 'click').pipe(
    withLatestFrom(interval(1000)),
).subscribe(console.log)


// forkJoin Operator
forkJoin(
    of(1, 2, 3),
    of(4, 5, 6)
).subscribe(console.log)


// forkJoin Operator with Objects
forkJoin({
    number: of(1, 2, 3),
    letter: of('a', 'b', 'c')
}).subscribe(console.log)
