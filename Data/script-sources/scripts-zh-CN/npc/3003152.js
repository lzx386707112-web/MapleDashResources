// NPC 3003152 - 舔舔大师
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
if (cm.getQuestStatus(-31335) == 1) {
            cm.completeQuest(-31335);
            cm.sendOk("去找把你从武藤攻击中救出来的狮子兽人－利昂，向他打听啾啾艾尔兰的状况吧！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31334) == 1) {
            cm.completeQuest(-31334);
            cm.sendOk("能让武藤移动的唯一办法就只有制作出武藤想吃的美食。去见见啾啾艾尔兰最厉害的厨师「舔舔大师」吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31333) == 1 && cm.getItemCount(4034942) >= 20) {
            cm.gainItem(4034942, -20);
            cm.completeQuest(-31333);
            cm.sendOk("完成了舔舔大师的特制料理！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31334) == 0 && cm.getQuestStatus(-31335) == 2) {
            cm.sendYesNo("能让武藤移动的唯一办法就只有制作出武藤想吃的美食。去见见啾啾艾尔兰最厉害的厨师「舔舔大师」吧。\r\n\r\n#b接受任务：[顶尖料理师哈大师]#k");
            status = 1334;
            return;
        }
 else if (cm.getQuestStatus(-31333) == 0 && cm.getQuestStatus(-31334) == 2) {
            cm.sendYesNo("舔舔大师指使人帮忙完成他自己的特制料理…\r\n\r\n#b接受任务：[哈大师的特制料理]#k");
            status = 1333;
            return;
        }
 else if (cm.getQuestStatus(-31332) == 0 && cm.getQuestStatus(-31333) == 2) {
            cm.sendYesNo("试吃最厉害的厨师舔舔大师推崇的特制料理！\r\n\r\n#b接受任务：[这个味道是？！]#k");
            status = 1332;
            return;
        }
        cm.sendOk("你好！我是舔舔大师。");
        cm.dispose();
    }
    else if (status == 1334) {
        cm.startQuest(-31334);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1333) {
        cm.startQuest(-31333);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1332) {
        cm.startQuest(-31332);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}