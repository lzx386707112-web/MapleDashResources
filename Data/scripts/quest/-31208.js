// -31208 (TMS 34328) - [拉契尔恩]恶梦时间塔2楼
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("和西瓜面具说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("西瓜面具帮忙开路了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
