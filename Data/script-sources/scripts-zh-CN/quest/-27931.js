// [反转城市]紫色老鼠肉 (TMS 37605)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#r地下线路4#k的#b拉索尔#k对话，移动到下一个地区。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("前往#r地下线路6#k和#b拉索尔#k对话。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("#b拉索尔#k说明了有关紫色老鼠肉的事。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("#b拉索尔#k说明了有关紫色老鼠肉的事。");
        qm.dispose();
    }
}
