// -31204 (TMS 34332) - [拉契尔恩]吃饱的武藤
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("充满饱腹感的武藤，现在应该会想让路\r了吧？跟武藤搭话，移动到#r下一个地区#k\r看看吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("充满饱腹感的武藤，现在应该会想让路\r了吧？跟武藤搭话，移动到#r下一个地区#k\r看看吧。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
