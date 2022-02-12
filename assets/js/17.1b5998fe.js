(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{196:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("让我们通过示例来学习。")]),s._v(" "),a("p",[s._v("通过这个教程，我们将带着你创建一个基本的文章管理程序。")]),s._v(" "),a("p",[s._v("它由两部分组成：")]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("我们假设你已经阅读了"),a("a",{attrs:{href:"http://doc.zhangwj.com/go-admin-doc/guide/ksks.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("开始"),a("OutboundLink")],1)]),s._v(" "),s._m(2),s._v(" "),a("p",[s._v("如果这是你第一次使用 go-admin 的话，你需要一些初始化设置。也就是说，你需要配置一个 go-admin 即一个项目实例需要的设置数据库或者也可以使用细目本身提供的 sqlite3 的体验数据库（部分功能不支持，如代码生成），目前推荐大家使用 mysql 数据库。")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),s._v(" "),a("p",[s._v("让我们看一下 go-admin 的目录结构：")]),s._v(" "),s._m(11),a("p",[s._v("这些目录和文件的用处是：")]),s._v(" "),s._m(12),s._v(" "),a("hr"),s._v(" "),s._m(13),s._v(" "),a("p",[s._v("让我们来确认一下你的 go-admin 项目是真的配置成功了。请运行下面的命令：")]),s._v(" "),s._m(14),a("p",[s._v("输出内容为下图，恭喜你！你已经成功了！")]),s._v(" "),s._m(15),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),a("hr"),s._v(" "),s._m(18),s._v(" "),a("p",[s._v("现在你的开发环境，已经配置好了，你可以开始干活了。")]),s._v(" "),a("p",[s._v("在 go-admin 中，你只需要关注业务，不用再为基础功能操心，这样你就能专心写代码，而不是想着如何组建项目，如何设计权限管理，如何选择 UI，在这里没有如何如何。")]),s._v(" "),a("p",[s._v("刚才已经讲过了项目的目录结构，在这里就不在赘述。")]),s._v(" "),a("hr"),s._v(" "),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),a("p",[s._v("这是 go-admin 中最简单的接口。如果想看见效果，我们需要将一个 URL 映射到它——这就是我们需要 router 的原因了。")]),s._v(" "),a("p",[s._v("以下是程序的目录结构：")]),s._v(" "),s._m(22),s._m(23),s._v(" "),s._m(24),a("p",[s._v("现在已经把接口函数注册到了 router 里边，通过以下命令验证是否正常工作：")]),s._v(" "),s._m(25),a("p",[s._v('用你的浏览器访问 http://localhost:8000/articleList，你应该能够看见 "{"code":200,"data":"hello world ！","msg":""}" ，这是你在接口中定义的。')]),s._v(" "),s._m(26),s._v(" "),s._m(27),s._v(" "),a("p",[s._v("这些函数的两个必须参数： path 和 handlers 。现在是时候来研究这些参数的含义了。")]),s._v(" "),s._m(28),s._v(" "),a("p",[s._v("path 是一个匹配 URL 的准则（有点正则表达式的意思），当 go-admin 响应一个请求时，它会从注册的 url 第一项开始，按照顺序一次匹配，直到找到匹配项。")]),s._v(" "),a("p",[s._v("这些准则不会匹配 GET 和 POST 参数或域名。例如，URL 在处理请求 http://www.zhangwj.com/articleList 时，它会尝试匹配 articleList 。处理请求 http://www.zhangwj.com/articleList?page=3 时，也只会尝试匹配 blog/list。")]),s._v(" "),s._m(29),s._v(" "),a("p",[s._v("当你了解了基本的请求和响应流程后，请阅读 教程的第 2 部分 开始使用数据库.")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("从哪里获得帮助：")]),s._v(" "),a("p",[s._v("如果你在阅读本教程的过程中有任何疑问，可以前往"),a("a",{attrs:{href:"https://github.com/go-admin-team/go-admin/issues/new",target:"_blank",rel:"noopener noreferrer"}},[s._v("提交建议"),a("OutboundLink")],1),s._v("。")])])])}),[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"编写-go-admin-应用-第-1-步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写-go-admin-应用-第-1-步"}},[this._v("#")]),this._v(" 编写 go-admin 应用,第 1 步")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[t("p",[this._v("前端页面。")])]),this._v(" "),t("li",[t("p",[this._v("后端 api 服务。")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"开始项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始项目"}},[this._v("#")]),this._v(" 开始项目")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("进入项目工作路径，打开 "),t("code",[this._v("config/settings.yml")]),this._v(" 进行配置：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("settings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目启动环境")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dev开发环境 test测试环境 prod线上环境；")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0.0.0.0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主机ip 或者域名，默认0.0.0.0")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("readtimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("writertimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志文件存放路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" temp/logs\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("jwt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JWT加密字符串")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" go"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admin\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 过期时间单位：秒")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库名称")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dbname\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库类型")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dbtype")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库地址")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 127.0.0.1\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库密码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" password\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库端口")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库用户名")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("配置中，我们需要修改 "),t("code",[this._v("database")]),this._v(" 下边的属性信息：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("database 数据库名称")]),s._v(" "),a("li",[s._v("dbtype 数据库类型，支持 mysql")]),s._v(" "),a("li",[s._v("host 数据库地址，填写网络 ip 地址或者域名。mysql，如：127.0.0.1；")]),s._v(" "),a("li",[s._v("password 数据库密码")]),s._v(" "),a("li",[s._v("port 数据库端口号")]),s._v(" "),a("li",[s._v("username 数据库用户名")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("还需修改 "),t("code",[this._v("application")]),this._v(" 下边的属性信息：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("logpath 日志文件路径，这里配置相对程序路径")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("建议")]),this._v(" "),t("p",[this._v("你得避免使用 go 或 go-admin 的内部保留字来命名你的项目模块以等名称。避免产生组件冲突。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("我的代码该放在哪？")]),this._v(" "),t("p",[this._v("如果是曾经是原生 PHP、JAVA、.Net 程序员，都会有项目标准的目录结构，当然 go-admin 也是相同的，也有自己的目录结构，这样利于项目更规范，协作更高效。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n├── LICENSE.md\n├── Makefile\n├── README.en.md\n├── README.md\n├── _config.yml\n├── apis\n├── cmd\n├── config\n├── database\n├── docs\n├── go.mod\n├── go.sum\n├── handler\n├── main.go\n├── middleware\n├── models\n├── pkg\n├── router\n├── static\n├── temp\n│   └── logs\n├── template\n├── "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n└── tools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ul",[a("li",[s._v("最外层 go-admin 是项目根路径")]),s._v(" "),a("li",[s._v("apis： api")]),s._v(" "),a("li",[s._v("config： 配置相关的文件以及类")]),s._v(" "),a("li",[s._v("database： 数据持久层基类")]),s._v(" "),a("li",[s._v("docs： 接口文档")]),s._v(" "),a("li",[s._v("handler： 处理程序类")]),s._v(" "),a("li",[s._v("models： 数据访问层")]),s._v(" "),a("li",[s._v("pkg： 程序包")]),s._v(" "),a("li",[s._v("router： 路由以及中间件")]),s._v(" "),a("li",[s._v("statie： 上传静态文件")]),s._v(" "),a("li",[s._v("temp： 临时日志文件")]),s._v(" "),a("li",[s._v("middleware: 中间件")]),s._v(" "),a("li",[s._v("template： 模板文件")]),s._v(" "),a("li",[s._v("test： 测试")]),s._v(" "),a("li",[s._v("tools 工具类")]),s._v(" "),a("li",[s._v("main.go： 主入口")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"用于开发的服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用于开发的服务器"}},[this._v("#")]),this._v(" 用于开发的服务器")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("./go-admin server -c"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("config/settings.dev.yml\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/serversuccessv1.0.0.png",height:"500px"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("现在，服务器正在运行，浏览器访问 http://127.0.0.1:8000/。你将会看到 "),t("code",[this._v("go-admin")]),this._v(" 文档，服务器已经运行了。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("更换端口")]),s._v(" "),a("p",[s._v("默认情况下，服务器设置为监听本机内部 IP 的 8000 端口。\n如果你想更换服务器的监听端口，请使用命令行参数。举个例子，下面的命令会使服务器监听 8080 端口：")]),s._v(" "),a("p",[s._v("我们需要打开配置文件 "),a("code",[s._v("config/settings.yml")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("application:\n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果你想要修改服务器监听的 IP，在端口之前输入新的。比如，为了监听所有服务器的公开 IP（这你运行 Vagrant 或想要向网络上的其它电脑展示你的成果时很有用），使用：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("application:\n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("修改之后需要重启服务。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"创建文章功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建文章功能"}},[this._v("#")]),this._v(" 创建文章功能")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"编写第一个接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写第一个接口"}},[this._v("#")]),this._v(" 编写第一个接口")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在 "),t("code",[this._v("apis")]),this._v(" 目录中创建 "),t("code",[this._v("article.go")]),this._v(" 文件")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" apis\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"github.com/gin-gonic/gin"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go-admin/models"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"net/http"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetArticleList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Context"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" res models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Response\n\tres"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world ！"')]),s._v("\n\n\tc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("StatusOK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReturnOK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go-admin\n    apis\n    config\n    database\n    docs\n    handler\n    models\n    pkg\n    router\n    statie\n    temp\n    template\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n    utils\n    main.go\n    sqlite3.db\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在 "),t("code",[this._v("go-admin/router/router.go")]),this._v(" 中，输入以下代码：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("gin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Engine "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    r "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":=")]),s._v(" gin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("New")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/articleList"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("apis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("GetArticleList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("go build\n\n./go-admin server -c"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("config/settings.dev.yml\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("404 page not found")]),this._v(" "),t("p",[this._v("如果你在这里得到了一个错误页面，检查一下你是不是正访问着http://localhost:8000/articleList 而不应该是 http://localhost:8000/。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("router 注册类型，我们比较常用的就是 "),a("code",[s._v("GET")]),s._v("、"),a("code",[s._v("POST")]),s._v("、"),a("code",[s._v("PUT")]),s._v("、"),a("code",[s._v("DELETE")]),s._v("等")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#path"}},[this._v("#")]),this._v(" path")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("path 也支持带参数的写法，例如 "),a("code",[s._v('r.GET("/articleList/:id",apis.GetArticleList)')]),s._v(", 这个时候会按照这 "),a("code",[s._v("/articleList/:id")]),s._v(" 进行匹配 "),a("code",[s._v(":id")]),s._v(" 可以是字符串，可以是数字等任意字符，当然也是可以限制的，这里我们不再展开。")])])}],!1,null,null,null);t.default=e.exports}}]);