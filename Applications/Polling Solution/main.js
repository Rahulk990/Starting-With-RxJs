const { fromEvent, timer } = rxjs;
const { ajax } = rxjs.ajax;
const { takeUntil, exhaustMap, tap, finalize, switchMap } = rxjs.operators;

// elements
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const status = document.getElementById('status');
const dog = document.getElementById('dog');


// streams
const start$ = fromEvent(startButton, 'click');
const stop$ = fromEvent(stopButton, 'click');


start$.pipe(
    exhaustMap(() => {
        return timer(0, 2000).pipe(
            switchMap(() => ajax.getJSON('https://random.dog/woof.json')),
            takeUntil(stop$),
            finalize(() => status.innerHTML = "Offline")
        )
    }),
    tap(() => status.innerHTML = "Active")
).subscribe(value => {
    dog.src = (value.url);
})