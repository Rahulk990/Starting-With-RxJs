const { of, interval, asyncScheduler, animationFrameScheduler } = rxjs;
const { tap, map, takeWhile, observeOn, subscribeOn } = rxjs.operators;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
};


// Standalone
asyncScheduler.schedule(
    console.log,
    2000,
    "Hello World"
);
animationFrameScheduler.schedule(
    console.log,
    null,
    "Hello World ANIM"
);


// Animating Ball
interval(0, animationFrameScheduler).pipe(
    takeWhile(value => value <= 300)
).subscribe(value => {
    console.log(value);
    document.getElementById('ball').style.transform = `translate3d(${value}px, ${value}px, 0)`;
})


// Sync Message
console.log("Sync Message")
