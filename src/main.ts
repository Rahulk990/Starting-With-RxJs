import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  // It contains the data that the observable will pass to the observer
  subscriber.next("Hello");
  setTimeout(() => subscriber.next("World"), 2000);
  subscriber.complete();
});

observable.subscribe((observer) => {
  next: (value: any) => console.log("Next", value);
  error: (error: any) => console.log("Error", error);
  complete: () => console.log("Completed");
});
