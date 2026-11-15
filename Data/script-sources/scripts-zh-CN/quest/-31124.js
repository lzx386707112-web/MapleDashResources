// -31124 (TMS 34412) - [星光之塔] 暴走的佩里!?
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("…先把收集到的拿过去吧！得装作没看见，但还是不免想著透过笔记得知#b佩里#k有这样的才能，她似乎也有成为明日之星的资质。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("毫无保留地展现自己的长才不就是明星基本该做的事情吗？唤醒暴走的佩里，述说关于她的才能。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
