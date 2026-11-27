var minPlayers = 1, maxPlayers = 6;
var minLevel = 250, maxLevel = 275;

var entryMap = 450010500;
var exitMap = 450011990;
var minMapId = 450010500, maxMapId = 450010500;
var eventTime = 20;

const JinHillah = Java.type('org.gms.server.life.HillahBattle282');

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
    var eim = em.newInstance("JinHillahBattle" + channel);
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
    JinHillah.begin(difficulty);
    eim.dropMessage(5, "[远征队] 难度：" + modeName(difficulty) + "，进入欲望祭坛。");
}

function changedMap(eim, player, mapid) {
    if (mapid < minMapId || mapid > maxMapId) {
        eim.unregisterPlayer(player);
        eim.dropMessage(5, "[远征队] 你离开了真‧希拉的战斗场地。");
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
        case 8880405: case 8880410: case 8880420: case 8880425:
        case 8880403: case 8880404: case 8880408: case 8880409:
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
    JinHillah.stop();
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) {
        playerExit(eim, players.get(i));
    }
    eim.dispose();
}

function dispose(eim) {
    JinHillah.stop();
}

function modeName(difficulty) {
    if (difficulty === 1) return "困难";
    return "普通";
}
