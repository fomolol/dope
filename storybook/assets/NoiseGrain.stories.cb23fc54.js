var p=Object.defineProperty;var l=(i,s)=>p(i,"name",{value:s,configurable:!0});import"./index.6015db55.js";import{p as a}from"./index.3c944792.js";import{b as f,j as t}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";const m="_noise_grain_9mznl_4",g="_noise_grain__default_9mznl_7",n={noise_grain:m,noise_grain__default:g},o=l(({tagName:i="div",className:s="fixed inset-0 w-full h-full pointer-events-none",variant:e="grain",noiseSrc:d="../../public/noise.png",scratchesSrc:c="../../public/scratches.webp"})=>f(i,{className:`${n.noise_grain} ${n[`noise_grain__${e}`]} ${s}`,children:[(e==="noise"||e==="both")&&t("div",{className:`h-full ${n["c-noise"]}`}),(e==="grain"||e==="both")&&t("div",{className:`h-full w-full ${n["c-old"]} mix-blend-multiply`}),t("style",{jsx:!0,children:`
        .c-noise {
          /* animation: grain 6s steps(10) infinite; */
          background-image: url(${d});
          background-repeat: repeat;
          height: 100%;
          left: -50%;
          opacity: 0.035;
          position: absolute;
          top: -100%;
          width: 300%;
          z-index: 100;
          pointer-events: none;
        }

        .c-old {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url(${c});
          opacity: 0.05;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          z-index: 150;
          pointer-events: none;
        }
      `})]}),"NoiseGrain");o.propTypes={tagName:a.exports.string,className:a.exports.string,variant:a.exports.oneOf(["grain","noise","both"]),children:a.exports.node};const u=o;o.__docgenInfo={description:"",methods:[],displayName:"NoiseGrain",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed inset-0 w-full h-full pointer-events-none'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'grain'",computed:!1},type:{name:"enum",value:[{value:"'grain'",computed:!1},{value:"'noise'",computed:!1},{value:"'both'",computed:!1}]},required:!1,description:""},noiseSrc:{defaultValue:{value:"'../../public/noise.png'",computed:!1},required:!1},scratchesSrc:{defaultValue:{value:"'../../public/scratches.webp'",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"NoiseGrain",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed inset-0 w-full h-full pointer-events-none'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'grain'",computed:!1},type:{name:"enum",value:[{value:"'grain'",computed:!1},{value:"'noise'",computed:!1},{value:"'both'",computed:!1}]},required:!1,description:""},noiseSrc:{defaultValue:{value:"'../../public/noise.png'",computed:!1},required:!1},scratchesSrc:{defaultValue:{value:"'../../public/scratches.webp'",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};const b={title:"NoiseGrain",component:u,parameters:{storySource:{source:`/**
 * NoiseGrain.jsx
 */
 import * as React from 'react';

 // Component(s)
 import NoiseGrain from './NoiseGrain';

 export default {
   title: 'NoiseGrain',
   component: NoiseGrain,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <NoiseGrain />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:44,line:18},startBody:{col:24,line:18},endBody:{col:44,line:18}}}},layout:"centered"}},r=l(()=>t(u,{}),"Default");r.storyName="default";r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};const x=["Default"];export{r as Default,x as __namedExportsOrder,b as default};
//# sourceMappingURL=NoiseGrain.stories.cb23fc54.js.map
