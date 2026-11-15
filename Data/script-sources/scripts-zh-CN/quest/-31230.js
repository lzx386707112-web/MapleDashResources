// -31230 (TMS 34306) - [拉契尔恩]前往市中心
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("防毒面具在等你 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("在市中心见到了防毒面具。 他好像还有话要说。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
