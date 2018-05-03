import * as Rx from 'rxjs/Rx';
import { createSubscriber } from './lib/util';

// Rx.Observable.interval(1000)
//   .take(3)
//   .map(a => a * a)
//   .subscribe(createSubscriber(`map`));

// function arrayMap(array, projection) {
//   const returnArray = [];
//   for (let item of array) {
//     const projected = projection(item);
//     returnArray.push(projected)
//   }
//   return returnArray;
// }
//
// arrayMap([1, 2, 3], a => a * a);
//
// function arrayMergeMap(array, projection) {
//   const returnArray = [];
//   for (let item of array) {
//     const projectionArray = projection(item);
//     for (let projected of projectionArray) {
//       returnArray.push(projected);
//     }
//   }
//  return returnArray;
// }
//
// const albums = [
//   {title: 'Album 1', tracks: [{id: 1, title: 'track 1'}, {id: 2, title: 'track 2'}]},
//   {title: 'Album 2', tracks: [{id: 3, title: 'track blah'}, {id: 4, title: 'track boo'}]},
// ];
//
// const tracksWrong = arrayMap(albums, album => album.tracks);
// const tracksRight = arrayMergeMap(albums, album => album.tracks);
//
// console.log(JSON.stringify(tracksWrong));
// console.log(JSON.stringify(tracksRight));

// Rx.Observable.range(2, 3)
//   .mergeMap(i => Rx.Observable.timer(i * 2000).map(() => `After ${i} seconds`))
//   .subscribe(createSubscriber(`mergeMap`));

// Rx.Observable.fromPromise(getTracks())
//   .mergeMap(tracks => Rx.Observable.from(tracks))
//   .subscribe(createSubscriber('tracks'));
//
// function getTracks() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(['track 1', 'track 2', 'track 3']);
//     }, 1000);
//   });
// }

Rx.Observable.of('my query')
  .do(() => console.log('querying'))
  .mergeMap(a => query(a))
  .do(() => console.log('after querying'))
  .subscribe(createSubscriber('query'));

function query(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('THIS IS THE VALUE');
    }, 1000);
  });
}