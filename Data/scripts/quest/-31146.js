// -31146 (TMS 34390) - [每日任务] 消灭200个弱化的净化者
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("击退#b#o8643012:##k#r200只#k之后去找#b#m450003100:##k的#b#p3003209:##k吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("#b#p3003209:##k请求的#b#o8643012:##k #r200只#k已完成击杀。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
