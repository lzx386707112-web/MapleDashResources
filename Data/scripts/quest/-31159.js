// -31159 (TMS 34377) - [每日任务] 大爷的请托
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("听说在拉契尔恩据点的大爷需要帮忙。\r\n快到 #r据点#k找找#b大爷#k吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("到达了拉契尔恩并和#b大爷#k对话。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
