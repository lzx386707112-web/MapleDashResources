// -31211 (TMS 34325) - [拉契尔恩]舞会面具
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须和舞会面具说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("舞会面具就是音乐盒。 和在夜市一样，她变成音乐盒了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
