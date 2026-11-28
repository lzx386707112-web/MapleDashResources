function start(ms) {
    var player = ms.getPlayer();
    if (player == null) {
        return;
    }
    player.dropMessage(5, "走到祭坛前，按 ↑（手机向上推摇杆）打开觉醒希拉远征菜单。");
}
