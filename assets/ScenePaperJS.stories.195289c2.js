var _=Object.defineProperty;var s=(t,o)=>_(t,"name",{value:o,configurable:!0});import{r as S}from"./index.6015db55.js";import{p as r}from"./index.3c944792.js";import{h as y,L as g}from"./index.132c8052.js";import{j as d}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const v="_scene_paper_j_s_1lwa7_4",N="_scene_paper_j_s__default_1lwa7_8",i={scene_paper_j_s:v,scene_paper_j_s__default:N},a=s(({tagName:t="canvas",className:o="absolute top-0 left-0 w-screen h-screen bg-black opacity-100",variant:m="default"})=>{const l=S.exports.useRef(),e=y({ref:l});return g(()=>{if(e){console.log("project",e);const{view:n}=e;console.log("view",n),n.onFrame=({delta:c,time:j,count:f})=>{console.log("tick",f)},n.onResize=c=>{console.log("event",c)}}},[e]),d(t,{className:`${i.scene_paper_j_s} ${i[`scene_paper_j_s__${m}`]} ${o}`,ref:l})},"ScenePaperJS");a.propTypes={tagName:r.exports.string,className:r.exports.string,variant:r.exports.oneOf(["default"])};const u=a;a.__docgenInfo={description:"",methods:[],displayName:"ScenePaperJS",props:{tagName:{defaultValue:{value:"'canvas'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute top-0 left-0 w-screen h-screen bg-black opacity-100'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"ScenePaperJS",props:{tagName:{defaultValue:{value:"'canvas'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute top-0 left-0 w-screen h-screen bg-black opacity-100'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""}}};const R={title:"ScenePaperJS",component:u,parameters:{storySource:{source:`/**
 * ScenePaperJS.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ScenePaperJS from './ScenePaperJS';

 export default {
   title: 'ScenePaperJS',
   component: ScenePaperJS,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ScenePaperJS />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:46,line:18},startBody:{col:24,line:18},endBody:{col:46,line:18}}}},layout:"centered"}},p=s(()=>d(u,{}),"Default");p.storyName="default";p.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"Default"};const B=["Default"];export{p as Default,B as __namedExportsOrder,R as default};
//# sourceMappingURL=ScenePaperJS.stories.195289c2.js.map
