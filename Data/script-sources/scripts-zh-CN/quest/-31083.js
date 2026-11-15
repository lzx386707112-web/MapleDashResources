// -31083 (TMS 34453) - [阿尔卡娜]森林之歌
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("森林乐曲的消失如果是破坏和谐的原因的话……，要不要详细问一下有关森林乐曲的事情？"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("在聊著让天然物发出声音的方法时，出现不知在哪偷听的风精灵。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
