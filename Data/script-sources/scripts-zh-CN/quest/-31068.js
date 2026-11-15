// -31068 (TMS 34468) - [阿尔卡娜]恢复树藤竖琴2
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("光靠#t4036099:#似乎有些不够，需要其他更强烈的声音。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("已使用#t4036100:#改变树木生长的方向，很快地藤条竖琴也会重回原本的样貌吧！"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
