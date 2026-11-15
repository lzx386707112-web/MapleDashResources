// -31228 (TMS 34308) - [拉契尔恩]谁是'苏醒者'呢？2
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须跟居民们讲话，确认谁是「苏醒者」。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("虾面具是「苏醒者」。 因为净化者突然出现，我们就逃回秘密据点了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
