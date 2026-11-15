// 任务 -26478 (TMS 39058) - [每日任务] 击退搜索型T无人机B型 200只
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("搜索型 T无人机B型200只去找萝娜。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("任务已接受！完成后回来找我吧。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("击退搜索型 T无人机B型并把取得的情报交给萝娜。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("辛苦了！谢谢你的帮忙。");
        qm.dispose();
    }
}
