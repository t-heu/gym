import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import student from './student/sagas';
import plans from './plans/sagas';
import registration from './registration/sagas';
import helpOrders from './helpOrders/sagas';
import trainings from './trainings/sagas';

export default function* rootSaga() {
  return yield all([auth, user, student, plans, registration, helpOrders, trainings]);
}
