// -31142 (TMS 34394) - [每日任务] 回收50个睡眠粉
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("收集可以从所有拉契尔恩怪物身上获得的\n#i4036572:#  #t4036572:# #r50个#k后，交给#b#m450003100:##k的#b#p3003209:##k吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("#b#p3003209:##k请求的#i4036572:##t4036572:##r50个#k已收集完成。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
