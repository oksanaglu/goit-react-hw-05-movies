"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[424],{424:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i,r,a,c,o=t(439),s=t(791),h=t(689),u=t(106),d=t(168),l=t(444),g=l.ZP.ul(i||(i=(0,d.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),f=l.ZP.li(r||(r=(0,d.Z)(["\n  margin: 0;\n  padding: 10px;\n  list-style-type: none;\n  :not(:last-child) {\n    margin-bottom: 20px;\n  }\n"]))),m=l.ZP.h3(a||(a=(0,d.Z)(["\n  margin-botom: 20px;\n  padding: 0;\n"]))),p=l.ZP.p(c||(c=(0,d.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),v=t(184),_=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],r=(0,h.UO)();return(0,s.useEffect)((function(){fetch("".concat(u._n,"/movie/").concat(r.movieId,"/reviews?api_key=").concat(u.$h,"&language=en-US")).then((function(n){return n.json()})).then((function(n){i(n.results)})).catch(console.error())}),[]),t.length>0?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(g,{children:t.map((function(n){var e=n.id,t=n.author,i=n.content;return(0,v.jsxs)(f,{children:[(0,v.jsx)(m,{children:t}),(0,v.jsx)(p,{children:i})]},e)}))})}):(0,v.jsx)("div",{children:"We don`t have any reviews for this movie"})}}}]);
//# sourceMappingURL=424.942b4541.chunk.js.map