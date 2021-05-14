const { of, interval, fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const { map, take, mergeAll, debounceTime, mergeMap, switchMap, concatMap, exhaustMap } = rxjs.operators;

const textInput = document.getElementById('text')
const input$ = fromEvent(textInput, 'keyup')


// mergeAll Operator
input$.pipe(
    debounceTime(1000),
    map(event => {
        const term = event.target.value;
        return ajax.getJSON(`https://api.github.com/users/${term}`);
    }),
    mergeAll()
).subscribe(console.log);


// mergeMap Operator
input$.pipe(
    debounceTime(1000),
    mergeMap(event => {
        const term = event.target.value;
        return ajax.getJSON(`https://api.github.com/users/${term}`);
    }),
).subscribe(console.log);


// Another mergeMap Operator
fromEvent(document, 'click').pipe(
    mergeMap(() => { 
        return interval(1000);
    })
).subscribe(console.log);


// switchMap Operator
fromEvent(document, 'click').pipe(
    switchMap(() => { 
        return interval(1000);
    })
).subscribe(console.log);


// concatMap Operator
fromEvent(document, 'click').pipe(
    concatMap(() => {
        return interval(1000).pipe(take(3));
    })
).subscribe(console.log);


// exhaustMap Operator
fromEvent(document, 'click').pipe(
    exhaustMap(() => {
        return interval(1000).pipe(take(3));
    })
).subscribe(console.log);


