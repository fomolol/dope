import{b as s}from"./jsx-runtime-4ad9da42.js";import{r as n}from"./index-10e52e8a.js";import{p as a}from"./index-67732e07.js";import"./_commonjsHelpers-35101cd5.js";const f="_sine_wave_h00s9_4",v="_sine_wave__default_h00s9_8",o={sine_wave:f,sine_wave__default:v},t=d=>{const{tagName:u,className:c,variant:p,children:_}=d,r=n.exports.useRef(),{current:m}=r;return n.exports.useEffect(()=>{m.getContext("2d")},[]),s(u,{className:`${o.sine_wave} ${o[`sine_wave__${p}`]} ${c}`,children:s("canvas",{ref:r,style:{width:"100vw",height:"100vh"}})})};t.propTypes={tagName:a.exports.string,className:a.exports.string,variant:a.exports.oneOf(["default"]),children:a.exports.node};t.defaultProps={tagName:"div",className:"",variant:"default",children:""};const l=t;t.__docgenInfo={description:"",methods:[],displayName:"SineWave",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const w={title:"SineWave",component:l,parameters:{layout:"centered"}},e=()=>s(l,{});e.storyName="default";var i;e.parameters={...e.parameters,storySource:{source:"() => <SineWave />",...(i=e.parameters)==null?void 0:i.storySource}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};const x=["Default"];export{e as Default,x as __namedExportsOrder,w as default};
//# sourceMappingURL=SineWave.stories-2bb965c8.js.map
