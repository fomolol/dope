var _=Object.defineProperty;var t=(e,a)=>_(e,"name",{value:a,configurable:!0});import{r as u}from"./index.6015db55.js";import{p as s}from"./index.3c944792.js";import{j as o}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";const j="_blaster_image_1vboz_4",v="_blaster_image__default_1vboz_8",d={blaster_image:j,blaster_image__default:v},y=t(e=>new Promise(a=>setTimeout(a,e)),"sleep"),r=t(({tagName:e="div",className:a="absolute inset-0 object-cover w-full h-screen",variant:c="default",children:I="",items:m=["/img/blaster/0.jpeg","/img/blaster/1.jpeg","/img/blaster/0.jpeg","/img/blaster/1.jpeg","/img/blaster/2.jpeg","/img/blaster/0.jpeg","/img/blaster/1.jpeg","/img/blaster/2.jpeg"],seconds:g=.44})=>{const f=g*1e3,[l,b]=u.exports.useState(0);return u.exports.useEffect(()=>{t(async()=>{await y(f);let n=l+1;n>=m.length-1&&(n=0),b(n)},"update")()},[l]),o(e,{className:`${d.blaster_image} ${d[`blaster_image__${c}`]} ${a}`,children:o("img",{src:m[l],alt:"",className:"object-cover w-full min-h-screen min-"},`blast-img-${l}`)})},"BlasterImage");r.propTypes={tagName:s.exports.string,className:s.exports.string,variant:s.exports.oneOf(["default"]),children:s.exports.node};const p=r;r.__docgenInfo={description:"",methods:[],displayName:"BlasterImage",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute inset-0 object-cover w-full h-screen'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},items:{defaultValue:{value:`[
  '/img/blaster/0.jpeg',
  '/img/blaster/1.jpeg',
  '/img/blaster/0.jpeg',
  '/img/blaster/1.jpeg',
  '/img/blaster/2.jpeg',
  '/img/blaster/0.jpeg',
  '/img/blaster/1.jpeg',
  '/img/blaster/2.jpeg',
]`,computed:!1},required:!1},seconds:{defaultValue:{value:"0.44",computed:!1},required:!1}}};r.__docgenInfo={description:"",methods:[],displayName:"BlasterImage",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute inset-0 object-cover w-full h-screen'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},items:{defaultValue:{value:`[
  '/img/blaster/0.jpeg',
  '/img/blaster/1.jpeg',
  '/img/blaster/0.jpeg',
  '/img/blaster/1.jpeg',
  '/img/blaster/2.jpeg',
  '/img/blaster/0.jpeg',
  '/img/blaster/1.jpeg',
  '/img/blaster/2.jpeg',
]`,computed:!1},required:!1},seconds:{defaultValue:{value:"0.44",computed:!1},required:!1}}};const D={title:"BlasterImage",component:p,parameters:{storySource:{source:`/**
 * BlasterImage.jsx
 */
 import * as React from 'react';

 // Component(s)
 import BlasterImage from './BlasterImage';

 export default {
   title: 'BlasterImage',
   component: BlasterImage,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <BlasterImage />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:46,line:18},startBody:{col:24,line:18},endBody:{col:46,line:18}}}},layout:"centered"}},i=t(()=>o(p,{}),"Default");i.storyName="default";i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Default"};const w=["Default"];export{i as Default,w as __namedExportsOrder,D as default};
//# sourceMappingURL=BlasterImage.stories.ce4fc363.js.map
