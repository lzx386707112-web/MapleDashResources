// NPC 3003220 - 音乐盒
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
if (cm.getQuestStatus(34317) == 1) {
            cm.completeQuest(34317);
            cm.sendOk("露希妲在寻找的恶梦到底是什么…");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34318) == 0 && cm.getQuestStatus(34317) == 2) {
            cm.sendYesNo("找到了第二个音乐盒。\r\n\r\n#b接受任务：[第二个音乐盒]#k");
            status = 4318;
            return;
        }
        cm.sendOk("你好！我是音乐盒。");
        cm.dispose();
    }
    else if (status == 4318) {
        cm.startQuest(34318);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}