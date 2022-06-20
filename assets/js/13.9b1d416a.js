(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{450:function(s,a,t){s.exports=t.p+"assets/img/2.fe4f278c.png"},524:function(s,a,t){"use strict";t.r(a);var n=t(28),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"八-使用-express"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八-使用-express"}},[s._v("#")]),s._v(" 八.使用 Express")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),n("p",[s._v("这里用 express 开发的 node 后端项目来制作一个 express 项目镜像并使用")])]),s._v(" "),n("h2",{attrs:{id:"_1-安装过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装过程"}},[s._v("#")]),s._v(" 1.安装过程")]),s._v(" "),n("h3",{attrs:{id:"_1-1-dockerfile"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-dockerfile"}},[s._v("#")]),s._v(" 1.1 Dockerfile")]),s._v(" "),n("p",[s._v("在你的后端项目的根目录下新建"),n("code",[s._v("Dockerfile")]),s._v("文件，上传到仓库中")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置构建的基础镜像")]),s._v("\nFROM node:16.5.0\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /project/\nWORKDIR /project/\nCOPY package.json /project/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置npm下载依赖来源为淘宝源")]),s._v("\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" registry https://registry.npm.taobao.org\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf node_modules "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /project "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nodemon -g\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装项目依赖")]),s._v("\nRUN "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nCOPY "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /project/\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在启动镜像时执行启动项目的命令")]),s._v("\nCMD "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#暴露端口用于外部访问")]),s._v("\nEXPOSE "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4000")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("h3",{attrs:{id:"_1-2-获取项目镜像"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-获取项目镜像"}},[s._v("#")]),s._v(" 1.2 获取项目镜像")]),s._v(" "),n("ul",[n("li",[s._v("进入项目根目录执行如下命令构建镜像")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t antdpro-express "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"_1-3-获取项目容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-获取项目容器"}},[s._v("#")]),s._v(" 1.3 获取项目容器")]),s._v(" "),n("p",[n("img",{attrs:{src:t(450),alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("关闭防火墙 4000 端口")]),s._v(" "),n("li",[s._v("查看"),n("a",{attrs:{href:"localhost:4000"}},[s._v("localhost:4000")])])]),s._v(" "),n("h2",{attrs:{id:"_2-其他问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他问题"}},[s._v("#")]),s._v(" 2.其他问题")]),s._v(" "),n("ul",[n("li",[s._v("查看正在运行的镜像")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("查看")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);