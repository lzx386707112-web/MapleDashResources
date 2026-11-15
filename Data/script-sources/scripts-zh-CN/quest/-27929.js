// [反转城市]被遗弃的列车 (TMS 37607)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r倍尔的居处#k的#b拉索尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("前往地下线路寻找被遗弃的列车。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("已前往地下线路找到#bT-boy#k的研究列车。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("已前往地下线路找到#bT-boy#k的研究列车。");
        qm.dispose();
    }
}
