(this["webpackJsonpcurnon-ninjump"]=this["webpackJsonpcurnon-ninjump"]||[]).push([[0],{29:function(e,t,r){e.exports=r(57)},31:function(e,t,r){},57:function(e,t,r){"use strict";r.r(t);var n=r(3),a=r.n(n),i=r(5),o=r(4),c=(r(31),r(0)),d=(r(10),r(1)),l=function(){},s=function(e){var t=e.update,r=void 0===t?l:t,n=e.destroy;return{update:r,destroy:void 0===n?l:n}},u=r(2),f=r(6),p=r.n(f),h=[],j=function(e,t,r){h.length=0;for(var n=r;n>e;)n-=t;for(;n<-t;)n+=t;var a=n;do{h.push(n),n+=t}while(n<e);for(n=a;n>0;)n-=t,h.push(n);return h},y=function(e,t,r,n){for(var a=r.findRegion("deadline-back-gradient"),i=r.findRegion("deadline-front-gradient"),o=r.findRegion("single-note"),l=r.findRegion("single-paper"),s=r.findRegion("deadline-base"),f=r.findRegion("paper_stack"),p=Object(c.c)(.1,r.findRegions("paper_stack")),h=e/30,j=e,y=j/a.width*a.height,v=t-y,g=j/s.width*s.height,w=t-g/2,b=j/i.width*i.height,O=t-b,m=e/4,z=m/f.width*f.height,x=t-z,P=[],M=0;M<4;M++)P[M]=.5*Math.random();var S=0,R=.15,_=[],L=-t/2,I=.75*t;return{setDeadLineParticleRate:function(e){R=e},getDeadLineParticleRate:function(){return R},update:function(r,c){for(S+=r;S>=R;){S-=R;var f=Math.random()>.5?0:1;_.push({x:Math.random()*e,y:t,size:0===f?2*h:h,speedY:L,type:f,rotation:Math.random()*Math.PI/2})}var y,M=Object(d.a)(_);try{for(M.s();!(y=M.n()).done;){var C=y.value;C.speedY+=I*r,C.y=C.y+C.speedY*r,C.y>t&&(C.expired=!0)}}catch(Y){M.e(Y)}finally{M.f()}for(var N=_.length-1;N>=0;N--)_[N].expired&&_.splice(N,1);a.draw(n,0,v,j,v),s.draw(n,0,w,j,g);for(var F=0;F<3;F++)p.getKeyFrame(c+P[F],u.a.LOOP_PINGPONG).draw(n,m*F+m/2,x-z/8,m,z);var K,k=Object(d.a)(_);try{for(k.s();!(K=k.n()).done;){var G=K.value;(0===G.type?l:o).draw(n,G.x,G.y,G.size,G.size,G.size/2,G.size/2,G.rotation)}}catch(Y){k.e(Y)}finally{k.f()}for(var H=0;H<4;H++)p.getKeyFrame(c+P[H],u.a.LOOP_PINGPONG).draw(n,m*H,x,m,z);i.draw(n,0,O,j,b)}}},v=function(e,t,r,n,a){var i=e,o=i/r.width*r.height,c=i/n.width*n.height;return{update:function(e,l,s){var u,f=j(t,c,.5*(-l+s)),p=Object(d.a)(f);try{for(p.s();!(u=p.n()).done;){var h=u.value;a.draw(n,0,h,i,c)}}catch(w){p.e(w)}finally{p.f()}f=j(t,o,-l+s);var y,v=Object(d.a)(f);try{for(v.s();!(y=v.n()).done;){var g=y.value;a.draw(r,0,g,i,o)}}catch(w){v.e(w)}finally{v.f()}}}},g=function(e,t,r,n,a){var i=[],o=0,c=e/30,l=e/7.5;return{update:function(e,t,r,n){for(o+=e;o>=.075;)o-=.075,i.push({x:t+a/2+(Math.random()-.5)*l,y:r+a/2+(Math.random()-.5)*l,speedY:n/2,type:Math.random()<.3?0:Math.random()<.5?1:2,rotation:Math.random()*Math.PI/2,duration:3*Math.random(),t:0,size:c});var s,u=Object(d.a)(i);try{for(u.s();!(s=u.n()).done;){var f=s.value;f.t+=e,f.y+=f.speedY*e}}catch(j){u.e(j)}finally{u.f()}for(var p=i.length-1;p>=0;p--){var h=i[p];h.t>=h.duration&&i.splice(p,1)}},draw:function(){var e,t=Object(d.a)(i);try{for(t.s();!(e=t.n()).done;){var a=e.value,o=(a.duration-a.t)/a.duration;o=o*o*(3-2*o),n.setColor(0,0,0,.75*o),n.draw(r,a.x-a.size/2+a.size/5,a.y-a.size/2+a.size/5,a.size,a.size,a.size/2,a.size/2,a.rotation),0===a.type&&n.setColor(1,.494,.725,o),1===a.type&&n.setColor(.478,.988,1,o),2===a.type&&n.setColor(1,.969,.251,o),n.draw(r,a.x-a.size/2,a.y-a.size/2,a.size,a.size,a.size/2,a.size/2,a.rotation),n.setColor(1,1,1,1)}}catch(c){t.e(c)}finally{t.f()}}}},w=function(e,t,r,n,a,i,o){var c=a,d=e/10;return{update:function(o,l,s){for(var u=l+s,f=r.length-1;f>=0;f--){r[f]-a>u&&r.splice(f,1)}for(var p=n.length-1;p>=0;p--){n[p].y>r[0]&&n.splice(p,1)}for(;c>u-2*t-a;)if(c-=a,r.push(c),!(c>-t)&&Math.random()<=.2){var h=Math.floor(4*Math.random()),j=Math.random()>.5?0:1,y=0===h?3*d:2*d,v=0===h?d/2:2*d;n.push({wallIndex:j,y:0===h?c-a:c-a-.9*v,type:h,width:y,height:v,x:0===j?i:e-i-y})}}}},b=function(e,t,r,n,a,i,o){return{draw:function(){n.setColor(0,0,0,.75);var t,l=Object(d.a)(a);try{for(l.s();!(t=l.n()).done;){var s=t.value;Object(c.h)(n,r,0,s-i,o,i),Object(c.h)(n,r,e-o,s-i,o,i)}}catch(u){l.e(u)}finally{l.f()}n.setColor(1,1,1,1)}}},O=function(e,t,r,n,a,i,o,d){var l=n.findRegions(i),s=n.findRegions(o),f=a.findRegions("slash"),p=Object(c.c)(.05,l),h=Object(c.c)(.1,s),j=Object(c.c)(.03,f),y=.1*e,v=.8*e,g=v*f[0].height/f[0].width,w=!0;return{draw:function(e,t,n,a,i,o){var c=d/2,l=n?1:-1;w||j.getKeyFrame(i-o,u.a.NORMAL).draw(r,y,t,v,g,v/2,g/2,0,l,1.5),a?(w=!1,h.getKeyFrame(i-o,u.a.NORMAL).draw(r,e,t,150*d/115,d,c,0,0,l,1)):p.getKeyFrame(i,u.a.LOOP_PINGPONG).draw(r,e,t,d,d,c,0,0,l,1)}}},m=function(e,t,r,n,a,i,o){var l=new c.b;return{update:function(t,s,u){var f,p=Object(d.a)(r);try{for(p.s();!(f=p.n()).done;){var h=f.value;if(h.type>0&&!h.fired&&Math.abs(h.y-s)<n){h.fired=!0,h.projectilePos=new c.b(0===h.wallIndex?a:e-a,h.y);var j=new c.b;j.set(0===h.wallIndex?i:-i,0);var y=-Math.random()*Math.PI/6-Math.PI/18;j.rotateRad(0===h.wallIndex?y:-y),h.projectileVel=j,h.projectileSize=o,h.projectileStart=u}h.fired&&(l.setVector(h.projectileVel).scale(t),h.projectilePos.addVector(l))}}catch(v){p.e(v)}finally{p.f()}}}},z=[null,"bed","bath","tivi"],x=function(e,t,r,n){for(var a=[],i=[],o=[],l=Object(c.c)(.05,n.findRegions("bullet_hit").slice(1,-1)),s=0;s<z.length;s++)if(0!==s){var f=n.findRegions(z[s]);a[s]=Object(c.c)(.1,f),i[s]=Object(c.c)(.1,f.slice(0,4)),o[s]=Object(c.c)(.1,n.findRegions("".concat(z[s],"_bullet")))}return{draw:function(n){var s,f=Object(d.a)(r);try{for(f.s();!(s=f.n()).done;){var p=s.value,h=0===p.wallIndex?-1:1;0===p.type?(t.setColor(0,0,0,.75),!p.hit&&Object(c.h)(t,e,p.x,p.y,p.width,p.height),t.setColor(1,1,1,1)):p.fired?(!p.hit&&a[p.type].getKeyFrame(n-p.projectileStart,u.a.NORMAL).draw(t,p.x,p.y,p.width,p.height,p.width/2,p.height,0,1.5*h,1.5),p.projectileHit?n-p.projectileHitTime<=.55&&(t.setColor(0,0,0,.25),l.getKeyFrame(n-p.projectileHitTime,u.a.NORMAL).draw(t,p.projectilePos.x-p.projectileSize,p.projectilePos.y,2*p.projectileSize,p.projectileSize,p.projectileSize,p.projectileSize/2,0,1.5,1.5),t.setColor(1,1,1,1),l.getKeyFrame(n-p.projectileHitTime,u.a.NORMAL).draw(t,p.projectilePos.x-p.projectileSize+.05*p.projectileSize,p.projectilePos.y+.05*p.projectileSize,2*p.projectileSize,p.projectileSize,p.projectileSize,p.projectileSize/2,0,1.5,1.5)):o[p.type].getKeyFrame(n,u.a.LOOP_PINGPONG).draw(t,p.projectilePos.x-p.projectileSize/2,p.projectilePos.y-p.projectileSize/2,p.projectileSize,p.projectileSize,p.projectileSize/2,p.projectileSize/2,0,1.2,1.2)):!p.hit&&i[p.type].getKeyFrame(n,u.a.LOOP_PINGPONG).draw(t,p.x,p.y,p.width,p.height,p.width/2,p.height,0,1.5*h,1.5)}}catch(j){f.e(j)}finally{f.f()}}}},P=function(e,t,r,n,a,i,o,l){for(var s="ob_".concat(0===o?"man":"girl"),f=[null,"".concat(s,"_2"),"".concat(s,"_3"),"".concat(s,"_1")],p=i.findRegion("ob_man_1"),h=e/2,j=h*p.height/p.width,y=[],v=0;v<f.length;v++)if(0!==v){var g=i.findRegions(f[v]);y[v]=Object(c.c)(.05,g)}return{draw:function(i,o){a.length>0&&(n.setColor(0,0,0,.5),Object(c.h)(n,r,0,o-t,e,2*t),n.setColor(1,1,1,1));var l,s=Object(d.a)(a);try{for(s.s();!(l=s.n()).done;){var f=l.value;if(0!==f.type)y[f.type].getKeyFrame(i-f.time,u.a.NORMAL).draw(n,f.x-h/2,o+2*f.offsetY-j/2,h,j,h/2,j/2,0,f.flipped?1:-1,1)}}catch(p){s.e(p)}finally{s.f()}}}},M=function(){var e=Object(o.a)(a.a.mark((function e(t){var r,n,i,o,l,u,f,h,j,z,M,S,R,_,L,I,C,N,F,K,k,G,H,Y,E,A,T,V,B,D,J,U,q,Q,W,X,Z,$,ee,te,re,ne,ae,ie,oe,ce,de,le,se,ue,fe,pe,he,je,ye,ve,ge,we,be;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.gender,n=void 0===r?0:r,i=t.outfit,o=void 0===i?0:i,l=t.gl,u=t.width,f=t.height,h=t.canvas,j=Object(c.d)(l),z=Object(c.f)(u,f,u,f),M=p()(l),S=new c.a(h),e.next=7,Object(c.j)(l,"./test-bg.png");case 7:return R=e.sent,e.next=10,Object(c.j)(l,"./test-bg2.jpg");case 10:return _=e.sent,e.next=13,Object(c.i)(l,"./deadline.atlas");case 13:return L=e.sent,e.next=16,Object(c.i)(l,"./test.atlas");case 16:return I=e.sent,e.next=19,Object(c.i)(l,"./slash.atlas");case 19:return C=e.sent,e.next=22,Object(c.i)(l,"./obstacle.atlas");case 22:return N=e.sent,e.next=25,Object(c.j)(l,"./note.png");case 25:return F=e.sent,K="".concat(0===n?"man":"girl","_running_").concat(o+1),k="".concat(0===n?"man":"girl","_jump_").concat(o+1),G=u/R.width*R.height,Y=G/7,E=2*u,T=H=.05*u,V=0,B=0,D=.75*-f,U=J=.6*f,q=J,Q=!1,W=!1,X=[],Z=[],$=H,ee=u-H-(A=u/5),te=0,re=function(){W||Z.length>0||(V=Q?-E:E,W=!0,te=we)},S.addEventListener("touchStart",re),document.addEventListener("keydown",re),ne=function(e){if(W){var t=!1;return e>ee&&(T=ee,t=!0),e<$&&(T=$,t=!0),t&&(V=0,W=!1,Q=!Q),t}},ae=function(e){var t=1;Z.length>0&&(t=.5),B+=D*e*t;var r=V*e;ne(T+r)||(T+=r)},ie=function(e){var t,r=T,n=T+A,a=B,i=B+A,o=!1,c=Object(d.a)(ce);try{for(c.s();!(t=c.n()).done;){var l=t.value;if(!l.hit){var s=l.width,p=l.height,h=l.x,j=l.x+s,y=l.y,v=l.y+p;r<j&&n>h&&a<v&&i>y&&!W&&(o=!0,l.hit=!0,Z.push({time:we,duration:1,type:l.type,x:u/2+(Math.random()-.5)*u/20,offsetY:-(Math.random()*u/20+u/40),flipped:Q}))}}}catch(R){c.e(R)}finally{c.f()}var g,w=Object(d.a)(ce);try{for(w.s();!(g=w.n()).done;){var b=g.value;if(b.fired&&!b.projectileHit){var O=b.projectilePos,m=b.projectileSize,z=O.x-m/3,x=O.x+m/3,P=O.y-m/3,M=O.y+m/3;r<x&&n>z&&a<M&&i>P&&(b.projectileHit=!0,b.projectileHitTime=we,b.projectileVel.set(0,D),W?U+=.2*(J-U):(Z.push({time:we,duration:1,type:b.type,x:u/2+(Math.random()-.5)*u/10,offsetY:-(Math.random()*u/10+u/20),flipped:Q}),b.projectileVel.set(0,D/2),o=!0))}}}catch(R){w.e(R)}finally{w.f()}if(o){U+=.2*(f-U);var S=se.getDeadLineParticleRate();se.setDeadLineParticleRate(S+.2*(oe-S))}},oe=.015,ce=[],de=u,le=u/7.5,se=y(u,f,L,j),ue=v(u,f,R,_,j),fe=g(u,0,F,j,A),pe=w(u,f,X,ce,Y,H),he=b(u,0,M,j,X,Y,H),je=O(u,0,j,I,C,K,k,A),ye=m(u,0,ce,Y,H,de,le),ve=x(M,j,ce,N),ge=P(u,f,M,j,Z,N,n),we=0,be=function(e){q+=.02*(U-q);for(var t=Z.length-1;t>=0;t--)we-Z[t].time>=Z[t].duration&&Z.splice(t,1);we+=e,fe.update(e,T,B,D),ae(e),ie(),ye.update(e,B,we),pe.update(e,B,q),z.setPosition(0,0),j.setProjection(z.combined),j.begin(),ue.update(e,B,q),se.update(e,we),j.end(),z.setPosition(0,B-q),j.setProjection(z.combined),j.begin(),fe.draw(),je.draw(T,B,Q,W,we,te),he.draw(),ve.draw(we),ge.draw(we,B),j.end()},e.abrupt("return",s({update:be,destroy:function(){S.cleanup(),document.removeEventListener("keydown",re)}}));case 71:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,n,o,d,l,s,u,f,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main"),r=document.getElementById("info"),n=document.getElementById("loading"),o=Object(c.k)(t,1),d=Object(i.a)(o,2),l=d[0],s=d[1],u=t.getContext("webgl"),f={width:l,height:s,canvas:t,gl:u,pixelRatio:1,setCurrentScreen:function(e){f.currentScreen&&f.currentScreen.destroy(),f.currentScreen=e}},e.t0=f,e.next=9,M(f);case 9:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1),n.style.display="none",u.clearColor(1,1,1,1),p=function(e){u.clear(u.COLOR_BUFFER_BIT),f.currentScreen&&f.currentScreen.update(e)},h=Object(c.e)(p),setInterval((function(){return r.innerHTML="FPS: ".concat(Math.floor(h.getFps()))}),1e3);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[29,1,2]]]);
//# sourceMappingURL=main.7c608dba.chunk.js.map