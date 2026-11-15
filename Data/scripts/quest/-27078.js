// -27078 (TMS 38458) - [每日任务] 拉契尔恩的平安夜
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("大爷对这都市的庆典似乎还有些陌生。\r\n快去找找#r#m450003100:##k的#b#p3003209:##k吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("每天透过#r#m450003100:##k的#b#p3003209:##k执行并接受每日委托之后，似乎就可以为充满庆典的都市带来和平的夜晚。\n\n接受#b#p3003209:##k的请托，为梦之都市拉契尔恩带来宁静与和平吧。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
