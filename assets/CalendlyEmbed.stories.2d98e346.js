var X=Object.defineProperty;var o=(t,e)=>X(t,"name",{value:e,configurable:!0});import{r as S}from"./index.6015db55.js";import{p as h}from"./index.3c944792.js";import{S as A}from"./script.18b24655.js";import{g as Y}from"./iframe.1f35fd3c.js";import{b as P,_ as U,a as Z,h as J}from"./script.3a7fbfff.js";import{b as Q,j as v}from"./jsx-runtime.547177f5.js";import"./index.9cd4b3d6.js";var H={exports:{}},w={exports:{}},q={};Object.defineProperty(q,"__esModule",{value:!0});q.default=te;var ee=P.default,M=ee(S.exports);function te(t){const{headManager:e,reduceComponentsToState:i}=t;function p(){if(e&&e.mountedInstances){const a=M.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(i(a,t))}}if(o(p,"emitChange"),I){var m;e==null||(m=e.mountedInstances)==null||m.add(t.children),p()}return D(()=>{var a;return e==null||(a=e.mountedInstances)==null||a.add(t.children),()=>{var y;e==null||(y=e.mountedInstances)==null||y.delete(t.children)}}),D(()=>(e&&(e._pendingUpdate=p),()=>{e&&(e._pendingUpdate=p)})),ae(()=>(e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),()=>{e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)})),null}o(te,"SideEffect");const I=typeof window>"u",D=I?()=>{}:M.useLayoutEffect,ae=I?()=>{}:M.useEffect;var g={};Object.defineProperty(g,"__esModule",{value:!0});g.AmpStateContext=void 0;var ne=U.default,le=ne(S.exports);const de=le.default.createContext({});g.AmpStateContext=de;var O={};Object.defineProperty(O,"__esModule",{value:!0});O.isInAmpMode=re;function re({ampFirst:t=!1,hybrid:e=!1,hasQuery:i=!1}={}){return t||e&&i}o(re,"isInAmpMode");var N={};Object.defineProperty(N,"__esModule",{value:!0});N.warnOnce=void 0;let oe=o(t=>{},"warnOnce");N.warnOnce=oe;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.defaultHead=$,e.default=void 0;var i=Z.default,p=U.default,m=P.default,a=m(S.exports),y=p(q),x=g,C=J,L=O;function $(d=!1){const n=[a.default.createElement("meta",{charSet:"utf-8"})];return d||n.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}o($,"defaultHead");function F(d,n){return typeof n=="string"||typeof n=="number"?d:n.type===a.default.Fragment?d.concat(a.default.Children.toArray(n.props.children).reduce((u,l)=>typeof l=="string"||typeof l=="number"?u:u.concat(l),[])):d.concat(n)}o(F,"onlyReactElement");const j=["name","httpEquiv","charSet","itemProp"];function W(){const d=new Set,n=new Set,u=new Set,l={};return r=>{let c=!0,s=!1;if(r.key&&typeof r.key!="number"&&r.key.indexOf("$")>0){s=!0;const _=r.key.slice(r.key.indexOf("$")+1);d.has(_)?c=!1:d.add(_)}switch(r.type){case"title":case"base":n.has(r.type)?c=!1:n.add(r.type);break;case"meta":for(let _=0,K=j.length;_<K;_++){const f=j[_];if(!!r.props.hasOwnProperty(f))if(f==="charSet")u.has(f)?c=!1:u.add(f);else{const k=r.props[f],E=l[f]||new Set;(f!=="name"||!s)&&E.has(k)?c=!1:(E.add(k),l[f]=E)}}break}return c}}o(W,"unique");function R(d,n){const{inAmpMode:u}=n;return d.reduce(F,[]).reverse().concat($(u).reverse()).filter(W()).reverse().map((l,r)=>{const c=l.key||r;if(process.env.__NEXT_OPTIMIZE_FONTS&&!u&&l.type==="link"&&l.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(s=>l.props.href.startsWith(s))){const s=i({},l.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,a.default.cloneElement(l,s)}return a.default.cloneElement(l,{key:c})})}o(R,"reduceComponents");function z({children:d}){const n=a.useContext(x.AmpStateContext),u=a.useContext(C.HeadManagerContext);return a.default.createElement(y.default,{reduceComponentsToState:R,headManager:u,inAmpMode:L.isInAmpMode(n)},d)}o(z,"Head");var G=z;e.default=G,(typeof e.default=="function"||typeof e.default=="object"&&e.default!==null)&&typeof e.default.__esModule>"u"&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)})(w,w.exports);(function(t){t.exports=w.exports})(H);const ue=Y(H.exports),se="_calendly_embed_i4ehh_4",fe="_calendly_embed__default_i4ehh_8",T={calendly_embed:se,calendly_embed__default:fe},ie="https://assets.calendly.com/assets/external/widget.css",b=o(({tagName:t="div",className:e="",variant:i="default",children:p="",url:m="https://calendly.com/fomolol",text:a="Schedule time with me",color:y="#0069ff",textColor:x="#ffffff",branding:C=!0})=>Q(t,{className:`${T.calendly_embed} ${T[`calendly_embed__${i}`]} ${e} overflow-hidden`,children:[v(A,{src:"https://assets.calendly.com/assets/external/widget.js",strategy:"beforeInteractive"}),v(A,{id:"calendly-script-tag",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:`window.onload = function() { 
          Calendly.initBadgeWidget({ 
            url: ${m}, 
            text: ${a}, 
            color: ${y}, 
            textColor: ${x}, 
            branding: ${C} 
          }); 
        }`}}),v(ue,{children:v("link",{href:ie,rel:"sheet"})}),v("style",{jsx:!0,global:!0,children:`
        .calendly-badge-widget {
          right: 40%;
        }
        .calendly-inline-widget iframe,
        .calendly-badge-widget iframe,
        .calendly-overlay iframe {
          min-height: 70vh;
          margin-bottom: 100px;
        }
        div#onetrust-banner-sdk {
          border-top-right-radius: 20px !important;
          border-top-left-radius: 20px !important;
        }
      `})]}),"CalendlyEmbed");b.propTypes={tagName:h.exports.string,className:h.exports.string,variant:h.exports.oneOf(["default"]),children:h.exports.node};const B=b;b.__docgenInfo={description:"",methods:[],displayName:"CalendlyEmbed",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},url:{defaultValue:{value:"'https://calendly.com/fomolol'",computed:!1},required:!1},text:{defaultValue:{value:"'Schedule time with me'",computed:!1},required:!1},color:{defaultValue:{value:"'#0069ff'",computed:!1},required:!1},textColor:{defaultValue:{value:"'#ffffff'",computed:!1},required:!1},branding:{defaultValue:{value:"true",computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[],displayName:"CalendlyEmbed",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},url:{defaultValue:{value:"'https://calendly.com/fomolol'",computed:!1},required:!1},text:{defaultValue:{value:"'Schedule time with me'",computed:!1},required:!1},color:{defaultValue:{value:"'#0069ff'",computed:!1},required:!1},textColor:{defaultValue:{value:"'#ffffff'",computed:!1},required:!1},branding:{defaultValue:{value:"true",computed:!1},required:!1}}};const be={title:"CalendlyEmbed",component:B,parameters:{storySource:{source:`/**
 * CalendlyEmbed.jsx
 */
 import * as React from 'react';

 // Component(s)
 import CalendlyEmbed from './CalendlyEmbed';

 export default {
   title: 'CalendlyEmbed',
   component: CalendlyEmbed,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <CalendlyEmbed />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:47,line:18},startBody:{col:24,line:18},endBody:{col:47,line:18}}}},layout:"centered"}},V=o(()=>v(B,{}),"Default");V.storyName="default";V.__docgenInfo={description:"",methods:[],displayName:"Default"};V.__docgenInfo={description:"",methods:[],displayName:"Default"};const xe=["Default"];export{V as Default,xe as __namedExportsOrder,be as default};
//# sourceMappingURL=CalendlyEmbed.stories.2d98e346.js.map
