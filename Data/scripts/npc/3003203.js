// NPC 3003203 - 居民
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
if (cm.getQuestStatus(34310) == 1) {
            cm.completeQuest(34310);
            cm.sendOk("那个声音似乎是音乐盒发出的…");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34316) == 0 && cm.getQuestStatus(34315) == 2) {
            cm.sendYesNo("居民们似乎开始清醒了…\r\n\r\n#b接受任务：[醒来的居民们]#k");
            status = 4316;
            return;
        }
        cm.sendOk("你好！我是居民。");
        cm.dispose();
    }
    else if (status == 4316) {
        cm.startQuest(34316);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}