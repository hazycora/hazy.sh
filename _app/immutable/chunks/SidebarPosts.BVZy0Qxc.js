import{a as p,t as c}from"./disclose-version.B6nF_LLs.js";import{t as f,s as m,w as d,v as o,n as j,J as A,j as u,q as L,a9 as U,l as b}from"./runtime.HBcl4L12.js";import{r as k,a as _}from"./store.CpKYbwEx.js";import{s as g,h as S,a as B,d as D,D as T,e as z,i as E}from"./dayjs.DornWgkT.js";import{r as F,a as I,i as w,p as J}from"./props.CYQU2EHg.js";var M=c('<picture><source type="image/avif"><source type="image/webp"><source type="image/png"><img></picture>');function Z(h,a){const n=F(a,["$$slots","$$events","$$legacy"]);var s=M(),v=m(s);g(v,"srcset",""+new URL("../assets/avatar.F1r-t2Sd.avif",import.meta.url).href+" 408w, "+new URL("../assets/avatar.zJ3j8vYd.avif",import.meta.url).href+" 815w");var i=d(v);g(i,"srcset",""+new URL("../assets/avatar.D7koVEQQ.webp",import.meta.url).href+" 408w, "+new URL("../assets/avatar.5xIsckpP.webp",import.meta.url).href+" 815w");var r=d(i);g(r,"srcset",""+new URL("../assets/avatar.BBBRtvMT.png",import.meta.url).href+" 408w, "+new URL("../assets/avatar.0v0lablx.png",import.meta.url).href+" 815w");var t=d(r);let e;o(s),f(()=>e=B(t,e,{class:"avatar",src:""+new URL("../assets/avatar.0v0lablx.png",import.meta.url).href,alt:"A pink cat wearing a purple witch hat",...n,width:"815",height:"815"})),S(t),k(t),p(h,s)}var P=c('<img class="svelte-hj0u5e">'),Q=c('<span class="date svelte-hj0u5e"> </span>'),q=c('<a class="svelte-hj0u5e"><!> <span class="title svelte-hj0u5e"> </span> <!></a>');function N(h,a){j(a,!0);let n=U(void 0);a.post.date&&A(n,I(D(a.post.date)));var s=q(),v=m(s);w(v,()=>a.post.frontmatter.image,e=>{var l=P();f(()=>{g(l,"src",a.post.frontmatter.image),g(l,"alt",a.post.frontmatter.imageAlt)}),p(e,l)});var i=d(v,2),r=m(i,!0);o(i);var t=d(i,2);w(t,()=>u(n),e=>{var l=Q();const x=b(()=>u(n).format(T)??""),R=b(()=>u(n).fromNow()??"");var y=m(l);f(()=>_(y,`${u(x)} · ${u(R)}`)),o(l),p(e,l)}),o(s),f(()=>{g(s,"href",a.post.path),_(r,a.post.frontmatter.title)}),p(h,s),L()}var O=c('<a href="/blog" class="heading svelte-2n2pll"> </a>'),V=c('<span class="heading svelte-2n2pll"> </span>'),Y=c("<li><!></li>"),C=c('<div class="sidebar-posts svelte-2n2pll"><!> <ul class="svelte-2n2pll"></ul></div>');function $(h,a){const n=J(a,"link",3,!1);var s=C(),v=m(s);w(v,n,r=>{var t=O(),e=m(t,!0);o(t),f(()=>_(e,a.heading)),p(r,t)},r=>{var t=V(),e=m(t,!0);o(t),f(()=>_(e,a.heading)),p(r,t)});var i=d(v,2);z(i,21,()=>a.posts,E,(r,t)=>{var e=Y(),l=m(e);N(l,{get post(){return u(t)}}),o(e),p(r,e)}),o(i),o(s),p(h,s)}export{Z as A,$ as S};
