// 入口大厅 401060400 的出门：回到万神殿神庙 400000001。
// 原端 401000000（万神殿城镇）尚未导入，这里退到已导入的神庙图，属于项目连接边界。
function enter(pi) {
    if (pi.getMapId() != 401060400) return false;
    pi.playPortalSound();
    pi.warp(400000001, 0);
    return true;
}
