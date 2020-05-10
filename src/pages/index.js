import { makeStyles } from "@material-ui/core/styles";

import Button from "../components/shared/buttons/Button";
import Tomato from "../components/shared/Tomato";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    "& button": {
      marginTop: "10px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
      },
    },
  },
}));

export default function HomePage() {
  const { container, buttonsContainer } = useStyles();

  return (
    <>
      <div className={container}>
        <Tomato />
        <div className={buttonsContainer}>
          <Button>Login Or Signup</Button>
          <Button>Start Pomodoro</Button>
        </div>
      </div>
    </>
  );
}
