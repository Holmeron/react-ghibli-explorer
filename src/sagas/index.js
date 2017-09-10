import { fork } from 'redux-saga/effects';
import {
  watchFindByUrl,
  watchFindAll,
  watchGetWikipediaPageContent
} from './watcher';

export default function* startForman() {
  yield [
    fork(watchFindByUrl),
    fork(watchFindAll),
    fork(watchGetWikipediaPageContent)
  ];
}
