"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[361],{361:function(n,e,t){function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}t.r(e),t.d(e,{default:function(){return m}});var c=t(861),o=t(885),u=t(757),s=t.n(u),p=t(791),l=t(731),d=t(689),f=t(228),x=t(607),h=t(184);function g(n){var e=n.movieDetails,t=e.poster_path,r=e.original_title,a=e.vote_average,i=e.overview,c=e.genres,o=Math.floor(10*Number(a));return(0,h.jsxs)(h.Fragment,{children:[" ",(0,h.jsxs)(x.iR,{children:[(0,h.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w500/".concat(t):"https://via.placeholder.com/300x450",alt:"",width:"300",height:"450"}),(0,h.jsxs)(x.wz,{children:[(0,h.jsx)("h1",{children:r}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"User rate:"}),(0,h.jsx)(x.kI,{children:" ".concat(o,"%")})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Overview:"}),(0,h.jsx)(x.kI,{children:i})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:"Geners:"}),(0,h.jsx)(x.vR,{children:c.map((function(n){var e=n.id,t=n.name;return(0,h.jsx)(x.hw,{children:t},e)}))})]})]})]})]})}var v=t(616);t(282);function m(){var n,e,t=(0,p.useState)(null),r=(0,o.Z)(t,2),a=r[0],u=r[1],x=(0,d.TH)(),m=(0,d.UO)().movieId,b=null!==(n=null===(e=x.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/goit-react-hw-05-movies";if((0,p.useEffect)((function(){function n(){return(n=(0,c.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Pg)(m);case 2:e=n.sent,u(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m]),null!==a)return(0,h.jsx)("main",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(l.OL,{className:"backLink",to:b,children:"Go Back"}),(0,h.jsx)(g,{movieDetails:a,location:x,movieId:m}),(0,h.jsx)("h2",{className:"article",children:"Additonal Information"}),(0,h.jsxs)(v.f0,{children:[(0,h.jsx)(v.fp,{children:(0,h.jsx)(v.rU,{to:"cast",state:i(i({},x.state),{},{movieId:m}),children:"Cast"})}),(0,h.jsx)(v.fp,{children:(0,h.jsx)(v.rU,{to:"reviews",state:i(i({},x.state),{},{movieId:m}),children:"Reviews"})})]}),(0,h.jsx)(d.j3,{})]})})}},228:function(n,e,t){t.d(e,{Df:function(){return s},GC:function(){return p},M1:function(){return d},Pg:function(){return l},tx:function(){return f}});var r=t(861),a=t(757),i=t.n(a),c=t(44),o="60768512350c805128ff23350d77a5e9",u="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"search/movie?api_key=").concat(o,"&query=").concat(e,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},607:function(n,e,t){t.d(e,{hw:function(){return f},iR:function(){return p},kI:function(){return x},vR:function(){return d},wz:function(){return l}});var r,a,i,c,o,u=t(168),s=t(444),p=s.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  padding: 20px;\n"]))),l=s.ZP.div(a||(a=(0,u.Z)(["\n  margin-left: 30px;\n"]))),d=s.ZP.ul(i||(i=(0,u.Z)(["\n  display: flex;\n  list-style: none;\n  font-size: 20px;\n  padding: 0px;\n"]))),f=s.ZP.li(c||(c=(0,u.Z)(["\n  text-align: center;\n  margin-right: 20px;\n  font-weight: 500;\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 5px;\n  background-color: orange;\n  border: 1px solid black;\n  > a {\n    text-decoration: none;\n  }\n"]))),x=s.ZP.p(o||(o=(0,u.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n"])))},616:function(n,e,t){t.d(e,{WF:function(){return d},WZ:function(){return l},f0:function(){return f},fp:function(){return x},rU:function(){return h}});var r,a,i,c,o,u=t(168),s=t(444),p=t(731),l=s.ZP.ul(r||(r=(0,u.Z)(["\n  display: grid;\n  justify-content: center;\n  max-width: calc(100vw - 50px);\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 22px;\n  padding: 0px;\n  list-style: none;\n  margin: 0 auto;\n  margin-top: 30px;\n"]))),d=s.ZP.li(a||(a=(0,u.Z)(["\n  border: 1px solid gray;\n  border-radius: 4px;\n  text-align: center;\n  padding: 10px 0px;\n  font-weight: 500;\n  font-size: 20px;\n  background-color: #f0f4f5;\n  box-shadow: 0px 0px 25px 1px rgba(242, 205, 39, 1);\n  > a {\n    text-decoration: none;\n  }\n"]))),f=s.ZP.ul(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n  margin-bottom: 30px;\n  list-style: none;\n"]))),x=s.ZP.li(c||(c=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  font-size: 20px;\n  text-align: center;\n  padding: 10px;\n  border: 1px solid black;\n  border-radius: 5px;\n  width: 100px;\n  margin-right: 20px;\n  background-color: orange;\n"]))),h=(0,s.ZP)(p.OL)(o||(o=(0,u.Z)(["\n  text-decoration: none;\n  color: black;\n"])))},282:function(){}}]);
//# sourceMappingURL=361.bb414daa.chunk.js.map