// NPC 3003150 - 瑞昂
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
if (cm.getQuestStatus(-31336) == 1) {
            cm.completeQuest(-31336);
            cm.sendOk("向利昂打听啾啾艾尔兰的状况吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31335) == 0 && cm.getQuestStatus(-31336) == 2) {
            cm.sendYesNo("去找把你从武藤攻击中救出来的狮子兽人－利昂，向他打听啾啾艾尔兰的状况吧！\r\n\r\n#b接受任务：[欢迎来到啾啾艾尔兰]#k");
            status = 1335;
            return;
        }
 else if (cm.getQuestStatus(-31320) == 0 && cm.getQuestStatus(-31321) == 2) {
            cm.sendYesNo("梦幻三明治完成的那个瞬间！地面在摇晃，古拉的进攻开始了。快点去见族长里昂吧！\r\n\r\n#b接受任务：[古拉的侵攻]#k");
            status = 1320;
            return;
        }
        cm.sendOk("你好！我是瑞昂。");
        cm.dispose();
    }
    else if (status == 1335) {
        cm.startQuest(-31335);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1320) {
        cm.startQuest(-31320);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}