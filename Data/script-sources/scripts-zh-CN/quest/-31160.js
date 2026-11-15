// -31160 (TMS 34376) - 蝴蝶梦
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("六个在拉契尔恩主街出现的潜意识的裂痕都看到了。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("六个在拉契尔恩主街出现的潜意识的裂痕都看到了。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
