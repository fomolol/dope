var B=Object.defineProperty;var b=(c,p)=>B(c,"name",{value:p,configurable:!0});import{r as O}from"./index.6015db55.js";import{p as u}from"./index.3c944792.js";import{h as S,L as T,P as E}from"./index.132c8052.js";import{j as q}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const F="_radial_rainbows_1f3tx_4",P="_radial_rainbows__default_1f3tx_8",D={radial_rainbows:F,radial_rainbows__default:P},f=b(({tagName:c="canvas",className:p="absolute top-0 left-0 w-screen h-screen",variant:z="default",children:I=""})=>{const g=O.exports.useRef(),m=S({ref:g});return T(()=>{if(m){const{view:a}=m,{Point:d,Path:k}=E;for(var e=a.center,R=[],M=4,n=0,_=60;n<_;n++){var $=1-n/_*1.5,j=n/_*M*360,l={hue:j,saturation:1,brightness:$};R.push(l)}var C=Math.max(a.size.width,a.size.height)*.75,h=new k.Rectangle({rectangle:a.bounds,fillColor:{origin:e,destination:new d(e.x+C,0),gradient:{stops:[["white",0],["white",.05],["white",.07],...R.splice(0,5),["black",.95],["black",.2],["black",1]],radial:!0}}}),l=h.fillColor,x=l.gradient,o=!1,i=a.center,r=!1,t=new d(150,0);a.onMouseDown=s=>{o=!0,i=s.point},a.onMouseDrag=s=>{i=s.point},a.onMouseUp=s=>{t.length=10,o=!1},a.onFrame=({delta:s,time:v,count:N})=>{for(var y=0,L=x.stops.length;y<L;y++)x.stops[y].color.hue-=20;r&&t.length>300?r=!1:!r&&t.length<75&&(r=!0),o?(e.x=e.x+(i.x-e.x)/10,e.y=e.y+(i.y-e.y)/10):(t.length+=r?1:-1,t.angle+=5),l.highlight=o?e:new d({x:e.x+t.x,y:e.y+t.y})},a.onResize=s=>{e=a.center,h.bounds=a.bounds;var v=h.fillColor;v.origin=e;var N=Math.max(a.size.width,a.size.height)*.75;v.destination=new d(e.x+N,0)}}},[m]),q(c,{className:`${D.radial_rainbows} ${D[`radial_rainbows__${z}`]} ${p}`,ref:g,"data-paper-resize":"true",children:I})},"RadialRainbows");f.propTypes={tagName:u.exports.string,className:u.exports.string,variant:u.exports.oneOf(["default"]),children:u.exports.node};const V=f;f.__docgenInfo={description:"",methods:[],displayName:"RadialRainbows",props:{tagName:{defaultValue:{value:"'canvas'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute top-0 left-0 w-screen h-screen'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"RadialRainbows",props:{tagName:{defaultValue:{value:"'canvas'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute top-0 left-0 w-screen h-screen'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const te={title:"RadialRainbows",component:V,parameters:{storySource:{source:`/**
 * RadialRainbows.jsx
 */
 import * as React from 'react';

 // Component(s)
 import RadialRainbows from './RadialRainbows';

 export default {
   title: 'RadialRainbows',
   component: RadialRainbows,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <RadialRainbows />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:48,line:18},startBody:{col:24,line:18},endBody:{col:48,line:18}}}},layout:"centered"}},w=b(()=>q(V,{}),"Default");w.storyName="default";w.__docgenInfo={description:"",methods:[],displayName:"Default"};w.__docgenInfo={description:"",methods:[],displayName:"Default"};const se=["Default"];export{w as Default,se as __namedExportsOrder,te as default};
//# sourceMappingURL=RadialRainbows.stories.1468d5b2.js.map
