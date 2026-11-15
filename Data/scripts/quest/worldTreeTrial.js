// TMS282 quest identity/NPC/reward: QuestData/1464.img. Original scripts missing.
// User-confirmed completion rules (2026-11-15): 300 seconds, retry after timeout;
// uniform choice among three upper maps; dynamic portal at each original sp.
// Reward quantities are read by completeItemRewardQuest from imported QuestData.
var stage = -1;
var trialMaps = [105300300, 105300301, 105300302];
var trialX = [-420, -898, -420];
var trialY = [-370, -384, -370];
var trialPortal = "worldTreeTrial";
function readTrial() {
    var text = qm.getQuestProgress(1464, "trial");
    if (!text) return null;
    var parts = text.split(":");
    if (parts.length != 3) return null;
    var map = Number(parts[0]);
    var deadline = Number(parts[1]);
    if (trialMaps.indexOf(map) < 0 || !(deadline > 0)) return null;
    return { map: map, deadline: deadline, cleared: parts[2] == "1" };
}
function writeTrial(value) {
    qm.setQuestProgress(1464, "trial", value.map + ":" + value.deadline + ":" + (value.cleared ? "1" : "0"));
}
function liveTrial(value) {
    return value && !value.cleared && value.deadline > qm.getCurrentTime();
}
function beginTrial() {
    if (!qm.isQuestStarted(1464) || qm.getMapId() != 450000020) return false;
    var old = readTrial();
    if (liveTrial(old)) return false;
    var index = Math.floor(Math.random() * trialMaps.length);
    writeTrial({ map: trialMaps[index], deadline: qm.getCurrentTime() + 300000, cleared: false });
    qm.warp(105300000, 0);
    return true;
}
function start(mode, type, selection) {
    if (mode != 1) { qm.dispose(); return; }
    if (stage++ == -1) {
        qm.sendYesNo("接受玛斯特利亚女神的试炼？请在5分钟内找到世界树上层的地平线传送点。超时可以回来重新挑战。");
        return;
    }
    if (qm.getMapId() != 450000020) {
        qm.sendOk("请到女神所在的空间接受试炼。"); qm.dispose(); return;
    }
    qm.startQuest(1464);
    beginTrial(); qm.dispose();
}
function end(mode, type, selection) {
    if (mode != 1) { qm.dispose(); return; }
    var state = readTrial();
    if (stage++ == -1) {
        if (state && state.cleared) qm.sendYesNo("你通过了试炼。现在领取女神的神秘石吗？");
        else if (liveTrial(state)) {
            qm.sendOk("试炼尚未完成，请在剩余时间内找到世界树上层的地平线传送点。"); qm.dispose();
        } else qm.sendYesNo("试炼尚未通过。要重新开始5分钟挑战吗？");
        return;
    }
    if (state && state.cleared) qm.completeItemRewardQuest(1464);
    else beginTrial();
    qm.dispose();
}
// 正式 quest/1464.js 的入口转发（runScript 不传入口实参，这里用无参函数）。
// 接取：先落任务状态，再按原规则抽一张上层图并开 300 秒计时。
function accept() {
    if (qm.isQuestStarted(1464)) {
        qm.sendOk("试炼已经在进行中，请在剩余时间内找到地平线传送点。");
        qm.dispose();
        return;
    }
    qm.startQuest(1464);
    if (!beginTrial()) qm.sendOk("请到玛斯特利亚女神所在的空间接受试炼。");
    qm.dispose();
}
// 交付：只有 cleared 才能领石，奖励数量由宿主读 Act/1。
function finish() {
    var state = readTrial();
    if (!(state && state.cleared)) {
        qm.sendOk("试炼尚未通过。请在5分钟内找到世界树上层的地平线传送点后再回来。");
        qm.dispose();
        return;
    }
    if (!qm.completeItemRewardQuest(1464)) qm.sendOk("现在还不能领取神秘石，请清出背包空间后再来。");
    qm.dispose();
}
function enterMap() {
    qm.removePortal(trialPortal);
    var state = readTrial();
    if (!qm.isQuestStarted(1464) || !liveTrial(state)) { qm.showClock(0); return; }
    var left = state.deadline - qm.getCurrentTime();
    qm.showClock(Math.ceil(left / 1000));
    var index = trialMaps.indexOf(qm.getMapId());
    if (index < 0 || state.map != qm.getMapId()) return;
    qm.createPortal(trialPortal, trialX[index], trialY[index], "worldTreeTrial", state.deadline, "Npc/1540941.img/stand");
}
function enterTrialPortal() {
    var state = readTrial();
    if (!qm.isQuestStarted(1464) || !liveTrial(state) || state.map != qm.getMapId()) {
        qm.removePortal(trialPortal); qm.sendOk("这次试炼已经结束，请回女神处重新挑战。"); return false;
    }
    state.cleared = true;
    writeTrial(state);
    qm.removePortal(trialPortal); qm.showClock(0);
    qm.warp(450000020, 0);
    return true;
}
