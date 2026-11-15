// NPC 3003216 - 时间塔管理员
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
if (cm.getQuestStatus(34326) == 1) {
            cm.completeQuest(34326);
            cm.sendOk("好像坠落到了什么地方…");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34327) == 1) {
            cm.completeQuest(34327);
            cm.sendOk("来到了恶梦时间塔的1楼。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34327) == 0 && cm.getQuestStatus(34326) == 2) {
            cm.sendYesNo("来到了恶梦时间塔的1楼。\r\n\r\n#b接受任务：[恶梦时间塔1楼]#k");
            status = 4327;
            return;
        }
        cm.sendOk("你好！我是时间塔管理员。");
        cm.dispose();
    }
    else if (status == 4327) {
        cm.startQuest(34327);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}