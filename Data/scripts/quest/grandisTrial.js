// Staged controller: not a quest/1463 entry until Magnus region is available.
// Original item reward is read by the host; no teleport shortcut.
function end(mode, type, selection) {
    if (mode !== 1 || !qm.isQuestStarted(1463)) {
        qm.dispose();
        return;
    }
    if (qm.getQuestProgressInt(1463, "info0") < 1) {
        qm.sendOk("请在接取任务后击败一次梅格耐斯。简单、普通或困难难度皆可。完成后再来领取格兰蒂斯的神秘石。");
        qm.dispose();
        return;
    }
    if (qm.completeItemRewardQuest(1463)) {
        qm.sendOk("你已经证明了自己的力量。收下格兰蒂斯的神秘石吧。");
    }
    qm.dispose();
}
