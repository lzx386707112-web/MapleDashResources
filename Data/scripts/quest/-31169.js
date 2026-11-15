// -31169 (TMS 34367) - [梦之都拉契尔恩] 恶梦的主人击败者
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("需要击败恶梦的主人。#b\r\n\r\n请击败露希妲(困难)。\r\n"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("击败恶梦的主人，获得&lt;恶梦的主人击败者&gt;称号。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
