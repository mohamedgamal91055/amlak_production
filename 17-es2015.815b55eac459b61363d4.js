(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{XEKE:function(e,t,s){"use strict";s.r(t),s.d(t,"SettingsModule",(function(){return U}));var r=s("ofXK"),i=s("3Pt+"),a=s("fXoL"),o=s("vkgz"),d=s("nm5K");let n=(()=>{class e{constructor(e){this.apiService=e}get users(){return this._users}set users(e){this._users=e}getStaffUsers(){return this.apiService.getReq("staff-users/").pipe(Object(o.a)(e=>{e.status&&(this.users=e.data)}))}getUserDetails(e){return this.users.find(t=>t.id==e)}}return e.\u0275fac=function(t){return new(t||e)(a.Zb(d.a))},e.\u0275prov=a.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=s("mAmA"),l=s("tyNb"),u=s("Pd9Q");function c(e,t){if(1&e&&(a.Rb(0,"div",26),a.Rb(1,"label",27),a.Nb(2,"input",28),a.Nb(3,"span",29),a.Hc(4),a.Qb(),a.Qb()),2&e){const e=t.$implicit,s=t.index;a.zb(2),a.oc("value",e.value)("formControlName",e.value)("checked",0===s),a.zb(2),a.Jc(" ",e.key," ")}}let m=(()=>{class e{constructor(e,t,s,r,i){this.formBuilder=e,this.usersService=t,this.toaster=s,this.router=r,this.apiService=i,this.formSubmitted=!1,this.loading=!1,this.roles=[{key:"\u0627\u0644\u0627\u0637\u0644\u0627\u0639 \u0641\u0642\u0637",value:"view_only"},{key:"\u0627\u0645\u0643\u0627\u0646\u064a\u0629 \u062a\u0646\u0632\u064a\u0644 \u0627\u0644\u062a\u0642\u0627\u0631\u064a\u0631",value:"reports_download"},{key:"\u0627\u0644\u0627\u0636\u0627\u0641\u0629 \u0648\u0627\u0644\u062a\u0639\u062f\u064a\u0644",value:"add_edit"},{key:"\u0627\u0644\u062d\u0630\u0641",value:"delete_permission"}],this.pageType="add"}ngOnInit(){this.createForm(),this.router.params.subscribe(e=>{e.id&&(this.id=e.id)}),this.usersService.users?(this.users=this.usersService.users,this.fillUserData()):this.getUsers()}createForm(){this.addUserForm=this.formBuilder.group({full_name:[null,[i.q.required]],phone_number:[null,[i.q.required]],email:[null,[i.q.required,i.q.email]],username:[null,[i.q.required]],new_password1:[null,[i.q.required]],view_only:[!0,[i.q.required]],reports_download:[!1,[i.q.required]],add_edit:[!1,[i.q.required]],delete_permission:[!1,[i.q.required]]})}getUsers(){this.usersService.getStaffUsers().subscribe(e=>{e.status?(this.users=e.data,this.id&&this.fillUserData()):this.toaster.showError(e.message)},e=>{this.toaster.showError()})}fillUserData(){if(this.id){const e=this.usersService.getUserDetails(this.id);this.addUserForm.patchValue({full_name:e.full_name,phone_number:e.phone_number,email:e.email,username:e.username,new_password1:"",view_only:e.view_only,reports_download:e.reports_download,add_edit:e.add_edit,delete_permission:e.delete_permission})}}addUser(e){this.formSubmitted=!0,this.addUserForm.valid&&(this.loading=!0,this.id?this.apiService.patchReq(`staff-users/${this.id}/`,{view_only:e.view_only,reports_download:e.reports_download,add_edit:e.add_edit,delete_permission:e.delete_permission}).subscribe(e=>{e.status?(this.formSubmitted=!1,this.usersService.users=null,this.toaster.showSuccess("\u062a\u0645 \u062a\u0639\u062f\u064a\u0644 \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d")):(this.toaster.showError(e.message),this.formSubmitted=!1),this.loading=!1},e=>{this.loading=!1,this.toaster.showError(),this.formSubmitted=!1}):(e.new_password2=e.new_password1,this.apiService.postReq("staff-users/",e).subscribe(e=>{e.status?(this.toaster.showSuccess("\u062a\u0645 \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0628\u0646\u062c\u0627\u062d"),this.usersService.users=null,this.formSubmitted=!1):(this.toaster.showError(e.errors.length?e.errors[0]:e.message),this.formSubmitted=!1),this.loading=!1},e=>{this.loading=!1,this.formSubmitted=!1,this.toaster.showError()})))}get rolesFilds(){return this.addUserForm.get("roles")}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(i.c),a.Mb(n),a.Mb(b.a),a.Mb(l.a),a.Mb(d.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["add-user"]],decls:64,vars:20,consts:[[1,"card"],[1,"card-title","add"],[1,"fas","fa-user-plus"],[1,"card-body"],[1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-4","col-sm-6"],[1,"form-group"],[1,"control-label"],[1,"annotation-required"],["type","text","formControlName","full_name",1,"form-control",3,"disabled"],[1,"fas","fa-user"],["type","text","numbersOnly","","formControlName","phone_number",1,"form-control",3,"disabled"],[1,"fas","fa-mobile-alt"],["type","email","formControlName","email",1,"form-control",3,"disabled"],[1,"fas","fa-envelope"],["type","text","formControlName","username",1,"form-control",3,"disabled"],["type","password","formControlName","new_password1",1,"form-control",3,"disabled"],[1,"fas","fa-lock"],[1,"col-12"],["class","my-3 col-lg-2 col-md-3 col-sm-6",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-end"],["type","submit",1,"btn","btn-green",3,"disabled"],[1,"fas","fa-save"],["routerLink","/landing/settings",1,"btn","btn-red","mr-2"],[1,"fas","fa-times-circle"],[1,"my-3","col-lg-2","col-md-3","col-sm-6"],[1,"checkbox-container"],["type","checkbox",3,"value","formControlName","checked"],[1,"checkmark"]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"h3"),a.Nb(3,"i",2),a.Hc(4," \u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645 "),a.Qb(),a.Qb(),a.Rb(5,"div",3),a.Rb(6,"form",4),a.dc("ngSubmit",(function(){return t.addUser(t.addUserForm.value)})),a.Rb(7,"div",5),a.Rb(8,"div",6),a.Rb(9,"div",7),a.Rb(10,"label",8),a.Hc(11," \u0627\u0644\u0627\u0633\u0645 "),a.Rb(12,"span",9),a.Hc(13,"*"),a.Qb(),a.Qb(),a.Nb(14,"input",10),a.Nb(15,"i",11),a.Qb(),a.Qb(),a.Rb(16,"div",6),a.Rb(17,"div",7),a.Rb(18,"label",8),a.Hc(19," \u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644 "),a.Rb(20,"span",9),a.Hc(21,"*"),a.Qb(),a.Qb(),a.Nb(22,"input",12),a.Nb(23,"i",13),a.Qb(),a.Qb(),a.Rb(24,"div",6),a.Rb(25,"div",7),a.Rb(26,"label",8),a.Hc(27," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0643\u062a\u0631\u0648\u0646\u064a "),a.Rb(28,"span",9),a.Hc(29,"*"),a.Qb(),a.Qb(),a.Nb(30,"input",14),a.Nb(31,"i",15),a.Qb(),a.Qb(),a.Rb(32,"div",6),a.Rb(33,"div",7),a.Rb(34,"label",8),a.Hc(35," \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 "),a.Rb(36,"span",9),a.Hc(37,"*"),a.Qb(),a.Qb(),a.Nb(38,"input",16),a.Nb(39,"i",11),a.Qb(),a.Qb(),a.Rb(40,"div",6),a.Rb(41,"div",7),a.Rb(42,"label",8),a.Hc(43," \u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064a "),a.Rb(44,"span",9),a.Hc(45,"*"),a.Qb(),a.Qb(),a.Nb(46,"input",17),a.Nb(47,"i",18),a.Qb(),a.Qb(),a.Qb(),a.Rb(48,"div",5),a.Rb(49,"div",19),a.Rb(50,"div",7),a.Rb(51,"label",8),a.Hc(52," \u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 "),a.Rb(53,"span",9),a.Hc(54,"*"),a.Qb(),a.Qb(),a.Rb(55,"div",5),a.Fc(56,c,5,4,"div",20),a.Qb(),a.Qb(),a.Rb(57,"div",21),a.Rb(58,"button",22),a.Nb(59,"i",23),a.Hc(60," \u062d\u0641\u0638 "),a.Qb(),a.Rb(61,"a",24),a.Nb(62,"i",25),a.Hc(63," \u0627\u0644\u063a\u0627\u0621"),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb(),a.Qb()),2&e&&(a.zb(6),a.oc("formGroup",t.addUserForm),a.zb(8),a.Eb("err",t.formSubmitted&&t.addUserForm.get("full_name").invalid),a.oc("disabled",t.id),a.zb(8),a.Eb("err",t.formSubmitted&&t.addUserForm.get("phone_number").invalid),a.oc("disabled",t.id),a.zb(8),a.Eb("err",t.formSubmitted&&t.addUserForm.get("email").invalid),a.oc("disabled",t.id),a.zb(8),a.Eb("err",t.formSubmitted&&t.addUserForm.get("username").invalid),a.oc("disabled",t.id),a.zb(8),a.Eb("err",t.formSubmitted&&t.addUserForm.get("new_password1").invalid),a.oc("disabled",t.id),a.zb(10),a.oc("ngForOf",t.roles),a.zb(2),a.Eb("actionBtn",t.loading),a.oc("disabled",t.loading))},directives:[i.s,i.k,i.e,i.b,i.j,i.d,u.a,r.k,l.e,i.a],styles:[""]}),e})();var f=s("PdH4"),h=s.n(f),p=s("yByJ"),v=s("lkLn");const g=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645",nameKey:"username",icon:"fas fa-user"}},w=function(){return{name:"\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644",nameKey:"phone_number",icon:"fas fa-mobile-alt"}},R=function(){return{name:"\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0627\u0644\u0643\u062a\u0631\u0648\u0646\u064a",nameKey:"email",icon:"fas fa-envelope"}},_=function(e,t,s){return[e,t,s]},Q=[{path:"",component:(()=>{class e{constructor(e,t,s,r,i){this.usersService=e,this.router=t,this.toaster=s,this.apiService=r,this.headerData=i,i.showSideBar=!1}ngOnInit(){this.getUsers()}getUsers(){this.usersService.getStaffUsers().subscribe(e=>{e.status?this.users=e.data:this.toaster.showError(e.message)},e=>{this.toaster.showError()})}addUser(){this.router.navigate(["/landing/settings/add-user"])}editUser(e){this.router.navigate(["/landing/settings/edit-user/"+e.id])}deleteUser(e){h.a.fire({title:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u061f",icon:"danger",showCancelButton:!0,confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0627\u0644\u063a\u0627\u0621"}).then(t=>{t.value&&this.apiService.deleteReq(`staff-users/${e}/`).subscribe(e=>{e.status?(this.getUsers(),h.a.fire("\u062a\u0645")):this.toaster.showError(e.message)},e=>{this.toaster.showError()})})}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(n),a.Mb(l.b),a.Mb(b.a),a.Mb(d.a),a.Mb(p.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["settings"]],decls:3,vars:10,consts:[[1,"row"],[1,"col-md-12"],[3,"data","addLabel","tableHeads","add","edit","delete"]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Rb(1,"div",1),a.Rb(2,"data-table",2),a.dc("add",(function(){return t.addUser()}))("edit",(function(e){return t.editUser(e)}))("delete",(function(e){return t.deleteUser(e)})),a.Qb(),a.Qb(),a.Qb()),2&e&&(a.zb(2),a.oc("data",t.users)("addLabel"," \u0627\u0636\u0627\u0641\u0629 \u0645\u0633\u062a\u062e\u062f\u0645")("tableHeads",a.uc(6,_,a.rc(3,g),a.rc(4,w),a.rc(5,R))))},directives:[v.a],styles:[""]}),e})()},{path:"add-user",component:m},{path:"edit-user/:id",component:m}];let y=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[l.f.forChild(Q)],l.f]}),e})();var S=s("PCNd");let U=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[r.b,y,S.a,i.f,i.o,S.a]]}),e})()}}]);