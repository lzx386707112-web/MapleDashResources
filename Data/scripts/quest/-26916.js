// -26916 (TMS 38620) - [6转] 拉契尔恩符文回收
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须越过灵魂艾尔达的激流，找回符文。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("找回了拉契尔恩的符文。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
