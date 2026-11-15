// -31112 (TMS 34424) - [星光之塔] 吉他上的音乐精灵
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("根据赫一的说法，团员们状况变得奇怪，是在演奏过练习室的吉他之后发生的，去调查一下#b练习室的吉他#k吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("成功击退练习室吉他上的音乐精灵，听说音乐精灵只会出现在新人歌手面前，现在应该没事了吧？虽然以为这只是口耳相传的流言。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
