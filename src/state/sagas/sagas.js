import {
  takeLatest,
  put,
  take,
  delay,
  race,
  select,
  call,
} from "redux-saga/effects";

function* pomodoroTimerSaga() {
  yield put({ type: "SET_TIMER_START_TIME" });

  yield race({
    task: call(pollIfTimerFinished),
    cancel: take("STOP_TIMER"),
  });

  yield put({ type: "CLEAR_TIMER_STATE" });
}

function* pollIfTimerFinished() {
  let timeElapsedInMs = 0;

  const pomodoroLength = yield select(
    (state) => state.pomodoroSettings.pomodoroLength
  );

  while (timeElapsedInMs < pomodoroLength) {
    const startTime = yield select((state) => state.timer.startTime);
    timeElapsedInMs = new Date().getTime() - startTime;

    yield put({ type: "SET_TIME_ELAPSED_IN_MS", timeElapsedInMs });

    yield delay(500);
  }
}

export default function* watchIncrementAsync() {
  yield takeLatest("TIMER_START", pomodoroTimerSaga);
}
