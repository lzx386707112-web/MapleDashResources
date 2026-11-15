// -31236 (TMS 34300) - [拉契尔恩]长期进行庆典的都市
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("已抵达正在举行庆典的城市。 但不太对劲。跟住民们对话看看吧。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("已抵达正在举行庆典的城市。 但不太对劲。 就算跟居民说话，他们也只重覆说著奇怪的话。 "); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
