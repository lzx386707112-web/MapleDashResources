// -31203 (TMS 34333) - [拉契尔恩] 午夜的捉迷藏 1
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("梦中的破布娃娃似乎有话想说。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("如果梦中的破布娃娃成为负担，就不用一直陪它玩。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
