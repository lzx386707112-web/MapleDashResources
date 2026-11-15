// -31082 (TMS 34454) - [阿尔卡娜]前往草笛之森
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("乘著风精灵所引起的徐徐微风，前往绝壁下草笛的森林。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("乘著风势来到绝壁下草笛的森林。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
