// -31070 (TMS 34466) - [阿尔卡娜]树藤竖琴所在的地方
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("既然如此只好在没有树木的精灵的帮助下找出藤条竖琴的所在地。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("光环带领著我们前往先前发现迷路树木的精灵的所在位置。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
