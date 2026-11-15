// -31084 (TMS 34452) - [阿尔卡娜]花瓣跳舞之际
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("依照小精灵所说的，原本这附近没有光之漩涡。在精灵之树开花的时分。小精灵这样说了。那是光之漩涡，究竟跟变得凶暴的精灵有没有关系呢？"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("精灵之树和精灵们在和谐的森林乐曲中过著幸福的日子。但某一天，从森林乐曲消失时开始破坏了和谐。而与森林乐曲产生共鸣的精灵之树也失去了力气且也产生了光之漩涡。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
