// NPC 3003201 - 不夜城守卫
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
if (cm.getQuestStatus(34305) == 0 && cm.getQuestStatus(34304) == 2) {
            cm.sendYesNo("与防毒面具会合吧。\r\n\r\n#b接受任务：[会合]#k");
            status = 4305;
            return;
        }
 else if (cm.getQuestStatus(34306) == 0 && cm.getQuestStatus(34305) == 2) {
            cm.sendYesNo("前往拉契尔恩市中心吧。\r\n\r\n#b接受任务：[前往市中心]#k");
            status = 4306;
            return;
        }
 else if (cm.getQuestStatus(34319) == 0 && cm.getQuestStatus(34318) == 2) {
            cm.sendYesNo("前往拉契尔恩的舞会场吧。\r\n\r\n#b接受任务：[前往舞会场]#k");
            status = 4319;
            return;
        }
        cm.sendOk("你好！我是不夜城守卫。");
        cm.dispose();
    }
    else if (status == 4305) {
        cm.startQuest(34305);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4306) {
        cm.startQuest(34306);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4319) {
        cm.startQuest(34319);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}