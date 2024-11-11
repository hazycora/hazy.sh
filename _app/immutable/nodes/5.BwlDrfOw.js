import{s as _t,b as Ae,e as ct,n as Tt}from"../chunks/scheduler.CZZf4ebe.js";import{S as Ct,i as Ht,k as It,l as Lt,m as Mt,t as Pt,j as Yt,n as Dt,e as l,s as n,H as vt,c as a,o as r,a as o,p as wt,q as yt,d as i,b as V,g as s}from"../chunks/index.D9yZW6-G.js";import{g as Nt,a as bt}from"../chunks/spread.CgU5AtxT.js";import{L as At}from"../chunks/layout.Erwwwl52.js";function St(Z){let u,c="Anyone who archives media to YouTube knows the struggle that is working around YouTube’s Content ID system. It’s the system which detects copyrighted material in order to allow media companies to earn advertising revenue from videos which use their content, but it also allows these companies to outright block videos from many parts of the world. Of course, YouTube couldn’t exist without Content ID, but that doesn’t make it any less frustrating.",h,d,p='<a class="header-link" href="#what-if-there-was-a-better-way"><span class="icon icon-link"></span></a>What if there was a better way?',m,f,Se="YouTube’s Content ID is pretty sophisticated. People have tried many, many things to get around it. Various visual effects, like hue-shifting, vignette filters, adding massive coloured borders surrounding the video, and many more have already been tried numerous times. These tricks work <em>sometimes</em>, but YouTube’s Content ID has only gotten better and better at working around these tricks. Any solution needs to make the copyrighted content completely invisible to Content ID, but this very often also means obscuring it for actual human viewers.",J,g,je='But I’ve had an idea in the back of my mind since I saw a video that appeared in my recommendations a couple months ago. It’s a <a href="https://en.wikipedia.org/wiki/Bad_Apple!!#Use_as_a_graphical_and_audio_test" rel="nofollow">Bad Apple video</a> which can only be viewed in HD. How this works is that 60fps YouTube videos don’t actually play at 60fps unless you view them at 720p or higher, so you can replace every other frame with an entirely black frame and the video will be invisible if you’re not watching with an HD quality setting.',Q,x,Ee='<iframe src="https://www.youtube.com/embed/lwi7ofgZ8ME" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" style="width: 100%; aspect-ratio: 16 / 9; border-radius: 0.75rem"></iframe>',ee,k,qe="What if Content ID doesn’t scan the HD 60fps versions of videos? Would it then be completely oblivious to half of the frames of the video?",te,_,ze="<strong>This isn’t a good idea</strong>. It would make it impossible to watch on low resolutions, harder to compress, makes the video uncomfortable to watch and could even cause watching the video to <em><strong>induce seizures</strong></em> in people with photosensitive epilepsy. This is not a good solution to the problem.",ie,T,Fe="<em>But would it work though?</em>",se,v,Ue='<a class="header-link" href="#ffmpeg-is-a-challenge"><span class="icon icon-link"></span></a><code>ffmpeg</code> is a challenge',le,C,Ge="I didn’t want to extract all the frames and then swap every other one with a black image, I thought that would probably take too long. Instead I looked into <code>ffmpeg</code>’s <code>geq</code> video filter. It allows you to make an expression which is ran per-pixel based on a few variables. <code>ffmpeg</code> also has <code>if</code> and <code>mod</code> functions, so this seemed like it would be a fairly easy task.",ae,H,ne,xt='<code class="language-sh">ffmpeg <span class="token parameter variable">-i</span> input.mp4 <span class="token parameter variable">-y</span> <span class="token parameter variable">-vf</span> <span class="token string">"fps=60,geq=if(mod(N,2),p(X,Y))"</span> <span class="token parameter variable">-preset</span> ultrafast output.mp4</code>',oe,I,Oe='<img src="/assets/bypassing-content-id/green-frame.png" alt="an ffplay window showing a dark green frame"/>',re,L,$e='Okay, so this doesn’t work how I thought it would. I assumed the color value <code>0</code> would be black, but it’s instead some dark muddy green colour? I think this is because <code>ffmpeg</code> is using the <a href="https://en.wikipedia.org/wiki/YUV" rel="nofollow">YUV color model</a>. I’m not exactly sure how I should get it to use the color black for these frames using a YUV color value, but luckily the <code>geq</code> filter allows me to set expressions for the r, g, and b values of each pixel instead:',ue,M,pe,kt='<code class="language-sh">ffmpeg <span class="token parameter variable">-i</span> input.mp4 <span class="token parameter variable">-y</span> <span class="token parameter variable">-vf</span> <span class="token string">"fps=60,geq=r=if(mod(N,2),p(X,Y)):g=if(mod(N,2),p(X,Y)):b=if(mod(N,2),p(X,Y))"</span> <span class="token parameter variable">-preset</span> ultrafast output.mp4</code>',de,P,Be="To be clear, this command sucks. It’s evaluating the expression on every single pixel in every single frame. I’m positive there are wayyyy better ways to do this, but it was taking me a while to figure this out to begin with so I’m willing to just go with this command for now. If anyone’s figured out a better way to do this in <code>ffmpeg</code>, please do message me!",me,Y,Re="I’m getting 0.5x speeds out of this at best on my PC. To be fair, this PC’s specs are abysmal, so that wasn’t doing it any favours.",he,w,We='<a class="header-link" href="#does-this-actually-work"><span class="icon icon-link"></span></a>does this actually work',fe,D,Xe='I sent the script off to my friend <a href="https://tacohitbox.com" rel="nofollow">Aria</a>, who spends An Excessive Amount Of Time archiving media to various places including YouTube.',ce,N,Ke='<img src="/assets/bypassing-content-id/it-works.png" alt="tacohitbox: NO FUCKING SHOT, DUDE THE CONSTANT FLICKERING ONE WORKED; hazy: HAHAHAA, send the fucking link; tacohitbox: THIS IS SO FUCKING FUNNY"/>',ve,A,Ve="Really?? This is so stupid. This is completely useless. No way this actually works. I’m running the command on a video real quick to try it out for myself.",we,S,Ze='<img src="/assets/bypassing-content-id/no-family-guy-funnies.png" alt="Screenshot of YouTube Studio, showing an audio claim for Family Guy - Life of Brian, blocking the video in all territories"/>',ye,j,Je="Nooooo. I forgot about this. Some shows also do Content ID for the audio of episodes. Even if the video itself is completely undetectable, the video may still get claimed if it contains audio from something. So I’m going to have to do some more alterations to this video to make it get through Content ID.",be,E,Qe="I think, for this demo, I’ll just put some music over the video. Music gets Content ID too, but music labels tend to not block videos which contain music, instead just taking ad revenue. I’m completely willing to give some music label all the ad revenue for this video so long as it’s visible.",ge,q,et='<img src="/assets/bypassing-content-id/kdenlive-drained.png" alt="Screenshot of the Kdenlive video editor with an audio track filled with Bladee songs"/>',xe,z,tt="I’m so sorry, but The Family Guy Funny Moments will have to become drained.",ke,y,it='<a class="header-link" href="#family-guy-funny-moments-drained-edition-warning-flashing-lights"><span class="icon icon-link"></span></a>family guy funny moments (drained edition) (WARNING: FLASHING LIGHTS)',_e,F,st='<iframe src="https://www.youtube.com/embed/XrvbAuk42LE?start=450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" style="width: 100%; aspect-ratio: 16 / 9; border-radius: 0.75rem"></iframe>',Te,U,lt="this has got to be the worst thing i’ve ever made",Ce,G,at='Drain gang music added to prevent audio claims. <a href="https://open.spotify.com/playlist/6vi42OTDujqUXTfyd0DYNZ" rel="nofollow">Here’s the playlist, lol</a>. Hard-coded subtitles added to make this at least a little bit watchable. All the music I added has gotten detected by Content ID <em>with zero restrictions</em>, and the Family Guy episode itself hasn’t gotten claimed at all. This video can be watched globally. If I was in the YouTube Partner Program I could even earn advertising revenue from this video.',He,O,nt="And, in case anyone asks, yes, even with the drain gang music this video gets claimed if I don’t use the strobe effect:",Ie,$,ot='<img src="/assets/bypassing-content-id/blocked-drainer-nostrobe-upload.png" alt="Screenshot showing &#39;family guy drainer nostrobe&#39; blocked in YouTube Studio"/>',Le,B,rt="With the strobe effect, the Family Guy Funny Moments are undetected by Content ID.",Me,R,ut='<img src="/assets/bypassing-content-id/no-block.png" alt="Screenshot showing the strobe effect video hasn&#39;t gotten blocked in YouTube Studio"/>',Pe,b,pt='<a class="header-link" href="#what-have-we-learned"><span class="icon icon-link"></span></a>what have we learned',Ye,W,dt="You can get around YouTube Content ID! As long as you’re willing to ignore these caveats:",De,X,mt="<li>it’s uncomfortable to watch</li> <li>causes massive video file size</li> <li>requires exporting at 720p or higher at 60fps</li> <li>audio can still get claimed so you’ll have to distort that, cover it up with something else, or mute it entirely</li> <li><em><strong>could cause seizures</strong></em></li>",Ne,K,ht="Please, please don’t start actually using this to evade Content ID. This isn’t a practical solution. Even if this idea were to inspire a more practical Content-ID-evading solution, always remember YouTube will simply patch it if it ever becomes widespread.";return{c(){u=l("p"),u.textContent=c,h=n(),d=l("h2"),d.innerHTML=p,m=n(),f=l("p"),f.innerHTML=Se,J=n(),g=l("p"),g.innerHTML=je,Q=n(),x=l("p"),x.innerHTML=Ee,ee=n(),k=l("p"),k.textContent=qe,te=n(),_=l("p"),_.innerHTML=ze,ie=n(),T=l("p"),T.innerHTML=Fe,se=n(),v=l("h2"),v.innerHTML=Ue,le=n(),C=l("p"),C.innerHTML=Ge,ae=n(),H=l("pre"),ne=new vt(!1),oe=n(),I=l("p"),I.innerHTML=Oe,re=n(),L=l("p"),L.innerHTML=$e,ue=n(),M=l("pre"),pe=new vt(!1),de=n(),P=l("p"),P.innerHTML=Be,me=n(),Y=l("p"),Y.textContent=Re,he=n(),w=l("h2"),w.innerHTML=We,fe=n(),D=l("p"),D.innerHTML=Xe,ce=n(),N=l("p"),N.innerHTML=Ke,ve=n(),A=l("p"),A.textContent=Ve,we=n(),S=l("p"),S.innerHTML=Ze,ye=n(),j=l("p"),j.textContent=Je,be=n(),E=l("p"),E.textContent=Qe,ge=n(),q=l("p"),q.innerHTML=et,xe=n(),z=l("p"),z.textContent=tt,ke=n(),y=l("h2"),y.innerHTML=it,_e=n(),F=l("p"),F.innerHTML=st,Te=n(),U=l("p"),U.textContent=lt,Ce=n(),G=l("p"),G.innerHTML=at,He=n(),O=l("p"),O.textContent=nt,Ie=n(),$=l("p"),$.innerHTML=ot,Le=n(),B=l("p"),B.textContent=rt,Me=n(),R=l("p"),R.innerHTML=ut,Pe=n(),b=l("h2"),b.innerHTML=pt,Ye=n(),W=l("p"),W.textContent=dt,De=n(),X=l("ul"),X.innerHTML=mt,Ne=n(),K=l("p"),K.textContent=ht,this.h()},l(e){u=a(e,"P",{"data-svelte-h":!0}),r(u)!=="svelte-13sfy4e"&&(u.textContent=c),h=o(e),d=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(d)!=="svelte-lop0zb"&&(d.innerHTML=p),m=o(e),f=a(e,"P",{"data-svelte-h":!0}),r(f)!=="svelte-1bwct4g"&&(f.innerHTML=Se),J=o(e),g=a(e,"P",{"data-svelte-h":!0}),r(g)!=="svelte-u2jlmj"&&(g.innerHTML=je),Q=o(e),x=a(e,"P",{"data-svelte-h":!0}),r(x)!=="svelte-1sk0xxj"&&(x.innerHTML=Ee),ee=o(e),k=a(e,"P",{"data-svelte-h":!0}),r(k)!=="svelte-1bxixsp"&&(k.textContent=qe),te=o(e),_=a(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-o8yd5d"&&(_.innerHTML=ze),ie=o(e),T=a(e,"P",{"data-svelte-h":!0}),r(T)!=="svelte-15l5lhd"&&(T.innerHTML=Fe),se=o(e),v=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-19kshdg"&&(v.innerHTML=Ue),le=o(e),C=a(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-rz7w9q"&&(C.innerHTML=Ge),ae=o(e),H=a(e,"PRE",{class:!0});var t=wt(H);ne=yt(t,!1),t.forEach(i),oe=o(e),I=a(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-1jrxlif"&&(I.innerHTML=Oe),re=o(e),L=a(e,"P",{"data-svelte-h":!0}),r(L)!=="svelte-x7ht7h"&&(L.innerHTML=$e),ue=o(e),M=a(e,"PRE",{class:!0});var ft=wt(M);pe=yt(ft,!1),ft.forEach(i),de=o(e),P=a(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-icujx"&&(P.innerHTML=Be),me=o(e),Y=a(e,"P",{"data-svelte-h":!0}),r(Y)!=="svelte-ezkcvp"&&(Y.textContent=Re),he=o(e),w=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-1r7i22r"&&(w.innerHTML=We),fe=o(e),D=a(e,"P",{"data-svelte-h":!0}),r(D)!=="svelte-1m96412"&&(D.innerHTML=Xe),ce=o(e),N=a(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-uvrpj"&&(N.innerHTML=Ke),ve=o(e),A=a(e,"P",{"data-svelte-h":!0}),r(A)!=="svelte-9sbtlp"&&(A.textContent=Ve),we=o(e),S=a(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-13z1hvt"&&(S.innerHTML=Ze),ye=o(e),j=a(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1asvhbm"&&(j.textContent=Je),be=o(e),E=a(e,"P",{"data-svelte-h":!0}),r(E)!=="svelte-1t15dgz"&&(E.textContent=Qe),ge=o(e),q=a(e,"P",{"data-svelte-h":!0}),r(q)!=="svelte-dgqu8k"&&(q.innerHTML=et),xe=o(e),z=a(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-pfr061"&&(z.textContent=tt),ke=o(e),y=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-113efmc"&&(y.innerHTML=it),_e=o(e),F=a(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-5u66s2"&&(F.innerHTML=st),Te=o(e),U=a(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-10acf5m"&&(U.textContent=lt),Ce=o(e),G=a(e,"P",{"data-svelte-h":!0}),r(G)!=="svelte-g87tsf"&&(G.innerHTML=at),He=o(e),O=a(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-j83mtb"&&(O.textContent=nt),Ie=o(e),$=a(e,"P",{"data-svelte-h":!0}),r($)!=="svelte-1k235z1"&&($.innerHTML=ot),Le=o(e),B=a(e,"P",{"data-svelte-h":!0}),r(B)!=="svelte-1pdj3g2"&&(B.textContent=rt),Me=o(e),R=a(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-1ro3rul"&&(R.innerHTML=ut),Pe=o(e),b=a(e,"H2",{id:!0,"data-svelte-h":!0}),r(b)!=="svelte-1xxox1x"&&(b.innerHTML=pt),Ye=o(e),W=a(e,"P",{"data-svelte-h":!0}),r(W)!=="svelte-vuf7da"&&(W.textContent=dt),De=o(e),X=a(e,"UL",{"data-svelte-h":!0}),r(X)!=="svelte-bdqxxc"&&(X.innerHTML=mt),Ne=o(e),K=a(e,"P",{"data-svelte-h":!0}),r(K)!=="svelte-1kb82zx"&&(K.textContent=ht),this.h()},h(){V(d,"id","what-if-there-was-a-better-way"),V(v,"id","ffmpeg-is-a-challenge"),ne.a=null,V(H,"class","language-sh"),pe.a=null,V(M,"class","language-sh"),V(w,"id","does-this-actually-work"),V(y,"id","family-guy-funny-moments-drained-edition-warning-flashing-lights"),V(b,"id","what-have-we-learned")},m(e,t){s(e,u,t),s(e,h,t),s(e,d,t),s(e,m,t),s(e,f,t),s(e,J,t),s(e,g,t),s(e,Q,t),s(e,x,t),s(e,ee,t),s(e,k,t),s(e,te,t),s(e,_,t),s(e,ie,t),s(e,T,t),s(e,se,t),s(e,v,t),s(e,le,t),s(e,C,t),s(e,ae,t),s(e,H,t),ne.m(xt,H),s(e,oe,t),s(e,I,t),s(e,re,t),s(e,L,t),s(e,ue,t),s(e,M,t),pe.m(kt,M),s(e,de,t),s(e,P,t),s(e,me,t),s(e,Y,t),s(e,he,t),s(e,w,t),s(e,fe,t),s(e,D,t),s(e,ce,t),s(e,N,t),s(e,ve,t),s(e,A,t),s(e,we,t),s(e,S,t),s(e,ye,t),s(e,j,t),s(e,be,t),s(e,E,t),s(e,ge,t),s(e,q,t),s(e,xe,t),s(e,z,t),s(e,ke,t),s(e,y,t),s(e,_e,t),s(e,F,t),s(e,Te,t),s(e,U,t),s(e,Ce,t),s(e,G,t),s(e,He,t),s(e,O,t),s(e,Ie,t),s(e,$,t),s(e,Le,t),s(e,B,t),s(e,Me,t),s(e,R,t),s(e,Pe,t),s(e,b,t),s(e,Ye,t),s(e,W,t),s(e,De,t),s(e,X,t),s(e,Ne,t),s(e,K,t)},p:Tt,d(e){e&&(i(u),i(h),i(d),i(m),i(f),i(J),i(g),i(Q),i(x),i(ee),i(k),i(te),i(_),i(ie),i(T),i(se),i(v),i(le),i(C),i(ae),i(H),i(oe),i(I),i(re),i(L),i(ue),i(M),i(de),i(P),i(me),i(Y),i(he),i(w),i(fe),i(D),i(ce),i(N),i(ve),i(A),i(we),i(S),i(ye),i(j),i(be),i(E),i(ge),i(q),i(xe),i(z),i(ke),i(y),i(_e),i(F),i(Te),i(U),i(Ce),i(G),i(He),i(O),i(Ie),i($),i(Le),i(B),i(Me),i(R),i(Pe),i(b),i(Ye),i(W),i(De),i(X),i(Ne),i(K))}}}function jt(Z){let u,c;const h=[Z[0],gt];let d={$$slots:{default:[St]},$$scope:{ctx:Z}};for(let p=0;p<h.length;p+=1)d=Ae(d,h[p]);return u=new At({props:d}),{c(){It(u.$$.fragment)},l(p){Lt(u.$$.fragment,p)},m(p,m){Mt(u,p,m),c=!0},p(p,[m]){const f=m&1?Nt(h,[m&1&&bt(p[0]),m&0&&bt(gt)]):{};m&2&&(f.$$scope={dirty:m,ctx:p}),u.$set(f)},i(p){c||(Pt(u.$$.fragment,p),c=!0)},o(p){Yt(u.$$.fragment,p),c=!1},d(p){Dt(u,p)}}}const gt={title:"Bypassing YouTube Content-ID with flashing frames",description:"Uploading copyrighted content to YouTube at the cost of epileptic seizures",date:"2023-05-03T00:00:00.000Z",contentwarning:"Flashing lights"};function Et(Z,u,c){return Z.$$set=h=>{c(0,u=Ae(Ae({},u),ct(h)))},u=ct(u),[u]}class Gt extends Ct{constructor(u){super(),Ht(this,u,Et,jt,_t,{})}}export{Gt as component};
