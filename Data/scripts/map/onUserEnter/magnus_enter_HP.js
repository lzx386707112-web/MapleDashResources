// 401060100/200/300 的 onUserEnter = magnus_enter_HP（原端用于进场时的血量/UI 处理）。
//
// 本宿主没有 Boss 血条或进场演出的脚本 API（NpcApi 里没有 showBossHP/setBossHP 一类绑定），
// 因此这里只保留入口，明确不做假实现：血条由怪物自身 maxHP 驱动，客户端按原端逻辑显示。
function start(ms) {
}
