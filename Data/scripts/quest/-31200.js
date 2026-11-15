// -31200 (TMS 34336) - [拉契尔恩] 毁梦者排行的礼物
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext(""); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("任务完成！"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
