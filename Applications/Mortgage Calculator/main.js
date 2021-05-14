const { combineLatest, fromEvent, of } = rxjs;
const { map, filter, delay, mergeMap, tap, share } = rxjs.operators;


// helpers
function calculateMortgage(interest, loanAmount, loanLength) {
    const calculatedInterest = interest / 1200;
    const total =
        (loanAmount * calculatedInterest) /
        (1 - Math.pow(1 / (1 + calculatedInterest), loanLength));

    return total.toFixed(2);
};

function inputStream(elem) {
    return fromEvent(elem, 'input').pipe(
        map(event => parseFloat(event.target.value))
    );
}


// elements
const loanAmount = document.getElementById('loanAmount');
const interest = document.getElementById('interest');
const loanLength = document.querySelectorAll('.loanLength');
const expected = document.getElementById('expected');


// streams
const interest$ = inputStream(interest);
const loanLength$ = inputStream(loanLength);
const loanAmount$ = inputStream(loanAmount);


const calculation$ = combineLatest(
    interest$,
    loanLength$,
    loanAmount$
).pipe(
    map(([int, len, amt]) => {
        return calculateMortgage(int, amt, len);
    }),
    filter(value => !isNaN(value)),
    share()
)

// Sharing execution path between multiple Subscribers
calculation$.subscribe((value) => {
    expected.innerHTML = value;
})

calculation$.subscribe((value) => {
    console.log(value);
})