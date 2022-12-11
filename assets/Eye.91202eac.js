var x=Object.defineProperty;var r=(o,n)=>x(o,"name",{value:n,configurable:!0});import{r as i}from"./index.6015db55.js";import{p as s}from"./index.3c944792.js";import{b,j as e}from"./jsx-runtime.547177f5.js";const _="_eye_y8kbu_4",N="_eye__default_y8kbu_8",m={eye:_,eye__default:N},t=r(o=>{const{tagName:n,className:p,variant:f}=o;let d=i.exports.useRef(),u=i.exports.useRef();return i.exports.useEffect(()=>{const y=r((a,l)=>{let g=l.current.getBoundingClientRect().left,v=l.current.getBoundingClientRect().top,h=Math.atan2(a.pageX-g,a.pageY-v)*(180/Math.PI)*-1+180;l.current.style.transform=`rotate(${h}deg)`},"rotateEye"),c=r(a=>{y(a,u)},"mouseMove");return document.addEventListener("mousemove",c),()=>{document.removeEventListener("mousemove",c)}},[d]),b(n,{ref:d,className:`${m.eye} ${m[`eye__${f}`]} ${p} outer-container`,children:[e("div",{className:"mx-auto pointer-events-none select-none eye-container cur",children:e("div",{className:"absolute flex text-center eye-lid",children:e("div",{ref:u,className:"absolute flex text-center eyes",style:{transform:"rotate(176.094deg)"},children:e("div",{className:"relative inline-block eye"})})})}),e("style",{jsx:!0,children:`
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
      `})]})},"Eye");t.propTypes={tagName:s.exports.string,className:s.exports.string,variant:s.exports.oneOf(["default"]),children:s.exports.node};t.defaultProps={tagName:"div",className:"h-full",variant:"default",children:""};const z=t;t.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"Eye",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'h-full'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},children:{defaultValue:{value:"''",computed:!1},type:{name:"node"},required:!1,description:""}}};export{z as E};
//# sourceMappingURL=Eye.91202eac.js.map
