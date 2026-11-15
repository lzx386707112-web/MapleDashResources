// -31232 (TMS 34304) - [拉契尔恩]无法专注
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("为了听防毒面具的故事，就必须接受老爷的面具。 跟老爷聊聊吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("老爷完成面具了。 虽然看起来不怎么样，却是跟你脸型吻合的好面具"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
