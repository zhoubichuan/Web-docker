(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{382:function(s,a,e){"use strict";e.r(a);var t=e(9),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"八-保存和共享镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#八-保存和共享镜像"}},[s._v("#")]),s._v(" 八.保存和共享镜像")]),s._v(" "),e("h2",{attrs:{id:"_1-提交容器更改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-提交容器更改"}},[s._v("#")]),s._v(" 1.提交容器更改")]),s._v(" "),e("p",[s._v("Docker 镜像的本质是多个基于 UnionFS 的镜像层依次挂载的结果，而容器的文件系统则是在以只读方式挂载镜像后增加的一个可读可写的沙盒环境。")]),s._v(" "),e("p",[s._v("基于这样的结构，Docker 中为我们提供了将容器中的这个可读可写的沙盒环境持久化为一个镜像层的方法。更浅显的说，就是我们能够很轻松的在 Docker 里将容器内的修改记录下来，保存为一个新的镜像。")]),s._v(" "),e("p",[s._v("将容器修改的内容保存为镜像的命令是 "),e("code",[s._v("docker commit")]),s._v("，由于镜像的结构很像代码仓库里的修改记录，而记录容器修改的过程又像是在提交代码，所以这里我们更形象的称之为提交容器的更改。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit webapp\nsha256:0bc42f7ff218029c6c4199ab5c75ab83aeaaed3b5c731f715a3e807dda61d19e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Docker 执行将容器内沙盒文件系统记录成镜像层的时候，会先暂停容器的运行，以保证容器内的文件系统处于一个相对稳定的状态，确保数据的一致性。")]),s._v(" "),e("p",[s._v("在使用 "),e("code",[s._v("docker commit")]),s._v(" 提交镜像更新后，我们可以得到 Docker 创建的新镜像的 ID，之后我们也能够从本地镜像列表中找到它。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              0bc42f7ff218        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" seconds ago       372MB\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("像通过 Git 等代码仓库软件提交代码一样，我们还能在提交容器更改的时候给出一个提交信息，方便以后查询。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Configured"')]),s._v(" webapp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-1-为镜像命名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为镜像命名"}},[s._v("#")]),s._v(" 1.1 为镜像命名")]),s._v(" "),e("p",[e("code",[s._v("docker tag")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag 0bc42f7ff218 webapp:1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用 "),e("code",[s._v("docker tag")]),s._v(" 能够为未命名的镜像指定镜像名，也能够对已有的镜像创建一个新的命名")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag webapp:1.0 webapp:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("当我们对未命名的镜像进行命名后，Docker 就不会在镜像列表里继续显示这个镜像，取而代之的是我们新的命名。而如果我们对以后镜像使用 "),e("code",[s._v("docker tag")]),s._v("，旧的镜像依然会存在于镜像列表中。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nwebapp                "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("                 0bc42f7ff218        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" minutes ago      372MB\nwebapp                latest              0bc42f7ff218        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v(" minutes ago      372MB\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## ......")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("由于镜像是对镜像层的引用记录，所以我们对镜像进行命名后，虽然能够在镜像列表里同时看到新老两个镜像，实质是它们其实引用着相同的镜像层，这个我们能够从镜像 ID 中看得出来 ( 因为镜像 ID 就是最上层镜像层的 ID )。正是这个原因，我们虽然创建了新的镜像，但对物理存储的占用空间却不是镜像大小直接翻倍，并且创建也在霎那之间。")]),s._v(" "),e("p",[s._v("除了使用 "),e("code",[s._v("docker tag")]),s._v(" 在容器提交为新的镜像后为镜像命名这种方式外，我们还可以直接在 "),e("code",[s._v("docker commit")]),s._v(" 命令里指定新的镜像名，这种方式在使用容器提交时会更加方便。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Upgrade"')]),s._v(" webapp webapp：2.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_2-镜像的迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-镜像的迁移"}},[s._v("#")]),s._v(" 2.镜像的迁移")]),s._v(" "),e("p",[e("code",[s._v("docker save")]),s._v(" 命令可以将镜像输出")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save webapp:1.0 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" webapp-1.0.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在默认定义下，"),e("code",[s._v("docker save")]),s._v(" 命令会将镜像内容放入输出流中，这就需要我们使用管道进行接收 ( > 符号 )，这属于 Linux 等系统控制台中的用法，这里我们不做详细讲解。")]),s._v(" "),e("p",[e("code",[s._v("docker save")]),s._v(" 命令还为我们提供了 "),e("code",[s._v("-o")]),s._v(" 选项，用来指定输出文件，使用这个选项可以让命令更具有统一性。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save -o ./webapp-1.0.tar webapp:1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-1-导入镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-导入镜像"}},[s._v("#")]),s._v(" 2.1 导入镜像")]),s._v(" "),e("p",[s._v("我们可以通过很多种方式将导出的镜像文件复制到另一台机器上，在这么操作之后，我们就要将镜像导入到这台新机器中运行的 Docker 中。")]),s._v(" "),e("p",[s._v("导入镜像的方式也很简单，使用与 "),e("code",[s._v("docker save")]),s._v(" 相对的 "),e("code",[s._v("docker load")]),s._v(" 命令即可。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" load "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" webapp-1.0.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("相对的，"),e("code",[s._v("docker load")]),s._v(" 命令是从输入流中读取镜像的数据，所以我们这里也要使用管道来传输内容。当然，我们也能够使用 "),e("code",[s._v("-i")]),s._v(" 选项指定输入文件。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" load -i webapp-1.0.tar\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("镜像导入后，我们就可以通过 "),e("code",[s._v("docker images")]),s._v(" 看到它了，导入的镜像会延用原有的镜像名称。")]),s._v(" "),e("h3",{attrs:{id:"_2-2-批量迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-批量迁移"}},[s._v("#")]),s._v(" 2.2 批量迁移")]),s._v(" "),e("p",[s._v("通过 "),e("code",[s._v("docker save")]),s._v(" 和 "),e("code",[s._v("docker load")]),s._v(" 命令我们还能够批量迁移镜像，只要我们在 "),e("code",[s._v("docker save")]),s._v(" 中传入多个镜像名作为参数，它就能够将这些镜像都打成一个包，便于我们一次性迁移多个镜像。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" save -o ./images.tar webapp:1.0 nginx:1.12 mysql:5.7\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("装有多个镜像的包可以直接被 "),e("code",[s._v("docker load")]),s._v(" 识别和读取，我们将这个包导入后，所有其中装载的镜像都会被导入到 Docker 之中。")]),s._v(" "),e("h2",{attrs:{id:"_3-导出和导入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-导出和导入容器"}},[s._v("#")]),s._v(" 3.导出和导入容器")]),s._v(" "),e("p",[s._v("也许 Docker 的开发者认为，提交镜像修改，再导出镜像进行迁移的方法还不够效率，所以还为我们提供了一个导出容器的方法。")]),s._v(" "),e("p",[s._v("使用 "),e("code",[s._v("docker export")]),s._v(" 命令我们可以直接导出容器，我们可以把它简单的理解为 "),e("code",[s._v("docker commit")]),s._v(" 与 "),e("code",[s._v("docker save")]),s._v(" 的结合体。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" -o ./webapp.tar webapp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("相对的，使用 "),e("code",[s._v("docker export")]),s._v(" 导出的容器包，我们可以使用 "),e("code",[s._v("docker import")]),s._v(" 导入。这里需要注意的是，使用 "),e("code",[s._v("docker import")]),s._v(" 并非直接将容器导入，而是将容器运行时的内容以镜像的形式导入。所以导入的结果其实是一个镜像，而不是容器。在 "),e("code",[s._v("docker import")]),s._v(" 的参数里，我们可以给这个镜像命名。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" ./webapp.tar webapp:1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在开发的过程中，使用 "),e("code",[s._v("docker save")]),s._v(" 和 "),e("code",[s._v("docker load")]),s._v("，或者是使用 "),e("code",[s._v("docker export")]),s._v(" 和 "),e("code",[s._v("docker import")]),s._v(" 都可以达到迁移容器或者镜像的目的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);