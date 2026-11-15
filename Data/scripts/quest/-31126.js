// -31126 (TMS 34410) - [星光之塔] 发现巨星的原石 <2>
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("可爱笑容下藏有爽朗性格的反差魅力！萨菲一定有成为明日之星的特质！将大发娱乐公司的名片交给打工生#r萨菲#k吧！"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("结束萨菲的招募之后搭乘电梯前往3楼。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
