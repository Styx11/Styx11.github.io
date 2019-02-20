(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{184:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),a("OutboundLink")],1),t._v(" 是一个广泛使用的 ES6 转码器，可以将 ES6 代码转为 ES5 代码，从而在现有环境执行。这意味着，你可以用 ES6 的方式编写程序，又不用担心现有环境是否支持。下面是一个例子。")]),t._v(" "),t._m(1),a("p",[t._v("上面的原始代码用了箭头函数，Babel 将其转为普通函数，就能在不支持箭头函数的 JavaScript 环境执行了。")]),t._v(" "),a("p",[t._v("下面的命令在项目目录中，安装 Babel。")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("该文件用来设置转码规则和插件，基本格式如下。")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("它的安装命令如下。")]),t._v(" "),t._m(13),a("p",[t._v("基本用法如下。")]),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("安装命令如下。")]),t._v(" "),t._m(24),a("p",[t._v("然后，在脚本头部，加入如下一行代码。")]),t._v(" "),t._m(25),a("p",[t._v("Babel 默认不转码的 API 非常多，详细清单可以查看"),a("code",[t._v("babel-plugin-transform-runtime")]),t._v("模块的"),a("a",{attrs:{href:"https://github.com/babel/babel/blob/master/packages/babel-plugin-transform-runtime/src/definitions.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("definitions.js"),a("OutboundLink")],1),t._v("文件。")]),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),a("p",[t._v("配置对象"),a("code",[t._v("options")]),t._v("，可以参看"),a("a",{attrs:{href:"http://babeljs.io/docs/usage/options/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1),t._v("。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),t._m(33),t._m(34),t._v(" "),a("p",[t._v("Babel 也可以用于浏览器环境，使用"),a("a",{attrs:{href:"https://babeljs.io/docs/en/next/babel-standalone.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("@babel/standalone"),a("OutboundLink")],1),t._v("模块提供的浏览器版本，将其插入网页。")]),t._v(" "),t._m(35),t._m(36),t._v(" "),a("p",[t._v("Babel 提供一个"),a("a",{attrs:{href:"https://babeljs.io/repl/",target:"_blank",rel:"noopener noreferrer"}},[t._v("REPL 在线编译器"),a("OutboundLink")],1),t._v("，可以在线将 ES6 代码转为 ES5 代码。转换后的代码，可以直接作为 ES5 代码插入网页运行。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"babel-转码器的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-转码器的使用","aria-hidden":"true"}},[this._v("#")]),this._v(" Babel 转码器的使用")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转码前")]),t._v("\ninput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 转码后")]),t._v("\ninput"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" item "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install --save-dev @babel/core\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置文件-babelrc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置文件-babelrc","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置文件"),s("code",[this._v(".babelrc")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Babel 的配置文件是"),s("code",[this._v(".babelrc")]),this._v("，存放在项目的根目录下。使用 Babel 的第一步，就是配置这个文件。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("presets")]),this._v("字段设定转码规则，官方提供以下的规则集，你可以根据需要安装。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# 最新转码规则\n$ npm install --save-dev @babel/preset-env\n\n# react 转码规则\n$ npm install --save-dev @babel/preset-react\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后，将这些规则加入"),s("code",[this._v(".babelrc")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/preset-react"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意，以下所有 Babel 工具和模块的使用，都必须先写好"),s("code",[this._v(".babelrc")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"命令行转码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行转码","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行转码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Babel 提供命令行工具"),s("code",[this._v("@babel/cli")]),this._v("，用于命令行转码。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install --save-dev @babel/cli\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("# 转码结果输出到标准输出\n$ npx babel example.js\n\n# 转码结果写入一个文件\n# --out-file 或 -o 参数指定输出文件\n$ npx babel example.js --out-file compiled.js\n# 或者\n$ npx babel example.js -o compiled.js\n\n# 整个目录转码\n# --out-dir 或 -d 参数指定输出目录\n$ npx babel src --out-dir lib\n# 或者\n$ npx babel src -d lib\n\n# -s 参数生成source map文件\n$ npx babel src -d lib -s\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel-register-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-register-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" @babel/register 模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[a("code",[t._v("@babel/register")]),t._v("模块改写"),a("code",[t._v("require")]),t._v("命令，为它加上一个钩子。此后，每当使用"),a("code",[t._v("require")]),t._v("加载"),a("code",[t._v(".js")]),t._v("、"),a("code",[t._v(".jsx")]),t._v("、"),a("code",[t._v(".es")]),t._v("和"),a("code",[t._v(".es6")]),t._v("后缀名的文件，就会先用 Babel 进行转码。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install --save-dev @babel/register\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("使用时，必须首先加载"),s("code",[this._v("@babel/register")]),this._v("。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/register'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./es6.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("需要注意的是，"),s("code",[this._v("@babel/register")]),this._v("只会对"),s("code",[this._v("require")]),this._v("命令加载的文件转码，而不会对当前文件转码。另外，由于它是实时转码，所以只适合在开发环境使用。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel-polyfill-模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill-模块","aria-hidden":"true"}},[this._v("#")]),this._v(" @babel/polyfill 模块")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如"),a("code",[t._v("Iterator")]),t._v("、"),a("code",[t._v("Generator")]),t._v("、"),a("code",[t._v("Set")]),t._v("、"),a("code",[t._v("Map")]),t._v("、"),a("code",[t._v("Proxy")]),t._v("、"),a("code",[t._v("Reflect")]),t._v("、"),a("code",[t._v("Symbol")]),t._v("、"),a("code",[t._v("Promise")]),t._v("等全局对象，以及一些定义在全局对象上的方法（比如"),a("code",[t._v("Object.assign")]),t._v("）都不会转码。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("举例来说，ES6 在"),s("code",[this._v("Array")]),this._v("对象上新增了"),s("code",[this._v("Array.from")]),this._v("方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用"),s("code",[this._v("babel-polyfill")]),this._v("，为当前环境提供一个垫片。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install --save-dev @babel/polyfill\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/polyfill'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/polyfill'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"babel-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#babel-api","aria-hidden":"true"}},[this._v("#")]),this._v(" babel API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果某些代码需要调用 Babel 的 API 进行转码，就要使用"),s("code",[this._v("@babel/core")]),this._v("模块。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" babel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/core'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串转码")]),t._v("\nbabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code();'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { code, map, ast }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件转码（异步）")]),t._v("\nbabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformFile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filename.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { code, map, ast }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件转码（同步）")]),t._v("\nbabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformFileSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'filename.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { code, map, ast }")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Babel AST转码")]),t._v("\nbabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transformFromAst")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => { code, map, ast }")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"集成于-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集成于-webpack","aria-hidden":"true"}},[this._v("#")]),this._v(" 集成于 Webpack")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("除去 "),a("code",[t._v('"babel-preset-env"')]),t._v(" 我们还需安装 "),a("code",[t._v("babel-loader")]),t._v(" "),a("code",[t._v("babel-core")]),t._v("。其中 "),a("code",[t._v("babel-loader@8.x")]),t._v(" 及以上版本需要 "),a("code",[t._v("babel-core@7.x")]),t._v("，但目前 babel-core 还处于 6.x 版本，所以只能安装 7.x 版本的 babel-loader 。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("$ npm install --save-dev babel-loader@7.x babel-core@6.x babel-preset-env\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("配置过 "),s("code",[this._v(".babelrc")]),this._v(" 后在 "),s("code",[this._v("webpack.config.js")]),this._v(" 中配置 loader ：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.js$/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/node_modules/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babel-loader"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"浏览器环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浏览器环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器环境")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@babel/standalone/babel.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/babel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Your ES6 code")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("注意，网页实时将 ES6 代码转为 ES5，"),s("strong",[this._v("对性能会有影响")]),this._v("。生产环境需要加载已经转码完成的脚本。")])}],!1,null,null,null);s.default=n.exports}}]);