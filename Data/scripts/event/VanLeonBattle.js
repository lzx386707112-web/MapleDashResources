function init() {}

function getMaxLobbies() {
    return 1;
}

function setup(channel) {
    var eim = em.newInstance("VanLeonBattle" + channel);
    eim.setProperty("canJoin", 1);
    var map = eim.getInstanceMap(211070100);
    map.resetPQ(1);
    var LifeFactory = Java.type("org.gms.server.life.LifeFactory");
    var Point = Java.type("java.awt.Point");
    map.spawnMonsterOnGroundBelow(LifeFactory.getMonster(8840000), new Point(-300, -192));
    return eim;
}

function afterSetup(eim) {}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(211070100);
    player.changeMap(map, map.getPortal(0));
}

function changedMap(eim, player, mapId) {
    if (mapId != 211070100) {
        eim.unregisterPlayer(player);
        if (eim.getPlayerCount() == 0) {
            eim.dispose();
        }
    }
}

function playerDisconnected(eim, player) {
    changedMap(eim, player, 211070000);
}

function playerDead(eim, player) {}

function playerRevive(eim, player) {
    playerExit(eim, player);
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(211070000, 0);
    if (eim.getPlayerCount() == 0) {
        eim.dispose();
    }
}

function monsterValue(eim, mobId) {
    return 1;
}

function monsterKilled(mob, eim) {
    if (mob.getId() == 8840000) {
        eim.setProperty("canJoin", 0);
        eim.clearPQ();
    }
}

function clearPQ(eim) {
    eim.setEventCleared();
}

function playerUnregistered(eim, player) {}

function dispose(eim) {}
