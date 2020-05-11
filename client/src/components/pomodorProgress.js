import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import Tomato from "./shared/Tomato";

const useStyles = makeStyles({
  container: {
    width: "40%",
  },
});

export default function PomodoroProgress({ progress }) {
  const theme = useTheme();
  const { container } = useStyles();

  return (
    <div className={container}>
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
    </div>
  );
}
