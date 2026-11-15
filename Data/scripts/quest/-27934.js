// [反转城市]最平凡的人 (TMS 37602)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r无名村庄#k的#b雷卡托#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("请前往#r反转城市#k确认发生什么事。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("前往#r反转城市#k后，遇到了来历不明的#bT-boy#k和#b拉索尔#k。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("前往#r反转城市#k后，遇到了来历不明的#bT-boy#k和#b拉索尔#k。");
        qm.dispose();
    }
}
