// NPC 3003215 - 居民
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
if (cm.getQuestStatus(34308) == 1) {
            cm.completeQuest(34308);
            cm.sendOk("继续调查'苏醒者'的身份。");
            cm.dispose(); return;
        }
        cm.sendOk("你好！我是居民。");
        cm.dispose();
    }
}