import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';
//
// Rx.Observable.concat(
//   Rx.Observable.of(42),
//   Rx.Observable.throwError(new Error('Blegh')),
//   Rx.Observable.of(10),
// ).subscribe(createSubscriber('catch'));

getApi()
  .retry(3)
  .catch(error => Rx.Observable.of(error))
  .do(() => console.log('THING'))
  .subscribe(createSubscriber('fromAPI'));

// function getApi() {
//   console.log('Getting API');
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve('hello');
//       reject(new Error());
//     }, 1000);
//   });
// }

function getApi() {
  return new Rx.Observable(observer => {
    console.log('Getting API');
    setTimeout(() => {
      observer.error(new Error());
    }, 1000);
  });
}
