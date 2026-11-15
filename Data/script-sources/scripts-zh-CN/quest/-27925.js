// [反转城市]我们不是老鼠 (TMS 37611)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r倍尔的居处#k的#b倍尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("前往#r地下线路避难处#k和#b倍尔#k对话。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("决定联手对抗#bT-boy#k。\r\n必须跟著倍尔前往#r地下线路某处#k。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("决定联手对抗#bT-boy#k。\r\n必须跟著倍尔前往#r地下线路某处#k。");
        qm.dispose();
    }
}
