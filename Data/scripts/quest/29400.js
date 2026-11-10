/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/*	
	Author : 		kevintjuh93
	Description: 		Quest - Veteran Hunter
	Quest ID : 		29400

	本项目覆盖：源端 end() 是「Not coded yet.」空桩（mode==1 时什么都不做，
	对话框直接消失、任务停在 status=1），表现就是「勤奋的冒险家交不了」。
	这里按源端意图补完交付：先校验装备栏空位，再发勋章 1142004，最后完成任务。
	顺序不能反 —— forceCompleteQuest 在发奖之前会把任务置成已完成，
	背包满时勋章就再也领不到了（QuestLogic.Complete 的奖励不会回滚）。
*/

var status = -1;
var MEDAL = 1142004;

function start(mode, type, selection) {
    status++;
	if (mode != 1) {
			qm.sendNext("准备好了记得回来找我.");
		
		    qm.dispose();
		    return;
	}
		if (status == 0)
			qm.sendAcceptDecline("#v1142004# #e#b#z1142004##k\r\n\r - 限时 30 天\r - 击杀 100,000 只怪物\r #n *只有和你等级相同或者更高的怪物才算.\r\n你想要挑战获取这个勋章吗?");
		else if (status == 1) {
			qm.sendNext("当前排名\r\n1. #bMoople#k : #r538,673#k monsters\r\n2. #bZeroQuanta#k : #r111,421#k monsters\r\n不要忘记了每个月都会重置记录.");//TODO
	        } else if (status == 2) {
			qm.sendNextPrev("我将在接下来30天记录你的打怪数量.当你完成了挑战,记得回来找我. 记住, 你必须在规定时间以内找我才可以. 当然,在进行这项挑战时期是不可以挑战其他勋章的.");
		} else if (status == 3) {
			qm.forceStartQuest();
			qm.dispose();
		}
}


function end(mode, type, selection) {
	// 玩家点「取消 / ESC」：只关对话，不改任务状态
	if (mode != 1) {
		qm.dispose();
		return;
	}
	// 没接过或已完成：不要重复发勋章
	if (qm.getQuestStatus(29400) != 1) {
		qm.dispose();
		return;
	}
	// 勋章进装备栏：先占位校验，失败就原地提示，任务保持「进行中」可以再来
	if (!qm.canHold(MEDAL, 1)) {
		qm.sendOk("你的装备栏没有空位。#b请先清出一个格子#k，再来领取勋章。");
		qm.dispose();
		return;
	}
	qm.gainItem(MEDAL, 1);
	qm.forceCompleteQuest(29400);
	qm.sendOk("恭喜你完成了挑战，收下这枚 #v" + MEDAL + "# #b#t" + MEDAL + "##k。");
	qm.dispose();
}
