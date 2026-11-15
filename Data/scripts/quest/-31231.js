// -31231 (TMS 34305) - [拉契尔恩]会合
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("带著老爷帮你做的面具跟防毒面具讲话吧。 "); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("遵照防毒面具的劝诱，决定跟'苏醒者'一起行动。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
