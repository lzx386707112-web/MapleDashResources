// -31113 (TMS 34423) - [星光之塔] 出道当天
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("终于到来的出道日，大发娱乐的新人团体究竟能不能成功呢？但不知怎么的#b赫一#k的表情并不开心。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("根据赫一的说法，团员们状况变得很奇怪，是在演奏过练习室的吉他之后发生的，去调查一下练习室的吉他吧。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
