// -31072 (TMS 34464) - [阿尔卡娜]再一次
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("为了净化迷路的树木的精灵必须让它重回伙伴们的怀抱，击退周围邪恶的精灵前望丛林深处吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("迷路的树木的精灵已重回伙伴们的怀抱。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
