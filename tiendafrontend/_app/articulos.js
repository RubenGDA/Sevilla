import{S as t,i as e,s,u as n,e as a,a as l,t as o,c as r,b as c,g as i,d as $,f as u,h as f,j as m,k as p,v as h,w as g,x as d,y as v,p as x,q as w,z as y,A as b,B as E,l as I,m as q,o as D,r as V,C as j,D as U,E as B,F as R,G as T,H as A,I as C,J as L,K as P,n as S}from"./start.js";import{B as H,j as N,a as O}from"./Boton.js";function k(t){let e,s,b,E,I,q,D,V;const j=t[2].default,U=n(j,t,t[1],null);return{c(){e=a("div"),s=a("input"),b=l(),E=a("input"),I=o("  €\n  "),U&&U.c(),this.h()},l(t){e=r(t,"DIV",{class:!0});var n=c(e);s=r(n,"INPUT",{class:!0}),b=i(n),E=r(n,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),I=$(n,"  €\n  "),U&&U.l(n),n.forEach(u),this.h()},h(){f(s,"class","title svelte-thfols"),f(E,"type","number"),f(E,"min","0"),f(E,"max","9999.99"),f(E,"step",".01"),f(E,"class","svelte-thfols"),f(e,"class","card svelte-thfols")},m(n,a){m(n,e,a),p(e,s),h(s,t[0].nombre),p(e,b),p(e,E),h(E,t[0].precio),p(e,I),U&&U.m(e,null),q=!0,D||(V=[g(s,"input",t[3]),g(E,"input",t[4])],D=!0)},p(t,[e]){1&e&&s.value!==t[0].nombre&&h(s,t[0].nombre),1&e&&d(E.value)!==t[0].precio&&h(E,t[0].precio),U&&U.p&&2&e&&v(U,j,t,t[1],e,null,null)},i(t){q||(x(U,t),q=!0)},o(t){w(U,t),q=!1},d(t){t&&u(e),U&&U.d(t),D=!1,y(V)}}}function z(t,e,s){let{$$slots:n={},$$scope:a}=e,{articulo:l={}}=e;return t.$$set=t=>{"articulo"in t&&s(0,l=t.articulo),"$$scope"in t&&s(1,a=t.$$scope)},[l,a,n,function(){l.nombre=this.value,s(0,l)},function(){l.precio=d(this.value),s(0,l)}]}class F extends t{constructor(t){super(),e(this,t,z,k,s,{articulo:0})}}function G(t,e,s){const n=t.slice();return n[2]=e[s],n}function J(t){let e,s,n;return s=new O({props:{documento:t[2],tipo:"insertar",coleccion:"articulos"}}),{c(){e=a("div"),I(s.$$.fragment),this.h()},l(t){e=r(t,"DIV",{style:!0});var n=c(e);q(s.$$.fragment,n),n.forEach(u),this.h()},h(){j(e,"text-align","right")},m(t,a){m(t,e,a),D(s,e,null),n=!0},p(t,e){const n={};4&e&&(n.documento=t[2]),s.$set(n)},i(t){n||(x(s.$$.fragment,t),n=!0)},o(t){w(s.$$.fragment,t),n=!1},d(t){t&&u(e),V(s)}}}function K(t){let e,s,n,o,$,f;return s=new O({props:{documento:t[2],tipo:"modificar",coleccion:"articulos"}}),o=new O({props:{documento:t[2],tipo:"eliminar",coleccion:"articulos"}}),{c(){e=a("div"),I(s.$$.fragment),n=l(),I(o.$$.fragment),$=l(),this.h()},l(t){e=r(t,"DIV",{style:!0});var a=c(e);q(s.$$.fragment,a),n=i(a),q(o.$$.fragment,a),a.forEach(u),$=i(t),this.h()},h(){j(e,"text-align","right")},m(t,a){m(t,e,a),D(s,e,null),p(e,n),D(o,e,null),m(t,$,a),f=!0},p(t,e){const n={};2&e&&(n.documento=t[2]),s.$set(n);const a={};2&e&&(a.documento=t[2]),o.$set(a)},i(t){f||(x(s.$$.fragment,t),x(o.$$.fragment,t),f=!0)},o(t){w(s.$$.fragment,t),w(o.$$.fragment,t),f=!1},d(t){t&&u(e),V(s),V(o),t&&u($)}}}function M(t){let e,s;return e=new F({props:{articulo:t[2],$$slots:{default:[K]},$$scope:{ctx:t}}}),{c(){I(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p(t,s){const n={};2&s&&(n.articulo=t[2]),1026&s&&(n.$$scope={dirty:s,ctx:t}),e.$set(n)},i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}function Q(t){let e,s,n,h,g,d,v,y,A,C,L,P,S,N,O;function k(e){t[3].call(null,e)}let z={};function K(e){t[4].call(null,e)}void 0!==t[0]&&(z.busqueda=t[0]),v=new H({props:z}),b.push((()=>E(v,"busqueda",k)));let Q={$$slots:{default:[J]},$$scope:{ctx:t}};void 0!==t[2]&&(Q.articulo=t[2]),L=new F({props:Q}),b.push((()=>E(L,"articulo",K)));let W=t[1],X=[];for(let a=0;a<W.length;a+=1)X[a]=M(G(t,W,a));const Y=t=>w(X[t],1,1,(()=>{X[t]=null}));return{c(){e=a("div"),s=a("h1"),n=o("ARTÍCULOS"),h=l(),g=a("p"),d=l(),I(v.$$.fragment),A=l(),C=a("div"),I(L.$$.fragment),S=l(),N=a("div");for(let t=0;t<X.length;t+=1)X[t].c();this.h()},l(t){e=r(t,"DIV",{class:!0});var a=c(e);s=r(a,"H1",{});var l=c(s);n=$(l,"ARTÍCULOS"),l.forEach(u),h=i(a),g=r(a,"P",{style:!0}),c(g).forEach(u),d=i(a),q(v.$$.fragment,a),a.forEach(u),A=i(t),C=r(t,"DIV",{class:!0});var o=c(C);q(L.$$.fragment,o),o.forEach(u),S=i(t),N=r(t,"DIV",{class:!0});var f=c(N);for(let e=0;e<X.length;e+=1)X[e].l(f);f.forEach(u),this.h()},h(){j(g,"flex","1"),f(e,"class","container svelte-1qvp6x9"),f(C,"class","container svelte-1qvp6x9"),f(N,"class","container svelte-1qvp6x9")},m(t,a){m(t,e,a),p(e,s),p(s,n),p(e,h),p(e,g),p(e,d),D(v,e,null),m(t,A,a),m(t,C,a),D(L,C,null),m(t,S,a),m(t,N,a);for(let e=0;e<X.length;e+=1)X[e].m(N,null);O=!0},p(t,[e]){const s={};!y&&1&e&&(y=!0,s.busqueda=t[0],U((()=>y=!1))),v.$set(s);const n={};if(1028&e&&(n.$$scope={dirty:e,ctx:t}),!P&&4&e&&(P=!0,n.articulo=t[2],U((()=>P=!1))),L.$set(n),2&e){let s;for(W=t[1],s=0;s<W.length;s+=1){const n=G(t,W,s);X[s]?(X[s].p(n,e),x(X[s],1)):(X[s]=M(n),X[s].c(),x(X[s],1),X[s].m(N,null))}for(B(),s=W.length;s<X.length;s+=1)Y(s);R()}},i(t){if(!O){x(v.$$.fragment,t),x(L.$$.fragment,t);for(let t=0;t<W.length;t+=1)x(X[t]);O=!0}},o(t){w(v.$$.fragment,t),w(L.$$.fragment,t),X=X.filter(Boolean);for(let e=0;e<X.length;e+=1)w(X[e]);O=!1},d(t){t&&u(e),V(v),t&&u(A),t&&u(C),V(L),t&&u(S),t&&u(N),T(X,t)}}}function W(t,e,s){let n;A(t,N,(t=>s(5,n=t)));const a=C("URL");let l,o,r="",c={};return L((async()=>{const t=await fetch(a.articulos),e=await t.json();P(N,n=e,n)})),t.$$.update=()=>{1&t.$$.dirty&&s(6,l=new RegExp(r,"i")),97&t.$$.dirty&&s(1,o=r?n.filter((t=>l.test(t.nombre))):n)},[r,o,c,function(t){r=t,s(0,r)},function(t){c=t,s(2,c)}]}class X extends t{constructor(t){super(),e(this,t,W,Q,s,{})}}function Y(t){let e,s;return e=new X({}),{c(){I(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,n){D(e,t,n),s=!0},p:S,i(t){s||(x(e.$$.fragment,t),s=!0)},o(t){w(e.$$.fragment,t),s=!1},d(t){V(e,t)}}}export default class extends t{constructor(t){super(),e(this,t,null,Y,s,{})}}