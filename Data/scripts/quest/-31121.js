// -31121 (TMS 34415) - [星光之塔] 亚咪的心意
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("帮她找回#i4036023:# #t4036023:#，她会不会多少有些动摇呢？再次向#b亚咪#k提出征选提议吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("从#b#i4036023:# #t4036023:##k传出的是赫一刚出道时的歌曲。亚咪是赫一的粉丝。这么说，亚咪想去的地方是… "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
