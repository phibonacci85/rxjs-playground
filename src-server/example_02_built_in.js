import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Rx.Observable.interval(500)
//   .take(5)
//   .subscribe(createSubscriber('interval'));
//
// Rx.Observable.timer(3000, 500)
//   .take(3)
//   .subscribe(createSubscriber('timer'));

Rx.Observable.of('Hello World', 42, 'whoa')
  .subscribe(createSubscriber('of'));
