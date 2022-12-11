import{a as v,b as e}from"./jsx-runtime-4ad9da42.js";import{r as o}from"./index-10e52e8a.js";import{p as r}from"./index-67732e07.js";const h="_eye_y8kbu_4",x="_eye__default_y8kbu_8",d={eye:h,eye__default:x},s=({tagName:u="div",className:m="w-full h-full",variant:c="default"})=>{let n=o.exports.useRef(),i=o.exports.useRef();return o.exports.useEffect(()=>{const p=(t,a)=>{let f=a.current.getBoundingClientRect().left,y=a.current.getBoundingClientRect().top,g=Math.atan2(t.pageX-f,t.pageY-y)*(180/Math.PI)*-1+180;a.current.style.transform=`rotate(${g}deg)`},l=t=>{p(t,i)};return document.addEventListener("mousemove",l),()=>{document.removeEventListener("mousemove",l)}},[n]),v(u,{ref:n,className:`${d.eye} ${d[`eye__${c}`]} ${m} outer-container`,children:[e("div",{className:"mx-auto pointer-events-none select-none eye-container cur",children:e("div",{className:"absolute flex text-center eye-lid",children:e("div",{ref:i,className:"absolute flex text-center eyes",style:{transform:"rotate(176.094deg)"},children:e("div",{className:"relative inline-block eye"})})})}),e("style",{jsx:!0,children:`
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
          background-image: url(/img/eye-150.png);
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
          background-image: url(/img/cremers-eye-pupil.jpg);
          background-size: cover;
          background-color: black;
          border-radius: 50%;
        }
      `})]})};s.propTypes={tagName:r.exports.string,className:r.exports.string,variant:r.exports.oneOf(["default"]),children:r.exports.node};const E=s;s.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'w-full h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{type:{name:"node"},required:!1,description:""}}};export{E};
//# sourceMappingURL=Eye-bc46bdf6.js.map
