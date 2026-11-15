// -31133 (TMS 34403) - [星光之塔] 无法不哼上一曲的欢乐旋律
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("之前怎么摇都叫不醒的#p1052203#突然大叫'脑海出现旋律了！'，但他看起来还是昏昏沉沉的，先去找秘书兼打杂的#b#p1052212##k问问看事情的始末吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("#p1052203#虽然总是表现的自暴自弃，但他就连睡觉的时候也会不自觉地唱起歌曲，由此可见他并没有完全放弃音乐这条路…."); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
