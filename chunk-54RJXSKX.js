import{Ga as i,Ia as E,W as a,_ as c,ca as h,db as L,eb as _,ha as u,jb as w,ka as d,kc as T,lb as p,lc as k,nb as C,ob as y,pa as m,pb as M,pc as G,rb as x,sa as o,sb as I,sc as R,ta as t,tb as F,tc as P,ua as f,ub as N,uc as j,vb as D,wb as q,xa as b,ya as S}from"./chunk-MN5XXI6M.js";function V(n,r){n&1&&(o(0,"mat-error"),i(1," O campo email \xE9 "),o(2,"strong"),i(3,"obrigat\xF3rio"),t(),i(4,". "),t())}function A(n,r){n&1&&(o(0,"mat-error"),i(1," Insira um endere\xE7o de email v\xE1lido. "),t())}function z(n,r){n&1&&(o(0,"mat-error"),i(1,"O campo senha \xE9 "),o(2,"strong"),i(3,"obrigat\xF3rio"),t(),i(4,"."),t())}function B(n,r){if(n&1&&(o(0,"div",10),i(1),t()),n&2){let e=S();a(),E(" ",e.loginErrorMessage," ")}}var O=class n{constructor(r,e){this._loginService=r;this._router=e}formularioLogin=new M({email:new x("",[p.required,p.email]),password:new x("",[p.required])});loginSuccess=null;loginErrorMessage=null;getLogin(){let r={email:this.formularioLogin.get("email").value,password:this.formularioLogin.get("password").value}}onSubmit(){let r={email:this.formularioLogin.get("email")?.value,password:this.formularioLogin.get("password")?.value};this._loginService.getLogin(r).subscribe(e=>{e.success==!0?(this.loginSuccess=e.success,this._router.navigate(["/auth-redirect"]),localStorage.setItem("tokenId",e.token)):(this.loginSuccess=e.success,this.loginErrorMessage=e.message)},e=>{this.loginSuccess=e.error.success,this.loginErrorMessage=e.error.message})}static \u0275fac=function(e){return new(e||n)(c(j),c(L))};static \u0275cmp=h({type:n,selectors:[["app-login"]],decls:28,vars:7,consts:[[1,"flex","justify-center","items-center","pt-5"],[1,"flex","items-center","flex-col","bg-white","w-full","max-w-lg","h-auto","rounded-3xl","mx-2","shadow-xl"],[1,"pt-5"],[1,"text-3xl","text-[#06467a]","font-semibold"],[1,"p-5","px-10","w-full"],["action","",1,"flex","flex-col",3,"ngSubmit","formGroup"],[1,"text-white","text-sm"],[1,"w-full"],["id","campoEmail","matInput","","type","text","formControlName","email",1,"bg-white","rounded-2xl"],["id","campoSenha","matInput","","type","password","formControlName","password",1,"bg-white","rounded-2xl"],[1,"bg-red-200","text-red-800","border","border-red-800","p-4","rounded-md"],[1,"flex","flex-col","gap-2","pb-5","pt-4"],["type","submit",1,"bg-blue-500","text-white","rounded-3xl","h-10","hover:bg-blue-600","cursor-pointer","disabled:bg-gray-600",3,"disabled"],[1,"bg-green-900","text-white","rounded-3xl","h-10","hover:bg-green-950","cursor-pointer",3,"routerLink"]],template:function(e,l){if(e&1&&(o(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),i(4,"Login"),t()(),o(5,"div",4)(6,"form",5),b("ngSubmit",function(){return l.onSubmit()}),o(7,"span",6),i(8," Digite seu email "),t(),o(9,"mat-form-field",7)(10,"mat-label"),i(11,"Email"),t(),f(12,"input",8),u(13,V,5,0,"mat-error")(14,A,2,0,"mat-error"),t(),o(15,"span",6),i(16," Digite sua senha "),t(),o(17,"mat-form-field",7)(18,"mat-label"),i(19,"Senha"),t(),f(20,"input",9),u(21,z,5,0,"mat-error"),t(),u(22,B,2,1,"div",10),o(23,"div",11)(24,"button",12),i(25," Entrar "),t(),o(26,"button",13),i(27," Esqueci minha senha "),t()()()()()()),e&2){let g,s,v;a(6),d("formGroup",l.formularioLogin),a(7),m((g=l.formularioLogin.get("email"))!=null&&g.hasError("required")?13:-1),a(),m((s=l.formularioLogin.get("email"))!=null&&s.hasError("email")&&!((s=l.formularioLogin.get("email"))!=null&&s.hasError("required"))?14:-1),a(7),m((v=l.formularioLogin.get("password"))!=null&&v.hasError("required")?21:-1),a(),m(l.loginSuccess==!1?22:-1),a(2),d("disabled",l.formularioLogin.invalid),a(2),d("routerLink","/recuperacao-senha")}},dependencies:[_,P,R,G,T,k,D,I,w,C,y,q,F,N],encapsulation:2})};export{O as LoginComponent};
