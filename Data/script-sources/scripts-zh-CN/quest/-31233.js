// -31233 (TMS 34303) - [拉契尔恩]害羞的防毒面具
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("防毒面具好像有什么话想说。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("虽然已经收集到所有面具材料，但还没做面具。 老爷的手滑了。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
