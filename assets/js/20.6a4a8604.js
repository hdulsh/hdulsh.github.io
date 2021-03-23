(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{349:function(t,s,a){"use strict";a.r(s);var r=a(3),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://resource.limeili.co/abstract/abstract%20(53).jpg",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"什么是bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是bfc"}},[t._v("#")]),t._v(" 什么是BFC")]),t._v(" "),a("p",[t._v('Formatting context 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。Block formatting context直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。通俗地讲，BFC是一个容器，用于管理块级元素。'),a("br"),t._v(" "),a("strong",[t._v("用于决定盒子的布局及浮动相互影响范围的一个区域")]),a("br"),t._v(" "),a("code",[t._v("BFC的范围")]),t._v(":包含创建该上下文元素的所有子元素，但不包括创建新BFC的子元素")]),t._v(" "),a("h2",{attrs:{id:"如何创建bfc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何创建bfc"}},[t._v("#")]),t._v(" 如何创建BFC")]),t._v(" "),a("ol",[a("li",[t._v("float不为none")]),t._v(" "),a("li",[t._v("position为absolute或fixed")]),t._v(" "),a("li",[t._v("display 为table-cell|table-caption|inline-block|inline-flex|"),a("strong",[t._v("flex")])]),t._v(" "),a("li",[t._v("overflow为 hidden|auto|scroll")]),t._v(" "),a("li",[t._v("根元素")])]),t._v(" "),a("h2",{attrs:{id:"bfc特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bfc特性"}},[t._v("#")]),t._v(" BFC特性")]),t._v(" "),a("ol",[a("li",[t._v("内部的盒子会在垂直方向，一个接一个地排列(即块级元素独占一行)")]),t._v(" "),a("li",[t._v("同一个BFC中垂直方向上边距重叠")]),t._v(" "),a("li",[t._v("每个元素的margin-box左边与border-box左边相接触")]),t._v(" "),a("li",[t._v("BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。")]),t._v(" "),a("li",[t._v("计算BFC的高度时，浮动元素也参与计算")]),t._v(" "),a("li",[t._v("浮动盒区域不会叠加在BFC上")])]),t._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("ol",[a("li",[t._v("防止边距重叠")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wrap"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("BFC 可以包含浮动的元素（清除浮动）\n正常情况下，浮动的元素会脱离普通文档流，使父元素高度坍塌。即外层的div会无法包含内部浮动的div。")])]),t._v(" "),a("p",[t._v("但如果我们触发外部容器的BFC，根据BFC规范中的第4条：计算BFC的高度时，浮动元素也参与计算，那么外部div容器就可以包裹着浮动元素。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("自适应两栏布局")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"left"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"right"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nbackground"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nheight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfloat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nbackground"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("pink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nheight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v("px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*添加overflow:hidden，触发元素BFC*/")]),t._v("\noverflow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);