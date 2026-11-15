// -31128 (TMS 34408) - [星光之塔] 帮我收集饮料材料
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("在#星光之塔2楼咖啡厅#k里见到打工的#b萨菲#k，即使忙碌奔走著，脸上却总是带著笑容，让周围充满明朗氛围…但仔细看了一下，好像有什么问题。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("帮助了因为#t4036020:#掉落感到慌张的萨菲。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
