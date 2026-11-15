// 282 map info: timeLimit / forcedReturn. User confirmed seconds, 2026-11-15.
function start(ms) {
    var seconds = ms.getMapTimeLimit();
    var target = ms.getMapForcedReturn();
    if (seconds <= 0 || target <= 0 || target == 999999999) return;
    ms.scheduleMapWarp(ms.getMapId(), target, seconds * 1000);
}
