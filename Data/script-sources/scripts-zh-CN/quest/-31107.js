// -31107 (TMS 34429) - [星光之塔] 佩里的头号粉丝
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("成功招募佩里。\n需要透过与佩里的对话努力了解她。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("成为佩里的头号粉丝。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
