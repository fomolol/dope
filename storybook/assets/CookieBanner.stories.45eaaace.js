var v=Object.defineProperty;var e=(l,n)=>v(l,"name",{value:n,configurable:!0});import"./index.6015db55.js";import{p as a}from"./index.3c944792.js";import{s as x}from"./index.132c8052.js";import{j as o,b as h}from"./jsx-runtime.547177f5.js";import{A as _}from"./index.86df0dc7.js";import{m as y}from"./motion.896eb0c0.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const b="_cookie_banner_fm3i2_4",q="_cookie_banner__default_fm3i2_8",s={cookie_banner:b,cookie_banner__default:q},t=e(({tagName:l=y.div,className:n="",visible:d=!0,variant:c="default",onClick:C=e(()=>console.log("clicked"),"onClick"),themeColor:N="light",cookieAcceptKey:m="fomolol-cookie-accepted",onDeclined:p=e(()=>console.log("User declined the cookies"),"onDeclined"),onAccepted:r=e(()=>console.log("User accepted the cookies"),"onAccepted"),children:f="Do fugiat enim dolore culpa ea excepteur ut esse dolor laborum deserunt amet sint pariatur. Ex minim eiusmod ad esse veniam magna labore deserunt Lorem. Excepteur cupidatat et consequat sint ipsum pariatur duis."})=>{const g=x({cookieAcceptKey:m,onDeclined:p,onAccepted:r}),k="fixed flex items-center justify-center w-full transition duration-500 ease-in-out z-hud bottom-12 hover:drop-shadow-md";return o(_,{children:d&&!g?o(l,{className:`${s.cookie_banner} ${s[`cookie_banner__${c}`]} ${k} ${n}`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:h("div",{className:"flex h-auto w-[90%] items-center rounded-bl-2xl rounded-tr-2xl bg-white p-4 leading-snug md:w-1/2 md:p-8",children:[o("p",{className:"max-w-[70%] text-[9px] md:max-w-[85%] md:text-[13px]",children:f}),o("button",{onClick:r,className:"ml-auto h-[50px] rounded-full bg-purple-brand-light px-8 text-[12px] uppercase text-white transition duration-500 ease-in-out hover:bg-purple-brand-dark hover:text-white",children:"Ok"})]})}):null})},"CookieBanner");t.propTypes={tagName:a.exports.string,className:a.exports.string,variant:a.exports.oneOf(["default"]),children:a.exports.node};const u=t;t.__docgenInfo={description:"",methods:[],displayName:"CookieBanner",props:{tagName:{defaultValue:{value:"motion.div",computed:!0},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},visible:{defaultValue:{value:"true",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},onClick:{defaultValue:{value:"() => console.log('clicked')",computed:!1},required:!1},themeColor:{defaultValue:{value:"'light'",computed:!1},required:!1},cookieAcceptKey:{defaultValue:{value:"'fomolol-cookie-accepted'",computed:!1},required:!1},onDeclined:{defaultValue:{value:"() => console.log('User declined the cookies')",computed:!1},required:!1},onAccepted:{defaultValue:{value:"() => console.log('User accepted the cookies')",computed:!1},required:!1},children:{defaultValue:{value:"'Do fugiat enim dolore culpa ea excepteur ut esse dolor laborum deserunt amet sint pariatur. Ex minim eiusmod ad esse veniam magna labore deserunt Lorem. Excepteur cupidatat et consequat sint ipsum pariatur duis.'",computed:!1},type:{name:"node"},required:!1,description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"CookieBanner",props:{tagName:{defaultValue:{value:"motion.div",computed:!0},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},visible:{defaultValue:{value:"true",computed:!1},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},onClick:{defaultValue:{value:"() => console.log('clicked')",computed:!1},required:!1},themeColor:{defaultValue:{value:"'light'",computed:!1},required:!1},cookieAcceptKey:{defaultValue:{value:"'fomolol-cookie-accepted'",computed:!1},required:!1},onDeclined:{defaultValue:{value:"() => console.log('User declined the cookies')",computed:!1},required:!1},onAccepted:{defaultValue:{value:"() => console.log('User accepted the cookies')",computed:!1},required:!1},children:{defaultValue:{value:"'Do fugiat enim dolore culpa ea excepteur ut esse dolor laborum deserunt amet sint pariatur. Ex minim eiusmod ad esse veniam magna labore deserunt Lorem. Excepteur cupidatat et consequat sint ipsum pariatur duis.'",computed:!1},type:{name:"node"},required:!1,description:""}}};const M={title:"CookieBanner",component:u,parameters:{storySource:{source:`/**
 * CookieBanner.jsx
 */
 import * as React from 'react';

 // Component(s)
 import CookieBanner from './CookieBanner';

 export default {
   title: 'CookieBanner',
   component: CookieBanner,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <CookieBanner />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:46,line:18},startBody:{col:24,line:18},endBody:{col:46,line:18}}}},layout:"centered"}},i=e(()=>o(u,{}),"Default");i.storyName="default";i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"Default"};const P=["Default"];export{i as Default,P as __namedExportsOrder,M as default};
//# sourceMappingURL=CookieBanner.stories.45eaaace.js.map