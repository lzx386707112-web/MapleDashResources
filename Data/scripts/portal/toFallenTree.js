// 282 map 105010100 portal/toFallenTree; camp return targets this portal.
// Missing 282 script: public v232 reference warps to 105300000 portal 0.
// Restores the regional route only; no advancement success or stone reward.
function enter(pi) {
    if (pi.getMapId() != 105010100) return false;
    pi.warp(105300000, 0);
    return true;
}
