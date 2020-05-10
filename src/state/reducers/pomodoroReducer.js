const STATES = ["WORKING", "BREAK"];

const initialState = {
  pomodoroCompleted: 0,
  currentState: STATES[0],
};

export default (state = initialState, { type, value }) => {
  switch (type) {
    case "SET_POMODORO_COMPLETED":
      return {
        ...state,
        pomodoroCompleted: value,
      };

    case "INCREMENT_POMODORO_COMPLETED":
      return {
        ...state,
        pomodoroCompleted: state.pomodoroCompleted + 1,
      };

    case "NEXT_POMODORO_STEP":
      const currentStateIndex = STATES.indexOf(state.currentState);

      const newStateIndex =
        currentStateIndex + 1 === STATES.length ? 0 : currentStateIndex + 1;

      return {
        ...state,
        currentState: STATES[newStateIndex],
      };

    case "RESET_POMODORO_STATE":
      return initialState;

    default:
      return state;
  }
};
