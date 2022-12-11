import{a as g,b as r}from"./jsx-runtime-4ad9da42.js";import{r as o}from"./index-10e52e8a.js";import{p as n}from"./index-67732e07.js";import{Z as _,E as h}from"./index-f8810480.js";import"./_commonjsHelpers-35101cd5.js";import"./client-faf3de5f.js";import"./index-698e69ac.js";import"./use-motion-template-472ea312.js";import"./animate-2454e827.js";const x="_yin_yang_1rs25_4",Y="_yin_yang__default_1rs25_8",i={yin_yang:x,yin_yang__default:Y},s=({tagName:p="div",className:d="absolute pointer-events-none z-1 animate-spin",variant:m="default"})=>{const t=o.exports.useRef(),{x:u,y:f}=_(),[e,y]=o.exports.useState();return h(()=>{!e&&(t==null?void 0:t.current)&&y({width:t.current.clientWidth,height:t.current.clientHeight})},[t,e]),g(p,{className:`${i.yin_yang} ${i[`yin_yang__${m}`]} yinyang ${d}`,ref:t,style:{top:`calc(${f}px - ${e!=null&&e.height?e.height/2:0}px)`,left:`calc(${u}px - ${e!=null&&e.width?e.width/2:0}px)`},children:[r("style",{jsx:!0,children:`
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
      `}),r("style",{jsx:!0,global:!0,children:`
        html,
        body {
          cursor: none;
        }

        html *,
        body * {
          cursor: none;
        }
      `})]})};s.propTypes={tagName:n.exports.string,className:n.exports.string,variant:n.exports.oneOf(["default"])};const l=s;s.__docgenInfo={description:"",methods:[],displayName:"YinYang",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute pointer-events-none z-1 animate-spin'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""}}};const V={title:"YinYang",component:l,parameters:{layout:"centered"}},a=()=>r(l,{});a.storyName="default";var c;a.parameters={...a.parameters,storySource:{source:"() => <YinYang />",...(c=a.parameters)==null?void 0:c.storySource}};a.__docgenInfo={description:"",methods:[],displayName:"Default"};const E=["Default"];export{a as Default,E as __namedExportsOrder,V as default};
//# sourceMappingURL=YinYang.stories-21678692.js.map
