import {
  put,
  take,
  delay,
  race,
  select,
  call,
  takeLatest,
} from "redux-saga/effects";

function* pollIfTimerFinished() {
  const { pomodoroSettings } = yield select();
  let { timeElapsedInMs } = yield select((state) => state.timer);

  while (timeElapsedInMs < pomodoroSettings.pomodoroLength) {
    yield delay(1000);

    yield put({ type: "TIMER_TICK" });

    timeElapsedInMs = yield select((state) => state.timer.timeElapsedInMs);
  }
}

function* pomodoroTimerAction() {
  yield put({ type: "TIMER_START" });

  while (true) {
    const { pause } = yield race({
      task: call(pollIfTimerFinished),
      pause: take((action) => action.type === "TIMER_PAUSE"),
      cancel: take((action) => action.type === "TIMER_ACTION_STOP"),
    });

    if (!pause) {
      break;
    }

    const { resume } = yield race({
      resume: take((action) => action.type === "TIMER_RESUME"),
      cancel: take((action) => action.type === "TIMER_ACTION_STOP"),
    });

    if (!resume) {
      break;
    }
  }

  yield put({ type: "TIMER_END" });
}

export default function* pomodoroTimerSaga() {
  yield takeLatest("TIMER_ACTION_START", pomodoroTimerAction);
}
