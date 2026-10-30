# MapleDash 独立资源包

Data/ 是字节不变的原客户端资源，位于 Unity 项目之外。
resource-manifest.json 是与 APK 对应的文件清单与 SHA-256。
MapleDashResources.zip 是可传输资源包（包含清单与 Data/）。

在 MapleDash 项目目录执行：
  rtk proxy python3 tools/build_resource_pack.py
  rtk proxy python3 tools/sync_android_data.py --zip

将 ZIP 传到手机应用目录 files/Wz/ 后启动新版 APK，在资源安装界面点击安装。
默认目录：/sdcard/mapstory/
安装完成后可删除 ZIP；游戏从解压后的 Data/ 读取，不直接读取 ZIP。
更新需有 ZIP、新 Data、旧 Data 共存的磁盘空间。资源包与 APK 的索引必须匹配。


当前 Android 资源目录统一为 `/sdcard/mapstory`：可放 `MapleDashResources.zip`，也可放已展开的 `Data/`。游戏启动自动显示进度条；首次自动解压并逐文件校验，已安装资源启动时校验后进入游戏，无需点击安装按钮。Android 11 及以上首次需要在系统设置允许“所有文件访问”，Android 10 及以下申请存储权限。资源缺失、损坏或权限未授予时停留加载页并提示，不进入游戏。ZIP 保留，成功后可自行删除。此共享目录方案用于当前测试，应用商店发布时需调整为符合渠道要求的资源目录/分发方式。
