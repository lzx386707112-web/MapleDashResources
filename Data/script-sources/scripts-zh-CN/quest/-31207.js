// -31207 (TMS 34329) - [拉契尔恩]恶梦时间塔3楼
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("和黑色面具说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("黑色面具帮忙开路了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
