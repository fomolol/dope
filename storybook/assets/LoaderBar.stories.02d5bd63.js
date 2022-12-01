var q=Object.defineProperty;var a=(d,s)=>q(d,"name",{value:s,configurable:!0});import{r as V}from"./index.6015db55.js";import{p as r}from"./index.3c944792.js";import{L as h}from"./index.132c8052.js";import{j as l,b as x}from"./jsx-runtime.547177f5.js";import{m as b}from"./motion.896eb0c0.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const B="_loader_bar_15e35_4",D="_loader_bar__default_15e35_8",p={loader_bar:B,loader_bar__default:D},o=a(({tagName:d="div",className:s="",variant:_="default",children:g="",loadingPercentage:v=0,onLoadProgress:y=a(i=>{},"onLoadProgress"),onLoaderHideCallback:L=a(()=>{},"onLoaderHideCallback"),infinite:u=!1,time:N=25})=>{const i=v,[e,f]=V.exports.useState(i);return h(()=>{let t;if(t||(t=setTimeout(()=>{const c=e+.5;f(c),y(c)},N)),u&&e>=100){f(0);return}else if(e>=100){L(),clearTimeout(t);return}return()=>clearTimeout(t)},[u,e]),l(d,{className:`${p.loader_bar} ${p[`loader_bar__${_}`]} z-infinity ${s}`,children:x("div",{className:"flex flex-col items-center loader-modal--container",children:[l(b.div,{className:"h-[8px] w-[200px] overflow-hidden bg-black",children:l("div",{className:"h-full bg-gray-600 loading-status-bar",style:{width:`${e}%`}})}),g]})})},"LoaderBar");o.propTypes={tagName:r.exports.string,className:r.exports.string,variant:r.exports.oneOf(["default"]),children:r.exports.node};const m=o;o.__docgenInfo={description:"",methods:[],displayName:"LoaderBar",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},loadingPercentage:{defaultValue:{value:"0",computed:!1},required:!1},onLoadProgress:{defaultValue:{value:"(percentage) => {}",computed:!1},required:!1},onLoaderHideCallback:{defaultValue:{value:"() => {}",computed:!1},required:!1},infinite:{defaultValue:{value:"false",computed:!1},required:!1},time:{defaultValue:{value:"25",computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"LoaderBar",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},loadingPercentage:{defaultValue:{value:"0",computed:!1},required:!1},onLoadProgress:{defaultValue:{value:"(percentage) => {}",computed:!1},required:!1},onLoaderHideCallback:{defaultValue:{value:"() => {}",computed:!1},required:!1},infinite:{defaultValue:{value:"false",computed:!1},required:!1},time:{defaultValue:{value:"25",computed:!1},required:!1}}};const R={title:"LoaderBar",component:m,parameters:{storySource:{source:`/**
 * LoaderBar.jsx
 */
 import * as React from 'react';

 // Component(s)
 import LoaderBar from './LoaderBar';

 export default {
   title: 'LoaderBar',
   component: LoaderBar,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <LoaderBar />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:43,line:18},startBody:{col:24,line:18},endBody:{col:43,line:18}}}},layout:"centered"}},n=a(()=>l(m,{}),"Default");n.storyName="default";n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"Default"};const A=["Default"];export{n as Default,A as __namedExportsOrder,R as default};
//# sourceMappingURL=LoaderBar.stories.02d5bd63.js.map
