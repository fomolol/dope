var c=Object.defineProperty;var s=(e,t)=>c(e,"name",{value:t,configurable:!0});import{r}from"./index.6015db55.js";import{u as f,M as p,m as l,b as i,i as m,c as C,s as g}from"./animate.aee8590b.js";function h(e){const t=f(()=>l(e)),{isStatic:o}=r.exports.useContext(p);if(o){const[,n]=r.exports.useState(e);r.exports.useEffect(()=>t.onChange(n),[])}return t}s(h,"useMotionValue");function E(e,t){i(()=>{if(m(e))return e.onChange(t)},[t])}s(E,"useOnChange");function M(e,t,o){i(()=>{const n=e.map(u=>u.onChange(t));return()=>{n.forEach(u=>u()),o()}})}s(M,"useMultiOnChange");function x(e,t){const o=h(t()),n=s(()=>o.set(t()),"updateValue");return n(),M(e,()=>g.update(n,!1,!0),()=>C.update(n)),o}s(x,"useCombineMotionValues");function S(e,...t){const o=e.length;function n(){let u="";for(let a=0;a<o;a++)u+=e[a],t[a]&&(u+=t[a].get());return u}return s(n,"buildValue"),x(t,n)}s(S,"useMotionTemplate");export{S as a,E as b,x as c,h as u};
//# sourceMappingURL=use-motion-template.e5260baa.js.map