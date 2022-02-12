(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{222:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("这部分教程从 教程第 1 步 结尾的地方继续讲起。我们将建立数据库，创建您的第一个模型。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("从哪里获得帮助：")]),t._v(" "),a("p",[t._v("如果你在阅读本教程的过程中有任何疑问，可以前往"),a("a",{attrs:{href:"https://github.com/go-admin-team/go-admin/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交建议"),a("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),a("p",[t._v("修改数据库配置信息；\n代码生成配置；\n1、 gen > dbname 此配置可以根据数据库名称来获取该数据库下所有 table，进行代码生成；\n2、 gen > frontpath 代码生成是使用前端代码存放位置，需要指定到 src 文件夹，相对路径;代码要求 go-admin 和 go-admin-ui 必须在同一级目录下")]),t._v(" "),a("p",[t._v("当前我们先通过 sql 脚本的方式来创建数据库表信息。"),a("router-link",{attrs:{to:"/guide/db.html"}},[t._v("表结构定义需要查看")])],1),t._v(" "),t._m(4),a("p",[t._v("数据库表创建以后，启动项目")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("打开以上程序画面，程序左侧有两个菜单，")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("确定后，表结构进存储到了代码生成工具里，此时我们需要对导入数据进行编辑。")]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("编辑红框里边的选项，之后点击保存。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("可以在预览处看到工具生成的代码。")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),a("p",[t._v("重启前端服务，接下来开始处理页面显示。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("按照一下命令直接操作即可；")]),t._v(" "),t._m(27),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/setrole1v1.0.0.png",height:"200px"}}),t._v(" "),t._m(32),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/setrole2v1.0.0.png",height:"400px"}}),t._v(" "),t._m(33),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/menu1v1.0.0.png",height:"300px"}}),t._v(" "),t._m(34),t._v(" "),a("p",[t._v("这个时候我们的内容管理已经添加完成了，里边已经具备了增删改查功能。")]),t._v(" "),t._m(35),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/article1v1.0.0.png",height:"300px"}}),t._v(" "),t._m(36),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/article2v1.0.0.png",height:"300px"}}),t._v(" "),t._m(37),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/article3v1.0.0.png",height:"300px"}}),t._v(" "),t._m(38),t._v(" "),a("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"https://gitee.com/mydearzwj/image/raw/master/img/article4v1.0.0.png",height:"300px"}}),t._v(" "),t._m(39),t._v(" "),a("p",[t._v("OK！，内容到这里已经介绍了开始第一个 go-admin 应用的全部过程，虽然图片居多，主要也是编码内容比较少，希望大家能够掌握，如在使用中遇到了什么问题都可以在 qq 群或者微信群中沟通交流！谢谢！")]),t._v(" "),a("p",[t._v("如果需要了解更进一步的 go-admin 相关内容，请前往"),a("router-link",{attrs:{to:"/guide/advanced/api.html"}},[t._v("进阶")]),t._v(" 继续查看！")],1),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("从哪里获得帮助：")]),t._v(" "),a("p",[t._v("如果你在阅读本教程的过程中有任何疑问，可以前往"),a("a",{attrs:{href:"https://github.com/go-admin-team/go-admin/issues/new",target:"_blank",rel:"noopener noreferrer"}},[t._v("提交建议"),a("OutboundLink")],1),t._v("。")])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"编写-go-admin-应用-第-2-步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写-go-admin-应用-第-2-步"}},[this._v("#")]),this._v(" 编写 go-admin 应用,第 2 步")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"数据库配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[this._v("#")]),this._v(" 数据库配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在，打开 "),s("code",[this._v("config/settings.yml")]),this._v(" 。这是个包含了 "),s("code",[this._v("go-admin")]),this._v(" 项目的配置信息。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("  database:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库类型 mysql，sqlite3， postgres")]),t._v("\n    driver: mysql\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 数据库连接字符串 mysql 缺省信息 charset=utf8&parseTime=True&loc=Local&timeout=1000ms")]),t._v("\n    source: user:password@tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:3306"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("/dbname?charset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("parseTime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("True"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("loc")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1000ms\n  gen:\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码生成读取的数据库名称")]),t._v("\n    dbname: dbname\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 代码生成是使用前端代码存放位置，需要指定到src文件夹，相对路径")]),t._v("\n    frontpath: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/go-admin-ui/src\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("article"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'编码'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'标题'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("author"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'作者'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'内容'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'状态'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("publish_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发布时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("created_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("updated_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("deleted_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("create_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("update_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("idx_article_deleted_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("deleted_at"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文章'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码生成"}},[this._v("#")]),this._v(" 代码生成")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("启动"),s("code",[this._v("go-admin")]),this._v(" ，进入系统")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/dashboradv1.0.0.png",height:"500px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("系统管理")]),this._v(" "),s("li",[this._v("系统工具")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/genv1.0.0.png",height:"500px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"表结构导入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#表结构导入"}},[this._v("#")]),this._v(" 表结构导入")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在我们打开系统工具，进入 "),s("code",[this._v("代码生成")]),this._v(" ，下边的画面请点击"),s("code",[this._v("导入")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("这里的导入是要将我们刚刚创建的表导入到系统中，这样我们就可以根据表来生成代码了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/genimport1v1.0.0.png",height:"400px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("选择刚才创建的 "),s("code",[this._v("article")]),this._v(" 并点击 "),s("code",[this._v("确认")]),this._v(" 按钮，将表结构导入系统。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/genimport2v1.0.0.png",height:"400px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"编辑模板字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑模板字段"}},[this._v("#")]),this._v(" 编辑模板字段")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/genimport3v1.1.0.png",height:"200px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/genimport4v1.0.0.png",height:"400px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"预览代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览代码"}},[this._v("#")]),this._v(" 预览代码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{staticClass:"no-margin",staticStyle:{margin:"0 auto","box-shadow":"5px 5px 5px #888888"},attrs:{src:"\nhttps://gitee.com/mydearzwj/image/raw/master/img/genimport5v1.0.0.png",height:"400px"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"生成代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成代码"}},[this._v("#")]),this._v(" 生成代码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("到这里我们的第一个程序进行的很顺利，下一步会更顺利， 点击"),s("code",[this._v("代码生成")]),this._v("，此时 前后端代码都会进入自己该到的位置，另外需要注意一点：如果需要带权限的代码，那就选择"),s("code",[this._v("代码生成【带权限】")]),this._v("，他们的区别就是路由注册时，一个添加的认证中间件，一个没有；")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置系统菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置系统菜单"}},[this._v("#")]),this._v(" 配置系统菜单")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("返回列表页，点击"),s("code",[this._v("生成配置")]),this._v("；菜单的配置直接进入数据库中；是不是很简单啊！")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置系统菜单绑定接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置系统菜单绑定接口"}},[this._v("#")]),this._v(" 配置系统菜单绑定接口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("首先需要将新增的 api 自动托管到接口管理中，需要重新"),s("code",[this._v("编译并启动")]),this._v("项目；")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ go-admin server -c=config/settings.dev.yml -a=false\n")])]),this._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[this._v("1")]),s("br")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("server")]),t._v(" 命令中我们新追加了"),a("code",[t._v("-a")]),t._v("参数，默认情况下为"),a("code",[t._v("false")]),t._v(",当设置为"),a("code",[t._v("true")]),t._v("时，就会对当前程序所有的 api 进行检查并创建；")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"2"}},[s("li",[this._v("进入接口管理，编辑新追加的接口信息，")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"配置角色权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置角色权限"}},[this._v("#")]),this._v(" 配置角色权限")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("首先进入角色管理，打开角色列表。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("选择超级管理员，点击修改，勾选我们刚才添加的菜单以及 api 接口，保存。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("刷新页面，刚刚授权的菜单就出来了。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"操作内容管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作内容管理"}},[this._v("#")]),this._v(" 操作内容管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("列表")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("新增")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("修改")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("删除")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"结束语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[this._v("#")]),this._v(" 结束语")])}],!1,null,null,null);s.default=n.exports}}]);