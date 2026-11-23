function start(ms) {
    var map = ms.getMap();
    if (map.getMonsterById(9600086) != null) {
        return;
    }
    var LifeFactory = Java.type("org.gms.server.life.LifeFactory");
    var Point = Java.type("java.awt.Point");
    map.spawnMonsterOnGroundBelow(LifeFactory.getMonster(9600086), new Point(-120, 83));
}
