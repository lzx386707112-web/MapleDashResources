// World Tree branch: original 282 map IDs, user-confirmed access rule.
// Other regional goddess branches remain outside this restored route.
function enter() {
    if (!pi.isQuestStarted(1461) && !pi.isQuestCompleted(1461)) return false;
    var map = pi.getMapId();
    if (map == 105300000) { pi.warp(450000120, 0); return true; }
    if (map == 450000020) { pi.warp(105300000, 0); return true; }
    // 格兰蒂斯分支：万神殿神庙 400000001 -> 女神间 450000010。
    // 证据：450000010 的 pt_horizon 直连 tm=400000001/tn=pt_horizon，反向由这扇脚本门补齐。
    if (map == 400000001) { pi.warp(450000010, 0); return true; }
    return false;
}
