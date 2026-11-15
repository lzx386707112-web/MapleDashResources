// -31103 (TMS 34433) - [活动] 星光之塔开幕活动
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("#e星光之塔#n，堕落城市的全新地标！\n为了共同创造了新历史的大家，准备了特别的礼物。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("堕落广场的新地标，完成星光之塔获得礼物。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
