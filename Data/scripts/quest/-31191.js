// -31191 (TMS 34345) - [阿尔卡娜] 下定决心
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("来写一封信，向联盟传达在阿尔卡娜获得的关于奥术之河的情报吧。将写好的信折成纸船，然后放在#b森林入口#k上漂走应该就行了。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("纸船逆流而上，沿著阿尔卡娜的河水漂向了远方。…这艘纸船真的能到达联盟吗？如果能到达那就太好了…"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
