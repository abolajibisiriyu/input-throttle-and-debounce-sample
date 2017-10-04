function debounce(el, event, time = 2000) {
  // create a reference to the element
  var element = document.querySelector(el);
  // attach an observer
  var eventObserver = Rx.Observable.fromEvent(element, event);

  // call the debounveTime method on the observable passing the time,
  // map tru the events an get the value of the input
  // return an observable to be subscribed to
  return eventObserver.debounceTime(time).map(event => event.target.value);
}
