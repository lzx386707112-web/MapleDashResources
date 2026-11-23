/*
    Mark of the Squad - Horntail expedition starter.
*/

const ExpeditionType = Java.type('org.gms.server.expeditions.ExpeditionType');
var exped = ExpeditionType.HORNTAIL;

function start() {
    var player = cm.getPlayer();
    var em = cm.getEventManager("HorntailBattle");
    if (em == null) {
        cm.sendOk("黑龙远征暂时无法开启，请稍后重试。");
        cm.dispose();
        return;
    }
    var expedition = cm.getExpedition(exped);
    if (expedition == null) {
        var result = cm.createExpedition(exped);
        if (result != 0) {
            cm.sendOk(result > 0 ? "今天的黑龙远征次数已经用完。" : "创建黑龙远征失败，请稍后重试。");
            cm.dispose();
            return;
        }
        expedition = cm.getExpedition(exped);
    }
    if (expedition.isInProgress()) {
        var instance = em.getInstance("Horntail" + player.getClient().getChannel());
        if (expedition.contains(player) && instance != null && instance.getIntProperty("canJoin") == 1) {
            instance.registerPlayer(player);
        } else {
            cm.sendOk("黑龙远征正在进行中，请稍后再试。");
        }
    } else if (expedition.isLeader(player)) {
        em.setProperty("leader", player.getName());
        em.setProperty("channel", player.getClient().getChannel());
        if (!em.startInstance(expedition)) {
            cm.sendOk("黑龙远征正在进行中，请稍后再试。");
        }
    } else if (expedition.contains(player)) {
        cm.sendOk("你已加入黑龙远征，请等待队长开启战斗。");
    } else {
        cm.sendOk(expedition.addMember(player));
    }
    cm.dispose();
}
