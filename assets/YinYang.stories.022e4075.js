var y=Object.defineProperty;var r=(n,o)=>y(n,"name",{value:o,configurable:!0});import{r as c}from"./index.6015db55.js";import{p as i}from"./index.3c944792.js";import{n as _,L as h}from"./index.132c8052.js";import{b as Y,j as s}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const x="_yin_yang_1rs25_4",v="_yin_yang__default_1rs25_8",d={yin_yang:x,yin_yang__default:v},a=r(({tagName:n="div",className:o="absolute pointer-events-none z-1 animate-spin",variant:m="default"})=>{const t=c.exports.useRef(),{x:u,y:f}=_(),[e,g]=c.exports.useState();return h(()=>{!e&&(t==null?void 0:t.current)&&g({width:t.current.clientWidth,height:t.current.clientHeight})},[t,e]),Y(n,{className:`${d.yin_yang} ${d[`yin_yang__${m}`]} yinyang ${o}`,ref:t,style:{top:`calc(${f}px - ${e!=null&&e.height?e.height/2:0}px)`,left:`calc(${u}px - ${e!=null&&e.width?e.width/2:0}px)`},children:[s("style",{jsx:!0,children:`
        .yinyang {
          width: calc(10rem / 3);
          height: calc(10rem / 3);
          background: radial-gradient(
                #000 calc(0.5em / 3),
                #fff calc(0.5em / 3),
                #fff calc(2.5em / 3),
                transparent calc(2.5em / 3)
              )
              center top / 50% 50% no-repeat,
            radial-gradient(
                #fff calc(0.5em / 3),
                #000 calc(0.5em / 3),
                #000 calc(2.5em / 3),
                transparent calc(2.5em / 3)
              )
              center bottom / 50% 50% no-repeat,
            linear-gradient(90deg, #fff 50%, #000 50%);
          border-radius: 50%;
          box-shadow: 0 0 0 0.1em #000;
        }
      `}),s("style",{jsx:!0,global:!0,children:`
        html,
        body {
          cursor: none;
        }

        html *,
        body * {
          cursor: none;
        }
      `})]})},"YinYang");a.propTypes={tagName:i.exports.string,className:i.exports.string,variant:i.exports.oneOf(["default"])};const p=a;a.__docgenInfo={description:"",methods:[],displayName:"YinYang",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute pointer-events-none z-1 animate-spin'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"YinYang",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute pointer-events-none z-1 animate-spin'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""}}};const R={title:"YinYang",component:p,parameters:{storySource:{source:`/**
 * YinYang.jsx
 */
 import * as React from 'react';

 // Component(s)
 import YinYang from './YinYang';

 export default {
   title: 'YinYang',
   component: YinYang,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <YinYang />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:41,line:18},startBody:{col:24,line:18},endBody:{col:41,line:18}}}},layout:"centered"}},l=r(()=>s(p,{}),"Default");l.storyName="default";l.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Default"};const T=["Default"];export{l as Default,T as __namedExportsOrder,R as default};
//# sourceMappingURL=YinYang.stories.022e4075.js.map
