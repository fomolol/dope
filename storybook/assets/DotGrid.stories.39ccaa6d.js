var _=Object.defineProperty;var o=(a,l)=>_(a,"name",{value:l,configurable:!0});import"./index.6015db55.js";import{p as e}from"./index.3c944792.js";import{b as x,j as u}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";const y="_dot_grid_so9rn_4",v="_dot_grid__default_so9rn_7",s={dot_grid:y,dot_grid__default:v},t=o(({tagName:a="div",className:l="fixed bottom-0 left-0 right-0 flex justify-start items-center p-20 h-[200px] w-full backdrop-blur-sm",variant:f="default",children:n="",color1:p="rgba(0, 0, 0, 0)",color2:c="#ffffff",color3:m="rgba(255, 255, 255, 1)",size:g="20px 20px",dotSize:r="2.5px"})=>x(a,{className:`${s.dot_grid} ${s[`dot_grid__${f}`]} dot-grid ${l}`,style:{backgroundImage:`radial-gradient( ${p} ${r}, ${c} ${r})`,backgroundSize:g},children:[n,u("style",{jsx:!0,children:`
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
      `})]}),"DotGrid");t.propTypes={tagName:e.exports.string,className:e.exports.string,variant:e.exports.oneOf(["default"]),children:e.exports.node};const i=t;t.__docgenInfo={description:"",methods:[],displayName:"DotGrid",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed bottom-0 left-0 right-0 flex justify-start items-center p-20 h-[200px] w-full backdrop-blur-sm'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},color1:{defaultValue:{value:"'rgba(0, 0, 0, 0)'",computed:!1},required:!1},color2:{defaultValue:{value:"'#ffffff'",computed:!1},required:!1},color3:{defaultValue:{value:"'rgba(255, 255, 255, 1)'",computed:!1},required:!1},size:{defaultValue:{value:"'20px 20px'",computed:!1},required:!1},dotSize:{defaultValue:{value:"'2.5px'",computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"DotGrid",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed bottom-0 left-0 right-0 flex justify-start items-center p-20 h-[200px] w-full backdrop-blur-sm'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},color1:{defaultValue:{value:"'rgba(0, 0, 0, 0)'",computed:!1},required:!1},color2:{defaultValue:{value:"'#ffffff'",computed:!1},required:!1},color3:{defaultValue:{value:"'rgba(255, 255, 255, 1)'",computed:!1},required:!1},size:{defaultValue:{value:"'20px 20px'",computed:!1},required:!1},dotSize:{defaultValue:{value:"'2.5px'",computed:!1},required:!1}}};const N={title:"DotGrid",component:i,parameters:{storySource:{source:`/**
 * DotGrid.jsx
 */
 import * as React from 'react';

 // Component(s)
 import DotGrid from './DotGrid';

 export default {
   title: 'DotGrid',
   component: DotGrid,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <DotGrid />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:41,line:18},startBody:{col:24,line:18},endBody:{col:41,line:18}}}},layout:"centered"}},d=o(()=>u(i,{}),"Default");d.storyName="default";d.__docgenInfo={description:"",methods:[],displayName:"Default"};d.__docgenInfo={description:"",methods:[],displayName:"Default"};const G=["Default"];export{d as Default,G as __namedExportsOrder,N as default};
//# sourceMappingURL=DotGrid.stories.39ccaa6d.js.map
