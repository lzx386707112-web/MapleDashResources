// -31071 (TMS 34465) - [阿尔卡娜]树藤竖琴的状态
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("重新回到伙伴身边是否有解开一些误会呢？再次向树木的精灵搭话吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("精灵之中原本特别喜爱精灵之树的树木的精灵不知道为什么会对于救回精灵之树感到如此悲观？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
