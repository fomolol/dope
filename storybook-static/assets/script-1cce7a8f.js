import{g as G}from"./_commonjsHelpers-35101cd5.js";import{r as Q}from"./index-698e69ac.js";import{r as z}from"./index-10e52e8a.js";var B={exports:{}},T={exports:{}},K={};(function(d){Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return f}});function e(){return e=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var u=arguments[s];for(var c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c])}return t},e.apply(this,arguments)}function f(){return e.apply(this,arguments)}})(K);var $={};(function(d){Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return e}});function e(f){return f&&f.__esModule?f:{default:f}}})($);var x={};(function(d){Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return f}});function e(t){if(typeof WeakMap!="function")return null;var s=new WeakMap,u=new WeakMap;return(e=function(n){return n?u:s})(t)}function f(t,s){if(!s&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var u=e(s);if(u&&u.has(t))return u.get(t);var c={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in t)if(r!=="default"&&Object.prototype.hasOwnProperty.call(t,r)){var l=n?Object.getOwnPropertyDescriptor(t,r):null;l&&(l.get||l.set)?Object.defineProperty(c,r,l):c[r]=t[r]}return c.default=t,u&&u.set(t,c),c}})(x);var F={};(function(d){Object.defineProperty(d,"__esModule",{value:!0}),Object.defineProperty(d,"default",{enumerable:!0,get:function(){return e}});function e(f,t){if(f==null)return{};var s={},u=Object.keys(f),c,n;for(n=0;n<u.length;n++)c=u[n],!(t.indexOf(c)>=0)&&(s[c]=f[c]);return s}})(F);var k={};Object.defineProperty(k,"__esModule",{value:!0});k.HeadManagerContext=void 0;var U=$.default,V=U(z.exports);const X=V.default.createContext({});k.HeadManagerContext=X;var D={exports:{}};(function(d,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=f,e.isEqualNode=u,e.DOMAttributeNames=void 0;function f(){return{mountedInstances:new Set,updateHead:n=>{const r={};n.forEach(a=>{if(a.type==="link"&&a.props["data-optimized-fonts"]){if(document.querySelector(`style[data-href="${a.props["data-href"]}"]`))return;a.props.href=a.props["data-href"],a.props["data-href"]=void 0}const i=r[a.type]||[];i.push(a),r[a.type]=i});const l=r.title?r.title[0]:null;let o="";if(l){const{children:a}=l.props;o=typeof a=="string"?a:Array.isArray(a)?a.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(a=>{c(a,r[a]||[])})}}}const t={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};e.DOMAttributeNames=t;function s({type:n,props:r}){const l=document.createElement(n);for(const i in r){if(!r.hasOwnProperty(i)||i==="children"||i==="dangerouslySetInnerHTML"||r[i]===void 0)continue;const M=t[i]||i.toLowerCase();n==="script"&&(M==="async"||M==="defer"||M==="noModule")?l[M]=!!r[i]:l.setAttribute(M,r[i])}const{children:o,dangerouslySetInnerHTML:a}=r;return a?l.innerHTML=a.__html||"":o&&(l.textContent=typeof o=="string"?o:Array.isArray(o)?o.join(""):""),l}function u(n,r){if(n instanceof HTMLElement&&r instanceof HTMLElement){const l=r.getAttribute("nonce");if(l&&!n.getAttribute("nonce")){const o=r.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=l,l===n.nonce&&n.isEqualNode(o)}}return n.isEqualNode(r)}function c(n,r){const l=document.getElementsByTagName("head")[0],o=l.querySelector("meta[name=next-head-count]"),a=Number(o.content),i=[];for(let g=0,_=o.previousElementSibling;g<a;g++,_=(_==null?void 0:_.previousElementSibling)||null){var M;(_==null||(M=_.tagName)==null?void 0:M.toLowerCase())===n&&i.push(_)}const C=r.map(s).filter(g=>{for(let _=0,H=i.length;_<H;_++){const N=i[_];if(u(N,g))return i.splice(_,1),!1}return!0});i.forEach(g=>{var _;return(_=g.parentNode)==null?void 0:_.removeChild(g)}),C.forEach(g=>l.insertBefore(g,o)),o.content=(a-i.length+C.length).toString()}(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),d.exports=e.default)})(D,D.exports);var R={exports:{}};(function(d,e){Object.defineProperty(e,"__esModule",{value:!0}),e.cancelIdleCallback=e.requestIdleCallback=void 0;const f=typeof self<"u"&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(s){let u=Date.now();return self.setTimeout(function(){s({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-u))}})},1)};e.requestIdleCallback=f;const t=typeof self<"u"&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(s){return clearTimeout(s)};e.cancelIdleCallback=t,(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),d.exports=e.default)})(R,R.exports);(function(d,e){Object.defineProperty(e,"__esModule",{value:!0}),e.handleClientScriptLoad=g,e.initScriptLoader=N,e.default=void 0;var f=K.default,t=$.default,s=x.default,u=F.default,c=t(Q.exports),n=s(z.exports),r=k,l=D.exports,o=R.exports;const a=new Map,i=new Set,M=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy"],C=p=>{const{src:y,id:v,onLoad:j=()=>{},onReady:L=null,dangerouslySetInnerHTML:m,children:w="",strategy:h="afterInteractive",onError:q}=p,E=v||y;if(E&&i.has(E))return;if(a.has(y)){i.add(E),a.get(y).then(j,q);return}const I=()=>{L&&L(),i.add(E)},b=document.createElement("script"),A=new Promise((O,P)=>{b.addEventListener("load",function(S){O(),j&&j.call(this,S),I()}),b.addEventListener("error",function(S){P(S)})}).catch(function(O){q&&q(O)});m?(b.innerHTML=m.__html||"",I()):w?(b.textContent=typeof w=="string"?w:Array.isArray(w)?w.join(""):"",I()):y&&(b.src=y,a.set(y,A));for(const[O,P]of Object.entries(p)){if(P===void 0||M.includes(O))continue;const S=l.DOMAttributeNames[O]||O.toLowerCase();b.setAttribute(S,P)}h==="worker"&&b.setAttribute("type","text/partytown"),b.setAttribute("data-nscript",h),document.body.appendChild(b)};function g(p){const{strategy:y="afterInteractive"}=p;y==="lazyOnload"?window.addEventListener("load",()=>{o.requestIdleCallback(()=>C(p))}):C(p)}function _(p){document.readyState==="complete"?o.requestIdleCallback(()=>C(p)):window.addEventListener("load",()=>{o.requestIdleCallback(()=>C(p))})}function H(){[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(y=>{const v=y.id||y.getAttribute("src");i.add(v)})}function N(p){p.forEach(g),H()}function W(p){const{id:y,src:v="",onLoad:j=()=>{},onReady:L=null,strategy:m="afterInteractive",onError:w}=p,h=u(p,["id","src","onLoad","onReady","strategy","onError"]),{updateScripts:q,scripts:E,getIsSsr:I,appDir:b,nonce:A}=n.useContext(r.HeadManagerContext),O=n.useRef(!1);n.useEffect(()=>{const S=y||v;O.current||(L&&S&&i.has(S)&&L(),O.current=!0)},[L,y,v]);const P=n.useRef(!1);if(n.useEffect(()=>{P.current||(m==="afterInteractive"?C(p):m==="lazyOnload"&&_(p),P.current=!0)},[p,m]),(m==="beforeInteractive"||m==="worker")&&(q?(E[m]=(E[m]||[]).concat([f({id:y,src:v,onLoad:j,onReady:L,onError:w},h)]),q(E)):I&&I()?i.add(y||v):I&&!I()&&C(p)),b){if(m==="beforeInteractive")return v?(c.default.preload(v,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),n.default.createElement("script",{nonce:A,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([v])})`}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),n.default.createElement("script",{nonce:A,dangerouslySetInnerHTML:{__html:`(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,f({},h)])})`}}));m==="afterInteractive"&&v&&c.default.preload(v,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(W,"__nextScript",{value:!0});var J=W;e.default=J,(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),d.exports=e.default)})(T,T.exports);(function(d){d.exports=T.exports})(B);const te=G(B.exports);export{te as S,x as _,$ as a,K as b,k as h};
//# sourceMappingURL=script-1cce7a8f.js.map
