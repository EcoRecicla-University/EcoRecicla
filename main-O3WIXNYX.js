import{$ as Fe,A as ce,B as le,C as a,D as c,E as p,G as me,H as pe,I as u,J as N,K as ue,L as fe,M as de,N as V,O as he,P as ge,Q as ve,R as _e,S as Ce,T as Ie,U as Se,V as b,W as L,X as ye,Y as Ee,Z as be,_ as we,a as q,aa as xe,b as I,ba as Re,c as G,ca as Y,d as S,da as Me,e as J,ea as Ne,f as K,fa as Le,g as Z,ga as Ae,h as Q,ha as Te,i as X,j as R,k as ee,l as te,m as B,n as w,o as v,p as ne,q as M,r as oe,s as y,t as d,u as l,v as ie,w as re,x as se,y as ae,z as E}from"./chunk-6NMJR7WT.js";var A=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-layout-auth-header"]],decls:2,vars:0,consts:[[1,"w-full","h-44","flex","justify-center","bg-linear-[180deg,#06467a_50%,white_50%]"],["src","images/Logo.png","alt","logo",1,"h-36","w-72","pt-5"]],template:function(e,t){e&1&&(a(0,"header",0),p(1,"img",1),c())},encapsulation:2})};var T=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-layout-auth"]],decls:2,vars:0,template:function(e,t){e&1&&p(0,"app-layout-auth-header")(1,"router-outlet")},dependencies:[b,A],encapsulation:2})};var D=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-recuperacao-senha"]],decls:18,vars:1,consts:[[1,"flex","justify-center","items-center","pt-5"],[1,"flex","items-center","flex-col","bg-[#06467a]","w-full","max-w-lg","h-auto","rounded-3xl","mx-2"],[1,"pt-5"],[1,"text-3xl","text-white","font-semibold"],[1,"p-5","px-10","w-full"],["action","",1,"flex","flex-col"],[1,"text-white","text-sm"],[1,"w-full"],["matInput","","type","text",1,"bg-white","rounded-2xl"],[1,"flex","flex-col","gap-2","pb-5"],[1,"bg-blue-500","text-white","rounded-3xl","h-10","hover:bg-blue-600","cursor-pointer"],[1,"bg-green-900","text-white","rounded-3xl","h-10","hover:bg-green-950","cursor-pointer",3,"routerLink"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),u(4,"Recuperar senha"),c()(),a(5,"div",4)(6,"form",5)(7,"span",6),u(8,"Digite seu email"),c(),a(9,"mat-form-field",7)(10,"mat-label"),u(11,"Email"),c(),p(12,"input",8),c(),a(13,"div",9)(14,"button",10),u(15,"Recuperar"),c(),a(16,"button",11),u(17,"Voltar ao login"),c()()()()()()),e&2&&(d(16),E("routerLink","/login"))},dependencies:[L,Te,Ae,Le,Ne,xe,Fe,be,we,Re,Me],encapsulation:2})};var P=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-rota"]],decls:2,vars:0,template:function(e,t){e&1&&(a(0,"h1"),u(1,"Rota"),c())},encapsulation:2})};var O=class o{constructor(){}usuario="Eric";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-home"]],decls:5,vars:1,consts:[[1,"flex","items-center","flex-col"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"span"),u(2),c(),a(3,"h1"),u(4,"Home"),c()()),e&2&&(d(2),N(" Ol\xE1 ",t.usuario,", seja bem vindo! "))},encapsulation:2})};var H=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-pages-cadastro"]],decls:2,vars:0,template:function(e,t){e&1&&(a(0,"h1"),u(1,"Cadastro"),c())},encapsulation:2})};var $e=["*"],U;function Be(){if(U===void 0&&(U=null,typeof window<"u")){let o=window;o.trustedTypes!==void 0&&(U=o.trustedTypes.createPolicy("angular#components",{createHTML:s=>s}))}return U}function F(o){return Be()?.createHTML(o)||o}function De(o){return Error(`Unable to find icon with the name "${o}"`)}function Ve(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function Pe(o){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${o}".`)}function Oe(o){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${o}".`)}var g=class{url;svgText;options;svgElement;constructor(s,e,t){this.url=s,this.svgText=e,this.options=t}},Ye=(()=>{class o{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,n,i){this._httpClient=e,this._sanitizer=t,this._errorHandler=i,this._document=n}addSvgIcon(e,t,n){return this.addSvgIconInNamespace("",e,t,n)}addSvgIconLiteral(e,t,n){return this.addSvgIconLiteralInNamespace("",e,t,n)}addSvgIconInNamespace(e,t,n,i){return this._addSvgIconConfig(e,t,new g(n,null,i))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,t,n,i){let r=this._sanitizer.sanitize(y.HTML,n);if(!r)throw Oe(n);let m=F(r);return this._addSvgIconConfig(e,t,new g("",m,i))}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t)}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t)}addSvgIconSetInNamespace(e,t,n){return this._addSvgIconSetConfig(e,new g(t,null,n))}addSvgIconSetLiteralInNamespace(e,t,n){let i=this._sanitizer.sanitize(y.HTML,t);if(!i)throw Oe(t);let r=F(i);return this._addSvgIconSetConfig(e,new g("",r,n))}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(y.RESOURCE_URL,e);if(!t)throw Pe(e);let n=this._cachedIconsByUrl.get(t);return n?I(k(n)):this._loadSvgIconFromConfig(new g(e,null)).pipe(R(i=>this._cachedIconsByUrl.set(t,i)),S(i=>k(i)))}getNamedSvgIcon(e,t=""){let n=He(t,e),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(t,e),i)return this._svgIconConfigs.set(n,i),this._getSvgFromConfig(i);let r=this._iconSetConfigs.get(t);return r?this._getSvgFromIconSetConfigs(e,r):G(De(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?I(k(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(S(t=>k(t)))}_getSvgFromIconSetConfigs(e,t){let n=this._extractIconWithNameFromAnySet(e,t);if(n)return I(n);let i=t.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(K(m=>{let C=`Loading icon set URL: ${this._sanitizer.sanitize(y.RESOURCE_URL,r.url)} failed: ${m.message}`;return this._errorHandler.handleError(new Error(C)),I(null)})));return J(i).pipe(S(()=>{let r=this._extractIconWithNameFromAnySet(e,t);if(!r)throw De(e);return r}))}_extractIconWithNameFromAnySet(e,t){for(let n=t.length-1;n>=0;n--){let i=t[n];if(i.svgText&&i.svgText.toString().indexOf(e)>-1){let r=this._svgElementFromConfig(i),m=this._extractSvgIconFromSet(r,e,i.options);if(m)return m}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(R(t=>e.svgText=t),S(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?I(null):this._fetchIcon(e).pipe(R(t=>e.svgText=t))}_extractSvgIconFromSet(e,t,n){let i=e.querySelector(`[id="${t}"]`);if(!i)return null;let r=i.cloneNode(!0);if(r.removeAttribute("id"),r.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(r),n);let m=this._svgElementFromString(F("<svg></svg>"));return m.appendChild(r),this._setSvgAttributes(m,n)}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let n=t.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(e){let t=this._svgElementFromString(F("<svg></svg>")),n=e.attributes;for(let i=0;i<n.length;i++){let{name:r,value:m}=n[i];r!=="id"&&t.setAttribute(r,m)}for(let i=0;i<e.childNodes.length;i++)e.childNodes[i].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[i].cloneNode(!0));return t}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e}_fetchIcon(e){let{url:t,options:n}=e,i=n?.withCredentials??!1;if(!this._httpClient)throw Ve();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let r=this._sanitizer.sanitize(y.RESOURCE_URL,t);if(!r)throw Pe(t);let m=this._inProgressUrlFetches.get(r);if(m)return m;let _=this._httpClient.get(r,{responseType:"text",withCredentials:i}).pipe(S(C=>F(C)),Q(()=>this._inProgressUrlFetches.delete(r)),X());return this._inProgressUrlFetches.set(r,_),_}_addSvgIconConfig(e,t,n){return this._svgIconConfigs.set(He(e,t),n),this}_addSvgIconSetConfig(e,t){let n=this._iconSetConfigs.get(e);return n?n.push(t):this._iconSetConfigs.set(e,[t]),this}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t}return e.svgElement}_getIconConfigFromResolvers(e,t){for(let n=0;n<this._resolvers.length;n++){let i=this._resolvers[n](t,e);if(i)return qe(i)?new g(i.url,null,i.options):new g(i,null)}}static \u0275fac=function(t){return new(t||o)(w(ve,8),w(Ce),w(V,8),w(M))};static \u0275prov=ee({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();function k(o){return o.cloneNode(!0)}function He(o,s){return o+":"+s}function qe(o){return!!(o.url&&o.options)}var Ge=new B("MAT_ICON_DEFAULT_OPTIONS"),Je=new B("mat-icon-location",{providedIn:"root",factory:Ke});function Ke(){let o=v(V),s=o?o.location:null;return{getPathname:()=>s?s.pathname+s.search:""}}var Ue=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ze=Ue.map(o=>`[${o}]`).join(", "),Qe=/^url\(['"]?#(.*?)['"]?\)$/,ke=(()=>{class o{_elementRef=v(oe);_iconRegistry=v(Ye);_location=v(Je);_errorHandler=v(M);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName;_svgNamespace;_previousPath;_elementsWithExternalReferences;_currentIconFetch=q.EMPTY;constructor(){let e=v(new ne("aria-hidden"),{optional:!0}),t=v(Ge,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let n=e.childNodes[t];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>e.classList.remove(n)),t.forEach(n=>e.classList.add(n)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((n,i)=>{n.forEach(r=>{i.setAttribute(r.name,`url('${e}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Ze),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<t.length;i++)Ue.forEach(r=>{let m=t[i],_=m.getAttribute(r),C=_?_.match(Qe):null;if(C){let x=n.get(m);x||(x=[],n.set(m,x)),x.push({name:r,value:C[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,n]=this._splitIconName(e);t&&(this._svgNamespace=t),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,t).pipe(Z(1)).subscribe(i=>this._setSvgElement(i),i=>{let r=`Error retrieving icon ${t}:${n}! ${i.message}`;this._errorHandler.handleError(new Error(r))})}}static \u0275fac=function(t){return new(t||o)};static \u0275cmp=l({type:o,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,n){t&2&&(ae("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),le(n.color?"mat-"+n.color:""),ce("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",de],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[re],ngContentSelectors:$e,decls:1,vars:0,template:function(t,n){t&1&&(me(),pe(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0})}return o})(),ze=(()=>{class o{static \u0275fac=function(t){return new(t||o)};static \u0275mod=ie({type:o});static \u0275inj=te({imports:[Y,Y]})}return o})();var et=()=>({color:"white"});function tt(o,s){if(o&1&&(a(0,"li",3)(1,"a",4),p(2,"mat-icon",5),u(3),c()()),o&2){let e=s.$implicit;d(),E("routerLink",e.url),d(),E("ngStyle",ue(4,et))("fontIcon",e.icon),d(),N(" ",e.label," ")}}var z=class o{constructor(){}itemsidebar=[{icon:"home",label:"Home",url:"/home"},{icon:"route",label:"Rota",url:"/rota"},{icon:"person_add",label:"Cadastro",url:"/cadastro"}];static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-layout-private-sidebar"]],decls:3,vars:1,consts:[[1,"w-full","bg-[#06467a54]","h-screen"],[1,""],["class","text-white",4,"ngFor","ngForOf"],[1,"text-white"],["routerLinkActive","text-green-600",1,"flex","w-full","gap-2",3,"routerLink"],[1,"",3,"ngStyle","fontIcon"]],template:function(e,t){e&1&&(a(0,"div",0)(1,"ul",1),se(2,tt,4,5,"li",2),c()()),e&2&&(d(2),E("ngForOf",t.itemsidebar))},dependencies:[ge,he,L,ze,ke,ye],encapsulation:2})};var j=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-layout-private-header"]],decls:2,vars:0,consts:[[1,"w-full","h-auto","flex","justify-start","bg-[#06467a]"],["src","images/Logo.png","alt","logo",1,"max-w-40","max-h-24","h-auto","w-auto","p-3"]],template:function(e,t){e&1&&(a(0,"header",0),p(1,"img",1),c())},encapsulation:2})};var W=class o{static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-layout-private"]],decls:5,vars:0,consts:[[1,"flex"],[1,"w-full","max-w-52"],[1,"w-full"]],template:function(e,t){e&1&&(p(0,"app-layout-private-header"),a(1,"div",0),p(2,"app-layout-private-sidebar",1),a(3,"div",2),p(4,"router-outlet"),c()())},dependencies:[b,z,j],encapsulation:2})};var je=[{path:"auth-redirect",redirectTo:"home"},{path:"",redirectTo:"home",pathMatch:"full"},{path:"",component:T,children:[{path:"login",loadComponent:()=>import("./chunk-TSZA65OK.js").then(o=>o.LoginComponent)},{path:"recuperacao-senha",component:D}]},{path:"",component:W,children:[{path:"home",component:O},{path:"rota",component:P},{path:"cadastro",component:H}]}];var We={providers:[fe({eventCoalescing:!0}),Se(Ie()),Ee(je)]};var $=class o{title="ecorecicla-app";constructor(){}ngOnInit(){}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=l({type:o,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){e&1&&p(0,"router-outlet")},dependencies:[b],encapsulation:2})};_e($,We).catch(o=>console.error(o));
