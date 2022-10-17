import{ref as t,computed as n,openBlock as e,createElementBlock as r,normalizeClass as i,normalizeStyle as a,unref as o,createCommentVNode as u,createElementVNode as l,Fragment as s,renderList as h}from"vue";function c(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function f(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function g(t){let n,e,r;function i(t,r,i=0,a=t.length){if(i<a){if(0!==n(r,r))return a;do{const n=i+a>>>1;e(t[n],r)<0?i=n+1:a=n}while(i<a)}return i}return 2!==t.length?(n=c,e=(n,e)=>c(t(n),e),r=(n,e)=>t(n)-e):(n=t===c||t===f?t:d,e=t,r=t),{left:i,center:function(t,n,e=0,a=t.length){const o=i(t,n,e,a-1);return o>e&&r(t[o-1],n)>-r(t[o],n)?o-1:o},right:function(t,r,i=0,a=t.length){if(i<a){if(0!==n(r,r))return a;do{const n=i+a>>>1;e(t[n],r)<=0?i=n+1:a=n}while(i<a)}return i}}}function d(){return 0}const m=g(c).right;g((function(t){return null===t?NaN:+t})).center;var p=m,v=Math.sqrt(50),b=Math.sqrt(10),y=Math.sqrt(2);function w(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=v?10:a>=b?5:a>=y?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=v?10:a>=b?5:a>=y?2:1)}function M(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function x(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function k(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function N(){}var $=1/.7,A="\\s*([+-]?\\d+)\\s*",S="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",E="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",j=/^#([0-9a-f]{3,8})$/,q=new RegExp(`^rgb\\(${A},${A},${A}\\)$`),C=new RegExp(`^rgb\\(${E},${E},${E}\\)$`),R=new RegExp(`^rgba\\(${A},${A},${A},${S}\\)$`),H=new RegExp(`^rgba\\(${E},${E},${E},${S}\\)$`),z=new RegExp(`^hsl\\(${S},${E},${E}\\)$`),_=new RegExp(`^hsla\\(${S},${E},${E},${S}\\)$`),O={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function P(){return this.rgb().formatHex()}function L(){return this.rgb().formatRgb()}function F(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=j.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?I(n):3===e?new T(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?V(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?V(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=q.exec(t))?new T(n[1],n[2],n[3],1):(n=C.exec(t))?new T(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=R.exec(t))?V(n[1],n[2],n[3],n[4]):(n=H.exec(t))?V(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=z.exec(t))?J(n[1],n[2]/100,n[3]/100,1):(n=_.exec(t))?J(n[1],n[2]/100,n[3]/100,n[4]):O.hasOwnProperty(t)?I(O[t]):"transparent"===t?new T(NaN,NaN,NaN,0):null}function I(t){return new T(t>>16&255,t>>8&255,255&t,1)}function V(t,n,e,r){return r<=0&&(t=n=e=NaN),new T(t,n,e,r)}function B(t){return t instanceof N||(t=F(t)),t?new T((t=t.rgb()).r,t.g,t.b,t.opacity):new T}function D(t,n,e,r){return 1===arguments.length?B(t):new T(t,n,e,null==r?1:r)}function T(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function X(){return`#${Z(this.r)}${Z(this.g)}${Z(this.b)}`}function G(){const t=U(this.opacity);return`${1===t?"rgb(":"rgba("}${Y(this.r)}, ${Y(this.g)}, ${Y(this.b)}${1===t?")":`, ${t})`}`}function U(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Y(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Z(t){return((t=Y(t))<16?"0":"")+t.toString(16)}function J(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new Q(t,n,e,r)}function K(t){if(t instanceof Q)return new Q(t.h,t.s,t.l,t.opacity);if(t instanceof N||(t=F(t)),!t)return new Q;if(t instanceof Q)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),a=Math.max(n,e,r),o=NaN,u=a-i,l=(a+i)/2;return u?(o=n===a?(e-r)/u+6*(e<r):e===a?(r-n)/u+2:(n-e)/u+4,u/=l<.5?a+i:2-a-i,o*=60):u=l>0&&l<1?0:o,new Q(o,u,l,t.opacity)}function Q(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function W(t){return(t=(t||0)%360)<0?t+360:t}function tt(t){return Math.max(0,Math.min(1,t||0))}function nt(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}x(N,F,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:P,formatHex:P,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return K(this).formatHsl()},formatRgb:L,toString:L}),x(T,D,k(N,{brighter(t){return t=null==t?$:Math.pow($,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new T(Y(this.r),Y(this.g),Y(this.b),U(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:X,formatHex:X,formatHex8:function(){return`#${Z(this.r)}${Z(this.g)}${Z(this.b)}${Z(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:G,toString:G})),x(Q,(function(t,n,e,r){return 1===arguments.length?K(t):new Q(t,n,e,null==r?1:r)}),k(N,{brighter(t){return t=null==t?$:Math.pow($,t),new Q(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new Q(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new T(nt(t>=240?t-240:t+120,i,r),nt(t,i,r),nt(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new Q(W(this.h),tt(this.s),tt(this.l),U(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=U(this.opacity);return`${1===t?"hsl(":"hsla("}${W(this.h)}, ${100*tt(this.s)}%, ${100*tt(this.l)}%${1===t?")":`, ${t})`}`}}));var et=t=>()=>t;function rt(t){return 1==(t=+t)?it:function(n,e){return e-n?function(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}(n,e,t):et(isNaN(n)?e:n)}}function it(t,n){var e=n-t;return e?function(t,n){return function(e){return t+e*n}}(t,e):et(isNaN(t)?n:t)}var at=function t(n){var e=rt(n);function r(t,n){var r=e((t=D(t)).r,(n=D(n)).r),i=e(t.g,n.g),a=e(t.b,n.b),o=it(t.opacity,n.opacity);return function(n){return t.r=r(n),t.g=i(n),t.b=a(n),t.opacity=o(n),t+""}}return r.gamma=t,r}(1);function ot(t,n){n||(n=[]);var e,r=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(e=0;e<r;++e)i[e]=t[e]*(1-a)+n[e]*a;return i}}function ut(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,a=new Array(i),o=new Array(r);for(e=0;e<i;++e)a[e]=dt(t[e],n[e]);for(;e<r;++e)o[e]=n[e];return function(t){for(e=0;e<i;++e)o[e]=a[e](t);return o}}function lt(t,n){var e=new Date;return t=+t,n=+n,function(r){return e.setTime(t*(1-r)+n*r),e}}function st(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}function ht(t,n){var e,r={},i={};for(e in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)e in t?r[e]=dt(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}}var ct=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ft=new RegExp(ct.source,"g");function gt(t,n){var e,r,i,a=ct.lastIndex=ft.lastIndex=0,o=-1,u=[],l=[];for(t+="",n+="";(e=ct.exec(t))&&(r=ft.exec(n));)(i=r.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,l.push({i:o,x:st(e,r)})),a=ft.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?l[0]?function(t){return function(n){return t(n)+""}}(l[0].x):function(t){return function(){return t}}(n):(n=l.length,function(t){for(var e,r=0;r<n;++r)u[(e=l[r]).i]=e.x(t);return u.join("")})}function dt(t,n){var e,r,i=typeof n;return null==n||"boolean"===i?et(n):("number"===i?st:"string"===i?(e=F(n))?(n=e,at):gt:n instanceof F?at:n instanceof Date?lt:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?ut:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?ht:st:ot))(t,n)}function mt(t,n){return t=+t,n=+n,function(e){return Math.round(t*(1-e)+n*e)}}function pt(t){return+t}var vt=[0,1];function bt(t){return t}function yt(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:(e=isNaN(n)?NaN:.5,function(){return e});var e}function wt(t,n,e){var r=t[0],i=t[1],a=n[0],o=n[1];return i<r?(r=yt(i,r),a=e(o,a)):(r=yt(r,i),a=e(a,o)),function(t){return a(r(t))}}function Mt(t,n,e){var r=Math.min(t.length,n.length)-1,i=new Array(r),a=new Array(r),o=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<r;)i[o]=yt(t[o],t[o+1]),a[o]=e(n[o],n[o+1]);return function(n){var e=p(t,n,1,r)-1;return a[e](i[e](n))}}function xt(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function kt(){var t,n,e,r,i,a,o=vt,u=vt,l=dt,s=bt;function h(){var t,n,e,l=Math.min(o.length,u.length);return s!==bt&&(t=o[0],n=o[l-1],t>n&&(e=t,t=n,n=e),s=function(e){return Math.max(t,Math.min(n,e))}),r=l>2?Mt:wt,i=a=null,c}function c(n){return null==n||isNaN(n=+n)?e:(i||(i=r(o.map(t),u,l)))(t(s(n)))}return c.invert=function(e){return s(n((a||(a=r(u,o.map(t),st)))(e)))},c.domain=function(t){return arguments.length?(o=Array.from(t,pt),h()):o.slice()},c.range=function(t){return arguments.length?(u=Array.from(t),h()):u.slice()},c.rangeRound=function(t){return u=Array.from(t),l=mt,h()},c.clamp=function(t){return arguments.length?(s=!!t||bt,h()):s!==bt},c.interpolate=function(t){return arguments.length?(l=t,h()):l},c.unknown=function(t){return arguments.length?(e=t,c):e},function(e,r){return t=e,n=r,h()}}function Nt(){return kt()(bt,bt)}function $t(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]}function At(t){return(t=$t(Math.abs(t)))?t[1]:NaN}var St,Et=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function jt(t){if(!(n=Et.exec(t)))throw new Error("invalid format: "+t);var n;return new qt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function qt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function Ct(t,n){var e=$t(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}jt.prototype=qt.prototype,qt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Rt={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>Ct(100*t,n),r:Ct,s:function(t,n){var e=$t(t,n);if(!e)return t+"";var r=e[0],i=e[1],a=i-(St=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=r.length;return a===o?r:a>o?r+new Array(a-o+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+$t(t,Math.max(0,n+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Ht(t){return t}var zt,_t,Ot,Pt=Array.prototype.map,Lt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ft(t){var n,e,r=void 0===t.grouping||void 0===t.thousands?Ht:(n=Pt.call(t.grouping,Number),e=t.thousands+"",function(t,r){for(var i=t.length,a=[],o=0,u=n[0],l=0;i>0&&u>0&&(l+u+1>r&&(u=Math.max(1,r-l)),a.push(t.substring(i-=u,i+u)),!((l+=u+1)>r));)u=n[o=(o+1)%n.length];return a.reverse().join(e)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Ht:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Pt.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",h=void 0===t.nan?"NaN":t.nan+"";function c(t){var n=(t=jt(t)).fill,e=t.align,c=t.sign,f=t.symbol,g=t.zero,d=t.width,m=t.comma,p=t.precision,v=t.trim,b=t.type;"n"===b?(m=!0,b="g"):Rt[b]||(void 0===p&&(p=12),v=!0,b="g"),(g||"0"===n&&"="===e)&&(g=!0,n="0",e="=");var y="$"===f?i:"#"===f&&/[boxX]/.test(b)?"0"+b.toLowerCase():"",w="$"===f?a:/[%p]/.test(b)?l:"",M=Rt[b],x=/[defgprs%]/.test(b);function k(t){var i,a,l,f=y,k=w;if("c"===b)k=M(t)+k,t="";else{var N=(t=+t)<0||1/t<0;if(t=isNaN(t)?h:M(Math.abs(t),p),v&&(t=function(t){t:for(var n,e=t.length,r=1,i=-1;r<e;++r)switch(t[r]){case".":i=n=r;break;case"0":0===i&&(i=r),n=r;break;default:if(!+t[r])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),N&&0==+t&&"+"!==c&&(N=!1),f=(N?"("===c?c:s:"-"===c||"("===c?"":c)+f,k=("s"===b?Lt[8+St/3]:"")+k+(N&&"("===c?")":""),x)for(i=-1,a=t.length;++i<a;)if(48>(l=t.charCodeAt(i))||l>57){k=(46===l?o+t.slice(i+1):t.slice(i))+k,t=t.slice(0,i);break}}m&&!g&&(t=r(t,1/0));var $=f.length+t.length+k.length,A=$<d?new Array(d-$+1).join(n):"";switch(m&&g&&(t=r(A+t,A.length?d-k.length:1/0),A=""),e){case"<":t=f+t+k+A;break;case"=":t=f+A+t+k;break;case"^":t=A.slice(0,$=A.length>>1)+f+t+k+A.slice($);break;default:t=A+f+t+k}return u(t)}return p=void 0===p?6:/[gprs]/.test(b)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),k.toString=function(){return t+""},k}return{format:c,formatPrefix:function(t,n){var e=c(((t=jt(t)).type="f",t)),r=3*Math.max(-8,Math.min(8,Math.floor(At(n)/3))),i=Math.pow(10,-r),a=Lt[8+r/3];return function(t){return e(i*t)+a}}}}function It(t,n,e,r){var i,a=function(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=v?i*=10:a>=b?i*=5:a>=y&&(i*=2),n<t?-i:i}(t,n,e);switch((r=jt(null==r?",f":r)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(n));return null!=r.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(At(n)/3)))-At(Math.abs(t)))}(a,o))||(r.precision=i),Ot(r,o);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,At(n)-At(t))+1}(a,Math.max(Math.abs(t),Math.abs(n))))||(r.precision=i-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(i=function(t){return Math.max(0,-At(Math.abs(t)))}(a))||(r.precision=i-2*("%"===r.type))}return _t(r)}function Vt(t){var n=t.domain;return t.ticks=function(t){var e=n();return function(t,n,e){var r,i,a,o,u=-1;if(e=+e,(t=+t)==(n=+n)&&e>0)return[t];if((r=n<t)&&(i=t,t=n,n=i),0===(o=w(t,n,e))||!isFinite(o))return[];if(o>0){let e=Math.round(t/o),r=Math.round(n/o);for(e*o<t&&++e,r*o>n&&--r,a=new Array(i=r-e+1);++u<i;)a[u]=(e+u)*o}else{o=-o;let e=Math.round(t*o),r=Math.round(n*o);for(e/o<t&&++e,r/o>n&&--r,a=new Array(i=r-e+1);++u<i;)a[u]=(e+u)/o}return r&&a.reverse(),a}(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return It(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var r,i,a=n(),o=0,u=a.length-1,l=a[o],s=a[u],h=10;for(s<l&&(i=l,l=s,s=i,i=o,o=u,u=i);h-- >0;){if((i=w(l,s,e))===r)return a[o]=l,a[u]=s,n(a);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}r=i}return t},t}function Bt(){var t=Nt();return t.copy=function(){return xt(t,Bt())},M.apply(t,arguments),Vt(t)}zt=Ft({thousands:",",grouping:[3],currency:["$",""]}),_t=zt.format,Ot=zt.formatPrefix;const Dt=l("h1",null,null,-1),Tt=["viewBox"],Xt=["transform"],Gt=["width","height","fill"],Ut=["width","height","fill","x"],Yt=["transform"],Zt=["fill","x","y"],Jt=["fill","x","y"],Kt=["fill","x","y"];var Qt={__name:"SimpleStackView",props:{width:Number,height:Number,background:String,data:Array,margin:Object,color:String,baseColor:String},setup(c){const f=c,g=t({top:10,right:10,bottom:50,left:50}),d=t(400),m=t(400),p=t("black"),v=t("white"),b=t("#ECECEC"),y=t("#C6C6C6"),w=t(5),M=n((()=>f.width||m.value)),x=n((()=>f.height||d.value)),k=n((()=>f.background||v.value)),N=n((()=>f.margin||g.value)),$=n((()=>f.color||p.value)),A=n((()=>f.baseColor||b.value)),S=n((()=>({width:M.value-N.value.left-N.value.right,height:x.value-N.value.top-N.value.bottom}))),E=n((()=>Bt().domain([0,100]).range([0,S.value.width]))),j=(t,n)=>{if(!n)return 0;let e=0;for(let r=0;r<n;r++)e+=E.value(t[r].value);return e};return(t,n)=>(e(),r("div",{class:i("gf_simplestack_container")},[Dt,(e(),r("svg",{ref:"svg",xmlns:"http://www.w3.org/2000/svg",style:a({background:o(k)}),version:"1.2",baseProfile:"tiny",width:"100%",height:"100%",viewBox:`0 0 ${o(M)} ${o(x)}`,"stroke-linecap":"round","stroke-linejoin":"round",class:i("gf_simplestack_svg")},[u(" bars "),l("g",{transform:`translate(${o(N).left}, ${o(N).top})`},[l("rect",{width:o(S).width,height:o(S).height,fill:o(A)},null,8,Gt),(e(!0),r(s,null,h(c.data,((t,n)=>(e(),r("rect",{width:o(E)(t.value),height:o(S).height,fill:t.color||o($),x:j(c.data,n),key:`bar-${n}`},null,8,Ut)))),128))],8,Xt),u(" xScaleAxis "),l("g",{transform:`translate(0, ${o(x)-o(N).bottom})`},[l("text",{fill:y.value,x:o(N).left,y:w.value,"alignment-baseline":"hanging","text-anchor":"start"},"0%",8,Zt),l("text",{fill:y.value,x:o(N).left+o(S).width/2,y:w.value,"alignment-baseline":"hanging","text-anchor":"middle"},"50%",8,Jt),l("text",{fill:y.value,x:o(N).left+o(S).width,y:w.value,"alignment-baseline":"hanging","text-anchor":"end"},"100%",8,Kt)],8,Yt)],14,Tt))],2))},__file:"src/SimpleStackView.vue"},Wt={install:(t,n)=>{t.component("gf-simple-stack",Qt)}};export{Wt as default};
