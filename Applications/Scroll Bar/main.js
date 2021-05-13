const { fromEvent, range } = rxjs;
const { filter, pluck, map } = rxjs.operators;

const progressBar = document.getElementById('progress-bar');
const getPercentage = (body) => {
    const { scrollTop, scrollHeight, clientHeight } = body;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

/*
    Without RxJs

    document.addEventListener('scroll', event => {
        let progress = getPercentage(event.target.documentElement);
        progressBar.style.width = `${progress}%`;
    })

*/

// Getting the Scroll bar Observable
const scroll$ = fromEvent(document, 'scroll');
const progress$ = scroll$.pipe(
    pluck('target', 'documentElement'),
    map(element => getPercentage(element)),
)
progress$.subscribe((progress) => {
    progressBar.style.width = `${progress}%`;
});
