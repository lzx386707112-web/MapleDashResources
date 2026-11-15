// -31205 (TMS 34331) - [拉契尔恩]决战
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须在时间塔的最上层见到露希妲。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("露希妲消失了。 她会去哪呢？ "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
