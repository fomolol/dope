import{a as d,b as t}from"./jsx-runtime-4ad9da42.js";import"./index-10e52e8a.js";import{p as s}from"./index-67732e07.js";import"./_commonjsHelpers-35101cd5.js";const m="_noise_grain_9mznl_4",f="_noise_grain__default_9mznl_7",o={noise_grain:m,noise_grain__default:f},n=({tagName:l="div",className:u="fixed inset-0 w-full h-full pointer-events-none",variant:e="grain",noiseSrc:p="../../public/noise.png",scratchesSrc:c="../../public/scratches.webp"})=>d(l,{className:`${o.noise_grain} ${o[`noise_grain__${e}`]} ${u}`,children:[(e==="noise"||e==="both")&&t("div",{className:`h-full ${o["c-noise"]}`}),(e==="grain"||e==="both")&&t("div",{className:`h-full w-full ${o["c-old"]} mix-blend-multiply`}),t("style",{jsx:!0,children:`
        .c-noise {
          /* animation: grain 6s steps(10) infinite; */
          background-image: url(${p});
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
      `})]});n.propTypes={tagName:s.exports.string,className:s.exports.string,variant:s.exports.oneOf(["grain","noise","both"]),children:s.exports.node};const r=n;n.__docgenInfo={description:"",methods:[],displayName:"NoiseGrain",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed inset-0 w-full h-full pointer-events-none'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'grain'",computed:!1},type:{name:"enum",value:[{value:"'grain'",computed:!1},{value:"'noise'",computed:!1},{value:"'both'",computed:!1}]},required:!1,description:""},noiseSrc:{defaultValue:{value:"'../../public/noise.png'",computed:!1},required:!1},scratchesSrc:{defaultValue:{value:"'../../public/scratches.webp'",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};const N={title:"NoiseGrain",component:r,parameters:{layout:"centered"}},a=()=>t(r,{});a.storyName="default";var i;a.parameters={...a.parameters,storySource:{source:"() => <NoiseGrain />",...(i=a.parameters)==null?void 0:i.storySource}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};const v=["Default"];export{a as Default,v as __namedExportsOrder,N as default};
//# sourceMappingURL=NoiseGrain.stories-674deed4.js.map
