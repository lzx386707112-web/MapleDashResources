// NPC 3003243 - 疯狂居民
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
if (cm.getQuestStatus(34321) == 1) {
            cm.completeQuest(34321);
            cm.sendOk("舞会场里的居民似乎都疯了…");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34321) == 0 && cm.getQuestStatus(34320) == 2) {
            cm.sendYesNo("舞会场里的居民似乎都疯了…\r\n\r\n#b接受任务：[疯狂的舞会场居民]#k");
            status = 4321;
            return;
        }
        cm.sendOk("你好！我是疯狂居民。");
        cm.dispose();
    }
    else if (status == 4321) {
        cm.startQuest(34321);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}