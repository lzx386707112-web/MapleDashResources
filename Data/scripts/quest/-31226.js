// -31226 (TMS 34310) - [拉契尔恩]音乐盒的声音？
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("要把音乐盒声音的事跟老爷说。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("已跟著防毒面具抵达吵杂不夜城。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
