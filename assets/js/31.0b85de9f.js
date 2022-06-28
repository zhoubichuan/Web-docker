(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{370:function(s,a,e){"use strict";e.r(a);var t=e(9),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"十四-搭建-java-web-环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#十四-搭建-java-web-环境"}},[s._v("#")]),s._v(" 十四.搭建 Java Web 环境")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),e("p",[s._v("Java Web 泛指以 Java 程序为基础向外提供 Web 服务的技术及相关工具，狭义上来说，我们也可以说 Java Web 是由 Servlet 程序提供的 Web 服务。 对我们而言，Tomcat 无疑是最常见的 Servlet 容器，所以在这个小节里，我们来搭建一个以 Tomcat 为核心的 Web 应用运行环境。 在这个环境中，我们还要组合进 MySQL 作为数据存储，Redis 作为 KV 存储。")])]),s._v(" "),e("h2",{attrs:{id:"_1-定义项目结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义项目结构"}},[s._v("#")]),s._v(" 1.定义项目结构")]),s._v(" "),e("p",[s._v("与之前我们提及的一样，要搭建这样的由多个程序所协作组成的开发环境，使用 Docker Compose 是最佳的选择。")]),s._v(" "),e("p",[s._v("建立 Docker Compose 项目之前，我们先来规划一下项目的目录结构。 在开发过程中，我们倾向于将与项目有关的内容集合到同一个文件夹下，这样的做有几点好处：")]),s._v(" "),e("ul",[e("li",[s._v("项目内容清晰明确，复制、迁移和与他人共享的过程中，不会发生遗漏的情况；")]),s._v(" "),e("li",[s._v("在定义 Docker Compose 项目时可以使用相对路径，让共享、迁移后整个项目可以不需要额外操作就能运行。")])]),s._v(" "),e("p",[s._v("在这些的基础上，我给出一个建议性的目录结构，供大家参考。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("└─ project\n   ├─ app\n   ├─ compose\n   │  └─ docker-compose.yml\n   ├─ mysql\n   │  └─ my.cnf\n   ├─ redis\n   │  └─ redis.conf\n   └─ tomcat\n      ├─ server.xml\n      └─ web.xml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("设计这样一个目录结构的主要目的是将不同程序的配置进行区分，这与我们之后会通过多个程序所关联的镜像及容器来组合这套环境的脉络是相契合的。")]),s._v(" "),e("p",[s._v("在这个目录结构中，区分了 5 个顶层目录：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("app")]),s._v(" ：用于存放程序工程，即代码、编译结果以及相关的库、工具等；")]),s._v(" "),e("li",[e("strong",[s._v("compose")]),s._v(" ：用于定义 Docker Compose 项目；")]),s._v(" "),e("li",[e("strong",[s._v("mysql")]),s._v(" ：与 MySQL 相关配置等内容；")]),s._v(" "),e("li",[e("strong",[s._v("redis")]),s._v(" ：与 Redis 相关配置等内容；")]),s._v(" "),e("li",[e("strong",[s._v("tomcat")]),s._v(" ：与 Tomcat 相关配置等内容。")])]),s._v(" "),e("h2",{attrs:{id:"_2-准备程序配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备程序配置"}},[s._v("#")]),s._v(" 2.准备程序配置")]),s._v(" "),e("p",[s._v("为了更方便在开发过程中对 MySQL、Redis、Tomcat 程序本身，所以我们会将它们的核心配置放置到项目里，再通过挂载的方式映射到容器中。 这样一来，我们就可以直接在我们宿主操作系统里直接修改这些配置，无须再进入到容器中了。")]),s._v(" "),e("p",[s._v("基于此，我们在完成目录的设计之后，首要解决的问题就是准备好这些程序中会经常变动的配置，并把它们放置在程序对应的目录之中。")]),s._v(" "),e("p",[s._v("我们常用下列几种方式来获得程序的配置文件：")]),s._v(" "),e("ul",[e("li",[s._v("借助配置文档直接编写")]),s._v(" "),e("li",[s._v("下载程序源代码中的配置样例")]),s._v(" "),e("li",[s._v("通过容器中的默认配置获得")])]),s._v(" "),e("p",[s._v("下面我们来展示一下这几种获取配置的方式。")]),s._v(" "),e("h3",{attrs:{id:"_2-1-借助配置文档直接编写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-借助配置文档直接编写"}},[s._v("#")]),s._v(" 2.1 借助配置文档直接编写")]),s._v(" "),e("p",[s._v("这里我们利用 MySQL 文档中配置文件的介绍部分，来编写一个 MySQL 的配置文件。")]),s._v(" "),e("p",[s._v("我们先找到 MySQL 文档中关于配置文件的参考，也就是下面这个地址：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/server-options.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://dev.mysql.com/doc/refman/5.7/en/server-options.html"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("我们根据这些内容，选取跟我们程序运行有影响的几项需要修改的参数，编写成 MySQL 的配置文件。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./mysql/my.cnf")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld_safe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\npid-file "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/mysqld/mysqld.pid\nsocket   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/mysqld/mysqld.sock\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("nice")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nskip-host-cache\nskip-name-resolve\nexplicit_defaults_for_timestamp\n\nbind-address "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nport         "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n\nuser      "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mysql\npid-file  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/mysqld/mysqld.pid\nsocket    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/run/mysqld/mysqld.sock\nlog-error "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/log/mysql/error.log\nbasedir   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr\ndatadir   "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /var/lib/mysql\ntmpdir    "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp\nsql_mode  "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n\nlc-messages-dir "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/share/mysql\n\nsymbolic-links "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br")])]),e("p",[s._v("使用软件的文档来编写配置文件，其优势在于在编写的过程实际上也是我们熟悉软件的过程，通过配置加文档形式的阅读，你一定会从中收获很多。 当然，这种方法也有很大的劣势，即需要仔细阅读文档，劳神劳力，对于常规开发中的使用来说，成效比很低。")]),s._v(" "),e("h3",{attrs:{id:"_2-2-下载程序源代码中的配置样例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-下载程序源代码中的配置样例"}},[s._v("#")]),s._v(" 2.2 下载程序源代码中的配置样例")]),s._v(" "),e("p",[s._v("除了通过配置文档来了解软件的配置外，大部分软件，特别是开源软件都会直接给出一份示例配置文件作为参考。 我们可以直接拿到这份配置，达到我们的目的。")]),s._v(" "),e("p",[s._v("这里我们以 Redis 为例，在 Redis 源代码中，就包含了一份默认的配置文件，我们可以直接拿来使用：")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/antirez/redis/blob/3.2/redis.conf",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/antirez/redis/blob/3.2/redis.conf"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("在拿到这是默认的配置后，我们还可以根据需要对其中的部分配置进行修改，以更好的满足我们的需求。")]),s._v(" "),e("p",[s._v("这里我们以修改 Redis 的密码为例。 打开配置文件，找到定义 Redis 授权授权的地方，将密码修改为我们需要的内容。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ./redis/redis.conf")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##...")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("################################## SECURITY ###################################")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Require clients to issue AUTH <PASSWORD> before processing any other")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commands.  This might be useful in environments in which you do not trust")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# others with access to the host running redis-server.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This should stay commented out for backward compatibility and because most")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# people do not need auth (e.g. they run their own servers).")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Warning: since Redis is pretty fast an outside user can try up to")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 150k passwords per second against a good box. This means that you should")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# use a very strong password otherwise it will be very easy to break.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\nrequirepass my-secret-pw\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("##...")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("p",[s._v("相对于通过配置文档获得配置，从配置示例里获得配置要来得更为简单容易。 但其也有一定的限制，既要对于的程序能够提供这样的示例配置，又要我们能够顺利找到这些配置文件。")]),s._v(" "),e("h3",{attrs:{id:"_2-3-通过容器中的默认配置获得"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-通过容器中的默认配置获得"}},[s._v("#")]),s._v(" 2.3 通过容器中的默认配置获得")]),s._v(" "),e("p",[s._v("除了从官方手册或者配置示例中获得配置文件外，我们还有一种远在天边近在眼前的获取配置文件的方法。 大多数 Docker 镜像为了实现自身能够直接启动为容器并马上提供服务，会把默认配置直接打包到镜像中，以便让程序能够直接读取。 所以说，我们可以直接从镜像里拿到这份配置，拷贝到宿主机里备用。")]),s._v(" "),e("p",[s._v("那么我们就以最后一个尚未出场的 Tomcat 为例，说说如何从 Tomcat 镜像里拿到配置文件。")]),s._v(" "),e("p",[s._v("要拿到 Tomcat 中的配置文件，我们需要先创建一个临时的 Tomcat 容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run --rm -d --name temp-tomcat tomcat:8.5")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这里我们将容器命名为 temp-tomcat 以便我们之后的操作。")]),s._v(" "),e("p",[s._v("对于 Tomcat 来说，在开发过程中我们可能会经常改动的配置主要是 server.xml 和 web.xml 这两个文件，所以接下来我们就把这两个文件从容器中复制到宿主机里。")]),s._v(" "),e("p",[s._v("这里我们会用到 "),e("code",[s._v("docker cp")]),s._v(" 这个命令，"),e("code",[s._v("docker cp")]),s._v(" 能够在容器与宿主机的文件系统间拷贝文件和目录。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker cp temp-tomcat:/usr/local/tomcat/conf/server.xml ./server.xml")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker cp temp-tomcat:/usr/local/tomcat/conf/web.xml ./web.xml")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("在这个命令的使用中，几个参数的含义如下：")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("temp-tomcat")]),s._v(" : 操作的容器。这里我们使用刚才创建的临时容器的容器名来指定。")]),s._v(" "),e("li",[e("strong",[s._v("/usr/local/tomcat/conf/server.xml")]),s._v(" : 需要拷贝的路径。也就是容器中配置文件的路径，这个路径可以通过 "),e("code",[s._v("docker exec")]),s._v(" 等命令进到容器里寻觅一下就能获得。")]),s._v(" "),e("li",[e("strong",[s._v("./server.xml")]),s._v(" : 是目标路径。即选择将文件拷贝到宿主机的什么位置上。")])]),s._v(" "),e("p",[s._v("熟悉 Linux 中 cp 命令的朋友会非常容易看懂这个命令，这两者传参的方式是基本一致的。 主要的区别在于 "),e("code",[s._v("docker cp")]),s._v(" 命令由于是在容器与宿主机间进行拷贝，所以来源目录或者目标目录中需要指定一下容器。")]),s._v(" "),e("p",[s._v("上述的命令是从容器中向宿主机里拷贝文件，我们还可以从宿主机中向容器里拷贝文件，只需要调换一下参数的位置即可。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker cp ./server.xml temp-tomcat:/usr/local/tomcat/conf/server.xml")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("回过头来看我们的配置，在执行了上述的命令之后，两个配置文件已经出现在我们系统的目录中了。")]),s._v(" "),e("p",[s._v("另外，别忘了在完成上面的操作后清理我们创建的临时容器。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker stop temp-tomcat")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("由于我们在创建临时容器的时候增加了 "),e("code",[s._v("--rm")]),s._v(" 选项，所以我们在这里只需要使用 "),e("code",[s._v("docker stop")]),s._v(" 停止容器，就可以在停止容器的同时直接删除容器，实现直接清理的目的。")]),s._v(" "),e("h2",{attrs:{id:"_3-编写定义文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-编写定义文件"}},[s._v("#")]),s._v(" 3.编写定义文件")]),s._v(" "),e("p",[s._v("准备好了程序的配置，我们就可以来编写我们的 Docker Compose 项目定义文件了。")]),s._v(" "),e("p",[s._v("这里是我编写好的一份 Docker Compose 项目定义文件。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("version: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\nservices:\n  redis:\n    image: redis:3.2\n    volumes:\n      - "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/redis/redis.conf:/etc/redis/redis.conf:ro\n      - "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/redis/data:/data\n    command:\n      - redis-server\n      - /etc/redis/redis.conf\n    ports:\n     - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(":6379\n\n  mysql:\n    image: mysql:5.7\n    volumes:\n      - "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/mysql/my.cnf:/etc/mysql/my.cnf:ro\n      - "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/mysql/data:/var/lib/mysql\n    environment:\n      MYSQL_ROOT_PASSWORD: my-secret-pw\n    ports:\n      - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306\n\n  tomcat:\n    image: tomcat:8.5\n    volumes:\n      - "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/app:/usr/local/tomcat/webapps/ROOT\n    ports:\n      - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(":8080\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br")])]),e("p",[s._v("在这个项目里，我将 Redis 和 MySQL 的数据存储目录，也就是 Redis 容器中的 /data 目录和 MySQL 容器中的 /var/lib/mysql 目录通过挂载的方式绑定到了宿主机上的目录中。 这么做的目的是为了让 Redis 和 MySQL 的数据能够持久化存储，避免我们在创建和移除容器时造成数据的流失。")]),s._v(" "),e("p",[s._v("同时，这种将数据挂载出来的方法，可以直接方便我们打包数据并传送给其他开发者，方便开发过程中进行联调。")]),s._v(" "),e("p",[s._v("在 Tomcat 这个服务中，我们将程序直接挂载到 webapps/ROOT 目录下，这样我们就能够借助 Tomcat 访问我们的应用了。 如果大家有多个项目，也可以进行适当调整，将它们挂载到 webapps 下面的子目录中，实现同时访问多个应用的目的。")]),s._v(" "),e("p",[s._v("另外，这里我还把 Tomcat 默认的 8080 端口映射到了宿主机的 80 端口上，这样便于我们直接通过地址访问网站，不需要经常人工补充端口号了。")]),s._v(" "),e("h2",{attrs:{id:"_4-启动项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-启动项目"}},[s._v("#")]),s._v(" 4.启动项目")]),s._v(" "),e("p",[s._v("一切就绪，我们就可以直接通过 Docker Compose 的命令来启动开发环境了。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose -p javaweb -f ./compose/docker-compose.yml up -d")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);