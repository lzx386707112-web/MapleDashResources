// -31218 (TMS 34318) - [拉契尔恩]第二个音乐盒
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须跟在秘密据点的西瓜面具问问音乐盒声音的事。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("第二个音乐盒，位于拉契尔恩舞会场。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
