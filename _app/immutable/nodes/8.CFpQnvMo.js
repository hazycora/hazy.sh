import{s as ot,b as D,e as st,n as lt}from"../chunks/scheduler.CZZf4ebe.js";import{S as pt,i as rt,k as ct,l as ut,m as dt,t as mt,j as ht,n as ft,e as o,s as p,H as kt,c as l,o as r,a as c,p as wt,q as gt,d as s,b as O,g as n}from"../chunks/index.D9yZW6-G.js";import{g as vt,a as nt}from"../chunks/spread.CgU5AtxT.js";import{L as xt}from"../chunks/layout.Erwwwl52.js";function _t(M){let a,f="(I’m not the first to find this problem. It’s been known since 2019, I link to other articles and blog posts that came before me at the end.)",m,d,i="When you link to something at the end of a Tweet, the link isn’t displayed. Instead, you’ll only see a “summary card” Twitter generates when a post is made. The domain name of the URL is displayed in these cards, so at face value they don’t make phishing easier.",u,h,F='<img src="/assets/twitter-summary-card-phishing/card-example-domain-highlighted.png" alt="A Tweet displaying a summary card linking to discord.com"/>',P,k,G='<a class="header-link" href="#their-implementation-is-not-perfect"><span class="icon icon-link"></span></a>their implementation is Not Perfect',q,v,J=`If a link redirects to another page, Twitter follows that redirect and displays the domain name of the destination instead of the original URL. This is fine, it means the cards will reflect the same page users will see.
But the user isn’t sent directly to the destination- When someone clicks one of these cards, they go to the original URL. For typical redirect links, that’s okay, because the redirect Twitter experiences will we the same as the user’s redirect. But what if a malicious site serves a different redirect to users than to Twitter?`,I,x,K="When Twitter fetches the page content in order to generate these cards, they set the HTTP “User-Agent” header to begin with “Twitterbot/”, so it can be detected on our website that the request was for Twitter. Setting custom User-Agents for things like this is normal, it means sites can customise the text of embeds for specific sites if necessary or block Twitter from making these requests if desired, but for malicious sites it also allows us to exploit this issue reliably.",$,_,N="Here’s an example of an ExpressJS route that detects Twitter and redirects to discord.com, while redirecting to example.com for everyone else:",U,T,j,it=`<code class="language-js">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
	<span class="token keyword">const</span> detectedTwitter <span class="token operator">=</span> req<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">'user-agent'</span><span class="token punctuation">]</span>
		<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">'Twitterbot/'</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>detectedTwitter<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
		<span class="token comment">// redirect to the page to be displayed on Twitter</span>
		res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'https://discord.com'</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">&#125;</span>

	<span class="token comment">// handle request for other users</span>
	<span class="token comment">// malicious sites could serve a phishing site right here</span>
	res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">'https://example.com'</span><span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span></code>`,z,b,Q='<img src="/assets/twitter-summary-card-phishing/demo.gif" alt="An animated GIF showing a Tweet that looks to contain a link to Discord, but sends users to example.com instead"/>',A,w,V='<a class="header-link" href="#this-issue-is-old"><span class="icon icon-link"></span></a>this issue is old',B,y,Z='Twitter has had this issue for years, and I’m by no means the first to notice it. It’s <a href="https://shkspr.mobi/blog/2019/03/scammers-abusing-twitter-cards-via-redirects/" rel="nofollow">been known since 2019</a> at the latest. My friend <a href="https://twitter.com/1lexxi" rel="nofollow">Lexi</a> found the same issue a couple years ago, and she told me it reported this to Twitter through HackerOne, but the exploit still hasn’t been fixed.',R,g,X='<div class="received"><p>twitters bbp is a joke, fixing things is not their strong suit</p></div> <div class="sent"><p>Lmao</p></div>',S,C,Y='BleepingComputer <a href="https://www.bleepingcomputer.com/news/security/twitter-can-be-tricked-into-showing-misleading-embedded-links/" rel="nofollow">wrote on this in 2019</a> and contacted Twitter about it, to no response.',E,L,tt="<p>BleepingComputer reached out to Twitter for a statement about this problem and if it would be fixed in the near future but received no reply at the time of publishing.</p>",W,H,et="Hopefully Twitter realises the severity of this problem. Be careful when clicking links- the suggestion to check URLs before clicking is a good one, but it’s not infallible!";return{c(){a=o("p"),a.textContent=f,m=p(),d=o("p"),d.textContent=i,u=p(),h=o("p"),h.innerHTML=F,P=p(),k=o("h2"),k.innerHTML=G,q=p(),v=o("p"),v.textContent=J,I=p(),x=o("p"),x.textContent=K,$=p(),_=o("p"),_.textContent=N,U=p(),T=o("pre"),j=new kt(!1),z=p(),b=o("p"),b.innerHTML=Q,A=p(),w=o("h2"),w.innerHTML=V,B=p(),y=o("p"),y.innerHTML=Z,R=p(),g=o("div"),g.innerHTML=X,S=p(),C=o("p"),C.innerHTML=Y,E=p(),L=o("blockquote"),L.innerHTML=tt,W=p(),H=o("p"),H.textContent=et,this.h()},l(t){a=l(t,"P",{"data-svelte-h":!0}),r(a)!=="svelte-zdq9st"&&(a.textContent=f),m=c(t),d=l(t,"P",{"data-svelte-h":!0}),r(d)!=="svelte-2qegzu"&&(d.textContent=i),u=c(t),h=l(t,"P",{"data-svelte-h":!0}),r(h)!=="svelte-1783v3k"&&(h.innerHTML=F),P=c(t),k=l(t,"H2",{id:!0,"data-svelte-h":!0}),r(k)!=="svelte-w0e5m6"&&(k.innerHTML=G),q=c(t),v=l(t,"P",{"data-svelte-h":!0}),r(v)!=="svelte-1pyo0mm"&&(v.textContent=J),I=c(t),x=l(t,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1496uh8"&&(x.textContent=K),$=c(t),_=l(t,"P",{"data-svelte-h":!0}),r(_)!=="svelte-1c2n499"&&(_.textContent=N),U=c(t),T=l(t,"PRE",{class:!0});var e=wt(T);j=gt(e,!1),e.forEach(s),z=c(t),b=l(t,"P",{"data-svelte-h":!0}),r(b)!=="svelte-1haxr7a"&&(b.innerHTML=Q),A=c(t),w=l(t,"H2",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-ui5nra"&&(w.innerHTML=V),B=c(t),y=l(t,"P",{"data-svelte-h":!0}),r(y)!=="svelte-19en4zp"&&(y.innerHTML=Z),R=c(t),g=l(t,"DIV",{class:!0,"data-svelte-h":!0}),r(g)!=="svelte-aocjyx"&&(g.innerHTML=X),S=c(t),C=l(t,"P",{"data-svelte-h":!0}),r(C)!=="svelte-1kwaplr"&&(C.innerHTML=Y),E=c(t),L=l(t,"BLOCKQUOTE",{"data-svelte-h":!0}),r(L)!=="svelte-1hce6mz"&&(L.innerHTML=tt),W=c(t),H=l(t,"P",{"data-svelte-h":!0}),r(H)!=="svelte-wuzlzd"&&(H.textContent=et),this.h()},h(){O(k,"id","their-implementation-is-not-perfect"),j.a=null,O(T,"class","language-js"),O(w,"id","this-issue-is-old"),O(g,"class","dm")},m(t,e){n(t,a,e),n(t,m,e),n(t,d,e),n(t,u,e),n(t,h,e),n(t,P,e),n(t,k,e),n(t,q,e),n(t,v,e),n(t,I,e),n(t,x,e),n(t,$,e),n(t,_,e),n(t,U,e),n(t,T,e),j.m(it,T),n(t,z,e),n(t,b,e),n(t,A,e),n(t,w,e),n(t,B,e),n(t,y,e),n(t,R,e),n(t,g,e),n(t,S,e),n(t,C,e),n(t,E,e),n(t,L,e),n(t,W,e),n(t,H,e)},p:lt,d(t){t&&(s(a),s(m),s(d),s(u),s(h),s(P),s(k),s(q),s(v),s(I),s(x),s($),s(_),s(U),s(T),s(z),s(b),s(A),s(w),s(B),s(y),s(R),s(g),s(S),s(C),s(E),s(L),s(W),s(H))}}}function Tt(M){let a,f;const m=[M[0],at];let d={$$slots:{default:[_t]},$$scope:{ctx:M}};for(let i=0;i<m.length;i+=1)d=D(d,m[i]);return a=new xt({props:d}),{c(){ct(a.$$.fragment)},l(i){ut(a.$$.fragment,i)},m(i,u){dt(a,i,u),f=!0},p(i,[u]){const h=u&1?vt(m,[u&1&&nt(i[0]),u&0&&nt(at)]):{};u&2&&(h.$$scope={dirty:u,ctx:i}),a.$set(h)},i(i){f||(mt(a.$$.fragment,i),f=!0)},o(i){ht(a.$$.fragment,i),f=!1},d(i){ft(a,i)}}}const at={image:"/assets/twitter-summary-card-phishing/card-example.png",imageAlt:"A Tweet displaying a summary card linking to discord.com",title:"Twitter's cards have a bug that makes phishing easy",description:"Sites linked to on Twitter can pretend to be any other URL",date:"2023-06-03T00:00:00.000Z"};function bt(M,a,f){return M.$$set=m=>{f(0,a=D(D({},a),st(m)))},a=st(a),[a]}class Mt extends pt{constructor(a){super(),rt(this,a,bt,Tt,ot,{})}}export{Mt as component};