// -31213 (TMS 34323) - [拉契尔恩]净化者
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须和在#m450003440#的防毒面具说话。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("黑色面具顺利逃走，但防毒面具留了下来。 就算负伤也要继续找音乐盒。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
