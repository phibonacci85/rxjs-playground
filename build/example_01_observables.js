'use strict';

var _Rx = require('rxjs/Rx');

var Rx = _interopRequireWildcard(_Rx);

var _util = require('./lib/util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Part 1
// const simple$ = new Rx.Observable(observer => {
//   console.log('Generating Observable');
//   setTimeout(() => {
//     observer.next('An item!');
//     setTimeout(() => {
//       observer.next('Another item!');
//       observer.complete();
//     }, 1000);
//   }, 1000);
// });
//
// const error$ = new Rx.Observable(observer => {
//   observer.error(new Error(`WHOA!`));
// });
//
//
// error$.subscribe(
//   item => console.log(`one.next ${item}`),
//   error => console.log(`one.error ${error.stack}`),
//   () => console.log(`one.complete`)
// );
//
// setTimeout(() => {
//   simple$.subscribe({
//     next: item => console.log(`two.next ${item}`),
//     error(error) {
//       console.log(`two.error ${error}`);
//     },
//     complete: function() {
//       console.log(`two.complete`);
//     }
//   })
// }, 3000);

// --------------
// Part 2
function createInterval$(time) {
  return new Rx.Observable(function (observer) {
    var index = 0;
    var interval = setInterval(function () {
      console.log('Generating ' + index);
      observer.next(index++);
    }, time);

    return function () {
      clearInterval(interval);
    };
  });
}

function take$(sourceObservable$, amount) {
  return new Rx.Observable(function (observer) {
    var count = 0;
    var subscription = sourceObservable$.subscribe({
      next: function next(item) {
        observer.next(item);
        if (++count >= amount) observer.complete();
      },
      error: function error(_error) {
        observer.error(_error);
      },
      complete: function complete() {
        observer.complete();
      }
    });

    return function () {
      return subscription.unsubscribe();
    };
  });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5);
var subscription = firstFiveSeconds$.subscribe((0, _util.createSubscriber)('one'));

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 3000);