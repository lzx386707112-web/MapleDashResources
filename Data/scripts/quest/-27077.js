// -27077 (TMS 38459) - [每日任务] 拉契尔恩地区净化作业
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("为了打造宁静的夜晚，去击败100只拉契尔恩的怪物吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("为了打造宁静的夜晚，去击败100只拉契尔恩的怪物吧。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
