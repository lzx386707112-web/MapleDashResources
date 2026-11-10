/* 
 *  Dallier - King Medal
 *  Lith Habor = 104000000
 *  Sleepywood = 105040300
 *
 *  本项目覆盖：源端 end() 是空函数，且 start() 最后一层直接 dispose、
 *  没有 forceStartQuest —— 表现是「爱心使者」既接不下来也交不了。
 *  这里补上接取与交付（勋章 1142014，Act/1 不含道具，只能由脚本发）。
 */

var status = -1;
var MEDAL = 1142014;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("准备好了回来找我.");
	    qm.dispose();
	    return;
	} else if (status == 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }

    if (status == 0) {
	qm.sendAcceptDecline("#v1142030# #e#b#z1142030##k\n\r\n\r - 限时: 1 小时\n\r - 为这个村子捐赠最多....#n想要试试能不能获得这枚勋章吗?");
    } else if (status == 1) {
	qm.sendNext("当前排名 \n\r\n\r1. #bMintLovePep#k : ???,???,??? 金币\n\r2. #bKelviinXD#k : 68,000,000 金币\n\r3. #bxBabyRence#k : 49,999,999 金币\n\r4. #bXxTrIStaArxx#k : 29,999,999 金币n\n\r5. #bxBabyRence#k : 14,000,000 金币\n\r\n\rUnderstand that we cannot divulge the exact number donated by the current King of Donation. \n\rAlso remember that all records will be reset every first of the month...");
    } else if (status == 2) {
	qm.sendOk("祝你好运。记录会在每月一号重置，完成挑战后记得回来找我。");
	qm.forceStartQuest(29503);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode != 1) {
	qm.dispose();
	return;
    }
    if (qm.getQuestStatus(29503) != 1) {
	qm.dispose();
	return;
    }
    if (!qm.canHold(MEDAL, 1)) {
	qm.sendOk("你的装备栏没有空位。#b请先清出一个格子#k，再来领取勋章。");
	qm.dispose();
	return;
    }
    qm.gainItem(MEDAL, 1);
    qm.forceCompleteQuest(29503);
    qm.sendOk("恭喜你，收下这枚 #v" + MEDAL + "# #b#t" + MEDAL + "##k。");
    qm.dispose();
}

/*function getMedalType(ids) {
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
	extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
	thestring += extra;
    }
    thestring += "#k";
    return thestring;
}*/
