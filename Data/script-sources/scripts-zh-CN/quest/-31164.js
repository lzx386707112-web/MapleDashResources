// -31164 (TMS 34372) - [梦境碎片]第三层潜意识
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("还有某处令人在意的裂痕。 裂痕的另一头好像和潜意识空间连在一起…"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("收集#i4034985:# #b#t4034985:##k，将潜意识的裂痕恢复原状，进入潜意识空间了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
