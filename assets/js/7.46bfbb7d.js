(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{301:function(s,a,e){s.exports=e.p+"assets/img/2.fe4f278c.png"},348:function(s,a,e){"use strict";e.r(a);var n=e(9),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"二-使用-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二-使用-jenkins"}},[s._v("#")]),s._v(" 二.使用 Jenkins")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),n("p",[s._v("Jenkins 这里主要作为自动构建工具案例来使用，传统模式每次发包需要先拉下最新代码 --\x3e 安装依赖 --\x3e 打包 --\x3e 将代码移动到相关目录 --\x3e 运行，这里配置好这些步骤可以自动完成全部过程。")])]),s._v(" "),n("h2",{attrs:{id:"_1-安装过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装过程"}},[s._v("#")]),s._v(" 1.安装过程")]),s._v(" "),n("h3",{attrs:{id:"_1-1-获取-jenkins-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取-jenkins-镜像"}},[s._v("#")]),s._v(" 1.1 获取 Jenkins 镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull jenkins/jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_1-2-获取-jenkins-容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-获取-jenkins-容器"}},[s._v("#")]),s._v(" 1.2 获取 Jenkins 容器")]),s._v(" "),n("p",[s._v("我们使用 docker run 命令启动一个新的 Gitlab 容器")]),s._v(" "),n("p",[n("img",{attrs:{src:e(301),alt:""}})]),s._v(" "),n("h3",{attrs:{id:"_1-3-安装完成"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-安装完成"}},[s._v("#")]),s._v(" 1.3 安装完成")]),s._v(" "),n("ul",[n("li",[s._v("云服务器上关闭防火墙")]),s._v(" "),n("li",[s._v("访问页面"),n("a",{attrs:{href:"localhost:8080"}},[s._v("localhost:8080")])]),s._v(" "),n("li",[s._v("获取密码，登陆页面")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jenkins "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" /var/jenkins_home/secrets/initialAdminPassword\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"_2-其他问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他问题"}},[s._v("#")]),s._v(" 2.其他问题")]),s._v(" "),n("h3",{attrs:{id:"_1-安装防火墙"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装防火墙"}},[s._v("#")]),s._v(" 1.安装防火墙")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firewalld systemd -y\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\nfirewall-cmd --permanent --add-service"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\nfirewall-cmd --permanent --add-rich-rule"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rule family="')]),s._v("ipv4"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" source address="')]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".0.0/16"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('" accept"')]),s._v("\nsystemctl reload firewalld\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("pemmanent: 表示永久生效，若不加 --permanent 系统下次启动后就会失效。")]),s._v(" "),n("li",[s._v("systemctl：https://www.cnblogs.com/zwcry/p/9602756.html")]),s._v(" "),n("li",[s._v("firewall-cmd：https://blog.csdn.net/s_p_j/article/details/80979450")]),s._v(" "),n("li",[s._v("add-rich-rule：添加一条放行规则。作用是允许 docker 容器之间可以走宿主机互相访问。")]),s._v(" "),n("li",[s._v("其中，172.16.0.0 是网段，/16 代表匹配所有网段内的 IP：https://blog.csdn.net/aerchi/article/details/39396423?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.nonecase")])]),s._v(" "),n("h3",{attrs:{id:"_2-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-dockerfile"}},[s._v("#")]),s._v(" 2.DockerFile")]),s._v(" "),n("p",[s._v("我们都知道，每个 Docker 容器，都是一个独立的，与外界隔离的操作系统环境。在使用 Jenkins 服务进行构建时，用户写的 Shell 脚本，也只会在容器内执行。\n但我们问题来了，我们想让容器部署的 Jenkins 可以构建 Docker 镜像，只有 2 种办法：")]),s._v(" "),n("ul",[n("li",[n("ol",[n("li",[s._v("加一台 Jenkins master 节点，构建机内安装 Docker 环境。这样我们就可以执行远程构建。")])])]),s._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[s._v("宿主机的 Docker 环境，移花接木到容器内部，在容器内部执行 Docker 命令构建镜像。")])])])]),s._v(" "),n("p",[n("strong",[s._v("Docker in Docker")])]),s._v(" "),n("ul",[n("li",[s._v("原理")])]),s._v(" "),n("p",[s._v("那什么是 Docker in Docker 呢？\nDocker 采用的是 C/S（即 Client/Server）架构。我们在执行 docker xxx 等命令时，其实是使用 Client 在和 docker engine 在进行通信。\n我们在安装 Docker CE 时，会生成一个 systemd service 服务。这个服务启动时，就是 Docker Engine 服务。默认情况下，Docker 守护进程会生成一个 socket（/var/run/docker.sock）文件来进行本地进程通信，因此只能在本地使用 docker 客户端或者使用 Docker API 进行操作。\n*.sock 文件：sock 文件是 UNIX 域套接字，它可以通过文件系统（而非网络地址）进行寻址和访问。\n因此，只要把宿主机的 Docker 套接字通过 Docker 数据卷挂载到容器内部，就能实现在容器内使用 Docker 命令。")]),s._v(" "),n("ul",[n("li",[s._v("使用")])]),s._v(" "),n("p",[s._v("下方的命令，就是 Docker in Docker 的使用。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". -v /var/run/docker.sock:/var/run/docker.sock\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("所以，我们要实现在 Jenkins 内部访问宿主机 docker，要写一个 DockerFile 进行二次镜像构建。\n此 DockerFile 的作用，就是为了安装容器使用宿主机 Docker 缺少的依赖。这里我们在容器内安装 libltdl7 。\n如果不写 DockerFile 进行构建也可以，亲测直接挂 Docker 套接字进容器后会有依赖缺失问题，这个方法只针对 Jenkins 镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" Dockerfile\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("FROM jenkins/jenkins\n"),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" root\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除了基础镜像设置的源，切换成阿里云源")]),s._v("\nRUN "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list.d/jessie-backports.list "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian jessie main contrib non-free"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian jessie-updates main contrib non-free"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian-security jessie/updates main contrib non-free"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新源并安装缺少的包")]),s._v("\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y libltdl7\nARG "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dockerGid")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("999")]),s._v("\nRUN "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker:x:'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${dockerGid}")]),s._v(':jenkins"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/group\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"_3-构建-jenkins-镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-构建-jenkins-镜像"}},[s._v("#")]),s._v(" 3.构建 Jenkins 镜像")]),s._v(" "),n("p",[s._v("这样的话，我们就不能直接使用官方的 Jenkins 镜像进行构建，需要用 DockerFile 先构建一份自己的 Jenkins 镜像。使用 docker build 命令构建镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t local/jenkins "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("-t：镜像的名字及 tag，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个 tag\n如果提示 Successfully tagged local/jenkins:latest 则构建成功")]),s._v(" "),n("h3",{attrs:{id:"_4-启动镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动镜像"}},[s._v("#")]),s._v(" 4.启动镜像")]),s._v(" "),n("p",[s._v("我们将 Jenkins 用户目录外挂到宿主机内，先新建一个 /home/jenkins 目录，并设置权限：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/jenkins\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" /home/jenkins/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("接下来我们用镜像创建容器并启动：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -itd --name jenkins -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /var/run/docker.sock:/var/run/docker.sock "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /usr/bin/docker:/usr/bin/docker "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n-v /home/jenkins:/var/jenkins_home "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart always "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--user root local/jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("-itd: 由 -i -t -d 命令组合而成\n-i: 开启容器内的交互模式，允许用户可以进入容器进行输入交互\n-t: 分配一个虚拟终端\n-d: 允许容器以后台运行（不加的话只能前台运行，退出终端容器就停止了）\n--name: 容器名称\n-p: 将容器内的端口映射到宿主机的端口。格式为：宿主机端口:容器端口\n-v: 将宿主机内的文件挂载到容器目录下。格式为：宿主机目录:容器目录\n--user: 指定用户启动\n--restart: 当 Docker 重启时，容器自动启动，否则就需要使用 docker restart 手动启动\n启动后，会返回一串 ID 值，这就是 容器 ID 值。\n执行 docker ps 命令，查看 Jenkins 容器是否在列表内。如果在列表内，说明启动成功\n提示：如果执行 docker ps 后容器没有在列表内，多半是启动失败。可以加-a 参数查看所有已经生成的容器的运行状态。\n如果想进一步查看原因，可以使用 docker logs -f <容器 ID> 查看容器内日志输出。")]),s._v(" "),n("h3",{attrs:{id:"_5-启动-jenkins"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动-jenkins"}},[s._v("#")]),s._v(" 5.启动 Jenkins")]),s._v(" "),n("p",[s._v("首先我们在防火墙添加 8080 和 50000 端口的放行，并重载防火墙")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("firewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp --permanent\nfirewall-cmd --zone"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("/tcp --permanent\nsystemctl reload firewalld\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("容器启动后，访问 宿主机 IP:8080 。如果看到以下界面，代表正在启动。\nJenkins 第一次的启动时间一般比较长（视机器性能而看）")]),s._v(" "),n("h3",{attrs:{id:"_6-初始化配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-初始化配置"}},[s._v("#")]),s._v(" 6.初始化配置")]),s._v(" "),n("p",[n("strong",[s._v("解锁 Jenkins")])]),s._v(" "),n("p",[s._v("Jenkins 启动后，会生成一个 初始密码 ，该密码在 Jenkins 容器内存放，可以进入容器后查看密码内容。")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it jenkins /bin/bash\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/jenkins_home/secrets/initialAdminPassword\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("docker exec: 进入一个已启动的容器内，执行命令")]),s._v(" "),n("li",[s._v("cat：查看文件内容。如果逐步查看可以用 more 命令")]),s._v(" "),n("li",[s._v("-it: -i -t 的组合")]),s._v(" "),n("li",[s._v("-i: 即使没有附加也保持 STDIN 打开")]),s._v(" "),n("li",[s._v("-t: 分配一个伪终端")]),s._v(" "),n("li",[s._v("输入配置文件中的密码，解锁 Jenkins")])]),s._v(" "),n("p",[n("strong",[s._v("下载插件")])]),s._v(" "),n("p",[s._v("解锁后，来到了插件下载页面。先进入容器配置一下清华大学的 Jenkins 插件源后，再安装插件。所以先不要点。")]),s._v(" "),n("p",[s._v("进入容器，查找 default.json 文件，把镜像源替换进去，替换后退出容器终端")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it jenkins /bin/bash\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / -name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default.json'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/updates.jenkins-ci.org\\/download/https:\\/\\/mirrors.tuna.tsinghua.edu.cn\\/jenkins/g'")]),s._v(" /var/jenkins_home/updates/default.json "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/www.google.com/https:\\/\\/www.baidu.com/g'")]),s._v(" /var/jenkins_home/updates/default.json\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("然后重启容器，重新访问界面，解锁后安装推荐插件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart jenkins\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_7-完成安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-完成安装"}},[s._v("#")]),s._v(" 7.完成安装")]),s._v(" "),n("p",[s._v("接下来一路按照提示配置，直到看到以下界面代表安装成功：")]),s._v(" "),n("h3",{attrs:{id:"_8-测试安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8-测试安装"}},[s._v("#")]),s._v(" 8.测试安装")]),s._v(" "),n("p",[s._v("我们点击 Jenkins 首页 -> 左侧导航 -> 新建任务 -> 构建一个自由风格的软件项目\n找到 构建 一项，选择 “增加构建步骤”，选择 执行 Shell ，输入以下命令：\n此命令是去拉取一个 nodejs 稳定版镜像")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" -v\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull node:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("保存后，我们点击左侧菜单的 “立即构建”，Jenkins 就会开始构建。选择左侧历史记录第一项（最新的一项），点击控制台输出，查看构建日志。\nJenkins 构建任务为蓝色灯，代表构建成功。红色灯代表构建失败")])])}),[],!1,null,null,null);a.default=t.exports}}]);