import { combineReducers } from "redux";

import timerReducer from "./timerReducer";
import pomodoroSettingsReducer from "./pomodoroSettingsReducer";
import pomodoroReducer from "./pomodoroReducer";

export default combineReducers({
  timer: timerReducer,
  pomodoroSettings: pomodoroSettingsReducer,
  pomodoroStore: pomodoroReducer,
});
