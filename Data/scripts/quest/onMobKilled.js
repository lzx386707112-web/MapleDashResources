// User-confirmed missing 282 rule: a real kill during quest 1463, any difficulty.
// IDs: TMS282.5 world/boss/Magnus.java EASY/NORMAL/HARD spawn definitions.
function onMobKilled(mobId) {
    if (mobId !== 8880010 && mobId !== 8880002 && mobId !== 8880000) return 0;
    if (!qm.isQuestStarted(1463)) return 0;
    if (qm.getQuestProgressInt(1463, "info0") >= 1) return 0;
    qm.setQuestProgress(1463, "info0", "1");
    return 1463;
}
