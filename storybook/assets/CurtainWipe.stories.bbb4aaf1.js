var u=Object.defineProperty;var i=(a,n)=>u(a,"name",{value:n,configurable:!0});import"./index.6015db55.js";import{p as e}from"./index.3c944792.js";import{j as s}from"./jsx-runtime.547177f5.js";import{m as d}from"./motion.896eb0c0.js";import"./iframe.1f35fd3c.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const c="_curtain_wipe_1gl64_4",m="_curtain_wipe__default_1gl64_8",r={curtain_wipe:c,curtain_wipe__default:m},t=i(({tagName:a=d.div,className:n="fixed inset-0 w-screen h-screen origin-top transform bg-black pointer-events-none min-h-screen-ios h-screen-ios",variant:l="default"})=>s(a,{initial:{scaleY:1,rotate:0},animate:{scaleY:0,rotate:.4},transition:{duration:1.15,delay:1.5,ease:[.6,.05,-.01,.9]},className:`${r.curtain_wipe} ${r[`curtain_wipe__${l}`]} ${n}`}),"CurtainWipe");t.propTypes={tagName:e.exports.object,className:e.exports.string,variant:e.exports.oneOf(["default"]),children:e.exports.node};const p=t;t.__docgenInfo={description:"",methods:[],displayName:"CurtainWipe",props:{tagName:{defaultValue:{value:"motion.div",computed:!0},type:{name:"object"},required:!1,description:""},className:{defaultValue:{value:"'fixed inset-0 w-screen h-screen origin-top transform bg-black pointer-events-none min-h-screen-ios h-screen-ios'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"CurtainWipe",props:{tagName:{defaultValue:{value:"motion.div",computed:!0},type:{name:"object"},required:!1,description:""},className:{defaultValue:{value:"'fixed inset-0 w-screen h-screen origin-top transform bg-black pointer-events-none min-h-screen-ios h-screen-ios'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};const C={title:"CurtainWipe",component:p,parameters:{storySource:{source:`/**
 * CurtainWipe.jsx
 */
 import * as React from 'react';

 // Component(s)
 import CurtainWipe from './CurtainWipe';

 export default {
   title: 'CurtainWipe',
   component: CurtainWipe,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <CurtainWipe />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:45,line:18},startBody:{col:24,line:18},endBody:{col:45,line:18}}}},layout:"centered"}},o=i(()=>s(p,{}),"Default");o.storyName="default";o.__docgenInfo={description:"",methods:[],displayName:"Default"};o.__docgenInfo={description:"",methods:[],displayName:"Default"};const w=["Default"];export{o as Default,w as __namedExportsOrder,C as default};
//# sourceMappingURL=CurtainWipe.stories.bbb4aaf1.js.map
