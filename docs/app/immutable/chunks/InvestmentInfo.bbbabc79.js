import{s as mt,f as k,l as A,a as H,H as ee,g as C,z as L,m as P,h as B,d as f,c as M,E as le,j as v,i as _,v as h,D as _t,C as N,I as ne,e as x,o as Lt,n as ct,J as At,F as Mt}from"./scheduler.7c577333.js";import{S as vt,i as pt,g as xt,t as K,c as Ut,a as R,b as ut,d as ft,m as dt,e as ht}from"./index.8ddd727e.js";import{b as nt,f as Y}from"./constants.388d1811.js";import{r as Jt,f as re,p as se,a as Rt,b as $t,c as ae}from"./helpers.689558b6.js";function oe(i){let t,e="<br/>",l,r,n,a,c,u,p,d,T,w,o="<br/>",s,b,V=Jt(i[0])+"",y,g,S="<br/>",O,W,rt="<br/>",z,I,ot="O.K.",j,D,Q="<br/>",X,st;return{c(){t=k("p"),t.innerHTML=e,l=A(`
You can observe your interactions with the

`),r=k("a"),n=A("Smart Contract"),c=A(`
on zkevm.polygonscan.com
`),u=k("a"),p=A("here"),T=A(`.
`),w=k("p"),w.innerHTML=o,s=H(),b=new ee(!1),y=H(),g=k("p"),g.innerHTML=S,O=A(`
Reload the page to check for updates.
`),W=k("p"),W.innerHTML=rt,z=H(),I=k("button"),I.textContent=ot,j=H(),D=k("p"),D.innerHTML=Q,this.h()},l(m){t=C(m,"P",{"data-svelte-h":!0}),L(t)!=="svelte-pntvnr"&&(t.innerHTML=e),l=P(m,`
You can observe your interactions with the

`),r=C(m,"A",{href:!0,target:!0});var E=B(r);n=P(E,"Smart Contract"),E.forEach(f),c=P(m,`
on zkevm.polygonscan.com
`),u=C(m,"A",{href:!0,target:!0});var it=B(u);p=P(it,"here"),it.forEach(f),T=P(m,`.
`),w=C(m,"P",{"data-svelte-h":!0}),L(w)!=="svelte-pntvnr"&&(w.innerHTML=o),s=M(m),b=le(m,!1),y=M(m),g=C(m,"P",{"data-svelte-h":!0}),L(g)!=="svelte-pntvnr"&&(g.innerHTML=S),O=P(m,`
Reload the page to check for updates.
`),W=C(m,"P",{"data-svelte-h":!0}),L(W)!=="svelte-pntvnr"&&(W.innerHTML=rt),z=M(m),I=C(m,"BUTTON",{class:!0,"data-svelte-h":!0}),L(I)!=="svelte-b2hd0d"&&(I.textContent=ot),j=M(m),D=C(m,"P",{"data-svelte-h":!0}),L(D)!=="svelte-pntvnr"&&(D.innerHTML=Q),this.h()},h(){v(r,"href",a=nt+"token/"+i[1]+"#code"),v(r,"target","_blank"),v(u,"href",d=nt+"token/"+i[1]),v(u,"target","_blank"),b.a=y,v(I,"class","button inside")},m(m,E){_(m,t,E),_(m,l,E),_(m,r,E),h(r,n),_(m,c,E),_(m,u,E),h(u,p),_(m,T,E),_(m,w,E),_(m,s,E),b.m(V,m,E),_(m,y,E),_(m,g,E),_(m,O,E),_(m,W,E),_(m,z,E),_(m,I,E),_(m,j,E),_(m,D,E),X||(st=_t(I,"click",i[3]),X=!0)},p(m,[E]){E&2&&a!==(a=nt+"token/"+m[1]+"#code")&&v(r,"href",a),E&2&&d!==(d=nt+"token/"+m[1])&&v(u,"href",d),E&1&&V!==(V=Jt(m[0])+"")&&b.p(V)},i:N,o:N,d(m){m&&(f(t),f(l),f(r),f(c),f(u),f(T),f(w),f(s),b.d(),f(y),f(g),f(O),f(W),f(z),f(I),f(j),f(D)),X=!1,st()}}}function ie(i,t,e){let{message:l=""}=t,{smartContractAddress:r}=t;const n=ne(),a=()=>n("clickedOK");return i.$$set=c=>{"message"in c&&e(0,l=c.message),"smartContractAddress"in c&&e(1,r=c.smartContractAddress)},[l,r,n,a]}class te extends vt{constructor(t){super(),pt(this,t,ie,oe,mt,{message:0,smartContractAddress:1})}}function ce(i){let t;return{c(){t=A("... loading data from blockchain ...")},l(e){t=P(e,"... loading data from blockchain ...")},m(e,l){_(e,t,l)},p:N,d(e){e&&f(t)}}}function ue(i){let t,e,l,r='<th class="svelte-1d7t3w1">Key</th> <th class="svelte-1d7t3w1">Value</th>',n,a,c,u="Connected Wallet",p,d,T,w,o,s,b="Wallet Balance",V,y,g,S,O,W="Freedom Cash",rt,z,I,ot="Buy Price",j,D,Q,X,st,m,E,it="Guaranteed Minimum Sell Price",Pt,Z,bt,Bt,It,q,$,Kt="Market Capitalization (according to contract)",Ot,tt,kt,Vt,Wt,J,et,Gt="Smart Contract Address",Dt,at,lt,St;return{c(){t=k("div"),e=k("table"),l=k("tr"),l.innerHTML=r,n=H(),a=k("tr"),c=k("td"),c.textContent=u,p=H(),d=k("td"),T=A(i[0]),w=H(),o=k("tr"),s=k("td"),s.textContent=b,V=H(),y=k("td"),g=A(i[1]),S=H(),O=k("a"),O.textContent=W,rt=H(),z=k("tr"),I=k("td"),I.textContent=ot,j=H(),D=k("td"),Q=A(i[3]),X=A(" Ether"),st=H(),m=k("tr"),E=k("td"),E.textContent=it,Pt=H(),Z=k("td"),bt=A(i[4]),Bt=A(" Ether"),It=H(),q=k("tr"),$=k("td"),$.textContent=Kt,Ot=H(),tt=k("td"),kt=A(i[5]),Vt=A(" Ether"),Wt=H(),J=k("tr"),et=k("td"),et.textContent=Gt,Dt=H(),at=k("td"),lt=k("a"),St=A(Y),this.h()},l(U){t=C(U,"DIV",{class:!0});var G=B(t);e=C(G,"TABLE",{class:!0});var F=B(e);l=C(F,"TR",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-18z3kxz"&&(l.innerHTML=r),n=M(F),a=C(F,"TR",{class:!0});var Ct=B(a);c=C(Ct,"TD",{class:!0,"data-svelte-h":!0}),L(c)!=="svelte-qrf8j6"&&(c.textContent=u),p=M(Ct),d=C(Ct,"TD",{class:!0});var Yt=B(d);T=P(Yt,i[0]),Yt.forEach(f),Ct.forEach(f),w=M(F),o=C(F,"TR",{class:!0});var Tt=B(o);s=C(Tt,"TD",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-upo3l3"&&(s.textContent=b),V=M(Tt),y=C(Tt,"TD",{class:!0});var wt=B(y);g=P(wt,i[1]),S=M(wt),O=C(wt,"A",{href:!0,target:!0,"data-svelte-h":!0}),L(O)!=="svelte-1p6ukc"&&(O.textContent=W),wt.forEach(f),Tt.forEach(f),rt=M(F),z=C(F,"TR",{class:!0});var yt=B(z);I=C(yt,"TD",{class:!0,"data-svelte-h":!0}),L(I)!=="svelte-vese2l"&&(I.textContent=ot),j=M(yt),D=C(yt,"TD",{class:!0});var Ft=B(D);Q=P(Ft,i[3]),X=P(Ft," Ether"),Ft.forEach(f),yt.forEach(f),st=M(F),m=C(F,"TR",{class:!0});var gt=B(m);E=C(gt,"TD",{class:!0,"data-svelte-h":!0}),L(E)!=="svelte-1w7yvf"&&(E.textContent=it),Pt=M(gt),Z=C(gt,"TD",{class:!0});var Nt=B(Z);bt=P(Nt,i[4]),Bt=P(Nt," Ether"),Nt.forEach(f),gt.forEach(f),It=M(F),q=C(F,"TR",{class:!0});var Et=B(q);$=C(Et,"TD",{class:!0,"data-svelte-h":!0}),L($)!=="svelte-o8lyom"&&($.textContent=Kt),Ot=M(Et),tt=C(Et,"TD",{class:!0});var zt=B(tt);kt=P(zt,i[5]),Vt=P(zt," Ether"),zt.forEach(f),Et.forEach(f),Wt=M(F),J=C(F,"TR",{class:!0});var Ht=B(J);et=C(Ht,"TD",{class:!0,"data-svelte-h":!0}),L(et)!=="svelte-1cvg04r"&&(et.textContent=Gt),Dt=M(Ht),at=C(Ht,"TD",{class:!0});var jt=B(at);lt=C(jt,"A",{href:!0,target:!0});var qt=B(lt);St=P(qt,Y),qt.forEach(f),jt.forEach(f),Ht.forEach(f),F.forEach(f),G.forEach(f),this.h()},h(){v(l,"class","svelte-1d7t3w1"),v(c,"class","svelte-1d7t3w1"),v(d,"class","longInfo svelte-1d7t3w1"),v(a,"class","svelte-1d7t3w1"),v(s,"class","svelte-1d7t3w1"),v(O,"href",nt+"token/"+Y+"#code#L891"),v(O,"target","_blank"),v(y,"class","svelte-1d7t3w1"),v(o,"class","svelte-1d7t3w1"),v(I,"class","svelte-1d7t3w1"),v(D,"class","svelte-1d7t3w1"),v(z,"class","svelte-1d7t3w1"),v(E,"class","svelte-1d7t3w1"),v(Z,"class","svelte-1d7t3w1"),v(m,"class","svelte-1d7t3w1"),v($,"class","svelte-1d7t3w1"),v(tt,"class","svelte-1d7t3w1"),v(q,"class","svelte-1d7t3w1"),v(et,"class","svelte-1d7t3w1"),v(lt,"href",nt+"token/"+Y+"#code"),v(lt,"target","_blank"),v(at,"class","longInfo svelte-1d7t3w1"),v(J,"class","svelte-1d7t3w1"),v(e,"class","svelte-1d7t3w1"),v(t,"class","tableDiv svelte-1d7t3w1")},m(U,G){_(U,t,G),h(t,e),h(e,l),h(e,n),h(e,a),h(a,c),h(a,p),h(a,d),h(d,T),h(e,w),h(e,o),h(o,s),h(o,V),h(o,y),h(y,g),h(y,S),h(y,O),h(e,rt),h(e,z),h(z,I),h(z,j),h(z,D),h(D,Q),h(D,X),h(e,st),h(e,m),h(m,E),h(m,Pt),h(m,Z),h(Z,bt),h(Z,Bt),h(e,It),h(e,q),h(q,$),h(q,Ot),h(q,tt),h(tt,kt),h(tt,Vt),h(e,Wt),h(e,J),h(J,et),h(J,Dt),h(J,at),h(at,lt),h(lt,St)},p(U,G){G&1&&ct(T,U[0]),G&2&&ct(g,U[1]),G&8&&ct(Q,U[3]),G&16&&ct(bt,U[4]),G&32&&ct(kt,U[5])},d(U){U&&f(t)}}}function fe(i){let t;function e(n,a){return n[2]?ue:ce}let l=e(i),r=l(i);return{c(){r.c(),t=x()},l(n){r.l(n),t=x()},m(n,a){r.m(n,a),_(n,t,a)},p(n,[a]){l===(l=e(n))&&r?r.p(n,a):(r.d(1),r=l(n),r&&(r.c(),r.m(t.parentNode,t)))},i:N,o:N,d(n){n&&f(t),r.d(n)}}}function de(i,t,e){let{contract:l}=t,{publicWalletAddressOfVisitor:r}=t,{provider:n}=t,a,c=!1,u,p,d;Lt(async()=>{T()});async function T(){await l.balanceOf(Y);const w=await l.balanceOf(r);e(1,a=re(w));const o=await l.getBuyPrice(se("1","ether"));e(3,u=Rt(o.toString(),"ether"));try{e(4,p=Rt((await l.getSellPrice()).toString(),"ether"))}catch(s){console.log(s.message)}e(5,d=Rt((await n.getBalance(Y)).toString(),"ether")),e(2,c=!0)}return i.$$set=w=>{"contract"in w&&e(6,l=w.contract),"publicWalletAddressOfVisitor"in w&&e(0,r=w.publicWalletAddressOfVisitor),"provider"in w&&e(7,n=w.provider)},[r,a,c,u,p,d,l,n]}class he extends vt{constructor(t){super(),pt(this,t,de,fe,mt,{contract:6,publicWalletAddressOfVisitor:0,provider:7})}}function me(i){let t,e;return t=new te({props:{smartContractAddress:Y}}),t.$on("clickedOK",i[6]),{c(){ut(t.$$.fragment)},l(l){ft(t.$$.fragment,l)},m(l,r){dt(t,l,r),e=!0},p:N,i(l){e||(R(t.$$.fragment,l),e=!0)},o(l){K(t.$$.fragment,l),e=!1},d(l){ht(t,l)}}}function _e(i){let t,e,l="<br/>",r,n,a,c,u="<br/>",p,d,T,w,o=i[0]>0&&Qt(i);return{c(){t=A(`How much would you like to sell?
		`),e=k("p"),e.innerHTML=l,r=H(),n=k("input"),a=H(),c=k("p"),c.innerHTML=u,p=H(),o&&o.c(),d=x(),this.h()},l(s){t=P(s,`How much would you like to sell?
		`),e=C(s,"P",{"data-svelte-h":!0}),L(e)!=="svelte-pntvnr"&&(e.innerHTML=l),r=M(s),n=C(s,"INPUT",{class:!0,type:!0,placeholder:!0}),a=M(s),c=C(s,"P",{"data-svelte-h":!0}),L(c)!=="svelte-pntvnr"&&(c.innerHTML=u),p=M(s),o&&o.l(s),d=x(),this.h()},h(){v(n,"class","myInputField"),v(n,"type","number"),v(n,"placeholder","your investment e.g. 0.000000009 ETH")},m(s,b){_(s,t,b),_(s,e,b),_(s,r,b),_(s,n,b),Mt(n,i[0]),_(s,a,b),_(s,c,b),_(s,p,b),o&&o.m(s,b),_(s,d,b),T||(w=_t(n,"input",i[4]),T=!0)},p(s,b){b&1&&At(n.value)!==s[0]&&Mt(n,s[0]),s[0]>0?o?o.p(s,b):(o=Qt(s),o.c(),o.m(d.parentNode,d)):o&&(o.d(1),o=null)},i:N,o:N,d(s){s&&(f(t),f(e),f(r),f(n),f(a),f(c),f(p),f(d)),o&&o.d(s),T=!1,w()}}}function Qt(i){let t,e="Sell Freedom Cash",l,r;return{c(){t=k("button"),t.textContent=e,this.h()},l(n){t=C(n,"BUTTON",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-fkle52"&&(t.textContent=e),this.h()},h(){v(t,"class","inside")},m(n,a){_(n,t,a),l||(r=_t(t,"click",i[5]),l=!0)},p:N,d(n){n&&f(t),l=!1,r()}}}function ve(i){let t,e,l,r;const n=[_e,me],a=[];function c(u,p){return u[1]?0:1}return e=c(i),l=a[e]=n[e](i),{c(){t=k("section"),l.c(),this.h()},l(u){t=C(u,"SECTION",{class:!0});var p=B(t);l.l(p),p.forEach(f),this.h()},h(){v(t,"class","text-center")},m(u,p){_(u,t,p),a[e].m(t,null),r=!0},p(u,[p]){let d=e;e=c(u),e===d?a[e].p(u,p):(xt(),K(a[d],1,1,()=>{a[d]=null}),Ut(),l=a[e],l?l.p(u,p):(l=a[e]=n[e](u),l.c()),R(l,1),l.m(t,null))},i(u){r||(R(l),r=!0)},o(u){K(l),r=!1},d(u){u&&f(t),a[e].d()}}}function pe(i,t,e){let{contract:l}=t,r=1,n=0,a=!0;Lt(async()=>{n=await l.getSellPrice()});async function c(){try{n=await l.getSellPrice();const T=$t(r.toString());let w=await l.sellFreedomCash(T,n.toString());e(1,a=!1),console.log(`result: ${w}`)}catch(T){alert(T.message)}}function u(){r=At(this.value),e(0,r)}const p=()=>c(),d=()=>{e(1,a=!0)};return i.$$set=T=>{"contract"in T&&e(3,l=T.contract)},[r,a,c,l,u,p,d]}class be extends vt{constructor(t){super(),pt(this,t,pe,ve,mt,{contract:3})}}function ke(i){let t,e;return t=new te({props:{smartContractAddress:Y}}),t.$on("clickedOK",i[9]),{c(){ut(t.$$.fragment)},l(l){ft(t.$$.fragment,l)},m(l,r){dt(t,l,r),e=!0},p:N,i(l){e||(R(t.$$.fragment,l),e=!0)},o(l){K(t.$$.fragment,l),e=!1},d(l){ht(t,l)}}}function Ce(i){let t;function e(n,a){return n[2]>0?we:Te}let l=e(i),r=l(i);return{c(){r.c(),t=x()},l(n){r.l(n),t=x()},m(n,a){r.m(n,a),_(n,t,a)},p(n,a){l===(l=e(n))&&r?r.p(n,a):(r.d(1),r=l(n),r&&(r.c(),r.m(t.parentNode,t)))},i:N,o:N,d(n){n&&f(t),r.d(n)}}}function Te(i){let t,e,l="Freedom Cash",r,n,a="<br/>",c,u,p="portal.polygon.technology/bridge",d,T,w="<br/>";return{c(){t=A(`In order to invest into
		`),e=k("a"),e.textContent=l,r=A(`
		, you need to have some Ether on the Polygon zkEVM Blockchain.
		`),n=k("p"),n.innerHTML=a,c=A(`
		You can transfer some Ether from the Ethereum Mainnet to the Polygon zkEVM Blockchain via
		`),u=k("a"),u.textContent=p,d=A(`.
		`),T=k("p"),T.innerHTML=w,this.h()},l(o){t=P(o,`In order to invest into
		`),e=C(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),L(e)!=="svelte-1rso6ew"&&(e.textContent=l),r=P(o,`
		, you need to have some Ether on the Polygon zkEVM Blockchain.
		`),n=C(o,"P",{"data-svelte-h":!0}),L(n)!=="svelte-pntvnr"&&(n.innerHTML=a),c=P(o,`
		You can transfer some Ether from the Ethereum Mainnet to the Polygon zkEVM Blockchain via
		`),u=C(o,"A",{href:!0,target:!0,"data-svelte-h":!0}),L(u)!=="svelte-1spk867"&&(u.textContent=p),d=P(o,`.
		`),T=C(o,"P",{"data-svelte-h":!0}),L(T)!=="svelte-pntvnr"&&(T.innerHTML=w),this.h()},h(){v(e,"href",nt+"token/"+Y+"#code"),v(e,"target","_blank"),v(u,"href","https://portal.polygon.technology/bridge"),v(u,"target","_blank")},m(o,s){_(o,t,s),_(o,e,s),_(o,r,s),_(o,n,s),_(o,c,s),_(o,u,s),_(o,d,s),_(o,T,s)},p:N,d(o){o&&(f(t),f(e),f(r),f(n),f(c),f(u),f(d),f(T))}}}function we(i){let t,e,l="<br/>",r,n,a,c,u="<br/>",p,d,T,w,o=i[0]>0&&Xt(i);return{c(){t=A(`How much would you like to buy?
		`),e=k("p"),e.innerHTML=l,r=H(),n=k("input"),a=H(),c=k("p"),c.innerHTML=u,p=H(),o&&o.c(),d=x(),this.h()},l(s){t=P(s,`How much would you like to buy?
		`),e=C(s,"P",{"data-svelte-h":!0}),L(e)!=="svelte-pntvnr"&&(e.innerHTML=l),r=M(s),n=C(s,"INPUT",{class:!0,type:!0,placeholder:!0,min:!0,max:!0,step:!0}),a=M(s),c=C(s,"P",{"data-svelte-h":!0}),L(c)!=="svelte-pntvnr"&&(c.innerHTML=u),p=M(s),o&&o.l(s),d=x(),this.h()},h(){v(n,"class","myInputField"),v(n,"type","number"),v(n,"placeholder","e.g. 369 Freedom Cash"),v(n,"min","0.1"),v(n,"max","999999"),v(n,"step","0.1")},m(s,b){_(s,t,b),_(s,e,b),_(s,r,b),_(s,n,b),Mt(n,i[0]),_(s,a,b),_(s,c,b),_(s,p,b),o&&o.m(s,b),_(s,d,b),T||(w=_t(n,"input",i[7]),T=!0)},p(s,b){b&1&&At(n.value)!==s[0]&&Mt(n,s[0]),s[0]>0?o?o.p(s,b):(o=Xt(s),o.c(),o.m(d.parentNode,d)):o&&(o.d(1),o=null)},d(s){s&&(f(t),f(e),f(r),f(n),f(a),f(c),f(p),f(d)),o&&o.d(s),T=!1,w()}}}function Xt(i){let t,e="Buy Freedom Cash",l,r;return{c(){t=k("button"),t.textContent=e,this.h()},l(n){t=C(n,"BUTTON",{class:!0,"data-svelte-h":!0}),L(t)!=="svelte-hz4hi8"&&(t.textContent=e),this.h()},h(){v(t,"class","inside")},m(n,a){_(n,t,a),l||(r=_t(t,"click",i[8]),l=!0)},p:N,d(n){n&&f(t),l=!1,r()}}}function ye(i){let t,e,l,r;const n=[Ce,ke],a=[];function c(u,p){return u[1]?0:1}return t=c(i),e=a[t]=n[t](i),{c(){e.c(),l=x()},l(u){e.l(u),l=x()},m(u,p){a[t].m(u,p),_(u,l,p),r=!0},p(u,[p]){let d=t;t=c(u),t===d?a[t].p(u,p):(xt(),K(a[d],1,1,()=>{a[d]=null}),Ut(),e=a[t],e?e.p(u,p):(e=a[t]=n[t](u),e.c()),R(e,1),e.m(l.parentNode,l))},i(u){r||(R(e),r=!0)},o(u){K(e),r=!1},d(u){u&&f(l),a[t].d(u)}}}function ge(i,t,e){let{contract:l}=t,{provider:r}=t,{publicWalletAddressOfVisitor:n}=t,a=1,c=!0,u=0;Lt(async()=>{e(2,u=await r.getBalance(n))});async function p(){const o=$t(a.toString()),s=await l.getBuyPrice(o),b=BigInt(a)*s,V=BigInt(await r.getBalance(n));try{const g=await l.buyFreedomCash.estimateGas(o,s,{value:BigInt(b)})*(await r.getFeeData()).gasPrice;if(V<b+BigInt(g))alert("you might enter a smaller amount");else try{let S=await l.buyFreedomCash(o,s,{value:BigInt(b)});e(1,c=!1),console.log(S)}catch{alert("you might enter a smaller amount")}}catch(y){alert(y)}}function d(){a=At(this.value),e(0,a)}const T=()=>p(),w=()=>{e(1,c=!0)};return i.$$set=o=>{"contract"in o&&e(4,l=o.contract),"provider"in o&&e(5,r=o.provider),"publicWalletAddressOfVisitor"in o&&e(6,n=o.publicWalletAddressOfVisitor)},[a,c,u,p,l,r,n,d,T,w]}class Ee extends vt{constructor(t){super(),pt(this,t,ge,ye,mt,{contract:4,provider:5,publicWalletAddressOfVisitor:6})}}function Zt(i){let t,e,l="<br/>",r,n,a,c,u="<br/><br/>",p,d,T,w,o="<br/><br/><br/>",s,b,V;return n=new Ee({props:{contract:i[1],publicWalletAddressOfVisitor:i[0],provider:i[2]}}),d=new be({props:{contract:i[1]}}),b=new he({props:{publicWalletAddressOfVisitor:i[0],contract:i[1],provider:i[2]}}),{c(){t=k("div"),e=k("p"),e.innerHTML=l,r=H(),ut(n.$$.fragment),a=H(),c=k("p"),c.innerHTML=u,p=H(),ut(d.$$.fragment),T=H(),w=k("p"),w.innerHTML=o,s=H(),ut(b.$$.fragment),this.h()},l(y){t=C(y,"DIV",{class:!0});var g=B(t);e=C(g,"P",{"data-svelte-h":!0}),L(e)!=="svelte-pntvnr"&&(e.innerHTML=l),r=M(g),ft(n.$$.fragment,g),a=M(g),c=C(g,"P",{"data-svelte-h":!0}),L(c)!=="svelte-5q9igk"&&(c.innerHTML=u),p=M(g),ft(d.$$.fragment,g),T=M(g),w=C(g,"P",{"data-svelte-h":!0}),L(w)!=="svelte-102w9s7"&&(w.innerHTML=o),s=M(g),ft(b.$$.fragment,g),g.forEach(f),this.h()},h(){v(t,"class","content svelte-1r1uejn")},m(y,g){_(y,t,g),h(t,e),h(t,r),dt(n,t,null),h(t,a),h(t,c),h(t,p),dt(d,t,null),h(t,T),h(t,w),h(t,s),dt(b,t,null),V=!0},p(y,g){const S={};g&2&&(S.contract=y[1]),g&1&&(S.publicWalletAddressOfVisitor=y[0]),g&4&&(S.provider=y[2]),n.$set(S);const O={};g&2&&(O.contract=y[1]),d.$set(O);const W={};g&1&&(W.publicWalletAddressOfVisitor=y[0]),g&2&&(W.contract=y[1]),g&4&&(W.provider=y[2]),b.$set(W)},i(y){V||(R(n.$$.fragment,y),R(d.$$.fragment,y),R(b.$$.fragment,y),V=!0)},o(y){K(n.$$.fragment,y),K(d.$$.fragment,y),K(b.$$.fragment,y),V=!1},d(y){y&&f(t),ht(n),ht(d),ht(b)}}}function He(i){let t,e,l=i[3]&&Zt(i);return{c(){l&&l.c(),t=x()},l(r){l&&l.l(r),t=x()},m(r,n){l&&l.m(r,n),_(r,t,n),e=!0},p(r,[n]){r[3]?l?(l.p(r,n),n&8&&R(l,1)):(l=Zt(r),l.c(),R(l,1),l.m(t.parentNode,t)):l&&(xt(),K(l,1,1,()=>{l=null}),Ut())},i(r){e||(R(l),e=!0)},o(r){K(l),e=!1},d(r){r&&f(t),l&&l.d(r)}}}function Me(i,t,e){let{publicWalletAddressOfVisitor:l=""}=t,{contract:r=void 0}=t,{provider:n=void 0}=t,a=!1;return Lt(async()=>{if(!(typeof window.ethereum>"u")){if(l===""){const c=await ae();e(2,n=c.provider),e(1,r=c.contract),e(0,l=c.publicWalletAddressOfVisitor)}e(3,a=!0)}}),i.$$set=c=>{"publicWalletAddressOfVisitor"in c&&e(0,l=c.publicWalletAddressOfVisitor),"contract"in c&&e(1,r=c.contract),"provider"in c&&e(2,n=c.provider)},[l,r,n,a]}class Ie extends vt{constructor(t){super(),pt(this,t,Me,He,mt,{publicWalletAddressOfVisitor:0,contract:1,provider:2})}}export{te as F,Ie as I};