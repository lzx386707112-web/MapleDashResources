// -31217 (TMS 34319) - [拉契尔恩]前往舞会场
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("音乐盒的位置在拉契尔恩舞会场那。 跟防毒面具说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("抵达拉契尔恩舞会场了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
