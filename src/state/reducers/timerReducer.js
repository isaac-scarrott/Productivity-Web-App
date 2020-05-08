const initialState = {
  startTime: null,
  timeElapsedInMs: 0,
};

export default (state = initialState, { type, timeElapsedInMs }) => {
  switch (type) {
    case "SET_TIMER_START_TIME":
      return {
        ...state,
        startTime: new Date().getTime(),
      };

    case "SET_TIME_ELAPSED_IN_MS":
      return {
        ...state,
        timeElapsedInMs,
      };

    case "CLEAR_TIMER_STATE":
      return initialState;

    default:
      return state;
  }
};
