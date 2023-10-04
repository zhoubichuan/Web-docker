(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{389:function(a,s,t){"use strict";t.r(s);var n=t(10),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"四-使用-mongodb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四-使用-mongodb"}},[a._v("#")]),a._v(" 四.使用 mongodb")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("前言")]),a._v(" "),s("p",[a._v("Mongodb 这里作为一个非关系型数据库案例使用")])]),a._v(" "),s("h2",{attrs:{id:"_1-安装过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装过程"}},[a._v("#")]),a._v(" 1.安装过程")]),a._v(" "),s("h3",{attrs:{id:"_1-1-获取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取镜像"}},[a._v("#")]),a._v(" 1.1 获取镜像")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull mongo\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-2-获取容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-获取容器"}},[a._v("#")]),a._v(" 1.2 获取容器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("mymongodb "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27017")]),a._v(":27017 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/mongo/data:/data/db "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/mongo/backup:/data/backup "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/mongo/conf:/data/configdb mongo "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--auth")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-3-完成安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-完成安装"}},[a._v("#")]),a._v(" 1.3 完成安装")]),a._v(" "),s("ul",[s("li",[a._v("关闭防火墙 27017 端口")]),a._v(" "),s("li",[a._v("打开页面"),s("a",{attrs:{href:"http://81.71.127.69:27017",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://81.71.127.69:27017"),s("OutboundLink")],1)])]),a._v(" "),s("h2",{attrs:{id:"_2-其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他问题"}},[a._v("#")]),a._v(" 2.其他问题")]),a._v(" "),s("h3",{attrs:{id:"_2-1-创建挂载目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建挂载目录"}},[a._v("#")]),a._v(" 2.1 创建挂载目录")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /root/mongo/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("data,conf,backup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-2-进入-mongo-容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-进入-mongo-容器"}},[a._v("#")]),a._v(" 2.2 进入 mongo 容器")]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" mongodb mongo admin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" mongodb /bin/bash\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("现在可以直接操作数据库了，比如添加账号")])]),a._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("db.createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("user:"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'admin'")]),a._v(",pwd:"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'你的密码'")]),a._v(",roles:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("role:"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),a._v(",db:"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ndb.auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'admin'")]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'密码'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#读取权限的账户")]),a._v("\ndb.createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" user: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'test'")]),a._v(", pwd: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'你的密码'")]),a._v(", roles: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" role: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"readWrite"')]),a._v(", db: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"elec_safe"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ndb.auth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"test"')]),a._v(","),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"密码"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);