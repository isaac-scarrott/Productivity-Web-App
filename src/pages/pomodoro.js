import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import Button from "../components/shared/buttons/Button";
import { useDispatch, useSelector } from "react-redux";

import ButtonGroup from "../components/shared/buttons/ButtonGroup";
import PomodoroProgress from "../components/pomodorProgress";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "93%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  CircularProgressContainer: {
    width: "40%",
  },
}));

export default function Pomodoro() {
  const dispatch = useDispatch();
  const { timer, pomodoroSettings } = useSelector((state) => state);

  const { container, CircularProgressContainer } = useStyles();

  const formattedTimeElapsed = dayjs(timer.timeElapsedInMs).format("mm:ss");

  function renderButtons() {
    if (timer.state === "RUNNING") {
      return (
        <ButtonGroup>
          <Button onClick={() => dispatch({ type: "TIMER_ACTION_STOP" })}>
            Stop
          </Button>
          <Button onClick={() => dispatch({ type: "TIMER_PAUSE" })}>
            Pause
          </Button>
        </ButtonGroup>
      );
    }

    if (timer.state === "PAUSED") {
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

  return (
    <>
      <Head>
        <title>
          {timer.state !== "STOPPED" ? formattedTimeElapsed : "Pomodoro Timer"}
        </title>
      </Head>

      <div className={container}>
        <div className={CircularProgressContainer}>
          <PomodoroProgress
            progress={
              (timer.timeElapsedInMs / pomodoroSettings.pomodoroLength) * 100
            }
          />
        </div>

        {renderButtons()}

        {formattedTimeElapsed}
      </div>
    </>
  );
}
