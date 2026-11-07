# MapleDash 独立资源包

Data/ 是字节不变的原客户端资源，位于 Unity 项目之外。
resource-manifest.json 是与 APK 对应的文件清单与 SHA-256。
MapleDashResources.zip 是可传输资源包（包含清单与 Data/）。
Data 已接近 10 GiB，打包默认按 **2 GiB 一个包**切成互相独立的
MapleDashResources.part01.zip / part02.zip …；每个分包都是完整 ZIP，
根目录带 resource-pack.json 标明包号/包数，只有 part01 带 resource-manifest.json。

在 MapleDash 项目目录执行：
  rtk proxy python3 tools/build_resource_pack.py        # 默认 2G 分包，--part-size 0 打整包
  rtk proxy python3 tools/check_resource_pack.py        # 结构/分包连续性/体积上限自检
  rtk proxy python3 tools/sync_android_data.py --zip    # 全部传到 /sdcard/mapstory

把 ZIP（或全部分包）传到手机 /sdcard/mapstory/ 后启动新版 APK，加载页会自动逐包解压。
默认目录：/sdcard/mapstory/
分包必须传齐：缺包、包号重复或包数对不上时，手机端在**开始解压前**就报错，不会装出半残的 Data。
安装完成后自动删除所有分包；游戏从解压后的 Data/ 读取，不直接读取 ZIP。
更新需有 ZIP、新 Data、旧 Data 共存的磁盘空间。资源包与 APK 的索引必须匹配。


当前 Android 资源目录统一为 `/sdcard/mapstory`：可放 `MapleDashResources.zip`，也可放全部分包 `MapleDashResources.part01.zip…`，或已展开的 `Data/`。游戏启动自动显示进度条；首次自动逐包解压，已安装资源启动时直接进入游戏，无需点击安装按钮。Android 11 及以上首次需要在系统设置允许“所有文件访问”，Android 10 及以下申请存储权限。资源缺失、分包不齐、损坏或权限未授予时停留加载页并提示，不进入游戏。解压成功后自动删除所有分包。此共享目录方案用于当前测试，应用商店发布时需调整为符合渠道要求的资源目录/分发方式。
