// 401060100 = 困难梅格耐斯（客户端 onFirstUserEnter = magnus_summon）。
//
// 依据：
//   FieldConstants.java:74   401060100 // Hard Magnus
//   Magnus.java              HARD -> spawnMob(8880000, 1900, -1347, false)，延迟 2000 ms
//
// 边界：本宿主没有「延迟 2 秒再刷」的定时器 API，改为进图即刷；坐标沿用原端 (1900,-1347)。
function start(ms) {
    ms.spawnMonster(8880000, 1900, -1347);
}
