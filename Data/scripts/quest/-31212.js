// -31212 (TMS 34324) - [拉契尔恩]再次前往舞会场
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("防毒面具没有逃跑。 必须和留在#m450003440#的说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("抵达舞厅了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
