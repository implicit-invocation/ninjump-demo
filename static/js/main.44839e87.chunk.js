(this["webpackJsonpcurnon-ninjump"]=this["webpackJsonpcurnon-ninjump"]||[]).push([[0],{28:function(e,t,n){e.exports=n(56)},30:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(5),o=n(4),c=(n(30),n(0)),s=function(){},d=function(e){var t=e.update,n=void 0===t?s:t,a=e.destroy;return{update:n,destroy:void 0===a?s:a}},h=n(2),l=n(11),u=n.n(l),f=n(3),p=function(e,t,n,a){for(var r=n.findRegion("deadline-back-gradient"),i=n.findRegion("deadline-front-gradient"),o=n.findRegion("single-note"),s=n.findRegion("single-paper"),d=n.findRegion("deadline-base"),l=n.findRegion("paper_stack"),u=Object(c.d)(.1,n.findRegions("paper_stack")),p=e/30,g=e,w=g/r.width*r.height,v=t-w,j=g/d.width*d.height,b=t-j/2,y=g/i.width*i.height,m=t-y,O=e/4,x=O/l.width*l.height,P=t-x,M=[],C=0;C<4;C++)M[C]=.5*Math.random();var I=0,N=.15,S=[],z=-t/2,R=.75*t;return{setDeadLineParticleRate:function(e){N=e},getDeadLineParticleRate:function(){return N},update:function(n,c){for(I+=n;I>=N;){I-=N;var l=Math.random()>.5?0:1;S.push({x:Math.random()*e,y:t,size:0===l?2*p:p,speedY:z,type:l,rotation:Math.random()*Math.PI/2})}var w,C=Object(h.a)(S);try{for(C.s();!(w=C.n()).done;){var T=w.value;T.speedY+=R*n,T.y=T.y+T.speedY*n,T.y>t&&(T.expired=!0)}}catch(F){C.e(F)}finally{C.f()}for(var k=S.length-1;k>=0;k--)S[k].expired&&S.splice(k,1);r.draw(a,0,v,g,v),d.draw(a,0,b,g,j);for(var L=0;L<3;L++)u.getKeyFrame(c+M[L],f.a.LOOP_PINGPONG).draw(a,O*L+O/2,P-x/8,O,x);var _,A=Object(h.a)(S);try{for(A.s();!(_=A.n()).done;){var H=_.value;(0===H.type?s:o).draw(a,H.x,H.y,H.size,H.size,H.size/2,H.size/2,H.rotation)}}catch(F){A.e(F)}finally{A.f()}for(var G=0;G<4;G++)u.getKeyFrame(c+M[G],f.a.LOOP_PINGPONG).draw(a,O*G,P,O,x);i.draw(a,0,m,g,y)}}},g=[],w=function(e,t,n){g.length=0;for(var a=n;a>e;)a-=t;for(;a<-t;)a+=t;var r=a;do{g.push(a),a+=t}while(a<e);for(a=r;a>0;)a-=t,g.push(a);return g},v=function(e,t,n,a,r){var i=e,o=i/n.width*n.height,c=i/a.width*a.height;return{update:function(e,s,d){var l,u=w(t,c,.5*(-s+d)),f=Object(h.a)(u);try{for(f.s();!(l=f.n()).done;){var p=l.value;r.draw(a,0,p,i,c)}}catch(b){f.e(b)}finally{f.f()}u=w(t,o,-s+d);var g,v=Object(h.a)(u);try{for(v.s();!(g=v.n()).done;){var j=g.value;r.draw(n,0,j,i,o)}}catch(b){v.e(b)}finally{v.f()}}}},j=function(e,t,n,a,r){var i=[],o=0,c=e/30,s=e/7.5;return{update:function(e,t,n,a){for(o+=e;o>=.075;)o-=.075,i.push({x:t+r/2+(Math.random()-.5)*s,y:n+r/2+(Math.random()-.5)*s,speedY:a/2,type:Math.random()<.3?0:Math.random()<.5?1:2,rotation:Math.random()*Math.PI/2,duration:3*Math.random(),t:0,size:c});var d,l=Object(h.a)(i);try{for(l.s();!(d=l.n()).done;){var u=d.value;u.t+=e,u.y+=u.speedY*e}}catch(g){l.e(g)}finally{l.f()}for(var f=i.length-1;f>=0;f--){var p=i[f];p.t>=p.duration&&i.splice(f,1)}},draw:function(){var e,t=Object(h.a)(i);try{for(t.s();!(e=t.n()).done;){var r=e.value,o=(r.duration-r.t)/r.duration;o=o*o*(3-2*o),a.setColor(0,0,0,.75*o),a.draw(n,r.x-r.size/2+r.size/5,r.y-r.size/2+r.size/5,r.size,r.size,r.size/2,r.size/2,r.rotation),0===r.type&&a.setColor(1,.494,.725,o),1===r.type&&a.setColor(.478,.988,1,o),2===r.type&&a.setColor(1,.969,.251,o),a.draw(n,r.x-r.size/2,r.y-r.size/2,r.size,r.size,r.size/2,r.size/2,r.rotation),a.setColor(1,1,1,1)}}catch(c){t.e(c)}finally{t.f()}}}},b=function(e,t,n,a,r,i,o){var c=r,s=e/10;return{update:function(o,d,h){for(var l=d+h,u=n.length-1;u>=0;u--){n[u]-r>l&&n.splice(u,1)}for(var f=a.length-1;f>=0;f--){a[f].y>n[0]&&a.splice(f,1)}for(;c>l-2*t-r;)if(c-=r,n.push(c),!(c>-t)&&Math.random()<=.4){var p=Math.floor(4*Math.random()),g=Math.random()>.5?0:1,w=0===p?3*s:2*s,v=0===p?s/2:2*s;a.push({wallIndex:g,y:0===p?c-r:c-r-.9*v,type:p,width:w,height:v,x:0===g?i:e-i-w})}}}},y=function(e,t,n,a,r,i,o){return{draw:function(){a.setColor(0,0,0,.75);var t,s=Object(h.a)(r);try{for(s.s();!(t=s.n()).done;){var d=t.value;Object(c.h)(a,n,0,d-i,o,i),Object(c.h)(a,n,e-o,d-i,o,i)}}catch(l){s.e(l)}finally{s.f()}a.setColor(1,1,1,1)}}},m=function(e,t,n,a,r,i,o,s,d,h){var l="".concat(0===d?"man":"girl","_running_").concat(h+1),u="".concat(0===d?"man":"girl","_jump_").concat(h+1),p=a.findRegions(l),g=a.findRegions(u),w=Object(c.d)(.05,p),v=Object(c.d)(.1,g),j=Object(c.d)(.05,i.findRegions("bullet_hit").slice(1,-1)),b=r.findRegions("slash"),y=Object(c.d)(.03,b),m=Object(c.d)(.1,o.findRegions("watch_buff")),O=.1*e,x=.8*e,P=x*b[0].height/b[0].width,M=!0;return{draw:function(e,t,r,i,o,b,C,I,N,S){h!==I&&function(e){l="".concat(0===d?"man":"girl","_running_").concat(e+1),u="".concat(0===d?"man":"girl","_jump_").concat(e+1),p=a.findRegions(l),g=a.findRegions(u),w=Object(c.d)(.05,p),v=Object(c.d)(.1,g)}(h=I);var z=s/2,R=r?1:-1;if(N>o-.1)return n.setColor(.478,.988,1,1),j.getKeyFrame(o-N,f.a.LOOP_PINGPONG).draw(n,e,t,2*s,s),void n.setColor(1,1,1,1);if(M||y.getKeyFrame(o-b,f.a.NORMAL).draw(n,O,t,x,P,x/2,P/2,0,R,1.5),i?(M=!1,v.getKeyFrame(o-b,f.a.NORMAL).draw(n,e,t,150*s/115,s,z,0,0,R,1)):w.getKeyFrame(o,f.a.LOOP).draw(n,e,t,s,s,z,0,0,R,1),C>=o){var T=m.getKeyFrame(o-(C-2.5),f.a.LOOP_PINGPONG);T&&T.draw(n,e,t,s,s,s/2,s/2,0,1.5,1.5)}if(S>=o){var k=m.getKeyFrame(o-(S-2.5),f.a.LOOP_PINGPONG);k&&k.draw(n,e,t,s,s,s/2,s/2,0,1.5,1.5)}}}},O=function(e,t,n,a,r,i,o){var s=new c.c;return{update:function(t,d,l){var u,f=Object(h.a)(n);try{for(f.s();!(u=f.n()).done;){var p=u.value;if(p.type>0&&!p.fired&&Math.abs(p.y-d)<a){p.fired=!0,p.projectilePos=new c.c(0===p.wallIndex?r:e-r,p.y);var g=new c.c;g.set(0===p.wallIndex?i:-i,0);var w=-Math.random()*Math.PI/6-Math.PI/18;g.rotateRad(0===p.wallIndex?w:-w),p.projectileVel=g,p.projectileSize=o,p.projectileStart=l}p.fired&&(s.setVector(p.projectileVel).scale(t),p.projectilePos.addVector(s))}}catch(v){f.e(v)}finally{f.f()}}}},x=[null,"bed","bath","tivi"],P=function(e,t,n,a){for(var r=[],i=[],o=[],s=Object(c.d)(.05,a.findRegions("bullet_hit").slice(1,-1)),d=Object(c.d)(.05,a.findRegions("coin")),l=0;l<x.length;l++)if(0!==l){var u=a.findRegions(x[l]);r[l]=Object(c.d)(.1,u),i[l]=Object(c.d)(.1,u.slice(0,4)),o[l]=Object(c.d)(.1,a.findRegions("".concat(x[l],"_bullet")))}return{draw:function(a){var l,u=Object(h.a)(n);try{for(u.s();!(l=u.n()).done;){var p=l.value,g=0===p.wallIndex?-1:1;0===p.type?(t.setColor(0,0,0,.75),!p.hit&&Object(c.h)(t,e,p.x,p.y,p.width,p.height),t.setColor(1,1,1,1)):p.fired?(!p.hit&&r[p.type].getKeyFrame(a-p.projectileStart,f.a.NORMAL).draw(t,p.x,p.y,p.width,p.height,p.width/2,p.height,0,1.5*g,1.5),p.projectileHit?a-p.projectileHitTime<=.55&&(t.setColor(0,0,0,.25),s.getKeyFrame(a-p.projectileHitTime,f.a.NORMAL).draw(t,p.projectilePos.x-p.projectileSize,p.projectilePos.y,2*p.projectileSize,p.projectileSize,p.projectileSize,p.projectileSize/2,0,1.5,1.5),t.setColor(1,1,1,1),s.getKeyFrame(a-p.projectileHitTime,f.a.NORMAL).draw(t,p.projectilePos.x-p.projectileSize+.05*p.projectileSize,p.projectilePos.y+.05*p.projectileSize,2*p.projectileSize,p.projectileSize,p.projectileSize,p.projectileSize/2,0,1.5,1.5),d.getKeyFrame(a-p.projectileHitTime,f.a.NORMAL).draw(t,p.projectilePos.x,p.projectilePos.y+p.projectileSize/2,p.projectileSize,p.projectileSize/8*10,p.projectileSize/2,0,0,2,2)):o[p.type].getKeyFrame(a,f.a.LOOP_PINGPONG).draw(t,p.projectilePos.x-p.projectileSize/2,p.projectilePos.y-p.projectileSize/2,p.projectileSize,p.projectileSize,p.projectileSize/2,p.projectileSize/2,0,1.2,1.2)):!p.hit&&i[p.type].getKeyFrame(a,f.a.LOOP_PINGPONG).draw(t,p.x,p.y,p.width,p.height,p.width/2,p.height,0,1.5*g,1.5)}}catch(w){u.e(w)}finally{u.f()}}}},M=function(e,t,n,a,r,i,o,s){for(var d="ob_".concat(0===o?"man":"girl"),l=[null,"".concat(d,"_2"),"".concat(d,"_3"),"".concat(d,"_1")],u=i.findRegion("ob_man_1"),p=e/2,g=p*u.height/u.width,w=[],v=0;v<l.length;v++)if(0!==v){var j=i.findRegions(l[v]);w[v]=Object(c.d)(.05,j)}return{draw:function(i,o){r.length>0&&(a.setColor(0,0,0,.5),Object(c.h)(a,n,0,o-t,e,2*t),a.setColor(1,1,1,1));var s,d=Object(h.a)(r);try{for(d.s();!(s=d.n()).done;){var l=s.value;if(0!==l.type)w[l.type].getKeyFrame(i-l.time,f.a.NORMAL).draw(a,l.x-p/2,o+2*l.offsetY-g/2,p,g,p/2,g/2,0,l.flipped?1:-1,1)}}catch(u){d.e(u)}finally{d.f()}}}},C=function(e,t,n){var a=e/5,r=5,i=0;return{update:function(o,c,s,d){if((r-=o)<=0){switch(d){case 0:i=10*Math.random()-6+6;break;case 1:i=6*Math.random()-4+4;break;case 2:i=10*Math.random()-4+4}r=i,n.push({x:e/2,y:s-t,drawX:e/2,drawY:s-t,drawScale:1,time:c,width:a,height:a,type:Math.floor(3*Math.random())})}for(var h=n.length-1;h>=0;h--)n[h].y>s+2*t&&n.splice(h,1)}}},I=function(e,t,n,a,r,i){for(var o=[],s=0;s<3;s++)o.push(Object(c.d)(.1,a.findRegions("watch_".concat(s+1))));return{draw:function(e,t,a){var c,s=Object(h.a)(r);try{for(s.s();!(c=s.n()).done;){var d=c.value;e-d.hitTime>.5||(d.hit&&(d.drawX=d.drawX+.2*(t+i/2-d.drawX),d.drawY=d.drawY+.2*(a-d.drawY),d.drawScale=d.drawScale+.2*(.5-d.drawScale)),o[d.type].getKeyFrame(e,f.a.LOOP).draw(n,d.drawX-d.width/2,d.drawY-d.height/2,d.width,d.height,d.width/2,d.height/2,0,d.drawScale,d.drawScale))}}catch(l){s.e(l)}finally{s.f()}}}},N=n(6),S=function(e,t,n){var a,r=!1,i=0,o=Object(h.a)(n);try{for(o.s();!(a=o.n()).done;){var c=a.value;if(c.first===e&&c.second===t){i=c.amount,r=!0;break}r=!1}}catch(s){o.e(s)}finally{o.f()}return r?i:0},z=function e(t,n,a,r){var o=this;Object(N.a)(this,e),this.addToCache=function(e,t,n,a,r){for(var i=0,c=0;c<e.length;c++){var s=e.charCodeAt(c),d=e.charCodeAt(c-1),h=o.findRegions(s),l=S(s,d,o.kerningsData);o.cache.push({key:h,x:t+i+h.xoffset*o.scale+l*o.scale,y:n+h.yoffset*o.scale+a*o.scale+r,width:h.width*o.scale,height:h.height*o.scale}),i+=h.xadvance*o.scale}},this.beforeDrawing=function(e,t,n,a){if(o.preDraw){for(var r=0,c=0,s=[],d=0;d<a.length;d++){var h=a.charCodeAt(d),l=o.findRegions(h);32!==h?c+=l.xadvance*o.scale:(r=l.xadvance*o.scale,s.push(c),c=0)}var u=Math.max.apply(Math,s)+r;o.newbase=n,o.scale=o.newbase/o.baseLine;for(var f=(a=a.trim()).split("/n").map((function(e){return e.trim()})),p=0,g=0;g<f.length;g++){a=f[g],o.oriWidth=0;for(var w=0;w<a.length;w++){var v=a.charCodeAt(w),j=o.findRegions(v);w<a.length-1?o.oriWidth+=j.xadvance*o.scale:o.oriWidth+=j.width*o.scale}var b=o.oriWidth/o.fixedWidth;p=o.lineHeight*o.scale*g;var y=0,m="",O=0;if(b>1&&o.fixedWidth>u)for(var x=0;x<a.length;x++){m+=a[x];var P=a.charCodeAt(x);if((y+=o.findRegions(P).xadvance*o.scale)>=o.fixedWidth)for(var M=x;M>=0;){x--,M--;var C=o.findRegions(a.charCodeAt(x));if(y-=C.xadvance*o.scale,m=m.substring(0,m.length-1),y<=o.fixedWidth&&32===C.id){O=o.lineHeight*o.positionBreak.length,o.positionBreak.push(x),o.lastBreakIndex=x;for(var I=m.trim(),N=0,S=0,z=0;z<I.length;z++)S=o.findRegions(I.charCodeAt(z)),z===I.length-1?N+=S.width*o.scale:N+=S.xadvance*o.scale;var R=o.getPositionBasedOnMode(e,t,N),T=Object(i.a)(R,2),k=T[0],L=T[1];o.addToCache(I,k,L,O,p),y=0,M=-1,m=""}}if(x===a.length-1&&y<o.oriWidth){for(var _="",A=o.lastBreakIndex;A<=x;A++)_+=a[A];for(var H=_.trim(),G=0,F=0,W=0;W<H.length;W++)F=o.findRegions(H.charCodeAt(W)),W===H.length-1?G+=F.width*o.scale:G+=F.xadvance*o.scale;var B=o.getPositionBasedOnMode(e,t,G),K=Object(i.a)(B,2),Y=K[0],D=K[1];O=o.lineHeight*o.positionBreak.length,o.addToCache(H,Y,D,O,p)}}if(b<=1||o.fixedWidth<u){var V=o.getPositionBasedOnMode(e,t,o.oriWidth),E=Object(i.a)(V,2),X=E[0],U=E[1];o.addToCache(a,X,U,0,p)}}0===o.type&&(o.preDraw=!1),o.oriHeight=o.newbase}},this.getPositionBasedOnMode=function(e,t,n){return 0===o.align?e-=Math.round(n/2):1===o.align&&(e-=n),[e,t]},this.setAlignMode=function(e){o.align=e},this.setType=function(e){o.type=e},this.setLineHeight=function(e){o.lineHeight=e},this.setFixedGlyphWidth=function(e){o.fixedWidth=e},this.findRegions=function(e){for(var t=0;t<o.regions.length;t++)if(o.regions[t].id===e)return o.regions[t]},this.draw=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o.baseLine;if(0===o.type){o.preDraw&&o.beforeDrawing(n,a,r,t);for(var i=0;i<o.cache.length;i++){var c=o.cache[i];c.key.draw(e,c.x,c.y,c.width,c.height)}}if(1===o.type){o.beforeDrawing(n,a,r,t);for(var s=0;s<o.cache.length;s++){var d=o.cache[s];d.key.draw(e,d.x,d.y,d.width,d.height)}o.cache.length=0,o.positionBreak.length=0}},this.pageImage=t,this.regions=n,this.kerningsData=a,this.canvasWidth=r,this.type=0,this.align=2,this.lineHeight=t.lineHeight,this.baseLine=t.base,this.fixedWidth=r,this.position=new c.c(0,0),this.scale=0,this.newBase=0,this.oriWidth=0,this.oriHeight=0,this.positionBreak=[],this.lastBreakIndex=0,this.cache=[],this.preDraw=!0},R=0,T=1,k=1;function L(e,t){for(var n=e.split("/"),a=t.split("/"),r=[],i=0,o=n.length;i<o;i++)if(".."===n[i])r.pop();else{if("."===n[i])continue;r.push(n[i])}for(var c=0,s=a.length;c<s;c++)if(".."===a[c])r.pop();else{if("."===a[c])continue;r.push(a[c])}return r.join("/")}var _=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a){var i,o,s,d,h,l,u,f,p,g,w,v,j,b,y,m,O,x,P,M,C,I,N,S,R,T,k,_,A,H,G,F,W,B,K,Y,D,V,E,X,U,J,q,Q,Z,$,ee,te,ne,ae,re,ie,oe,ce,se,de,he,le,ue,fe,pe,ge,we,ve,je,be,ye,me,Oe;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n).then((function(e){return e.text()}));case 2:i=e.sent,o=[],s=[],d=[],h=null,l=i.split("\n"),u=0,p=[],g=!1;case 11:if(void 0!==(w=l[u])){e.next=16;break}return g=!1,e.abrupt("break",24);case 16:if(2===w.split(" ").length&&("kernings"===w.split(" ")[0]&&(g=!0),u++,w=l[u]),0===w.trim().length&&(h=null),!g&&null!==h){for(f=(f=w.split(" ").map((function(e){return e.trim()}))).filter((function(e){return""!==e})),p.length=0,v=1;v<f.length;v++)p.push(f[v].split("=")[1]);j=parseInt(p[0],10),b=parseInt(p[1],10),y=parseInt(p[2],10),m=parseInt(p[3],10),O=parseInt(p[4],10),x=parseInt(p[5],10),P=parseInt(p[6],10),M=parseInt(p[7],10),C=parseInt(p[8],10),I={id:j,left:b,top:y,width:m,height:O,xoffset:x,yoffset:P,xadvance:M,page:h,id_page:C},s.push(I)}if(g&&null!==h){for(f=(f=w.split(" ").map((function(e){return e.trim()}))).filter((function(e){return""!==e})),p.length=0,N=1;N<f.length;N++)p.push(f[N].split("=")[1]);S=parseInt(p[0],10),R=parseInt(p[1],10),T=parseInt(p[2],10),d.push({first:S,second:R,amount:T})}if(null===h){for(f=w.split(" ").map((function(e){return e.trim()})),k=1;k<f.length;k++)p.push(f[k].split("=")[1]);for(_=p[0],A=parseInt(p[1],10),H=0!==parseInt(p[2],10),G=0!==parseInt(p[3],10),F=p[4],W=parseInt(p[5],10),B=parseInt(p[6],10),K=parseInt(p[7],10),Y=parseInt(p[8],10),D=p[9].split(",").map((function(e){return parseInt(e,10)})),V=p[10].split(",").map((function(e){return parseInt(e,10)})),E=parseInt(p[11],10),u++,w=l[u],p.length=0,f=w.split(" ").map((function(e){return e.trim()})),X=1;X<f.length;X++)p.push(f[X].split("=")[1]);for(U=parseInt(p[0],10),J=parseInt(p[1],10),q=parseInt(p[2],10),Q=parseInt(p[3],10),Z=parseInt(p[4],10),$=parseInt(p[5],10),ee=parseInt(p[6],10),te=parseInt(p[7],10),ne=parseInt(p[8],10),ae=parseInt(p[9],10),u++,w=l[u],p.length=0,f=w.split(" ").map((function(e){return e.trim()})),re=1;re<f.length;re++)p.push(f[re].split("=")[1]);ie=parseInt(p[0],10),oe=p[1].split('"'),ce=L(n,"../".concat(oe[1])),h={file:ce,page_id:ie,face:_,size:A,bold:H,italic:G,charset:F,unicode:W,stretchH:B,smooth:K,aa:Y,padding:D,spacing:V,outline:E,lineHeight:U,base:J,scaleW:q,scaleH:Q,num_of_pages:Z,packed:$,alphaChnl:ee,redChnl:te,greenChnl:ne,blueChnl:ae},o.push(h)}u++,e.next=11;break;case 24:se=0,de=o;case 25:if(!(se<de.length)){e.next=35;break}return he=de[se],e.next=29,Object(c.j)(t,he.file,a);case 29:he.texture=e.sent,he.invTextWidth=1/he.texture.width,he.invTextHeight=1/he.texture.height;case 32:se++,e.next=25;break;case 35:for(le=[],ue=0,fe=s;ue<fe.length;ue++)pe=fe[ue],ge=pe.left,we=pe.top,ve=pe.width,je=pe.height,be=pe.page,ye=be.texture,me=be.invTexWidth,Oe=be.invTexHeight,le.push(new c.b(ye,ge,we,ve,je,pe,me,Oe));return e.abrupt("return",{getLineHeight:function(){return h.lineHeight},getPages:function(){return o},getRegions:function(){return le},findRegions:function(e){for(var t=0;t<le.length;t++)if(le[t].id===e)return le[t]},setNewText:function(e){return new z(h,le,d,e)}});case 38:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=e.x*n,r=e.y*n,i=Math.min(t[0],t[2],t[4],t[6]),o=Math.max(t[0],t[2],t[4],t[6]),c=Math.min(t[1],t[3],t[5],t[7]),s=Math.max(t[1],t[3],t[5],t[7]);return!(a<i||a>o||r<c||r>s)},H=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,i){var s,h,l,f,p,g,w,v,j,b,y,m,O,x,P,M,C,I,N,S,z,T,k,L,_,H,G,F,W,B,K,D,V,E;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(K in s=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,Y(t);case 3:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=t.gl,l=t.width,f=t.height,p=t.canvas,g=t.font,w=t.gender,v=t.assets.endScreen,j=t.assets,b=j.achive1,y=j.achive2,m=j.achive3,O=j.characterAtlas,x=u()(h),P=new c.a(p),M=Object(c.e)(h),C=Object(c.g)(l,f,l,f),I=O.findRegion("girl_running_1",0),N=O.findRegion("man_running_1",0),S=[l/7,l/7*I.height/I.width],z=[l/7,l/7*N.height/N.width],T=g.setNewText(l),k=g.setNewText(l),L=g.setNewText(l),_=g.setNewText(l),G=(H=l)*v.height/v.width,W=(F=l/20)*b.height/b.width,B=[n/50,(n-50)/150,(n-200)/200])B[K]>1&&(B[K]=1);return n<=50?B[1]=B[2]=0:n<=200&&n>50?B[2]=0:400===n&&(B[2]=1),D=[f/4.5+f/6*2+f/90+f/6*(1-B[0]),f/4.5+f/6+f/180+f/6*(1-B[1]),f/4.5+f/6*(1-B[2])],V=0,E=!0,e.abrupt("return",d({update:function(e){var t,r,o=[1.38*l/3,1.55*f/3,1.38*l/3+l/2.65,1.55*f/3,1.38*l/3,1.55*f/3+f/15,1.38*l/3+l/2.65,1.55*f/3+f/15],c=[.94*l/3,2.56*f/4,.94*l/3+l/2.65,2.56*f/4,.94*l/3,2.56*f/4+l/28,.94*l/3+l/2.65,2.56*f/4+l/28];E&&(V+=e),V>=1&&(V=0,P.addEventListener("touchStart",(function(e,t){var n={x:e,y:t};A(n,o)&&(E=!1,window.location.href="https://curnonwatch.com/"),A(n,c)&&(E=!1,s())}))),C.setPosition(0,0),M.setProjection(C.combined),M.begin(),M.setColor(1,1,1,1),M.draw(v,l/2-H/2,f/2-G/2,H,G),M.draw(b,l/4.1-1.3*F,f/4.5+f/6*2+f/60-W/2,F,W),M.draw(y,l/4.1-1.3*F,f/4.5+f/6+f/120-W/2,F,W),M.draw(m,l/4.1-1.3*F,f/4.5-W/2,F,W),M.setColor(.87,.87,.87,1),M.draw(x,l/4.1,f/4.5,l/38,f/6),M.draw(x,l/4.1,f/4.5+f/6+f/180,l/38,f/6),M.draw(x,l/4.1,f/4.5+f/6*2+f/90,l/38,f/6),M.setColor(1,.5,0,1),M.draw(x,l/4.1,D[0],l/38,f/6*B[0]),M.draw(x,l/4.1,D[1],l/38,f/6*B[1]),M.draw(x,l/4.1,D[2],l/38,f/6*B[2]),M.setColor(0,0,0,1),T.setAlignMode(R),T.draw(M,"x".concat(n),1.9*l/3,f/2.65,l/20),L.setAlignMode(R),L.draw(M,"x".concat(i),2.2*l/3,f/3.1,l/20),k.setAlignMode(R),k.draw(M,"".concat(Math.floor(-1*Math.floor(a)/10),"M"),1.93*l/3,f/2.15,l/14),M.setColor(1,0,0,1),_.setAlignMode(R),_.draw(M,"TAP TO PLAY AGAIN",l/2,2.56*f/4,l/28),M.setColor(1,1,1,1),n<=50?(t=D[0],r=D[0]):n>50&&n<=200?(t=D[1],r=D[1]):(t=D[2],r=D[2]),0===w?N.draw(M,l/3.6,r-z[1]/2,z[0],z[1],z[0]/2,z[1]/2,0,-1,1):I.draw(M,l/3.6,t-S[1]/2,S[0],S[1],S[0]/2,S[1]/2,0,-1,1),M.end()},destroy:function(){P.cleanup()}}));case 27:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),G=function(e,t){var n=e.gl,a=e.width,r=e.height,i=e.font,o=e.assets.coin,s=a/17,h=s*o.height/o.width,l=i.setNewText(a),u=Object(c.e)(n),f=Object(c.g)(a,r,a,r);return d({update:function(e){f.setPosition(0,0),u.setProjection(f.combined),u.begin(),u.draw(o,3.8*a/5,1*r/30,s,h),l.setType(k),u.setColor(.4,.2,0,1),l.draw(u,"".concat(e),4.15*a/5,1*r/30,a/20),u.setColor(1,1,1,1),u.end()},destroy:function(){}})},F=function(e){for(var t=e.gl,n=e.width,a=e.height,r=e.assets.watchAtlas,i=Object(c.e)(t),o=Object(c.g)(n,a,n,a),s=[],d=0;d<3;d++)s.push(r.findRegion("watch_".concat(d+1),0));var h=n/8.5,l=0;return{update:function(e){o.setPosition(0,0),i.setProjection(o.combined),i.begin(),i.setColor(1,1,1,1);for(var t=0;t<e.length;t++)"zoomout"===e[t].state&&(e[t].scale-=.1,e[t].scale<=0&&(e[t].state="visible")),"enable"!==e[t].state&&"zoomout"!==e[t].state||s[e[t].type].draw(i,n/8+l-h/2,a/18-h/2,h,h,h/2,h/2,0,e[t].scale,e[t].scale),"visible"===e[t].state&&e.splice(t,1),l+=h;l=0,i.end()}}},W=function(e,t,n,a,r){var i=r.button,o=n/3.8;e.setColor(1,1,1,1),Object(c.h)(e,i,n/2-o/2,4.7*a/6,o,o)},B=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,i,s,l,f,g,w,x,N,S,z,R,T,k,L,_,B,K,Y,D,V,E,X,U,J,q,Q,Z,$,ee,te,ne,ae,re,ie,oe,ce,se,de,he,le,ue,fe,pe,ge,we,ve,je,be,ye,me,Oe,xe,Pe,Me,Ce,Ie,Ne,Se,ze,Re,Te,ke,Le,_e,Ae,He,Ge,Fe,We,Be,Ke,Ye,De,Ve,Ee;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.gender,a=t.gl,i=t.width,s=t.height,l=t.canvas,f=t.assets,g=0,w=Object(c.e)(a),x=Object(c.g)(i,s,i,s),N=u()(a),S=new c.a(l),z=f.bg1,R=f.bg2,T=f.deadLineAtlas,k=f.characterAtlas,L=f.slashAtlas,_=f.obstacleAtlas,B=f.noteTex,K=f.watchAtlas,Y=i/z.width*z.height,V=Y/7,E=2*i,q=0,Q=0,Z=0,$=0,ee=function(){return q>=De},te=function(){return Q>=De},ne=D=.05*i,ae=0,re=0,ie=X=.75*-s,oe=J=.5*s,ce=J,se=!1,de=!1,he=D,le=i-D-(U=i/5),ue=0,fe=[],pe=[],ge=[],we=function(e,t){var n=!1;if(3===ge.length&&"enable"===ge[0].state){var a=i/3.8;if(A({x:e,y:t},[i/2-a/2,4.7*s/6,i/2-a/2+a,4.7*s/6,i/2-a/2,4.7*s/6+a,i/2-a/2+a,4.7*s/6+a])){Q=De+2.5,oe+=.5*(J-oe);var r,o=Object(h.a)(ge);try{for(o.s();!(r=o.n()).done;){r.value.state="zoomout"}}catch(c){o.e(c)}finally{o.f()}n=!0}}!n&&ve()},ve=function(){de||pe.length>0||(re=se?-E:E,de=!0,ue=De)},S.addEventListener("touchStart",we),document.addEventListener("keydown",ve),je=function(e){if(de){var t=!1;return e>le&&(ne=le,t=!0),e<he&&(ne=he,t=!0),t&&(re=0,de=!1,se=!se),t}},be=function(e){var t=1;pe.length>0&&(t=.5),te()&&(t*=1.5),ae+=ie*e*t;var n=re*e;je(ne+n)||(ne+=n)},ye=function(e){var t,n=ne,a=ne+U,r=ae,i=ae+U,o=Object(h.a)(Ne);try{for(o.s();!(t=o.n()).done;){var c=t.value;if(!c.hit){var s=c.x-c.width/2,d=c.x+c.width/2,l=c.y-c.height/2,u=c.y+c.height/2;n<d&&a>s&&r<u&&i>l&&($+=1,c.hit=!0,ge.length<=2&&ge.push({type:c.type,stateTime:0,state:"enable",scale:1}),c.hitTime=De)}}}catch(f){o.e(f)}finally{o.f()}},me=function(e){var t,n=ne,a=ne+U,r=ae,o=ae+U,c=!1,d=Object(h.a)(Ie);try{for(d.s();!(t=d.n()).done;){var l=t.value;if(!l.hit){var u=l.width,f=l.height,p=l.x,g=l.x+u,w=l.y,v=l.y+f;n<g&&a>p&&r<v&&o>w&&!de&&(l.hit=!0,ge.length>0&&(q=De+.2,ge[0].state="zoomout"),ee()||te()||(c=!0,pe.push({time:De,duration:1,type:l.type,x:i/2+(Math.random()-.5)*i/20,offsetY:-(Math.random()*i/20+i/40),flipped:se})))}}}catch(N){d.e(N)}finally{d.f()}var j,b=Object(h.a)(Ie);try{for(b.s();!(j=b.n()).done;){var y=j.value;if(y.fired&&!y.projectileHit){var m=y.projectilePos,O=y.projectileSize,x=m.x-O/3,P=m.x+O/3,M=m.y-O/3,C=m.y+O/3;n<P&&a>x&&r<C&&o>M&&(y.projectileHit=!0,y.projectileHitTime=De,y.projectileVel.set(0,ie),de||ee()||te()||0!==ge.length?(ge.length>0&&!de&&(q=De+.2,ge[0].state="zoomout"),oe+=.1*(J-s),oe=Math.max(oe,J),Z+=5):(pe.push({time:De,duration:1,type:y.type,x:i/2+(Math.random()-.5)*i/10,offsetY:-(Math.random()*i/10+i/20),flipped:se}),y.projectileVel.set(0,ie/2),c=!0))}}}catch(N){b.e(N)}finally{b.f()}if(c){oe+=.2*(s-J);var I=Re.getDeadLineParticleRate();Re.setDeadLineParticleRate(I+.2*(Ce-I))}},Oe=-2,xe=[0,50,200],Pe=[1,1.25,1.5],Me=function(){for(var e=0;e<xe.length;e++)g>=e||Z>xe[e]&&(g=e,Oe=De,ie=X*Pe[e])},Ce=.015,Ie=[],Ne=[],Se=i,ze=i/7.5,Re=p(i,s,T,w),Te=v(i,s,z,R,w),ke=j(i,0,B,w,U),Le=b(i,s,fe,Ie,V,D),_e=y(i,0,N,w,fe,V,D),Ae=m(i,0,w,k,L,_,K,U,n,g),He=O(i,0,Ie,V,D,Se,ze),Ge=P(N,w,Ie,_),Fe=M(i,s,N,w,pe,_,n),We=C(i,s,Ne),Be=I(0,0,w,K,Ne,U),Ke=G(t),Ye=F(t),De=0,Ve=function(){return ce>=.96*s},Ee=function(){var e=Object(o.a)(r.a.mark((function e(n){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ve()){e.next=34;break}for((ee()||te())&&(pe.length=0),ce+=.02*(oe-ce),a=pe.length-1;a>=0;a--)De-pe[a].time>=pe[a].duration&&pe.splice(a,1);De+=n,ke.update(n,ne,ae,ie),be(n),me(),ye(),Me(),He.update(n,ae,De),Le.update(n,ae,ce),We.update(n,De,ae,g),x.setPosition(0,0),w.setProjection(x.combined),w.begin(),Te.update(n,ae,ce),Re.update(n,De),3===ge.length&&W(w,0,i,s,f),w.end(),Ye.update(ge),Ke.update(Z),x.setPosition(0,ae-ce),w.setProjection(x.combined),w.begin(),ke.draw(),Ae.draw(ne,ae,se,de,De,ue,q,g,Oe,Q),Be.draw(De,ne,ae),_e.draw(),Ge.draw(De),Fe.draw(De,ae),w.end(),e.next=39;break;case 34:return e.t0=t,e.next=37,H(t,Z,ae,$);case 37:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1);case 39:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.abrupt("return",d({update:Ee,destroy:function(){S.cleanup(),document.removeEventListener("keydown",ve)}}));case 69:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(o.a)(r.a.mark((function e(t){var n,a,i,s,h,l,u,f,p,g,w,v,j,b,y,m,O,x;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,B(t);case 3:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=t.gl,i=t.width,s=t.height,h=t.canvas,l=t.font,u=new c.a(h),f=t.assets.instruction,g=(p=i)*f.height/f.width,w=Object(c.e)(a),v=Object(c.g)(i,s,i,s),j=l.setNewText(i),b=l.setNewText(i),y=l.setNewText(i),m=i/30,O=0,x=!0,e.abrupt("return",d({update:function(e){x&&(O+=e),O>=1&&(O=0,u.addEventListener("touchStart",(function(e,t){x=!1,n()}))),v.setPosition(0,0),w.setProjection(v.combined),w.begin(),w.setColor(1,1,1,1),w.draw(f,i/2-p/2,s/2-g/2,p,g),j.setFixedGlyphWidth(i/3),j.draw(w,"NH\u1ea4N V\xc0O M\xc0N H\xccNH \u0110\u1ec2 NH\u1ea2Y",2*i/3,s/7,m),b.setAlignMode(T),b.setFixedGlyphWidth(i/2.7),b.draw(w,"CH\xc9M NH\u1eeeNG V\u1eacT TR\xcaN KH\xd4NG C\xd3 TH\u1ec2 THU \u0110\u01af\u1ee2C M\u1ed8T L\u01af\u1ee2NG V\xc0NG",i/2.6,s/2.6,m),y.setFixedGlyphWidth(i/3),y.draw(w,"THU TH\u1eacP \u0110\u1ee6 S\u1ed0 L\u01af\u1ee2NG \u0110\u1ed2NG H\u1ed2 S\u1ebc GI\xdaP B\u1ea0N S\u1eec D\u1ee4NG K\u1ef8 N\u0102NG \u0110\u1eb6C BI\u1ec6T",1.9*i/3,2.8*s/4,m),w.end()},destroy:function(){u.cleanup()}}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(e){var t,n=function(){var t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,K(e);case 3:return t.t1=t.sent,t.abrupt("return",t.t0.setCurrentScreen.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=e.gl,i=e.width,s=e.height,h=e.assets,l=e.canvas,u=e.title.setNewText(i),f=Object(c.e)(a),p=Object(c.g)(i,s,i,s),g=new c.a(l),w=h.woman,v=h.man,j=h.tray,b=h.bg2,y=h.bg1,m=i,O=m/y.width*y.height,x=m/b.width*b.height,P=s/4,M=P*w.width/w.height,C=P*v.width/v.height,I=i/4,N=I*j.height/j.width,S=i/2-I/2,z=2.2*s/3,T=[S-i/5+C/2,1.46*s/3,S-i/5+I/2+C,1.46*s/3,S-i/5+I/2,1.46*s/3+P,S-i/5+I/2+C,1.46*s/3+P],L=[S+i/5+I/2-M/2,1.46*s/3,S+i/5+I/2-M/2+M,1.46*s/3,S+i/5+I/2-M/2,1.46*s/3+P,S+i/5+I/2-M/2+M,1.46*s/3+P];return g.addEventListener("touchStart",(function(a,r){A(t={x:a,y:r},T)&&(e.gender=0,n()),A(t,L)&&(e.gender=1,n())})),d({update:function(e){p.setPosition(0,0),f.setProjection(p.combined),f.begin(),f.draw(b,0,0,m,x),f.draw(y,0,0,m,O),f.setColor(1,0,0,1),u.setAlignMode(R),u.setType(k),u.setFixedGlyphWidth(i),f.setColor(0,.2,.4,1),u.draw(f,"L\u1ef0A CH\u1eccN/n NH\xc2N V\u1eacT C\u1ee6A B\u1ea0N",i/2,s/3.5,i/18),f.setColor(1,1,1,1),f.draw(v,S-i/5+C/2,1.46*s/3,C,P),f.draw(w,S+i/5+I/2-M/2,1.46*s/3,M,P),f.draw(j,S-i/5,z,I,N),f.draw(j,S+i/5,z,I,N),f.end()},destroy:function(){g.cleanup()}})};(function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,o,s,d,h,l,u,f,p,g,w,v,j,b,y,m,O,x,P,M,C,I,N,S,z,R,T,k,L,A,H,G,F;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementById("main"),n=document.getElementById("loading"),a=Object(c.k)(t,1),o=Object(i.a)(a,2),s=o[0],d=o[1],h=t.getContext("webgl"),e.next=6,_(h,"./myriad.fnt");case 6:return l=e.sent,e.next=9,_(h,"./tittle.fnt");case 9:return u=e.sent,f={title:u,font:l,width:s,height:d,canvas:t,gl:h,pixelRatio:1,setCurrentScreen:function(e){f.currentScreen&&f.currentScreen.destroy(),f.currentScreen=e}},p=0,n.innerHTML="Loading (".concat(p," / 7)..."),g=function(e){return e.then((function(e){return p++,n.innerHTML="Loading (".concat(p," / 18)..."),e}))},e.next=16,Promise.all([g(Object(c.j)(h,"./test-bg.png")),g(Object(c.j)(h,"./test-bg2.jpg")),g(Object(c.i)(h,"./deadline.atlas")),g(Object(c.i)(h,"./test.atlas")),g(Object(c.i)(h,"./slash.atlas")),g(Object(c.i)(h,"./obstacle.atlas")),g(Object(c.j)(h,"./note.png")),g(Object(c.i)(h,"./watch.atlas")),g(Object(c.j)(h,"./man.png")),g(Object(c.j)(h,"./woman.png")),g(Object(c.j)(h,"./tray.png")),g(Object(c.j)(h,"./end-screen.png")),g(Object(c.j)(h,"./archivement_1.png")),g(Object(c.j)(h,"./archivement_2.png")),g(Object(c.j)(h,"./archivement_3.png")),g(Object(c.j)(h,"./man jump.png")),g(Object(c.j)(h,"./instruction.png")),g(Object(c.j)(h,"./coin.png")),g(Object(c.j)(h,"./button.png"))]);case 16:return w=e.sent,v=Object(i.a)(w,19),j=v[0],b=v[1],y=v[2],m=v[3],O=v[4],x=v[5],P=v[6],M=v[7],C=v[8],I=v[9],N=v[10],S=v[11],z=v[12],R=v[13],T=v[14],k=v[15],L=v[16],A=v[17],H=v[18],G={bg1:j,bg2:b,deadLineAtlas:y,characterAtlas:m,slashAtlas:O,obstacleAtlas:x,noteTex:P,watchAtlas:M,man:C,woman:I,tray:N,endScreen:S,achive1:z,achive2:R,achive3:T,manjump:k,instruction:L,coin:A,button:H},f.assets=G,e.t0=f,e.next=42,Y(f);case 42:e.t1=e.sent,e.t0.setCurrentScreen.call(e.t0,e.t1),n.style.display="none",h.clearColor(1,1,1,1),F=function(e){h.clear(h.COLOR_BUFFER_BIT),f.currentScreen&&f.currentScreen.update(e)},Object(c.f)(F);case 48:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[28,1,2]]]);
//# sourceMappingURL=main.44839e87.chunk.js.map