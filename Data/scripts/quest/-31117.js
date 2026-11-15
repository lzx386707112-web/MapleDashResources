// -31117 (TMS 34419) - [星光之塔] 发现巨星的原石<5>
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("就如藏在泥土中的宝石一样具有无比魅力的蒂雅！她绝对有成为巨星的可能性！将大发娱乐的名片递给一路波折的歌手练习生#b蒂雅#k吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("推荐蒂雅之后，新人组合确定以５人成员出道。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
