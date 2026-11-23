const ExpeditionType = Java.type('org.gms.server.expeditions.ExpeditionType');
var exped = ExpeditionType.CYGNUS;

function start() {
    var player = cm.getPlayer();
    if (player.getMapId() == 271040100) {
        cm.sendYesNo("要离开希纳斯殿堂吗？");
        return;
    }
    var em = cm.getEventManager("CygnusBattle");
    if (em == null) {
        cm.sendOk("希纳斯远征暂时无法开启，请稍后重试。");
        cm.dispose();
        return;
    }
    var expedition = cm.getExpedition(exped);
    if (expedition == null) {
        var result = cm.createExpedition(exped);
        if (result != 0) {
            cm.sendOk(result > 0 ? "今天的希纳斯远征次数已经用完。" : "创建希纳斯远征失败，请稍后重试。");
            cm.dispose();
            return;
        }
        expedition = cm.getExpedition(exped);
    }
    if (expedition.isInProgress()) {
        var instance = em.getInstance("CygnusBattle" + player.getClient().getChannel());
        if (expedition.contains(player) && instance != null && instance.getIntProperty("canJoin") == 1) {
            instance.registerPlayer(player);
        } else {
            cm.sendOk("希纳斯远征正在进行中，请稍后再试。");
        }
    } else if (expedition.isLeader(player)) {
        em.setProperty("leader", player.getName());
        em.setProperty("channel", player.getClient().getChannel());
        if (!em.startInstance(expedition)) {
            cm.sendOk("希纳斯远征正在进行中，请稍后再试。");
        }
    } else if (expedition.contains(player)) {
        cm.sendOk("你已加入希纳斯远征，请等待队长开启战斗。");
    } else {
        cm.sendOk(expedition.addMember(player));
    }
    cm.dispose();
}

function action(mode, type, selection) {
    if (mode == 1 && cm.getPlayer().getMapId() == 271040100) {
        cm.warp(271040000, 0);
    }
    cm.dispose();
}
