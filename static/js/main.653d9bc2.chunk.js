(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(7),u=n.n(a),i=(n(12),n(6)),o=n(2),l=n.p+"static/media/blue-candy.73120c15.png",s=n.p+"static/media/green-candy.599f7016.png",f=n.p+"static/media/orange-candy.f106b2cd.png",b=n.p+"static/media/purple-candy.ae25b8a5.png",d=n.p+"static/media/red-candy.3658b37c.png",v=n.p+"static/media/yellow-candy.a3d87a9b.png",j=n.p+"static/media/blank.fbcb9179.png",p=n(1),O=function(t){var e=t.score;return Object(p.jsx)("div",{className:"score-board",children:Object(p.jsx)("p",{children:e})})},g=[l,s,f,b,d,v],h=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)(null),u=Object(o.a)(a,2),l=u[0],s=u[1],f=Object(r.useState)(null),b=Object(o.a)(f,2),d=b[0],v=b[1],h=Object(r.useState)(0),m=Object(o.a)(h,2),y=m[0],k=m[1],x=Object(r.useState)("Start!"),C=Object(o.a)(x,2),D=C[0],S=C[1],A=Object(r.useCallback)((function(t,e){for(var r=function(e){for(var r=n[e],c=[],a=0;a<t;a++)c.push(e+8*a);if(c.every((function(t){return n[t]===r})))return k((function(e){return e+t})),c.forEach((function(t){return n[t]=j})),{v:!0}},c=0;c<=e;c++){var a=r(c);if("object"===typeof a)return a.v}}),[n]),E=Object(r.useCallback)((function(t){var e=[6,7,14,15,22,23,30,31,38,39,46,47,54,55,63,64];t>=4&&e.push([5,13,21,29,37,45,53,62]),5===t&&e.push([4,12,20,28,36,44,52,61]);for(var r=function(r){for(var c=n[r],a=[],u=0;u<t;u++)a.push(r+u);return e.includes(r)?"continue":a.every((function(t){return n[t]===c}))?(k((function(e){return e+10*t})),a.forEach((function(t){return n[t]=j})),{v:!0}):void 0},c=0;c<64;c++){var a=r(c);if("continue"!==a&&"object"===typeof a)return a.v}}),[n]),I=Object(r.useCallback)((function(){return A(3,47)}),[A]),M=Object(r.useCallback)((function(){return A(4,39)}),[A]),N=Object(r.useCallback)((function(){return A(5,31)}),[A]),w=Object(r.useCallback)((function(){return E(3)}),[E]),J=Object(r.useCallback)((function(){return E(4)}),[E]),B=Object(r.useCallback)((function(){return E(5)}),[E]),G=Object(r.useCallback)((function(){for(var t=0;t<55;t++){if([0,1,2,3,4,5,6,7].includes(t)&&n[t]===j){var e=Math.floor(Math.random()*g.length);n[t]=g[e]}n[t+8]===j&&(n[t+8]=n[t],n[t]=j)}}),[n]),L=function(){return setTimeout((function(){return S("")}),2e3)},T=function(t){return s(t.target)},_=function(t){return v(t.target)},q=function(){var t=parseInt(null===l||void 0===l?void 0:l.getAttribute("data-id")),e=parseInt(null===d||void 0===d?void 0:d.getAttribute("data-id"));n[e]=null===l||void 0===l?void 0:l.getAttribute("src"),n[t]=null===d||void 0===d?void 0:d.getAttribute("src");var r=[t-1,t-8,t+1,t+8].includes(e),a=N(),u=B(),o=M(),f=J(),b=I(),j=w();e&&r&&(j||f||u||b||o||a)?(s(null),v(null),(a||u)&&(S("Good job!"),L())):(n[e]=null===d||void 0===d?void 0:d.getAttribute("src"),n[t]=null===l||void 0===l?void 0:l.getAttribute("src"),c(Object(i.a)(n)))};return Object(r.useEffect)((function(){L(),function(){for(var t=[],e=0;e<64;e++){var n=g[Math.floor(Math.random()*g.length)];t.push(n)}c(t)}()}),[]),Object(r.useEffect)((function(){var t=setInterval((function(){N(),B(),M(),J(),I(),w(),G(),c(Object(i.a)(n))}),100);return function(){return clearInterval(t)}}),[I,M,N,w,J,B,G,n]),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(O,{score:y}),Object(p.jsxs)("div",{className:"game",children:[n.map((function(t,e){return Object(p.jsx)("img",{src:t,alt:t,"data-id":e,draggable:!0,onDragStart:T,onDragOver:function(t){return t.preventDefault()},onDragEnter:function(t){return t.preventDefault()},onDragLeave:function(t){return t.preventDefault()},onDrop:_,onDragEnd:q,onClick:function(){return console.log(e)}},e)})),D&&Object(p.jsx)("div",{className:"notification_container",children:Object(p.jsx)("p",{className:"notification",children:D})})]})]})};u.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.653d9bc2.chunk.js.map