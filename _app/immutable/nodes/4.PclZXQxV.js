import{b as H,c as G,a as I,t as x}from"../chunks/disclose-version.B6nF_LLs.js";import{b as N,h as M,a as O,c as Y,d as S,x as J,y as K,H as L,z as Q,A as U,B as V,n as W,o as X,t as w,q as Z,j as $,w as i,s as t,v as e,C as aa,l as ta}from"../chunks/runtime.HBcl4L12.js";import{a as c}from"../chunks/store.DodgAPSd.js";import{i as ea}from"../chunks/props.C-KT0S3Q.js";import{M as sa,d as ia,D as ra}from"../chunks/dayjs.BnFETWjC.js";import{P as va}from"../chunks/Postscript.C1bHBqvU.js";import{A as la,S as da}from"../chunks/SidebarPosts.COj5BrLP.js";function oa(f,a,h,_,A){var n=f,r="",v;N(()=>{if(r===(r=a()??"")){M&&O();return}v!==void 0&&(V(v),v=void 0),r!==""&&(v=Y(()=>{if(M){S.data;for(var s=O(),l=s;s!==null&&(s.nodeType!==8||s.data!=="");)l=s,s=J(s);if(s===null)throw K(),L;H(S,l),n=Q(s);return}var g=r+"",d=G(g);H(U(d),d.lastChild),n.before(d)}))})}var na=x('<p class="description svelte-1az1eit"> </p>'),ca=x(`<!> <article class="svelte-1az1eit"><div class="frontmatter svelte-1az1eit"><nav class="svelte-1az1eit"><a href="/" class="svelte-1az1eit">hazel cora</a> · <a href="/blog" class="svelte-1az1eit">blog</a></nav> <h1 class="title svelte-1az1eit"> </h1> <p class="description svelte-1az1eit"> </p> <span class="date svelte-1az1eit"> </span></div> <div class="things svelte-1az1eit"><div class="body svelte-1az1eit"><div class="md svelte-1az1eit"><!></div> <hr class="svelte-1az1eit"> <!></div> <aside class="svelte-1az1eit"><div class="this-article svelte-1az1eit"><nav class="svelte-1az1eit"><a href="/" class="svelte-1az1eit">hazel cora</a> · <a href="/blog" class="svelte-1az1eit">blog</a></nav> <p class="title svelte-1az1eit"> </p> <!></div> <div class="other-things svelte-1az1eit"><div class="me svelte-1az1eit"><!> <p class="bio svelte-1az1eit">Hey, I'm Hazel&lt;3 I'm a dev and sysadmin making things with Go,
						TypeScript, and Svelte. Most people know me for hosting <a href="https://git.gay" class="svelte-1az1eit">git.gay</a>.</p></div> <!></div></aside></div></article>`,1);function ua(f,a){W(a,!0);var h=ca(),_=X(h),A=ta(()=>{var m,o;return{title:a.data.post.frontmatter.title??"untitled",description:a.data.post.frontmatter.description,image:(m=a.data.post.frontmatter)==null?void 0:m.image,largeImage:(o=a.data.post.frontmatter)!=null&&o.image?!0:void 0}});sa(_,{get value(){return $(A)}});var n=i(_,2),r=t(n),v=i(t(r),2),s=t(v,!0);e(v);var l=i(v,2),g=t(l,!0);e(l);var d=i(l,2),D=t(d,!0);w(()=>c(D,ia(a.data.post.date).format(ra))),e(d),e(r);var T=i(r,2),p=t(T),z=t(p),P=t(z);oa(P,()=>a.data.html),e(z);var j=i(z,4);va(j),e(p);var k=i(p,2),u=t(k),b=i(t(u),2),C=t(b,!0);e(b);var E=i(b,2);ea(E,()=>a.data.post.frontmatter.description,m=>{var o=na(),F=t(o,!0);e(o),w(()=>c(F,a.data.post.frontmatter.description)),I(m,o)}),e(u);var R=i(u,2),y=t(R),q=t(y);la(q,{}),aa(2),e(y);var B=i(y,2);da(B,{heading:"Other posts",get posts(){return a.data.aside}}),e(R),e(k),e(T),e(n),w(()=>{c(s,a.data.post.frontmatter.title),c(g,a.data.post.frontmatter.description),c(C,a.data.post.frontmatter.title)}),I(f,h),Z()}export{ua as component};
