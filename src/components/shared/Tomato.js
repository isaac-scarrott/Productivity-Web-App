import TomatoSvg from "../../../public/tomato.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgContainer: {
    minWidth: "300px",
    width: "20%",
    marginBottom: "20px",
    "& svg": { maxHeight: "100%" },
  },
}));

export default function Tomato() {
  const { svgContainer } = useStyles();
  return (
    <div className={svgContainer}>
      <TomatoSvg />
    </div>
  );
}
