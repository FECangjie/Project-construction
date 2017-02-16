# hydra client hello world

__包含:__

+ [构建工具 redskull](http://git.lianjia.com/hydra/redskull)
+ [样式 mystique](http://git.lianjia.com/hydra/mystique)

__how to work?__

1. 安装 redkull `curl http://git.lianjia.com/hydra/redskull/raw/master/script/install.sh -L -o - | sh`

2. 通过redskull 安装依赖 `redskull install` 如果找不到redskull命令， 使用 `~/.redskull/bin/index install`

3. 通过redskull 搭建开发环境 `redskull start` 如果找不到redskull命令， 使用 `~/.redskull/bin/index start`

4. 通过redskull 打包代码 `redskull build` 如果找不到redskull命令， 使用 `~/.redskull/bin/index build`


__config__

见 redskull 项目 [readme](http://git.lianjia.com/hydra/redskull/blob/master/README.md)