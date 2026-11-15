// -31067 (TMS 34469) - [阿尔卡娜]响彻的竖琴声
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("正在著要找回藤条竖琴就看见树木的精灵们出现在眼前。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("迷路的树木的精灵代替其他伙伴表示歉意，但那所谓一股坏气息的外地人究竟指的是谁呢？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
