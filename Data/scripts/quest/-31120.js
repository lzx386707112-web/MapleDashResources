// -31120 (TMS 34416) - [星光之塔] 发现巨星的原石 <4>
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("神秘的音色下，具有冷酷魅力的女孩！亚咪有成为巨星的可能性！对超酷美人#b亚咪#k递出大发娱乐的名片吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("招募亚咪后回到办公室。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
