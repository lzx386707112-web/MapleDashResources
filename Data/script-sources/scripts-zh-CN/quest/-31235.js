// -31235 (TMS 34301) - [拉契尔恩]梦想与幻想的都市
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext(" 见到露希妲后虽然经历了绝处逢生的危机，但救出了防毒面具和老爷。 老爷好像要跟你说明什么。  "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("这个地方是梦之都拉契尔恩。 我遇到的正是梦的操纵者露希妲。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
