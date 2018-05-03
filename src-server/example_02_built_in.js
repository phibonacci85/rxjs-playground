import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

Rx.Observable.interval(500)
  .take(5)
  .subscribe(createSubscriber('interval'));

Rx.Observable.timer(3000, 500)
  .take(3)
  .subscribe(createSubscriber('timer'));

Rx.Observable.of(['Hello World', 56, 'whoa'])
  .subscribe(createSubscriber('of'));

Rx.Observable.from(['Hello World', 42, 'whoa'])
  .subscribe(createSubscriber('from'));

Rx.Observable.from([new Error('Hey')])
  .subscribe(createSubscriber('fromError'));

Rx.Observable.throwError(928)
  .subscribe(createSubscriber('error'));

Rx.Observable.empty()
  .subscribe(createSubscriber('empty'));

let sideEffect = 0;
const defer$ = Rx.Observable.defer(() => {
  sideEffect++;
  return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber('defer$.one'));
defer$.subscribe(createSubscriber('defer$.two'));
defer$.subscribe(createSubscriber('defer$.three'));

Rx.Observable.never()
  .subscribe(createSubscriber('never'));

Rx.Observable.range(2, 5)
  .subscribe(createSubscriber('range'));
