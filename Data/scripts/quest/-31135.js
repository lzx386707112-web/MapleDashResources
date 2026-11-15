// -31135 (TMS 34401) - [星光之塔] 星光之塔地下
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("肮脏的办公室内，有人昏倒在里面。好像是#b#p1052203##k耶，先试著把他摇醒看看！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("堕落广场之星，#p1052203#过去究竟是什么样子呢？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
