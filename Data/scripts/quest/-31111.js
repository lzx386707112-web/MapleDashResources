// -31111 (TMS 34425) - [星光之塔] 华丽出道之后
var status = -1;
function start(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendNext("华丽出道后，就如同大发娱乐的名称一样，声名大噪。出道同时登上音乐节目第一名，出道歌曲不断刷新纪录，让地下１０楼的赫一的办公室一口气升到#r星光之塔空中楼层#k。"); }
    else { qm.forceStartQuest(); qm.dispose(); }
}
function end(mode, type, selection) {
    if (mode <= 0) { qm.dispose(); return; }
    status++;
    if (status == 0) { qm.sendOk("听到了代表所有团员的蒂亚传达的感谢。就这样，#r星光之塔#k赫一的新人女团成功神话传遍大小街巷。"); }
    else { qm.forceCompleteQuest(); qm.dispose(); }
}
