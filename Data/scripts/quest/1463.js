/**
 * 1463「格兰蒂斯女神的神秘石」正式入口。
 *
 * 证据（advancement-quest-detail.json → quests.1463）：
 *   Check/0: npc 1540943, startscript q1463s, 前置 1461 state=1
 *   Check/1: npc 1540943, endscript q1463e
 *   Act/1   : item 2435735 x1
 *   demand  : #o9001059# 击杀 1（文案 ID，不按实体匹配）
 *   NPC 1540943 在 450000010（格兰蒂斯女神间），由 400000001 的 pt_horizon 进入。
 *
 * 完成判定沿用项目已确认规则（data/grandis-magnus-trial-rule.json）：
 * 任务进行中实际击杀一次梅格耐斯，任意难度；由 quest/onMobKilled.js 写 info0。
 *
 * 难度：原端选择界面脚本缺失，按项目补全在接取时询问，写入 questProgress(1463,"diff")，
 * 供 portal/ptBossIn.js 决定进入 401060300（简单）/401060200（普通）/401060100（困难）。
 */
var step = 0;

function choose(diff, label) {
    qm.setQuestProgress(1463, "diff", "" + diff);
    qm.startQuest(1463);
    qm.sendOk("就按「" + label + "」难度准备。\r\n从万神殿的神庙往格兰蒂斯女神间走，大厅里的门会把你送进战斗。\r\n击败梅格耐斯之后回来，我会把神秘石交给你。");
    qm.dispose();
}

function start(mode, type, selection) {
    if (step == 0) {
        step = 1;
        qm.sendYesNo("格兰蒂斯的女神只看你做过什么。\r\n要以「普通」难度挑战梅格耐斯吗？");
        return;
    }
    if (step == 1) {
        if (mode == 1) {
            choose(1, "普通");
            return;
        }
        step = 2;
        qm.sendYesNo("那么，要选「困难」难度吗？");
        return;
    }
    if (step == 2) {
        if (mode == 1) {
            choose(2, "困难");
            return;
        }
        step = 3;
        qm.sendYesNo("最后确认：要选「简单」难度吗？");
        return;
    }
    if (mode == 1) {
        choose(0, "简单");
        return;
    }
    qm.sendOk("等你准备好了再来。");
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode != 1) {
        qm.dispose();
        return;
    }
    if (!qm.isQuestStarted(1463)) {
        qm.dispose();
        return;
    }
    if (qm.getQuestProgressInt(1463, "info0") < 1) {
        qm.sendOk("请在接取任务后击败一次梅格耐斯。简单、普通或困难难度皆可。完成后再来领取格兰蒂斯的神秘石。");
        qm.dispose();
        return;
    }
    if (!qm.completeItemRewardQuest(1463)) {
        qm.sendOk("现在还不能领取神秘石，请清出背包空间后再来。");
    }
    qm.dispose();
}
