import Plant from "../../public/plant.svg";
import Tomato from "../../public/tomato.svg";
import { styled } from "@material-ui/styles";

const Container = styled("div")({
  height: "100px",
  width: "50%",
  display: "flex",
  justifyContent: "space-between",
});

const SvgContainer = styled("div")({
  width: "15%",
});

function getPlantsAndTomatosToShow(pomodoroStore, pomodorosForLongBreak) {
  const pomodorosCompletedInCurrentCycle =
    pomodoroStore.pomodoroCompleted % pomodorosForLongBreak;

  const pomodorosToCompletedInCurrentCycle =
    pomodorosForLongBreak -
    (pomodoroStore.pomodoroCompleted % pomodorosForLongBreak);

  if (pomodoroStore.currentState === "WORKING") {
    return {
      tomatosToShow: pomodorosCompletedInCurrentCycle,
      plantsToShow: pomodorosToCompletedInCurrentCycle,
    };
  }

  return {
    tomatosToShow: pomodorosCompletedInCurrentCycle + 1,
    plantsToShow: pomodorosToCompletedInCurrentCycle - 1,
  };
}

export default function PomodoroTracker({
  pomodoroStore,
  pomodorosForLongBreak,
}) {
  const { tomatosToShow, plantsToShow } = getPlantsAndTomatosToShow(
    pomodoroStore,
    pomodorosForLongBreak
  );

  return (
    <Container>
      {Array(tomatosToShow)
        .fill()
        .map(() => (
          <SvgContainer>
            <Tomato />
          </SvgContainer>
        ))}
      {Array(plantsToShow)
        .fill()
        .map(() => (
          <SvgContainer>
            <Plant />
          </SvgContainer>
        ))}
    </Container>
  );
}
