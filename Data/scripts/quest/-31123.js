// -31123 (TMS 34413) - [星光之塔] 发现巨星的原石 <3>
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("持之以恒的努力、历经岁月的淬炼、创造出绝佳的的情感表现！#b佩里#k一定有成为明星的资质！别让她成为一个才华被埋没的少女，快把大发娱乐公司名片交给佩里吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("完成佩里征选后搭乘电梯前往4楼天空花园。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
