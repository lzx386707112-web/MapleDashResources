// World Tree branch: original 282 map IDs, user-confirmed access rule.
// Other regional goddess branches remain outside this restored route.
function enter() {
    if (!pi.isQuestStarted(1461) && !pi.isQuestCompleted(1461)) return false;
    var map = pi.getMapId();
    if (map == 105300000) { pi.warp(450000120, 0); return true; }
    if (map == 450000020) { pi.warp(105300000, 0); return true; }
    return false;
}
