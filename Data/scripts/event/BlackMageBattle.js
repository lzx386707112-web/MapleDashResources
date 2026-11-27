var eventTime = 30;
var exitMap = 450012500;
function init() { em.setProperty("party", "\r\n等级要求：255级以上\r\n时间限制：30分钟\r\n死亡次数：10次"); }
function getMaxLobbies() { return 1; }
function setup(channel) {
    var eim = em.newInstance("BlackMageBattle" + channel);
    eim.setProperty("canJoin", 1);
    eim.setProperty("difficulty", em.getProperty("difficulty"));
    return eim;
}
function afterSetup(eim) { eim.startEventTimer(eventTime * 60000); }
function playerEntry(eim, player) {
    player.changeMap(450013100, 0);
}
function changedMap(eim, player, mapid) {
    if (mapid == 450013750) { eim.setProperty("canJoin", 0); eim.stopEventTimer(); eim.setEventCleared(); }
    if (mapid < 450013000 || mapid > 450013780) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(1, exitMap);
    }
}
function playerDead(eim, player) { eim.setProperty("deaths_" + player.getId(), eim.getIntProperty("deaths_" + player.getId()) + 1); }
function curseLifeLost(eim, player) { playerDead(eim, player); return playerRevive(eim, player); }
function playerRevive(eim, player) {
    if (eim.getIntProperty("deaths_" + player.getId()) >= 10) { playerExit(eim, player); return false; }
    return true;
}
function playerExit(eim, player) { eim.unregisterPlayer(player); player.changeMap(exitMap, 0); eim.disposeIfPlayerBelow(1, exitMap); }
function playerDisconnected(eim, player) { playerExit(eim, player); }
function scheduledTimeout(eim) { end(eim); }
function end(eim) {
    var players = eim.getPlayers();
    for (var i = players.size() - 1; i >= 0; i--) playerExit(eim, players.get(i));
    eim.dispose();
}
function dispose(eim) {}
function monsterValue(eim, mobId) { return 1; }
function allMonstersDead(eim) {}
function monsterKilled(mob, eim) {}
function killed(eim, player, mobid) {}
function changedLeader(eim, leader) {}
function leftParty(eim, player) {}
function disbandParty(eim) { end(eim); }
