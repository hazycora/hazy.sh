import{aa as c,b as y,ab as E,h as i,ac as w,x as m,T as p,z as h,d as r,A as _,ad as b,ae as A,L as T,a as N}from"./runtime.HBcl4L12.js";let n;function L(){n=void 0}function M(a){let t=null,e=i;var u;if(i){for(t=r,n===void 0&&(n=_(document.head));n!==null&&(n.nodeType!==8||n.data!==w);)n=m(n);n===null?p(!1):n=h(m(n))}i||(u=document.head.appendChild(c()));try{y(()=>a(u),E)}finally{e&&(p(!0),n=r,h(t))}}function g(a){var t=document.createElement("template");return t.innerHTML=a,t.content}function d(a,t){var e=T;e.nodes_start===null&&(e.nodes_start=a,e.nodes_end=t)}function R(a,t){var e=(t&b)!==0,u=(t&A)!==0,s,f=!a.startsWith("<!>");return()=>{if(i)return d(r,null),r;s===void 0&&(s=g(f?a:"<!>"+a),e||(s=_(s)));var o=u?document.importNode(s,!0):s.cloneNode(!0);if(e){var v=_(o),l=o.lastChild;d(v,l)}else d(o,o);return o}}function D(a,t,e="svg"){var u=!a.startsWith("<!>"),s=`<${e}>${u?a:"<!>"+a}</${e}>`,f;return()=>{if(i)return d(r,null),r;if(!f){var o=g(s),v=_(o);f=_(v)}var l=f.cloneNode(!0);return d(l,l),l}}function F(a=""){if(!i){var t=c(a+"");return d(t,t),t}var e=r;return e.nodeType!==3&&(e.before(e=c()),h(e)),d(e,e),e}function I(){if(i)return d(r,null),r;var a=document.createDocumentFragment(),t=document.createComment(""),e=c();return a.append(t,e),d(t,e),a}function O(a,t){if(i){T.nodes_end=r,N();return}a!==null&&a.before(t)}const x="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x);export{O as a,d as b,g as c,I as d,F as e,M as h,D as n,L as r,R as t};