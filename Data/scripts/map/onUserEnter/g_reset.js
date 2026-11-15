// 401060400 的 onUserEnter = g_reset（原端用于重置入口大厅状态）。
//
// 本宿主每次进图都会重建 field 与刷怪登记，原端需要重置的「Boss 已生成」标记天然成立，
// 因此这里不重复写状态；保留脚本只为让客户端 onUserEnter 引用有落点，不静默报错。
function start(ms) {
}
