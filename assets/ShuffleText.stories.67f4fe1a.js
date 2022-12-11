var M=Object.defineProperty;var h=(n,c)=>M(n,"name",{value:c,configurable:!0});import{r as u}from"./index.6015db55.js";import{p as x}from"./index.3c944792.js";import{L as C}from"./index.132c8052.js";import{j as D}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";var B={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(n){(function(){var c={}.hasOwnProperty;function o(){for(var r=[],s=0;s<arguments.length;s++){var e=arguments[s];if(!!e){var t=typeof e;if(t==="string"||t==="number")r.push(e);else if(Array.isArray(e)){if(e.length){var d=o.apply(null,e);d&&r.push(d)}}else if(t==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){r.push(e.toString());continue}for(var p in e)c.call(e,p)&&e[p]&&r.push(p)}}}return r.join(" ")}h(o,"classNames"),n.exports?(o.default=o,n.exports=o):window.classNames=o})()})(B);const V=B.exports;const _=h(({tagName:n="h2",className:c="text-white transition-all duration-1000 ease-out font-stolzl hover:text-purple-400",variant:o="default",defaultText:r,hoverText:s,characters:e="\u2588\u2585\u2589\u2584\u258B\u2583\u258B\u2593\u2594\u259B\u259F\u259E\u259D\u259C\u2595\u2592\u2590"})=>{const[t,d]=u.exports.useState(r),[p,T]=u.exports.useState(r),m=u.exports.useRef(e),l=u.exports.useRef(0),f=u.exports.useRef([]),w=u.exports.useCallback(()=>{let i="";for(;i.length<l.current;)i+=m.current.charAt(Math.floor(Math.random()*m.current.length));T(i)},[]),g=u.exports.useCallback(()=>{if(!f.current.length){f.current=[];for(let a=0;a<t.length;a++)f.current.push({countdown:Math.floor(Math.random()*12)+1,correctLetter:t.charAt(a)})}let i=!1,y="";for(let a=0;a<f.current.length;a++){let S=f.current[a];S.countdown>0?(i=!0,S.countdown--,y+=m.current.charAt(Math.floor(Math.random()*m.current.length))):y+=S.correctLetter}T(y),i===!0?setTimeout(g,50):(l.current=0,f.current=[])},[t]),v=u.exports.useCallback(()=>{l.current<t.length?(l.current+=2,l.current>t.length&&(l.current=t.length),w(),setTimeout(v,20)):setTimeout(g,20)},[g,w,t]);return C(()=>{v()},[v]),D(n,{className:V(c,{hoverFont:t===s}),onMouseEnter:()=>d(s),onMouseLeave:()=>d(r),children:p})},"ShuffleText");_.propTypes={tagName:x.exports.string,className:x.exports.string,variant:x.exports.oneOf(["default"]),children:x.exports.node};const q=_;_.__docgenInfo={description:"",methods:[],displayName:"ShuffleText",props:{tagName:{defaultValue:{value:"'h2'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'text-white transition-all duration-1000 ease-out font-stolzl hover:text-purple-400'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},characters:{defaultValue:{value:"'\u2588\u2585\u2589\u2584\u258B\u2583\u258B\u2593\u2594\u259B\u259F\u259E\u259D\u259C\u2595\u2592\u2590'",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};_.__docgenInfo={description:"",methods:[],displayName:"ShuffleText",props:{tagName:{defaultValue:{value:"'h2'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'text-white transition-all duration-1000 ease-out font-stolzl hover:text-purple-400'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},characters:{defaultValue:{value:"'\u2588\u2585\u2589\u2584\u258B\u2583\u258B\u2593\u2594\u259B\u259F\u259E\u259D\u259C\u2595\u2592\u2590'",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};const G={title:"ShuffleText",component:q,parameters:{storySource:{source:`/**
 * ShuffleText.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ShuffleText from './ShuffleText';

 export default {
   title: 'ShuffleText',
   component: ShuffleText,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ShuffleText />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:45,line:18},startBody:{col:24,line:18},endBody:{col:45,line:18}}}},layout:"centered"}},N=h(()=>D(q,{}),"Default");N.storyName="default";N.__docgenInfo={description:"",methods:[],displayName:"Default"};N.__docgenInfo={description:"",methods:[],displayName:"Default"};const H=["Default"];export{N as Default,H as __namedExportsOrder,G as default};
//# sourceMappingURL=ShuffleText.stories.67f4fe1a.js.map
