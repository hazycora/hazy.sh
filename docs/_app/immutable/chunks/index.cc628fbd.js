function w(){}function L(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(T)}function D(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(I(e,n))}function ft(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?L(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=e.dirty[l]|r[l];return s}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,s){if(r){const o=O(e,n,i,s);t.p(o,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let E=!1;function J(){E=!0}function K(){E=!1}function R(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function W(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:R(1,r,x=>e[n[x]].claim_order,u))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const s=[],o=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(s.push(e[c-1]);l>=c;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(o[c],f)}}function Q(t,e){if(E){for(W(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function pt(t,e,n){E&&!n?Q(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function gt(){return S(" ")}function xt(){return S("")}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){Y(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const c=n(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Z(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function $t(t,e,n){return Z(t,e,n,V)}function tt(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function wt(t){return tt(t," ")}function Et(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function vt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function At(t,e){return new t(e)}let y;function p(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function St(t){H().$$.on_mount.push(t)}function kt(t){H().$$.after_update.push(t)}const h=[],M=[];let m=[];const q=[],P=Promise.resolve();let v=!1;function z(){v||(v=!0,P.then(F))}function jt(){return z(),P}function A(t){m.push(t)}const N=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];N.has(n)||(N.add(n),n())}m.length=0}while(h.length);for(;q.length;)q.pop()();v=!1,N.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Ct(){d={r:0,c:[],p:d}}function Mt(){d.r||g(d.c),d=d.p}function it(t,e){t&&t.i&&($.delete(t),t.i(e))}function qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Tt(t,e){const n={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=e[s];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[s]=l}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Dt(t){return typeof t=="object"&&t!==null?t:{}}const rt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...rt];function Ot(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||A(()=>{const o=t.$$.on_mount.map(T).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):g(o),t.$$.on_mount=[]}),s.forEach(A)}function ot(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,i,r,s,o,l=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:C(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,x,...k)=>{const j=k.length?k[0]:x;return u.ctx&&r(u.ctx[a],u.ctx[a]=j)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](j),f&&lt(t,a)),x}):[],u.update(),f=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){J();const a=X(e.target);u.fragment&&u.fragment.l(a),a.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),K(),F()}p(c)}class Pt{$destroy(){ot(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,ot as B,ft as C,_t as D,ht as E,dt as F,Q as G,w as H,at as I,vt as J,st as K,yt as L,L as M,Tt as N,Dt as O,mt as P,Pt as S,gt as a,pt as b,wt as c,qt as d,xt as e,Mt as f,it as g,U as h,Ht as i,kt as j,V as k,$t as l,X as m,bt as n,St as o,Nt as p,S as q,tt as r,ut as s,jt as t,Et as u,Ct as v,M as w,At as x,Ot as y,Bt as z};
