// 401060400（梅格耐斯入口大厅）的门：按任务 1463 记录的方式进入对应难度。
//
// 原端证据：
//   FieldConstants.java:73-75   401060300 Easy / 401060200 Normal / 401060100 Hard Magnus
//   BossConstants.java:457-459  三档难度入口图都是 401060400
//   客户端 IMG                  401060400 的 portal script = ptBossIn / ptBossOut
//
// 边界：原端「难度选择界面」的脚本不在提供的服务端里（只有 NPC 数据里出现过 ptBossIn 字样），
// 这里按项目补全处理：难度由 quest/1463.js 接取时写入 questProgress(1463,"diff")，
// 0=简单 1=普通 2=困难，缺省普通。这不是 282 原端 UI 的还原。
function enter(pi) {
    if (pi.getMapId() != 401060400) return false;
    var diff = pi.getQuestProgressInt(1463, "diff");
    var target = 401060200;
    if (diff == 0) target = 401060300;
    else if (diff == 2) target = 401060100;
    pi.playPortalSound();
    pi.warp(target, 0);
    return true;
}
