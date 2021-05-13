const { of, fromEvent } = rxjs;
const { map, pluck, mapTo } = rxjs.operators;


// Map Operator
of(1, 2, 3, 4, 5).pipe(
    map(value => value * 10),
    map(value => value + 7),
).subscribe(console.log);

fromEvent(document, 'keyup').pipe(
    map(value => value.code),
).subscribe(console.log);


// Pluck Operator   -> Specific Use Case
fromEvent(document, 'keyup').pipe(
    pluck('code'),
).subscribe(console.log);


// MapTo Operator   -> Specific Use Case
fromEvent(document, 'keyup').pipe(
    mapTo('code'),
).subscribe(console.log);


