function start(ms) {
    var player = ms.getPlayer();
    if (player == null) {
        return;
    }
    player.dropMessage(5, "走到洞口处，按 ↑（手机向上推摇杆）打开至暗魔晶远征菜单。");
}
