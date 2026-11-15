// -31134 (TMS 34402) - [星光之塔] 堕落广场的超级巨星
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("看起来是对#p1052203#狂热饭的少女，是#b#p1052205##k，向她询问看看#p1052203#的状况吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("帮忙取得的#b#i4036027:# #t4036027:##k #b25个#k当中有签名会入场券。#p1052205#说那是只会提供感谢对象的高级情报，接著便告知#p1052203#的鞋子尺寸。连鞋子尺寸都很热门，#p1052203#是当时的超级巨星。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
