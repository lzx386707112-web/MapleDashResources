// -31234 (TMS 34302) - [拉契尔恩]无法脱离的庆典都市
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("我还有事要问老爷。 我要跟他说话。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("无法摆脱红雾，幸好「苏醒者」的秘密据点看起来很安全。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
