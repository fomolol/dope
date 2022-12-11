var I=Object.defineProperty;var c=(i,o)=>I(i,"name",{value:o,configurable:!0});import{r as f}from"./index.6015db55.js";import{p as _}from"./index.3c944792.js";import{Z as M,j as q,w as C}from"./index.132c8052.js";import{j as v}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const V="_spinning_loader_1qrvd_4",R="_spinning_loader__default_1qrvd_8",N={spinning_loader:V,spinning_loader__default:R};let d,l;const D=70;let s=1;const E=1,b=1.5,k=25,A=c(i=>{const o=[],{x:u,y:n}=M();for(var t=0;t<k;t++){var a={size:1,position:{x:u,y:n},offset:{x:0,y:0},shift:{x:u,y:n},speed:.01+Math.random()*.04,targetSize:1,fillColor:"#"+(Math.random()*1697420+16096035|0).toString(16),orbit:D*.5+D*.5*Math.random()};o.push(a)}return o},"createParticles"),H=c((i,o,u=!1)=>n=>{let{x:t,y:a,clientX:g,clientY:y,screenX:w,screenY:r,isDown:p}=o;!g||!y?(t=window.innerWidth-d*.5,a=window.innerHeight-l*.5):(t=g-(window.innerWidth-d)*.5,a=y-(window.innerHeight-l)*.5),p?s+=(b-s)*.02:s-=(s-E)*.02,s=Math.min(s,b),u||(n.fillStyle="rgba(0,0,0,0.05)",n.fillRect(0,0,n.canvas.width,n.canvas.height));for(let m=0,z=i.length;m<z;m++){var e=i[m],x={x:e.position.x,y:e.position.y};e.offset.x+=e.speed,e.offset.y+=e.speed,e.shift.x+=(t-e.shift.x)*e.speed,e.shift.y+=(a-e.shift.y)*e.speed,e.position.x=e.shift.x+Math.cos(m+e.offset.x)*(e.orbit*s),e.position.y=e.shift.y+Math.sin(m+e.offset.y)*(e.orbit*s),e.position.x=Math.max(Math.min(e.position.x,d),0),e.position.y=Math.max(Math.min(e.position.y,l),0),e.size+=(e.targetSize-e.size)*.05,Math.round(e.size)==Math.round(e.targetSize)&&(e.targetSize=1+Math.random()*7),n.beginPath(),n.fillStyle=e.fillColor,n.strokeStyle=e.fillColor,n.lineWidth=e.size,n.moveTo(x.x,x.y),n.lineTo(e.position.x,e.position.y),n.stroke(),n.arc(e.position.x,e.position.y,e.size/2,0,Math.PI*2,!0),n.fill()}},"loop"),h=c(({tagName:i,className:o,variant:u,enterDelay:n=100,leaveDelay:t=100})=>{const a=f.exports.useRef(),g=M(a,{enterDelay:n,leaveDelay:t});f.exports.useCallback(({touches:p,preventDefault:e})=>{p.length==1&&e()},[]),f.exports.useCallback(({touches:p,preventDefault:e})=>{p.length==1&&e()},[]);const y=f.exports.useCallback(()=>{d=window.innerWidth,l=window.innerHeight,r.current.width=d,r.current.height=l},[r]);q("resize",y),f.exports.useEffect(()=>{d=window.innerWidth,l=window.innerHeight,r.current.width=d,r.current.height=l},[]);const w=f.exports.useMemo(()=>A(),[]),r=C(H(w,g));return v(i,{className:`${N.spinning_loader} ${N[`spinning_loader__${u}`]} ${o}`,ref:a,children:v("canvas",{style:{backgroundColor:"transparent",width:"100vw",height:"100vh"},ref:r})})},"SpinningLoader");h.propTypes={tagName:_.exports.string,className:_.exports.string,variant:_.exports.oneOf(["default"]),children:_.exports.node};h.defaultProps={tagName:"div",className:"absolute z-40 top-0 bg-black w-screen h-screen ",variant:"default",children:""};const L=h;h.__docgenInfo={description:"",methods:[],displayName:"SpinningLoader",props:{enterDelay:{defaultValue:{value:"100",computed:!1},required:!1},leaveDelay:{defaultValue:{value:"100",computed:!1},required:!1},tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute z-40 top-0 bg-black w-screen h-screen '",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"SpinningLoader",props:{enterDelay:{defaultValue:{value:"100",computed:!1},required:!1},leaveDelay:{defaultValue:{value:"100",computed:!1},required:!1},tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute z-40 top-0 bg-black w-screen h-screen '",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const F={title:"SpinningLoader",component:L,parameters:{storySource:{source:`/**
 * SpinningLoader.jsx
 */
import React from 'react'

// Component(s)
import SpinningLoader from './SpinningLoader'

export default {
  title: 'SpinningLoader',
  component: SpinningLoader,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <SpinningLoader />

Default.storyName = 'default'
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:47,line:18},startBody:{col:23,line:18},endBody:{col:47,line:18}}}},layout:"centered"}},S=c(()=>v(L,{}),"Default");S.storyName="default";S.__docgenInfo={description:"",methods:[],displayName:"Default"};S.__docgenInfo={description:"",methods:[],displayName:"Default"};const J=["Default"];export{S as Default,J as __namedExportsOrder,F as default};
//# sourceMappingURL=SpinningLoader.stories.32371258.js.map
