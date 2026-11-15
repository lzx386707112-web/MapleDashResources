// NPC 3003209 - 神秘的少女
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
if (cm.getQuestStatus(34301) == 1) {
            cm.completeQuest(34301);
            cm.sendOk("跟居民对话之后，发现这座城市不太正常。去问问那个少女吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34302) == 1) {
            cm.completeQuest(34302);
            cm.sendOk("这座城市似乎陷入了某种不正常的状态。少女似乎知道些什么。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34305) == 1) {
            cm.completeQuest(34305);
            cm.sendOk("与防毒面具会合吧。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34316) == 1) {
            cm.completeQuest(34316);
            cm.sendOk("居民们似乎开始清醒了…");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34318) == 1) {
            cm.completeQuest(34318);
            cm.sendOk("找到了第二个音乐盒。");
            cm.dispose(); return;
        }
 else if (cm.getQuestStatus(34300) == 0) {
            cm.sendYesNo("已抵达正在举行庆典的城市。但不太对劲。跟住民们对话看看吧。\r\n\r\n#b接受任务：[长期进行庆典的都市]#k");
            status = 4300;
            return;
        }
 else if (cm.getQuestStatus(34301) == 0 && cm.getQuestStatus(34300) == 2) {
            cm.sendYesNo("跟居民对话之后，发现这座城市不太正常。去问问那个少女吧。\r\n\r\n#b接受任务：[梦想与幻想的都市]#k");
            status = 4301;
            return;
        }
 else if (cm.getQuestStatus(34302) == 0 && cm.getQuestStatus(34301) == 2) {
            cm.sendYesNo("这座城市似乎陷入了某种不正常的状态。少女似乎知道些什么。\r\n\r\n#b接受任务：[无法脱离的庆典都市]#k");
            status = 4302;
            return;
        }
 else if (cm.getQuestStatus(34309) == 0 && cm.getQuestStatus(34308) == 2) {
            cm.sendYesNo("梦中似乎听见了什么声音…去调查一下吧。\r\n\r\n#b接受任务：[梦中听见的声音]#k");
            status = 4309;
            return;
        }
 else if (cm.getQuestStatus(34310) == 0 && cm.getQuestStatus(34309) == 2) {
            cm.sendYesNo("那个声音似乎是音乐盒发出的…\r\n\r\n#b接受任务：[音乐盒的声音？]#k");
            status = 4310;
            return;
        }
 else if (cm.getQuestStatus(34317) == 0 && cm.getQuestStatus(34316) == 2) {
            cm.sendYesNo("露希妲在寻找的恶梦到底是什么…\r\n\r\n#b接受任务：[露希妲寻找的恶梦]#k");
            status = 4317;
            return;
        }
 else if (cm.getQuestStatus(34326) == 0 && cm.getQuestStatus(34325) == 2) {
            cm.sendYesNo("好像坠落到了什么地方…\r\n\r\n#b接受任务：[坠落]#k");
            status = 4326;
            return;
        }
        cm.sendOk("你好！我是神秘的少女。");
        cm.dispose();
    }
    else if (status == 4300) {
        cm.startQuest(34300);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4301) {
        cm.startQuest(34301);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4302) {
        cm.startQuest(34302);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4309) {
        cm.startQuest(34309);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4310) {
        cm.startQuest(34310);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4317) {
        cm.startQuest(34317);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
    else if (status == 4326) {
        cm.startQuest(34326);
        cm.sendOk("任务已接受！");
        cm.dispose();
    }
}