function enter(pi) {
    var targetMap = pi.getPlayer().getSavedLocation("BOSSPQ");
    pi.getPlayer().clearSavedLocation("BOSSPQ");
    if (targetMap < 0 || targetMap == 999999999 || targetMap == 450012200) {
        targetMap = 100000000;
    }
    pi.playPortalSound();
    pi.warp(targetMap, 0);
    return true;
}
