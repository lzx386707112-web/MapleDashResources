// -31116 (TMS 34420) - [星光之塔] 争取出道节目
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("峰回路转之后，终于成立的大发娱乐的全新女团！现在只差出道了，蒂雅既然已经成为歌手，无法再兼任秘书的工作，准备作业该由谁来进行呢？与#b赫一#k讨论看看。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("事前简讯投票结果，大发娱乐的新人女团获得压倒性的第一名，成为'梦想舞台'的主角！大发娱乐的未来要开始大发了吗？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
