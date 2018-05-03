import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// const simple$ = new Rx.Observable(observer => {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.next(4);
//   observer.next(5);
//   observer.complete();
// });

// simple$.first()
//   .subscribe(createSubscriber('first'));
//
// simple$.last()
//   .subscribe(createSubscriber('last'));
//
// simple$.single()
//   .subscribe(createSubscriber('single'));
//
// simple$.take(2)
//   .subscribe(createSubscriber('take'));
//
// simple$.skip(2)
//   .subscribe(createSubscriber('skip'));
//
// simple$.skip(1).take(2)
//   .subscribe(createSubscriber('skip-take'));
//
// Rx.Observable.interval(500)
//   .skipWhile(i => i < 4)
//   .takeWhile(i => i < 10)
//   .subscribe(createSubscriber('skipWhile'));

Rx.Observable.interval(500)
  .skipUntil(Rx.Observable.timer(2000))
  .takeUntil(Rx.Observable.timer(4000))
  .subscribe(createSubscriber('skipUntil'));

Rx.Observable.timer(2000)
  .subscribe(createSubscriber('timer'));