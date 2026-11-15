// -31086 (TMS 34450) - [阿尔卡娜]再见，恶梦的都市
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("覆盖著拉契尔恩的红色雾气难以轻易的散去。到完全的消失看来需要一些时间。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("覆盖著拉契尔恩的红色雾气难以轻易的散去。到完全的消失看来需要一些时间。 听到远方熟悉的声音而过去确认，飞鱼们都回来了。搭乘飞鱼随著天空的路线掉到了拉契尔恩。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
