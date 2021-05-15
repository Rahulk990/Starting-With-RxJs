const { Subject, interval } = rxjs;
const { tap } = rxjs.operators;

// Loading Service      -> Abstraction to avoid unnecessary errors
const loading$ = new Subject();

const loadingService = {
  showLoading: () => loading$.next(true),
  hideLoading: () => loading$.next(false),
  loadingStatus$: loading$.asObservable()
};


// Managing State
const loadingOverlay = document.getElementById('loading-overlay');

loadingService.loadingStatus$.subscribe(isLoading => {
  if(isLoading) {    
    loadingOverlay.classList.add('open');    
  } else {    
    loadingOverlay.classList.remove('open')
  }
});

loadingService.showLoading();
setTimeout(() => loadingService.hideLoading(), 3000);