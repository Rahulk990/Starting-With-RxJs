const { interval } = rxjs;
const { scan, mapTo, filter } = rxjs.operators;

const countDown = document.querySelector('.countdown');
const message = document.querySelector('.message');

interval(1000).pipe(
    mapTo(-1),
    scan((acc, val) => {
        return (acc + val);
    }, 10),
    filter(value => {
        return value >= 0;
    }),
).subscribe(value => {
    countDown.innerHTML = value;
    if (!value) {
        message.innerHTML = "LiftOff!";
    }
});