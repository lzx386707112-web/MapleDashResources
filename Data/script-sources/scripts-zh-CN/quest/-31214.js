// -31214 (TMS 34322) - [拉契尔恩]黑面具
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须跟黑色面具说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("防毒面具在保护黑色面具时受伤了。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
