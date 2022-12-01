var g=Object.defineProperty;var r=(t,a)=>g(t,"name",{value:a,configurable:!0});import{r as u}from"./index.6015db55.js";import{p as o}from"./index.3c944792.js";import{j as e,b as v}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";const x="_random_grid_yvn9x_4",N="_random_grid__default_yvn9x_8",m={random_grid:x,random_grid__default:N},R=r(({left:t=73,top:a=45})=>e("div",{className:"absolute z-10 text-black",style:{left:`${t}%`,top:`${a}%`},children:v("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 100 100",stroke:"current",fill:"none",strokeWidth:"8",className:"text-current stroke-current",children:[e("path",{d:"M0 0 L0 16 M0 0 L16 0",transform:"rotate(0, 50, 50)"}),e("path",{d:"M0 0 L0 16 M0 0 L16 0",transform:"rotate(90, 50, 50)"}),e("path",{d:"M0 0 L0 16 M0 0 L16 0",transform:"rotate(180, 50, 50)"}),e("path",{d:"M0 0 L0 16 M0 0 L16 0",transform:"rotate(270, 50, 50)"})]})}),"RandomCorners"),d=r(({tagName:t="div",className:a="absolute top-0 left-0 w-full h-full",variant:p="default",children:G="",count:c=6})=>{const[s,_]=u.exports.useState(!1);return u.exports.useEffect(()=>{var n;return r(()=>{n=setTimeout(()=>_(!s),2e3)},"refreshGrid")(),()=>clearTimeout(n)},[s]),e(t,{className:`${m.random_grid} ${m[`random_grid__${p}`]} ${a}`,children:[...Array(c).keys()].map((n,i)=>{const h=Math.floor(Math.random()*100),y=Math.floor(Math.random()*100);return e(R,{left:h,top:y},`r-grid-${i}`)})})},"RandomGrid");d.propTypes={tagName:o.exports.string,className:o.exports.string,variant:o.exports.oneOf(["default"]),children:o.exports.node};const f=d;d.__docgenInfo={description:"",methods:[],displayName:"RandomGrid",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute top-0 left-0 w-full h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},count:{defaultValue:{value:"6",computed:!1},required:!1}}};d.__docgenInfo={description:"",methods:[],displayName:"RandomGrid",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute top-0 left-0 w-full h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},count:{defaultValue:{value:"6",computed:!1},required:!1}}};const V={title:"RandomGrid",component:f,parameters:{storySource:{source:`/**
 * RandomGrid.jsx
 */
 import * as React from 'react';

 // Component(s)
 import RandomGrid from './RandomGrid';

 export default {
   title: 'RandomGrid',
   component: RandomGrid,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <RandomGrid />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:44,line:18},startBody:{col:24,line:18},endBody:{col:44,line:18}}}},layout:"centered"}},l=r(()=>e(f,{}),"Default");l.storyName="default";l.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Default"};const $=["Default"];export{l as Default,$ as __namedExportsOrder,V as default};
//# sourceMappingURL=RandomGrid.stories.ada73e18.js.map
