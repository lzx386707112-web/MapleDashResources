var ExpeditionType = Java.type("org.gms.server.expeditions.ExpeditionType");
var countKey = "BOSS_COUNT_8840000_211070100";
var confirming = false;

function start() {
    var mapId = cm.getPlayer().getMapId();
    if (mapId == 211070100) {
        confirming = true;
        cm.sendYesNo("要离开班·雷昂远征吗？");
    } else if (mapId == 211070000) {
        confirming = true;
        cm.sendYesNo("要开启班·雷昂远征吗？进场后班·雷昂会自动出现。\r\n每次消耗 1 个 #v4001254##z4001254#，每天最多 3 次。再次进入正在进行的远征不消耗门票和次数。");
    } else {
        cm.sendOk("请在狮子王之城接见室门口开启远征。");
        cm.dispose();
    }
}

function action(mode, type, selection) {
    if (!confirming || mode != 1) {
        confirming = false;
        cm.dispose();
        return;
    }
    confirming = false;
    var player = cm.getPlayer();
    if (player.getMapId() == 211070100) {
        cm.warp(211070000, 0);
        cm.dispose();
        return;
    }
    if (player.getMapId() != 211070000) {
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("VanLeonBattle");
    if (em == null) {
        cm.sendOk("班·雷昂远征暂时无法开启，请稍后重试。");
        cm.dispose();
        return;
    }
    var expedition = cm.getExpedition(ExpeditionType.VONLEON);
    if (expedition != null && expedition.isInProgress()) {
        var instance = em.getInstance("VanLeonBattle" + player.getClient().getChannel());
        if (expedition.contains(player) && instance != null && instance.getIntProperty("canJoin") == 1) {
            instance.registerPlayer(player);
        } else {
            cm.sendOk("班·雷昂远征正在进行中，请稍后再试。");
        }
        cm.dispose();
        return;
    }
    var used = parseInt(cm.getAccountExtendValue(countKey, true)) || 0;
    if (used >= 3) {
        cm.sendOk("今天的班·雷昂远征次数已经用完。");
        cm.dispose();
        return;
    }
    if (!cm.haveItem(4001254, 1)) {
        cm.sendOk("开启远征需要 1 个 #v4001254##z4001254#。");
        cm.dispose();
        return;
    }
    if (expedition == null) {
        if (cm.createExpedition(ExpeditionType.VONLEON) != 0) {
            cm.sendOk("创建班·雷昂远征失败，请稍后重试。");
            cm.dispose();
            return;
        }
        expedition = cm.getExpedition(ExpeditionType.VONLEON);
    }
    if (expedition.isLeader(player)) {
        em.setProperty("leader", player.getName());
        em.setProperty("channel", player.getClient().getChannel());
        if (em.startInstance(expedition)) {
            cm.gainItem(4001254, -1);
            cm.saveOrUpdateAccountExtendValue(countKey, "" + (used + 1), true);
        } else {
            cm.sendOk("班·雷昂远征正在进行中，请稍后再试。");
        }
    } else if (expedition.contains(player)) {
        cm.sendOk("请等待队长开启班·雷昂远征。");
    } else {
        cm.sendOk(expedition.addMember(player));
    }
    cm.dispose();
}
