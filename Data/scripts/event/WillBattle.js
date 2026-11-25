var minPlayers = 1, maxPlayers = 30;
var minLevel = 235, maxLevel = 275;

var entryMap = 450008700;
var exitMap = 450007240;
var minMapId = 450008000, maxMapId = 450008980;
var eventTime = 30;

const WillBattle = Java.type('org.gms.server.life.WillBattle282');

function init() {
    setEventRequirements();
}

function getMaxLobbies() {
    return 1;
}

function setEventRequirements() {
    var reqStr = "";
    reqStr += "\r\n   组队人数: " + minPlayers + " ~ " + maxPlayers;
    reqStr += "\r\n   等级要求: " + minLevel + " ~ " + maxLevel;
    reqStr += "\r\n   时间限制: " + eventTime + " 分钟";
    reqStr += "\r\n   难度: 简单 / 普通 / 困难（队长在开始前选）";
    em.setProperty("party", reqStr);
}

function setup(channel) {
    var eim = em.newInstance("WillBattle" + channel);
    eim.setProperty("canJoin", 1);
    var difficulty = em.getProperty("difficulty");
    if (difficulty == null) difficulty = "1";
    eim.setProperty("difficulty", difficulty);
    return eim;
}

function afterSetup(eim) {
    eim.startEventTimer(eventTime * 60000);
}

function playerEntry(eim, player) {
    var difficulty = eim.getIntProperty("difficulty");
    if (difficulty < 0 || difficulty > 2) difficulty = 1;
    WillBattle.begin(difficulty);
    eim.dropMessage(5, "[远征队] 难度：" + modeName(difficulty) + "，进入镜之世界。");
}

function changedMap(eim, player, mapid) {
    if (mapid < minMapId || mapid > maxMapId) {
        eim.unregisterPlayer(player);
        eim.dropMessage(5, "[远征队] 你离开了威尔的战斗场地。");
    }
}

function playerDead(eim, player) {}
function playerRevive(eim, player) {}
function changedLeader(eim, leader) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function allMonstersDead(eim) {}
function killed(eim, player, mobid) {}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8880300: case 8880301: case 8880302: case 8880303: case 8880304:
        case 8880340: case 8880341: case 8880342: case 8880343: case 8880344:
        case 8880360: case 8880361: case 8880362: case 8880363: case 8880364:
            return 1;
        default:
            return 0;
    }
}

function monsterKilled(mob, eim) {}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    player.changeMap(exitMap, 0);
}

function playerDisconnected(eim, player) {
    playerExit(eim, player);
}

function scheduledTimeout(eim) {
    end(eim);
}

function end(eim) {
    WillBattle.stop();
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) {
        playerExit(eim, players.get(i));
    }
    eim.dispose();
}

function dispose(eim) {
    WillBattle.stop();
}

function modeName(difficulty) {
    if (difficulty === 0) return "简单";
    if (difficulty === 2) return "困难";
    return "普通";
}
