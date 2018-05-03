import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// const simple$ = new Rx.Subject();
//
// simple$.subscribe(createSubscriber('simple$'));
//
// simple$.next('Hello');
// simple$.next('World');
// simple$.complete();
//
// const interval$ = Rx.Observable.interval(1000).take(5);
// const intervalSubject$ = new Rx.Subject();
// interval$.subscribe(intervalSubject$);
//
// intervalSubject$.subscribe(createSubscriber('sub1'));
// intervalSubject$.subscribe(createSubscriber('sub2'));
// intervalSubject$.subscribe(createSubscriber('sub3'));
//
// setTimeout(() => {
//   intervalSubject$.subscribe(createSubscriber('LOOK AT ME!'));
// }, 3000);

// const currentUser$ = new Rx.BehaviorSubject({isLoggedIn: false});
// const isLoggedIn$ = currentUser$.map(u => u.isLoggedIn);
//
// currentUser$.next({isLoggedIn: false});
// isLoggedIn$.subscribe(createSubscriber('isLoggedIn'));
//
// setTimeout(() => {
//   currentUser$.next({isLoggedIn: true});
// }, 3000);
//
// setTimeout(() => {
//   isLoggedIn$.subscribe(createSubscriber('delayed'));
// }, 1500);

// const replay$ = new Rx.ReplaySubject(3);
// replay$.next(1);
// replay$.next(2);
//
// replay$.subscribe(createSubscriber('one'));
//
// replay$.next(3);
// replay$.next(4);
// replay$.next(5);
//
// replay$.subscribe(createSubscriber('two'));
//
// replay$.next(6);

const apiCall$ = new Rx.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe(createSubscriber('one'));
apiCall$.next(2);
apiCall$.complete();

setTimeout(() => {
  apiCall$.subscribe(createSubscriber('two'));
}, 2000);