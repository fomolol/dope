import{b as n}from"./jsx-runtime-4ad9da42.js";import"./index-10e52e8a.js";import{p as t}from"./index-67732e07.js";import{m as c}from"./motion-64fb725c.js";import"./_commonjsHelpers-35101cd5.js";import"./animate-2454e827.js";const l="_curtain_wipe_1gl64_4",d="_curtain_wipe__default_1gl64_8",r={curtain_wipe:l,curtain_wipe__default:d},a=({tagName:o=c.div,className:p="fixed inset-0 w-screen h-screen origin-top transform bg-black pointer-events-none min-h-screen-ios h-screen-ios",variant:u="default"})=>n(o,{initial:{scaleY:1,rotate:0},animate:{scaleY:0,rotate:.4},transition:{duration:1.15,delay:1.5,ease:[.6,.05,-.01,.9]},className:`${r.curtain_wipe} ${r[`curtain_wipe__${u}`]} ${p}`});a.propTypes={tagName:t.exports.object,className:t.exports.string,variant:t.exports.oneOf(["default"]),children:t.exports.node};const s=a;a.__docgenInfo={description:"",methods:[],displayName:"CurtainWipe",props:{tagName:{defaultValue:{value:"motion.div",computed:!0},type:{name:"object"},required:!1,description:""},className:{defaultValue:{value:"'fixed inset-0 w-screen h-screen origin-top transform bg-black pointer-events-none min-h-screen-ios h-screen-ios'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};const h={title:"CurtainWipe",component:s,parameters:{layout:"centered"}},e=()=>n(s,{});e.storyName="default";var i;e.parameters={...e.parameters,storySource:{source:"() => <CurtainWipe />",...(i=e.parameters)==null?void 0:i.storySource}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};const w=["Default"];export{e as Default,w as __namedExportsOrder,h as default};
//# sourceMappingURL=CurtainWipe.stories-db28124a.js.map
