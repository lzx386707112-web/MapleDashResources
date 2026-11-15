// -31096 (TMS 34440) - [星光之塔] 完美的出道准备
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("事前投票的结果，成为第一名'梦想舞台'的主人公的大发娱乐新人女团！现在就只差出道的完美准备了。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("为了帮助大发娱乐的新人女团出道，邀请了发型师与化妆师。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
