import { combineReducers } from "redux";

import timerReducer from "./timerReducer";
import pomodoroSettingsReducer from "./pomodoroSettingsReducer";

export default combineReducers({
  timer: timerReducer,
  pomodoroSettings: pomodoroSettingsReducer,
});
