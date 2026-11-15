// 任务 -31407 (TMS 34129) - [每日任务] 调查消逝的旅途
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("所有事物皆风化的空间－消逝的旅途。答应帮助时间神官，破解这个空间的谜题。完成每日提供的任务后，帮助时间神官的研究吧。\r\n\r\n#b接受任务？#k");
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
        qm.sendYesNo("所有事物皆风化的空间－消逝的旅途。答应帮助时间神官，破解这个空间的谜题。完成每日提供的任务后，帮助时间神官的研究吧。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("辛苦了！谢谢你的帮忙。");
        qm.dispose();
    }
}
