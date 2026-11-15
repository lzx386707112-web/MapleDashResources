// -31129 (TMS 34407) - [星光之塔] 发现巨星的原石 <1>
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("虽然说技巧不够纯熟，但有一种吸引目光的魅力！露比一定有成为明星的资质！快将大发娱乐公司的名片递交给#r露比#k吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("露比完成征选面试之后搭乘电梯前往2楼。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
