(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{254:function(t,e,r){"use strict";function n(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}r.d(e,"a",(function(){return n}))},263:function(t,e,r){var content=r(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("717412fa",content,!0,{sourceMap:!1})},274:function(t,e,r){"use strict";r(263)},275:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,".home-enter-active,.home-leave-active{transition:opacity .5s}.home-enter,.home-leave-active{opacity:0}",""]),n.locals={},t.exports=n},281:function(t,e,r){"use strict";r.r(e);var n,o=r(9),l=(r(34),r(54),r(53),r(0)),c=r(254),d=r(129),m=Object(d.gql)(n||(n=Object(c.a)(["\n  query GetStory($slug: String) {\n    story(where: { slug: $slug }) {\n      id\n      title\n      publishedAt\n      content {\n        html\n      }\n      featuredImage {\n        url\n      }\n      author {\n        id\n        bio\n        name\n        picture {\n          id\n          url\n        }\n      }\n      videoUrl\n      portfolioUrl\n    }\n  }\n"]))),v=l.a.extend({transition:"home",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$graphcms,n=t.params,o=n.slug,e.next=4,r.request(m,{slug:o});case 4:return l=e.sent,c=l.story,console.log(c.videoUrl),e.abrupt("return",{story:c});case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.story.title,meta:[{hid:"description",name:"description",content:this.story.description},{hid:"og:image",property:"og:image",content:this.story.featuredImage.url}]}}}),f=(r(274),r(15)),component=Object(f.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"top-section max-w-prose mx-auto"},[r("div",{staticClass:"tilted mb-8"},[r("div",{staticClass:"space-y-1"},[r("nuxt-link",{staticClass:"text-gray-500 dark:text-gray-300",attrs:{to:"/stories"}},[r("small",{staticClass:"header-font uppercase"},[r("i",{staticClass:"bi bi-arrow-left"}),t._v(" All Stories\n          ")])]),t._v(" "),r("h2",{staticClass:"uppercase"},[t._v(t._s(t.story.title))])],1)]),t._v(" "),t.story.videoUrl?r("div",{staticClass:"w-full mb-8"},[r("iframe",{staticClass:"w-full aspect-video",attrs:{src:t.story.videoUrl,title:"YouTube video player",frameborder:"0",allowfullscreen:""}})]):t._e(),t._v(" "),r("div",{staticClass:"\n        mb-6\n        story-content\n        prose\n        prose-h2:text-4xl\n        prose-h3:text-3xl\n        prose-h4:text-2xl\n        prose-headings:uppercase\n        md:prose-lg\n        lg:prose-xl\n        dark:prose-invert\n      ",domProps:{innerHTML:t._s(t.story.content.html)}}),t._v(" "),r("div",[r("h5",{staticClass:"header-font mb-4"},[t._v("Best,")]),t._v(" "),r("div",{staticClass:"flex items-start space-x-4"},[r("div",[r("img",{attrs:{src:t.story.author.picture.url,alt:t.story.author.name,width:"68px"}})]),t._v(" "),r("div",{staticClass:"flex flex-col mb-6"},[r("h5",{staticClass:"header-font uppercase leading-none mt-1"},[t._v("\n            "+t._s(t.story.author.name)+"\n          ")]),t._v(" "),r("small",{staticClass:"text-gray-500 mb-2 text-xs dark:text-gray-300"},[r("em",[t._v(t._s(new Date(t.story.publishedAt).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})))])]),t._v(" "),r("p",{staticClass:"text-gray-600 text-sm dark:text-gray-100"},[t._v("\n            "+t._s(t.story.author.bio)+"\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);