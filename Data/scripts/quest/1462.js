/**
 * 1462「枫之谷女神的神秘石」——含女神问答。
 *
 * 证据（docs/tms282-skill/data/advanced-quest-evidence/public-swordie/q1462s.py、q1462e.py）：
 *   q1462s：两段叙述（「你走到这里很不容易」/「你想掌握操控艾尔达的力量」）→ startQuest
 *           →「但在那之前，有一个问题想先问你」。
 *   q1462e：两选一提问 —— #L0# 一起冒险的伙伴 / #L1# 枫之谷的人们；
 *           回答后固定回一句「没有正确答案，我只想知道你把什么排在最前面」并发 2435734。
 *   两个分支的后续完全一致，答案不影响任何数值（原脚本也没有记录选择）。
 *
 * 任务数据（advancement-quest-detail.json → quests.1462）：
 *   Check/0: npc 1540942, 前置 1461 state=1；Check/1: npc 1540942；Act/1: item 2435734 x1。
 *   NPC 在 450000000（枫之谷女神间），由 100000201 的 pt_horizon 进入。
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 0 && type > 0) {
        qm.dispose();
        return;
    }
    if (mode == 1) status++; else status--;

    if (status == 0) {
        qm.sendNext("你走到这里，很不容易。我和姐妹们存在的意义，是守护这个世界、指引它的英雄——但能一路走到我们面前的，寥寥无几。");
        return;
    }
    if (status == 1) {
        qm.sendNext("你想掌握操控艾尔达的力量，对吧？这很自然，因为你自己就出自艾尔达，我们都是。把这份力量从身体里释放出来，它就会成为你能驱使的新力量。这件事，我来帮你。");
        return;
    }
    if (status == 2) {
        qm.startQuest(1462);
        qm.sendOk("不过在那之前，有一个问题想先问你。\r\n#b（女神想问你什么？）");
        return;
    }
    qm.dispose();
}

function end(mode, type, selection) {
    if (!qm.isQuestStarted(1462)) {
        qm.dispose();
        return;
    }
    if (mode == 0 && type > 0) {
        qm.dispose();
        return;
    }
    if (mode == 1) status++; else status--;

    if (status == 0) {
        // #L0#/#L1# 的下标原样回到 selection（NpcDialogMode.Simple）。
        qm.sendSimple("在这个世界上，你最想守护的是什么？\r\n#L0#一起冒险的伙伴#l\r\n#L1#枫之谷的人们#l");
        return;
    }
    if (status == 1) {
        qm.sendOk("原来如此。每个人都有很多珍贵的东西。这个问题没有正确答案……我只是想知道，你把什么排在最前面。\r\n#v2435734# #b枫之谷世界的神秘石#k 1个");
        return;
    }
    if (!qm.completeItemRewardQuest(1462)) {
        qm.sendOk("现在还不能领取枫之谷的神秘石，请清出背包空间后再来。");
    }
    qm.dispose();
}
