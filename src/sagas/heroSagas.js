import { put } from 'redux-saga/effects';
import * as API from '../api';
import * as HeroActionCreators from '../actions/heroCreators';

export function * createHeroSaga (action) {
  try {
    const {
      data: {
        data: [hero],
      },
    } = yield API.createHero(action.values);
    yield put(HeroActionCreators.createHeroSuccess(hero));
  } catch (error) {
    yield put(HeroActionCreators.createHeroError(error));
  }
}
