// 任务 -26476 (TMS 39060) - [每日任务] 击退战斗型T无人机B型 200只
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("击退战斗型T无人机B型 200只 去找萝娜。\r\n\r\n#b接受任务？#k");
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
        qm.sendYesNo("击退战斗型 T无人机B型200只并把取得的情报交给萝娜。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("辛苦了！谢谢你的帮忙。");
        qm.dispose();
    }
}
