// -31076 (TMS 34460) - [阿尔卡娜]与月光最近的地方
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("与月光最近的地方……，究竟在说什么呢？再次与小精灵对话吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("一将草笛移道与月光最近的地方后，则开始回到原本的模样，也发出了清脆的声音。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
