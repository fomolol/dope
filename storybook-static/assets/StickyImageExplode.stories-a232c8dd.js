import{a as d,b as e}from"./jsx-runtime-4ad9da42.js";import{r as C}from"./index-10e52e8a.js";import{p}from"./index-67732e07.js";import{u as q,a as r}from"./use-scroll-953d746d.js";import{a as n}from"./use-motion-template-472ea312.js";import{m as h}from"./motion-64fb725c.js";import"./_commonjsHelpers-35101cd5.js";import"./animate-2454e827.js";const D="_sticky_image_explode_1vccs_4",O="_sticky_image_explode__default_1vccs_8",y={sticky_image_explode:D,sticky_image_explode__default:O},R=()=>e("div",{className:"absolute bottom-0 left-0 w-full pointer-events-none",style:{height:"calc(100% - 100vh)"}}),V=({className:a='bg-[#4E6868] bg-[url("/img/fpo-bg1.jpeg")]',borderRadius:o="20vw",transform:s="translate(0px, 244.543px) scale(0.26, 0.26)",children:c=""})=>e(h.div,{className:`sticky left-[5px] top-[5px] bg-cover bg-center bg-no-repeat duration-200 ease-[cubic-bezier(0,1,0,1)] will-change-transform ${a}`,style:{borderRadius:o,transform:s,transformOrigin:"top center",width:"calc(100% - 10px)",height:"calc(150rem - 10px)"},children:c}),m=({borderRadius:a="20vw",transform:o="rotate(25deg) scale(0.63, 0.63)",className:s='bg-[#4E6868] bg-[url("/img/fpo-bg1.jpeg")]'})=>e(h.div,{className:`absolute left-0 top-0 h-full w-full origin-center bg-cover bg-center bg-no-repeat duration-200 ease-[cubic-bezier(0,1,0,1)] will-change-transform ${s}`,style:{borderRadius:a,transform:o}}),f=({tagName:a="div",className:o="absolute flex flex-col items-center justify-center w-full h-screen overflow-hidden",variant:s="default"})=>{const c=C.exports.useRef(),{scrollYProgress:t}=q({container:c}),I=r(t,[0,.35],[20,2]),i=n`${I}vw`,u=r(t,[0,.35],[.26,1]),$=r(t,[0,.35],[244.543,0]),g=r(t,[0,.35,.55],[.63,1,.85]),x=r(t,[0,.35,.55],[.37,1,.75]),_=r(t,[0,.35,.55],[0,1,.65]),w=r(t,[0,.5],["25deg","0deg"]),k=r(t,[0,.5],["50deg","0deg"]),N=r(t,[0,.5],["75deg","0deg"]),T=n`translate(0px, ${$}px) scale(${u}, ${u})`,E=n`translate3d(0px, 0px, 0px) rotate(${w}) scale(${g}, ${g})`,S=n`translate3d(0px, 0px, 0px) rotate(${k}) scale(${x}, ${x})`,j=n`translate3d(0px, 0px, 0px) rotate(${N}) scale(${_}, ${_})`;return d(a,{className:`${y.sticky_image_explode} ${y[`sticky_image_explode__${s}`]} ${o}`,children:[e("div",{className:"relative w-full h-full",children:d("div",{className:"absolute top-0 left-0 w-full h-screen overflow-scroll overflow-touch snap-y snap-proximity",ref:c,children:[e(R,{}),d(V,{borderRadius:i,transform:T,children:[e(m,{borderRadius:i,transform:E}),e(m,{borderRadius:i,transform:S}),e(m,{borderRadius:i,transform:j})]})]})}),e("style",{jsx:!0,children:`
        .overflow-touch {
          -webkit-overflow-scrolling: touch;
        }
      `})]})};f.propTypes={tagName:p.exports.string,className:p.exports.string,variant:p.exports.oneOf(["default"]),children:p.exports.node};const b=f;f.__docgenInfo={description:"",methods:[],displayName:"StickyImageExplode",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute flex flex-col items-center justify-center w-full h-screen overflow-hidden'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};const H={title:"StickyImageExplode",component:b,parameters:{layout:"centered"}},l=()=>e(b,{});l.storyName="default";var v;l.parameters={...l.parameters,storySource:{source:"() => <StickyImageExplode />",...(v=l.parameters)==null?void 0:v.storySource}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};const J=["Default"];export{l as Default,J as __namedExportsOrder,H as default};
//# sourceMappingURL=StickyImageExplode.stories-a232c8dd.js.map
