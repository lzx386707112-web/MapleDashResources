// NPC 3003202 - 调查员
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
if (cm.getQuestStatus(34300) == 1) {
            cm.completeQuest(34300);
            cm.sendOk("已抵达正在举行庆典的城市。但不太对劲。跟住民们对话看看吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34306) == 1) {
            cm.completeQuest(34306);
            cm.sendOk("前往拉契尔恩市中心吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34307) == 1) {
            cm.completeQuest(34307);
            cm.sendOk("调查谁是'苏醒者'吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34307) == 0 && cm.getQuestStatus(34306) == 2) {
            cm.sendYesNo("调查谁是'苏醒者'吧。\r\n\r\n#b接受任务：[谁是'苏醒者'呢？]#k");
            status = 4307;
            return;
        }
 else if (cm.getQuestStatus(34308) == 0 && cm.getQuestStatus(34307) == 2) {
            cm.sendYesNo("继续调查'苏醒者'的身份。\r\n\r\n#b接受任务：[谁是'苏醒者'呢？2]#k");
            status = 4308;
            return;
        }
        cm.sendOk("你好！我是调查员。");
        cm.dispose();
    }
    else if (status == 4307) {
        cm.startQuest(34307);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4308) {
        cm.startQuest(34308);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}