var z=Object.defineProperty;var f=(e,n)=>z(e,"name",{value:n,configurable:!0});import{R as i,r as C}from"./index.6015db55.js";import{p as V}from"./index.3c944792.js";import{u as H}from"./react-intersection-observer.esm.5da2dd72.js";import{q as M}from"./iframe.1f35fd3c.js";import{j as x}from"./jsx-runtime.547177f5.js";import{m as I}from"./motion.896eb0c0.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";function q(){return q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},q.apply(this,arguments)}f(q,"_extends");function B(e,n){if(e==null)return{};var l={},r=Object.keys(e),u,o;for(o=0;o<r.length;o++)u=r[o],!(n.indexOf(u)>=0)&&(l[u]=e[u]);return l}f(B,"_objectWithoutPropertiesLoose");function F(e){C.exports.useEffect(e,[])}f(F,"useOnMount");function J(e,n){n===void 0&&(n={});var l=n,r=l.volume,u=r===void 0?1:r,o=l.playbackRate,v=o===void 0?1:o,y=l.soundEnabled,d=y===void 0?!0:y,_=l.interrupt,S=_===void 0?!1:_,h=l.onload,s=B(l,["id","volume","playbackRate","soundEnabled","interrupt","onload"]),c=i.useRef(null),p=i.useRef(!1),g=i.useState(null),b=g[0],m=g[1],R=i.useState(null),a=R[0],E=R[1],j=f(function(){typeof h=="function"&&h.call(this),p.current&&m(this.duration()*1e3),E(this)},"handleLoad");F(function(){return M(()=>import("./howler.e226f750.js").then(t=>t.h),["assets/howler.e226f750.js","assets/howler.415d93e1.js","assets/iframe.1f35fd3c.js"]).then(function(t){if(!p.current){var w;c.current=(w=t.Howl)!==null&&w!==void 0?w:t.default.Howl,p.current=!0,new c.current(q({src:Array.isArray(e)?e:[e],volume:u,rate:v,onload:j},s))}}),function(){p.current=!1}}),i.useEffect(function(){c.current&&a&&E(new c.current(q({src:Array.isArray(e)?e:[e],volume:u,onload:j},s)))},[JSON.stringify(e)]),i.useEffect(function(){a&&(a.volume(u),a.rate(v))},[u,v]);var $=i.useCallback(function(t){typeof t>"u"&&(t={}),!(!a||!d&&!t.forceSoundEnabled)&&(S&&a.stop(),t.playbackRate&&a.rate(t.playbackRate),a.play(t.id))},[a,d,S]),k=i.useCallback(function(t){!a||a.stop(t)},[a]),T=i.useCallback(function(t){!a||a.pause(t)},[a]),P=[$,{sound:a,stop:k,pause:T,duration:b}];return P}f(J,"useSound");const K="_scroll_snap_section_y1kcv_4",W="_scroll_snap_section__default_y1kcv_8",L={scroll_snap_section:K,scroll_snap_section__default:W},O={visible:{opacity:1,scale:1,transition:{duration:.5}},hidden:{opacity:0,scale:.8}},G={visible:{opacity:1,x:0,transition:{duration:.5}},hidden:{opacity:0,x:-500}},N=f(({tagName:e="section",className:n="flex flex-col items-center justify-center flex-none w-full z-content",innerClassName:l="flex justify-center items-center w-full",variant:r="default",children:u="",full:o=!1,half:v=!1,triggerOnce:y=!1,content:d=!1,variants:_,transLeft:S=!1,transScale:h=!1,skipAnimation:s=!0,sound:c="/sounds/100472__iluppai__piano-chord-explosion.mp3"})=>{const[p,{stop:g}]=J(c),{ref:b,inView:m,entry:R}=H({threshold:d?.15:.75,triggerOnce:y});let a=_||(S?G:O);return C.exports.useEffect(()=>{m?p():g()},[m]),x(e,{className:`${L.scroll_snap_section} ${L[`scroll_snap_section__${r}`]} ${n}`,ref:b,style:d?{height:"auto",scrollSnapAlign:"start"}:{height:o?"100vh":v?"50vh":120,scrollSnapAlign:"center"},children:d?x(I.div,{className:"relative w-full h-auto",initial:s?"":"hidden",animate:s?"":m?"visible":"hidden",variants:s?null:a,children:u}):x(I.div,{className:l,initial:s?"":"hidden",animate:s?"":m?"visible":"hidden",variants:s?null:a,children:u})})},"ScrollSnapSection");N.propTypes={tagName:V.exports.string,className:V.exports.string,variant:V.exports.oneOf(["default"]),children:V.exports.node};const A=N;N.__docgenInfo={description:"",methods:[],displayName:"ScrollSnapSection",props:{tagName:{defaultValue:{value:"'section'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'flex flex-col items-center justify-center flex-none w-full z-content'",computed:!1},type:{name:"string"},required:!1,description:""},innerClassName:{defaultValue:{value:"'flex justify-center items-center w-full'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},full:{defaultValue:{value:"false",computed:!1},required:!1},half:{defaultValue:{value:"false",computed:!1},required:!1},triggerOnce:{defaultValue:{value:"false",computed:!1},required:!1},content:{defaultValue:{value:"false",computed:!1},required:!1},transLeft:{defaultValue:{value:"false",computed:!1},required:!1},transScale:{defaultValue:{value:"false",computed:!1},required:!1},skipAnimation:{defaultValue:{value:"true",computed:!1},required:!1},sound:{defaultValue:{value:"'/sounds/100472__iluppai__piano-chord-explosion.mp3'",computed:!1},required:!1}}};N.__docgenInfo={description:"",methods:[],displayName:"ScrollSnapSection",props:{tagName:{defaultValue:{value:"'section'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'flex flex-col items-center justify-center flex-none w-full z-content'",computed:!1},type:{name:"string"},required:!1,description:""},innerClassName:{defaultValue:{value:"'flex justify-center items-center w-full'",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},full:{defaultValue:{value:"false",computed:!1},required:!1},half:{defaultValue:{value:"false",computed:!1},required:!1},triggerOnce:{defaultValue:{value:"false",computed:!1},required:!1},content:{defaultValue:{value:"false",computed:!1},required:!1},transLeft:{defaultValue:{value:"false",computed:!1},required:!1},transScale:{defaultValue:{value:"false",computed:!1},required:!1},skipAnimation:{defaultValue:{value:"true",computed:!1},required:!1},sound:{defaultValue:{value:"'/sounds/100472__iluppai__piano-chord-explosion.mp3'",computed:!1},required:!1}}};const ne={title:"ScrollSnapSection",component:A,parameters:{storySource:{source:`/**
 * ScrollSnapSection.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ScrollSnapSection from './ScrollSnapSection';

 export default {
   title: 'ScrollSnapSection',
   component: ScrollSnapSection,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ScrollSnapSection />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:51,line:18},startBody:{col:24,line:18},endBody:{col:51,line:18}}}},layout:"centered"}},D=f(()=>x(A,{}),"Default");D.storyName="default";D.__docgenInfo={description:"",methods:[],displayName:"Default"};D.__docgenInfo={description:"",methods:[],displayName:"Default"};const ue=["Default"];export{D as Default,ue as __namedExportsOrder,ne as default};
//# sourceMappingURL=ScrollSnapSection.stories.efd7ed07.js.map
