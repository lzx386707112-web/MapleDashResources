// -31206 (TMS 34330) - [拉契尔恩]恶梦时间塔4楼
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("和老头说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("老头帮忙开路了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
