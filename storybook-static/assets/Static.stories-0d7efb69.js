import{b as x}from"./jsx-runtime-4ad9da42.js";import{r as _}from"./index-10e52e8a.js";import{p as h}from"./index-67732e07.js";import{E as S}from"./index-f8810480.js";import{m as v}from"./motion-64fb725c.js";import"./_commonjsHelpers-35101cd5.js";import"./client-faf3de5f.js";import"./index-698e69ac.js";import"./use-motion-template-472ea312.js";import"./animate-2454e827.js";const y="_static__default_d6lyw_8",m={static:"_static_d6lyw_4",static__default:y};class w{constructor(t){this.canvas=t.canvas,this.context=t,this.pixelSize=4,this.pixels=[],this.onResize(),this.tick=0,this.lines=[{pos:50,height:28,speed:.281},{pos:80,height:16,speed:1.129}]}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.pixels.length=0}start(){}update(){let t=Math.ceil(this.width/this.pixelSize),e=Math.ceil(this.height/this.pixelSize),i=0;for(let a=0;a<e;a++){let o=this.isInLine(a,e);for(let r=0;r<t;r++){let n=r+a*t,s;i<=0?(i=1+Math.floor(Math.random()*3),s=d.randomSaturatedColor(),s=o?d.mulColor(s,.55):d.mulColor(s,.4)):(s=this.pixels[n-1],s=d.mulColor(s,.8)),this.pixels[n]=s,i--}}this.updateLines(e),this.linePos%=e,this.renderPixels()}updateLines(t){this.lines.forEach(e=>e.pos=(e.pos+e.speed)%t)}isInLine(t,e){return this.lines.some(i=>t>=i.pos&&t<i.pos+i.height||i.pos+i.height>e&&t<i.pos-e+i.height)}renderPixels(){let t=Math.ceil(this.width/this.pixelSize);for(let e=0;e<this.pixels.length;e++){let i=e%t,a=Math.floor(e/t);this.context.fillStyle="#"+this.pixels[e].toString(16),this.context.fillRect(i*this.pixelSize,a*this.pixelSize,this.pixelSize,this.pixelSize)}}}class d{static randomColor(){return Math.round(Math.random()*16777215)}static randomSaturatedColor(){let t=Math.round(Math.random()*255);return t<<16|t<<8|t}static mulColor(t,e){let i=(t&16711680)>>16,a=(t&65280)>>8,o=t&255;return i=Math.min(Math.round(i*e),255),a=Math.min(Math.round(a*e),255),o=Math.min(Math.round(o*e),255),i<<16|a<<8|o}}const u=({tagName:c=v.canvas,className:t="absolute inset-0 w-screen h-screen",variant:e="default",children:i="",loop:a=!0})=>{const o=_.exports.useRef();function r(){const n=o.current.getContext("2d"),s=new w(n);s.start();const p=function(){n.clearRect(0,0,s.width,s.height),s.update(),a&&requestAnimationFrame(p)};p(),window.addEventListener("resize",p)}return S(()=>{r()},[]),x(c,{className:`${m.static} ${m[`static__${e}`]} ${t}`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1,ease:[.6,.05,-.01,.9]},ref:o,children:i})};u.propTypes={tagName:h.exports.string,className:h.exports.string,variant:h.exports.oneOf(["default"]),children:h.exports.node};const g=u;u.__docgenInfo={description:"",methods:[],displayName:"Static",props:{tagName:{defaultValue:{value:"motion.canvas",computed:!0},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'absolute inset-0 w-screen h-screen'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""},loop:{defaultValue:{value:"true",computed:!1},required:!1}}};const E={title:"Static",component:g,parameters:{layout:"centered"}},l=()=>x(g,{});l.storyName="default";var f;l.parameters={...l.parameters,storySource:{source:"() => <Static />",...(f=l.parameters)==null?void 0:f.storySource}};l.__docgenInfo={description:"",methods:[],displayName:"Default"};const I=["Default"];export{l as Default,I as __namedExportsOrder,E as default};
//# sourceMappingURL=Static.stories-0d7efb69.js.map