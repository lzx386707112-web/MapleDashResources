/**
 * 1464「玛斯特利亚女神的神秘石」正式入口。
 *
 * 证据（advancement-quest-detail.json → quests.1464）：
 *   Check/0: npc 1540944, startscript q1464s, 前置 1461 state=1
 *   Check/1: npc 1540944, endscript q1464e
 *   Act/1   : item 2435736 x1
 *   NPC 1540944 在 450000020（玛斯特利亚女神间）。
 *
 * 试炼逻辑仍在 quest/worldTreeTrial.js（300 秒、三张上层图随机、动态传送门、超时重试），
 * 这里只做正式任务入口转发。runScript 不传入口实参，所以控制器提供无参 accept()/finish()。
 */
function start(mode, type, selection) {
    if (mode != 1) {
        qm.dispose();
        return;
    }
    qm.runScript("quest/worldTreeTrial", "accept");
}

function end(mode, type, selection) {
    if (mode != 1) {
        qm.dispose();
        return;
    }
    qm.runScript("quest/worldTreeTrial", "finish");
}
