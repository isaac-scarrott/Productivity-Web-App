import {
  put,
  take,
  delay,
  race,
  select,
  call,
  takeLatest,
} from "redux-saga/effects";
import getCurrentPomodoroLength from "../../utils/getCurrentPomodoroLength";

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

function* pollIfTimerFinished() {
  const { pomodoroSettings, pomodoroStore } = yield select();
  let { timeElapsedInMs } = yield select((state) => state.timer);

  const timerLength = getCurrentPomodoroLength(pomodoroSettings, pomodoroStore);

  while (timeElapsedInMs < timerLength) {
    yield delay(1000);

    yield put({ type: "TIMER_TICK" });

    timeElapsedInMs = yield select((state) => state.timer.timeElapsedInMs);
  }
}

export default function* pomodoroTimerSaga() {
  yield takeLatest("TIMER_ACTION_START", pomodoroTimerAction);
}
