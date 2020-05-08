import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import Tomato from "../components/shared/Tomato";
import Button from "../components/shared/Button";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  CircularProgressContainer: {
    width: "40%",
  },
}));

function PomodoroProgress({ progress }) {
  const theme = useTheme();

  return (
    <CircularProgressbarWithChildren
      value={progress}
      strokeWidth={2}
      styles={buildStyles(
        {
          pathColor: theme.palette.primary.main,
          trailColor: "none",
        },
        { root: { width: "10%" } }
      )}
    >
      <Tomato />
    </CircularProgressbarWithChildren>
  );
}

export default function Pomodoro() {
  const dispatch = useDispatch();
  const { timer, pomodoroSettings } = useSelector((state) => state);

  const { container, CircularProgressContainer } = useStyles();

  return (
    <div className={container}>
      <div className={CircularProgressContainer}>
        <PomodoroProgress
          progress={
            (timer.timeElapsedInMs / pomodoroSettings.pomodoroLength) * 100
          }
        />
      </div>
      <Button onClick={() => dispatch({ type: "TIMER_START" })}>
        Start Now
      </Button>
      <Button onClick={() => dispatch({ type: "STOP_TIMER" })}>Stop Now</Button>
      {dayjs(timer.timeElapsedInMs).format("mm:ss")}
    </div>
  );
}
