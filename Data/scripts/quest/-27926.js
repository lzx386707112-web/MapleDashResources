// [反转城市]那是什么？ (TMS 37610)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#rT-boy的研究列车3#k的#b拉索尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("消灭#o8641054#取得#t4036633#。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        if (!qm.haveItem(4036633, 20)) {
            qm.sendOk("还需要#i4036633:# #t4036633:# 20个。");
            qm.dispose();
            return;
        }
        qm.sendYesNo("已取得#t4036633#。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.gainItem(4036633, -20);
        qm.forceCompleteQuest();
        qm.sendOk("已取得#t4036633#。");
        qm.dispose();
    }
}
