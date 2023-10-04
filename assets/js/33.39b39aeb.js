(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{387:function(s,a,e){"use strict";e.r(a);var t=e(10),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"二-使用-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-使用-jenkins"}},[s._v("#")]),s._v(" 二.使用 Jenkins")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("Jenkins 这里主要作为自动构建工具案例来使用，传统模式每次发包需要先拉下最新代码 --\x3e 安装依赖 --\x3e 打包 --\x3e 将代码移动到相关目录 --\x3e 运行，这里配置好这些步骤可以自动完成全部过程。")])]),s._v(" "),a("h2",{attrs:{id:"_1-制作镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-制作镜像"}},[s._v("#")]),s._v(" 1.制作镜像")]),s._v(" "),a("h3",{attrs:{id:"_1-1-获取镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取镜像"}},[s._v("#")]),s._v(" 1.1 获取镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull jenkins/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-2-获取容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-获取容器"}},[s._v("#")]),s._v(" 1.2 获取容器")]),s._v(" "),a("p",[s._v("我们使用 docker run 命令启动一个新的 Gitlab 容器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" jenkins:/var/jenkins_home "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /etc/localtime:/etc/localtime "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" jenkins docker.io/jenkins/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-3-安装完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-安装完成"}},[s._v("#")]),s._v(" 1.3 安装完成")]),s._v(" "),a("ul",[a("li",[s._v("云服务器上关闭防火墙")]),s._v(" "),a("li",[s._v("访问页面"),a("a",{attrs:{href:"http://81.71.127.69:8080",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://81.71.127.69:8080"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("获取密码，登陆页面")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jenkins "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" /var/jenkins_home/secrets/initialAdminPassword\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_2-其他问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他问题"}},[s._v("#")]),s._v(" 2.其他问题")]),s._v(" "),a("h3",{attrs:{id:"_2-1-安装防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-安装防火墙"}},[s._v("#")]),s._v(" 2.1 安装防火墙")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" firewalld systemd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" firewalld start\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --add-service"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pemmanent: 表示永久生效，若不加 --permanent 系统下次启动后就会失效")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v(" --add-rich-rule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rule family="')]),s._v("ipv4"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" source address="')]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".0.0/16"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" accept"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#add-rich-rule：添加一条放行规则。作用是允许 docker 容器之间可以走宿主机互相访问")]),s._v("\nsystemctl reload firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("172.16.0.0 是网段，/16 代表匹配所有网段内的 IP")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-dockerfile"}},[s._v("#")]),s._v(" 2.2 DockerFile")]),s._v(" "),a("p",[s._v("我们都知道，每个 Docker 容器，都是一个独立的，与外界隔离的操作系统环境。在使用 Jenkins 服务进行构建时，用户写的 Shell 脚本，也只会在容器内执行。\n但我们问题来了，我们想让容器部署的 Jenkins 可以构建 Docker 镜像，只有 2 种办法：")]),s._v(" "),a("ul",[a("li",[a("ol",[a("li",[s._v("加一台 Jenkins master 节点，构建机内安装 Docker 环境。这样我们就可以执行远程构建。")])])]),s._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[s._v("宿主机的 Docker 环境，移花接木到容器内部，在容器内部执行 Docker 命令构建镜像。")])])])]),s._v(" "),a("p",[a("strong",[s._v("Docker in Docker")])]),s._v(" "),a("ul",[a("li",[s._v("原理")])]),s._v(" "),a("p",[s._v("那什么是 Docker in Docker 呢？\nDocker 采用的是 C/S（即 Client/Server）架构。我们在执行 docker xxx 等命令时，其实是使用 Client 在和 docker engine 在进行通信。\n我们在安装 Docker CE 时，会生成一个 systemd service 服务。这个服务启动时，就是 Docker Engine 服务。默认情况下，Docker 守护进程会生成一个 socket（/var/run/docker.sock）文件来进行本地进程通信，因此只能在本地使用 docker 客户端或者使用 Docker API 进行操作。\n*.sock 文件：sock 文件是 UNIX 域套接字，它可以通过文件系统（而非网络地址）进行寻址和访问。\n因此，只要把宿主机的 Docker 套接字通过 Docker 数据卷挂载到容器内部，就能实现在容器内使用 Docker 命令。")]),s._v(" "),a("ul",[a("li",[s._v("使用")])]),s._v(" "),a("p",[s._v("下方的命令，就是 Docker in Docker 的使用。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/run/docker.sock:/var/run/docker.sock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("所以，我们要实现在 Jenkins 内部访问宿主机 docker，要写一个 DockerFile 进行二次镜像构建。\n此 DockerFile 的作用，就是为了安装容器使用宿主机 Docker 缺少的依赖。这里我们在容器内安装 libltdl7 。\n如果不写 DockerFile 进行构建也可以，亲测直接挂 Docker 套接字进容器后会有依赖缺失问题，这个方法只针对 Jenkins 镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" Dockerfile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM jenkins/jenkins\n"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" root\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除了基础镜像设置的源，切换成阿里云源")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list.d/jessie-backports.list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian jessie main contrib non-free"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/apt/sources.list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian jessie-updates main contrib non-free"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb http://mirrors.aliyun.com/debian-security jessie/updates main contrib non-free"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/apt/sources.list\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新源并安装缺少的包")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" libltdl7\nARG "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dockerGid")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("999")]),s._v("\nRUN "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker:x:'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${dockerGid}")]),s._v(':jenkins"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/group\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_2-3-构建-jenkins-镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-构建-jenkins-镜像"}},[s._v("#")]),s._v(" 2.3 构建 Jenkins 镜像")]),s._v(" "),a("p",[s._v("这样的话，我们就不能直接使用官方的 Jenkins 镜像进行构建，需要用 DockerFile 先构建一份自己的 Jenkins 镜像。使用 docker build 命令构建镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" local/jenkins "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("-t：镜像的名字及 tag，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个 tag\n如果提示 Successfully tagged local/jenkins:latest 则构建成功")]),s._v(" "),a("h3",{attrs:{id:"_2-4-启动镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-启动镜像"}},[s._v("#")]),s._v(" 2.4 启动镜像")]),s._v(" "),a("p",[s._v("我们将 Jenkins 用户目录外挂到宿主机内，先新建一个 /home/jenkins 目录，并设置权限：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/jenkins\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" /home/jenkins/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("接下来我们用镜像创建容器并启动：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" jenkins "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v(":50000 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /var/run/docker.sock:/var/run/docker.sock "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /usr/bin/docker:/usr/bin/docker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" /home/jenkins:/var/jenkins_home "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--restart")]),s._v(" always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),s._v(" root local/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("-itd: 由 -i -t -d 命令组合而成\n-i: 开启容器内的交互模式，允许用户可以进入容器进行输入交互\n-t: 分配一个虚拟终端\n-d: 允许容器以后台运行（不加的话只能前台运行，退出终端容器就停止了）\n--name: 容器名称\n-p: 将容器内的端口映射到宿主机的端口。格式为：宿主机端口:容器端口\n-v: 将宿主机内的文件挂载到容器目录下。格式为：宿主机目录:容器目录\n--user: 指定用户启动\n--restart: 当 Docker 重启时，容器自动启动，否则就需要使用 docker restart 手动启动\n启动后，会返回一串 ID 值，这就是 容器 ID 值。\n执行 docker ps 命令，查看 Jenkins 容器是否在列表内。如果在列表内，说明启动成功\n提示：如果执行 docker ps 后容器没有在列表内，多半是启动失败。可以加-a 参数查看所有已经生成的容器的运行状态。\n如果想进一步查看原因，可以使用 docker logs -f <容器 ID> 查看容器内日志输出。")]),s._v(" "),a("h3",{attrs:{id:"_2-5-启动-jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-启动-jenkins"}},[s._v("#")]),s._v(" 2.5 启动 Jenkins")]),s._v(" "),a("p",[s._v("首先我们在防火墙添加 8080 和 50000 端口的放行，并重载防火墙")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("firewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\nfirewall-cmd "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--zone")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50000")]),s._v("/tcp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--permanent")]),s._v("\nsystemctl reload firewalld\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("容器启动后，访问 宿主机 IP:8080 。如果看到以下界面，代表正在启动。\nJenkins 第一次的启动时间一般比较长（视机器性能而看）")]),s._v(" "),a("h3",{attrs:{id:"_2-6-初始化配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-初始化配置"}},[s._v("#")]),s._v(" 2.6 初始化配置")]),s._v(" "),a("p",[a("strong",[s._v("解锁 Jenkins")])]),s._v(" "),a("p",[s._v("Jenkins 启动后，会生成一个 初始密码 ，该密码在 Jenkins 容器内存放，可以进入容器后查看密码内容。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" jenkins /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/jenkins_home/secrets/initialAdminPassword\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("docker exec: 进入一个已启动的容器内，执行命令")]),s._v(" "),a("li",[s._v("cat：查看文件内容。如果逐步查看可以用 more 命令")]),s._v(" "),a("li",[s._v("-it: -i -t 的组合")]),s._v(" "),a("li",[s._v("-i: 即使没有附加也保持 STDIN 打开")]),s._v(" "),a("li",[s._v("-t: 分配一个伪终端")]),s._v(" "),a("li",[s._v("输入配置文件中的密码，解锁 Jenkins")])]),s._v(" "),a("p",[a("strong",[s._v("下载插件")])]),s._v(" "),a("p",[s._v("解锁后，来到了插件下载页面。先进入容器配置一下清华大学的 Jenkins 插件源后，再安装插件。所以先不要点。")]),s._v(" "),a("p",[s._v("进入容器，查找 default.json 文件，把镜像源替换进去，替换后退出容器终端")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" jenkins /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default.json'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/updates.jenkins-ci.org\\/download/https:\\/\\/mirrors.tuna.tsinghua.edu.cn\\/jenkins/g'")]),s._v(" /var/jenkins_home/updates/default.json "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/http:\\/\\/www.google.com/https:\\/\\/www.baidu.com/g'")]),s._v(" /var/jenkins_home/updates/default.json\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后重启容器，重新访问界面，解锁后安装推荐插件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" restart jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-7-完成安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-完成安装"}},[s._v("#")]),s._v(" 2.7 完成安装")]),s._v(" "),a("p",[s._v("接下来一路按照提示配置，直到看到以下界面代表安装成功：")]),s._v(" "),a("h3",{attrs:{id:"_2-8-测试安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-测试安装"}},[s._v("#")]),s._v(" 2.8 测试安装")]),s._v(" "),a("p",[s._v("我们点击 Jenkins 首页 -> 左侧导航 -> 新建任务 -> 构建一个自由风格的软件项目\n找到 构建 一项，选择 “增加构建步骤”，选择 执行 Shell ，输入以下命令：\n此命令是去拉取一个 nodejs 稳定版镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull node:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("保存后，我们点击左侧菜单的 “立即构建”，Jenkins 就会开始构建。选择左侧历史记录第一项（最新的一项），点击控制台输出，查看构建日志。\nJenkins 构建任务为蓝色灯，代表构建成功。红色灯代表构建失败")])])}),[],!1,null,null,null);a.default=n.exports}}]);