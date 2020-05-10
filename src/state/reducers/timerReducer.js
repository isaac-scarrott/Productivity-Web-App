const initialState = {
  state: "STOPPED",
  timeElapsedInMs: 0,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case "TIMER_START":
      return {
        state: "RUNNING",
        timeElapsedInMs: 0,
      };

    case "TIMER_END":
      return {
        ...state,
        state: "STOPPED",
      };

    case "TIMER_PAUSE":
      return {
        ...state,
        state: "PAUSED",
      };

    case "TIMER_RESUME":
      return {
        ...state,
        state: "RUNNING",
      };

    case "TIMER_TICK":
      return {
        ...state,
        timeElapsedInMs: state.timeElapsedInMs + 1000,
      };

    default:
      return state;
  }
};
