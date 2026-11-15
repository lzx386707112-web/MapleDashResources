// [反转城市]只不过是午餐 (TMS 37604)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r地下线路4#k的#b拉索尔#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("请去抓#o8641051#当午餐并且取得#t4036631#。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        if (!qm.haveItem(4036631, 20)) {
            qm.sendOk("还需要#i4036631:# #t4036631:# 20个。");
            qm.dispose();
            return;
        }
        qm.sendYesNo("已把#t4036631#交给#b拉索尔#k。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.gainItem(4036631, -20);
        qm.forceCompleteQuest();
        qm.sendOk("已把#t4036631#交给#b拉索尔#k。");
        qm.dispose();
    }
}
