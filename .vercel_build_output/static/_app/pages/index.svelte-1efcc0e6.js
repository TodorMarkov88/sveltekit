import{S as J,i as Q,s as W,e as _,E as V,k as j,t as $,c as m,a as i,F as q,d as o,n as C,g as D,b as t,P as H,f as K,I as e,Q as z,h as A,J as L,R as X,T as Y,K as Z,j as ee,U as te,m as se,G as ae,o as re,x as le,u as oe,v as ne}from"../chunks/vendor-b6deef9a.js";function ce(f){let s,a,l,c,u,d,v,n,b=Math.floor(f[1]+1)+"",x,R,y,T=Math.floor(f[1])+"",w,B,p,g,k,E,O;return{c(){s=_("div"),a=_("button"),l=V("svg"),c=V("path"),u=j(),d=_("div"),v=_("div"),n=_("strong"),x=$(b),R=j(),y=_("strong"),w=$(T),B=j(),p=_("button"),g=V("svg"),k=V("path"),this.h()},l(r){s=m(r,"DIV",{class:!0});var h=i(s);a=m(h,"BUTTON",{"aria-label":!0,class:!0});var I=i(a);l=q(I,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var M=i(l);c=q(M,"path",{d:!0,class:!0}),i(c).forEach(o),M.forEach(o),I.forEach(o),u=C(h),d=m(h,"DIV",{class:!0});var G=i(d);v=m(G,"DIV",{class:!0,style:!0});var S=i(v);n=m(S,"STRONG",{style:!0,"aria-hidden":!0,class:!0});var N=i(n);x=D(N,b),N.forEach(o),R=C(S),y=m(S,"STRONG",{class:!0});var U=i(y);w=D(U,T),U.forEach(o),S.forEach(o),G.forEach(o),B=C(h),p=m(h,"BUTTON",{"aria-label":!0,class:!0});var P=i(p);g=q(P,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var F=i(g);k=q(F,"path",{d:!0,class:!0}),i(k).forEach(o),F.forEach(o),P.forEach(o),h.forEach(o),this.h()},h(){t(c,"d","M0,0.5 L1,0.5"),t(c,"class","svelte-139m1ow"),t(l,"aria-hidden","true"),t(l,"viewBox","0 0 1 1"),t(l,"class","svelte-139m1ow"),t(a,"aria-label","Decrease the counter by one"),t(a,"class","svelte-139m1ow"),H(n,"top","-100%"),t(n,"aria-hidden","true"),t(n,"class","svelte-139m1ow"),t(y,"class","svelte-139m1ow"),t(v,"class","counter-digits svelte-139m1ow"),H(v,"transform","translate(0, "+100*f[2]+"%)"),t(d,"class","counter-viewport svelte-139m1ow"),t(k,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),t(k,"class","svelte-139m1ow"),t(g,"aria-hidden","true"),t(g,"viewBox","0 0 1 1"),t(g,"class","svelte-139m1ow"),t(p,"aria-label","Increase the counter by one"),t(p,"class","svelte-139m1ow"),t(s,"class","counter svelte-139m1ow")},m(r,h){K(r,s,h),e(s,a),e(a,l),e(l,c),e(s,u),e(s,d),e(d,v),e(v,n),e(n,x),e(v,R),e(v,y),e(y,w),e(s,B),e(s,p),e(p,g),e(g,k),E||(O=[z(a,"click",f[4]),z(p,"click",f[5])],E=!0)},p(r,[h]){h&2&&b!==(b=Math.floor(r[1]+1)+"")&&A(x,b),h&2&&T!==(T=Math.floor(r[1])+"")&&A(w,T),h&4&&H(v,"transform","translate(0, "+100*r[2]+"%)")},i:L,o:L,d(r){r&&o(s),E=!1,X(O)}}}function ie(f,s){return(f%s+s)%s}function ue(f,s,a){let l,c,u=0;const d=Y();Z(f,d,b=>a(1,c=b));const v=()=>a(0,u-=1),n=()=>a(0,u+=1);return f.$$.update=()=>{f.$$.dirty&1&&d.set(u),f.$$.dirty&2&&a(2,l=ie(c,1))},[u,c,l,d,v,n]}class de extends J{constructor(s){super();Q(this,s,ue,ce,W,{})}}function ve(f){let s,a,l,c,u,d,v,n,b,x,R,y,T,w,B,p,g,k,E,O;return E=new de({}),{c(){s=j(),a=_("section"),l=_("h1"),c=_("div"),u=_("picture"),d=_("source"),v=j(),n=_("img"),x=$(`

		to your new`),R=_("br"),y=$("SvelteKit app"),T=j(),w=_("h2"),B=$("try editing "),p=_("strong"),g=$("src/routes/index.svelte"),k=j(),ee(E.$$.fragment),this.h()},l(r){te('[data-svelte="svelte-1anpopb"]',document.head).forEach(o),s=C(r),a=m(r,"SECTION",{class:!0});var I=i(a);l=m(I,"H1",{class:!0});var M=i(l);c=m(M,"DIV",{class:!0});var G=i(c);u=m(G,"PICTURE",{});var S=i(u);d=m(S,"SOURCE",{srcset:!0,type:!0}),v=C(S),n=m(S,"IMG",{src:!0,alt:!0,class:!0}),S.forEach(o),G.forEach(o),x=D(M,`

		to your new`),R=m(M,"BR",{}),y=D(M,"SvelteKit app"),M.forEach(o),T=C(I),w=m(I,"H2",{});var N=i(w);B=D(N,"try editing "),p=m(N,"STRONG",{});var U=i(p);g=D(U,"src/routes/index.svelte"),U.forEach(o),N.forEach(o),k=C(I),se(E.$$.fragment,I),I.forEach(o),this.h()},h(){document.title="Home",t(d,"srcset","svelte-welcome.webp"),t(d,"type","image/webp"),ae(n.src,b="svelte-welcome.png")||t(n,"src",b),t(n,"alt","Welcome"),t(n,"class","svelte-mjk9ig"),t(c,"class","welcome svelte-mjk9ig"),t(l,"class","svelte-mjk9ig"),t(a,"class","svelte-mjk9ig")},m(r,h){K(r,s,h),K(r,a,h),e(a,l),e(l,c),e(c,u),e(u,d),e(u,v),e(u,n),e(l,x),e(l,R),e(l,y),e(a,T),e(a,w),e(w,B),e(w,p),e(p,g),e(a,k),re(E,a,null),O=!0},p:L,i(r){O||(le(E.$$.fragment,r),O=!0)},o(r){oe(E.$$.fragment,r),O=!1},d(r){r&&o(s),r&&o(a),ne(E)}}}const _e=!0;class me extends J{constructor(s){super();Q(this,s,null,ve,W,{})}}export{me as default,_e as prerender};
