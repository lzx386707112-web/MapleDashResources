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
        cm.sendAcceptDecline("要离开镜之世界吗？");
    } else if (status == 1) {
        cm.playPortalSound();
        cm.warp(450007240, 0);
        cm.dispose();
    }
}
