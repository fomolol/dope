var D=Object.defineProperty;var r=(o,n)=>D(o,"name",{value:n,configurable:!0});import{r as q}from"./index.6015db55.js";import{p as d}from"./index.3c944792.js";import{b as m,j as e}from"./jsx-runtime.547177f5.js";import{u as C,a}from"./use-scroll.8d391309.js";import{a as l}from"./use-motion-template.e5260baa.js";import{m as h}from"./motion.896eb0c0.js";import"./iframe.1f35fd3c.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const V="_sticky_image_explode_1vccs_4",R="_sticky_image_explode__default_1vccs_8",v={sticky_image_explode:V,sticky_image_explode__default:R},O=r(()=>e("div",{className:"absolute bottom-0 left-0 w-full pointer-events-none",style:{height:"calc(100% - 100vh)"}}),"Placeholder"),z=r(({className:o='bg-[#4E6868] bg-[url("/img/fpo-bg1.jpeg")]',borderRadius:n="20vw",transform:s="translate(0px, 244.543px) scale(0.26, 0.26)",children:c=""})=>e(h.div,{className:`sticky left-[5px] top-[5px] bg-cover bg-center bg-no-repeat duration-200 ease-[cubic-bezier(0,1,0,1)] will-change-transform ${o}`,style:{borderRadius:n,transform:s,transformOrigin:"top center",width:"calc(100% - 10px)",height:"calc(150rem - 10px)"},children:c}),"ImageContainer"),u=r(({borderRadius:o="20vw",transform:n="rotate(25deg) scale(0.63, 0.63)",className:s='bg-[#4E6868] bg-[url("/img/fpo-bg1.jpeg")]'})=>e(h.div,{className:`absolute left-0 top-0 h-full w-full origin-center bg-cover bg-center bg-no-repeat duration-200 ease-[cubic-bezier(0,1,0,1)] will-change-transform ${s}`,style:{borderRadius:o,transform:n}}),"ImageContainerInner"),p=r(({tagName:o="div",className:n="absolute flex flex-col items-center justify-center w-full h-screen overflow-hidden",variant:s="default"})=>{const c=q.exports.useRef(),{scrollYProgress:t}=C({container:c}),b=a(t,[0,.35],[20,2]),i=l`${b}vw`,g=a(t,[0,.35],[.26,1]),k=a(t,[0,.35],[244.543,0]),x=a(t,[0,.35,.55],[.63,1,.85]),y=a(t,[0,.35,.55],[.37,1,.75]),_=a(t,[0,.35,.55],[0,1,.65]),w=a(t,[0,.5],["25deg","0deg"]),N=a(t,[0,.5],["50deg","0deg"]),$=a(t,[0,.5],["75deg","0deg"]),E=l`translate(0px, ${k}px) scale(${g}, ${g})`,S=l`translate3d(0px, 0px, 0px) rotate(${w}) scale(${x}, ${x})`,T=l`translate3d(0px, 0px, 0px) rotate(${N}) scale(${y}, ${y})`,j=l`translate3d(0px, 0px, 0px) rotate(${$}) scale(${_}, ${_})`;return m(o,{className:`${v.sticky_image_explode} ${v[`sticky_image_explode__${s}`]} ${n}`,children:[e("div",{className:"relative w-full h-full",children:m("div",{className:"absolute top-0 left-0 w-full h-screen overflow-scroll overflow-touch snap-y snap-proximity",ref:c,children:[e(O,{}),m(z,{borderRadius:i,transform:E,children:[e(u,{borderRadius:i,transform:S}),e(u,{borderRadius:i,transform:T}),e(u,{borderRadius:i,transform:j})]})]})}),e("style",{jsx:!0,children:`
        .overflow-touch {
          -webkit-overflow-scrolling: touch;
        }
      `})]})},"StickyImageExplode");p.propTypes={tagName:d.exports.string,className:d.exports.string,variant:d.exports.oneOf(["default"]),children:d.exports.node};const I=p;p.__docgenInfo={description:"",methods:[],displayName:"StickyImageExplode",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute flex flex-col items-center justify-center w-full h-screen overflow-hidden'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"StickyImageExplode",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute flex flex-col items-center justify-center w-full h-screen overflow-hidden'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};const K={title:"StickyImageExplode",component:I,parameters:{storySource:{source:`/**
 * StickyImageExplode.jsx
 */
 import * as React from 'react';

 // Component(s)
 import StickyImageExplode from './StickyImageExplode';

 export default {
   title: 'StickyImageExplode',
   component: StickyImageExplode,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <StickyImageExplode />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:52,line:18},startBody:{col:24,line:18},endBody:{col:52,line:18}}}},layout:"centered"}},f=r(()=>e(I,{}),"Default");f.storyName="default";f.__docgenInfo={description:"",methods:[],displayName:"Default"};f.__docgenInfo={description:"",methods:[],displayName:"Default"};const Q=["Default"];export{f as Default,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=StickyImageExplode.stories.5784a2de.js.map