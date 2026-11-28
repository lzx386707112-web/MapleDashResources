function start(ms) {
    var player = ms.getPlayer();
    if (player == null) {
        return;
    }
    player.dropMessage(5, "点击地图右侧的祭坛（或走到祭坛前按 ↑ / 手机向上推摇杆）打开觉醒希拉远征菜单。");
}
