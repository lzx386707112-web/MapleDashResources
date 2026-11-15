// -31215 (TMS 34321) - [拉契尔恩]疯狂的舞会场居民
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("获得华丽的面具了。 现在从居民那取得情报看看。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("教训狂放的舞会居民了，我要到黑假面身边。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
