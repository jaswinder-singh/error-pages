!function(){function e(){a(),t(),u(),l(),h();var e=Cookies.get("HNYFirstVisit");e&&V.addClass("repeat-visit")}function a(){TweenLite.set([".sparkCenterDark",".sparkCenterWhite",I],{autoAlpha:0}),TweenMax.set(U,{autoAlpha:1}),TweenMax.set(le,{attr:{r:1},transformOrigin:"center center"}),TweenMax.set($(".sparks line"),{drawSVG:"0%"})}function t(){G.each(function(e){$(this).width(window.innerWidth),$(this).height(window.innerHeight)});for(var e=0;e<=ce.length-1;e++){var a=ce[e];ce[e]=new Image,ce[e].src=a,ce[e].onload=s}TweenLite.ticker.addEventListener("tick",n)}function s(){we++,we>=ce.length&&r()}function r(){canvas.width=window.innerWidth,canvas.height=window.innerHeight;var e=new createjs.Graphics;e.beginRadialGradientFill(["#f9b14c","transparent"],[0,1],0,0,canvas.width/6,0,0,canvas.width/2),e.drawCircle(0,0,canvas.width);var a=new createjs.Shape(e);for(a.x=canvas.width/2,a.y=.9*canvas.height,a.alpha=0,P.addChild(a),i=0;i<=ce.length-1;i++)bitmap=new createjs.Bitmap(ce[i].src),bitmap.x=(canvas.width-ue)/2,bitmap.y=canvas.height-xe,bitmap.name="bitmap"+i,bitmap.alpha=0,me.push(bitmap),P.addChild(bitmap);me.push(a),P.update(),TweenLite.ticker.addEventListener("tick",n)}function o(){G.each(function(e){$(this).width(window.innerWidth),$(this).height(window.innerHeight)}),TweenMax.set(V,{className:"+=bcgReset"}),TweenMax.to(v,3,{autoAlpha:1,scaleY:2,ease:Power0.easeNone})}function n(){P.update()}function l(){var e=new TimelineMax({delay:1});TweenMax.set(ie,{autoAlpha:1}),TweenMax.set(he,{drawSVG:"0%",rotation:-90,transformOrigin:"center center"}),TweenMax.set(pe,{attr:{r:10},autoAlpha:.2,transformOrigin:"center center"}),e.to(le,.7,{attr:{r:125},transformOrigin:"center center",ease:Power3.easeOut}).fromTo(pe,.5,{autoAlpha:.5},{attr:{r:123},autoAlpha:0,transformOrigin:"center center",ease:Power3.easeOut},.1).to(he,2,{drawSVG:"80% 100%",ease:Linear.easeNone},"-=0.3").set(I,{autoAlpha:1}).to(he,2,{rotation:"+=785",ease:Power1.easeInOut},"-=0.7").to(he,.15,{drawSVG:"100% 100%",ease:Power4.easeOut},"-=0.2").from(de,.8,{attr:{y:-35},ease:Power3.easeIn},"-=0.65").to(le,.4,{attr:{cx:230,cy:-36},transformOrigin:"center center",ease:Power2.easeOut},"-=0.5").to(I,1.3,{scale:.8,x:"+=40",ease:Power4.easeOut,transformOrigin:"bottom right",onComplete:d},"-=0.4")}function d(){setTimeout(function(){R.to(I,.4,{y:"-=20",transformOrigin:"bottom right",ease:Power4.easeOut}).to(I,.4,{y:"+=20",transformOrigin:"bottom right",ease:Bounce.easeOut})},2e3)}function h(){TweenMax.set(I,{className:"-=is-hidden",cursor:"pointer"}),TweenMax.set(B,{autoAlpha:0}),TweenMax.set(H,{rotation:45,transformOrigin:"bottom right"}),j.to(H,.3,{rotation:0,ease:Power4.easeInOut},.1).to(B,.1,{autoAlpha:1,onComplete:p},"-=0.1").set(z,{className:"+=is-ready-rocket1"},.6).set(z,{className:"+=is-ready-rocket2"},.7).set(z,{className:"+=is-ready-rocket3"},.8).set(z,{className:"+=is-ready-rocket4"},.9),I.on("click",function(){j.play()})}function p(){var e=new TimelineMax({repeat:-1}),a=new TimelineMax({repeat:-1});return a.set([Y,X],{y:"+=70"}).to(Y,.8,{y:0,ease:SteppedEase.ease.config(4)},0).set(Y,{autoAlpha:0}).to(X,.6,{y:"-=80",ease:SteppedEase.ease.config(3)},.1).set(X,{autoAlpha:0}).to(W,.7,{y:-50,ease:SteppedEase.ease.config(4)},.2),e.to(E,.4,{morphSVG:L,rotation:5,transformOrigin:"bottom center",ease:SteppedEase.ease.config(3)},0).to(E,.5,{morphSVG:D,ease:SteppedEase.ease.config(3)},0),e}function c(e,a){var t=$("#rocket"+a),s=(t.find(".sparks"),t.find(".sparkCenterDark")),r=t.find(".sparkCenterWhite"),o=y(1,4),n=new TimelineMax({repeat:-1,yoyo:!0,delay:o/10}),i=t.find(".sparks line"),l=t.find(".sparksMask");1===ne?(F.text("Nicely done! 3 to go!"),TweenMax.fromTo(F,.3,{autoAlpha:0,y:15},{autoAlpha:1,y:0,ease:Power1.easeInOut}),TweenMax.to(F,.2,{autoAlpha:0,y:-15,ease:Power1.easeInOut,delay:2}),ne++):2===ne?(F.text("Two to go!"),TweenMax.fromTo(F,.3,{autoAlpha:0,y:15},{autoAlpha:1,y:0,ease:Power1.easeInOut}),TweenMax.to(F,.2,{autoAlpha:0,y:-15,ease:Power1.easeInOut,delay:2}),ne++):3===ne&&(F.text("One more!"),TweenMax.fromTo(F,.3,{autoAlpha:0,y:15},{autoAlpha:1,y:0,ease:Power1.easeInOut}),TweenMax.to(F,.2,{autoAlpha:0,y:-15,ease:Power1.easeInOut,delay:2}),ne++),n.set(i,{drawSVG:"100%"}).set([s,r],{autoAlpha:1}).to([s,r],.3,{scale:.6,transformOrigin:"center center",ease:RoughEase.ease.config({template:Power0.easeNone,strength:1,points:20,taper:"none",randomize:!0,clamp:!1}),yoyo:!0,repeat:-1},0).fromTo(l,.3,{attr:{r:5}},{attr:{r:45},transformOrigin:"center center",repeat:-1,yoyo:!0,ease:SteppedEase.ease.config(4)},.3),se.add(n,0)}function w(){function e(){re.kill(),se.kill()}k=new TimelineMax;var a=me[0],t=me[1],s=me[2],r=me[3],o=s.image.width,n=s.image.height,i=window.innerWidth-2*o,l=window.innerHeight-2*n;Q.each(function(e){var a=new TimelineMax,t=new TimelineMax({repeat:-1,yoyo:!0}),s=$(this),r=$(this).find(".rocketShape"),o=$(this).find(".rocketTail"),n=$(this).find(".spark"),i=$(this).find(".flame"),l=$(this).find(".flameBig"),d=$(this).find(".flameSmall"),h=($(this).find(".rocketStand"),$(this).find(".flameLine")),p=($(this).find(".flameLine01"),$(this).find(".flameLine02"),$(this).find(".flameLine03"),[{x:"+=0",y:"-=20"},{x:"-=22",y:"-=70"},{x:"-=25",y:"-=105"}]),c=y(1,4),w=y(2,5),m=y(-10,-20);t.set(h,{drawSVG:"0%",autoAlpha:0}).to(l,.3,{morphSVG:ae,ease:SteppedEase.ease.config(6)},0).to(d,.3,{morphSVG:te,ease:SteppedEase.ease.config(6)},.1),a.to(o,1.3,{drawSVG:"0%",ease:Power0.easeNone}).to(n,1.95,{bezier:{curviness:0,values:p,ease:Power0.easeNone}},0).set(n,{autoAlpha:0}).set(i,{autoAlpha:1},"flames").add(t,"flames").fromTo(i,w/10,{y:0},{y:m,repeat:-1,yoyo:!0,ease:SteppedEase.ease.config(7)},"flames").staggerTo(h,.1,{drawSVG:"100%",autoAlpha:1,repeat:-1},.2,"flames+=1.8"+c/10).to(r,.1,{y:"+=3",repeat:-1,yoyo:!0,ease:Power4.easeInOut},"flames"),oe.push(s),re.add(a,c/10),k.add(re,0)});var d=new TimelineMax;d.add("start",0).to(ee,.8,{y:"130%",ease:Power2.easeIn},"start+=1").set(ee,{autoAlpha:0,immediateRender:!1},"start+=1.8").to(_,.4,{scale:.1,x:"+=60%",transformOrigin:"50% 0%",ease:Power1.easeOut},"start+=1.8").to(q,.4,{scale:.1,x:"+=26%",transformOrigin:"50% 0%",ease:Power1.easeOut},"start+=1.8").to(J,.4,{scale:.1,x:"-=16%",transformOrigin:"50% 0%",ease:Power1.easeOut},"start+=1.8").to(K,.4,{scale:.1,x:"-=34%",transformOrigin:"50% 0%",ease:Power1.easeOut,onComplete:m},"start+=1.8").to(Z,.3,{autoAlpha:0,ease:Power0.easeNone,onComplete:e},"start+=2").add("skylineIn",.8).to(v,5,{scale:1,ease:Power0.easeLinear},"skylineIn").fromTo(a,5.3,{regY:l,regX:-(i/2),scaleX:2,scaleY:2,alpha:.5},{regY:.2*l,regX:0,scaleY:1,scaleX:1,ease:Power3.easeOut},"skylineIn").fromTo(t,5.4,{regY:l/.6,regX:-(i/2),scaleX:2,scaleY:2,alpha:1},{regY:.2*l,regX:0,scaleY:1,scaleX:1,ease:Power3.easeOut},"skylineIn-=0.1").fromTo(s,5.5,{regY:l/.6,regX:-i,scaleX:3,scaleY:3,alpha:1},{regY:.2*l,regX:0,scaleY:1,scaleX:1,ease:Power3.easeOut},"skylineIn-=0.2").fromTo(r,5.5,{regY:l/.6,alpha:0},{regY:0,alpha:.5,ease:Power3.easeOut},"skylineIn-=0.2").to(fe,5,{y:0,autoAlpha:1,ease:Power3.easeOut},"skylineIn+=0.8"),k.add(d,1.2)}function m(){var e=new TimelineMax,a=15,t=["#f9af48","#ffffff","#2db475","#1073b9","#f85154"],s={framerate:10,images:["img/img_fireworks-frames-white.png"],frames:{width:150,height:150,regX:75,regY:75,spacing:0,margin:0},animations:{fireReady:[1],fire:[1,10,!0,.25]}},r=new createjs.SpriteSheet(s),o=new createjs.Sprite(r,"fire");for(o.y=y(window.innerHeight/2,window.innerHeight/1.3),o.x=y(.1*window.innerWidth,.9*window.innerWidth),o.alpha=1,i=0;i<a;i++){var n=new createjs.Graphics,l=new createjs.Graphics,d=y(30,60),h=y(window.innerHeight/2,window.innerHeight/1.3),p=y(3,7),c=y(.2,1),w=y(-45,45),m=(y(-270,270),t[y(0,4)]);n.setStrokeStyle(d/30),n.setStrokeDash([d/30,d/5],0),n.beginStroke(m),n.drawCircle(0,0,d);var f=new createjs.Shape(n);f.x=y(.1*window.innerWidth,.9*window.innerWidth),f.y=window.innerHeight,f.alpha=0,P.addChild(f),l.setStrokeStyle(d/2),l.beginFill(m),l.drawCircle(0,0,d);var u=new createjs.Shape(l);u.x=f.x,u.y=f.y,u.alpha=f.alpha,P.addChild(u);var x=new TimelineMax({repeat:-1});P.update(),x.to([f,u],.4,{y:"-="+h,scaleY:.15,scaleX:.15,alpha:0,delay:p/10,ease:Power1.easeOut}).set(u,{alpha:1},"fire").to(f,1,{alpha:c,force3D:!0,rotation:w,scaleY:1,scaleX:1,ease:Power1.easeOut},"fire+=0.2").to(f,.3,{alpha:0,rotation:w-5,scaleY:1.2,scaleX:1.2,ease:Power1.easeIn},"fire+=1.2").to(u,.2,{alpha:0,scaleY:.5,scaleX:.5,ease:Power1.easeOut},"fire"),b.add(x,0)}var T=new TimelineMax({repeat:-1,repeatDelay:3});return TweenMax.set([ye,Te,Se,ke,Oe,Pe,Ge,ve,Ve,Me,Ne,be,Ce,Ae,Ie,Ye,Xe,Ee,Le],{autoAlpha:1}),T.to(ge,.3,{autoAlpha:1,ease:Power0.easeNone}).add("explode-h").set($(".large01"),{className:"+=is-animating"},"explode-h").fromTo(ye,.4,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.2").fromTo(Te,.2,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.3").fromTo(Se,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.3").set($(".large01"),{className:"-=is-animating"},"explode-h+="+$e).add("explode-a").fromTo(ke,.2,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.4").fromTo(Oe,.1,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.4").add("explode-p").set($(".large02"),{className:"+=is-animating"},"explode-h+=0.4").fromTo(Pe,.2,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.5").fromTo(Ge,.2,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.5").set($(".large02"),{className:"-=is-animating"},"explode-p+="+$e).add("explode-y").set($(".large03"),{className:"+=is-animating"},"explode-h+=0.5").fromTo(ve,.4,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=0.6").set($(".large03"),{className:"-=is-animating"},"explode-y+="+$e).add("explode-n").set($(".large04"),{className:"+=is-animating"},"explode-h+=1.5").fromTo(Ve,.4,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=1.6").fromTo(Me,.4,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=1.6").set($(".large04"),{className:"-=is-animating"},"explode-n+="+$e).add("explode-ew").set($(".large05"),{className:"+=is-animating"},"explode-h+=1.6").fromTo(Ne,.6,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=1.7").set($(".large05"),{className:"-=is-animating"},"explode-ew+="+$e).add("explode-y2").set($(".large06"),{className:"+=is-animating"},"explode-h+=1.7").fromTo(be,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=1.9").fromTo(Ce,.4,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=2").set($(".large06"),{className:"-=is-animating"},"explode-y2+="+$e).add("explode-e").set($(".large07"),{className:"+=is-animating"},"explode-h+=1.8").set($(".large08"),{className:"+=is-animating"},"explode-h+=1.9").set($(".large09"),{className:"+=is-animating"},"explode-h+=2").fromTo(Ae,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=2.1").fromTo(Ie,.4,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=2.2").set($([".large07",".large08",".large09"]),{className:"-=is-animating"},"explode-e+="+$e).add("explode-20").set($(".large10"),{className:"+=is-animating"},"explode-h+=3.1").set($(".large11"),{className:"+=is-animating"},"explode-h+=3.2").set($(".large12"),{className:"+=is-animating"},"explode-h+=3.3").set($(".large13"),{className:"+=is-animating"},"explode-h+=3.4").fromTo(Ye,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=3.2").fromTo(Xe,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=3.3").add("explode-16").fromTo(Ee,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut},"explode-h+=3.4").fromTo(Le,.3,{drawSVG:"50% 50%"},{drawSVG:"100%",ease:Power1.easeOut,onComplete:g},"explode-h+=3.5").set($([".large10",".large11",".large12",".large13"]),{className:"-=is-animating"},"explode-e+="+$e).to([ye,Te,Se,ke,Oe,Pe,Ge,ve,Ve,Me,Ne,be,Ce,Ae,Ie,Ye,Xe,Ee,Le],.3,{drawSVG:"0",ease:Power1.easeIn},"explode-h+=8.8"),e.add(T,1.3),e}function g(){b.play(),V.addClass("fade-in"),Cookies.set("HNYFirstVisit",1)}function f(){O=new TimelineMax({repeat:-1});for(var e=($(".largeRandom"),10),a=-1;++a<e;){var t="large0"+y(1,9),s=$('<div class="largeRandom '+t+'"></div>');s.appendTo("#sign");var r=new TimelineMax,o=y(.1,3),n=$e+o,i=y(0,15),l=y(.2*window.innerWidth,.5*window.innerWidth);r.set(s,{x:T()+l,className:"+=is-animating",delay:o}).set(s,{className:"-=is-animating"},n),O.add(r,i)}}function u(){new TimelineMax;Draggable.create(I,{bounds:N,edgeResistance:.65,type:"x,y",throwProps:!0,onPress:function(){TweenMax.to(I,.7,{scale:1,transformOrigin:"bottom right",ease:Back.easeOut}),TweenMax.set(V,{className:"+=bcgDark"}),R.stop()},onRelease:function(){TweenMax.to(I,.3,{scale:.8,transformOrigin:"bottom right",ease:Back.easeOut})},onDragStart:function(){j.play(),TweenMax.staggerTo(M,.1,{className:"+=is-visible"},.1),TweenMax.from(M,.7,{y:"+=30",transformOrigin:"bottom center",ease:Back.easeOut})},onDrag:function(e){for(var a=C.length;--a>-1;)this.hitTest(C[a],A)?$(C[a]).find(M).addClass("is-highlighted"):$(C[a]).find(M).removeClass("is-highlighted")},onDragEnd:function(e){for(var a=C.length;--a>-1;)this.hitTest(C[a],A)&&(We++,x(this.target,C[a],a,We));TweenMax.set(M,{className:"-=is-visible"})}})}function x(e,a,t,s){$(a).remove();var r=$(a).attr("class"),o=r.substr(r.length-1);4>=o&&(c(t,o),TweenLite.set(V,{className:"+=bcg0"+s})),4===s&&($(e).remove(),TweenLite.set(V,{className:"+=bcg04"}),w())}function y(e,a){return Math.floor(Math.random()*(a-e+1))+e}function T(){return 0===Math.floor(2*Math.random())?"-=":"+="}function S(){V.removeClass("has-modal"),V.addClass("is-removing-modal"),setTimeout(function(){V.removeClass("is-removing-modal")},240)}{var k,O,P=new createjs.Stage("canvas"),G=($("canvas"),$(".fs")),v=$(".bcg"),V=$("body"),M=($("#dropGrid"),$(".dropBoxCircle")),N=$("#dropGridContainer"),b=(canvas.getContext("2d"),new TimelineMax({paused:!0,onStart:f})),C=$(".dropBox"),A="50%",I=$("#match"),Y=$("#flame1"),X=$("#flame2"),E=$("#flame3"),L=$("#flame4"),W=$("#flame5"),D=$("#flame6"),B=$("#match .flame"),H=($("#matchBody"),$("#matchStick")),j=new TimelineMax({paused:!0}),R=new TimelineMax({repeat:-1,repeatDelay:2}),F=$("#hint"),z=$(".rockets"),_=$(".rocket1 .rocketShape"),q=$(".rocket2 .rocketShape"),J=$(".rocket3 .rocketShape"),K=$(".rocket4 .rocketShape"),Q=$(".rocket"),U=$(".sparks"),Z=($(".sparks path"),$(".rocket .rocketShape")),ee=$(".rocket .rocketStand"),ae=($(".sparkCenterDark"),$(".sparkCenterWhite"),$(".rocket .flame"),$(".rocket .flameBig2")),te=$(".rocket .flameSmall2"),se=new TimelineMax,re=new TimelineMax,oe=[],ne=1,ie=$("#readyTxt"),le=($(".introTxt"),$(".txtTop"),$(".txtBot"),$("#circleMask")),de=$("#matchMask"),he=$(".circleOutline"),pe=$(".circleFill"),ce=["img/skyline2.svg","img/skyline3.svg","img/skyline1.svg"],we=0,me=[],ge=$("#sign"),fe=$(".starsContainer"),ue=1309,xe=814,$e=.7,ye=$("#h1 path"),Te=$("#h2 path"),Se=$("#h3 path"),ke=$("#a1 path"),Oe=$("#a2 path"),Pe=$("#p1 path"),Ge=$("#p2 path"),ve=$("#y1 path"),Ve=$("#n1 path"),Me=$("#n2 path"),Ne=$("#ew path"),be=$("#y2 path"),Ce=$("#y3 path"),Ae=$("#e path"),Ie=$("#ar path"),Ye=$("#no2 path"),Xe=$("#no0 path"),Ee=$("#no1 path"),Le=$("#no6 path"),We=0;Math.PI/180}window.addEventListener("resize",o,!1),e(),$(".button-more").on("click",function(){V.toggleClass("has-modal")}),$(".button-close").on("click",function(){S()}),$(document).keyup(function(e){27==e.keyCode&&S()})}();
