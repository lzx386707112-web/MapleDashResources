// -31119 (TMS 34417) - [星光之塔] 歌曲的主人是？
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("露比，萨菲，佩里，亚咪。４名新人歌手候补一起聚集在赫一的办公室。现场弥漫著紧张的气息，马上#b赫一#k就要#b#e发表重大消息#n#k，到底赫一的新曲会由哪一个歌手诠释呢？"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("深深苦恼后，赫一决定成立新人团体组合！当大家沉浸于这个好消息时，要帮忙准备出道的蒂雅却不见踪影。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
