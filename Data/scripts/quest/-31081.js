// -31081 (TMS 34455) - [阿尔卡娜]赋予草笛生命力1
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("草笛枯萎了。要如何变活原来的样子呢？和小精灵对话看看吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("正传送生命力时，原还在想草笛会不会就这样暂时的活过来但突然又枯萎了。难道是生命力不足的关系吗？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
