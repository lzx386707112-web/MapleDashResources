// [反转城市]衷心期盼 (TMS 37619)
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("和#rM高塔顶层#k的#b黑洞产生器#k对话。\r\n\r\n#b接受任务？#k");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("请移动到传送点破坏#o8641059#。");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo(" 已破坏#o8641059#。\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk(" 已破坏#o8641059#。");
    } else if (status == 2) {
        qm.warp(450014050, 0);
        qm.dispose();
    }
}
