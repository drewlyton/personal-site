(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9,12],{249:function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("484a61e8",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{story:{type:Object,required:!0}}}),o=(r(251),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item relative px-2 py-4 flex-grow"},[r("nuxt-link",{attrs:{to:{name:"story-slug",params:{slug:t.story.slug}}}},[r("div",{staticClass:"mb-4 rounded-2xl overflow-hidden relative",class:{featured:t.story.highlighted}},[r("img",{staticClass:"w-full",attrs:{src:t.story.featuredImage.url,alt:t.story.title+" featured image"}})]),t._v(" "),r("h4",{staticClass:"leading-none header-font uppercase"},[t._v("\n      "+t._s(t.story.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"text-gray-500 mb-2 text-xs dark:text-gray-300"},[r("em",[t._v(t._s(new Date(t.story.publishedAt).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})))])]),t._v(" "),r("p",{staticClass:"text-black dark:text-white"},[t._v(t._s(t.story.description))])])],1)}),[],!1,null,"858c92dc",null);e.default=component.exports},251:function(t,e,r){"use strict";r(249)},252:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,'.post-item[data-v-858c92dc]{flex-basis:28ch}.featured[data-v-858c92dc]:after{content:"featured";position:absolute;width:110px;height:25px;background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));--tw-gradient-from:#dc2626;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(220 38 38 / 0));--tw-gradient-to:#ca8a04}.dark .featured[data-v-858c92dc]:after{--tw-gradient-from:#2563eb;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(37 99 235 / 0));--tw-gradient-to:#4f46e5}.featured[data-v-858c92dc]:after{top:1.15rem;left:-1.5rem;text-align:center;font-size:12px;font-family:sans-serif;text-transform:uppercase;font-weight:700;color:#fff;line-height:27px;transform:rotate(-45deg)}@media screen and (min-width:600px){.post-item[data-v-858c92dc]:last-child:not(:nth-child(2n)){max-width:50%}}',""]),n.locals={},t.exports=n},257:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(253),l=n.a.extend({props:{noLink:{type:Boolean,default:!1}},computed:{link:function(){return this.noLink?null:"#motion"}},mounted:function(){o.a.timeline({repeat:-1,yoyo:!0}).to("#left-puppet, #motion-title",{y:2,ease:"power1.inOut"}).to("#right-puppet",{y:5,ease:"power1.inOut"},"<").to("#designer-title",{y:-2,ease:"power1.inOut"},"<").timeScale(.8)}}),d=r(15),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative inline-block"},[r("div",{staticClass:"absolute -top-10 left-4"},[r("svg",{attrs:{viewBox:"0 0 192 53",stroke:"currentColor",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"12rem",height:"100%"}},[r("g",{attrs:{id:"left-puppet"}},[r("path",{attrs:{d:"M26.6523 13.4052L2.99976 50.6451M47.1262 12.3717L71.4883 48.6895M46.6821 23.4081L52.4368 48.1494M28.1552 23.3421L30.6568 33.2286"}}),t._v(" "),r("rect",{attrs:{x:"23.3107",y:"22.2926",width:"28.6529",height:"6.19523",transform:"rotate(-30.3205 23.3107 22.2926)"}}),t._v(" "),r("rect",{attrs:{x:"25.0996",y:"8.7804",width:"28.653",height:"6.19523",transform:"rotate(25.934 25.0996 8.7804)"}})]),t._v(" "),r("g",{attrs:{id:"right-puppet",transform:"translate(0, 7)"}},[r("path",{attrs:{d:"M146.5 7.35501L122.847 44.5949M166.974 6.32143L191.336 42.6393M166.529 17.3579L172.284 42.0992M148.003 17.2919L146.09 38.9158"}}),t._v(" "),r("rect",{attrs:{x:"143.158",y:"16.2424",width:"28.6529",height:"6.19523",transform:"rotate(-30.3205 143.158 16.2424)"}}),t._v(" "),r("rect",{attrs:{x:"144.947",y:"2.73016",width:"28.653",height:"6.19523",transform:"rotate(25.934 144.947 2.73016)"}})])])]),t._v(" "),r("h2",{staticClass:"leading-0.75"},[r("a",{class:[t.noLink?"":"wave-border","bottom inline-block"],attrs:{href:t.link}},[r("div",{staticClass:"inline-block",attrs:{id:"motion-title"}},[t._v("motion")]),t._v(" "),r("div",{staticClass:"inline-block",attrs:{id:"designer-title"}},[t._v("designer")])])])])}),[],!1,null,"55b05ade",null);e.default=component.exports},269:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{stories:{type:Array}}}),o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"info-section",attrs:{id:"motion"}},[r("div",{staticClass:"tilted mb-8"},[r("div",{staticClass:"space-y-1"},[r("h5",{staticClass:"uppercase"},[t._v("I'm a...")]),t._v(" "),r("div",{staticClass:"ml-10"},[r("motion-ani",{attrs:{"no-link":!0}})],1)])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap items-start"},t._l(t.stories,(function(t){return r("story",{key:t.slug,attrs:{story:t}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("\n      Animation is my favorite way of combining software engineering and video\n      production. I love bringing designs to life through motion.\n    ")]),t._v(" "),r("p",[t._v("Here is some of my recent work:")])])}],!1,null,"46a5fdfa",null);e.default=component.exports;installComponents(component,{MotionAni:r(257).default,Story:r(250).default})}}]);