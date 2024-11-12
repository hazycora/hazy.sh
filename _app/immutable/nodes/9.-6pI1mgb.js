import{s as Q,b as A,e as Z,n as X}from"../chunks/scheduler.CZZf4ebe.js";import{S as Y,i as ee,k as te,l as le,m as ie,t as se,j as ae,n as ne,e as o,s as h,c as r,o as u,a as d,r as oe,b as re,g as l,d as i}from"../chunks/index.D9yZW6-G.js";import{g as he,a as F}from"../chunks/spread.CgU5AtxT.js";import{L as ue}from"../chunks/layout.Erwwwl52.js";function de(L){let s,p=`<strong>Update:</strong> The developer, lamedev, <a href="https://lethallava.land/notes/a0hatpsc0g" rel="nofollow">knows of this</a>! I expect it’ll be fixed in the next update. Also, my guess for the source of the list <a href="https://lethallava.land/notes/a0hayv2l1n" rel="nofollow">was correct</a>.
This post will remain as a curiosity :)`,f,m,a,n,M=`My friend <a href="https://astroorbis.com" rel="nofollow">Astra</a> was looking around a decompiled version of Webfishing—giving her access to some of
the source code and assets of the game—when she found the profanity list used by the recently-added chat filter. I’ve uploaded
this file as <a href="https://gist.github.com/hazycora/f7fde1be74022d196945577a1817d153" rel="nofollow">a GitHub Gist</a>.`,C,v,B=`The list is <em>almost</em> entirely what you’d expect. Just a bunch of swears and slurs, exactly what I would want to be blocked if I
had a chat filter option turned on. But there are some strange outliers!`,I,c,D=`<p><strong>Before I continue:</strong> The profanity list is very clearly sourced from some online list. I don’t think the developer of Webfishing
made this list themselves or thoroughly checked it. These quirks are certainly a mistake. Do not interpret any of this as malice or bias.</p>`,k,y,G=`Here are just a handful of words which are censored, and probably shouldn’t be. This is almost certainly not everything, this is a pretty big
list to sift through!`,P,b,E="<li>arab</li> <li>canadian</li> <li>ethiopian</li> <li>german</li> <li>mexican</li> <li>palestinian</li> <li>israeli</li> <li>jewish</li> <li>latin</li> <li>queer</li> <li>gay</li> <li>lesbian</li> <li>bi (along with “bi-sexual”, but curiously not “bisexual”?)</li> <li>my personal favorite, “women’s”</li>",$,_,R='<img src="/assets/webfishings-silly-filter/womens-rights.png" alt="Trying to say &#39;I am an advocate for women&#39;s rights&#39; results in the word &#39;women&#39;s&#39; being censored."/>',q,g,U="Another interesting quirk is that some words in the list end with a space. This causes them to be completely ignored when filtering words.",j,x,J='<img src="/assets/webfishings-silly-filter/bastard.png" alt="The word bastard shown in the chat."/>',S,w,N='<a class="header-link" href="#howd-that-happen"><span class="icon icon-link"></span></a>How’d that happen?',z,T,O=`So, as I said in the disclaimer, I believe this list was certainly just copy-pasted from somewhere online. But where? I don’t
actually know where <em>exactly</em> they found it, but I’ve got a pretty big lead. Searching Google for profanity lists, I stumbled upon
<a href="https://www.cs.cmu.edu/~biglou/resources/bad-words.txt" rel="nofollow"><code>bad-words.txt</code></a>, which includes many of these same words. It also includes many more words, though, so Webfishing’s developer either tried to
manually sort through the list and didn’t catch enough things, or they found a different version of this list.`,W,H,V='The feature was added in the very last update, <a href="https://store.steampowered.com/news/app/3146520/view/4467101633890746444" rel="nofollow">Patch 1.09</a>, and I don’t doubt it’ll get fixed soon enough :)';return{c(){s=o("p"),s.innerHTML=p,f=h(),m=o("hr"),a=h(),n=o("p"),n.innerHTML=M,C=h(),v=o("p"),v.innerHTML=B,I=h(),c=o("div"),c.innerHTML=D,k=h(),y=o("p"),y.textContent=G,P=h(),b=o("ul"),b.innerHTML=E,$=h(),_=o("p"),_.innerHTML=R,q=h(),g=o("p"),g.textContent=U,j=h(),x=o("p"),x.innerHTML=J,S=h(),w=o("h2"),w.innerHTML=N,z=h(),T=o("p"),T.innerHTML=O,W=h(),H=o("p"),H.innerHTML=V,this.h()},l(e){s=r(e,"P",{"data-svelte-h":!0}),u(s)!=="svelte-1ndy666"&&(s.innerHTML=p),f=d(e),m=r(e,"HR",{}),a=d(e),n=r(e,"P",{"data-svelte-h":!0}),u(n)!=="svelte-qylxbx"&&(n.innerHTML=M),C=d(e),v=r(e,"P",{"data-svelte-h":!0}),u(v)!=="svelte-18x58up"&&(v.innerHTML=B),I=d(e),c=r(e,"DIV",{style:!0,"data-svelte-h":!0}),u(c)!=="svelte-ifx3tg"&&(c.innerHTML=D),k=d(e),y=r(e,"P",{"data-svelte-h":!0}),u(y)!=="svelte-1l4bll"&&(y.textContent=G),P=d(e),b=r(e,"UL",{"data-svelte-h":!0}),u(b)!=="svelte-u8q6kk"&&(b.innerHTML=E),$=d(e),_=r(e,"P",{"data-svelte-h":!0}),u(_)!=="svelte-1w625mw"&&(_.innerHTML=R),q=d(e),g=r(e,"P",{"data-svelte-h":!0}),u(g)!=="svelte-bot6pq"&&(g.textContent=U),j=d(e),x=r(e,"P",{"data-svelte-h":!0}),u(x)!=="svelte-1ut76pl"&&(x.innerHTML=J),S=d(e),w=r(e,"H2",{id:!0,"data-svelte-h":!0}),u(w)!=="svelte-1v3esx3"&&(w.innerHTML=N),z=d(e),T=r(e,"P",{"data-svelte-h":!0}),u(T)!=="svelte-p5z4ef"&&(T.innerHTML=O),W=d(e),H=r(e,"P",{"data-svelte-h":!0}),u(H)!=="svelte-17yj0c3"&&(H.innerHTML=V),this.h()},h(){oe(c,"font-size","1.25rem"),re(w,"id","howd-that-happen")},m(e,t){l(e,s,t),l(e,f,t),l(e,m,t),l(e,a,t),l(e,n,t),l(e,C,t),l(e,v,t),l(e,I,t),l(e,c,t),l(e,k,t),l(e,y,t),l(e,P,t),l(e,b,t),l(e,$,t),l(e,_,t),l(e,q,t),l(e,g,t),l(e,j,t),l(e,x,t),l(e,S,t),l(e,w,t),l(e,z,t),l(e,T,t),l(e,W,t),l(e,H,t)},p:X,d(e){e&&(i(s),i(f),i(m),i(a),i(n),i(C),i(v),i(I),i(c),i(k),i(y),i(P),i(b),i($),i(_),i(q),i(g),i(j),i(x),i(S),i(w),i(z),i(T),i(W),i(H))}}}function fe(L){let s,p;const f=[L[0],K];let m={$$slots:{default:[de]},$$scope:{ctx:L}};for(let a=0;a<f.length;a+=1)m=A(m,f[a]);return s=new ue({props:m}),{c(){te(s.$$.fragment)},l(a){le(s.$$.fragment,a)},m(a,n){ie(s,a,n),p=!0},p(a,[n]){const M=n&1?he(f,[n&1&&F(a[0]),n&0&&F(K)]):{};n&2&&(M.$$scope={dirty:n,ctx:a}),s.$set(M)},i(a){p||(se(s.$$.fragment,a),p=!0)},o(a){ae(s.$$.fragment,a),p=!1},d(a){ne(s,a)}}}const K={title:"Webfishing's bizarre profanity filter",description:"Canadians are being CENSORED by the adorable furry fishing game",date:"2024-11-11T00:00:00.000Z"};function pe(L,s,p){return L.$$set=f=>{p(0,s=A(A({},s),Z(f)))},s=Z(s),[s]}class ye extends Y{constructor(s){super(),ee(this,s,pe,fe,Q,{})}}export{ye as component};