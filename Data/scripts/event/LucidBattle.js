/**
 * 露希妲远征（TMS 282 复刻）
 *
 * 战斗本体全部由原生侧 `org.gms.server.life.LucidBattle282` 驱动
 * （Assets/Scripts/Field/NativeLucidBattle282.cs）：
 *   走廊 450004100 → P1 450004150（lusi 骨架开场 9167ms）
 *   → 过场 450004200（butterfly2 骨架 4000ms）→ P2 450004250 → 奖励 450004300，
 *   蝴蝶累积/爆发、喇叭銅像、彩繪玻璃、BombObject、Fury（困难）、最後的音樂盒
 *   全部按 Etc/BossLucid.img 与服务端 world/boss/Lucid.java 的口径走。
 *
 * 这个脚本只负责远征队实例的生命周期：建实例、放人进来、超时/退出收尾。
 */

var minPlayers = 1, maxPlayers = 30;
const GameConfig = Java.type('org.gms.config.GameConfig');
var minLevel = 220, maxLevel = GameConfig.getServerInt("mxj_max_level");

var entryMap = 450004100;   // 简单难度的进场走廊；实际落地图由 native 按难度决定
var exitMap = 450004000;    // 露希妲入口（NPC 3003208 所在图）
var minMapId = 450004100, maxMapId = 450004900;
var eventTime = 30;         // 分钟

const LucidBattle = Java.type('org.gms.server.life.LucidBattle282');

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
    var eim = em.newInstance("LucidBattle" + channel);
    eim.setProperty("canJoin", 1);
    // 难度由 NPC 3003208（scripts/BeiDouSpecial/露希妲远征.js）在 startInstance 之前
    // 写进事件管理器属性；没写就按普通（1）。
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
    LucidBattle.begin(difficulty);
    eim.dropMessage(5, "[远征队] 难度：" + modeName(difficulty) + "，进入梦境。");
}

function changedMap(eim, player, mapid) {
    if (mapid < minMapId || mapid > maxMapId) {
        eim.unregisterPlayer(player);
        eim.dropMessage(5, "[远征队] 你离开了露希妲的战斗场地。");
    }
}

function playerDead(eim, player) {}
function playerRevive(eim, player) {
    return true;
}
function changedLeader(eim, leader) {}
function leftParty(eim, player) {}
function disbandParty(eim) {}
function allMonstersDead(eim) {}
function killed(eim, player, mobid) {}

// 只有露希妲本体与惡夢花算分，其余小怪不给积分。
function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8880140: case 8880141: case 8880142:
        case 8880150: case 8880151: case 8880155:
        case 8880152: case 8880153: case 8880154:
        case 8880166: case 8880158:
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
    LucidBattle.stop();
    var players = eim.getPlayers();
    for (var i = 0; i < players.size(); i++) {
        playerExit(eim, players.get(i));
    }
    eim.dispose();
}

function dispose(eim) {
    LucidBattle.stop();
}

function modeName(difficulty) {
    if (difficulty === 0) return "简单";
    if (difficulty === 2) return "困难";
    return "普通";
}
