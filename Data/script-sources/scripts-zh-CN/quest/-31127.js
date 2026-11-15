// -31127 (TMS 34409) - [星光之塔] …邀请，失败！？
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("总是面带笑容，拥有能让人充满活力的魅力！萨菲一定有成为明星的资质！将大发娱乐公司的名片递交给#r萨菲#k吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("给萨菲聆听赫一的新歌之后，不知道为什么她的心似乎开始有所动摇…重新在邀请一次看看吧！"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
