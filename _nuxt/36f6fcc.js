(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,12],{249:function(t,e,r){var content=r(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("484a61e8",content,!0,{sourceMap:!1})},250:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{story:{type:Object,required:!0}}}),o=(r(251),r(15)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-item relative px-2 py-4 flex-grow"},[r("nuxt-link",{attrs:{to:{name:"story-slug",params:{slug:t.story.slug}}}},[r("div",{staticClass:"mb-4 rounded-2xl overflow-hidden relative",class:{featured:t.story.highlighted}},[r("img",{staticClass:"w-full",attrs:{src:t.story.featuredImage.url,alt:t.story.title+" featured image"}})]),t._v(" "),r("h4",{staticClass:"leading-none header-font uppercase"},[t._v("\n      "+t._s(t.story.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"text-gray-500 mb-2 text-xs dark:text-gray-300"},[r("em",[t._v(t._s(new Date(t.story.publishedAt).toLocaleString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"})))])]),t._v(" "),r("p",{staticClass:"text-black dark:text-white"},[t._v(t._s(t.story.description))])])],1)}),[],!1,null,"858c92dc",null);e.default=component.exports},251:function(t,e,r){"use strict";r(249)},252:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,'.post-item[data-v-858c92dc]{flex-basis:28ch}.featured[data-v-858c92dc]:after{content:"featured";position:absolute;width:110px;height:25px;background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));--tw-gradient-from:#dc2626;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(220 38 38 / 0));--tw-gradient-to:#ca8a04}.dark .featured[data-v-858c92dc]:after{--tw-gradient-from:#2563eb;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgb(37 99 235 / 0));--tw-gradient-to:#4f46e5}.featured[data-v-858c92dc]:after{top:1.15rem;left:-1.5rem;text-align:center;font-size:12px;font-family:sans-serif;text-transform:uppercase;font-weight:700;color:#fff;line-height:27px;transform:rotate(-45deg)}@media screen and (min-width:600px){.post-item[data-v-858c92dc]:last-child:not(:nth-child(2n)){max-width:50%}}',""]),n.locals={},t.exports=n},258:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(253),l=n.a.extend({props:{noLink:{type:Boolean,default:!1}},computed:{link:function(){return this.noLink?null:"#life"}},mounted:function(){var t=.47;o.a.timeline({repeat:-1,yoyo:!0}).to("#top-mont",{x:-10*t,ease:"power1.inOut",duration:2}).to("#middle-mont",{x:5.64,ease:"power1.inOut",duration:2},"<").to("#bottom-mont",{x:19.27,ease:"power1.inOut",duration:2},"<").timeScale(.5)}}),d=r(15),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative inline-block"},[r("div",{staticClass:"absolute -right-13 -top-11"},[r("svg",{attrs:{width:"15rem",height:"100%",viewBox:"0 0 503.11 98.22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{id:"top-mont",d:"M357.86,43.84c-8.41,12.72,21.13,15.88,31.3,26,28.14,11.51-17.3,1.26-31.84-2.15-20-10-12.71-3.71-12.55,6.06-23.57-3-60.41-48.22-56.42-20.9C266,50.64,269,17.18,257.87,32.21c-6.05-34.29-46-5.64-53,9.25,0,0,0,0,0,.08-3.21-1-8.84-2.89-13.13-4.46l.3-.15c20.87-10.75,32.37-28.74,60.28-35,36.66,4.57,72.48,44.34,101.32,32.87,16.36-.24,23,6.76,32.45,11.31,5.08,3.77,15.21,5,21.9,7.73,4.05,4.61,12.73,7.53,20.54,10.76,9,4.77,20.4,7.13,33.09,9.22,12.9,5.94,26.76,11.6,39.06,17.71C488,90.07,477.11,87.14,466,84.28,396.4,73.82,404.05,57.34,357.86,43.84Z"}}),t._v(" "),r("path",{attrs:{id:"middle-mont",d:"M279.65,89.09C251.14,83.5,227,76.6,207.79,66c-24.27-2-25.55-13.32-36-21.3-26.24,12.14-29.2,13.3-20.67,15.77l-13.44-3.62c3-10.74,23.44-16.71,38.85-24.31,4.86.08,9.94,3.25,15.11,4.51a0,0,0,0,0,0,0c4.29,1.57,9.92,3.41,13.13,4.46h.08l.37,0c17.52,2.23,21.86,11,37.31,13.18,19.63.37,22.93,11.54,34.71,17.28-18.58-1.17-79.81-29.13-84.22-18.19a10.94,10.94,0,0,0,8.15,4.62c20.47,1.46,31.1,9.25,44.12,15.29,4.19,1.2,11.29-.3,15.22.74C265.16,77.46,290.14,91.12,279.65,89.09Z"}}),t._v(" "),r("path",{attrs:{id:"bottom-mont",d:"M153.32,68.3C145.05,67,142.23,62.22,134,61.63c-7.53-.5-27.07.34-17.27,4.32,37,5,47,9.65,60.81,24.46-4.73,1.37-35-6.14-48.4-7.8a19.86,19.86,0,0,1-4.37-1.15,9,9,0,0,1-3-1.8c-4.6-5.75-18.47-7-27-11.42-23.33,9-53.72,15.41-79.14,22.44,14.89-5.89,27-14.42,43.67-18.9,4.58-.27,11,1.65,14.11-.36,26.22-11,27-29.42,64.28-14.53l13.44,3.62c5.12,1.47,14.39,3.42,25.22,8.5C197.94,83.27,171.09,72.31,153.32,68.3Z"}})])]),t._v(" "),r("h2",{staticClass:"leading-0.75"},[r("a",{class:[t.noLink?"":"wave-border","bottom inline-block"],attrs:{href:t.link}},[t._v("\n      charlottesville, va\n    ")])])])}),[],!1,null,"be0b91dc",null);e.default=component.exports},270:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{stories:{type:Array}}}),o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"info-section",attrs:{id:"life"}},[r("div",{staticClass:"tilted mb-8"},[r("div",{staticClass:"space-y-1"},[r("h5",{staticClass:"uppercase"},[t._v("living in...")]),t._v(" "),r("life-ani",{attrs:{"no-link":!0}})],1)]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap items-start"},t._l(t.stories,(function(t){return r("story",{key:t.slug,attrs:{story:t}})})),1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("p",[t._v("\n      Home to me is being in the Blue Ridge Mountains with my girlfriend and\n      my dog. Outside of work, I love board sports, cooking, and visiting\n      friends.\n    ")]),t._v(" "),r("p",[t._v("Here are some of my latest adventures:")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{LifeAni:r(258).default,Story:r(250).default})}}]);