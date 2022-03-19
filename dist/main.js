(()=>{var e={151:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(81),i=t.n(n),o=t(645),s=t.n(o)()(i());s.push([e.id,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html,body{font-size:62.5%;box-sizing:border-box;background:#28282b}.container{position:relative;height:100vh;display:grid;justify-content:center;align-items:center;grid-template-columns:1fr 1fr;grid-template-rows:10% 70% 20%}.container .intro{display:grid;grid-template-rows:10% 90%;z-index:1000;position:absolute;height:100vh;width:100vw;background:#000}.container .intro .introOne{display:grid;place-items:center}.container .intro .introOne #title{cursor:pointer;color:#fff;font-family:cursive,monospace,sans-serif;font-size:3rem}.container .intro .introTwo{display:grid;grid-template-rows:70% 30%}.container .intro .introTwo .introTwoOne{display:grid;place-items:center}.container .intro .introTwo .introTwoOne h1{color:#fff;font-size:5rem;font-family:cursive,monospace,sans-serif}.container .intro .introTwo .introTwoTwo{display:flex;justify-content:center;align-items:center}.container .intro .introTwo .introTwoTwo #pvp,.container .intro .introTwo .introTwoTwo #pvc{cursor:pointer;font-family:cursive,monospace,sans-serif;font-size:1.5rem;font-weight:900;margin:0 1rem;background:#fff;color:#000;border:none;outline:none;border-radius:2rem;height:4rem;width:17rem;transition:.7s ease-in}.container .intro .introTwo .introTwoTwo #pvp:hover,.container .intro .introTwo .introTwoTwo #pvc:hover{color:#fff;border:.1px solid #fff;background:#000}.container .outro{display:none;place-items:center;z-index:1000;position:absolute;height:0;width:100vw;background:#000;transition:1s ease-in-out;animation:slideIn 1s forwards}.container .outro .outroDiv{border-radius:10px;height:80%;width:80%;display:flex;justify-content:center;align-items:center;box-shadow:rgba(0,0,0,.12) 0px 1px 3px,rgba(0,0,0,.24) 0px 1px 2px}.container .outro .outroDiv button{background:#fff;cursor:pointer;height:40%;width:40%;margin:0 5rem;border-radius:10rem;font-size:3rem;font-family:cursive,monospace,sans-serif;color:#000;transition:.7s ease-in-out}.container .outro .outroDiv button:hover{color:#fff;border:1px solid #fff;background:#000}.container .navbar{height:100%;width:100%;grid-column:1/4;display:grid;place-items:center}.container .navbar h1{color:#fff;font-size:3rem;font-family:"Courier New",Courier,monospace}.container .box{height:100%;width:100%;display:grid;place-content:center}.container .box .gameBoard{height:60vh;width:30vw;display:grid;grid-template-columns:repeat(10, 1fr);grid-template-rows:repeat(10, 1fr)}.container .box .gameBoard .grid,.container .box .gameBoard .gridd{z-index:100;cursor:pointer;border:.1px solid #fff;background:#22aeff}.container .box .gameBoard .popup{animation:popping .7s}.container .ShipContainer{height:100%;display:flex;align-items:center;justify-content:space-around}.container .ShipContainer .buttons button{background:#fff;color:#000;cursor:pointer;border:none;outline:none;border-radius:2rem;height:3rem;width:10rem;transition:.7s ease-in}.container .ShipContainer .buttons button:hover{border:.1px solid #fff;background:#000;color:#fff}.container #boxOne{grid-column:1/2}.container #boxTwo{grid-column:2/3}.container #boxThree{grid-column:1/4;grid-row:3/3}@keyframes popping{0%{transform:scale(0)}100%{transform:scale(1)}}@keyframes slideIn{0%{height:0;transform-origin:0 0}100%{height:100vh;transform-origin:0 0}}',""]);const c=s},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,i,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var c=0;c<this.length;c++){var a=this[c][0];null!=a&&(s[a]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),r.push(l))}},r}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},s=[],c=0;c<e.length;c++){var a=e[c],u=n.base?a[0]+n.base:a[0],l=o[u]||0,d="".concat(u," ").concat(l);o[u]=l+1;var f=t(d),p={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==f)r[f].references++,r[f].updater(p);else{var h=i(p,n);n.byIndex=c,r.splice(c,0,{identifier:d,updater:h,references:1})}s.push(d)}return s}function i(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var c=t(o[s]);r[c].references--}for(var a=n(e,i),u=0;u<o.length;u++){var l=t(o[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}o=a}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,i&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},176:(e,r,t)=>{t(917),e.exports=function(){let e,r;const t=[];return{missedShots:t,createBoard:()=>{for(e=[];100!==e.length;)e.push("");return e},createBoard2:()=>{for(r=[];100!==r.length;)r.push("");return r},placeShipX:(r,t,n)=>{2===t?e.splice(r,t,n,n):3===t?e.splice(r,t,n,n,n):4===t?e.splice(r,t,n,n,n,n):5===t&&e.splice(r,t,n,n,n,n,n)},placeShipX2:(e,t,n)=>{2===t?r.splice(e,t,n,n):3===t?r.splice(e,t,n,n,n):4===t?r.splice(e,t,n,n,n,n):5===t&&r.splice(e,t,n,n,n,n,n)},placeShipY:(r,t,n,i,o,s,c)=>{if(2===r)for(let r=0;r<=e.length;r++)"destroyer"===t?r!==n&&r!==i||(e[r]="destroyer"):"submarine"===t&&(r!==n&&r!==i||(e[r]="submarine"));else if(3===r)for(let r=0;r<=e.length;r++)r!==n&&r!==i&&r!==o||(e[r]="cruiser");else if(4===r)for(let r=0;r<=e.length;r++)r!==n&&r!==i&&r!==o&&r!==s||(e[r]="battleship");else if(5===r)for(let r=0;r<=e.length;r++)r!==n&&r!==i&&r!==o&&r!==s&&r!==c||(e[r]="carrier")},placeShipY2:(e,t,n,i,o,s,c)=>{if(2===e)for(let e=0;e<=r.length;e++)"destroyer"===t?e!==n&&e!==i||(r[e]="destroyer"):"submarine"===t&&(e!==n&&e!==i||(r[e]="submarine"));else if(3===e)for(let e=0;e<=r.length;e++)e!==n&&e!==i&&e!==o||(r[e]="cruiser");else if(4===e)for(let e=0;e<=r.length;e++)e!==n&&e!==i&&e!==o&&e!==s||(r[e]="battleship");else if(5===e)for(let e=0;e<=r.length;e++)e!==n&&e!==i&&e!==o&&e!==s&&e!==c||(r[e]="carrier")},receiveAttack:e=>{t.includes(e)||t.push(e)}}}},917:e=>{e.exports=function(e,r){const t=r;let n=[];const i=[];return{name:e,length:r,sunked:n,marked:i,hit:e=>{i.push(e)},isSunk:()=>{t===i.length&&n.push(!0)}}}}},r={};function t(n){var i=r[n];if(void 0!==i)return i.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";var e=t(379),r=t.n(e),n=t(795),i=t.n(n),o=t(569),s=t.n(o),c=t(565),a=t.n(c),u=t(216),l=t.n(u),d=t(589),f=t.n(d),p=t(151),h={};h.styleTagTransform=f(),h.setAttributes=a(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=l(),r()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const m=document.querySelectorAll(".grid"),b=document.querySelectorAll(".gridd");let g=0,y=0;function v(e){return e<10?e:e>=10&&e<20?e-10:e>=20&&e<30?e-20:e>=30&&e<40?e-30:e>=40&&e<50?e-40:e>=50&&e<60?e-50:e>=60&&e<70?e-60:e>=70&&e<80?e-70:e>=80&&e<90?e-80:e>=90&&e<100?e-90:void 0}function k(e){return e>=0&&e<10?e-e:e>=10&&e<20?e-(e-10):e>=20&&e<30?e-(e-20):e>=30&&e<40?e-(e-30):e>=40&&e<50?e-(e-40):e>=50&&e<60?e-(e-50):e>=60&&e<70?e-(e-60):e>=70&&e<80?e-(e-70):e>=80&&e<90?e-(e-80):e>=90&&e<100?e-(e-90):void 0}function w(){document.querySelector(".intro").style.display="none"}m.forEach((e=>{e.setAttribute("index",g),g++})),b.forEach((e=>{e.setAttribute("index",y),y++}));const E=t(176),S=t(917),x=document.querySelectorAll(".grid"),T=document.querySelectorAll(".gridd"),A=document.getElementById("changeDirection"),X=document.getElementById("pvp"),Y=document.getElementById("pvc");let C="X",L="destroyer",P="destroyer";const z=new E,B=z.createBoard(),I=[],N=new E,O=N.createBoard2(),j=[],q=new S("destroyer",2),M=new S("submarine",2),D=new S("cruiser",3),Z=new S("battleship",4),F=new S("carrier",5),H=new S("destroyer",2),R=new S("submarine",2),U=new S("cruiser",3),_=new S("battleship",4),J=new S("carrier",5);function G(e,r){const t=e.target,n=Number(t.getAttribute("index")),i=[];if("X"===C){const e=v(n);if(2===r&&e+r<=10&&"destroyer"===L||"submarine"===L){const e=n,t=n+1;if(I.includes(e)||I.includes(t))return;{i.push(n,n+1),I.push(n,n+1);const e=Array.from(x),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),"destroyer"===L?(z.placeShipX(n,r,q.name,q.name),L="submarine"):"submarine"===L&&(z.placeShipX(n,r,M.name,M.name),L="cruiser")}}else if(3===r&&e+r<=10){const e=n,t=n+1,o=n+2;if(I.includes(e)||I.includes(t)||I.includes(o))return;{i.push(n,n+1,n+2),I.push(n,n+1,n+2);const e=Array.from(x),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),z.placeShipX(n,r,D.name,D.name,D.name),L="battleship"}}else if(4===r&&e+r<=10){const e=n,t=n+1,o=n+2,s=n+3;if(I.includes(e)||I.includes(t)||I.includes(o)||I.includes(s))return;{i.push(n,n+1,n+2,n+3),I.push(n,n+1,n+2,n+3);const e=Array.from(x),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),z.placeShipX(n,r,Z.name,Z.name,Z.name,Z.name),L="carrier"}}else if(5===r&&e+r<=10){const e=n,t=n+1,o=n+2,s=n+3,c=n+4;if(I.includes(e)||I.includes(t)||I.includes(o)||I.includes(s)||I.includes(c))return;{i.push(n,n+1,n+2,n+3,n+4),I.push(n,n+1,n+2,n+3,n+4);const e=Array.from(x),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),z.placeShipX(n,r,F.name,F.name,F.name,F.name,F.name),setTimeout((()=>{L="attack";let e=Promise.resolve();x.forEach((r=>{e=e.then((()=>(r.style.background="#22aeff",r.classList.add("popup"),new Promise((e=>{setTimeout(e,50)})))))}))}),1e3)}}}if("Y"===C){const e=k(n);if(2===r&&e+r<=82&&"destroyer"===L||"submarine"===L){const e=n,t=n+10;if(I.includes(e)||I.includes(t))return;{i.push(n,n+10),I.push(n,n+10);const o=Array.from(x),s=[];i.forEach((e=>{s.push(o[e])})),s.forEach((e=>{e.style.background="#41ffb0"})),"destroyer"===L?(z.placeShipY(r,L,e,t),L="submarine"):"submarine"===L&&(z.placeShipY(r,L,e,t),L="cruiser")}}else if(3===r&&e+r<=73){const e=n,t=n+10,o=n+20;if(I.includes(e)||I.includes(t)||I.includes(o))return;{i.push(n,n+10,n+20),I.push(n,n+10,n+20);const s=Array.from(x),c=[];i.forEach((e=>{c.push(s[e])})),c.forEach((e=>{e.style.background="#41ffb0"})),z.placeShipY(r,L,e,t,o),L="battleship"}}else if(4===r&&e+r<=64){const e=n,t=n+10,o=n+20,s=n+30;if(I.includes(e)||I.includes(t)||I.includes(o)||I.includes(s))return;{i.push(n,n+10,n+20,n+30),I.push(n,n+10,n+20,n+30);const c=Array.from(x),a=[];i.forEach((e=>{a.push(c[e])})),a.forEach((e=>{e.style.background="#41ffb0"})),z.placeShipY(r,L,e,t,o,s),L="carrier"}}else if(5===r&&e+r<=55){const e=n,t=n+10,o=n+20,s=n+30,c=n+40;if(I.includes(e)||I.includes(t)||I.includes(o)||I.includes(s)||I.includes(c))return;{i.push(n,n+10,n+20,n+30,n+40),I.push(n,n+10,n+20,n+30,n+40);const a=Array.from(x),u=[];i.forEach((e=>{u.push(a[e])})),u.forEach((e=>{e.style.background="#41ffb0"})),z.placeShipY(r,L,e,t,o,s,c),setTimeout((()=>{L="attack";let e=Promise.resolve();x.forEach((r=>{e=e.then((()=>(r.style.background="#22aeff",r.classList.add("popup"),new Promise((e=>{setTimeout(e,50)})))))}))}),1e3)}}}}function K(e,r){const t=e.target,n=Number(t.getAttribute("index")),i=[];if("X"===C){const e=v(n);if(2===r&&e+r<=10&&"destroyer"===P||"submarine"===P){const e=n,t=n+1;if(j.includes(e)||j.includes(t))return;{i.push(n,n+1),j.push(n,n+1);const e=Array.from(T),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),"destroyer"===P?(N.placeShipX2(n,r,H.name,H.name),P="submarine"):"submarine"===P&&(N.placeShipX2(n,r,R.name,R.name),P="cruiser")}}else if(3===r&&e+r<=10){const e=n,t=n+1,o=n+2;if(j.includes(e)||j.includes(t)||j.includes(o))return;{i.push(n,n+1,n+2),j.push(n,n+1,n+2);const e=Array.from(T),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),N.placeShipX2(n,r,U.name,U.name,U.name),P="battleship"}}else if(4===r&&e+r<=10){const e=n,t=n+1,o=n+2,s=n+3;if(j.includes(e)||j.includes(t)||j.includes(o)||j.includes(s))return;{i.push(n,n+1,n+2,n+3),j.push(n,n+1,n+2,n+3);const e=Array.from(T),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),N.placeShipX2(n,r,_.name,_.name,_.name,_.name),P="carrier"}}else if(5===r&&e+r<=10){const e=n,t=n+1,o=n+2,s=n+3,c=n+4;if(j.includes(e)||j.includes(t)||j.includes(o)||j.includes(s)||j.includes(c))return;{i.push(n,n+1,n+2,n+3,n+4),j.push(n,n+1,n+2,n+3,n+4);const e=Array.from(T),t=[];i.forEach((r=>{t.push(e[r])})),t.forEach((e=>{e.style.background="#41ffb0"})),N.placeShipX2(n,r,J.name,J.name,J.name,J.name,J.name),setTimeout((()=>{P="attack";let e=Promise.resolve();T.forEach((r=>{e=e.then((()=>(r.style.background="#22aeff",r.classList.add("popup"),new Promise((e=>{setTimeout(e,50)})))))}))}),1e3)}}}if("Y"===C){const e=k(n);if(2===r&&e+r<=82&&"destroyer"===P||"submarine"===P){const e=n,t=n+10;if(j.includes(e)||j.includes(t))return;{i.push(n,n+10),j.push(n,n+10);const o=Array.from(T),s=[];i.forEach((e=>{s.push(o[e])})),s.forEach((e=>{e.style.background="#41ffb0"})),"destroyer"===P?(N.placeShipY2(r,P,e,t),P="submarine"):"submarine"===P&&(N.placeShipY2(r,P,e,t),P="cruiser")}}else if(3===r&&e+r<=73){const e=n,t=n+10,o=n+20;if(j.includes(e)||j.includes(t)||j.includes(o))return;{i.push(n,n+10,n+20),j.push(n,n+10,n+20);const s=Array.from(T),c=[];i.forEach((e=>{c.push(s[e])})),c.forEach((e=>{e.style.background="#41ffb0"})),N.placeShipY2(r,P,e,t,o),P="battleship"}}else if(4===r&&e+r<=64){const e=n,t=n+10,o=n+20,s=n+30;if(j.includes(e)||j.includes(t)||j.includes(o)||j.includes(s))return;{i.push(n,n+10,n+20,n+30),j.push(n,n+10,n+20,n+30);const c=Array.from(T),a=[];i.forEach((e=>{a.push(c[e])})),a.forEach((e=>{e.style.background="#41ffb0"})),N.placeShipY2(r,P,e,t,o,s),P="carrier"}}else if(5===r&&e+r<=55){const e=n,t=n+10,o=n+20,s=n+30,c=n+40;if(j.includes(e)||j.includes(t)||j.includes(o)||j.includes(s)||j.includes(c))return;{i.push(n,n+10,n+20,n+30,n+40),j.push(n,n+10,n+20,n+30,n+40);const a=Array.from(T),u=[];i.forEach((e=>{u.push(a[e])})),u.forEach((e=>{e.style.background="#41ffb0"})),N.placeShipY2(r,P,e,t,o,s,c),setTimeout((()=>{P="attack";let e=Promise.resolve();T.forEach((r=>{e=e.then((()=>(r.style.background="#22aeff",r.classList.add("popup"),new Promise((e=>{setTimeout(e,50)})))))}))}),1e3)}}}}x.forEach((e=>{e.addEventListener("click",(e=>{"attack"!==L&&function(e){"destroyer"===L&&G(e,2),"submarine"===L&&G(e,2),"cruiser"===L&&G(e,3),"battleship"===L&&G(e,4),"carrier"===L&&G(e,5)}(e),"attack"===L&&(function(e){const r=e.target,t=Number(r.getAttribute("index"));if(""!==B[t]){if("red"!==x[t].style.background){const e=B[t];x[t].style.background="red","destroyer"===e?(q.hit(t),q.isSunk(),B.splice(t,1,"")):"submarine"===e?(M.hit(t),M.isSunk(),B.splice(t,1,"")):"cruiser"===e?(D.hit(t),D.isSunk(),B.splice(t,1,"")):"battleship"===e?(Z.hit(t),Z.isSunk(),B.splice(t,1,"")):"carrier"===e&&(F.hit(),F.isSunk(),B.splice(t,1,""))}}else"red"!==x[t].style.background&&(x[t].style.background="#fff",z.receiveAttack(t));console.log(B)}(e),function(){let e=0;x.forEach((r=>{"red"===r.style.background&&e++})),16===e&&(document.querySelector(".outro").style.display="grid")}())}))})),T.forEach((e=>{e.addEventListener("click",(e=>{"attack"!==P&&function(e){"destroyer"===P&&K(e,2),"submarine"===P&&K(e,2),"cruiser"===P&&K(e,3),"battleship"===P&&K(e,4),"carrier"===P&&K(e,5)}(e),"attack"===P&&(function(e){const r=e.target,t=Number(r.getAttribute("index"));if(""!==O[t]){if("red"!==T[t].style.background){const e=O[t];T[t].style.background="red","destroyer"===e?(H.hit(t),H.isSunk(),O.splice(t,1,"")):"submarine"===e?(R.hit(t),R.isSunk(),O.splice(t,1,"")):"cruiser"===e?(U.hit(t),U.isSunk(),O.splice(t,1,"")):"battleship"===e?(_.hit(t),_.isSunk(),O.splice(t,1,"")):"carrier"===e&&(J.hit(),J.isSunk(),O.splice(t,1,""))}}else"red"!==T[t].style.background&&(T[t].style.background="#fff",N.receiveAttack(t));console.log(O)}(e),function(){let e=0;T.forEach((r=>{"red"===r.style.background&&e++})),16===e&&(document.querySelector(".outro").style.display="grid")}())}))})),A.addEventListener("click",(function(){"X"===C?C="Y":"Y"===C&&(C="X")})),X.addEventListener("click",w),Y.addEventListener("click",w)})()})();