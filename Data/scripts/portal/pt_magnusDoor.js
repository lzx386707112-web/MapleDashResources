// 三张梅格耐斯战斗图里的出口门，回到入口大厅 401060400。
// 客户端 IMG：401060100/401060200/401060300 的 portal script 均为 pt_magnusDoor。
function enter(pi) {
    var map = pi.getMapId();
    if (map != 401060100 && map != 401060200 && map != 401060300) return false;
    pi.playPortalSound();
    pi.warp(401060400, 0);
    return true;
}
