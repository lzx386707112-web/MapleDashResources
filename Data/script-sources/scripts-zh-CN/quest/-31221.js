// -31221 (TMS 34315) - [拉契尔恩]打破碟子吧2
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("从派伊面具身上传来了音乐盒的声音。 要跟他讲话才行。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("派伊面具变成音乐盒了。 虽然一把它摧毁，净化者就消失了，但防毒面具很痛苦。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
