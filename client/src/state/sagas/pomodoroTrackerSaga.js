import {
  put,
  take,
  delay,
  race,
  select,
  call,
  takeLatest,
} from "redux-saga/effects";

function* pomodoroTrackerAction() {
  yield take("TIMER_END");

  yield put({ type: "NEXT_POMODORO_STEP" });

  const { currentState } = yield select((state) => state.pomodoroStore);

  if (currentState === "WORKING") {
    yield put({ type: "INCREMENT_POMODORO_COMPLETED" });
  }
}

export default function* pomodoroTrackerSaga() {
  yield takeLatest("TIMER_ACTION_START", pomodoroTrackerAction);
}
