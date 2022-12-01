var m=Object.defineProperty;var s=(t,n)=>m(t,"name",{value:n,configurable:!0});import{r}from"./index.6015db55.js";import{p as a}from"./index.3c944792.js";import{j as o}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";const v="_sine_wave_h00s9_4",_="_sine_wave__default_h00s9_8",d={sine_wave:v,sine_wave__default:_},e=s(t=>{const{tagName:n,className:c,variant:p,children:y}=t,i=r.exports.useRef(),{current:f}=i;return r.exports.useEffect(()=>{f.getContext("2d")},[]),o(n,{className:`${d.sine_wave} ${d[`sine_wave__${p}`]} ${c}`,children:o("canvas",{ref:i,style:{width:"100vw",height:"100vh"}})})},"SineWave");e.propTypes={tagName:a.exports.string,className:a.exports.string,variant:a.exports.oneOf(["default"]),children:a.exports.node};e.defaultProps={tagName:"div",className:"",variant:"default",children:""};const u=e;e.__docgenInfo={description:"",methods:[],displayName:"SineWave",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};e.__docgenInfo={description:"",methods:[],displayName:"SineWave",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const W={title:"SineWave",component:u,parameters:{storySource:{source:`/**
 * SineWave.jsx
 */
import React from 'react'

// Component(s)
import SineWave from './SineWave'

export default {
  title: 'SineWave',
  component: SineWave,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <SineWave />

Default.storyName = 'default'
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:41,line:18},startBody:{col:23,line:18},endBody:{col:41,line:18}}}},layout:"centered"}},l=s(()=>o(u,{}),"Default");l.storyName="default";l.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Default"};const w=["Default"];export{l as Default,w as __namedExportsOrder,W as default};
//# sourceMappingURL=SineWave.stories.17a8d23b.js.map
