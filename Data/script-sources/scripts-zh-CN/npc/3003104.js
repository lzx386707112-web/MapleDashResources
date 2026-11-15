// NPC 3003104 - 萝娜：消逝的旅途与反转城市每日任务
var status = -1;
var selectedQuestId = 0;

var dailyQuests = {
    0: [-31406, "击退200只喜悦艾尔达斯"],
    1: [-31405, "击退200只愤怒艾尔达斯"],
    2: [-31404, "击退200只悲伤的艾尔达斯"],
    3: [-31403, "击退200只欢乐艾尔达斯"],
    4: [-31402, "击退200只岩石艾尔达斯"],
    5: [-31401, "击退200只火焰艾尔达斯"],
    6: [-31400, "击退200只强悍的灵魂艾尔达斯"],
    7: [-31399, "击退200只安息艾尔达斯"],
    10: [-31397, "收集50个喜悦艾尔达斯样本"],
    11: [-31396, "收集50个愤怒艾尔达斯样本"],
    12: [-31395, "收集50个悲伤的艾尔达斯样本"],
    13: [-31394, "收集50个欢乐艾尔达斯样本"],
    14: [-31393, "收集50个岩石艾尔达斯样本"],
    15: [-31392, "收集50个火焰艾尔达斯样本"],
    16: [-31391, "收集50个强悍的灵魂艾尔达斯样本"],
    17: [-31390, "收集50个安息艾尔达斯样本"],
    20: [-31388, "找出30个忘却抑制剂"],
    21: [-31387, "找出30个消失抑制剂"],
    22: [-31386, "找出30个安息抑制剂"],
    30: [-26481, "击退特拉200只"],
    31: [-26480, "击退蒙托200只"],
    32: [-26479, "击退搜索型T无人机A型200只"],
    33: [-26478, "击退搜索型T无人机B型200只"],
    34: [-26477, "击退战斗型T无人机A型200只"],
    35: [-26476, "击退战斗型T无人机B型200只"],
    36: [-26475, "击退歼灭型T无人机A型200只"],
    37: [-26474, "击退歼灭型T无人机B型200只"],
    38: [-26473, "收集T-boy的零件50个"]
};

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
        if (cm.getQuestStatus(-31408) == 0 && cm.getQuestStatus(-31416) == 2) {
            cm.sendYesNo("我是为了调查消逝的旅途而来的时间神官。#ho#，你能帮助我们破解这个空间的谜题吗？");
            status = 100;
            return;
        }
        if (cm.getQuestStatus(-31408) == 1) {
            cm.sendOk("谢谢你。整理好每日调查内容后，我会再告诉你。");
            status = 299;
            return;
        }
        if (cm.getQuestStatus(-31408) == 2 && cm.getQuestStatus(-31407) == 0) {
            cm.sendNext("我要告诉你有关每日调查任务的内容。");
            status = 200;
            return;
        }
        if (cm.getQuestStatus(-31416) != 2) {
            cm.sendOk("完成消逝的旅途调查之旅后再来找我吧。");
            cm.dispose();
            return;
        }
        if (cm.getQuestStatus(-31407) != 2) {
            cm.sendOk("请先完成每日任务引导。");
            cm.dispose();
            return;
        }

        for (var key in dailyQuests) {
            var activeQuestId = dailyQuests[key][0];
            if (cm.getQuestStatus(activeQuestId) == 1) {
                cm.completeQuest(activeQuestId);
                if (cm.getQuestStatus(activeQuestId) == 2) {
                    cm.sendOk("辛苦了！任务已完成。\r\n\r\n#i1712001:# #t1712001:# 已经发放给你了。");
                } else {
                    cm.sendOk("尚未达成任务条件，完成后再来找我吧。");
                }
                cm.dispose();
                return;
            }
        }

        var menu = "#b#e每日调查任务#n#k\r\n\r\n";
        for (var option in dailyQuests) {
            if (cm.getQuestStatus(dailyQuests[option][0]) == 0) {
                menu += "#L" + option + "#" + dailyQuests[option][1] + "#l\r\n";
            }
        }
        cm.sendSimple(menu);
        return;
    }

    if (status == 300) {
        cm.completeQuest(-31408);
        cm.dispose();
        return;
    }
    if (status == 101) {
        cm.startQuest(-31408);
        cm.sendOk("谢谢你。往后请协助我们完成每日调查。");
        cm.dispose();
        return;
    }
    if (status == 201) {
        cm.sendNextPrev("每天可从我这里接受调查任务，完成后会获得#i1712001:# #t1712001:#。");
        return;
    }
    if (status == 202) {
        cm.startQuest(-31407);
        cm.completeQuest(-31407);
        cm.sendOk("引导到此为止，重新和我对话即可选择任务。");
        cm.dispose();
        return;
    }

    if (status == 1) {
        var selected = dailyQuests[selection];
        if (selected == null) {
            cm.dispose();
            return;
        }
        promptDailyQuest(selected[0], selected[1]);
        return;
    }
    if (status == 2 && selectedQuestId != 0) {
        cm.startQuest(selectedQuestId);
        cm.sendOk("任务已接受！完成后再来找我吧。");
        cm.dispose();
        return;
    }
    cm.dispose();
}

function promptDailyQuest(questId, description) {
    selectedQuestId = questId;
    cm.sendYesNo(description + "。\r\n\r\n#b接受任务？#k");
}
