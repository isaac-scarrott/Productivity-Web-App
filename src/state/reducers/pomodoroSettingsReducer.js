const initialState = {
  pomodoroLength: 5000, //900000
};

export default (state = initialState, { type, value }) => {
  switch (type) {
    case "SET_POMODORO_LENGTH":
      return {
        ...state,
        pomodoroLength: value,
      };

    case "SET_DEFAULT_POMODORO_SETTINGS":
      return initialState;

    default:
      return state;
  }
};
