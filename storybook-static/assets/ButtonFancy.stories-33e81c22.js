import{b as n}from"./jsx-runtime-4ad9da42.js";import{r as o}from"./index-10e52e8a.js";import{p as r}from"./index-67732e07.js";import"./_commonjsHelpers-35101cd5.js";const v="_button_fancy_fnspr_4",x="_button_fancy__default_fnspr_94",b={button_fancy:v,button_fancy__default:x},u=({tagName:f="div",className:d="text-2xl",buttonClassName:p="",variant:g="default",children:i=""})=>{const e=o.exports.useRef(),s=o.exports.useCallback(({offsetX:a,offsetY:m})=>{let y=1-(e.current.offsetWidth-a)/e.current.offsetWidth,_=1-(e.current.offsetHeight-m)/e.current.offsetHeight;e.current.style.setProperty("--perX",(y*100).toFixed(2)+"%"),e.current.style.setProperty("--perY",(_*100).toFixed(2)+"%")},[]);return o.exports.useEffect(()=>{const a=e.current;return a.addEventListener("mousemove",s),()=>a.removeEventListener("mousemove",s)},[e,s]),n(f,{className:`${d}`,children:n("a",{ref:e,href:"#!",className:`${b.button_fancy} ${p}`,children:i})})};u.propTypes={tagName:r.exports.string,className:r.exports.string,variant:r.exports.oneOf(["default"]),children:r.exports.node};const c=u;u.__docgenInfo={description:"",methods:[],displayName:"ButtonFancy",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'text-2xl'",computed:!1},type:{name:"string"},required:!1,description:""},buttonClassName:{defaultValue:{value:"''",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const q={title:"ButtonFancy",component:c,parameters:{layout:"centered"}},t=()=>n(c,{});t.storyName="default";var l;t.parameters={...t.parameters,storySource:{source:"() => <ButtonFancy />",...(l=t.parameters)==null?void 0:l.storySource}};t.__docgenInfo={description:"",methods:[],displayName:"Default"};const V=["Default"];export{t as Default,V as __namedExportsOrder,q as default};
//# sourceMappingURL=ButtonFancy.stories-33e81c22.js.map
