// NPC 3003208 - 露希妲
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
        if (cm.getMapId() == 450004000) {
            cm.dispose();
            cm.openNpc(3003208, "露希妲远征");
            return;
        }
if (cm.getQuestStatus(34331) == 1) {
            cm.completeQuest(34331);
            cm.sendOk("与露希妲的最终决战！");
            cm.dispose(); return;
        }
        cm.sendOk("你好！我是露希妲。");
        cm.dispose();
    }
}
