/*
    狮子王之城接见室 - 任务见面室的狮子王 NPC（2161000）。
    远征实例里 Boss 已由 VanLeonBattle.setup 生成，此时不再摆 NPC。
*/
function start(ms) {
    var map = ms.getMap();
    if (map.getMonsterById(8840000) != null) return;
    if (map.getMonsterById(8840007) != null) return;
    if (map.getMonsterById(8840014) != null) return;
    ms.spawnNpc(2161000, 6, -181);
}
