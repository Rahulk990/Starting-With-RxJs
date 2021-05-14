const { of, interval, fromEvent } = rxjs;
const { map, debounceTime, debounce, throttleTime, sampleTime, sample } = rxjs.operators;


// debounceTime Operator
fromEvent(document, 'click').pipe(
    debounceTime(1000)
).subscribe(console.log);


// debounce Operator
fromEvent(document, 'keyup').pipe(
    debounce(() => fromEvent(document, 'click')),
    map(event => event.code)
).subscribe(console.log);


// throttleTime Operator
fromEvent(document, 'click').pipe(
    throttleTime(1000)
).subscribe(console.log);


// sampleTime Operator
fromEvent(document, 'keyup').pipe(
    sampleTime(1000),
    map(event => event.code)
).subscribe(console.log);


// sample Operator
interval(1000).pipe(
    sample(fromEvent(document, 'click'))
).subscribe(console.log);

