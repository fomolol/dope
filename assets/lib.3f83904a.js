var Gr=Object.defineProperty;var t=(i,e)=>Gr(i,"name",{value:e,configurable:!0});import{r as Zr}from"./index.6015db55.js";import{c as Xr}from"./iframe.1f35fd3c.js";var d={},Te={exports:{}};(function(i,e){(function(r,n){var a="1.0.32",m="",T="?",S="function",F="undefined",q="object",j="string",$="major",s="model",u="name",o="type",l="vendor",c="version",I="architecture",Y="console",f="mobile",v="tablet",k="smarttv",H="wearable",Me="embedded",be=350,me="Amazon",ve="Apple",ke="ASUS",Ce="BlackBerry",L="Browser",ee="Chrome",zr="Edge",re="Firefox",ie="Google",Ie="Huawei",we="LG",pe="Microsoft",We="Motorola",ne="Opera",fe="Samsung",_e="Sharp",te="Sony",ge="Xiaomi",he="Zebra",Ne="Facebook",qr=t(function(w,h){var p={};for(var E in w)h[E]&&h[E].length%2===0?p[E]=h[E].concat(w[E]):p[E]=w[E];return p},"extend"),ae=t(function(w){for(var h={},p=0;p<w.length;p++)h[w[p].toUpperCase()]=w[p];return h},"enumerize"),Fe=t(function(w,h){return typeof w===j?G(h).indexOf(G(w))!==-1:!1},"has"),G=t(function(w){return w.toLowerCase()},"lowerize"),Yr=t(function(w){return typeof w===j?w.replace(/[^\d\.]/g,m).split(".")[0]:n},"majorize"),ye=t(function(w,h){if(typeof w===j)return w=w.replace(/^\s\s*/,m).replace(/\s\s*$/,m),typeof h===F?w:w.substring(0,be)},"trim"),Z=t(function(w,h){for(var p=0,E,g,se,O,X,_;p<h.length&&!X;){var je=h[p],Le=h[p+1];for(E=g=0;E<je.length&&!X;)if(X=je[E++].exec(w),X)for(se=0;se<Le.length;se++)_=X[++g],O=Le[se],typeof O===q&&O.length>0?O.length===2?typeof O[1]==S?this[O[0]]=O[1].call(this,_):this[O[0]]=O[1]:O.length===3?typeof O[1]===S&&!(O[1].exec&&O[1].test)?this[O[0]]=_?O[1].call(this,_,O[2]):n:this[O[0]]=_?_.replace(O[1],O[2]):n:O.length===4&&(this[O[0]]=_?O[3].call(this,_.replace(O[1],O[2])):n):this[O]=_||n;p+=2}},"rgxMapper"),Oe=t(function(w,h){for(var p in h)if(typeof h[p]===q&&h[p].length>0){for(var E=0;E<h[p].length;E++)if(Fe(h[p][E],w))return p===T?n:p}else if(Fe(h[p],w))return p===T?n:p;return w},"strMapper"),Hr={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},Ue={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},Be={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[c,[u,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[c,[u,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[u,c],[/opios[\/ ]+([\w\.]+)/i],[c,[u,ne+" Mini"]],[/\bopr\/([\w\.]+)/i],[c,[u,ne]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[u,c],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[c,[u,"UC"+L]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[c,[u,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[c,[u,"WeChat"]],[/konqueror\/([\w\.]+)/i],[c,[u,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[c,[u,"IE"]],[/yabrowser\/([\w\.]+)/i],[c,[u,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[u,/(.+)/,"$1 Secure "+L],c],[/\bfocus\/([\w\.]+)/i],[c,[u,re+" Focus"]],[/\bopt\/([\w\.]+)/i],[c,[u,ne+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[c,[u,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[c,[u,"Dolphin"]],[/coast\/([\w\.]+)/i],[c,[u,ne+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[c,[u,"MIUI "+L]],[/fxios\/([-\w\.]+)/i],[c,[u,re]],[/\bqihu|(qi?ho?o?|360)browser/i],[[u,"360 "+L]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[u,/(.+)/,"$1 "+L],c],[/(comodo_dragon)\/([\w\.]+)/i],[[u,/_/g," "],c],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[u,c],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[u],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[u,Ne],c],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[u,c],[/\bgsa\/([\w\.]+) .*safari\//i],[c,[u,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[c,[u,ee+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[u,ee+" WebView"],c],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[c,[u,"Android "+L]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[u,c],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[c,[u,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[c,u],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[u,[c,Oe,Hr]],[/(webkit|khtml)\/([\w\.]+)/i],[u,c],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[u,"Netscape"],c],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[c,[u,re+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[u,c]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[I,"amd64"]],[/(ia32(?=;))/i],[[I,G]],[/((?:i[346]|x)86)[;\)]/i],[[I,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[I,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[I,"armhf"]],[/windows (ce|mobile); ppc;/i],[[I,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[I,/ower/,m,G]],[/(sun4\w)[;\)]/i],[[I,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[I,G]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[s,[l,fe],[o,v]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[s,[l,fe],[o,f]],[/\((ip(?:hone|od)[\w ]*);/i],[s,[l,ve],[o,f]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[s,[l,ve],[o,v]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[s,[l,Ie],[o,v]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[s,[l,Ie],[o,f]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[s,/_/g," "],[l,ge],[o,f]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[s,/_/g," "],[l,ge],[o,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[s,[l,"OPPO"],[o,f]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[s,[l,"Vivo"],[o,f]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[s,[l,"Realme"],[o,f]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[s,[l,We],[o,f]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[s,[l,We],[o,v]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[s,[l,we],[o,v]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[s,[l,we],[o,f]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[s,[l,"Lenovo"],[o,v]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[s,/_/g," "],[l,"Nokia"],[o,f]],[/(pixel c)\b/i],[s,[l,ie],[o,v]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[s,[l,ie],[o,f]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[s,[l,te],[o,f]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[s,"Xperia Tablet"],[l,te],[o,v]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[s,[l,"OnePlus"],[o,f]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[s,[l,me],[o,v]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[s,/(.+)/g,"Fire Phone $1"],[l,me],[o,f]],[/(playbook);[-\w\),; ]+(rim)/i],[s,l,[o,v]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[s,[l,Ce],[o,f]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[s,[l,ke],[o,v]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[s,[l,ke],[o,f]],[/(nexus 9)/i],[s,[l,"HTC"],[o,v]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[l,[s,/_/g," "],[o,f]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[s,[l,"Acer"],[o,v]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[s,[l,"Meizu"],[o,f]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[s,[l,_e],[o,f]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[l,s,[o,f]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[l,s,[o,v]],[/(surface duo)/i],[s,[l,pe],[o,v]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[s,[l,"Fairphone"],[o,f]],[/(u304aa)/i],[s,[l,"AT&T"],[o,f]],[/\bsie-(\w*)/i],[s,[l,"Siemens"],[o,f]],[/\b(rct\w+) b/i],[s,[l,"RCA"],[o,v]],[/\b(venue[\d ]{2,7}) b/i],[s,[l,"Dell"],[o,v]],[/\b(q(?:mv|ta)\w+) b/i],[s,[l,"Verizon"],[o,v]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[s,[l,"Barnes & Noble"],[o,v]],[/\b(tm\d{3}\w+) b/i],[s,[l,"NuVision"],[o,v]],[/\b(k88) b/i],[s,[l,"ZTE"],[o,v]],[/\b(nx\d{3}j) b/i],[s,[l,"ZTE"],[o,f]],[/\b(gen\d{3}) b.+49h/i],[s,[l,"Swiss"],[o,f]],[/\b(zur\d{3}) b/i],[s,[l,"Swiss"],[o,v]],[/\b((zeki)?tb.*\b) b/i],[s,[l,"Zeki"],[o,v]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[l,"Dragon Touch"],s,[o,v]],[/\b(ns-?\w{0,9}) b/i],[s,[l,"Insignia"],[o,v]],[/\b((nxa|next)-?\w{0,9}) b/i],[s,[l,"NextBook"],[o,v]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[l,"Voice"],s,[o,f]],[/\b(lvtel\-)?(v1[12]) b/i],[[l,"LvTel"],s,[o,f]],[/\b(ph-1) /i],[s,[l,"Essential"],[o,f]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[s,[l,"Envizen"],[o,v]],[/\b(trio[-\w\. ]+) b/i],[s,[l,"MachSpeed"],[o,v]],[/\btu_(1491) b/i],[s,[l,"Rotor"],[o,v]],[/(shield[\w ]+) b/i],[s,[l,"Nvidia"],[o,v]],[/(sprint) (\w+)/i],[l,s,[o,f]],[/(kin\.[onetw]{3})/i],[[s,/\./g," "],[l,pe],[o,f]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[s,[l,he],[o,v]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[s,[l,he],[o,f]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[l,s,[o,Y]],[/droid.+; (shield) bui/i],[s,[l,"Nvidia"],[o,Y]],[/(playstation [345portablevi]+)/i],[s,[l,te],[o,Y]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[s,[l,pe],[o,Y]],[/smart-tv.+(samsung)/i],[l,[o,k]],[/hbbtv.+maple;(\d+)/i],[[s,/^/,"SmartTV"],[l,fe],[o,k]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[l,we],[o,k]],[/(apple) ?tv/i],[l,[s,ve+" TV"],[o,k]],[/crkey/i],[[s,ee+"cast"],[l,ie],[o,k]],[/droid.+aft(\w)( bui|\))/i],[s,[l,me],[o,k]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[s,[l,_e],[o,k]],[/(bravia[\w ]+)( bui|\))/i],[s,[l,te],[o,k]],[/(mitv-\w{5}) bui/i],[s,[l,ge],[o,k]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[l,ye],[s,ye],[o,k]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[o,k]],[/((pebble))app/i],[l,s,[o,H]],[/droid.+; (glass) \d/i],[s,[l,ie],[o,H]],[/droid.+; (wt63?0{2,3})\)/i],[s,[l,he],[o,H]],[/(quest( 2)?)/i],[s,[l,Ne],[o,H]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[l,[o,Me]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[s,[o,f]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[s,[o,v]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[o,v]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[o,f]],[/(android[-\w\. ]{0,9});.+buil/i],[s,[l,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[c,[u,zr+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[c,[u,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[u,c],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[c,u]],os:[[/microsoft (windows) (vista|xp)/i],[u,c],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[u,[c,Oe,Ue]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[u,"Windows"],[c,Oe,Ue]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[c,/_/g,"."],[u,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[u,"Mac OS"],[c,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[c,u],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[u,c],[/\(bb(10);/i],[c,[u,Ce]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[c,[u,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[c,[u,re+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[c,[u,"webOS"]],[/crkey\/([\d\.]+)/i],[c,[u,ee+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[u,"Chromium OS"],c],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[u,c],[/(sunos) ?([\w\.\d]*)/i],[[u,"Solaris"],c],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[u,c]]},W=t(function(w,h){if(typeof w===q&&(h=w,w=n),!(this instanceof W))return new W(w,h).getResult();var p=w||(typeof r!==F&&r.navigator&&r.navigator.userAgent?r.navigator.userAgent:m),E=h?qr(Be,h):Be;return this.getBrowser=function(){var g={};return g[u]=n,g[c]=n,Z.call(g,p,E.browser),g.major=Yr(g.version),g},this.getCPU=function(){var g={};return g[I]=n,Z.call(g,p,E.cpu),g},this.getDevice=function(){var g={};return g[l]=n,g[s]=n,g[o]=n,Z.call(g,p,E.device),g},this.getEngine=function(){var g={};return g[u]=n,g[c]=n,Z.call(g,p,E.engine),g},this.getOS=function(){var g={};return g[u]=n,g[c]=n,Z.call(g,p,E.os),g},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return p},this.setUA=function(g){return p=typeof g===j&&g.length>be?ye(g,be):g,this},this.setUA(p),this},"UAParser");W.VERSION=a,W.BROWSER=ae([u,c,$]),W.CPU=ae([I]),W.DEVICE=ae([s,l,o,Y,f,k,v,H,Me]),W.ENGINE=W.OS=ae([u,c]),i.exports&&(e=i.exports=W),e.UAParser=W;var D=typeof r!==F&&(r.jQuery||r.Zepto);if(D&&!D.ua){var oe=new W;D.ua=oe.getResult(),D.ua.get=function(){return oe.getUA()},D.ua.set=function(w){oe.setUA(w);var h=oe.getResult();for(var p in h)D.ua[p]=h[p]}}})(typeof window=="object"?window:Xr)})(Te,Te.exports);Object.defineProperty(d,"__esModule",{value:!0});function Kr(i){return i&&typeof i=="object"&&"default"in i?i.default:i}t(Kr,"_interopDefault");var P=Zr.exports,y=Kr(P),Ye=Te.exports,U=new Ye,A=U.getBrowser(),Jr=U.getCPU(),M=U.getDevice(),Pe=U.getEngine(),B=U.getOS(),J=U.getUA(),He=t(function(e){return U.setUA(e)},"setUa"),Q=t(function(e){if(!e){console.error("No userAgent string was provided");return}var r=new Ye(e);return{UA:r,browser:r.getBrowser(),cpu:r.getCPU(),device:r.getDevice(),engine:r.getEngine(),os:r.getOS(),ua:r.getUA(),setUserAgent:t(function(a){return r.setUA(a)},"setUserAgent")}},"parseUserAgent"),Ge=Object.freeze({ClientUAInstance:U,browser:A,cpu:Jr,device:M,engine:Pe,os:B,ua:J,setUa:He,parseUserAgent:Q});function De(i,e){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),r.push.apply(r,n)}return r}t(De,"ownKeys");function Qr(i){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?De(Object(r),!0).forEach(function(n){ri(i,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):De(Object(r)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(r,n))})}return i}t(Qr,"_objectSpread2");function K(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?K=t(function(e){return typeof e},"_typeof"):K=t(function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},"_typeof"),K(i)}t(K,"_typeof");function $r(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}t($r,"_classCallCheck");function Re(i,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}t(Re,"_defineProperties");function ei(i,e,r){return e&&Re(i.prototype,e),r&&Re(i,r),i}t(ei,"_createClass");function ri(i,e,r){return e in i?Object.defineProperty(i,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):i[e]=r,i}t(ri,"_defineProperty");function Ee(){return Ee=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n])}return i},Ee.apply(this,arguments)}t(Ee,"_extends");function ii(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),e&&xe(i,e)}t(ii,"_inherits");function Se(i){return Se=Object.setPrototypeOf?Object.getPrototypeOf:t(function(r){return r.__proto__||Object.getPrototypeOf(r)},"_getPrototypeOf"),Se(i)}t(Se,"_getPrototypeOf");function xe(i,e){return xe=Object.setPrototypeOf||t(function(n,a){return n.__proto__=a,n},"_setPrototypeOf"),xe(i,e)}t(xe,"_setPrototypeOf");function ni(i,e){if(i==null)return{};var r={},n=Object.keys(i),a,m;for(m=0;m<n.length;m++)a=n[m],!(e.indexOf(a)>=0)&&(r[a]=i[a]);return r}t(ni,"_objectWithoutPropertiesLoose");function C(i,e){if(i==null)return{};var r=ni(i,e),n,a;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);for(a=0;a<m.length;a++)n=m[a],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,n)||(r[n]=i[n]))}return r}t(C,"_objectWithoutProperties");function le(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}t(le,"_assertThisInitialized");function ti(i,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return le(i)}t(ti,"_possibleConstructorReturn");function ai(i,e){return oi(i)||si(i,e)||li(i,e)||ui()}t(ai,"_slicedToArray");function oi(i){if(Array.isArray(i))return i}t(oi,"_arrayWithHoles");function si(i,e){var r=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(r!=null){var n=[],a=!0,m=!1,T,S;try{for(r=r.call(i);!(a=(T=r.next()).done)&&(n.push(T.value),!(e&&n.length===e));a=!0);}catch(F){m=!0,S=F}finally{try{!a&&r.return!=null&&r.return()}finally{if(m)throw S}}return n}}t(si,"_iterableToArrayLimit");function li(i,e){if(!!i){if(typeof i=="string")return ze(i,e);var r=Object.prototype.toString.call(i).slice(8,-1);if(r==="Object"&&i.constructor&&(r=i.constructor.name),r==="Map"||r==="Set")return Array.from(i);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ze(i,e)}}t(li,"_unsupportedIterableToArray");function ze(i,e){(e==null||e>i.length)&&(e=i.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=i[r];return n}t(ze,"_arrayLikeToArray");function ui(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}t(ui,"_nonIterableRest");var x={Mobile:"mobile",Tablet:"tablet",SmartTv:"smarttv",Console:"console",Wearable:"wearable",Embedded:"embedded",Browser:void 0},V={Chrome:"Chrome",Firefox:"Firefox",Opera:"Opera",Yandex:"Yandex",Safari:"Safari",InternetExplorer:"Internet Explorer",Edge:"Edge",Chromium:"Chromium",Ie:"IE",MobileSafari:"Mobile Safari",EdgeChromium:"Edge Chromium",MIUI:"MIUI Browser",SamsungBrowser:"Samsung Browser"},z={IOS:"iOS",Android:"Android",WindowsPhone:"Windows Phone",Windows:"Windows",MAC_OS:"Mac OS"},di={isMobile:!1,isTablet:!1,isBrowser:!1,isSmartTV:!1,isConsole:!1,isWearable:!1},ci=t(function(e){switch(e){case x.Mobile:return{isMobile:!0};case x.Tablet:return{isTablet:!0};case x.SmartTv:return{isSmartTV:!0};case x.Console:return{isConsole:!0};case x.Wearable:return{isWearable:!0};case x.Browser:return{isBrowser:!0};case x.Embedded:return{isEmbedded:!0};default:return di}},"checkDeviceType"),bi=t(function(e){return He(e)},"setUserAgent"),b=t(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"none";return e||r},"setDefaults"),Ae=t(function(){return typeof window<"u"&&(window.navigator||navigator)?window.navigator||navigator:!1},"getNavigatorInstance"),Ve=t(function(e){var r=Ae();return r&&r.platform&&(r.platform.indexOf(e)!==-1||r.platform==="MacIntel"&&r.maxTouchPoints>1&&!window.MSStream)},"isIOS13Check"),mi=t(function(e,r,n,a,m){return{isBrowser:e,browserMajorVersion:b(r.major),browserFullVersion:b(r.version),browserName:b(r.name),engineName:b(n.name),engineVersion:b(n.version),osName:b(a.name),osVersion:b(a.version),userAgent:b(m)}},"browserPayload"),qe=t(function(e,r,n,a){return Qr({},e,{vendor:b(r.vendor),model:b(r.model),os:b(n.name),osVersion:b(n.version),ua:b(a)})},"mobilePayload"),vi=t(function(e,r,n,a){return{isSmartTV:e,engineName:b(r.name),engineVersion:b(r.version),osName:b(n.name),osVersion:b(n.version),userAgent:b(a)}},"smartTvPayload"),wi=t(function(e,r,n,a){return{isConsole:e,engineName:b(r.name),engineVersion:b(r.version),osName:b(n.name),osVersion:b(n.version),userAgent:b(a)}},"consolePayload"),pi=t(function(e,r,n,a){return{isWearable:e,engineName:b(r.name),engineVersion:b(r.version),osName:b(n.name),osVersion:b(n.version),userAgent:b(a)}},"wearablePayload"),fi=t(function(e,r,n,a,m){return{isEmbedded:e,vendor:b(r.vendor),model:b(r.model),engineName:b(n.name),engineVersion:b(n.version),osName:b(a.name),osVersion:b(a.version),userAgent:b(m)}},"embeddedPayload");function gi(i){var e=i?Q(i):Ge,r=e.device,n=e.browser,a=e.engine,m=e.os,T=e.ua,S=ci(r.type),F=S.isBrowser,q=S.isMobile,j=S.isTablet,$=S.isSmartTV,s=S.isConsole,u=S.isWearable,o=S.isEmbedded;if(F)return mi(F,n,a,m,T);if($)return vi($,a,m,T);if(s)return wi(s,a,m,T);if(q||j)return qe(S,r,m,T);if(u)return pi(u,a,m,T);if(o)return fi(o,r,a,m,T)}t(gi,"deviceDetect");var Ze=t(function(e){var r=e.type;return r===x.Mobile},"isMobileType"),Xe=t(function(e){var r=e.type;return r===x.Tablet},"isTabletType"),Ke=t(function(e){var r=e.type;return r===x.Mobile||r===x.Tablet},"isMobileAndTabletType"),Je=t(function(e){var r=e.type;return r===x.SmartTv},"isSmartTVType"),ue=t(function(e){var r=e.type;return r===x.Browser},"isBrowserType"),Qe=t(function(e){var r=e.type;return r===x.Wearable},"isWearableType"),$e=t(function(e){var r=e.type;return r===x.Console},"isConsoleType"),er=t(function(e){var r=e.type;return r===x.Embedded},"isEmbeddedType"),rr=t(function(e){var r=e.vendor;return b(r)},"getMobileVendor"),ir=t(function(e){var r=e.model;return b(r)},"getMobileModel"),nr=t(function(e){var r=e.type;return b(r,"browser")},"getDeviceType"),tr=t(function(e){var r=e.name;return r===z.Android},"isAndroidType"),ar=t(function(e){var r=e.name;return r===z.Windows},"isWindowsType"),or=t(function(e){var r=e.name;return r===z.MAC_OS},"isMacOsType"),sr=t(function(e){var r=e.name;return r===z.WindowsPhone},"isWinPhoneType"),lr=t(function(e){var r=e.name;return r===z.IOS},"isIOSType"),ur=t(function(e){var r=e.version;return b(r)},"getOsVersion"),dr=t(function(e){var r=e.name;return b(r)},"getOsName"),cr=t(function(e){var r=e.name;return r===V.Chrome},"isChromeType"),br=t(function(e){var r=e.name;return r===V.Firefox},"isFirefoxType"),mr=t(function(e){var r=e.name;return r===V.Chromium},"isChromiumType"),de=t(function(e){var r=e.name;return r===V.Edge},"isEdgeType"),vr=t(function(e){var r=e.name;return r===V.Yandex},"isYandexType"),wr=t(function(e){var r=e.name;return r===V.Safari||r===V.MobileSafari},"isSafariType"),pr=t(function(e){var r=e.name;return r===V.MobileSafari},"isMobileSafariType"),fr=t(function(e){var r=e.name;return r===V.Opera},"isOperaType"),gr=t(function(e){var r=e.name;return r===V.InternetExplorer||r===V.Ie},"isIEType"),hr=t(function(e){var r=e.name;return r===V.MIUI},"isMIUIType"),yr=t(function(e){var r=e.name;return r===V.SamsungBrowser},"isSamsungBrowserType"),Or=t(function(e){var r=e.version;return b(r)},"getBrowserFullVersion"),Tr=t(function(e){var r=e.major;return b(r)},"getBrowserVersion"),Er=t(function(e){var r=e.name;return b(r)},"getBrowserName"),Sr=t(function(e){var r=e.name;return b(r)},"getEngineName"),xr=t(function(e){var r=e.version;return b(r)},"getEngineVersion"),Pr=t(function(){var e=Ae(),r=e&&e.userAgent&&e.userAgent.toLowerCase();return typeof r=="string"?/electron/.test(r):!1},"isElectronType"),R=t(function(e){return typeof e=="string"&&e.indexOf("Edg/")!==-1},"isEdgeChromiumType"),Ar=t(function(){var e=Ae();return e&&(/iPad|iPhone|iPod/.test(e.platform)||e.platform==="MacIntel"&&e.maxTouchPoints>1)&&!window.MSStream},"getIOS13"),N=t(function(){return Ve("iPad")},"getIPad13"),Vr=t(function(){return Ve("iPhone")},"getIphone13"),Mr=t(function(){return Ve("iPod")},"getIPod13"),kr=t(function(e){return b(e)},"getUseragent");function Cr(i){var e=i||Ge,r=e.device,n=e.browser,a=e.os,m=e.engine,T=e.ua;return{isSmartTV:Je(r),isConsole:$e(r),isWearable:Qe(r),isEmbedded:er(r),isMobileSafari:pr(n)||N(),isChromium:mr(n),isMobile:Ke(r)||N(),isMobileOnly:Ze(r),isTablet:Xe(r)||N(),isBrowser:ue(r),isDesktop:ue(r),isAndroid:tr(a),isWinPhone:sr(a),isIOS:lr(a)||N(),isChrome:cr(n),isFirefox:br(n),isSafari:wr(n),isOpera:fr(n),isIE:gr(n),osVersion:ur(a),osName:dr(a),fullBrowserVersion:Or(n),browserVersion:Tr(n),browserName:Er(n),mobileVendor:rr(r),mobileModel:ir(r),engineName:Sr(m),engineVersion:xr(m),getUA:kr(T),isEdge:de(n)||R(T),isYandex:vr(n),deviceType:nr(r),isIOS13:Ar(),isIPad13:N(),isIPhone13:Vr(),isIPod13:Mr(),isElectron:Pr(),isEdgeChromium:R(T),isLegacyEdge:de(n)&&!R(T),isWindows:ar(a),isMacOs:or(a),isMIUI:hr(n),isSamsungBrowser:yr(n)}}t(Cr,"buildSelectorsObject");var Ir=Je(M),Wr=$e(M),_r=Qe(M),hi=er(M),yi=pr(A)||N(),Oi=mr(A),ce=Ke(M)||N(),Nr=Ze(M),Fr=Xe(M)||N(),Ur=ue(M),Ti=ue(M),Br=tr(B),jr=sr(B),Lr=lr(B)||N(),Ei=cr(A),Si=br(A),xi=wr(A),Pi=fr(A),Dr=gr(A),Ai=ur(B),Vi=dr(B),Mi=Or(A),ki=Tr(A),Ci=Er(A),Ii=rr(M),Wi=ir(M),_i=Sr(Pe),Ni=xr(Pe),Fi=kr(J),Ui=de(A)||R(J),Bi=vr(A),ji=nr(M),Li=Ar(),Di=N(),Ri=Vr(),zi=Mr(),qi=Pr(),Yi=R(J),Hi=de(A)&&!R(J),Gi=ar(B),Zi=or(B),Xi=hr(A),Ki=yr(A),Ji=t(function(e){if(!e||typeof e!="string"){console.error("No valid user agent string was provided");return}var r=Q(e),n=r.device,a=r.browser,m=r.os,T=r.engine,S=r.ua;return Cr({device:n,browser:a,os:m,engine:T,ua:S})},"getSelectorsByUserAgent"),Qi=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Br?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"AndroidView"),$i=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Ur?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"BrowserView"),en=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Dr?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"IEView"),rn=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Lr?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"IOSView"),nn=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return ce?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"MobileView"),tn=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Fr?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"TabletView"),an=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return jr?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"WinPhoneView"),on=t(function(e){var r=e.renderWithFragment,n=e.children;e.viewClassName,e.style;var a=C(e,["renderWithFragment","children","viewClassName","style"]);return Nr?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"MobileOnlyView"),sn=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Ir?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"SmartTVView"),ln=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return Wr?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"ConsoleView"),un=t(function(e){var r=e.renderWithFragment,n=e.children,a=C(e,["renderWithFragment","children"]);return _r?r?y.createElement(P.Fragment,null,n):y.createElement("div",a,n):null},"WearableView"),dn=t(function(e){var r=e.renderWithFragment,n=e.children;e.viewClassName,e.style;var a=e.condition,m=C(e,["renderWithFragment","children","viewClassName","style","condition"]);return a?r?y.createElement(P.Fragment,null,n):y.createElement("div",m,n):null},"CustomView");function cn(i){return function(e){ii(r,e);function r(n){var a;return $r(this,r),a=ti(this,Se(r).call(this,n)),a.isEventListenerAdded=!1,a.handleOrientationChange=a.handleOrientationChange.bind(le(a)),a.onOrientationChange=a.onOrientationChange.bind(le(a)),a.onPageLoad=a.onPageLoad.bind(le(a)),a.state={isLandscape:!1,isPortrait:!1},a}return t(r,"_class"),ei(r,[{key:"handleOrientationChange",value:t(function(){this.isEventListenerAdded||(this.isEventListenerAdded=!0);var a=window.innerWidth>window.innerHeight?90:0;this.setState({isPortrait:a===0,isLandscape:a===90})},"handleOrientationChange")},{key:"onOrientationChange",value:t(function(){this.handleOrientationChange()},"onOrientationChange")},{key:"onPageLoad",value:t(function(){this.handleOrientationChange()},"onPageLoad")},{key:"componentDidMount",value:t(function(){(typeof window>"u"?"undefined":K(window))!==void 0&&ce&&(this.isEventListenerAdded?window.removeEventListener("load",this.onPageLoad,!1):(this.handleOrientationChange(),window.addEventListener("load",this.onPageLoad,!1)),window.addEventListener("resize",this.onOrientationChange,!1))},"componentDidMount")},{key:"componentWillUnmount",value:t(function(){window.removeEventListener("resize",this.onOrientationChange,!1)},"componentWillUnmount")},{key:"render",value:t(function(){return y.createElement(i,Ee({},this.props,{isLandscape:this.state.isLandscape,isPortrait:this.state.isPortrait}))},"render")}]),r}(y.Component)}t(cn,"withOrientationChange");function bn(){var i=P.useState(function(){var m=window.innerWidth>window.innerHeight?90:0;return{isPortrait:m===0,isLandscape:m===90,orientation:m===0?"portrait":"landscape"}}),e=ai(i,2),r=e[0],n=e[1],a=P.useCallback(function(){var m=window.innerWidth>window.innerHeight?90:0,T={isPortrait:m===0,isLandscape:m===90,orientation:m===0?"portrait":"landscape"};r.orientation!==T.orientation&&n(T)},[r.orientation]);return P.useEffect(function(){return(typeof window>"u"?"undefined":K(window))!==void 0&&ce&&(a(),window.addEventListener("load",a,!1),window.addEventListener("resize",a,!1)),function(){window.removeEventListener("resize",a,!1),window.removeEventListener("load",a,!1)}},[a]),r}t(bn,"useMobileOrientation");function Rr(i){var e=i||window.navigator.userAgent;return Q(e)}t(Rr,"useDeviceData");function mn(i){var e=i||window.navigator.userAgent,r=Rr(e),n=Cr(r);return[n,r]}t(mn,"useDeviceSelectors");d.AndroidView=Qi;d.BrowserTypes=V;d.BrowserView=$i;d.ConsoleView=ln;d.CustomView=dn;d.IEView=en;d.IOSView=rn;d.MobileOnlyView=on;d.MobileView=nn;d.OsTypes=z;d.SmartTVView=sn;d.TabletView=tn;d.WearableView=un;d.WinPhoneView=an;d.browserName=Ci;d.browserVersion=ki;d.deviceDetect=gi;d.deviceType=ji;d.engineName=_i;d.engineVersion=Ni;d.fullBrowserVersion=Mi;d.getSelectorsByUserAgent=Ji;d.getUA=Fi;d.isAndroid=Br;d.isBrowser=Ur;d.isChrome=Ei;d.isChromium=Oi;d.isConsole=Wr;d.isDesktop=Ti;d.isEdge=Ui;d.isEdgeChromium=Yi;d.isElectron=qi;d.isEmbedded=hi;d.isFirefox=Si;d.isIE=Dr;d.isIOS=Lr;d.isIOS13=Li;d.isIPad13=Di;d.isIPhone13=Ri;d.isIPod13=zi;d.isLegacyEdge=Hi;d.isMIUI=Xi;d.isMacOs=Zi;d.isMobile=ce;var fn=d.isMobileOnly=Nr;d.isMobileSafari=yi;d.isOpera=Pi;var gn=d.isSafari=xi;d.isSamsungBrowser=Ki;d.isSmartTV=Ir;var hn=d.isTablet=Fr;d.isWearable=_r;d.isWinPhone=jr;d.isWindows=Gi;d.isYandex=Bi;d.mobileModel=Wi;d.mobileVendor=Ii;var yn=d.osName=Vi;d.osVersion=Ai;d.parseUserAgent=Q;d.setUserAgent=bi;d.useDeviceData=Rr;d.useDeviceSelectors=mn;var On=d.useMobileOrientation=bn;d.withOrientationChange=cn;export{fn as a,hn as b,gn as i,yn as o,On as u};
//# sourceMappingURL=lib.3f83904a.js.map
