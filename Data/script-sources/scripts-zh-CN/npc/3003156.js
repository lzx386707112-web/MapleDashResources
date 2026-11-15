// NPC 3003156 - 穆托
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
if (cm.getQuestStatus(-31320) == 1) {
            cm.completeQuest(-31320);
            cm.sendOk("梦幻三明治完成的那个瞬间！地面在摇晃，古拉的进攻开始了。快点去见族长里昂吧！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31319) == 1) {
            cm.completeQuest(-31319);
            cm.sendOk("终于到了决战的瞬间。舔舔大师和西米雅将各自的料理呈现给武藤。究竟武藤的选择会是如何呢？");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31318) == 1) {
            cm.completeQuest(-31318);
            cm.sendOk("GOOD BYE！啾啾艾尔兰！");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(-31336) == 0) {
            cm.sendYesNo("将与卡欧的离别抛诸脑后，沿著奥术之河去找黑魔法师的途中，遇见了挡住奥术之河的可疑物体。\r\n\r\n#b接受任务：[阻隔的奥术之河]#k");
            status = 1336;
            return;
        }
 else if (cm.getQuestStatus(-31319) == 0 && cm.getQuestStatus(-31320) == 2) {
            cm.sendYesNo("终于到了决战的瞬间。舔舔大师和西米雅将各自的料理呈现给武藤。究竟武藤的选择会是如何呢？\r\n\r\n#b接受任务：[武藤的选择]#k");
            status = 1319;
            return;
        }
 else if (cm.getQuestStatus(-31318) == 0 && cm.getQuestStatus(-31319) == 2) {
            cm.sendYesNo("多亏感动了武藤的三明治，武藤重新振作起来，自古拉手中保护了啾啾艾尔兰的安全。来吧！现在是重新继续面对黑魔法师的时候了。\r\n\r\n#b接受任务：[再见，啾啾艾尔兰]#k");
            status = 1318;
            return;
        }
        cm.sendOk("你好！我是穆托。");
        cm.dispose();
    }
    else if (status == 1336) {
        cm.startQuest(-31336);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1319) {
        cm.startQuest(-31319);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 1318) {
        cm.startQuest(-31318);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 9999) {
        cm.warp(450003000);
        cm.dispose();
    }
}

// 注意：任务-31318完成后，Act.img.xml中已配置nextMap=450003000自动传送
// 如需手动传送选项，可在status==0的末尾添加：
// if (cm.getQuestStatus(-31318) == 2) { cm.sendSimple("要去拉克兰吗？\r\n#L0##b前往拉契尔恩#k"); status = 9999; return; }