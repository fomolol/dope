import{a as _,b as l}from"./jsx-runtime-4ad9da42.js";import"./index-10e52e8a.js";import{p as t}from"./index-67732e07.js";import"./_commonjsHelpers-35101cd5.js";const x="_dot_grid_so9rn_4",y="_dot_grid__default_so9rn_7",o={dot_grid:x,dot_grid__default:y},a=({tagName:u="div",className:i="fixed bottom-0 left-0 right-0 flex justify-start items-center p-20 h-[200px] w-full backdrop-blur-sm",variant:f="default",children:p="",color1:n="rgba(0, 0, 0, 0)",color2:c="#ffffff",color3:m="rgba(255, 255, 255, 1)",size:g="20px 20px",dotSize:r="2.5px"})=>_(u,{className:`${o.dot_grid} ${o[`dot_grid__${f}`]} dot-grid ${i}`,style:{backgroundImage:`radial-gradient( ${n} ${r}, ${c} ${r})`,backgroundSize:g},children:[p,l("style",{jsx:!0,children:`
        .dot-grid::before {
          display: block;
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: ${m};
          opacity: 0.2;
        }
      `})]});a.propTypes={tagName:t.exports.string,className:t.exports.string,variant:t.exports.oneOf(["default"]),children:t.exports.node};const s=a;a.__docgenInfo={description:"",methods:[],displayName:"DotGrid",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed bottom-0 left-0 right-0 flex justify-start items-center p-20 h-[200px] w-full backdrop-blur-sm'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},color1:{defaultValue:{value:"'rgba(0, 0, 0, 0)'",computed:!1},required:!1},color2:{defaultValue:{value:"'#ffffff'",computed:!1},required:!1},color3:{defaultValue:{value:"'rgba(255, 255, 255, 1)'",computed:!1},required:!1},size:{defaultValue:{value:"'20px 20px'",computed:!1},required:!1},dotSize:{defaultValue:{value:"'2.5px'",computed:!1},required:!1}}};const q={title:"DotGrid",component:s,parameters:{layout:"centered"}},e=()=>l(s,{});e.storyName="default";var d;e.parameters={...e.parameters,storySource:{source:"() => <DotGrid />",...(d=e.parameters)==null?void 0:d.storySource}};e.__docgenInfo={description:"",methods:[],displayName:"Default"};const D=["Default"];export{e as Default,D as __namedExportsOrder,q as default};
//# sourceMappingURL=DotGrid.stories-61d75241.js.map
