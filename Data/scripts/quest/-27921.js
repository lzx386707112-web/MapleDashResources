// [反转城市]只不过是零件 (TMS 37615)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r地上列车1#k的#b倍尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("消灭#o8641055#取得#t4036635#。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        if (!qm.haveItem(4036635, 20)) {
            qm.sendOk("还需要#i4036635:# #t4036635:# 20个。");
            qm.dispose();
            return;
        }
        qm.sendYesNo("已把#t4036635#交给#b倍尔#k。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.gainItem(4036635, -20);
        qm.forceCompleteQuest();
        qm.sendOk("已把#t4036635#交给#b倍尔#k。");
        qm.dispose();
    }
}
