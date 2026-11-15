// -31224 (TMS 34312) - [拉契尔恩]消失的伊莉莎白2
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("得去问他们要怎么找到伊莉莎白。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("很遗憾地，伊莉莎白并没有回来。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
