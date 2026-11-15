// Original 282 Goddess EXP Potion. Stored EXP is claimed once; never hunting EXP.
function start() {
    im.sendYesNo("要使用女神的经验值药水，领取神秘石累计的经验吗？");
}
function action(mode, type, selection) {
    if (mode == 1) im.claimHuntingExperience(2435750);
    im.dispose();
}
