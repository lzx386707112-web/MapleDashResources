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
        cm.sendOk("太初之海埃斯佩拉的某处出现了不寻常的裂缝。熟悉的气息正从这个裂缝的另一边扩散出来……");
        cm.dispose();
    }
}
