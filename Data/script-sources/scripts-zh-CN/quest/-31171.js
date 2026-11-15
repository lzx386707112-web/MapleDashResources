// -31171 (TMS 34365) - 恶梦之主击杀者
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("恶梦的主人击败者"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("恶梦的主人击败者"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
