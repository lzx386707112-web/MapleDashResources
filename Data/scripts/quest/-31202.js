// -31202 (TMS 34334) - [拉契尔恩] 午夜的捉迷藏 2
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("#p9010100#似乎又有些话想说。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("现在好像不用陪梦中的破布娃娃玩也可以了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
