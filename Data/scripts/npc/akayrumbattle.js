const ExpeditionType = Java.type('org.gms.server.expeditions.ExpeditionType');
var exped = ExpeditionType.AKAYRUM;

const GameConfig = Java.type('org.gms.config.GameConfig');

function start() {
    var player = cm.getPlayer();
    if (player.getLevel() < 140 || player.getLevel() > GameConfig.getServerInt("mxj_max_level")) {
        cm.sendOk("你不符合挑战阿卡伊勒的等级要求。");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("AKAYRUMBattle");
    if (em == null) {
        cm.sendOk("阿卡伊勒远征暂时无法开启，请稍后重试。");
        cm.dispose();
        return;
    }
    var expedition = cm.getExpedition(exped);
    if (expedition == null) {
        var result = cm.createExpedition(exped);
        if (result != 0) {
            cm.sendOk(result > 0 ? "今天的阿卡伊勒远征次数已经用完。" : "创建阿卡伊勒远征失败，请稍后重试。");
            cm.dispose();
            return;
        }
        expedition = cm.getExpedition(exped);
    }
    if (expedition.isInProgress()) {
        var instance = em.getInstance("AKAYRUM" + player.getClient().getChannel());
        if (expedition.contains(player) && instance != null && instance.getIntProperty("canJoin") == 1) {
            instance.registerPlayer(player);
        } else {
            cm.sendOk("阿卡伊勒远征正在进行中，请稍后再试。");
        }
    } else if (expedition.isLeader(player)) {
        em.setProperty("leader", player.getName());
        em.setProperty("channel", player.getClient().getChannel());
        if (!em.startInstance(expedition)) {
            cm.sendOk("阿卡伊勒远征正在进行中，请稍后再试。");
        }
    } else if (expedition.contains(player)) {
        cm.sendOk("你已加入阿卡伊勒远征，请等待队长开启战斗。");
    } else {
        cm.sendOk(expedition.addMember(player));
    }
    cm.dispose();
}
