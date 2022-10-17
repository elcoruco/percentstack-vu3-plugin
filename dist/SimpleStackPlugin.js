import{ref as t,computed as n,openBlock as r,createElementBlock as e,normalizeClass as i,normalizeStyle as a,unref as o,createCommentVNode as u,createElementVNode as l,Fragment as s,renderList as h}from"vue";function c(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function f(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function g(t){let n,r,e;function i(t,e,i=0,a=t.length){if(i<a){if(0!==n(e,e))return a;do{const n=i+a>>>1;r(t[n],e)<0?i=n+1:a=n}while(i<a)}return i}return 2!==t.length?(n=c,r=(n,r)=>c(t(n),r),e=(n,r)=>t(n)-r):(n=t===c||t===f?t:d,r=t,e=t),{left:i,center:function(t,n,r=0,a=t.length){const o=i(t,n,r,a-1);return o>r&&e(t[o-1],n)>-e(t[o],n)?o-1:o},right:function(t,e,i=0,a=t.length){if(i<a){if(0!==n(e,e))return a;do{const n=i+a>>>1;r(t[n],e)<=0?i=n+1:a=n}while(i<a)}return i}}}function d(){return 0}const m=g(c).right;g((function(t){return null===t?NaN:+t})).center;var p=m,b=Math.sqrt(50),y=Math.sqrt(10),v=Math.sqrt(2);function w(t,n,r){var e=(n-t)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),a=e/Math.pow(10,i);return i>=0?(a>=b?10:a>=y?5:a>=v?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=b?10:a>=y?5:a>=v?2:1)}function M(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}function x(t,n,r){t.prototype=n.prototype=r,r.constructor=t}function k(t,n){var r=Object.create(t.prototype);for(var e in n)r[e]=n[e];return r}function N(){}var $=1/.7,A="\\s*([+-]?\\d+)\\s*",S="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",C="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",E=/^#([0-9a-f]{3,8})$/,j=new RegExp(`^rgb\\(${A},${A},${A}\\)$`),q=new RegExp(`^rgb\\(${C},${C},${C}\\)$`),R=new RegExp(`^rgba\\(${A},${A},${A},${S}\\)$`),H=new RegExp(`^rgba\\(${C},${C},${C},${S}\\)$`),z=new RegExp(`^hsl\\(${S},${C},${C}\\)$`),_=new RegExp(`^hsla\\(${S},${C},${C},${S}\\)$`),O={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function P(){return this.rgb().formatHex()}function L(){return this.rgb().formatRgb()}function F(t){var n,r;return t=(t+"").trim().toLowerCase(),(n=E.exec(t))?(r=n[1].length,n=parseInt(n[1],16),6===r?I(n):3===r?new T(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===r?V(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===r?V(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=j.exec(t))?new T(n[1],n[2],n[3],1):(n=q.exec(t))?new T(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=R.exec(t))?V(n[1],n[2],n[3],n[4]):(n=H.exec(t))?V(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=z.exec(t))?J(n[1],n[2]/100,n[3]/100,1):(n=_.exec(t))?J(n[1],n[2]/100,n[3]/100,n[4]):O.hasOwnProperty(t)?I(O[t]):"transparent"===t?new T(NaN,NaN,NaN,0):null}function I(t){return new T(t>>16&255,t>>8&255,255&t,1)}function V(t,n,r,e){return e<=0&&(t=n=r=NaN),new T(t,n,r,e)}function B(t){return t instanceof N||(t=F(t)),t?new T((t=t.rgb()).r,t.g,t.b,t.opacity):new T}function D(t,n,r,e){return 1===arguments.length?B(t):new T(t,n,r,null==e?1:e)}function T(t,n,r,e){this.r=+t,this.g=+n,this.b=+r,this.opacity=+e}function X(){return`#${Z(this.r)}${Z(this.g)}${Z(this.b)}`}function G(){const t=U(this.opacity);return`${1===t?"rgb(":"rgba("}${Y(this.r)}, ${Y(this.g)}, ${Y(this.b)}${1===t?")":`, ${t})`}`}function U(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function Y(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Z(t){return((t=Y(t))<16?"0":"")+t.toString(16)}function J(t,n,r,e){return e<=0?t=n=r=NaN:r<=0||r>=1?t=n=NaN:n<=0&&(t=NaN),new Q(t,n,r,e)}function K(t){if(t instanceof Q)return new Q(t.h,t.s,t.l,t.opacity);if(t instanceof N||(t=F(t)),!t)return new Q;if(t instanceof Q)return t;var n=(t=t.rgb()).r/255,r=t.g/255,e=t.b/255,i=Math.min(n,r,e),a=Math.max(n,r,e),o=NaN,u=a-i,l=(a+i)/2;return u?(o=n===a?(r-e)/u+6*(r<e):r===a?(e-n)/u+2:(n-r)/u+4,u/=l<.5?a+i:2-a-i,o*=60):u=l>0&&l<1?0:o,new Q(o,u,l,t.opacity)}function Q(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}function W(t){return(t=(t||0)%360)<0?t+360:t}function tt(t){return Math.max(0,Math.min(1,t||0))}function nt(t,n,r){return 255*(t<60?n+(r-n)*t/60:t<180?r:t<240?n+(r-n)*(240-t)/60:n)}x(N,F,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:P,formatHex:P,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return K(this).formatHsl()},formatRgb:L,toString:L}),x(T,D,k(N,{brighter(t){return t=null==t?$:Math.pow($,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new T(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new T(Y(this.r),Y(this.g),Y(this.b),U(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:X,formatHex:X,formatHex8:function(){return`#${Z(this.r)}${Z(this.g)}${Z(this.b)}${Z(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:G,toString:G})),x(Q,(function(t,n,r,e){return 1===arguments.length?K(t):new Q(t,n,r,null==e?1:e)}),k(N,{brighter(t){return t=null==t?$:Math.pow($,t),new Q(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new Q(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,e=r+(r<.5?r:1-r)*n,i=2*r-e;return new T(nt(t>=240?t-240:t+120,i,e),nt(t,i,e),nt(t<120?t+240:t-120,i,e),this.opacity)},clamp(){return new Q(W(this.h),tt(this.s),tt(this.l),U(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=U(this.opacity);return`${1===t?"hsl(":"hsla("}${W(this.h)}, ${100*tt(this.s)}%, ${100*tt(this.l)}%${1===t?")":`, ${t})`}`}}));var rt=t=>()=>t;function et(t){return 1==(t=+t)?it:function(n,r){return r-n?function(t,n,r){return t=Math.pow(t,r),n=Math.pow(n,r)-t,r=1/r,function(e){return Math.pow(t+e*n,r)}}(n,r,t):rt(isNaN(n)?r:n)}}function it(t,n){var r=n-t;return r?function(t,n){return function(r){return t+r*n}}(t,r):rt(isNaN(t)?n:t)}var at=function t(n){var r=et(n);function e(t,n){var e=r((t=D(t)).r,(n=D(n)).r),i=r(t.g,n.g),a=r(t.b,n.b),o=it(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=a(n),t.opacity=o(n),t+""}}return e.gamma=t,e}(1);function ot(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(r=0;r<e;++r)i[r]=t[r]*(1-a)+n[r]*a;return i}}function ut(t,n){var r,e=n?n.length:0,i=t?Math.min(e,t.length):0,a=new Array(i),o=new Array(e);for(r=0;r<i;++r)a[r]=dt(t[r],n[r]);for(;r<e;++r)o[r]=n[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function lt(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function st(t,n){return t=+t,n=+n,function(r){return t*(1-r)+n*r}}function ht(t,n){var r,e={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=dt(t[r],n[r]):i[r]=n[r];return function(t){for(r in e)i[r]=e[r](t);return i}}var ct=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ft=new RegExp(ct.source,"g");function gt(t,n){var r,e,i,a=ct.lastIndex=ft.lastIndex=0,o=-1,u=[],l=[];for(t+="",n+="";(r=ct.exec(t))&&(e=ft.exec(n));)(i=e.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(r=r[0])===(e=e[0])?u[o]?u[o]+=e:u[++o]=e:(u[++o]=null,l.push({i:o,x:st(r,e)})),a=ft.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?l[0]?function(t){return function(n){return t(n)+""}}(l[0].x):function(t){return function(){return t}}(n):(n=l.length,function(t){for(var r,e=0;e<n;++e)u[(r=l[e]).i]=r.x(t);return u.join("")})}function dt(t,n){var r,e,i=typeof n;return null==n||"boolean"===i?rt(n):("number"===i?st:"string"===i?(r=F(n))?(n=r,at):gt:n instanceof F?at:n instanceof Date?lt:(e=n,!ArrayBuffer.isView(e)||e instanceof DataView?Array.isArray(n)?ut:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?ht:st:ot))(t,n)}function mt(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}function pt(t){return+t}var bt=[0,1];function yt(t){return t}function vt(t,n){return(n-=t=+t)?function(r){return(r-t)/n}:(r=isNaN(n)?NaN:.5,function(){return r});var r}function wt(t,n,r){var e=t[0],i=t[1],a=n[0],o=n[1];return i<e?(e=vt(i,e),a=r(o,a)):(e=vt(e,i),a=r(a,o)),function(t){return a(e(t))}}function Mt(t,n,r){var e=Math.min(t.length,n.length)-1,i=new Array(e),a=new Array(e),o=-1;for(t[e]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<e;)i[o]=vt(t[o],t[o+1]),a[o]=r(n[o],n[o+1]);return function(n){var r=p(t,n,1,e)-1;return a[r](i[r](n))}}function xt(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function kt(){var t,n,r,e,i,a,o=bt,u=bt,l=dt,s=yt;function h(){var t,n,r,l=Math.min(o.length,u.length);return s!==yt&&(t=o[0],n=o[l-1],t>n&&(r=t,t=n,n=r),s=function(r){return Math.max(t,Math.min(n,r))}),e=l>2?Mt:wt,i=a=null,c}function c(n){return null==n||isNaN(n=+n)?r:(i||(i=e(o.map(t),u,l)))(t(s(n)))}return c.invert=function(r){return s(n((a||(a=e(u,o.map(t),st)))(r)))},c.domain=function(t){return arguments.length?(o=Array.from(t,pt),h()):o.slice()},c.range=function(t){return arguments.length?(u=Array.from(t),h()):u.slice()},c.rangeRound=function(t){return u=Array.from(t),l=mt,h()},c.clamp=function(t){return arguments.length?(s=!!t||yt,h()):s!==yt},c.interpolate=function(t){return arguments.length?(l=t,h()):l},c.unknown=function(t){return arguments.length?(r=t,c):r},function(r,e){return t=r,n=e,h()}}function Nt(){return kt()(yt,yt)}function $t(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}function At(t){return(t=$t(Math.abs(t)))?t[1]:NaN}var St,Ct=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function Et(t){if(!(n=Ct.exec(t)))throw new Error("invalid format: "+t);var n;return new jt({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function jt(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function qt(t,n){var r=$t(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}Et.prototype=jt.prototype,jt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var Rt={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>qt(100*t,n),r:qt,s:function(t,n){var r=$t(t,n);if(!r)return t+"";var e=r[0],i=r[1],a=i-(St=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=e.length;return a===o?e:a>o?e+new Array(a-o+1).join("0"):a>0?e.slice(0,a)+"."+e.slice(a):"0."+new Array(1-a).join("0")+$t(t,Math.max(0,n+a-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function Ht(t){return t}var zt,_t,Ot,Pt=Array.prototype.map,Lt=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ft(t){var n,r,e=void 0===t.grouping||void 0===t.thousands?Ht:(n=Pt.call(t.grouping,Number),r=t.thousands+"",function(t,e){for(var i=t.length,a=[],o=0,u=n[0],l=0;i>0&&u>0&&(l+u+1>e&&(u=Math.max(1,e-l)),a.push(t.substring(i-=u,i+u)),!((l+=u+1)>e));)u=n[o=(o+1)%n.length];return a.reverse().join(r)}),i=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",u=void 0===t.numerals?Ht:function(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}(Pt.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",s=void 0===t.minus?"−":t.minus+"",h=void 0===t.nan?"NaN":t.nan+"";function c(t){var n=(t=Et(t)).fill,r=t.align,c=t.sign,f=t.symbol,g=t.zero,d=t.width,m=t.comma,p=t.precision,b=t.trim,y=t.type;"n"===y?(m=!0,y="g"):Rt[y]||(void 0===p&&(p=12),b=!0,y="g"),(g||"0"===n&&"="===r)&&(g=!0,n="0",r="=");var v="$"===f?i:"#"===f&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",w="$"===f?a:/[%p]/.test(y)?l:"",M=Rt[y],x=/[defgprs%]/.test(y);function k(t){var i,a,l,f=v,k=w;if("c"===y)k=M(t)+k,t="";else{var N=(t=+t)<0||1/t<0;if(t=isNaN(t)?h:M(Math.abs(t),p),b&&(t=function(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}(t)),N&&0==+t&&"+"!==c&&(N=!1),f=(N?"("===c?c:s:"-"===c||"("===c?"":c)+f,k=("s"===y?Lt[8+St/3]:"")+k+(N&&"("===c?")":""),x)for(i=-1,a=t.length;++i<a;)if(48>(l=t.charCodeAt(i))||l>57){k=(46===l?o+t.slice(i+1):t.slice(i))+k,t=t.slice(0,i);break}}m&&!g&&(t=e(t,1/0));var $=f.length+t.length+k.length,A=$<d?new Array(d-$+1).join(n):"";switch(m&&g&&(t=e(A+t,A.length?d-k.length:1/0),A=""),r){case"<":t=f+t+k+A;break;case"=":t=f+A+t+k;break;case"^":t=A.slice(0,$=A.length>>1)+f+t+k+A.slice($);break;default:t=A+f+t+k}return u(t)}return p=void 0===p?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),k.toString=function(){return t+""},k}return{format:c,formatPrefix:function(t,n){var r=c(((t=Et(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(At(n)/3))),i=Math.pow(10,-e),a=Lt[8+e/3];return function(t){return r(i*t)+a}}}}function It(t,n,r,e){var i,a=function(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),a=e/i;return a>=b?i*=10:a>=y?i*=5:a>=v&&(i*=2),n<t?-i:i}(t,n,r);switch((e=Et(null==e?",f":e)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(n));return null!=e.precision||isNaN(i=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(At(n)/3)))-At(Math.abs(t)))}(a,o))||(e.precision=i),Ot(e,o);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,At(n)-At(t))+1}(a,Math.max(Math.abs(t),Math.abs(n))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=function(t){return Math.max(0,-At(Math.abs(t)))}(a))||(e.precision=i-2*("%"===e.type))}return _t(e)}function Vt(t){var n=t.domain;return t.ticks=function(t){var r=n();return function(t,n,r){var e,i,a,o,u=-1;if(r=+r,(t=+t)==(n=+n)&&r>0)return[t];if((e=n<t)&&(i=t,t=n,n=i),0===(o=w(t,n,r))||!isFinite(o))return[];if(o>0){let r=Math.round(t/o),e=Math.round(n/o);for(r*o<t&&++r,e*o>n&&--e,a=new Array(i=e-r+1);++u<i;)a[u]=(r+u)*o}else{o=-o;let r=Math.round(t*o),e=Math.round(n*o);for(r/o<t&&++r,e/o>n&&--e,a=new Array(i=e-r+1);++u<i;)a[u]=(r+u)/o}return e&&a.reverse(),a}(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var e=n();return It(e[0],e[e.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var e,i,a=n(),o=0,u=a.length-1,l=a[o],s=a[u],h=10;for(s<l&&(i=l,l=s,s=i,i=o,o=u,u=i);h-- >0;){if((i=w(l,s,r))===e)return a[o]=l,a[u]=s,n(a);if(i>0)l=Math.floor(l/i)*i,s=Math.ceil(s/i)*i;else{if(!(i<0))break;l=Math.ceil(l*i)/i,s=Math.floor(s*i)/i}e=i}return t},t}function Bt(){var t=Nt();return t.copy=function(){return xt(t,Bt())},M.apply(t,arguments),Vt(t)}zt=Ft({thousands:",",grouping:[3],currency:["$",""]}),_t=zt.format,Ot=zt.formatPrefix;const Dt=l("h1",null,null,-1),Tt=["viewBox"],Xt=["transform"],Gt=["width","height","fill"],Ut=["width","height","fill"],Yt=["transform"],Zt=["x"],Jt=["x"],Kt=["x"];var Qt={__name:"SimpleStackView",props:{width:Number,height:Number,background:String,data:Array,margin:Object,color:String,baseColor:String},setup(c){const f=c,g=t({top:10,right:10,bottom:50,left:50}),d=t(400),m=t(400),p=t("black"),b=t("white"),y=t("#ECECEC"),v=n((()=>f.width||m.value)),w=n((()=>f.height||d.value)),M=n((()=>f.background||b.value)),x=n((()=>f.margin||g.value)),k=n((()=>f.color||p.value)),N=n((()=>f.baseColor||y.value)),$=n((()=>({width:v.value-x.value.left-x.value.right,height:w.value-x.value.top-x.value.bottom}))),A=n((()=>Bt().domain([0,100]).range([0,$.value.width])));return(t,n)=>(r(),e("div",{class:i("gf_simplestack_container")},[Dt,(r(),e("svg",{ref:"svg",xmlns:"http://www.w3.org/2000/svg",style:a({background:o(M)}),version:"1.2",baseProfile:"tiny",width:"100%",height:"100%",viewBox:`0 0 ${o(v)} ${o(w)}`,"stroke-linecap":"round","stroke-linejoin":"round",class:i("gf_simplestack_svg")},[u(" bars "),l("g",{transform:`translate(${o(x).left}, ${o(x).top})`},[l("rect",{width:o($).width,height:o($).height,fill:o(N)},null,8,Gt),(r(!0),e(s,null,h(c.data,((t,n)=>(r(),e("rect",{width:o(A)(t.value),height:o($).height,fill:t.color||o(k),key:`bar-${n}`},null,8,Ut)))),128))],8,Xt),u(" xScaleAxis "),l("g",{transform:`translate(0, ${o(w)-o(x).bottom})`},[l("text",{fill:"#C6C6C6",x:o(x).left,y:"0","alignment-baseline":"hanging","text-anchor":"start"},"0%",8,Zt),l("text",{fill:"#C6C6C6",x:o(x).left+o($).width/2,y:"0","alignment-baseline":"hanging","text-anchor":"middle"},"50%",8,Jt),l("text",{fill:"#C6C6C6",x:o(x).left+o($).width,y:"0","alignment-baseline":"hanging","text-anchor":"end"},"100%",8,Kt)],8,Yt)],14,Tt))],2))},__file:"src/SimpleStackView.vue"},Wt={install:(t,n)=>{t.component("gf-simple-stack",Qt)}};export{Wt as default};
