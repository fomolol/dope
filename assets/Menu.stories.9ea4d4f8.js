var M=Object.defineProperty;var n=(e,s)=>M(e,"name",{value:s,configurable:!0});import{r as c}from"./index.6015db55.js";import{p as y}from"./index.3c944792.js";import{c as z}from"./clsx.m.e98cd743.js";import{j as o,b as _}from"./jsx-runtime.547177f5.js";import{L as w,m as x}from"./motion.896eb0c0.js";import{u as O,A as D}from"./index.86df0dc7.js";import"./iframe.1f35fd3c.js";import"./animate.aee8590b.js";import"./tslib.ee338f4c.js";const j=c.exports.createContext(null),S=n(e=>!e.isLayoutDirty&&e.willUpdate(!1),"notify");function I(){const e=new Set,s=new WeakMap,i=n(()=>e.forEach(S),"dirtyAll");return{add:t=>{e.add(t),s.set(t,t.addEventListener("willUpdate",i))},remove:t=>{var a;e.delete(t),(a=s.get(t))===null||a===void 0||a(),s.delete(t),i()},dirty:i}}n(I,"nodeGroup");const k=n(e=>e===!0,"shouldInheritGroup"),q=n(e=>k(e===!0)||e==="id","shouldInheritId"),T=n(({children:e,id:s,inheritId:i,inherit:t=!0})=>{i!==void 0&&(t=i);const a=c.exports.useContext(w),r=c.exports.useContext(j),[d,f]=O(),m=c.exports.useRef(null),u=a.id||r;m.current===null&&(q(t)&&u&&(s=s?u+"-"+s:u),m.current={id:s,group:k(t)&&a.group||I()});const l=c.exports.useMemo(()=>({...m.current,forceRender:d}),[f]);return o(w.Provider,{value:l,children:e})},"LayoutGroup"),$="_menu_1w776_4",A="_menu__default_1w776_8",C={menu:$,menu__default:A},V=n(({className:e="absolute w-[38px] h-[38px]",strokeWidth:s=5,strokeLinecap:i="round",active:t=!1,onClick:a=n(()=>console.log("Clicked close"),"onClick"),width:r="38px"})=>o("div",{className:e,style:{height:r,minHeight:r,width:r,minWidth:r},children:o(x.button,{layout:!0,className:"transition-color flex h-full w-full items-center justify-center rounded-full border border-transparent bg-[#2A2A2A] text-white duration-500 ease-in-out-expo hover:border-current hover:bg-transparent",initial:"initial",animate:t?"animate":"exit",exit:"exit",variants:{initial:{opacity:0,translateX:"0%"},animate:{opacity:1,transition:{duration:.25,ease:"easeInOut"}},exit:{opacity:0,transition:{duration:.15,ease:"easeInOut"}}},onClick:a,children:o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 42 42",className:"block",style:{height:`calc(${r} / 2.5)`,width:`calc(${r} / 2.5)`},children:o("path",{stroke:"currentColor",strokeLinecap:i,strokeWidth:s,d:"m3 3 36.172 36.172m-36 0L39.343 3"})})},"closeBtn")}),"BtnClose"),L=n(({children:e,variants:s,onClick:i,selected:t})=>o(x.button,{className:"",onClick:i,initial:"initial",animate:"animate",exit:"exit",variants:s,children:o("span",{className:`z-0 flex h-full w-full transform items-center justify-center whitespace-nowrap border px-5 transition-all duration-1000 ease-in-out-expo ${t?"translate-x-[-20px] rounded-r-full border-[#65D46E] bg-[#65D46E]/50":"translate-x-0 rounded-full border-white bg-transparent hover:bg-[#20612B]"}`,children:e})}),"BtnSubMenuItem"),N=n(({index:e,variant:s,disabled:i=!1,selected:t=!1,children:a="Lorem",onSelect:r=n(l=>console.log("Clicked item",l),"onSelect"),onSubmenuSelect:d=n(l=>console.log("Clicked submenu item",l),"onSubmenuSelect"),onClose:f=n(l=>console.log("Clicked close",l),"onClose"),height:m="38px",subMenu:u})=>{const[l,p]=c.exports.useState(!1),b={initial:{opacity:0},animate:{opacity:1,transition:{duration:1,ease:"easeInOut"}},exit:{opacity:0,transitionEnd:{display:"none"},transition:{duration:.25,ease:"easeOut"}}};return _(x.li,{layout:"preserve-aspect",className:"relative flex min-w-max",initial:"initial",animate:"animate",exit:"exit",variants:b,style:{height:m},children:[o("button",{onClick:t?()=>f(a,e):()=>r(a,e),className:`transition-color z-10 flex h-full items-center justify-center rounded-full border px-5 font-sans duration-500 ease-in-out-expo ${t?"border-[#65D46E] bg-[#65D46E]":"border-current bg-transparent"}`,children:a}),o(x.div,{layout:"preserve-aspect",className:"flex w-auto pl-2 space-x-2",children:o(D,{children:u&&u.map(({name:v},h)=>l&&l===h+1?o(L,{selected:l,variants:b,onClick:()=>p(!1),children:v},`submenu-${h}`):l?null:o(L,{selected:l,variants:b,onClick:()=>p(h+1),children:v},`submenu-${h}`))})})]})},"BtnMenuItem"),g=n(({tagName:e="div",className:s="absolute flex items-start justify-start w-full left-3",variant:i="light",items:t=[{name:"F",position:"Pizza of Pizza",image:"https://assets.fomolol.com/pizza.png"},{name:"O",position:"Ipsum of Lorem",image:"https://assets.fomolol.com/pizza.png",subMenu:[{name:"Two Data"}]},{name:"M",position:"Ipsum of Lorem",image:"https://assets.fomolol.com/pizza.png",subMenu:[{name:"Three Data"},{name:"More data"}]},{name:"O",position:"Ipsum of Lorem",image:"https://assets.fomolol.com/pizza.png"}]})=>{const[a,r]=c.exports.useState("undefined");let d="text-white";switch(i){case"light":d="text-black";break;case"dark":d="text-white";break}const f=n((u,l)=>{r(l)},"onSelect"),m=n(()=>{r("undefined")},"onClose");return o(e,{className:z(C.menu,C[`menu__${i}`],s),children:_(T,{id:"main-menu",children:[o(V,{variant:i,onClick:m,active:a!=="undefined"}),o(x.ul,{className:z(d,`flex w-auto transform space-x-2 duration-1000 ease-in-out-expo will-change-transform ${a!=="undefined"?"translate-x-[44px]":"translate-x-[0px]"}`),initial:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:1,ease:"easeInOut"}},exit:{opacity:0,transition:{duration:1,ease:"easeInOut"}}},children:t.map(({name:u,subMenu:l},p)=>a!=="undefined"&&a==p?o(N,{variant:i,selected:!0,onSelect:f,onClose:m,index:p,subMenu:l,children:u},`item-${p}`):a==="undefined"?o(N,{variant:i,onSelect:f,index:p,children:u},`item-${p}`):null)})]})})},"Menu");g.propTypes={tagName:y.exports.object,className:y.exports.string,variant:y.exports.oneOf(["light","dark"]),items:y.exports.object};g.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"object"},required:!1,description:""},className:{defaultValue:{value:"'absolute flex items-start justify-start w-full left-3'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'light'",computed:!1},type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1,description:""},items:{defaultValue:{value:`[
  {
    name: 'F',
    position: 'Pizza of Pizza',
    image: 'https://assets.fomolol.com/pizza.png',
  },
  {
    name: 'O',
    position: 'Ipsum of Lorem',
    image: 'https://assets.fomolol.com/pizza.png',
    subMenu: [{ name: 'Two Data' }],
  },
  {
    name: 'M',
    position: 'Ipsum of Lorem',
    image: 'https://assets.fomolol.com/pizza.png',
    subMenu: [{ name: 'Three Data' }, { name: 'More data' }],
  },
  {
    name: 'O',
    position: 'Ipsum of Lorem',
    image: 'https://assets.fomolol.com/pizza.png',
  },
]`,computed:!1},type:{name:"object"},required:!1,description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"object"},required:!1,description:""},className:{defaultValue:{value:"'absolute flex items-start justify-start w-full left-3'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'light'",computed:!1},type:{name:"enum",value:[{value:"'light'",computed:!1},{value:"'dark'",computed:!1}]},required:!1,description:""},items:{defaultValue:{value:`[
  {
    name: 'F',
    position: 'Pizza of Pizza',
    image: 'https://assets.fomolol.com/pizza.png',
  },
  {
    name: 'O',
    position: 'Ipsum of Lorem',
    image: 'https://assets.fomolol.com/pizza.png',
    subMenu: [{ name: 'Two Data' }],
  },
  {
    name: 'M',
    position: 'Ipsum of Lorem',
    image: 'https://assets.fomolol.com/pizza.png',
    subMenu: [{ name: 'Three Data' }, { name: 'More data' }],
  },
  {
    name: 'O',
    position: 'Ipsum of Lorem',
    image: 'https://assets.fomolol.com/pizza.png',
  },
]`,computed:!1},type:{name:"object"},required:!1,description:""}}};const Z={title:"Menu",component:g,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/file/ZWac9AlG8DnI4qKIfQtpaS/Spotify-Ubiquity-(FOMOLOL)?node-id=25%3A1496&t=8LyfDiWsNaCQuytA-4"}},args:{variant:"light"},argTypes:{variant:{options:["light","dark"],control:{type:"select"}}}},E=n(({variant:e})=>(console.log("variant",e),o(g,{variant:e})),"Template"),G=E.bind({});G.storyName="default";const J=["Default"];export{G as Default,J as __namedExportsOrder,Z as default};
//# sourceMappingURL=Menu.stories.9ea4d4f8.js.map
