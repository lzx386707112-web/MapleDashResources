// NPC 3003210 - 时间塔守卫
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
if (cm.getQuestStatus(34330) == 1) {
            cm.completeQuest(34330);
            cm.sendOk("来到了恶梦时间塔的4楼。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34330) == 0 && cm.getQuestStatus(34329) == 2) {
            cm.sendYesNo("来到了恶梦时间塔的4楼。\r\n\r\n#b接受任务：[恶梦时间塔4楼]#k");
            status = 4330;
            return;
        }
        cm.sendOk("你好！我是时间塔守卫。");
        cm.dispose();
    }
    else if (status == 4330) {
        cm.startQuest(34330);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}