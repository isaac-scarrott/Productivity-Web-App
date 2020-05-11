import { useDispatch } from "react-redux";

import Button from "./shared/buttons/Button";
import ButtonGroup from "./shared/buttons/ButtonGroup";

export default function PomodoroButtons({ timerState }) {
  const dispatch = useDispatch();

  if (timerState === "RUNNING") {
    return (
      <ButtonGroup>
        <Button onClick={() => dispatch({ type: "TIMER_ACTION_STOP" })}>
          Stop
        </Button>
        <Button onClick={() => dispatch({ type: "TIMER_PAUSE" })}>Pause</Button>
      </ButtonGroup>
    );
  }

  if (timerState === "PAUSED") {
    return (
      <ButtonGroup>
        <Button onClick={() => dispatch({ type: "TIMER_ACTION_STOP" })}>
          Stop
        </Button>
        <Button onClick={() => dispatch({ type: "TIMER_RESUME" })}>
          Resume
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <Button onClick={() => dispatch({ type: "TIMER_ACTION_START" })}>
      Start Timer
    </Button>
  );
}
