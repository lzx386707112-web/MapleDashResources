/**
 *
 * @author Arnah, Ronan
 *
 * 本项目覆盖：源端这条兜底只 forceCompleteQuest，**不发勋章**；
 * 而项目里 forceCompleteQuest 走 QuestLogic.Complete(applyActions:false)，
 * Act/1 也不会执行 —— 于是「交完任务、勋章没到手、还不能重接」。
 * 这里按勋章 id 先校验空位再发，最后才完成任务（顺序反了背包满就会永久丢勋章）。
 * 只在 Act/1 本身不含勋章的任务上才会被 NpcSession.TalkQuest 选中。
 */

function grantMedal() {
    var medal = 0;
    try { medal = qm.getMedalId(); } catch (e) { medal = 0; }
    if (medal > 0) {
        if (!qm.canHold(medal, 1)) {
            qm.sendOk("你的装备栏没有空位。#b请先清出一个格子#k，再来领取勋章。");
            qm.dispose();
            return false;
        }
        qm.gainItem(medal, 1);
    }
    return true;
}

function start(mode, type, selection) {
    if (!grantMedal()) return;
    qm.forceStartQuest();
    qm.forceCompleteQuest();

    var medalname = qm.getMedalName();
    qm.message("<" + medalname + "> 已领取奖励.");
    qm.earnTitle("<" + medalname + "> 已领取奖励.");
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode != 1) {
        qm.dispose();
        return;
    }
    if (!grantMedal()) return;
    qm.forceCompleteQuest();

    var medalname = qm.getMedalName();
    qm.message("<" + medalname + "> 已领取奖励.");
    qm.earnTitle("<" + medalname + "> 已领取奖励.");
    qm.dispose();
}
