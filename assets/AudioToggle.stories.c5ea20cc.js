var D=Object.defineProperty;var o=(a,t)=>D(a,"name",{value:t,configurable:!0});import{r as p}from"./index.6015db55.js";import{p as f}from"./index.3c944792.js";import{r as A}from"./howler.415d93e1.js";import{b as k,j as i}from"./jsx-runtime.547177f5.js";import"./iframe.1f35fd3c.js";var y={},q=void 0;typeof window<"u"&&(q=A());var j=q,v={};Object.defineProperty(v,"__esModule",{value:!0});v.noop=o(function(){},"noop");Object.defineProperty(y,"__esModule",{value:!0});var $=function(){function a(t,n){for(var e=0;e<n.length;e++){var l=n[e];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}return o(a,"defineProperties"),function(t,n,e){return n&&a(t.prototype,n),e&&a(t,e),t}}(),H=p.exports,R=T(H),I=f.exports,r=T(I),x=j,u=v;function T(a){return a&&a.__esModule?a:{default:a}}o(T,"_interopRequireDefault");function M(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}o(M,"_classCallCheck");function B(a,t){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:a}o(B,"_possibleConstructorReturn");function U(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(a,t):a.__proto__=t)}o(U,"_inherits");var _=function(a){U(t,a);function t(n){M(this,t);var e=B(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.initHowler=e.initHowler.bind(e),e}return o(t,"ReactHowler"),$(t,[{key:"componentDidMount",value:o(function(){this.initHowler()},"componentDidMount")},{key:"componentDidUpdate",value:o(function(e){JSON.stringify(e.src)!==JSON.stringify(this.props.src)?this.initHowler(this.props):this.toggleHowler(e)},"componentDidUpdate")},{key:"componentWillUnmount",value:o(function(){this.destroyHowler()},"componentWillUnmount")},{key:"initHowler",value:o(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props;this.destroyHowler(),typeof x.Howl<"u"&&(this.howler=new x.Howl({src:e.src,xhr:e.xhr,format:e.format,mute:e.mute,loop:e.loop,preload:e.preload,volume:e.volume,rate:e.rate,onend:e.onEnd,onplay:e.onPlay,onplayerror:e.onPlayError,onpause:e.onPause,onvolume:e.onVolume,onstop:e.onStop,onload:e.onLoad,onseek:e.onSeek,onloaderror:e.onLoadError,html5:e.html5}),e.playing&&this.play())},"initHowler")},{key:"destroyHowler",value:o(function(){this.howler&&(this.howler.off(),this.howler.stop(),this.howler.unload(),this.howler=null)},"destroyHowler")},{key:"toggleHowler",value:o(function(e){this.props.playing?this.play():this.pause(),this.loop(this.props.loop),e.mute!==this.props.mute&&this.mute(this.props.mute),e.volume!==this.props.volume&&this.volume(this.props.volume),this.props.preload&&this.howlerState()==="unloaded"&&this.load()},"toggleHowler")},{key:"play",value:o(function(){var e=this.howler.playing();e||(this.howlerState()==="unloaded"&&this.load(),this.howler.play())},"play")},{key:"pause",value:o(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;e?this.howler.pause(e):this.howler.pause()},"pause")},{key:"rate",value:o(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:void 0;typeof e=="number"&&(l?this.howler.rate(e,l):this.howler.rate(e))},"rate")},{key:"howlerState",value:o(function(){return this.howler.state()},"howlerState")},{key:"stop",value:o(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:void 0;e?this.howler.stop(e):this.howler.stop()},"stop")},{key:"mute",value:o(function(){var e;(e=this.howler).mute.apply(e,arguments)},"mute")},{key:"volume",value:o(function(){var e;return(e=this.howler).volume.apply(e,arguments)},"volume")},{key:"loop",value:o(function(){var e;return(e=this.howler).loop.apply(e,arguments)},"loop")},{key:"seek",value:o(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if(!this.howler)return 0;if(!e&&e!==0)return this.howler.seek();if(e||e===0)return this.howler.seek(e),e},"seek")},{key:"duration",value:o(function(){return this.howler.duration()},"duration")},{key:"load",value:o(function(){this.howler.load()},"load")},{key:"render",value:o(function(){return R.default.createElement("div",null)},"render")},{key:"howler",set:o(function(e){e&&(this._howler=e)},"set"),get:o(function(){return this._howler},"get")}]),t}(H.Component);_.propTypes={src:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string)]).isRequired,format:r.default.arrayOf(r.default.string),xhr:r.default.object,playing:r.default.bool,mute:r.default.bool,loop:r.default.bool,preload:r.default.bool,volume:r.default.number,rate:r.default.number,onEnd:r.default.func,onPause:r.default.func,onPlay:r.default.func,onPlayError:r.default.func,onVolume:r.default.func,onStop:r.default.func,onLoad:r.default.func,onSeek:r.default.func,onLoadError:r.default.func,html5:r.default.bool};_.defaultProps={playing:!0,format:[],xhr:{},mute:!1,preload:!0,loop:!1,volume:1,rate:1,onEnd:u.noop,onPause:u.noop,onPlay:u.noop,onPlayError:u.noop,onVolume:u.noop,onStop:u.noop,onLoad:u.noop,onSeek:u.noop,onLoadError:u.noop,html5:!1};y.default=_;var z=y.default;const J="_audio_toggle_aewqn_4",W="_audio_toggle__default_aewqn_8",P={audio_toggle:J,audio_toggle__default:W},c=o(({tagName:a="div",className:t="relative z-10 inline-flex pointer-events-auto",variant:n="default",muted:e=!0,showLabel:l=!0,src:E="/sounds/TheHoly_Lvcidia.mp3",loop:V=!0,preload:O=!0})=>{const[s,m]=p.exports.useState({wasPlaying:!e,isPlaying:!e}),S=10,h=p.exports.useCallback(()=>{m({wasPlaying:!0,isPlaying:s.wasPlaying})},[s.wasPlaying]),g=p.exports.useCallback(()=>{m({wasPlaying:s.isPlaying,isPlaying:!1})},[s.isPlaying]);useEffect(()=>(window.addEventListener("focus",h),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",g)}),[g,h]);const d=!s.isPlaying;return k(a,{className:`${P.audio_toggle} ${P[`audio_toggle__${n}`]} ${t}`,children:[k("button",{className:`inline-flex sound-button pt-[20px] pr-[20px] ${d?"has-sound-muted":null}`,onClick:()=>m(b=>Object.assign({},{isPlaying:!b.isPlaying})),children:[i("span",{className:`transition duration-500 ease-in-out h-[14px] font-pp inline-block items-end leading-none -mt-1 ${d?"group border-dashed border-black dark:border-white border-b hover:border-0":"group hover:border-dashed hover:border-black dark:hover:border-white hover:border-b"}`,children:[...Array(S).keys()].map((b,L)=>i("span",{className:`transition duration-500 ease-in-out ${d?"opacity-0 group-hover:opacity-100":"opacity-100 group-hover:opacity-0"}  mr-[2px] w-[1px] leading-tight inline-block border-l border-dashed border-black dark:border-white sound-button_bar_line`},`bar-${L}`))}),i("span",{className:`${l?"inline-block":"hidden"} sound-button_label ml-[5px] text-black dark:text-white lowercase text-[12px] tracking-wider leading-none`,children:d?"sound off":"sound on"})]}),i(z,{src:E,playing:!d,loop:V,preload:O}),i("style",{jsx:!0,children:`
        .sound-button_bar_line {
          animation: sound 0ms -800ms linear infinite alternate;
        }
        .sound-button_bar_line:nth-child(1) {
          animation-duration: 974ms;
        }
        .sound-button_bar_line:nth-child(2) {
          animation-duration: 933ms;
        }
        .sound-button_bar_line:nth-child(3) {
          animation-duration: 907ms;
        }
        .sound-button_bar_line:nth-child(4) {
          animation-duration: 958ms;
        }
        .sound-button_bar_line:nth-child(5) {
          animation-duration: 900ms;
        }
        .sound-button_bar_line:nth-child(6) {
          animation-duration: 927ms;
        }
        .sound-button_bar_line:nth-child(7) {
          animation-duration: 941ms;
        }
        .sound-button_bar_line:nth-child(8) {
          animation-duration: 919ms;
        }
        .sound-button_bar_line:nth-child(9) {
          animation-duration: 987ms;
        }
        .sound-button_bar_line:nth-child(10) {
          animation-duration: 942ms;
        }
        @keyframes sound {
          0% {
            height: 4px;
          }
          100% {
            height: 100%;
          }
        }
      `})]})},"AudioToggle");c.propTypes={tagName:f.exports.string,className:f.exports.string,variant:f.exports.oneOf(["default"]),children:f.exports.node};const N=c;c.__docgenInfo={description:"",methods:[],displayName:"AudioToggle",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'relative z-10 inline-flex pointer-events-auto'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},muted:{defaultValue:{value:"true",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},src:{defaultValue:{value:"'/sounds/TheHoly_Lvcidia.mp3'",computed:!1},required:!1},loop:{defaultValue:{value:"true",computed:!1},required:!1},preload:{defaultValue:{value:"true",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"AudioToggle",props:{tagName:{defaultValue:{value:"'div'",computed:!1},type:{name:"string"},required:!1,description:""},className:{defaultValue:{value:"'relative z-10 inline-flex pointer-events-auto'",computed:!1},type:{name:"string"},required:!1,description:""},variant:{defaultValue:{value:"'default'",computed:!1},type:{name:"enum",value:[{value:"'default'",computed:!1}]},required:!1,description:""},muted:{defaultValue:{value:"true",computed:!1},required:!1},showLabel:{defaultValue:{value:"true",computed:!1},required:!1},src:{defaultValue:{value:"'/sounds/TheHoly_Lvcidia.mp3'",computed:!1},required:!1},loop:{defaultValue:{value:"true",computed:!1},required:!1},preload:{defaultValue:{value:"true",computed:!1},required:!1},children:{type:{name:"node"},required:!1,description:""}}};const Z={title:"AudioToggle",component:N,parameters:{storySource:{source:`/**
 * AudioToggle.jsx
 */
 import * as React from 'react';

 // Component(s)
 import AudioToggle from './AudioToggle';

 export default {
   title: 'AudioToggle',
   component: AudioToggle,
   // Sets the layout parameter component wide.
   parameters: {
     layout: 'centered',
   },
 };

 export const Default = () => <AudioToggle />;

 Default.storyName = 'default';
;Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"};Default.__docgenInfo={"description":"","methods":[],"displayName":"Default"}`,locationsMap:{default:{startLoc:{col:24,line:18},endLoc:{col:45,line:18},startBody:{col:24,line:18},endBody:{col:45,line:18}}}},layout:"centered"}},w=o(()=>i(N,{}),"Default");w.storyName="default";w.__docgenInfo={description:"",methods:[],displayName:"Default"};w.__docgenInfo={description:"",methods:[],displayName:"Default"};const C=["Default"];export{w as Default,C as __namedExportsOrder,Z as default};
//# sourceMappingURL=AudioToggle.stories.c5ea20cc.js.map
