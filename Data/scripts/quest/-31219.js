// -31219 (TMS 34317) - [拉契尔恩]露希妲寻找的恶梦
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("音乐盒是维持梦境的装置。 摧毁音乐盒后，当居民们醒来时，梦境就崩塌了。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("露希妲正在到处寻找恶梦。 是什么恶梦？"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
