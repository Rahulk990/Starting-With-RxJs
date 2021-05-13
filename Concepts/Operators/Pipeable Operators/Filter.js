const { fromEvent, range } = rxjs;
const { filter, pluck } = rxjs.operators;


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


