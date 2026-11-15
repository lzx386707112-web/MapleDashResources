// NPC 3003214 - 声音
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
if (cm.getQuestStatus(34309) == 1) {
            cm.completeQuest(34309);
            cm.sendOk("梦中似乎听见了什么声音…去调查一下吧。");
            cm.dispose(); return;
        }
        cm.sendOk("你好！我是声音。");
        cm.dispose();
    }
}