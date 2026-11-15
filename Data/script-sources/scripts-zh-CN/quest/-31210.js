// -31210 (TMS 34326) - [拉契尔恩]坠落
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("带著负伤的防毒面具回到秘密据点了。 必须和老头说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("虾子面具在时间塔第1层。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
