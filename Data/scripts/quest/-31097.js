// -31097 (TMS 34439) - [星光之塔] 经纪人出动！
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("出发前，先听一下秘书#b#p1052212##k说明有关招募的基本吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("在星光之塔大厅遇到街道的解说员露比。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
