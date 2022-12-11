var _=Object.defineProperty;var l=(o,s)=>_(o,"name",{value:s,configurable:!0});import{r as u}from"./index.6015db55.js";import{p as a}from"./index.3c944792.js";import{j as d}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";const x="_button_fancy_9rz58_4",N={button_fancy:x},n=l(({tagName:o="div",className:s="text-2xl",buttonClassName:f="",variant:g="default",children:p=""})=>{const e=u.exports.useRef(),r=u.exports.useCallback(({offsetX:t,offsetY:m})=>{let y=1-(e.current.offsetWidth-t)/e.current.offsetWidth,v=1-(e.current.offsetHeight-m)/e.current.offsetHeight;e.current.style.setProperty("--perX",(y*100).toFixed(2)+"%"),e.current.style.setProperty("--perY",(v*100).toFixed(2)+"%")},[]);return u.exports.useEffect(()=>{const t=e.current;return t.addEventListener("mousemove",r),()=>t.removeEventListener("mousemove",r)},[e,r]),d(o,{className:`${s}`,children:d("a",{ref:e,href:"#!",className:`${N.button_fancy} ${f}`,children:p})})},"ButtonFancy");n.propTypes={tagName:a.exports.string,className:a.exports.string,variant:a.exports.oneOf(["default"]),children:a.exports.node};const i=n;n.__docgenInfo={description:"",methods:[],displayName:"ButtonFancy",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'text-2xl'",computed:!1},type:{name:"string"},required:!1,description:""},buttonClassName:{defaultValue:{value:"''",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"ButtonFancy",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'text-2xl'",computed:!1},type:{name:"string"},required:!1,description:""},buttonClassName:{defaultValue:{value:"''",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const V={title:"ButtonFancy",component:i,parameters:{storySource:{source:`/**
 * ButtonFancy.jsx
 */
 import * as React from 'react';

 // Component(s)
 import ButtonFancy from './ButtonFancy';

 export default {
   title: 'ButtonFancy',
   component: ButtonFancy,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <ButtonFancy />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:45,line:18},startBody:{col:24,line:18},endBody:{col:45,line:18}}}},layout:"centered"}},c=l(()=>d(i,{}),"Default");c.storyName="default";c.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"Default"};const b=["Default"];export{c as Default,b as __namedExportsOrder,V as default};
//# sourceMappingURL=ButtonFancy.stories.eca92195.js.map
