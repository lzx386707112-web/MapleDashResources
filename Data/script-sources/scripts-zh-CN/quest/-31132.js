// -31132 (TMS 34404) - [星光之塔] 请让我成为选拔歌手的星探吧！
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("…在放弃之前先问问自己还有什么解决办法吧！或许跟#b#p1052203##k稍微谈谈，会出现不错的答案。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("出发之前听秘书#b#p1052212##k说明征选歌手相关的基本事项吧！"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
