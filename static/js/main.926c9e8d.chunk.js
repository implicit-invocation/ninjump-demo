(this["webpackJsonpcurnon-ninjump"]=this["webpackJsonpcurnon-ninjump"]||[]).push([[0],{29:function(e,t,n){e.exports=n(58)},31:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(5),o=n(2),i=(n(31),n(0)),u=n(10),s=n(4),d=function(){},f=function(e){var t=e.update,n=void 0===t?d:t,r=e.destroy;return{update:n,destroy:void 0===r?d:r}},h=n(3),l=n(8),b=n.n(l),v=[],p=function(e,t,n){v.length=0;for(var r=n;r>e;)r-=t;for(;r<-t;)r+=t;var a=r;do{v.push(r),r+=t}while(r<e);for(r=a;r>0;)r-=t,v.push(r);return v},g=function(e,t,n,r){return p(t,n,r*e)},j=function(e,t){var n=e.x,r=e.y,a=Math.min(t[0],t[2],t[4],t[6]),c=Math.max(t[0],t[2],t[4],t[6]),o=Math.min(t[1],t[3],t[5],t[7]),i=Math.max(t[1],t[3],t[5],t[7]);return!(n<a||n>c||r<o||r>i)},O=["bed","bath","tv"],w=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,c,o,u,d,l,v,g,j,w,m,y,x,C,M,R,_,L,F,S,k,E,P,K,T,B,I,W,Y,A,J,N,V,H,U,q,z,D,G,Q,X,Z,$,ee,te,ne,re,ae,ce,oe,ie,ue,se,de,fe,he,le,be,ve,pe,ge,je,Oe,we,me,ye,xe,Ce,Me,Re,_e,Le,Fe,Se,ke,Ee;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.gender,r=void 0===n?0:n,c=t.outfit,o=void 0===c?0:c,u=t.gl,d=t.width,l=t.height,v=t.canvas,e.next=3,Object(i.i)(u,"./curnon-ninjump.atlas");case 3:return g=e.sent,e.next=6,Object(i.i)(u,"./ui.atlas");case 6:return j=e.sent,e.next=9,Object(i.j)(u,"./bg1.png");case 9:return w=e.sent,e.next=12,Object(i.j)(u,"./bg2.jpg");case 12:m=e.sent,y=j.findRegion("deadline"),x="ob_".concat(0===r?"man":"girl"),C=["".concat(x,"_2"),"".concat(x,"_3"),"".concat(x,"_1")],M=[],R=Object(s.a)(O);try{for(R.s();!(_=R.n()).done;)L=_.value,F=g.findRegions(L),M.push(Object(i.c)(.2,F))}catch(a){R.e(a)}finally{R.f()}for(S=[],k=0,E=C;k<E.length;k++)P=E[k],K=g.findRegions(P),S.push(Object(i.c)(.05,K));return T=.05*d,B=d,.3,I=d/5,W="".concat(0===r?"man":"girl","_run_").concat(o+1),Y="".concat(0===r?"man":"girl","_jump_").concat(o+1),A=g.findRegions(W),J=g.findRegions(Y),N=Object(i.c)(.13,A),V=Object(i.c)(.05,J),H=Object(i.f)(d,l,d,l),U=Object(i.d)(u),q=b()(u),z=new i.a(v),Q=d,X=d/5,1,$=D=l/5,ee=G=l/1.5,te={},ne=-B,re=!1,ae=0,ce=!1,oe=Z=T,ie=0,ue=function(){ce||(ae=re?1.5*-Q:1.5*Q,ce=!0,ie=ke,oe=Z)},z.addEventListener("touchStart",ue),document.addEventListener("keydown",ue),se={},de=function(){var e=$-D;for(var t in te)(t=parseFloat(t))+B<e&&(delete te[t],delete se[t]);for(;ne<e+l;){var n=!1,r=0;for((ne+=B)>l&&(n=Math.random()<.3,r=.5),te[ne]=n,se[ne]=[];r>0;){if(Math.random()<r){var a=Math.random()*(B-I)+ne,c=n?4:2,o=Math.floor(Math.random()*c),i=Math.floor(3*Math.random());se[ne].push({obstacleY:a,obstacleWall:o,obstacleType:i})}r-=.3}}},fe=function(){for(var e in U.setColor(0,0,0,.7),te){e=parseFloat(e);var t=l-(e-$+he)-B;Object(i.h)(U,q,0,t,T,B),Object(i.h)(U,q,d-T,t,T,B),te[e]&&(Object(i.h)(U,q,d/2-T/2,t,T,B),U.setColor(0,0,0,.3),Object(i.h)(U,q,d/2-T/2+T/4,t+T/4,T,B),U.setColor(0,0,0,.7))}U.setColor(1,1,1,1)},he=D,le=0,be=function(){var e=re?Z-X:Z,t=l-(he+=.1*(D-he))-X/2;le=t;var n=X/2,r=re?1:-1;ce?(e=re?Z:Z-X,ve?e=re?Math.min(e,d/2-T/2-X):Math.max(e,d/2+T/2):(e=Math.max(e,T),e=Math.min(e,d-T-X)),V.getKeyFrame(ke-ie,h.a.NORMAL).draw(U,e,t,150*X/115,X,n,0,0,r,1)):N.getKeyFrame(ke,h.a.LOOP).draw(U,e,t,X,X,n,0,0,r,1)},ve=!1,pe=function(e,t){if(!ce&&!ge)return!1;var n=B*Math.floor($/B),r=te[n],a=!1,c=!1,o=Math.abs(e-oe);return r&&!ve&&o<d/2-T&&(!re&&t>=d/2-T/2&&(Z=d/2-T/2,a=!0,c=!0),re&&t<=d/2+T/2&&(Z=d/2+T/2,a=!0,c=!0)),t<=T&&(Z=T,a=!0),t>=d-T&&(Z=d-T,a=!0),a&&(ce=!1,ae=0,re=!re,ge=!1,ve=!!c),a},ge=!1,je=function(){if(ve&&!ce){var e=B*Math.floor($/B);te[e]||(ce=!0,ae=(re=!re)?-Q:Q,ve=!1,ge=!0)}},Oe=d,we=w.height*Oe/w.width,me=m.height*Oe/m.width,ye=function(){var e,t=p(l,me,.5*$),n=Object(s.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;U.draw(m,0,r,Oe,me)}}catch(a){n.e(a)}finally{n.f()}var c,o=p(l,we,$),i=Object(s.a)(o);try{for(i.s();!(c=i.n()).done;){var u=c.value;U.draw(w,0,u,Oe,we)}}catch(a){i.e(a)}finally{i.f()}},xe=function(){for(var e in se){var t,n=se[e],r=Object(s.a)(n);try{for(r.s();!(t=r.n()).done;){var c=t.value,o=c.obstacleY,u=c.obstacleWall,f=c.obstacleType,b=c.hit,v=c.hitTime,p=void 0;p=0===u?T-.1*I:1===u?d-T-I+.1*I:2===u?d/2-T/2-I+.1*I:d/2+T/2-.1*I;var g=l-(o-$+he)-I,j=1===u||3===u;if(b){S[f].getKeyFrame(ke-v,h.a.NORMAL).draw(U,p+j?2*I:0,le-2*I,I,I,I/2,I/2,0,j?3:-3,3)}else{var O=M[f];U.setColor(0,0,0,.3),Object(i.h)(U,q,p+I/20,g+.9*I+I/20,I,I/10),U.setColor(0,0,0,.7),Object(i.h)(U,q,p,g+.9*I,I,I/10),U.setColor(1,1,1,1),O.getKeyFrame(ke,h.a.LOOP).draw(U,p,g,I,I,I/2,I/2,0)}}}catch(a){r.e(a)}finally{r.f()}}},Ce=0,Me=function(){var e;if(!ce)for(var t in e=Z===T?0:Z===d-T?1:Z===d/2-T/2?2:3,se){var n,r=se[t],c=Object(s.a)(r);try{for(c.s();!(n=c.n()).done;){var o=n.value,i=o.obstacleWall,u=o.obstacleY;!o.hit&&i===e&&$>=u&&$<=u+I&&(o.hit=!0,o.hitTime=ke,Ce=ke+1,ee=G/2,D*=.75,Se*=1.5)}}catch(a){c.e(a)}finally{c.f()}}},_e=(Re=d)/y.width*y.height,Le=l-_e,Fe=1,Se=-.3,ke=0,Ee=function(e){ke+=e,U.setProjection(H.combined),U.begin(),ke>=Ce&&(ee=G),$+=ee*e,pe(Z,Z+ae*e)||(Z+=ae*e),je(),de(),Me(),ye(),fe(),xe(),be(),(Fe+=Se*e)<0?(Fe=0,Se=-Se):Fe>1&&(Fe=1,Se=-Se),U.setColor(1,1,1,Fe),y.draw(U,0,Le,Re,_e),U.setColor(1,1,1,1),U.end()},e.abrupt("return",f({update:Ee,destroy:function(){z.cleanup(),document.removeEventListener("keydown",ue)}}));case 78:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,c,d,l,v,p,O,m,y,x,C,M,R,_,L,F,S,k,E,P,K,T,B,I,W,Y,A,J,N,V,H,U,q,z,D,G,Q,X,Z,$,ee,te,ne;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.gl,r=t.width,c=t.height,d=t.pixelRatio,l=t.canvas,v=t.gender,p=new i.a(l),O=Object(i.f)(r,c,r,c),m=Object(i.d)(n),y=b()(n),e.next=7,Object(i.i)(n,"./curnon-ninjump.atlas");case 7:return x=e.sent,e.next=10,Object(i.i)(n,"./ui.atlas");case 10:for(C=e.sent,M=0===v?"man_run_":"girl_run_",L=[],F=0;F<3;F++)S="".concat(M).concat(F+1),k=x.findRegions(S),R=k[0].width,_=k[0].height,L.push(Object(i.c)(.13,k));return E=C.findRegion("gender-header"),e.next=17,Object(i.j)(n,"./bg1.png");case 17:for(P=e.sent,T=(r-3*(K=.25*r))/4,B=(c-K)/2,I=[],W=[],Y=10,J=(A=.8*K)/R*_,N=0;N<3;N++)V=T*(N+1)+K*N,I.push(V),W.push([V,B,V+K,B,V+K,B+K,V,B+K]);return H=r,U=P.height*H/P.width,q=.8*r,z=.1*r,D=E.height/E.width*q,G=B-2.5*D,Q=[1,0,0,.5],X=[0,0,0,.5],Z=-1,$=new i.b,ee=new i.b,p.addEventListener("touchStart",(function(e,t){e*=d,t*=d,$.set(e,t),O.unprojectVector2(ee,$);for(var n=0;n<W.length;n++){var r=W[n];if(j(ee,r)){Z=n;break}}})),p.addEventListener("touchEnd",Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.outfit=Z,e.t0=t,e.next=4,w(t);case 4:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1),Z=-1;case 7:case"end":return e.stop()}}),e)})))),te=0,ne=function(e){te+=e,m.setProjection(O.combined),m.begin();var t,n=g(te,c,U,c/3),a=Object(s.a)(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;m.draw(P,0,o,H,U)}}catch(M){a.e(M)}finally{a.f()}m.setColor(1,1,1,.5),Object(i.h)(m,y,0,0,r,c),m.setColor(1,1,1,.7),E.draw(m,z,G,q,D),m.setColor(0,0,0,.2);var d,f=Object(s.a)(I);try{for(f.s();!(d=f.n()).done;){var l=d.value;Object(i.h)(m,y,l,B,K,K,0,0,0)}}catch(M){f.e(M)}finally{f.f()}m.setColor(1,1,1,1);for(var b=0;b<W.length;b++){var v=W[b],p=Z===b?Q:X;i.g.apply(void 0,[m,y,v,Y].concat(Object(u.a)(p)))}for(var j=0;j<3;j++){var w=L[j].getKeyFrame(te,h.a.LOOP),x=I[j]+K-A,C=B+K/2-J/2;w.draw(m,x,C,A,J)}m.end()},e.abrupt("return",f({update:ne,destroy:function(){p.cleanup()}}));case 43:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,c,d,l,v,p,O,w,y,x,C,M,R,_,L,F,S,k,E,P,K,T,B,I,W,Y,A,J,N,V,H,U,q,z,D,G,Q,X,Z,$,ee,te,ne,re,ae,ce,oe,ie,ue;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.gl,r=t.width,c=t.height,d=t.pixelRatio,l=t.canvas,v=new i.a(l),p=Object(i.f)(r,c,r,c),O=Object(i.d)(n),w=b()(n),e.next=7,Object(i.i)(n,"./curnon-ninjump.atlas");case 7:return y=e.sent,e.next=10,Object(i.i)(n,"./ui.atlas");case 10:return x=e.sent,C=[x.findRegion("gender-girl"),x.findRegion("gender-header"),x.findRegion("gender-man")],M=C[0],R=C[1],_=C[2],L=y.findRegions("girl_run_1"),F=Object(i.c)(.13,L),S=y.findRegions("man_run_1"),k=Object(i.c)(.13,S),e.next=18,Object(i.j)(n,"./bg1.png");case 18:return E=e.sent,I=[K=.05*r,B=(c-(P=.4*r))/2,K+P,B,K+P,B+P,K,B+P],W=[T=.55*r,B,T+P,B,T+P,B+P,T,B+P],Y=20,J=(A=.8*P)/L[0].width*L[0].height,N=T+P-A,V=K+P-A,H=B+P/2-J/2,U=r,q=E.height*U/E.width,z=.8*r,D=.1*r,G=R.height/R.width*z,Q=B-2.5*G,Z=(X=.5*P)/M.width*M.height,$=B+P+5,ee=K+.25*P,te=T+.1*P,ne=[1,0,0,.5],re=[0,0,0,.5],ae=-1,ce=new i.b,oe=new i.b,v.addEventListener("touchStart",(function(e,t){e*=d,t*=d,ce.set(e,t),p.unprojectVector2(oe,ce),ae=j(oe,I)?0:j(oe,W)?1:-1})),v.addEventListener("touchEnd",Object(o.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gender=ae,e.t0=t,e.next=4,m(t);case 4:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1),ae=-1;case 7:case"end":return e.stop()}}),e)})))),ie=0,ue=function(e){ie+=e,O.setProjection(p.combined),O.begin();var t,n=g(ie,c,q,c/3),a=Object(s.a)(n);try{for(a.s();!(t=a.n()).done;){var o=t.value;O.draw(E,0,o,U,q)}}catch(l){a.e(l)}finally{a.f()}O.setColor(1,1,1,.5),Object(i.h)(O,w,0,0,r,c),O.setColor(1,1,1,.7),R.draw(O,D,Q,z,G),M.draw(O,te,$,X,Z),_.draw(O,ee,$,X,Z),O.setColor(0,0,0,.2),Object(i.h)(O,w,K,B,P,P,0,0,0),Object(i.h)(O,w,T,B,P,P,0,0,0),O.setColor(1,1,1,1);var d=0===ae?ne:re;i.g.apply(void 0,[O,w,I,Y].concat(Object(u.a)(d)));var f=1===ae?ne:re;i.g.apply(void 0,[O,w,W,Y].concat(Object(u.a)(f))),F.getKeyFrame(ie,h.a.LOOP).draw(O,N,H,A,J),k.getKeyFrame(ie,h.a.LOOP).draw(O,V,H,A,J),O.end()},e.abrupt("return",f({update:ue,destroy:function(){v.cleanup()}}));case 52:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var e=Object(o.a)(a.a.mark((function e(){var t,n,r,o,u,s,d,f,h,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main"),n=document.getElementById("info"),r=Object(i.k)(t),o=Object(c.a)(r,2),u=o[0],s=o[1],d=t.getContext("webgl"),f={width:u,height:s,canvas:t,gl:d,pixelRatio:window.devicePixelRatio||1,setCurrentScreen:function(e){f.currentScreen&&f.currentScreen.destroy(),f.currentScreen=e}},e.t0=f,e.next=8,y(f);case 8:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1),d.clearColor(1,1,1,1),h=function(e){d.clear(d.COLOR_BUFFER_BIT),f.currentScreen&&f.currentScreen.update(e)},l=Object(i.e)(h),setInterval((function(){return n.innerHTML="FPS: ".concat(Math.floor(l.getFps()))}),1e3);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[29,1,2]]]);
//# sourceMappingURL=main.926c9e8d.chunk.js.map