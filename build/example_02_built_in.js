'use strict';

var _Rx = require('rxjs/Rx');

var Rx = _interopRequireWildcard(_Rx);

var _util = require('./lib/util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

Rx.Observable.interval(500).take(5).subscribe((0, _util.createSubscriber)('interval'));

Rx.Observable.timer(3000, 500).take(3).subscribe((0, _util.createSubscriber)('timer'));

Rx.Observable.of(['Hello World', 56, 'whoa']).subscribe((0, _util.createSubscriber)('of'));

Rx.Observable.from(['Hello World', 42, 'whoa']).subscribe((0, _util.createSubscriber)('from'));

Rx.Observable.from([new Error('Hey')]).subscribe((0, _util.createSubscriber)('fromError'));

Rx.Observable.throwError(928).subscribe((0, _util.createSubscriber)('error'));

Rx.Observable.empty().subscribe((0, _util.createSubscriber)('empty'));

var sideEffect = 0;
var defer$ = Rx.Observable.defer(function () {
  sideEffect++;
  return Rx.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)('defer$.one'));
defer$.subscribe((0, _util.createSubscriber)('defer$.two'));
defer$.subscribe((0, _util.createSubscriber)('defer$.three'));

Rx.Observable.never().subscribe((0, _util.createSubscriber)('never'));

Rx.Observable.range(2, 5).subscribe((0, _util.createSubscriber)('range'));