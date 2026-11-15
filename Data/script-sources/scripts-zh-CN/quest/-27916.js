// [反转城市]在被破坏的都市存活 (TMS 37620)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r地下线路避难处#k的#b拉索尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("请依照任务指示前进。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("从#b拉索尔#k那里听到了#b倍尔#k的事情。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("从#b拉索尔#k那里听到了#b倍尔#k的事情。");
        qm.dispose();
    }
}
