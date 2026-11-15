// -31110 (TMS 34426) - [星光之塔] 赫伊的朋友
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("曾经是巨星的赫一，成为他选拔人才的经纪人，帮他找回过去的荣耀吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("与赫一成为真诚的朋友。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
