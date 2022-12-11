var f=Object.defineProperty;var n=(t,e)=>f(t,"name",{value:e,configurable:!0});import{r as o}from"./index.6015db55.js";import{p as y}from"./index.132c8052.js";import{p as _}from"./index.3c944792.js";import{j as r}from"./jsx-runtime.547177f5.js";import{S as k}from"./StickyCursor.fcdd19b7.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const x=o.exports.createContext();_.exports.node;const h=n(()=>{const{state:t,dispatch:e}=o.exports.useContext(x);return[t,e]},"useMenu");const s=n(({sticky:t=!0,title:e="Lorem Ipsum",...i},l)=>{const[,c]=h(),{addCursorBorder:d,removeCursorBorder:p}=y(),m=o.exports.useCallback(()=>{c({type:"TOGGLE_MENU"})},[c]);return r(k,{sticky:t,children:r("button",{className:"text-white dark:text-black",onMouseEnter:d,onMouseLeave:p,onClick:()=>{m(),onClick()},ref:l,...i,children:r("span",{className:"px-4 py-2 font-mono text-sm tracking-widest transition duration-500 ease-out bg-black hover:bg-accent2 active:bg-accent3 dark:bg-white",children:e})})})},"MenuButton"),u=o.exports.memo(o.exports.forwardRef(s));s.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{sticky:{defaultValue:{value:"true",computed:!1},required:!1},title:{defaultValue:{value:"'Lorem Ipsum'",computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[],displayName:"MenuButton",props:{sticky:{defaultValue:{value:"true",computed:!1},required:!1},title:{defaultValue:{value:"'Lorem Ipsum'",computed:!1},required:!1}}};const V={title:"StickyButton",component:u,parameters:{storySource:{source:`/**
 * StickyButton.jsx
 */
import * as React from 'react'

// Component(s)
import StickyButton from './StickyButton'

export default {
  title: 'StickyButton',
  component: StickyButton,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
}

export const Default = () => <StickyButton />

Default.storyName = 'default'
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:23,line:18},endLoc:{col:45,line:18},startBody:{col:23,line:18},endBody:{col:45,line:18}}}},layout:"centered"}},a=n(()=>r(u,{}),"Default");a.storyName="default";a.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"Default"};const j=["Default"];export{a as Default,j as __namedExportsOrder,V as default};
//# sourceMappingURL=StickyButton.stories.3f3175c2.js.map
