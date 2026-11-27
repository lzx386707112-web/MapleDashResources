var minPlayers = 1, maxPlayers = 30;
var minLevel = 255, maxLevel = 275;

var entryMap = 450012210;
var exitMap = 450012200;
var minMapId = 450012200, maxMapId = 450012650;
var eventTime = 30;

const DunkelBattle = Java.type('org.gms.server.life.DunkelBattle282');

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
    reqStr += "\r\n   难度: 普通 / 困难（队长在开始前选）";
    em.setProperty("party", reqStr);
}

function setup(channel) {
    var eim = em.newInstance("DunkelBattle" + channel);
    eim.setProperty("canJoin", 1);
    var difficulty = em.getProperty("difficulty");
    if (difficulty == null) difficulty = "0";
    eim.setProperty("difficulty", difficulty);
    return eim;
}

function afterSetup(eim) {
    eim.startEventTimer(eventTime * 60000);
}

function playerEntry(eim, player) {
    var difficulty = eim.getIntProperty("difficulty");
    if (difficulty < 0 || difficulty > 1) difficulty = 0;
    DunkelBattle.begin(difficulty);
    eim.dropMessage(5, "[远征队] 难度：" + modeName(difficulty) + "，进入靠近尽头之处。");
}

function changedMap(eim, player, mapid) {
    if (mapid < minMapId || mapid > maxMapId) {
        eim.unregisterPlayer(player);
        eim.dropMessage(5, "[远征队] 你离开了顿凯尔的战斗场地。");
    }
}

function playerDead(eim, player) {}
function playerRevive(eim, player) {}
function changedLeader(eim, leader) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function allMonstersDead(eim) {}
function killed(eim, player, mobid) {}
function monsterKilled(mob, eim) {}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8645009: case 8645066: case 8645010: case 8645011:
        case 8645003: case 8645069: case 8645067: case 8645070:
            return 1;
        default:
            return 0;
    }
}

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
    DunkelBattle.stop();
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) {
        playerExit(eim, players.get(i));
    }
    eim.dispose();
}

function dispose(eim) {
    DunkelBattle.stop();
}

function modeName(difficulty) {
    if (difficulty === 1) return "困难";
    return "普通";
}
