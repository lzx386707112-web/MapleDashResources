var status = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    }
    status++;

    if (status == 0) {
        cm.dispose();
        cm.openNpc(3003560, "威尔远征");
    }
}
