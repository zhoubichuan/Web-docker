(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{301:function(s,t,a){s.exports=a.p+"assets/img/2.fe4f278c.png"},351:function(s,t,a){"use strict";a.r(t);var n=a(9),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"四-使用-mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-使用-mongodb"}},[s._v("#")]),s._v(" 四.使用 Mongodb")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),t("p",[s._v("Mongodb 这里作为一个非关系型数据库案例使用")])]),s._v(" "),t("h2",{attrs:{id:"_1-安装过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装过程"}},[s._v("#")]),s._v(" 1.安装过程")]),s._v(" "),t("h3",{attrs:{id:"_1-1-获取-mongodb-镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-获取-mongodb-镜像"}},[s._v("#")]),s._v(" 1.1 获取 mongodb 镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull mongo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_1-2-获取-gitlab-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-获取-gitlab-容器"}},[s._v("#")]),s._v(" 1.2 获取 Gitlab 容器")]),s._v(" "),t("p",[t("img",{attrs:{src:a(301),alt:""}})]),s._v(" "),t("h3",{attrs:{id:"_1-3-完成安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-完成安装"}},[s._v("#")]),s._v(" 1.3 完成安装")]),s._v(" "),t("ul",[t("li",[s._v("关闭防火墙 27017 端口")]),s._v(" "),t("li",[s._v("打开页面"),t("a",{attrs:{href:"localhost:27017"}},[s._v("localhost:27017")])])]),s._v(" "),t("h2",{attrs:{id:"_2-其他问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他问题"}},[s._v("#")]),s._v(" 2.其他问题")]),s._v(" "),t("h3",{attrs:{id:"_2-1-创建挂载目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建挂载目录"}},[s._v("#")]),s._v(" 2.1 创建挂载目录")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /root/mongo/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("data,conf,backup"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_2-2-进入-mongo-容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-进入-mongo-容器"}},[s._v("#")]),s._v(" 2.2 进入 mongo 容器")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mongodb mongo admin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it mongodb /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("现在可以直接操作数据库了，比如添加账号")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("db.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(",pwd:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),s._v(",roles:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("role:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v(",db:"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(","),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin'")]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#读取权限的账户")]),s._v("\ndb.createUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" user: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),s._v(", pwd: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'你的密码'")]),s._v(", roles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" role: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWrite"')]),s._v(", db: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"elec_safe"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndb.auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),s._v(","),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);