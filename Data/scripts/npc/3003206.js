// NPC 3003206 - 净化者
// 啾啾岛/拉克兰任务 NPC
var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) { cm.dispose(); return; }
    status++;

    if (status == 0) {
if (cm.getQuestStatus(34323) == 1) {
            cm.completeQuest(34323);
            cm.sendOk("净化者出现了。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34323) == 0 && cm.getQuestStatus(34322) == 2) {
            cm.sendYesNo("净化者出现了。\r\n\r\n#b接受任务：[净化者]#k");
            status = 4323;
            return;
        }
 else if (cm.getQuestStatus(34324) == 0 && cm.getQuestStatus(34323) == 2) {
            cm.sendYesNo("再次前往舞会场吧。\r\n\r\n#b接受任务：[再次前往舞会场]#k");
            status = 4324;
            return;
        }
        cm.sendOk("你好！我是净化者。");
        cm.dispose();
    }
    else if (status == 4323) {
        cm.startQuest(34323);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4324) {
        cm.startQuest(34324);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}