// -31222 (TMS 34314) - [拉契尔恩]打破碟子吧1
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("河水流过来的方向。 即，要去左边问音乐盒的位置。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("据说音乐盒的声音是从派伊面具身上传来的。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
