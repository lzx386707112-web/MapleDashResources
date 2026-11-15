// -31118 (TMS 34418) - [星光之塔] 寻找蒂雅
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("要帮忙准备出道的秘书#b蒂雅#k不见踪影。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("从练习室传出某人的歌声，歌声的主人不是别人，正是秘书蒂雅。还以为自己已经放弃歌手之路，但却无法放下自己的梦想。重新开始梦想的蒂雅，在熄灯的练习室内却是如此闪耀。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
