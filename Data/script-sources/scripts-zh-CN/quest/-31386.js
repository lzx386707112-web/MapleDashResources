// 任务 -31386 (TMS 34150) - [每日任务]找出30个安息抑制剂
var status = -1;

function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) {
        qm.sendYesNo("取得30个#t4034936#，交给位在#b安息的洞窟#k区域某处的调查团员#b洁娜#k吧！ 安息的洞窟区域的部分怪物有#t4034936#。\r\n\r\n#b接受任务？#k");
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
        qm.sendYesNo("找到30个#t4034936#，交给位在#b安息的洞窟#k区域某处的调查团员#b萝娜#k吧！\r\n\r\n#b完成任务？#k");
    } else if (status == 1) {
        qm.forceCompleteQuest();
        qm.sendOk("辛苦了！谢谢你的帮忙。");
        qm.dispose();
    }
}
