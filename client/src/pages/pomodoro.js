import Head from "next/head";
import { styled } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

import PomodoroProgress from "../components/pomodorProgress";
import getCurrentPomodoroLength from "../utils/getCurrentPomodoroLength";
import PomodoroButtons from "../components/pomodoroButtons";
import PomodoroTracker from "../components/pomodoroTracker";

const Container = styled("div")({
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TimerText = styled("div")({
  textAlign: "center",
});

export default function Pomodoro() {
  const { timer, pomodoroSettings, pomodoroStore } = useSelector(
    (state) => state
  );

  const timerLength = getCurrentPomodoroLength(pomodoroSettings, pomodoroStore);
  const formattedTimeElapsed = dayjs(timer.timeElapsedInMs).format("mm:ss");
  const displayedProgressPercent =
    timer.state === "STOPPED" ? 0 : (timer.timeElapsedInMs / timerLength) * 100;

  function renderPageTitle() {
    return (
      <Head>
        <title>
          {timer.state !== "STOPPED" ? formattedTimeElapsed : "Pomodoro Timer"}
        </title>
      </Head>
    );
  }

  return (
    <>
      {renderPageTitle()}

      <Container>
        <div>{pomodoroStore.currentState}</div>

        <PomodoroProgress progress={displayedProgressPercent} />

        <PomodoroButtons timerState={timer.state} />

        <TimerText>{formattedTimeElapsed}</TimerText>

        <PomodoroTracker
          pomodoroStore={pomodoroStore}
          pomodorosForLongBreak={pomodoroSettings.pomodorosForLongBreak}
        />
      </Container>
    </>
  );
}
