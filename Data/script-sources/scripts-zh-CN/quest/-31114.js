// -31114 (TMS 34422) - [星光之塔] 邀请发型师
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("为了大发娱乐新人组合的成功出道，决定要邀请眼光最好的发型师。前往#r6楼发廊#k去找#b帕尼尔#k吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("收集#b#i4036025:# #t4036025:##k #b15个#k交给帕尼罗，完成了交涉。现在回去赫一的办公室吧。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
