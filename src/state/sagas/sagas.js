import { all, spawn, call } from "redux-saga/effects";
import pomodoroTimerSaga from "./pomodorTimerSaga";
import pomodoroTrackerSaga from "./pomodoroTrackerSaga";

const sagas = [pomodoroTimerSaga, pomodoroTrackerSaga];

export default function* rootSasga() {
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
