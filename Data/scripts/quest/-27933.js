// [反转城市]在雨林中存活 (TMS 37603)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("#r地下线路避难处#k的#b阿拉莫#k好像有话要说。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("去拜托#r地下线路4#k的#b拉索尔#k带路。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("从#b拉索尔#k那里听说了有关#b倍尔#k的情报。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("从#b拉索尔#k那里听说了有关#b倍尔#k的情报。");
        qm.dispose();
    }
}
