// [反转城市]你的家乡在哪？ (TMS 37606)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r地下线路6#k的#b拉索尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("猎捕#o8641052#取得倍尔喜欢的#t4036632#。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        if (!qm.haveItem(4036632, 20)) {
            qm.sendOk("还需要#i4036632:# #t4036632:# 20个。");
            qm.dispose();
            return;
        }
        qm.sendYesNo("把#t4036632#交给#b拉索尔#k后见到了倍尔。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.gainItem(4036632, -20);
        qm.forceCompleteQuest();
        qm.sendOk("把#t4036632#交给#b拉索尔#k后见到了倍尔。");
        qm.dispose();
    }
}
