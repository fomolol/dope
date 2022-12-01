var N=Object.defineProperty;var t=(n,s)=>N(n,"name",{value:s,configurable:!0});import{r as d}from"./index.c5950dcd.js";import{p as r}from"./index.3c944792.js";import{a as b,j as e}from"./jsx-runtime.ad3b393a.js";import"./iframe.f3139c3d.js";const E="_eye_y8kbu_4",D="_eye__default_y8kbu_8",p={eye:E,eye__default:D},a=t(n=>{const{tagName:s,className:y,variant:g}=n;let u=d.exports.useRef(),c=d.exports.useRef();return d.exports.useEffect(()=>{const v=t((o,l)=>{let h=l.current.getBoundingClientRect().left,_=l.current.getBoundingClientRect().top,x=Math.atan2(o.pageX-h,o.pageY-_)*(180/Math.PI)*-1+180;l.current.style.transform=`rotate(${x}deg)`},"rotateEye"),m=t(o=>{v(o,c)},"mouseMove");return document.addEventListener("mousemove",m),()=>{document.removeEventListener("mousemove",m)}},[u]),b(s,{ref:u,className:`${p.eye} ${p[`eye__${g}`]} ${y} outer-container`,children:[e("div",{className:"mx-auto pointer-events-none select-none eye-container cur",children:e("div",{className:"absolute flex text-center eye-lid",children:e("div",{ref:c,className:"absolute flex text-center eyes",style:{transform:"rotate(176.094deg)"},children:e("div",{className:"relative inline-block eye"})})})}),e("style",{jsx:!0,children:`
        .outer-container {
          font-size: 25vmin;
        }
        .eye-container {
          font-size: 0.7em;
          width: 100px;
          height: 200px;
          border-radius: 0.5em 0.5em 0em 0em / 0.6em 0.6em 0em 0em;
          box-sizing: content-box;
          border: 0.07em solid transparent;
          top: 2em;
          cursor: inherit;
        }

        .eye-lid {
          background-image: url(/png/eye-150.png);
          background-size: cover;
          border-radius: 50%;
        }

        .eyes,
        .eye-lid {
          font-size: 0.65em;
          width: 1.2em;
          height: 1.2em;
          top: 0.3em;
        }
        .eyes {
          left: 0.25em;
        }
        .eye {
          border-radius: 50%;
          width: 80%;
          height: 80%;
          background-image: url(/jpg/cremers-eye-pupil.jpg);
          background-size: cover;
          background-color: black;
          border-radius: 50%;
        }
      `})]})},"Eye");a.propTypes={tagName:r.exports.string,className:r.exports.string,variant:r.exports.oneOf(["default"]),children:r.exports.node};a.defaultProps={tagName:"div",className:"h-full",variant:"default",children:""};const f=a;a.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const $={title:"Eye",component:f,parameters:{storySource:{source:`/**
 * Eye.jsx
 */
import React from 'react'

// Component(s)
import Eye from './Eye'

export default {
  title: 'Eye',
  component: Eye,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <Eye />

Default.storyName = 'default'
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:36,line:18},startBody:{col:23,line:18},endBody:{col:36,line:18}}}},layout:"centered"}},i=t(()=>e(f,{}),"Default");i.storyName="default";i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Default"};const R=["Default"];export{i as Default,R as __namedExportsOrder,$ as default};
//# sourceMappingURL=Eye.stories.7ba1b07d.js.map
