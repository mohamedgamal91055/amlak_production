(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{urco:function(e,t,a){"use strict";a.r(t),a.d(t,"ReportsModule",(function(){return W}));var r=a("3Pt+"),i=a("ofXK"),s=a("cxbk"),n=a("fXoL"),o=a("0rIZ"),c=a("5aeq"),l=a("nm5K"),d=a("mAmA"),u=a("tyNb"),b=a("IYfF");function h(e,t){1&e&&(n.Rb(0,"label",16),n.Ic(1,"\u0627\u0644\u0645\u0648\u0627\u062f"),n.Qb())}function m(e,t){1&e&&(n.Rb(0,"label",16),n.Ic(1,"\u0627\u0644\u0645\u0648\u0631\u062f"),n.Qb())}function p(e,t){1&e&&(n.Rb(0,"label",16),n.Ic(1,"\u0634\u0631\u062d"),n.Qb())}function f(e,t){if(1&e){const e=n.Sb();n.Rb(0,"button",17),n.dc("click",(function(){n.zc(e);const t=n.hc();return t.addMaterials.emit(t.index+1)})),n.Nb(1,"i",18),n.Qb()}if(2&e){const e=n.hc();n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null)}}function g(e,t){1&e&&n.Nb(0,"i",19)}function v(e,t){1&e&&n.Nb(0,"i",20)}let _=(()=>{class e{constructor(e,t,a,r){this.formBuilder=e,this.apiService=t,this.toaster=a,this.authService=r,this.lastChild=!1,this.addMaterials=new n.n,this.deleteMaterials=new n.n,this.pageType="add",this.showLoader=!1,this.formSubmitted=!1}ngOnInit(){this.createForm(),this.data&&(this.pageType="edit",this.usedMaterialsForm.patchValue({material:this.data.material,supplier:this.data.supplier,note:this.data.note}))}createForm(){this.usedMaterialsForm=this.formBuilder.group({material:["",[r.q.required]],supplier:["",[r.q.required]],note:["",[r.q.required]]})}addUsedMaterials(e){this.formSubmitted=!0,this.usedMaterialsForm.valid&&(this.showLoader=!0,e.project=this.projectId,"add"===this.pageType?this.apiService.postReq("used-materials-staff/",e).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645\u062a \u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u0645\u0648\u0627\u062f \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.showLoader=!1,this.toaster.showError()}):this.apiService.patchReq(`used-materials-staff/${this.data.id}/`,e).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645\u062a \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0648\u0627\u062f \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.showLoader=!1,this.toaster.showError()}))}deleteMAterials(){this.apiService.deleteReq(`used-materials-staff/${this.data.id}/`).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645 \u0627\u0644\u062d\u0630\u0641"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.showLoader=!1,this.toaster.showError()})}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(r.c),n.Mb(l.a),n.Mb(d.a),n.Mb(b.a))},e.\u0275cmp=n.Gb({type:e,selectors:[["used-materials"]],inputs:{data:"data",index:"index",projectId:"projectId",lastChild:"lastChild"},outputs:{addMaterials:"addMaterials",deleteMaterials:"deleteMaterials"},decls:23,vars:18,consts:[[1,"form",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-11"],[1,"col-md-4","col-sm-6"],["class","control-label",4,"ngIf"],[1,"form-group"],["type","text","formControlName","material",1,"form-control"],["type","text","formControlName","supplier",1,"form-control"],["type","text","formControlName","note",1,"form-control"],[1,"col-md-1","d-flex","align-items-end","mb-3","justify-content-end"],["type","button","class","txt-green mr-1",3,"click",4,"ngIf"],["type","submit",1,"txt-green","mr-1",3,"disabled"],["class","fas fa-check",4,"ngIf"],["class","fas fa-spinner",4,"ngIf"],["type","button",1,"txt-red","mr-1",3,"click"],[1,"fas","fa-trash-alt"],[1,"control-label"],["type","button",1,"txt-green","mr-1",3,"click"],[1,"fas","fa-plus"],[1,"fas","fa-check"],[1,"fas","fa-spinner"]],template:function(e,t){1&e&&(n.Rb(0,"form",0),n.dc("ngSubmit",(function(){return t.addUsedMaterials(t.usedMaterialsForm.value)})),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",1),n.Rb(4,"div",3),n.Gc(5,h,2,0,"label",4),n.Rb(6,"div",5),n.Nb(7,"input",6),n.Qb(),n.Qb(),n.Rb(8,"div",3),n.Gc(9,m,2,0,"label",4),n.Rb(10,"div",5),n.Nb(11,"input",7),n.Qb(),n.Qb(),n.Rb(12,"div",3),n.Gc(13,p,2,0,"label",4),n.Rb(14,"div",5),n.Nb(15,"input",8),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(16,"div",9),n.Gc(17,f,2,1,"button",10),n.Rb(18,"button",11),n.Gc(19,g,1,0,"i",12),n.Gc(20,v,1,0,"i",13),n.Qb(),n.Rb(21,"button",14),n.dc("click",(function(){return t.deleteMaterials.emit(t.index),t.deleteMAterials()})),n.Nb(22,"i",15),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&e&&(n.oc("formGroup",t.usedMaterialsForm),n.zb(5),n.oc("ngIf",0===t.index),n.zb(2),n.Eb("err",t.formSubmitted&&t.usedMaterialsForm.get("material").invalid),n.Ab("disabled",null==t.authService||null==t.authService.userData||!t.authService.userData.add_edit||null),n.zb(2),n.oc("ngIf",0===t.index),n.zb(2),n.Eb("err",t.formSubmitted&&t.usedMaterialsForm.get("supplier").invalid),n.Ab("disabled",null==t.authService||null==t.authService.userData||!t.authService.userData.add_edit||null),n.zb(2),n.oc("ngIf",0===t.index),n.zb(2),n.Eb("err",t.formSubmitted&&t.usedMaterialsForm.get("note").invalid),n.Ab("disabled",null==t.authService||null==t.authService.userData||!t.authService.userData.add_edit||null),n.zb(2),n.oc("ngIf",t.lastChild),n.zb(1),n.oc("disabled",t.showLoader&&(null==t.authService||null==t.authService.userData?null:t.authService.userData.add_edit)),n.zb(1),n.oc("ngIf",!t.showLoader),n.zb(1),n.oc("ngIf",t.showLoader),n.zb(1),n.Ab("disabled",null==t.authService||null==t.authService.userData||!t.authService.userData.add_edit||null))},directives:[r.s,r.k,r.e,i.l,r.b,r.j,r.d],styles:["button[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer;padding:5px}"]}),e})();var y=a("PTt/"),R=a("xJkR");function S(e,t){1&e&&(n.Pb(0),n.Ic(1,"\u0627\u0636\u0627\u0641\u0629 \u062a\u0642\u0631\u064a\u0631"),n.Ob())}function Q(e,t){1&e&&(n.Pb(0),n.Ic(1,"\u062a\u0639\u062f\u064a\u0644 \u062a\u0642\u0631\u064a\u0631"),n.Ob())}function I(e,t){if(1&e&&(n.Rb(0,"a",29),n.Nb(1,"i",30),n.Qb()),2&e){const e=n.hc(2);n.rc("href","",e.environment.baseEndPointUrl,"/projects/",e.projectId,"/download_full_report/",n.Bc)}}function j(e,t){if(1&e&&(n.Rb(0,"option",31),n.Ic(1),n.Qb()),2&e){const e=t.$implicit;n.oc("value",e.id),n.zb(1),n.Kc(" ",e.name," ")}}function w(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div"),n.Rb(1,"used-materials",34),n.dc("deleteMaterials",(function(t){return n.zc(e),n.hc(3).usedMaterials.splice(t,1)}))("addMaterials",(function(t){return n.zc(e),n.hc(3).usedMaterials.push(t+1)})),n.Qb(),n.Qb()}if(2&e){const e=t.$implicit,a=t.index,r=n.hc(3);n.zb(1),n.oc("projectId",r.editProject.id)("data",e.id?e:null)("index",a)("lastChild",a===r.usedMaterials.length-1)}}function x(e,t){if(1&e&&(n.Rb(0,"div",32),n.Gc(1,w,2,4,"div",33),n.Qb()),2&e){const e=n.hc(2);n.zb(1),n.oc("ngForOf",e.usedMaterials)}}function M(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div",35),n.Rb(1,"div",36),n.Rb(2,"div",37),n.Rb(3,"div",38),n.Rb(4,"h4"),n.Nb(5,"i",39),n.Ic(6," \u0627\u0644\u0623\u0633\u0627\u0633\u0627\u062a "),n.Qb(),n.Qb(),n.Rb(7,"div",40),n.Rb(8,"div",41),n.Rb(9,"general-summary",42),n.dc("deleteGeneralSummary",(function(t){return n.zc(e),n.hc(2).deleteGeneralSummary(t)}))("refreshSummary",(function(t){return n.zc(e),n.hc(2).refresh(t)})),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(10,"div",37),n.Rb(11,"div",38),n.Rb(12,"h4"),n.Nb(13,"i",43),n.Ic(14," \u0627\u0644\u0645\u0628\u0627\u0646\u064a "),n.Qb(),n.Qb(),n.Rb(15,"div",40),n.Rb(16,"div",41),n.Rb(17,"general-summary",42),n.dc("deleteGeneralSummary",(function(t){return n.zc(e),n.hc(2).deleteGeneralSummary(t)}))("refreshSummary",(function(t){return n.zc(e),n.hc(2).refresh(t)})),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(18,"div",37),n.Rb(19,"div",38),n.Rb(20,"h4"),n.Nb(21,"i",44),n.Ic(22," \u0627\u0644\u062a\u0634\u0637\u064a\u0628 "),n.Qb(),n.Qb(),n.Rb(23,"div",40),n.Rb(24,"div",41),n.Rb(25,"general-summary",42),n.dc("deleteGeneralSummary",(function(t){return n.zc(e),n.hc(2).deleteGeneralSummary(t)}))("refreshSummary",(function(t){return n.zc(e),n.hc(2).refresh(t)})),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()}if(2&e){const e=n.hc(2);n.zb(9),n.oc("projectId",e.editProject.id)("stageType",1)("reportPage",!0)("data",e.foundationGeneralSummaryData)("mainStageId",e.foundationId)("type","foundation"),n.zb(8),n.oc("projectId",e.editProject.id)("stageType",2)("reportPage",!0)("data",e.buildingGeneralSummaryData)("mainStageId",e.buildingId)("type","building"),n.zb(8),n.oc("projectId",e.editProject.id)("stageType",3)("reportPage",!0)("data",e.finishingGeneralSummaryData)("mainStageId",e.finishingId)("type","finishing")}}function z(e,t){1&e&&(n.Rb(0,"div",64),n.Ic(1," pdf file "),n.Qb())}function P(e,t){if(1&e&&(n.Rb(0,"a",68),n.Ic(1," \u0639\u0631\u0636 "),n.Qb()),2&e){const e=n.hc(4);n.oc("href",e.editProject.company_general_summary,n.Bc)}}function G(e,t){if(1&e&&(n.Rb(0,"div",65),n.Gc(1,P,2,1,"a",66),n.Rb(2,"label",57),n.Nb(3,"input",67),n.Nb(4,"span",59),n.Ic(5," \u062d\u0630\u0641 "),n.Qb(),n.Qb()),2&e){const e=n.hc(3);n.Bb(e.editProject.company_general_summary?"justify-content-between":"justify-content-end"),n.zb(1),n.oc("ngIf",e.editProject.company_general_summary),n.zb(2),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null)}}function D(e,t){1&e&&(n.Rb(0,"div",64),n.Ic(1," pdf file "),n.Qb())}function F(e,t){if(1&e&&(n.Rb(0,"a",68),n.Ic(1," \u0639\u0631\u0636 "),n.Qb()),2&e){const e=n.hc(4);n.oc("href",e.editProject.consultant_general_summary,n.Bc)}}function N(e,t){if(1&e&&(n.Rb(0,"div",65),n.Gc(1,F,2,1,"a",66),n.Rb(2,"label",57),n.Nb(3,"input",69),n.Nb(4,"span",59),n.Ic(5," \u062d\u0630\u0641 "),n.Qb(),n.Qb()),2&e){const e=n.hc(3);n.Bb(e.editProject.consultant_general_summary?"justify-content-between":"justify-content-end"),n.zb(1),n.oc("ngIf",e.editProject.consultant_general_summary),n.zb(2),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null)}}function k(e,t){1&e&&n.Nb(0,"i",70)}function C(e,t){1&e&&n.Nb(0,"i",71)}function L(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div",45),n.Rb(1,"div",46),n.Rb(2,"h4"),n.Ic(3," \u062e\u0627\u062a\u0645\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),n.Qb(),n.Qb(),n.Rb(4,"div",47),n.Rb(5,"form",48),n.dc("ngSubmit",(function(){n.zc(e);const t=n.hc(2);return t.addConclusion(t.conclusionForm.value)})),n.Rb(6,"div",2),n.Rb(7,"div",49),n.Rb(8,"div",16),n.Rb(9,"label",50),n.Ic(10," \u0634\u0631\u062d \u0627\u0644\u062e\u0637\u0648\u0627\u062a "),n.Rb(11,"span",15),n.Ic(12,"*"),n.Qb(),n.Qb(),n.Nb(13,"textarea",51),n.Qb(),n.Qb(),n.Rb(14,"div",49),n.Rb(15,"div",16),n.Rb(16,"label",50),n.Ic(17," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0634\u0631\u0643\u0629 "),n.Qb(),n.Rb(18,"div",52),n.Rb(19,"input",53),n.dc("change",(function(t){return n.zc(e),n.hc(2).uploadReport(t,"company_general_summary")})),n.Qb(),n.Gc(20,z,2,0,"div",54),n.Qb(),n.Nb(21,"i",55),n.Qb(),n.Gc(22,G,6,4,"div",56),n.Rb(23,"div",16),n.Rb(24,"label",57),n.Nb(25,"input",58),n.Nb(26,"span",59),n.Ic(27," \u0627\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u062f \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629 \u0644\u0644\u0632\u0627\u0626\u0631 "),n.Qb(),n.Qb(),n.Qb(),n.Rb(28,"div",49),n.Rb(29,"div",16),n.Rb(30,"label",50),n.Ic(31," \u0627\u0644\u0645\u0644\u062e\u0635 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u064a "),n.Qb(),n.Rb(32,"div",52),n.Rb(33,"input",53),n.dc("change",(function(t){return n.zc(e),n.hc(2).uploadReport(t,"consultant_general_summary")})),n.Qb(),n.Gc(34,D,2,0,"div",54),n.Qb(),n.Nb(35,"i",55),n.Qb(),n.Gc(36,N,6,4,"div",56),n.Qb(),n.Qb(),n.Rb(37,"div",60),n.Rb(38,"button",61),n.Gc(39,k,1,0,"i",62),n.Gc(40,C,1,0,"i",63),n.Ic(41," \u062d\u0641\u0638 "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb()}if(2&e){const e=n.hc(2);n.zb(5),n.oc("formGroup",e.conclusionForm),n.zb(8),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null),n.zb(6),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null),n.zb(1),n.oc("ngIf",e.conclusionForm.get("company_general_summary").value),n.zb(2),n.oc("ngIf",e.conclusionForm.get("company_general_summary").value),n.zb(3),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null),n.zb(8),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null),n.zb(1),n.oc("ngIf",e.conclusionForm.get("consultant_general_summary").value),n.zb(2),n.oc("ngIf",e.conclusionForm.get("consultant_general_summary").value),n.zb(2),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null),n.zb(1),n.oc("ngIf",!e.showLoader),n.zb(1),n.oc("ngIf",e.showLoader)}}function q(e,t){if(1&e){const e=n.Sb();n.Rb(0,"div",2),n.Rb(1,"div",3),n.Rb(2,"div",4),n.Rb(3,"div",5),n.Rb(4,"h3"),n.Nb(5,"i",6),n.Gc(6,S,2,0,"ng-container",7),n.Gc(7,Q,2,0,"ng-container",7),n.Qb(),n.Rb(8,"div"),n.Gc(9,I,2,2,"a",8),n.Rb(10,"a",9),n.Nb(11,"i",10),n.Qb(),n.Qb(),n.Qb(),n.Rb(12,"div",11),n.Rb(13,"form",12),n.Rb(14,"div",2),n.Rb(15,"div",13),n.Rb(16,"label",14),n.Nb(17,"i",6),n.Ic(18," \u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),n.Rb(19,"span",15),n.Ic(20,"*"),n.Qb(),n.Qb(),n.Rb(21,"div",16),n.Rb(22,"select",17),n.dc("change",(function(t){return n.zc(e),n.hc().projectChange(t.target.value)})),n.Rb(23,"option",18),n.Ic(24," \u0627\u062e\u062a\u0631 "),n.Qb(),n.Gc(25,j,2,2,"option",19),n.Qb(),n.Qb(),n.Qb(),n.Rb(26,"div",13),n.Rb(27,"label",14),n.Nb(28,"i",20),n.Ic(29," \u0627\u0644\u0639\u0645\u064a\u0644 "),n.Rb(30,"span",15),n.Ic(31,"*"),n.Qb(),n.Qb(),n.Rb(32,"div",16),n.Nb(33,"input",21),n.Qb(),n.Qb(),n.Rb(34,"div",13),n.Rb(35,"label",14),n.Nb(36,"i",22),n.Ic(37," \u0643\u0648\u062f \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),n.Rb(38,"span",15),n.Ic(39,"*"),n.Qb(),n.Qb(),n.Rb(40,"div",16),n.Nb(41,"input",23),n.Qb(),n.Qb(),n.Rb(42,"div",13),n.Rb(43,"label",14),n.Nb(44,"i",24),n.Ic(45," \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 "),n.Rb(46,"span",15),n.Ic(47,"*"),n.Qb(),n.Qb(),n.Rb(48,"div",16),n.Nb(49,"input",25),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Gc(50,x,2,1,"div",26),n.Gc(51,M,26,18,"div",27),n.Gc(52,L,42,12,"div",28),n.Qb(),n.Qb(),n.Qb(),n.Qb()}if(2&e){const e=n.hc();n.zb(6),n.oc("ngIf","add"===e.pageType),n.zb(1),n.oc("ngIf","edit"===e.pageType),n.zb(2),n.oc("ngIf","edit"===e.pageType&&e.authService.userData.reports_download),n.zb(4),n.oc("formGroup",e.projectForm),n.zb(9),n.Ab("disabled",null==e.authService||null==e.authService.userData||!e.authService.userData.add_edit||null),n.zb(3),n.oc("ngForOf",e.projects),n.zb(25),n.oc("ngIf",e.showBody),n.zb(1),n.oc("ngIf",e.showBody),n.zb(1),n.oc("ngIf",e.showBody)}}function B(e,t){1&e&&n.Nb(0,"ngx-skeleton-loader",72)}let E=(()=>{class e{constructor(e,t,a,r,i,n,o){this.formBuilder=e,this.clientsService=t,this.projectsService=a,this.apiService=r,this.toaster=i,this.router=n,this.authService=o,this.pageType="add",this.pageLoading=!0,this.foundationGeneralSummary=!1,this.buildingGeneralSummary=!1,this.finishingGeneralSummary=!1,this.usedMaterials=[1],this.showBody=!1,this.formData=new FormData,this.environment=s.a,this.showLoader=!1}ngOnInit(){this.router.params.subscribe(e=>{e.id&&(this.getProjectDetails(e.id,!0),this.pageType="edit",this.projectId=e.id)}),this.projectsService.projects?(this.projects=this.projectsService.projects,this.pageLoading=!1):this.getProjects(),this.createForm()}getClients(){this.clientsService.getClients().subscribe(e=>{e.status&&(this.clients=e.data)})}projectChange(e){e&&(this.editProject=this.projectsService.findProject(e),this.setFormData(this.editProject))}getProjects(){this.projectsService.getProjects().subscribe(e=>{e.status?(this.projects=e.data,this.projectsService.projects=this.projects,this.pageLoading=!1):this.toaster.showError(e.message)},e=>{this.toaster.showError(e.statusText)})}createForm(){this.projectForm=this.formBuilder.group({name:["",[r.q.required]],client:["",[r.q.required]],code:[null,[r.q.required]],address:[null,[r.q.required]]}),this.addProjectForm=this.formBuilder.group({bases:this.formBuilder.array([]),buildings:this.formBuilder.array([]),finishing:this.formBuilder.array([])}),this.conclusionForm=this.formBuilder.group({steps_explain:[null,[r.q.required]],company_general_summary:[null],delete_company_general_summary:[null],consultant_general_summary:[null],delete_consultant_general_summary:[null],show_used_materials_to_visitor:[!1]})}getProjectDetails(e,t=!1){e&&this.apiService.getReq(`projects/${e}/`).subscribe(e=>{e.status?(this.editProject=e.data,this.foundationId=e.data.foundation[0].id,this.buildingId=e.data.building[0].id,this.finishingId=e.data.finishing[0].id,t&&(this.conclusionForm.patchValue({steps_explain:this.editProject.steps_explain||"",company_general_summary:this.editProject.company_general_summary||"",consultant_general_summary:this.editProject.consultant_general_summary||"",show_used_materials_to_visitor:this.editProject.show_used_materials_to_visitor||!1}),this.pageLoading=!1,this.setFormData(this.editProject),e.data.used_materials.length&&(this.usedMaterials=e.data.used_materials),e.data.foundation.forEach(e=>{e.is_report&&(e.steps_explain&&(this.foundationGeneralSummaryData=e),this.foundationId=e.id)}),e.data.building.forEach(e=>{e.is_report&&(e.steps_explain&&(this.buildingGeneralSummaryData=e),this.buildingId=e.id)}),e.data.finishing.forEach(e=>{e.is_report&&(this.finishingId=e.id,e.steps_explain&&(this.finishingGeneralSummaryData=e))}))):this.toaster.showError(e.message)},e=>{this.toaster.showError()})}setFormData(e){this.showBody=!0,this.projectForm.patchValue({name:e.id,client:e.client.username,code:e.code,address:e.address})}deleteGeneralSummary(e){switch(e.type){case"foundation":this.foundationGeneralSummary=!1;break;case"building":this.buildingGeneralSummary=!1;break;case"finishing":this.finishingGeneralSummary=!1}}uploadReport(e,t){const a=e.target.files[0];switch(this.conclusionForm.markAsDirty(),t){case"company_general_summary":this.formData.append("company_general_summary",a,a.name),this.conclusionForm.get("company_general_summary").setValue(a);break;case"consultant_general_summary":this.formData.append("consultant_general_summary",a,a.name),this.conclusionForm.get("consultant_general_summary").setValue(a)}}addConclusion(e){this.conclusionForm.valid&&(this.showLoader=!0,this.formData.append("steps_explain",e.steps_explain),this.formData.append("show_used_materials_to_visitor",e.show_used_materials_to_visitor),this.conclusionForm.get("delete_company_general_summary").value&&(this.formData.append("company_general_summary",""),this.conclusionForm.get("company_general_summary").setValue(null),this.conclusionForm.get("delete_company_general_summary").setValue(null)),this.conclusionForm.get("delete_consultant_general_summary").value&&(this.formData.append("consultant_general_summary",""),this.conclusionForm.get("consultant_general_summary").setValue(null),this.conclusionForm.get("delete_consultant_general_summary").setValue(null)),this.apiService.patchReq(`projects/${this.editProject.id}/`,this.formData).subscribe(e=>{e.status?this.toaster.showSuccess("\u062a\u0645\u062a \u062a\u062d\u062f\u064a\u062b \u062e\u0627\u062a\u0645\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0628\u0646\u062c\u0627\u062c"):this.toaster.showError(e.errors.length?e.errors[0].split(":")[1]:e.message),this.showLoader=!1},e=>{this.toaster.showError(),this.showLoader=!1}))}refresh(e){e&&this.getProjectDetails(this.projectId,!0)}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(r.c),n.Mb(o.a),n.Mb(c.a),n.Mb(l.a),n.Mb(d.a),n.Mb(u.a),n.Mb(b.a))},e.\u0275cmp=n.Gb({type:e,selectors:[["add-report"]],decls:2,vars:2,consts:[["class","row",4,"ngIf"],["count","10","animation","pulse",4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-title","add","d-flex","justify-content-between"],[1,"fas","fa-home"],[4,"ngIf"],["class","back-icon ml-3","target","blank",3,"href",4,"ngIf"],["routerLink","/landing/reports",1,"back-icon"],[1,"fas","fa-chevron-left"],[1,"card-body"],[1,"form",3,"formGroup"],[1,"col-md-3","col-sm-6"],["for","",1,"control-label"],[1,"annotation-required"],[1,"form-group"],["formControlName","name",1,"form-control","select",3,"change"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"fas","fa-user"],["disabled","","type","text","formControlName","client",1,"form-control"],[1,"fas","fa-calendar"],["disabled","","type","text","formControlName","code",1,"form-control"],[1,"fas","fa-map-marker-alt"],["disabled","","type","text","formControlName","address",1,"form-control"],["class","used-materials",4,"ngIf"],["class","steps",4,"ngIf"],["class","project-conclusion",4,"ngIf"],["target","blank",1,"back-icon","ml-3",3,"href"],[1,"fas","fa-file-pdf"],[3,"value"],[1,"used-materials"],[4,"ngFor","ngForOf"],[3,"projectId","data","index","lastChild","deleteMaterials","addMaterials"],[1,"steps"],[1,"row","no-gutters"],[1,"step","col-md-4"],[1,"step-title"],[1,"fas","fa-tools"],[1,"step-body"],[1,"sub-stage"],[3,"projectId","stageType","reportPage","data","mainStageId","type","deleteGeneralSummary","refreshSummary"],[1,"fas","fa-building"],[1,"fas","fa-paint-roller"],[1,"project-conclusion"],[1,"title"],[1,"body"],[1,"form",3,"formGroup","ngSubmit"],[1,"col-md-4","col-sm-6"],[1,"control-label"],["rows","4","formControlName","steps_explain",1,"form-control"],[1,"file"],["type","file","accept","application/pdf",1,"form-control",3,"change"],["class","report-name",4,"ngIf"],[1,"fas","fa-paperclip"],["class","d-flex report-options",3,"class",4,"ngIf"],[1,"checkbox-container"],["type","checkbox","formControlName","show_used_materials_to_visitor"],[1,"checkmark"],[1,"d-flex","justify-content-end","action-btns"],["type","submit",1,"btn","btn-green"],["class","fas fa-save",4,"ngIf"],["class","fas fa-spinner",4,"ngIf"],[1,"report-name"],[1,"d-flex","report-options"],["target","blank","class","show",3,"href",4,"ngIf"],["type","checkbox","formControlName","delete_company_general_summary"],["target","blank",1,"show",3,"href"],["type","checkbox","formControlName","delete_consultant_general_summary"],[1,"fas","fa-save"],[1,"fas","fa-spinner"],["count","10","animation","pulse"]],template:function(e,t){1&e&&(n.Gc(0,q,53,9,"div",0),n.Gc(1,B,1,0,"ngx-skeleton-loader",1)),2&e&&(n.oc("ngIf",!t.pageLoading),n.zb(1),n.oc("ngIf",t.pageLoading))},directives:[i.l,u.e,r.s,r.k,r.e,r.p,r.j,r.d,r.m,r.r,i.k,r.b,_,y.a,r.a,R.a],styles:[".project-conclusion[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:20px -20px 10px;padding:8px;text-align:center;background-color:#186076;color:#fff}span.txt-red[_ngcontent-%COMP%]{margin-top:-20px}.report-name[_ngcontent-%COMP%], a.show[_ngcontent-%COMP%], span.txt-red[_ngcontent-%COMP%]{font-size:.9rem}.checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]{right:10px;height:12px;width:12px}.checkbox-container[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%]:after{left:3px;top:0;width:4px;height:9px}.report-options[_ngcontent-%COMP%]{margin-top:-15px}"]}),e})();var O=a("PdH4"),A=a.n(O),T=a("yByJ"),K=a("lkLn");const V=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",nameKey:"name",icon:"fas fa-home"}},$=function(){return{name:"\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064a\u0644",nameKey:"client",icon:"fas fa-user"}},J=function(){return{name:"\u062d\u0627\u0644\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639",nameKey:"status",icon:"far fa-lightbulb"}},H=function(){return{name:"\u0646\u0633\u0628\u0629 \u0627\u0644\u0627\u0646\u062c\u0627\u0632",nameKey:"total_completion_rate",icon:"fas fa-circle-notch"}},U=function(e,t,a,r){return[e,t,a,r]},X=[{path:"",component:(()=>{class e{constructor(e,t,a,r,i){this.projectsService=e,this.router=t,this.toaster=a,this.apiService=r,this.headerData=i,i.showSideBar=!1}ngOnInit(){this.getProjects()}getProjects(){this.projectsService.getProjects().subscribe(e=>{e.status?this.projects=e.data:this.toaster.showError(e.message)},e=>{this.toaster.showError(e.statusText)})}addRrport(){this.router.navigate(["/landing/reports/add"])}editRrport(e){this.router.navigate(["/landing/reports/edit/"+e.id])}deleteRrport(e){A.a.fire({title:"\u0647\u0644 \u0627\u0646\u062a \u0645\u062a\u0627\u0643\u062f \u061f",icon:"danger",showCancelButton:!0,confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0627\u0644\u063a\u0627\u0621"}).then(t=>{t.value&&this.apiService.deleteReq(`projects/${e}/delete_report/`).subscribe(e=>{e.status?(this.getProjects(),A.a.fire("\u062a\u0645")):this.toaster.showError(e.message)},e=>{this.toaster.showError()})})}}return e.\u0275fac=function(t){return new(t||e)(n.Mb(c.a),n.Mb(u.b),n.Mb(d.a),n.Mb(l.a),n.Mb(T.a))},e.\u0275cmp=n.Gb({type:e,selectors:[["report"]],decls:3,vars:12,consts:[[1,"row"],[1,"col-md-12"],[3,"addLabel","data","tableHeads","add","edit","delete"]],template:function(e,t){1&e&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"data-table",2),n.dc("add",(function(){return t.addRrport()}))("edit",(function(e){return t.editRrport(e)}))("delete",(function(e){return t.deleteRrport(e)})),n.Qb(),n.Qb(),n.Qb()),2&e&&(n.zb(2),n.oc("addLabel","\u0627\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0639\u0627\u0645")("data",t.projects)("tableHeads",n.wc(7,U,n.sc(3,V),n.sc(4,$),n.sc(5,J),n.sc(6,H))))},directives:[K.a],styles:[""]}),e})()},{path:"add",component:E},{path:"edit/:id",component:E}];let Y=(()=>{class e{}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[u.f.forChild(X)],u.f]}),e})();var Z=a("PCNd");let W=(()=>{class e{}return e.\u0275mod=n.Kb({type:e}),e.\u0275inj=n.Jb({factory:function(t){return new(t||e)},imports:[[i.b,Y,Z.a,r.f,r.o]]}),e})()}}]);