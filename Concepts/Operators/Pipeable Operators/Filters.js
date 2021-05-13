const { of, interval, fromEvent, range } = rxjs;
const { take, pluck, filter, first, takeWhile, takeUntil, distinctUntilChanged } = rxjs.operators;

// Filter Operator
range(1, 10).pipe(
    filter((value, index) => {
        return value % 2;
    })
).subscribe(console.log);

fromEvent(document, 'keyup').pipe(
    pluck('code'),
    filter(value => value == 'KeyS'),
).subscribe(console.log);


// Take Operator
of(1, 2, 3, 4, 5).pipe(
    take(3),
).subscribe({
    next: console.log,
    complete: () => console.log("Completed"),
});


// First Operator
interval(1000).pipe(
    first(value => value > 2),
).subscribe({
    next: console.log,
    complete: () => console.log("Completed"),
});


// takeWhile Operator
interval(1000).pipe(
    takeWhile(value => value <= 5),
).subscribe({
    next: console.log,
    complete: () => console.log("Completed"),
});


// takeUntil Operator
interval(1000).pipe(
    takeUntil(interval(3000)),
).subscribe({
    next: console.log,
    complete: () => console.log("Completed"),
});


// distinctUntilChanged Operator
of(1,1,1,2,2,3,3,4,2,3,5,4,5).pipe(
    distinctUntilChanged(),
).subscribe({
    next: console.log,
    complete: () => console.log("Completed"),
});