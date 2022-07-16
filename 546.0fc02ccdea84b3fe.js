"use strict";(self.webpackChunkwebsites_vrapalis=self.webpackChunkwebsites_vrapalis||[]).push([[546],{2634:(re,k,_)=>{_.d(k,{tE:()=>xt,qm:()=>kt,X6:()=>ke,yG:()=>we});var l=_(6895),f=_(4650),M=_(3353),P=_(1135),F=_(7579),w=_(9646),pt=_(5684),ft=_(1884),gt=_(2722),ne=_(1281),_t=_(2289);function ke(s){return 0===s.buttons||0===s.offsetX&&0===s.offsetY}function we(s){const i=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!(!i||-1!==i.identifier||null!=i.radiusX&&1!==i.radiusX||null!=i.radiusY&&1!==i.radiusY)}const At=new f.OlP("cdk-input-modality-detector-options"),It={ignoreKeys:[18,17,224,91,16]},x=(0,M.i$)({passive:!0,capture:!0});let Tt=(()=>{class s{constructor(e,o,r,u){this._platform=e,this._mostRecentTarget=null,this._modality=new P.X(null),this._lastTouchMs=0,this._onKeydown=g=>{this._options?.ignoreKeys?.some(b=>b===g.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=(0,M.sA)(g))},this._onMousedown=g=>{Date.now()-this._lastTouchMs<650||(this._modality.next(ke(g)?"keyboard":"mouse"),this._mostRecentTarget=(0,M.sA)(g))},this._onTouchstart=g=>{we(g)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,M.sA)(g))},this._options={...It,...u},this.modalityDetected=this._modality.pipe((0,pt.T)(1)),this.modalityChanged=this.modalityDetected.pipe((0,ft.x)()),e.isBrowser&&o.runOutsideAngular(()=>{r.addEventListener("keydown",this._onKeydown,x),r.addEventListener("mousedown",this._onMousedown,x),r.addEventListener("touchstart",this._onTouchstart,x)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,x),document.removeEventListener("mousedown",this._onMousedown,x),document.removeEventListener("touchstart",this._onTouchstart,x))}}return s.\u0275fac=function(e){return new(e||s)(f.LFG(M.t4),f.LFG(f.R0b),f.LFG(l.K0),f.LFG(At,8))},s.\u0275prov=f.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const Ot=new f.OlP("cdk-focus-monitor-default-options"),K=(0,M.i$)({passive:!0,capture:!0});let xt=(()=>{class s{constructor(e,o,r,u,g){this._ngZone=e,this._platform=o,this._inputModalityDetector=r,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new F.x,this._rootNodeFocusAndBlurListener=b=>{for(let N=(0,M.sA)(b);N;N=N.parentElement)"focus"===b.type?this._onFocus(b,N):this._onBlur(b,N)},this._document=u,this._detectionMode=g?.detectionMode||0}monitor(e,o=!1){const r=(0,ne.fI)(e);if(!this._platform.isBrowser||1!==r.nodeType)return(0,w.of)(null);const u=(0,M.kV)(r)||this._getDocument(),g=this._elementInfo.get(r);if(g)return o&&(g.checkChildren=!0),g.subject;const b={checkChildren:o,subject:new F.x,rootNode:u};return this._elementInfo.set(r,b),this._registerGlobalListeners(b),b.subject}stopMonitoring(e){const o=(0,ne.fI)(e),r=this._elementInfo.get(o);r&&(r.subject.complete(),this._setClasses(o),this._elementInfo.delete(o),this._removeGlobalListeners(r))}focusVia(e,o,r){const u=(0,ne.fI)(e);u===this._getDocument().activeElement?this._getClosestElementsInfo(u).forEach(([b,se])=>this._originChanged(b,o,se)):(this._setOrigin(o),"function"==typeof u.focus&&u.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,o)=>this.stopMonitoring(o))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return 1===this._detectionMode||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,o){e.classList.toggle("cdk-focused",!!o),e.classList.toggle("cdk-touch-focused","touch"===o),e.classList.toggle("cdk-keyboard-focused","keyboard"===o),e.classList.toggle("cdk-mouse-focused","mouse"===o),e.classList.toggle("cdk-program-focused","program"===o)}_setOrigin(e,o=!1){this._ngZone.runOutsideAngular(()=>{this._origin=e,this._originFromTouchInteraction="touch"===e&&o,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(e,o){const r=this._elementInfo.get(o),u=(0,M.sA)(e);!r||!r.checkChildren&&o!==u||this._originChanged(o,this._getFocusOrigin(u),r)}_onBlur(e,o){const r=this._elementInfo.get(o);!r||r.checkChildren&&e.relatedTarget instanceof Node&&o.contains(e.relatedTarget)||(this._setClasses(o),this._emitOrigin(r,null))}_emitOrigin(e,o){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(o))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;const o=e.rootNode,r=this._rootNodeFocusListenerCount.get(o)||0;r||this._ngZone.runOutsideAngular(()=>{o.addEventListener("focus",this._rootNodeFocusAndBlurListener,K),o.addEventListener("blur",this._rootNodeFocusAndBlurListener,K)}),this._rootNodeFocusListenerCount.set(o,r+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,gt.R)(this._stopInputModalityDetector)).subscribe(u=>{this._setOrigin(u,!0)}))}_removeGlobalListeners(e){const o=e.rootNode;if(this._rootNodeFocusListenerCount.has(o)){const r=this._rootNodeFocusListenerCount.get(o);r>1?this._rootNodeFocusListenerCount.set(o,r-1):(o.removeEventListener("focus",this._rootNodeFocusAndBlurListener,K),o.removeEventListener("blur",this._rootNodeFocusAndBlurListener,K),this._rootNodeFocusListenerCount.delete(o))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,o,r){this._setClasses(e,o),this._emitOrigin(r,o),this._lastFocusOrigin=o}_getClosestElementsInfo(e){const o=[];return this._elementInfo.forEach((r,u)=>{(u===e||r.checkChildren&&u.contains(e))&&o.push([u,r])}),o}_isLastInteractionFromInputLabel(e){const{_mostRecentTarget:o,mostRecentModality:r}=this._inputModalityDetector;if("mouse"!==r||!o||o===e||"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName||e.disabled)return!1;const u=e.labels;if(u)for(let g=0;g<u.length;g++)if(u[g].contains(o))return!0;return!1}}return s.\u0275fac=function(e){return new(e||s)(f.LFG(f.R0b),f.LFG(M.t4),f.LFG(Tt),f.LFG(l.K0,8),f.LFG(Ot,8))},s.\u0275prov=f.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();const Le="cdk-high-contrast-black-on-white",Se="cdk-high-contrast-white-on-black",oe="cdk-high-contrast-active";let kt=(()=>{class s{constructor(e,o){this._platform=e,this._document=o,this._breakpointSubscription=(0,f.f3M)(_t.Yg).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);const o=this._document.defaultView||window,r=o&&o.getComputedStyle?o.getComputedStyle(e):null,u=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),u){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const e=this._document.body.classList;e.remove(oe,Le,Se),this._hasCheckedHighContrastMode=!0;const o=this.getHighContrastMode();1===o?e.add(oe,Le):2===o&&e.add(oe,Se)}}}return s.\u0275fac=function(e){return new(e||s)(f.LFG(M.t4),f.LFG(l.K0))},s.\u0275prov=f.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},3546:(re,k,_)=>{_.d(k,{$j:()=>L,G2:()=>B,QW:()=>U,a8:()=>Y,dk:()=>$,dn:()=>G,hq:()=>I,kc:()=>S,n5:()=>R});var l=_(4650),f=_(2327);const M=["*",[["mat-card-footer"]]],P=["*","mat-card-footer"],F=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],w=["[mat-card-avatar], [matCardAvatar]","mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","*"];let G=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275dir=l.lG2({type:d,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),d})(),R=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275dir=l.lG2({type:d,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),d})(),L=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275dir=l.lG2({type:d,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),d})(),I=(()=>{class d{constructor(){this.align="start"}}return d.\u0275fac=function(p){return new(p||d)},d.\u0275dir=l.lG2({type:d,selectors:[["mat-card-actions"]],hostAttrs:[1,"mat-card-actions"],hostVars:2,hostBindings:function(p,E){2&p&&l.ekj("mat-card-actions-align-end","end"===E.align)},inputs:{align:"align"},exportAs:["matCardActions"]}),d})(),B=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275dir=l.lG2({type:d,selectors:[["","mat-card-image",""],["","matCardImage",""]],hostAttrs:[1,"mat-card-image"]}),d})(),S=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275dir=l.lG2({type:d,selectors:[["","mat-card-avatar",""],["","matCardAvatar",""]],hostAttrs:[1,"mat-card-avatar"]}),d})(),Y=(()=>{class d{constructor(p){this._animationMode=p}}return d.\u0275fac=function(p){return new(p||d)(l.Y36(l.QbO,8))},d.\u0275cmp=l.Xpm({type:d,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(p,E){2&p&&l.ekj("_mat-animation-noopable","NoopAnimations"===E._animationMode)},exportAs:["matCard"],ngContentSelectors:P,decls:2,vars:0,template:function(p,E){1&p&&(l.F$t(M),l.Hsn(0),l.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}.mat-card._mat-animation-noopable{transition:none !important;animation:none !important}.mat-card>.mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card>.mat-divider-horizontal{left:auto;right:0}.mat-card>.mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card>.mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}"],encapsulation:2,changeDetection:0}),d})(),$=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275cmp=l.Xpm({type:d,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-card-header"],ngContentSelectors:w,decls:4,vars:0,consts:[[1,"mat-card-header-text"]],template:function(p,E){1&p&&(l.F$t(F),l.Hsn(0),l.TgZ(1,"div",0),l.Hsn(2,1),l.qZA(),l.Hsn(3,2))},encapsulation:2,changeDetection:0}),d})(),U=(()=>{class d{}return d.\u0275fac=function(p){return new(p||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[f.BQ,f.BQ]}),d})()},2327:(re,k,_)=>{_.d(k,{BQ:()=>d,wG:()=>Ce,si:()=>Ee,pj:()=>pe,Kr:()=>fe,Id:()=>me});var l=_(4650),f=_(2634),M=_(6895);let R=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({}),c})();var I=_(3353),T=_(1281);const U=new l.OlP("mat-sanity-checks",{providedIn:"root",factory:function W(){return!0}});let d=(()=>{class c{constructor(n,a,h){this._sanityChecks=a,this._document=h,this._hasDoneGlobalChecks=!1,n._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(n){return!(0,I.Oy)()&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[n])}}return c.\u0275fac=function(n){return new(n||c)(l.LFG(f.qm),l.LFG(U,8),l.LFG(M.K0))},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[R,R]}),c})();function me(c){return class extends c{constructor(...t){super(...t),this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,T.Ig)(t)}}}function pe(c,t){return class extends c{constructor(...n){super(...n),this.defaultColor=t,this.color=t}get color(){return this._color}set color(n){const a=n||this.defaultColor;a!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),a&&this._elementRef.nativeElement.classList.add(`mat-${a}`),this._color=a)}}}function fe(c){return class extends c{constructor(...t){super(...t),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,T.Ig)(t)}}}class _e{constructor(t,n,a,h=!1){this._renderer=t,this.element=n,this.config=a,this._animationForciblyDisabledThroughCss=h,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const z={enterDuration:225,exitDuration:150},j=(0,I.i$)({passive:!0}),X=["mousedown","touchstart"],Q=["mouseup","mouseleave","touchend","touchcancel"];class Me{constructor(t,n,a,h){this._target=t,this._ngZone=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,h.isBrowser&&(this._containerElement=(0,T.fI)(a))}fadeInRipple(t,n,a={}){const h=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),v={...z,...a.animation};a.centered&&(t=h.left+h.width/2,n=h.top+h.height/2);const C=a.radius||function be(c,t,n){const a=Math.max(Math.abs(c-n.left),Math.abs(c-n.right)),h=Math.max(Math.abs(t-n.top),Math.abs(t-n.bottom));return Math.sqrt(a*a+h*h)}(t,n,h),Ae=t-h.left,Ie=n-h.top,V=v.enterDuration,y=document.createElement("div");y.classList.add("mat-ripple-element"),y.style.left=Ae-C+"px",y.style.top=Ie-C+"px",y.style.height=2*C+"px",y.style.width=2*C+"px",null!=a.color&&(y.style.backgroundColor=a.color),y.style.transitionDuration=`${V}ms`,this._containerElement.appendChild(y);const J=window.getComputedStyle(y),q=J.transitionDuration,H="none"===J.transitionProperty||"0s"===q||"0s, 0s"===q,D=new _e(this,y,a,H);y.style.transform="scale3d(1, 1, 1)",D.state=0,a.persistent||(this._mostRecentTransientRipple=D);let ee=null;return!H&&(V||v.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const te=()=>this._finishRippleTransition(D),ie=()=>this._destroyRipple(D);y.addEventListener("transitionend",te),y.addEventListener("transitioncancel",ie),ee={onTransitionEnd:te,onTransitionCancel:ie}}),this._activeRipples.set(D,ee),(H||!V)&&this._finishRippleTransition(D),D}fadeOutRipple(t){if(2===t.state||3===t.state)return;const n=t.element,a={...z,...t.config.animation};n.style.transitionDuration=`${a.exitDuration}ms`,n.style.opacity="0",t.state=2,(t._animationForciblyDisabledThroughCss||!a.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const n=(0,T.fI)(t);!n||n===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=n,this._registerEvents(X))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(Q),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){0===t.state?this._startFadeOutTransition(t):2===t.state&&this._destroyRipple(t)}_startFadeOutTransition(t){const n=t===this._mostRecentTransientRipple,{persistent:a}=t.config;t.state=1,!a&&(!n||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){const n=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=3,null!==n&&(t.element.removeEventListener("transitionend",n.onTransitionEnd),t.element.removeEventListener("transitioncancel",n.onTransitionCancel)),t.element.remove()}_onMousedown(t){const n=(0,f.X6)(t),a=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!n&&!a&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!(0,f.yG)(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const n=t.changedTouches;for(let a=0;a<n.length;a++)this.fadeInRipple(n[a].clientX,n[a].clientY,this._target.rippleConfig)}}_onPointerUp(){!this._isPointerDown||(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{!t.config.persistent&&(1===t.state||t.config.terminateOnPointerUp&&0===t.state)&&t.fadeOut()}))}_registerEvents(t){this._ngZone.runOutsideAngular(()=>{t.forEach(n=>{this._triggerElement.addEventListener(n,this,j)})})}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){this._triggerElement&&(X.forEach(t=>{this._triggerElement.removeEventListener(t,this,j)}),this._pointerUpEventsRegistered&&Q.forEach(t=>{this._triggerElement.removeEventListener(t,this,j)}))}}const ye=new l.OlP("mat-ripple-global-options");let Ce=(()=>{class c{constructor(n,a,h,v,C){this._elementRef=n,this._animationMode=C,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=v||{},this._rippleRenderer=new Me(this,a,n,h)}get disabled(){return this._disabled}set disabled(n){n&&this.fadeOutAllNonPersistent(),this._disabled=n,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(n){this._trigger=n,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(n,a=0,h){return"number"==typeof n?this._rippleRenderer.fadeInRipple(n,a,{...this.rippleConfig,...h}):this._rippleRenderer.fadeInRipple(0,0,{...this.rippleConfig,...n})}}return c.\u0275fac=function(n){return new(n||c)(l.Y36(l.SBq),l.Y36(l.R0b),l.Y36(I.t4),l.Y36(ye,8),l.Y36(l.QbO,8))},c.\u0275dir=l.lG2({type:c,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,a){2&n&&l.ekj("mat-ripple-unbounded",a.unbounded)},inputs:{color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],radius:["matRippleRadius","radius"],animation:["matRippleAnimation","animation"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"]},exportAs:["matRipple"]}),c})(),Ee=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({imports:[d,d]}),c})()}}]);