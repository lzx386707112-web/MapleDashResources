// TMS282 original item: activate and accumulate hunting EXP.
// Missing script rules confirmed by user on 2026-11-15: one active stone at a time;
// count settled hunting EXP including bonuses and party shares, no direct awards.
var item = 2435734;
function start() {
    var capacity = im.getItemExperienceCapacity(item);
    var progress = im.getHuntingExperience(item);
    if (capacity <= 0) { im.sendOk("原版神秘石容量数据缺失，无法激活。"); im.dispose(); return; }
    if (progress >= 0) {
        im.sendOk("神秘石累计狩猎经验：" + progress + " / " + capacity + (progress >= capacity ? "。已充满，可激活下一颗神秘石。" : "。继续狩猎即可充能。"));
        im.dispose(); return;
    }
    for (var other = 2435734; other <= 2435736; other++) {
        var current = im.getHuntingExperience(other);
        if (current >= 0 && current < im.getItemExperienceCapacity(other)) {
            im.sendOk("请先将已激活的神秘石充满，再激活下一颗。"); im.dispose(); return;
        }
    }
    im.sendYesNo("激活这颗神秘石？激活后累计狩猎结算经验，容量为" + capacity + "。充满前不能激活其他神秘石。");
}
function action(mode, type, selection) {
    if (mode == 1) {
        im.startHuntingExperience(item, true);
        im.sendOk("神秘石已激活。狩猎获得的经验将开始累计。");
    }
    im.dispose();
}
