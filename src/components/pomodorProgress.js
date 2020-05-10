import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useTheme } from "@material-ui/core/styles";

import Tomato from "./shared/Tomato";

export default function PomodoroProgress({ progress }) {
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
