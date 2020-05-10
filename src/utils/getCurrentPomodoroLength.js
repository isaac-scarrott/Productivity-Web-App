export default function getCurrentPomodoroLength(
  pomodoroSettings,
  pomodoroStore
) {
  if (pomodoroStore.currentState === "WORKING") {
    return pomodoroSettings.workTimeLength;
  }
  if (pomodoroStore.pomodoroCompleted % 4 === 3) {
    return pomodoroSettings.longBreakTimeLength;
  }

  return pomodoroSettings.shortBreakTimeLength;
}
