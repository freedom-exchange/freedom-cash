import{n as d,s as y}from"./scheduler.e108d1fd.js";const u=[];function p(e,t=d){let n;const o=new Set;function r(s){if(y(e,s)&&(e=s,n)){const c=!u.length;for(const i of o)i[1](),u.push(i,e);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(s){r(s(e))}function a(s,c=d){const i=[s,c];return o.add(i),o.size===1&&(n=t(r,l)||d),s(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:a}}var g;const E=((g=globalThis.__sveltekit_7yvti4)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_7yvti4)==null?void 0:k.assets)??E,A="1704247267845",I="sveltekit:snapshot",x="sveltekit:scroll",O="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1},v=location.origin;function U(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function L(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function m(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function N(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=m(e)}}function P(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),l=(n==null?void 0:n.origin)===v&&e.hasAttribute("download");return{url:n,external:r,target:o,download:l}}function V(e){let t=null,n=null,o=null,r=null,l=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),l===null&&(l=f(s,"reload")),a===null&&(a=f(s,"replacestate")),s=m(s);function c(i){switch(i){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:c(t),noscroll:c(n),reload:c(l),replace_state:c(a)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function r(a){n=!1,t.set(a)}function l(a){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&a(s=c)})}return{notify:o,set:r,subscribe:l}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const a=(await r.json()).version!==A;return a&&(e(!0),clearTimeout(n)),a}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==v||!e.pathname.startsWith(t)}function Y(e){e.client}const q={url:h({}),page:h({}),navigating:p(null),updated:R()};export{O as I,_ as P,x as S,I as a,P as b,V as c,q as d,E as e,N as f,U as g,Y as h,S as i,v as o,L as s};
