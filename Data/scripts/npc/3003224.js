// NPC 3003224 - 舞会面具
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
if (cm.getQuestStatus(34325) == 1) {
            cm.completeQuest(34325);
            cm.sendOk("舞会场里的面具似乎藏著什么秘密…");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34325) == 0 && cm.getQuestStatus(34324) == 2) {
            cm.sendYesNo("舞会场里的面具似乎藏著什么秘密…\r\n\r\n#b接受任务：[舞会面具]#k");
            status = 4325;
            return;
        }
        cm.sendOk("你好！我是舞会面具。");
        cm.dispose();
    }
    else if (status == 4325) {
        cm.startQuest(34325);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}