// -31223 (TMS 34313) - [拉契尔恩]消失的伊莉莎白3
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("伊莉莎白没有回来。 我要问一下是怎么回事。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("伊莉莎白回来了。 音乐盒的位置是在河水流过来的方向，是左边。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
