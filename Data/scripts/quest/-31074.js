// -31074 (TMS 34462) - [阿尔卡娜]他们是树木的精灵
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("虽到达了森林深处，但好像有什么严重的误解。和小精灵聊聊吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("依照风精灵所说的，其中一个树精灵在森林深处某个地方。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
