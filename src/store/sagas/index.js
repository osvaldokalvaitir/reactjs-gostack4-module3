import { all, takeLatest } from 'redux-saga/effects';

import { addFavorite } from './favorites';

/**
 * takeLatest -> se tiver várias requisições, ele cancela a que está acontecendo
 *               e vai pegar sempre a última requisição
 * takeEvery  -> se tiver várias requisições, ele faz todas em background
 */

export default function* rootSaga() {
  yield all([takeLatest('ADD_FAVORITE_REQUEST', addFavorite)]);
}
