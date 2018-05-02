'use strict';

var _Rx = require('rxjs/Rx');

var Rx = _interopRequireWildcard(_Rx);

var _util = require('./lib/util');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Rx.Observable.interval(500)
//   .take(5)
//   .subscribe(createSubscriber('interval'));
//
// Rx.Observable.timer(3000, 500)
//   .take(3)
//   .subscribe(createSubscriber('timer'));

Rx.Observable.of('Hello World', 42, 'whoa').subscribe((0, _util.createSubscriber)('of'));