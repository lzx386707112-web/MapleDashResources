// [反转城市]在地铁中存活 (TMS 37612)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("前往#r地下列车1#k和#b倍尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("消灭#o8641055#取得#t4036634#。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        if (!qm.haveItem(4036634, 20)) {
            qm.sendOk("还需要#i4036634:# #t4036634:# 20个。");
            qm.dispose();
            return;
        }
        qm.sendYesNo("已把#t4036634#交给#b倍尔#k。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.gainItem(4036634, -20);
        qm.forceCompleteQuest();
        qm.sendOk("已把#t4036634#交给#b倍尔#k。");
        qm.dispose();
    }
}
