// -31122 (TMS 34414) - [星光之塔] 请帮我找录音机
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("#r星光之塔4楼天空花园#k。见到了拥有神秘音色的#b亚咪#k，虽然提出招募的提议，但她好像已经有想要去的地方…还没有决定前，还有希望的，她应该往同一层的唱片行的方向过去了。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("找出混在 #b#i2436127:# #t2436127:##k 内的 #b#i4036023:# #t4036023:##k。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
