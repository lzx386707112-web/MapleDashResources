// -31227 (TMS 34309) - [拉契尔恩]梦中听见的声音 
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("因为被净化者追赶，就回到了秘密据点。 要跟老爷说才行。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("虾面具想起了音乐盒的声音。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
