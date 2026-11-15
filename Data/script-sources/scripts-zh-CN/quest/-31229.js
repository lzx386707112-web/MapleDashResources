// -31229 (TMS 34307) - [拉契尔恩]谁是'苏醒者'呢？
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("防毒面具正在市中心里等你。 见到他后要找出「苏醒者」并保护他们。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("就算跟居民们讲话，也很难确认谁是「苏醒者」。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
