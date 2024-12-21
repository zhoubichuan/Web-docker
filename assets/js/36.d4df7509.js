(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{447:function(a,s,t){"use strict";t.r(s);var e=t(9),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"六-使用-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#六-使用-mysql"}},[a._v("#")]),a._v(" 六.使用 Mysql")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("前言")]),a._v(" "),s("p",[a._v("Mysql 这里作为一个关系型数据库拿来使用")])]),a._v(" "),s("h2",{attrs:{id:"_1-安装过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装过程"}},[a._v("#")]),a._v(" 1.安装过程")]),a._v(" "),s("h3",{attrs:{id:"_1-1-获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取镜像"}},[a._v("#")]),a._v(" 1.1 获取镜像")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull mysql\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-2-获取容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-获取容器"}},[a._v("#")]),a._v(" 1.2 获取容器")]),a._v(" "),s("ul",[s("li",[a._v("配置形式一")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql  mysql  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(":3306  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" dockerbetweennetwork  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("ul",[s("li",[a._v("配置形式二")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-itd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql  mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(":3306 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--network")]),a._v(" dockerbetweennetwork "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /xxx/mysql/conf:/etc/mysql/conf.d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /xxx/mysql/logs:/logs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将主机当前目录下的 logs 目录挂载到容器的 /logs")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /xxx/mysql/data:/var/lib/mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将主机当前目录下的data目录挂载到容器的 /var/lib/mysql")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("123456")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 初始化 root 用户的密码")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),a._v(" "),s("p",[a._v("-v $PWD/conf:/etc/mysql/conf.d # 将主机当前目录下的 conf/my.cnf 挂载到容器的 /etc/mysql/my.cnf\n-v $PWD/logs:/logs # 将主机当前目录下的 logs 目录挂载到容器的 /logs\n-v $PWD/data:/var/lib/mysql # 将主机当前目录下的 data 目录挂载到容器的 /var/lib/mysql\n-e MYSQL_ROOT_PASSWORD=123456 # 初始化 root 用户的密码\n-d # 表示后台运行（不加此选项，退出命令行后，容器将自动停止运行）")]),a._v(" "),s("h2",{attrs:{id:"_1-3-警告信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-警告信息"}},[a._v("#")]),a._v(" 1.3 警告信息")]),a._v(" "),s("ul",[s("li",[a._v("MySQL 5.6 警告信息 command line interface can be insecure\n"),s("ul",[s("li",[a._v("mysql: [Warning] Using a password on the command line interface can be insecure")])])])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/mysql/my.cnf\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("修改信息")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nport "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v("\nsocket "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" /tmp/mysql.sock\ndefault-character-set "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" utf8mb4\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("host")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" localhost\nuser "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" root\npassword "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'123456'")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"_1-4-完成安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-完成安装"}},[a._v("#")]),a._v(" 1.4 完成安装")]),a._v(" "),s("ul",[s("li",[a._v("关闭防火墙 8090 端口")]),a._v(" "),s("li",[a._v("打开页面"),s("a",{attrs:{href:"http://81.71.127.69:8090",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://81.71.127.69:8090"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("登陆")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mysql "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p123456")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他问题"}},[a._v("#")]),a._v(" 2.其他问题")])])}),[],!1,null,null,null);s.default=r.exports}}]);