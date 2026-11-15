// -31130 (TMS 34406) - [星光之塔] 需要喇叭线
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("#r露比#k似乎默默地想要演奏下一首歌曲，不过奇怪了耶？没声音，究竟是出了什么问题。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("表演开始前露比的#b#i4036019:# #t4036019:##k却突然断掉，因此我帮他解决了困难。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
