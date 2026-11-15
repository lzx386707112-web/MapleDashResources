// -31104 (TMS 34432) - 大发公司共同代表
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("作为帮助成功推出新人团体的奖励，与赫一一起成为大发娱乐的共同代表。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("与赫一一起成为大发娱乐的共同代表。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
