var L=Object.defineProperty;var v=(r,n)=>L(r,"name",{value:n,configurable:!0});import{r as o}from"./index.6015db55.js";import{p as x}from"./index.3c944792.js";import{L as w}from"./index.132c8052.js";import{b as h,j as t,F as C}from"./jsx-runtime.547177f5.js";import{m as g}from"./motion.896eb0c0.js";import"./iframe.1f35fd3c.js";import"./script.3a7fbfff.js";import"./index.9cd4b3d6.js";import"./client.94e99853.js";import"./acorn.18367aad.js";import"./use-motion-template.e5260baa.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const Y="_text_obd69_4",k="_text__default_obd69_8",q={text:Y,text__default:k},f=v(({children:r,letterWrapperClassname:n="cursor-pointer relative white-space-pre",hiddenLetterClassname:p="opacity-0 invisible",roundLetterClassname:u="inline-block h-full left-0 absolute top-0 origin-right w-full",spaceLetterClassname:l="inline-block font-stolzl h-full left-0 absolute top-0 origin-left w-full"})=>{const[s,e]=o.exports.useState(!1),i={initial:{opacity:0,transform:"translateY(0%)"},animate:{opacity:s?0:1,transform:s?"translateY(-50%)":"translateY(0%)"},exit:{opacity:0,transform:"translateY(0%)"},transition:{ease:"easeOut",duration:1}},c={initial:{opacity:0,transform:"translateY(50%)"},animate:{opacity:s?1:0,transform:s?"translateY(0%)":"translateY(50%)"},exit:{opacity:0,transform:"translateY(50%)"},transition:{ease:"easeOut",duration:.8}};return h("span",{className:n,children:[t("span",{className:p,children:r}),t(g.span,{className:u,initial:"initial",animate:"animate",exit:"exit",variants:i,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:r}),t(g.span,{className:l,initial:"initial",animate:"animate",exit:"exit",variants:c,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:r})]})},"SplitFade");f.__docgenInfo={description:"",methods:[],displayName:"SplitFade",props:{letterWrapperClassname:{defaultValue:{value:"'cursor-pointer relative white-space-pre'",computed:!1},required:!1},hiddenLetterClassname:{defaultValue:{value:"'opacity-0 invisible'",computed:!1},required:!1},roundLetterClassname:{defaultValue:{value:"'inline-block h-full left-0 absolute top-0 origin-right w-full'",computed:!1},required:!1},spaceLetterClassname:{defaultValue:{value:"'inline-block font-stolzl h-full left-0 absolute top-0 origin-left w-full'",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"SplitFade",props:{letterWrapperClassname:{defaultValue:{value:"'cursor-pointer relative white-space-pre'",computed:!1},required:!1},hiddenLetterClassname:{defaultValue:{value:"'opacity-0 invisible'",computed:!1},required:!1},roundLetterClassname:{defaultValue:{value:"'inline-block h-full left-0 absolute top-0 origin-right w-full'",computed:!1},required:!1},spaceLetterClassname:{defaultValue:{value:"'inline-block font-stolzl h-full left-0 absolute top-0 origin-left w-full'",computed:!1},required:!1}}};const _=v(({children:r,roundLetterClassname:n="inline-block h-full left-0 absolute top-0 origin-right w-full",spaceLetterClassname:p="inline-block font-stolzl h-full left-0 absolute top-0 origin-left w-full",letterWrapperClassname:u="cursor-pointer relative white-space-pre",hiddenLetterClassname:l="opacity-0 invisible"})=>{const[s,e]=o.exports.useState(!1),i={initial:{transform:"translateY(0%) rotate(0deg)"},animate:{transform:s?"translateY(-180%) rotate(-8deg)":"translateY(0%) rotate(0deg)"},exit:{transform:"translateY(0%) rotate(0deg)"},transition:{ease:"easeOut",duration:1}},c={initial:{transform:"translateY(100%) rotate(15deg)"},animate:{transform:s?"translateY(0%) rotate(0deg)":"translateY(100%) rotate(15deg)"},exit:{transform:"translateY(100%) rotate(15deg)"},transition:{ease:"easeOut",duration:.8}};return h("span",{className:u,children:[t("span",{className:l,children:r}),h("span",{className:`${n} overflow-hidden w-full h-full`,onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:[t(g.span,{className:n,initial:"initial",animate:"animate",exit:"exit",variants:i,transition:{ease:"easeOut",duration:1},children:r}),t(g.span,{className:p,initial:"initial",animate:"animate",exit:"exit",variants:c,transition:{ease:"easeOut",duration:.8},onMouseEnter:()=>e(!0),onMouseLeave:()=>e(!1),children:r})]})]})},"SplitOverflow");_.__docgenInfo={description:"",methods:[],displayName:"SplitOverflow",props:{roundLetterClassname:{defaultValue:{value:"'inline-block h-full left-0 absolute top-0 origin-right w-full'",computed:!1},required:!1},spaceLetterClassname:{defaultValue:{value:"'inline-block font-stolzl h-full left-0 absolute top-0 origin-left w-full'",computed:!1},required:!1},letterWrapperClassname:{defaultValue:{value:"'cursor-pointer relative white-space-pre'",computed:!1},required:!1},hiddenLetterClassname:{defaultValue:{value:"'opacity-0 invisible'",computed:!1},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"SplitOverflow",props:{roundLetterClassname:{defaultValue:{value:"'inline-block h-full left-0 absolute top-0 origin-right w-full'",computed:!1},required:!1},spaceLetterClassname:{defaultValue:{value:"'inline-block font-stolzl h-full left-0 absolute top-0 origin-left w-full'",computed:!1},required:!1},letterWrapperClassname:{defaultValue:{value:"'cursor-pointer relative white-space-pre'",computed:!1},required:!1},hiddenLetterClassname:{defaultValue:{value:"'opacity-0 invisible'",computed:!1},required:!1}}};const b=v(({tagName:r="h2",className:n="",variant:p="default",children:u="",type:l})=>{const s=o.exports.useRef(),[e,i]=o.exports.useState(null),c=o.exports.useRef(!1),d=o.exports.useRef();w(()=>{var a;s.current&&(d.current=(a=s.current)==null?void 0:a.innerHTML.replaceAll("<br>"," _ "))},[s]),w(()=>{if(d.current&&!e&&s.current&&!c.current){if(l==="fade-letter"){const a=d.current.split("");i(a)}else if(l==="fade-word"){const a=d.current.split(" ");i(a)}else if(l==="fade-block")i("hide children");else if(l==="overflow-word"){const a=d.current.split(" ");i(a)}}},[s,d,l]);const N=o.exports.useMemo(()=>e&&l==="fade-letter"?e==null?void 0:e.map((a,m)=>t(o.exports.Fragment,{children:a==="_"?t("br",{}):t(f,{children:a||" "})},`fade-letter-${m}`)):l==="fade-word"?e==null?void 0:e.map((a,m)=>t(o.exports.Fragment,{children:a==="_"?t("br",{}):h(C,{children:[t(f,{children:a}),t(f,{children:" "})]})},`fade-word-${m}`)):l==="fade-block"?t(f,{children:u}):l==="overflow-word"?e==null?void 0:e.map((a,m)=>t(o.exports.Fragment,{children:a==="_"?t("br",{}):h("span",{children:[t(_,{children:a}),t(_,{children:" "})]})},`overflow-word-${m}`)):null,[e,l,u]);return t(r,{ref:s,className:`${q.text} ${q[`text__${p}`]} ${n}`,children:N||u})},"Text");b.propTypes={tagName:x.exports.string,className:x.exports.string,variant:x.exports.oneOf(["default"]),children:x.exports.node};const V=b;b.__docgenInfo={description:"",methods:[],displayName:"Text",props:{tagName:{defaultValue:{value:"'h2'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};b.__docgenInfo={description:"",methods:[],displayName:"Text",props:{tagName:{defaultValue:{value:"'h2'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};const B={title:"Text",component:V,parameters:{storySource:{source:`/**
 * Text.jsx
 */
 import * as React from 'react';

 // Component(s)
 import Text from './Text';

 export default {
   title: 'Text',
   component: Text,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <Text />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:38,line:18},startBody:{col:24,line:18},endBody:{col:38,line:18}}}},layout:"centered"}},y=v(()=>t(V,{}),"Default");y.storyName="default";y.__docgenInfo={description:"",methods:[],displayName:"Default"};y.__docgenInfo={description:"",methods:[],displayName:"Default"};const A=["Default"];export{y as Default,A as __namedExportsOrder,B as default};
//# sourceMappingURL=Text.stories.0d02170e.js.map
