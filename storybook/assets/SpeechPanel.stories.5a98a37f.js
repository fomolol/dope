var w=Object.defineProperty;var a=(t,l)=>w(t,"name",{value:l,configurable:!0});import{r as u}from"./index.6015db55.js";import{p as n}from"./index.3c944792.js";import{j as e,b as S}from"./jsx-runtime.547177f5.js";import{A as c}from"./index.86df0dc7.js";import{m as i}from"./motion.896eb0c0.js";import"./iframe.1f35fd3c.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const q="_speech_panel_61if9_4",D="_speech_panel__default_61if9_8",p={speech_panel:q,speech_panel__default:D},P=a(({onAnimationComplete:t})=>e(i.div,{initial:{scale:1},animate:{scale:100},exit:{scale:1},transition:{duration:1,ease:[.4,0,.2,1]},onAnimationComplete:t,className:"fixed origin-center transition-all ease-out h-[84px] w-[84px] right-12 bottom-12 rounded-full",children:e("div",{className:"absolute bottom-0 right-0 w-full h-full transition ease-out bg-red-ff dark:bg-blue-500 rounded-full duration-500"})}),"ButtonSpeakBackground"),o=a(({tagName:t="div",className:l="fixed top-0 left-0 flex items-center justify-center w-screen h-screen overflow-hidden",variant:m="default",active:h=!1,questions:y=["Ready to mint?","Want to read the FAQ?","Do you like turtles?","What do you think of NFTs?"]})=>{const[s,d]=u.exports.useState(!1),x=u.exports.useCallback(()=>{s?(console.log("Animation End Complete"),d(!1)):(console.log("Animation Start Complete"),d(!0))},[s]),_={hide:{opacity:0},show:{opacity:1},transition:{duration:.5,ease:"easeOut",staggerChildren:1.5}};var g={hide:{opacity:0},show:{opacity:1},transition:{duration:1,ease:"easeOut"}};return e(c,{exitBeforeEnter:!0,children:h&&S(t,{className:`${p.speech_panel} ${p[`speech_panel__${m}`]} ${l}`,children:[e(P,{onAnimationComplete:x}),e(c,{children:s&&e(i.ul,{initial:"hide",animate:"show",exit:"hide",variants:_,layout:!0,className:"relative grid grid-flow-row grid-cols-3 mx-4 text-2xl text-white gap-y-4 gap-x-4",children:y.map((v,N)=>e(i.li,{initial:"hide",animate:"show",exit:"hide",variants:g,className:"flex items-center justify-center px-4 py-2 text-center text-black transition-all duration-500 ease-out drop-shadow-md hover:drop-shadow-2xl backdrop-blur-lg bg-white/90 rounded-2xl",children:v},`q-${N}`))},"question-panel")})]},"speech-panel")})},"SpeechPanel");o.propTypes={tagName:n.exports.string,className:n.exports.string,variant:n.exports.oneOf(["default"]),children:n.exports.node};const f=o;o.__docgenInfo={description:"",methods:[],displayName:"SpeechPanel",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed top-0 left-0 flex items-center justify-center w-screen h-screen overflow-hidden'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},active:{defaultValue:{value:"false",computed:!1},required:!1},questions:{defaultValue:{value:`[
  'Ready to mint?',
  'Want to read the FAQ?',
  'Do you like turtles?',
  'What do you think of NFTs?',
]`,computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"SpeechPanel",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'fixed top-0 left-0 flex items-center justify-center w-screen h-screen overflow-hidden'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},active:{defaultValue:{value:"false",computed:!1},required:!1},questions:{defaultValue:{value:`[
  'Ready to mint?',
  'Want to read the FAQ?',
  'Do you like turtles?',
  'What do you think of NFTs?',
]`,computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};const W={title:"SpeechPanel",component:f,parameters:{storySource:{source:`/**
 * SpeechPanel.jsx
 */
 import * as React from 'react';

 // Component(s)
 import SpeechPanel from './SpeechPanel';

 export default {
   title: 'SpeechPanel',
   component: SpeechPanel,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <SpeechPanel />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:45,line:18},startBody:{col:24,line:18},endBody:{col:45,line:18}}}},layout:"centered"}},r=a(()=>e(f,{}),"Default");r.storyName="default";r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Default"};const $=["Default"];export{r as Default,$ as __namedExportsOrder,W as default};
//# sourceMappingURL=SpeechPanel.stories.5a98a37f.js.map
