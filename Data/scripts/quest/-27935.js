// [反转城市]顺著河水流下来的物品 (TMS 37601)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("#r无名村庄#k的#b雷卡托#k好像有话想说，似乎是有关顺著河水流下来的物品的事。\r\n\r\n#b接受任务？#k");
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
        qm.sendYesNo("已前往#r无名村庄#k确认了顺著河水流下来的无线电。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("已前往#r无名村庄#k确认了顺著河水流下来的无线电。");
        qm.dispose();
    }
}
