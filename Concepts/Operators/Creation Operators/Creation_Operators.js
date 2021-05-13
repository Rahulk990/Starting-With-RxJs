const { fromEvent, of, range, from, interval, timer } = rxjs;

const observer = {
    next: next => console.log('Next', next),
    error: error => console.log('Error', error),
    complete: () => console.log('Completed'),
}

// fromEvent Operator
const ob1 = fromEvent(document.getElementById('btn'), 'click');
ob1.subscribe(observer)


// of operator
const ob2 = of(1, 2, "Hello", "World", { name: "Alex" }, { age: 24 }, [1, 2], [3, 4]);
ob2.subscribe(observer)


// range Operator
const ob3 = range(1, 10);
ob3.subscribe(observer)


/* from Operator */

// With Arrays
const ob4 = from([1, "Hello", [1, 2], { name: "Alex" }]);
ob4.subscribe(observer)

// With other Iterables
const ob5 = from("Hello World")
ob5.subscribe(observer)

// With Promise
const ob6 = from(fetch('https://api.github.com/users/Rahulk990'))
ob6.subscribe(observer)

// With Iterators
function* generator(){
    yield "Hello";
    yield "World";
}

const iterator = generator();
console.log(iterator.next().value);
const ob7 = from(iterator)
ob7.subscribe(observer)


// interval Operator
const ob8 = interval(1000);
ob8.subscribe(observer)

// timer Operator
const ob9 = timer(2000, 1000);
ob9.subscribe(observer)