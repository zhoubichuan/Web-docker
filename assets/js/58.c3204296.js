(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{414:function(a,s,e){"use strict";e.r(s);var r=e(10),t=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"八-保存和共享镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#八-保存和共享镜像"}},[a._v("#")]),a._v(" 八.保存和共享镜像")]),a._v(" "),s("h2",{attrs:{id:"_1-提交容器更改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-提交容器更改"}},[a._v("#")]),a._v(" 1.提交容器更改")]),a._v(" "),s("p",[a._v("Docker 镜像的本质是多个基于 UnionFS 的镜像层依次挂载的结果，而容器的文件系统则是在以只读方式挂载镜像后增加的一个可读可写的沙盒环境。")]),a._v(" "),s("p",[a._v("基于这样的结构，Docker 中为我们提供了将容器中的这个可读可写的沙盒环境持久化为一个镜像层的方法。更浅显的说，就是我们能够很轻松的在 Docker 里将容器内的修改记录下来，保存为一个新的镜像。")]),a._v(" "),s("p",[a._v("将容器修改的内容保存为镜像的命令是 "),s("code",[a._v("docker commit")]),a._v("，由于镜像的结构很像代码仓库里的修改记录，而记录容器修改的过程又像是在提交代码，所以这里我们更形象的称之为提交容器的更改。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" commit webapp\nsha256:0bc42f7ff218029c6c4199ab5c75ab83aeaaed3b5c731f715a3e807dda61d19e\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("Docker 执行将容器内沙盒文件系统记录成镜像层的时候，会先暂停容器的运行，以保证容器内的文件系统处于一个相对稳定的状态，确保数据的一致性。")]),a._v(" "),s("p",[a._v("在使用 "),s("code",[a._v("docker commit")]),a._v(" 提交镜像更新后，我们可以得到 Docker 创建的新镜像的 ID，之后我们也能够从本地镜像列表中找到它。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("                "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("none"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("              0bc42f7ff218        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" seconds ago       372MB\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## ......")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("像通过 Git 等代码仓库软件提交代码一样，我们还能在提交容器更改的时候给出一个提交信息，方便以后查询。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Configured"')]),a._v(" webapp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_1-1-为镜像命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为镜像命名"}},[a._v("#")]),a._v(" 1.1 为镜像命名")]),a._v(" "),s("p",[s("code",[a._v("docker tag")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag 0bc42f7ff218 webapp:1.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("使用 "),s("code",[a._v("docker tag")]),a._v(" 能够为未命名的镜像指定镜像名，也能够对已有的镜像创建一个新的命名")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" tag webapp:1.0 webapp:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("当我们对未命名的镜像进行命名后，Docker 就不会在镜像列表里继续显示这个镜像，取而代之的是我们新的命名。而如果我们对以后镜像使用 "),s("code",[a._v("docker tag")]),a._v("，旧的镜像依然会存在于镜像列表中。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" images\nREPOSITORY            TAG                 IMAGE ID            CREATED             SIZE\nwebapp                "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.0")]),a._v("                 0bc42f7ff218        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" minutes ago      372MB\nwebapp                latest              0bc42f7ff218        "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" minutes ago      372MB\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## ......")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("由于镜像是对镜像层的引用记录，所以我们对镜像进行命名后，虽然能够在镜像列表里同时看到新老两个镜像，实质是它们其实引用着相同的镜像层，这个我们能够从镜像 ID 中看得出来 ( 因为镜像 ID 就是最上层镜像层的 ID )。正是这个原因，我们虽然创建了新的镜像，但对物理存储的占用空间却不是镜像大小直接翻倍，并且创建也在霎那之间。")]),a._v(" "),s("p",[a._v("除了使用 "),s("code",[a._v("docker tag")]),a._v(" 在容器提交为新的镜像后为镜像命名这种方式外，我们还可以直接在 "),s("code",[a._v("docker commit")]),a._v(" 命令里指定新的镜像名，这种方式在使用容器提交时会更加方便。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Upgrade"')]),a._v(" webapp webapp：2.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"_2-镜像的迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-镜像的迁移"}},[a._v("#")]),a._v(" 2.镜像的迁移")]),a._v(" "),s("p",[s("code",[a._v("docker save")]),a._v(" 命令可以将镜像输出")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save webapp:1.0 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" webapp-1.0.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在默认定义下，"),s("code",[a._v("docker save")]),a._v(" 命令会将镜像内容放入输出流中，这就需要我们使用管道进行接收 ( > 符号 )，这属于 Linux 等系统控制台中的用法，这里我们不做详细讲解。")]),a._v(" "),s("p",[s("code",[a._v("docker save")]),a._v(" 命令还为我们提供了 "),s("code",[a._v("-o")]),a._v(" 选项，用来指定输出文件，使用这个选项可以让命令更具有统一性。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ./webapp-1.0.tar webapp:1.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-1-导入镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-导入镜像"}},[a._v("#")]),a._v(" 2.1 导入镜像")]),a._v(" "),s("p",[a._v("我们可以通过很多种方式将导出的镜像文件复制到另一台机器上，在这么操作之后，我们就要将镜像导入到这台新机器中运行的 Docker 中。")]),a._v(" "),s("p",[a._v("导入镜像的方式也很简单，使用与 "),s("code",[a._v("docker save")]),a._v(" 相对的 "),s("code",[a._v("docker load")]),a._v(" 命令即可。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" webapp-1.0.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("相对的，"),s("code",[a._v("docker load")]),a._v(" 命令是从输入流中读取镜像的数据，所以我们这里也要使用管道来传输内容。当然，我们也能够使用 "),s("code",[a._v("-i")]),a._v(" 选项指定输入文件。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" load "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-i")]),a._v(" webapp-1.0.tar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("镜像导入后，我们就可以通过 "),s("code",[a._v("docker images")]),a._v(" 看到它了，导入的镜像会延用原有的镜像名称。")]),a._v(" "),s("h3",{attrs:{id:"_2-2-批量迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-批量迁移"}},[a._v("#")]),a._v(" 2.2 批量迁移")]),a._v(" "),s("p",[a._v("通过 "),s("code",[a._v("docker save")]),a._v(" 和 "),s("code",[a._v("docker load")]),a._v(" 命令我们还能够批量迁移镜像，只要我们在 "),s("code",[a._v("docker save")]),a._v(" 中传入多个镜像名作为参数，它就能够将这些镜像都打成一个包，便于我们一次性迁移多个镜像。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" save "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ./images.tar webapp:1.0 nginx:1.12 mysql:5.7\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("装有多个镜像的包可以直接被 "),s("code",[a._v("docker load")]),a._v(" 识别和读取，我们将这个包导入后，所有其中装载的镜像都会被导入到 Docker 之中。")]),a._v(" "),s("h2",{attrs:{id:"_3-导出和导入容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-导出和导入容器"}},[a._v("#")]),a._v(" 3.导出和导入容器")]),a._v(" "),s("p",[a._v("也许 Docker 的开发者认为，提交镜像修改，再导出镜像进行迁移的方法还不够效率，所以还为我们提供了一个导出容器的方法。")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("docker export")]),a._v(" 命令我们可以直接导出容器，我们可以把它简单的理解为 "),s("code",[a._v("docker commit")]),a._v(" 与 "),s("code",[a._v("docker save")]),a._v(" 的结合体。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" ./webapp.tar webapp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("相对的，使用 "),s("code",[a._v("docker export")]),a._v(" 导出的容器包，我们可以使用 "),s("code",[a._v("docker import")]),a._v(" 导入。这里需要注意的是，使用 "),s("code",[a._v("docker import")]),a._v(" 并非直接将容器导入，而是将容器运行时的内容以镜像的形式导入。所以导入的结果其实是一个镜像，而不是容器。在 "),s("code",[a._v("docker import")]),a._v(" 的参数里，我们可以给这个镜像命名。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("import")]),a._v(" ./webapp.tar webapp:1.0\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在开发的过程中，使用 "),s("code",[a._v("docker save")]),a._v(" 和 "),s("code",[a._v("docker load")]),a._v("，或者是使用 "),s("code",[a._v("docker export")]),a._v(" 和 "),s("code",[a._v("docker import")]),a._v(" 都可以达到迁移容器或者镜像的目的。")])])}),[],!1,null,null,null);s.default=t.exports}}]);