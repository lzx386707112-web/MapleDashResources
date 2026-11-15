// -31225 (TMS 34311) - [拉契尔恩]消失的伊莉莎白1
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("必须跟居民们讲话，询问音乐盒的位置。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("原来伊莉莎白是鸡。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
