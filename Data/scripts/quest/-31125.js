// -31125 (TMS 34411) - [星光之塔] 拜托找回散落的笔记
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("在#r星光之塔3楼奇特商店#k内遇见了少女#b佩里#k，就算周围再怎么混乱仍旧丝毫不受影响，反而使她更加耀眼。但是，她突然面露难色。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("虽然有收集到全部的#t4036021:#很好，不小心偷看到了内容。先把它拿给佩里吧！"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
