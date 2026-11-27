var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) { cm.dispose(); return; }
    status++;
    if (status == 0) {
        if (cm.getMapId() == 450012200) {
            cm.dispose();
            cm.openNpc(9900001, "顿凯尔远征");
            return;
        }
        cm.sendOk("尽头之处就在前方。");
        cm.dispose();
    }
}
