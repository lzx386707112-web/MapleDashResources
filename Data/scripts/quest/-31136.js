// -31136 (TMS 34400) - [星光之塔] 开启星光之塔
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("来自堕落地铁的#p1052006#信件，究竟有什么事情呢？"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("#p1052006#身为老朋友，对于过去新星#p1052203#的挫折感到非常惋惜，甚至从好几天前就开始足不出户…由于#p1052006#太过忙碌，代替他去找#r#m103041001##k吧！"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
