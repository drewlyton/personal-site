(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{251:function(t,e,n){var content=n(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(54).default)("8f743f7e",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({props:{story:{type:Object,required:!0}}}),c=(n(253),n(15)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item relative px-2 py-4 flex-grow"},[n("nuxt-link",{attrs:{to:{name:"story-slug",params:{slug:t.story.slug}}}},[n("div",{staticClass:"mb-4 rounded-2xl overflow-hidden"},[n("img",{attrs:{src:t.story.featuredImage.url,alt:t.story.title+" featured image"}})]),t._v(" "),n("h4",{staticClass:"leading-none header-font uppercase"},[t._v("\n      "+t._s(t.story.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"text-gray-500 mb-2 text-xs dark:text-gray-300"},[n("em",[t._v(t._s(new Date(t.story.createdAt).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})))])]),t._v(" "),n("p",{staticClass:"text-black dark:text-white"},[t._v(t._s(t.story.description))])])],1)}),[],!1,null,"cccc6472",null);e.default=component.exports},253:function(t,e,n){"use strict";n(251)},254:function(t,e,n){var r=n(53)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.post-item[data-v-cccc6472]{\n  flex-basis:28ch\n}\n@media screen and (min-width:600px){\n.post-item[data-v-cccc6472]:last-child:not(:nth-child(2n)){\n    max-width:50%\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r}}]);