// -31220 (TMS 34316) - [拉契尔恩]醒来的居民们
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("得跟老爷讲个话。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("带著防毒面具回到了秘密据点。 西瓜面具加入了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
