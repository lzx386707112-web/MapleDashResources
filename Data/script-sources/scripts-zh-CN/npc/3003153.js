// NPC 3003153 - 哔比
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
if (cm.getQuestStatus(-31327) == 1 && cm.getItemCount(4034946) >= 20 && cm.getItemCount(4034947) >= 20) {
            cm.gainItem(4034946, -20);
            cm.gainItem(4034947, -20);
            cm.completeQuest(-31327);
            cm.sendOk("完成了啾乐森林的味道<1>！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31326) == 1 && cm.getItemCount(4034948) >= 20 && cm.getItemCount(4034949) >= 20) {
            cm.gainItem(4034948, -20);
            cm.gainItem(4034949, -20);
            cm.completeQuest(-31326);
            cm.sendOk("完成了啾乐森林的味道<2>！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31327) == 0 && cm.getQuestStatus(-31328) == 2) {
            cm.sendYesNo("大大是叫我寻找普利温的清爽的鬃毛和火爆普利温的辛辣的鬃毛。\r\n\r\n#b接受任务：[寻找啾乐森林的味道<1>]#k");
            status = 1327;
            return;
        }
 else if (cm.getQuestStatus(-31326) == 0 && cm.getQuestStatus(-31327) == 2) {
            cm.sendYesNo("大大要你去带来半熟的果狼软脚掌与全熟的利姆利姆软脚掌。\r\n\r\n#b接受任务：[寻找啾乐森林的味道<2>]#k");
            status = 1326;
            return;
        }
        cm.sendOk("你好！我是哔比。");
        cm.dispose();
    }
    else if (status == 1327) {
        cm.startQuest(-31327);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1326) {
        cm.startQuest(-31326);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}