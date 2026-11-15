// -31077 (TMS 34459) - [阿尔卡娜]花朵的私语
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("再次向出现的风精灵征求意见吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("将说悄悄话的花群们所说的话中很在意的地方转达给小精灵。似乎想起了什么。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
