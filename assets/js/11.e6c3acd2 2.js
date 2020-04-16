(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{210:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eslint-规范代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslint-规范代码"}},[t._v("#")]),t._v(" ESLint 规范代码")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://cn.eslint.org/docs/user-guide/configuring",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint"),a("OutboundLink")],1),t._v("是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。")]),t._v(" "),a("p",[t._v("JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("使用以下命令安装：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint --save-dev\n")])])]),a("p",[t._v("要集成在 Webpack 中时，还需安装 loader ：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint-loader --save-dev\n")])])]),a("p",[t._v("然后在 "),a("code",[t._v("webpack.config.js")]),t._v(" 配置文件中启用 loader ：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint options (if necessary)")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当和 Babel 转码器一起使用时，可以：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("其中，"),a("code",[t._v("options")]),t._v(" 选项"),a("a",{attrs:{href:"https://www.npmjs.com/package/eslint-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"eslintrc-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eslintrc-配置文件"}},[t._v("#")]),t._v(" .eslintrc 配置文件")]),t._v(" "),a("p",[t._v("ESlint 被设计为完全可配置的，这意味着你可以关闭每一个规则而只运行基本语法验证，或混合和匹配 ESLint 默认绑定的规则和你的自定义规则，以让 ESLint 更适合你的项目。有两种主要的方式来配置 ESLint：")]),t._v(" "),a("ol",[a("li",[t._v("Configuration Comments - 使用 JavaScript 注释把配置信息直接嵌入到一个代码源文件中。")]),t._v(" "),a("li",[t._v("Configuration Files - 使用 JavaScript、JSON 或者 YAML 文件为整个目录（处理你的主目录）和它的子目录指定配置信息。可以配置一个独立的 "),a("code",[t._v(".eslintrc.*")]),t._v(" 文件，或者直接在 "),a("code",[t._v("package.json")]),t._v(" 文件里的 "),a("code",[t._v("eslintConfig")]),t._v(" 字段指定配置，ESLint 会查找和自动读取它们，再者，你可以在命令行运行时指定一个任意的配置文件。")])]),t._v(" "),a("p",[t._v("如果你在你的主目录（通常 "),a("code",[t._v("~/")]),t._v("）有一个配置文件，ESLint 只有在无法找到其他配置文件时才使用它。")]),t._v(" "),a("p",[t._v("有很多信息可以配置：")]),t._v(" "),a("ul",[a("li",[t._v("Environments - 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。")]),t._v(" "),a("li",[t._v("Globals - 脚本在执行期间访问的额外的全局变量。")]),t._v(" "),a("li",[t._v("Rules - 启用的规则及其各自的错误级别。")])]),t._v(" "),a("h2",{attrs:{id:"常用配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[t._v("#")]),t._v(" 常用配置")]),t._v(" "),a("h3",{attrs:{id:"env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[t._v("#")]),t._v(" env")]),t._v(" "),a("p",[t._v("一个环境定义了一组预定义的全局变量，这决定了你可以使用的语法或者API。常用的环境包括：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("browser")]),t._v(" - 浏览器环境中的全局变量。")]),t._v(" "),a("li",[a("code",[t._v("node")]),t._v(" - Node.js 全局变量和 Node.js 作用域。")]),t._v(" "),a("li",[a("code",[t._v("es6")]),t._v(" - 启用除了 "),a("code",[t._v("modules")]),t._v(" 以外的所有 ECMAScript 6 特性（该选项会自动设置 "),a("code",[t._v("ecmaVersion")]),t._v(" 解析器选项为 6）。")]),t._v(" "),a("li",[a("code",[t._v("commonjs")]),t._v(" - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。")]),t._v(" "),a("li",[a("code",[t._v("amd")]),t._v(" - 将 "),a("code",[t._v("require()")]),t._v(" 和 "),a("code",[t._v("define()")]),t._v(" 定义为像 amd 一样的全局变量。")]),t._v(" "),a("li",[a("code",[t._v("mocha")]),t._v(" - 添加所有的 Mocha 测试全局变量。")]),t._v(" "),a("li",[a("code",[t._v("mongo")]),t._v(" - MongoDB 全局变量。\n这些环境并不是互斥的，所以你可以同时定义多个。")])]),t._v(" "),a("p",[t._v("要在你的 JavaScript 文件中使用注释来指定环境，格式如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-env node, mongo */")]),t._v("\n")])])]),a("p",[t._v("该设置启用了 Node.js 和 MongoDB 环境。")]),t._v(" "),a("p",[t._v("要在配置文件里指定环境，使用 env 关键字指定你想启用的环境，并设置它们为 true。例如，以下示例启用了 browser 和 Node.js 的环境：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[t._v("#")]),t._v(" rules")]),t._v(" "),a("p",[t._v("ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v('"off"')]),t._v(" 或 "),a("code",[t._v("0")]),t._v(" - 关闭规则")]),t._v(" "),a("li",[a("code",[t._v('"warn"')]),t._v(" 或 "),a("code",[t._v("1")]),t._v(" - 开启规则，使用警告级别的错误：warn (不会导致程序退出)")]),t._v(" "),a("li",[a("code",[t._v('"error"')]),t._v(" 或 "),a("code",[t._v("2")]),t._v(" - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)")])]),t._v(" "),a("p",[t._v("为了在文件注释里配置规则，使用以下格式的注释：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/* eslint eqeqeq: "off", curly: "error"*/')]),t._v("\n")])])]),a("p",[t._v("以上例子中，"),a("code",[t._v("eqeqeq")]),t._v(" 规则被关闭，"),a("code",[t._v("curly")]),t._v(" 规则被打开，定义为错误级别。")]),t._v(" "),a("p",[t._v("还可以使用 "),a("code",[t._v("rules")]),t._v(" 连同错误级别和任何你想使用的选项，在配置文件中进行规则配置。例如：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"eqeqeq"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"off"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"curly"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"quotes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"double"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("其中 "),a("code",[t._v('"quotes"')]),t._v(" 为引号的规则，被设置为双引号("),a("code",[t._v('"double"')]),t._v("）。")]),t._v(" "),a("p",[t._v("你可以使用行内规则禁用（Disabling Rules with Inline Comments），可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-enable */")]),t._v("\n")])])]),a("p",[t._v("你也可以对指定的规则启用或禁用警告：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-alert, no-console */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-enable no-alert, no-console */")]),t._v("\n\n")])])]),a("p",[t._v("如果在整个文件范围内禁止规则出现警告，将 "),a("code",[t._v("/* eslint-disable */")]),t._v(" 块注释放在文件顶部：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[t._v("#")]),t._v(" extends")]),t._v(" "),a("p",[t._v("值为 "),a("code",[t._v('"eslint:recommended"')]),t._v(" 的 "),a("code",[t._v("extends")]),t._v(" 属性启用一系列核心规则，这些规则报告一些常见问题，在 "),a("a",{attrs:{href:"https://cn.eslint.org/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("规则页面"),a("OutboundLink")],1),t._v(" 中被标记为 ✅ 。这个推荐的子集只能在 ESLint 主要版本进行更新。")]),t._v(" "),a("p",[t._v("如果你的配置集成了推荐的规则：在你升级到 ESLint 新的主版本之后，在你使用命令行的 "),a("code",[t._v("--fix")]),t._v(" 选项之前，检查一下报告的问题，这样你就知道一个新的可修复的推荐的规则将更改代码。")]),t._v(" "),a("h4",{attrs:{id:"extends-和-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extends-和-rules"}},[t._v("#")]),t._v(" extends 和 rules")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("一个配置文件可以从基础配置中继承已启用的规则。")]),t._v(" "),a("p",[a("code",[t._v("extends")]),t._v(" 属性值可以是：")]),t._v(" "),a("ul",[a("li",[t._v("在配置中指定的一个字符串")]),t._v(" "),a("li",[t._v("字符串数组：每个配置继承它前面的配置")]),t._v(" "),a("li",[t._v("ESLint 递归地进行扩展配置，所以一个基础的配置也可以有一个 "),a("code",[t._v("extends")]),t._v(" 属性。")])]),t._v(" "),a("p",[a("code",[t._v("rules")]),t._v(" 属性可以做下面的任何事情以扩展（或覆盖）规则：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("启用额外的规则")])]),t._v(" "),a("li",[a("p",[t._v("改变继承的规则级别而不改变它的选项：")]),t._v(" "),a("ul",[a("li",[t._v("基础配置："),a("code",[t._v('"eqeqeq": ["error", "allow-null"]')])]),t._v(" "),a("li",[t._v("派生的配置："),a("code",[t._v('"eqeqeq": "warn"')])]),t._v(" "),a("li",[t._v("最后生成的配置："),a("code",[t._v('"eqeqeq": ["warn", "allow-null"]')])])])]),t._v(" "),a("li",[a("p",[t._v("覆盖基础配置中的规则的选项")]),t._v(" "),a("ul",[a("li",[t._v("基础配置："),a("code",[t._v('"quotes": ["error", "single", "avoid-escape"]')])]),t._v(" "),a("li",[t._v("派生的配置："),a("code",[t._v('"quotes": ["error", "single"]')])]),t._v(" "),a("li",[t._v("最后生成的配置："),a("code",[t._v('"quotes": ["error", "single"]')])])])])]),t._v(" "),a("h3",{attrs:{id:"parseroptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parseroptions"}},[t._v("#")]),t._v(" parserOptions")]),t._v(" "),a("p",[t._v("ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。")]),t._v(" "),a("p",[t._v("同样的，支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 "),a("code",[t._v("Set")]),t._v(" 等新类型）。使用 "),a("code",[t._v('{ "parserOptions": { "ecmaVersion": 6 } }')]),t._v(" 来启用 ES6 语法支持；要额外支持新的 "),a("code",[t._v("ES6")]),t._v(" 全局变量，使用 "),a("code",[t._v('{ "env":{ "es6": true } }')]),t._v("(这个设置会同时自动启用 ES6 语法支持)。")]),t._v(" "),a("p",[t._v("解析器选项可以在 "),a("code",[t._v(".eslintrc.*")]),t._v(" 文件使用 "),a("code",[t._v("parserOptions")]),t._v(" 属性设置。可用的选项有：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ecmaVersion")]),t._v(" - 默认设置为3，5（默认）， 你可以使用 6、7、8 或 9 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）")]),t._v(" "),a("li",[a("code",[t._v("sourceType")]),t._v(' - 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。')]),t._v(" "),a("li",[a("code",[t._v("ecmaFeatures")]),t._v(" - 这是个对象，表示你想使用的额外的语言特性:")]),t._v(" "),a("li",[a("code",[t._v("globalReturn")]),t._v(" - 允许在全局作用域下使用 return 语句")]),t._v(" "),a("li",[a("code",[t._v("impliedStrict")]),t._v(" - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)")]),t._v(" "),a("li",[a("code",[t._v("jsx")]),t._v(" - 启用 JSX")])]),t._v(" "),a("p",[t._v("请注意，对 JSX 语法的支持不用于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，我们推荐你使用 "),a("a",{attrs:{href:"https://github.com/yannickcr/eslint-plugin-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-react"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"一个例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个例子"}},[t._v("#")]),t._v(" 一个例子")]),t._v(" "),a("p",[t._v("以下是一个启用了常用配置的配置文件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parserOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ecmaVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持 ES6 语法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sourceType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用模块")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 继承推荐规则")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 扩展规则")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"semi"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"always"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"quotes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"single"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单引号")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义代码运行环境")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"browser"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"node"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用-jsx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-jsx"}},[t._v("#")]),t._v(" 使用 JSX")]),t._v(" "),a("p",[t._v("在使用 Vue 进行组件开发时，我个人更倾向在 Webpack 构建过程中使用 ES Module (基于构建工具使用) 的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/installation.html#%E5%AF%B9%E4%B8%8D%E5%90%8C%E6%9E%84%E5%BB%BA%E7%89%88%E6%9C%AC%E7%9A%84%E8%A7%A3%E9%87%8A",target:"_blank",rel:"noopener noreferrer"}},[t._v("运行时版本"),a("OutboundLink")],1),t._v("，这样可以减少 30% 的代码体积，但是这就不支持 "),a("code",[t._v("template")]),t._v(" 模版编译而要使用 "),a("code",[t._v("render")]),t._v(" 函数了。对比 "),a("code",[t._v("render")]),t._v(" 函数，"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/render-function.html#JSX",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSX"),a("OutboundLink")],1),t._v(" 更为简洁。 ESLint 并不支持 JSX 的语法检查，但可以通过安装特定插件来实现。")]),t._v(" "),a("p",[t._v("这里我使用了 "),a("a",{attrs:{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-jsx-a11y"),a("OutboundLink")],1),t._v(" JSX 语法检查插件来支持。")]),t._v(" "),a("p",[t._v("安装：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint-plugin-jsx-a11y --save-dev\n")])])]),a("p",[t._v("修改 "),a("code",[t._v(".eslintrc")]),t._v(" 配置文件，添加插件：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jsx-a11y"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("增加继承规则：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:jsx-a11y/recommended"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("基于需要修改特定规则：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsx-a11y/rule-name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("该插件更多配置项"),a("a",{attrs:{href:"https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=n.exports}}]);