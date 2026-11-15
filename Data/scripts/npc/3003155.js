// NPC 3003155 - 小石
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
if (cm.getQuestStatus(-31323) == 1 && cm.getItemCount(4034954) >= 20 && cm.getItemCount(4034955) >= 20) {
            cm.gainItem(4034954, -20);
            cm.gainItem(4034955, -20);
            cm.completeQuest(-31323);
            cm.sendOk("完成了蓝色鲸鱼山的味道<1>！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31322) == 1 && cm.getItemCount(4034956) >= 20 && cm.getItemCount(4034957) >= 20) {
            cm.gainItem(4034956, -20);
            cm.gainItem(4034957, -20);
            cm.completeQuest(-31322);
            cm.sendOk("完成了蓝色鲸鱼山的味道<2>！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31323) == 0 && cm.getQuestStatus(-31324) == 2) {
            cm.sendYesNo("小石说需要克利拉的翅膀碎片和鸟鲨的翅膀碎片。\r\n\r\n#b接受任务：[寻找蓝色鲸鱼山的味道<1>]#k");
            status = 1323;
            return;
        }
 else if (cm.getQuestStatus(-31322) == 0 && cm.getQuestStatus(-31323) == 2) {
            cm.sendYesNo("小石最后要求你带来族长克利拉的结实翅膀碎片和族长鸟鲨的酸甜翅膀碎片。\r\n\r\n#b接受任务：[寻找蓝色鲸鱼山的味道<2>]#k");
            status = 1322;
            return;
        }
        cm.sendOk("你好！我是小石。");
        cm.dispose();
    }
    else if (status == 1323) {
        cm.startQuest(-31323);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1322) {
        cm.startQuest(-31322);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}