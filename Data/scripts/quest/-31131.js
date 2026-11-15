// -31131 (TMS 34405) - [星光之塔] 聆听美好音乐的回馈
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("在#r星光之塔大厅#k见到了街头艺人#b露比#k，虽然技巧不够纯熟，但他充满能量的嗓音，让所有路人都为他喝采。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("对于音乐人来说观众的支持是最大的动力！虽然技巧不足，但率性的露比在午后的夕阳衬托下散发出耀眼光芒。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
