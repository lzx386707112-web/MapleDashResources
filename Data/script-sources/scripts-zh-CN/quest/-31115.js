// -31115 (TMS 34421) - [星光之塔] 邀请化妆师
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("大发娱乐的新人女团为了要成功出道，决定寻找实力最强的化妆师。去#r5楼化妆品卖场#k找#b丽蔻塔#k吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("收集#b#i4036024:# #t4036024:##k #b15个#k交给Ricotta，并且完成了交涉。现在剩下发型师。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
