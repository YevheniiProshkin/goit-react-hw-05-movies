"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c=e(861),u=e(885),i=e(757),o=e.n(i),s=e(791),p=e(689),f=e(228),d=e(168),l=e(444),h=l.ZP.ul(r||(r=(0,d.Z)(["\n  display: grid;\n  justify-content: center;\n  max-width: calc(100vw - 50px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 30px;\n  padding: 0px;\n  list-style: none;\n  margin: 0 auto;\n  margin-top: 30px;\n"]))),x=l.ZP.li(a||(a=(0,d.Z)(["\n  border: 1px solid black;\n  border-radius: 5px;\n  text-align: center;\n  padding: 20px 0px;\n  background-color: #f0f4f5;\n  > a {\n    text-decoration: none;\n  }\n"]))),g=e(184);function v(){var n=(0,s.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId;if((0,s.useEffect)((function(){function n(){return(n=(0,c.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.M1)(a);case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),e)return(0,g.jsx)("main",{children:(0,g.jsx)("div",{children:(0,g.jsx)(h,{children:e&&e.map((function(n){var t=n.id,e=n.profile_path,r=n.name,a=n.character;return(0,g.jsxs)(x,{children:[(0,g.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://via.placeholder.com/200x300",alt:r,width:"120",height:""}),(0,g.jsx)("p",{children:r}),(0,g.jsxs)("p",{children:["Character:",a]})]},t)}))})})})}},228:function(n,t,e){e.d(t,{Df:function(){return s},GC:function(){return p},M1:function(){return d},Pg:function(){return f},tx:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="60768512350c805128ff23350d77a5e9",o="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"trending/movie/day?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ZP.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.f479048b.chunk.js.map