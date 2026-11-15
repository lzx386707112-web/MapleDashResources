// -31105 (TMS 34431) - [星光之塔] 蒂雅的头号粉丝
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("成功招募蒂雅。\n需要透过与蒂雅的对话努力了解她。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("成为蒂雅的头号粉丝。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
