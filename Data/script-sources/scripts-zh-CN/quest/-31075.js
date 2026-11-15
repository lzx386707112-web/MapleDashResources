// -31075 (TMS 34461) - [阿尔卡娜]前往森林深处
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("已将草笛放回原位，这就来找下一个天然物吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("虽到达了森林深处，但好像有什么严重的误解。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
