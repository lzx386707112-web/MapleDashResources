var eventTime = 30;
var Point = Java.type("java.awt.Point");
var exitMap = 450009301;
function init() { em.setProperty("party", "\r\n等级要求：245级以上\r\n时间限制：30分钟\r\n死亡次数：10次"); }
function getMaxLobbies() { return 1; }
function setup(channel) {
    var eim = em.newInstance("GloomBattle" + channel);
    eim.setProperty("canJoin", 1);
    eim.setProperty("difficulty", em.getProperty("difficulty"));
    var mapid = eim.getIntProperty("difficulty") == 1 ? 450009450 : 450009400;
    var map = eim.getMapInstance(mapid);
    map.resetPQ();
    var mob = em.getMonster(mapid == 450009450 ? 8644655 : 8644650);
    mob.setPosition(new Point(-45, -157));
    eim.registerMonster(mob);
    map.spawnMonster(mob);
    return eim;
}
function afterSetup(eim) { eim.startEventTimer(eventTime * 60000); }
function playerEntry(eim, player) {
    player.changeMap(eim.getIntProperty("difficulty") == 1 ? 450009450 : 450009400, 0);
}
function changedMap(eim, player, mapid) {
    if (mapid != 450009400 && mapid != 450009450 && mapid != 450009500) {
        eim.unregisterPlayer(player);
        eim.disposeIfPlayerBelow(1, exitMap);
    }
}
function playerDead(eim, player) { eim.setProperty("deaths_" + player.getId(), eim.getIntProperty("deaths_" + player.getId()) + 1); }
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
function allMonstersDead(eim) { eim.setProperty("canJoin", 0); eim.stopEventTimer(); eim.setEventCleared(); eim.showClearEffect(); }
function monsterKilled(mob, eim) {}
function killed(eim, player, mobid) {}
function changedLeader(eim, leader) {}
function leftParty(eim, player) {}
function disbandParty(eim) { end(eim); }
