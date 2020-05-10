const initialState = {
  workTimeLength: 5000, //1.5e+6
  shortBreakTimeLength: 2000, //300000
  longBreakTimeLength: 4000, //900000
  pomodorosForLongBreak: 4, //900000
};

export default (state = initialState, { type, value }) => {
  switch (type) {
    case "SET_WORK_TIME_LENGTH":
      return {
        ...state,
        workTimeLength: value,
      };

    case "SET_SHORT_BREAK_TIME_LENGTH":
      return {
        ...state,
        shortBreakTimeLength: value,
      };

    case "SET_LONG_BREAK_TIME_LENGTH":
      return {
        ...state,
        longBreakTimeLength: value,
      };

    case "SET_POMODOROS_FOR_LONG_BREAK":
      return {
        ...state,
        pomodorosForLongBreak: value,
      };

    case "SET_DEFAULT_POMODORO_SETTINGS":
      return initialState;

    default:
      return state;
  }
};
