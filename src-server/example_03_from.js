import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';
import fs from 'fs';

// fs.readdir('./src-server', (err, items) => {
//   if (err) console.error(error);
//   else {
//     console.log(items);
//   }
// });

// const readDir$ = Rx.Observable.bindNodeCallback(fs.readdir);

// readDir$('./src-server')
//   .mergeMap(files => Rx.Observable.from(files))
//   .map(file => `Manipulated ${file}`)
//   .subscribe(createSubscriber('readdir'));

function getItem() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Hello`);
    }, 1000);
  });
}

Rx.Observable.fromPromise(getItem())
  .subscribe(createSubscriber('Promise'));