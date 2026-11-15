// -31085 (TMS 34451) - [阿尔卡娜]小精灵
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("从具威胁性的精灵那里救出了一只小精灵，靠近他与他对话吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("根据小精灵所说的，并不是一开始附近就有光之漩涡。这里肯定是发生了什么事情。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
