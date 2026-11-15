// -31080 (TMS 34456) - [阿尔卡娜]赋予草笛生命力2
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("正传送生命力时，原还在想草笛会不会就这样暂时的活过来但突然又枯萎了。 难道生命力不足吗？和小精灵对话吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("和刚刚相同，短暂的回覆后马上又枯萎了。难道无法永远活过来吗？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
