var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) { cm.dispose(); return; }
    status++;

    if (status == 0) {
        if (cm.getMapId() == 450007240) {
            cm.dispose();
            cm.openNpc(3003558, "威尔远征");
            return;
        }
        cm.sendOk("镜之世界就在前方。");
        cm.dispose();
    }
}
