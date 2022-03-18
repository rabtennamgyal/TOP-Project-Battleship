(()=>{var e={151:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(81),i=t.n(n),s=t(645),o=t.n(s)()(i());o.push([e.id,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html,body{font-size:62.5%;box-sizing:border-box;background:#28282b}.container{position:relative;height:100vh;display:grid;justify-content:center;align-items:center;grid-template-columns:1fr 1fr;grid-template-rows:10% 70% 20%}.container .navbar{height:100%;width:100%;grid-column:1/4;display:grid;place-items:center}.container .navbar h1{color:#fff;font-size:3rem;font-family:"Courier New",Courier,monospace}.container .box{height:100%;width:100%;display:grid;place-content:center}.container .box .gameBoard{height:60vh;width:30vw;display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr)}.container .box .gameBoard .grid{z-index:100;cursor:pointer;border:.1px solid #fff;background:#22aeff}.container .box .gameBoard .droppable{border:.1px solid #fff}.container .ShipContainer{height:100%;display:flex;align-items:center;justify-content:space-around}.container .ShipContainer .ship{height:28%;display:flex;background:#41ffb0}.container .ShipContainer .ship .shipBox{cursor:move;border:.1px solid #000;height:100%;width:3.8rem}.container #boxOne{grid-column:1/2}.container #boxTwo{grid-column:2/3}.container #boxThree{grid-column:1/4;grid-row:3/3}',""]);const c=o},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,i,s){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(o[a]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&o[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),r.push(l))}},r}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var s={},o=[],c=0;c<e.length;c++){var a=e[c],u=n.base?a[0]+n.base:a[0],l=s[u]||0,d="".concat(u," ").concat(l);s[u]=l+1;var f=t(d),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)r[f].references++,r[f].updater(p);else{var h=i(p,n);n.byIndex=c,r.splice(c,0,{identifier:d,updater:h,references:1})}o.push(d)}return o}function i(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,i){var s=n(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<s.length;o++){var c=t(s[o]);r[c].references--}for(var a=n(e,i),u=0;u<s.length;u++){var l=t(s[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}s=a}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,i&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var s=t.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},176:(e,r,t)=>{t(917),e.exports=function(){let e;const r=[];return{missedShots:r,createBoard:()=>{for(e=[];100!==e.length;)e.push("");return e},placeShipX:(r,t,n)=>{2===t?e.splice(r,t,n,n):3===t?e.splice(r,t,n,n,n):4===t?e.splice(r,t,n,n,n,n):5===t&&e.splice(r,t,n,n,n,n,n)},placeShipY:(r,t,n,i,s,o,c)=>{if(2===r)for(let r=0;r<=e.length;r++)"destroyer"===t?r!==n&&r!==i||(e[r]="destroyer"):"submarine"===t&&(r!==n&&r!==i||(e[r]="submarine"));else if(3===r)for(let r=0;r<=e.length;r++)r!==n&&r!==i&&r!==s||(e[r]="cruiser");else if(4===r)for(let r=0;r<=e.length;r++)r!==n&&r!==i&&r!==s&&r!==o||(e[r]="battleship");else if(5===r)for(let r=0;r<=e.length;r++)r!==n&&r!==i&&r!==s&&r!==o&&r!==c||(e[r]="carrier")},receiveAttack:e=>{r.includes(e)||r.push(e)}}}},917:e=>{e.exports=function(e,r){const t=r;let n=[];const i=[];return{name:e,length:r,sunked:n,marked:i,hit:e=>{i.push(e)},isSunk:()=>{t===i.length&&n.push(!0)}}}}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var s=r[n]={id:n,exports:{}};return e[n](s,s.exports,t),s.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(379),r=t.n(e),n=t(795),i=t.n(n),s=t(569),o=t.n(s),c=t(565),a=t.n(c),u=t(216),l=t.n(u),d=t(589),f=t.n(d),p=t(151),h={};h.styleTagTransform=f(),h.setAttributes=a(),h.insert=o().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),r()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m=document.querySelectorAll(".grid");document.querySelectorAll(".ship");let b=0;m.forEach((e=>{e.setAttribute("index",b),b++}));const g=t(176),y=t(917),v=document.querySelectorAll(".grid"),x=document.getElementById("changeDirection");let S="X",k="destroyer";const E=new g,w=E.createBoard(),A=[],C=new y("destroyer",2),T=new y("submarine",2),X=new y("cruiser",3),Y=new y("battleship",4),M=new y("carrier",5);function B(e,r){const t=e.target,n=Number(t.getAttribute("index")),i=[];if("X"===S){const e=(s=n)<10?s:s>=10&&s<20?s-10:s>=20&&s<30?s-20:s>=30&&s<40?s-30:s>=40&&s<50?s-40:s>=50&&s<60?s-50:s>=60&&s<70?s-60:s>=70&&s<80?s-70:s>=80&&s<90?s-80:s>=90&&s<100?s-90:void 0;if(2===r&&e+r<=10&&"destroyer"===k||"submarine"===k){const e=n,t=n+1;if(A.includes(e)||A.includes(t))return;{i.push(n,n+1),A.push(n,n+1);const e=Array.from(v),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),"destroyer"===k?(E.placeShipX(n,r,C.name,C.name),k="submarine"):"submarine"===k&&(E.placeShipX(n,r,T.name,T.name),k="cruiser")}}else if(3===r&&e+r<=10){const e=n,t=n+1,s=n+2;if(A.includes(e)||A.includes(t)||A.includes(s))return;{i.push(n,n+1,n+2),A.push(n,n+1,n+2);const e=Array.from(v),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),E.placeShipX(n,r,X.name,X.name,X.name),k="battleship"}}else if(4===r&&e+r<=10){const e=n,t=n+1,s=n+2,o=n+3;if(A.includes(e)||A.includes(t)||A.includes(s)||A.includes(o))return;{i.push(n,n+1,n+2,n+3),A.push(n,n+1,n+2,n+3);const e=Array.from(v),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),E.placeShipX(n,r,Y.name,Y.name,Y.name,Y.name),k="carrier"}}else if(5===r&&e+r<=10){const e=n,t=n+1,s=n+2,o=n+3,c=n+4;if(A.includes(e)||A.includes(t)||A.includes(s)||A.includes(o)||A.includes(c))return;{i.push(n,n+1,n+2,n+3,n+4),A.push(n,n+1,n+2,n+3,n+4);const e=Array.from(v),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),E.placeShipX(n,r,M.name,M.name,M.name,M.name,M.name),setTimeout((()=>{k="attack"}),2e3)}}}var s;if("Y"===S){const e=function(e){return e>=0&&e<10?e-e:e>=10&&e<20?e-(e-10):e>=20&&e<30?e-(e-20):e>=30&&e<40?e-(e-30):e>=40&&e<50?e-(e-40):e>=50&&e<60?e-(e-50):e>=60&&e<70?e-(e-60):e>=70&&e<80?e-(e-70):e>=80&&e<90?e-(e-80):e>=90&&e<100?e-(e-90):void 0}(n);if(2===r&&e+r<=82&&"destroyer"===k||"submarine"===k){const e=n,t=n+10;if(A.includes(e)||A.includes(t))return;{i.push(n,n+10),A.push(n,n+10);const s=Array.from(v),o=[];i.forEach((e=>{o.push(s[e])})),o.forEach((e=>{e.style.background="#41ffb0"})),"destroyer"===k?(E.placeShipY(r,k,e,t),k="submarine"):"submarine"===k&&(E.placeShipY(r,k,e,t),k="cruiser")}}else if(3===r&&e+r<=73){const e=n,t=n+10,s=n+20;if(A.includes(e)||A.includes(t)||A.includes(s))return;{i.push(n,n+10,n+20),A.push(n,n+10,n+20);const o=Array.from(v),c=[];i.forEach((e=>{c.push(o[e])})),c.forEach((e=>{e.style.background="#41ffb0"})),E.placeShipY(r,k,e,t,s),k="battleship"}}else if(4===r&&e+r<=64){const e=n,t=n+10,s=n+20,o=n+30;if(A.includes(e)||A.includes(t)||A.includes(s)||A.includes(o))return;{i.push(n,n+10,n+20,n+30),A.push(n,n+10,n+20,n+30);const c=Array.from(v),a=[];i.forEach((e=>{a.push(c[e])})),a.forEach((e=>{e.style.background="#41ffb0"})),E.placeShipY(r,k,e,t,s,o),k="carrier"}}else if(5===r&&e+r<=55){const e=n,t=n+10,s=n+20,o=n+30,c=n+40;if(A.includes(e)||A.includes(t)||A.includes(s)||A.includes(o)||A.includes(c))return;{i.push(n,n+10,n+20,n+30,n+40),A.push(n,n+10,n+20,n+30,n+40);const a=Array.from(v),u=[];i.forEach((e=>{u.push(a[e])})),u.forEach((e=>{e.style.background="#41ffb0"})),E.placeShipY(r,k,e,t,s,o,c),setTimeout((()=>{k="attack"}),2e3)}}}}E.missedShots,v.forEach((e=>{e.addEventListener("click",(e=>{"attack"!==k&&function(e){"destroyer"===k&&B(e,2),"submarine"===k&&B(e,2),"cruiser"===k&&B(e,3),"battleship"===k&&B(e,4),"carrier"===k&&B(e,5)}(e),"attack"===k&&function(e){const r=e.target,t=Number(r.getAttribute("index"));if(""!==w[t]){if("red"!==v[t].style.background){const e=w[t];v[t].style.background="red","destroyer"===e?(C.hit(t),C.isSunk(),w.splice(t,1,"")):"submarine"===e?(T.hit(t),T.isSunk(),w.splice(t,1,"")):"cruiser"===e?(X.hit(t),X.isSunk(),w.splice(t,1,"")):"battleship"===e?(Y.hit(t),Y.isSunk(),w.splice(t,1,"")):"carrier"===e&&(M.hit(),M.isSunk(),w.splice(t,1,""))}}else"red"!==v[t].style.background&&(v[t].style.background="#fff",E.receiveAttack(t));console.log(w)}(e)}))})),x.addEventListener("click",(function(){"X"===S?S="Y":"Y"===S&&(S="X")}))})()})();