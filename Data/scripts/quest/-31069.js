// -31069 (TMS 34467) - [阿尔卡娜]恢复树藤竖琴1
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("透过隐藏在#r#m450005220##k的入口追上#b小精灵#k吧。\n\n藤条竖琴旁长著的大树阻挡了星光。树木好像是随著发出声音的那端移动。\n\n和在#r#m940200216##k的#b小精灵#k搭话，商量看看该怎么办吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("只用#t4036099:#似乎有些不够。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
