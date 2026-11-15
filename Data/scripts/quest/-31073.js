// -31073 (TMS 34463) - [阿尔卡娜]寻找消失的树木精灵
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("得快点找到树木的精灵，跟小精灵一起翻遍每个树丛深处角落吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("找到独自处在深幽树林里的树木的精灵了！虽然他已被染上邪恶气息，但还好似乎尚未完全失去意识。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
