// -31216 (TMS 34320) - [拉契尔恩]服仪要求
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("跟居民说话。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("获得华丽的面具了。 现在可以和其他居民说话了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
