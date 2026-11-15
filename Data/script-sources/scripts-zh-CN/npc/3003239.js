// NPC 3003239 - 伊莉莎白
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
if (cm.getQuestStatus(34311) == 0 && cm.getQuestStatus(34310) == 2) {
            cm.sendYesNo("伊莉莎白不见了，去调查一下吧。\r\n\r\n#b接受任务：[消失的伊莉莎白1]#k");
            status = 4311;
            return;
        }
        cm.sendOk("你好！我是伊莉莎白。");
        cm.dispose();
    }
    else if (status == 4311) {
        cm.startQuest(34311);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}