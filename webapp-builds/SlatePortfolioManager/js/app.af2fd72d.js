(function(e){function t(t){for(var n,o,i=t[0],r=t[1],c=t[2],u=0,p=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&p.push(l[o][0]),l[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,i=1;i<s.length;i++){var r=s[i];0!==l[r]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},l={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var d=r;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"11c3":function(e,t,s){"use strict";s("4868")},"304d":function(e,t,s){},"36bf":function(e,t,s){},"40a8":function(e,t,s){"use strict";s("304d")},4868:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("2b0e"),l=s("5f5b"),a=s("ecee"),o=s("c074"),i=s("b702"),r=s("ad3d"),c=s("be92"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("router-view"),s("ui-root")],1)},u=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.alert?s("div",[s("div",{staticClass:"modal-backdrop fade show"}),s("div",{staticClass:"modal",staticStyle:{display:"block"}},[s("div",{staticClass:"modal-dialog"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-body"},[e._v(" "+e._s(e.alert.body)+" ")]),s("div",{staticClass:"modal-footer"},e._l(e.alert.actions,(function(t,n){return s("button",{key:n,class:t.class||"btn btn-primary",attrs:{type:"button"},on:{click:t.click}},[e._v(" "+e._s(t.text)+" ")])})),0)])])])]):e._e()])},m=[],h=Object(c["c"])("ui",{state:()=>({alert:null,confirm:null,dragging:null}),actions:{alert(e){e&&!e.actions&&(e.actions=[{text:"Close",click:()=>this.alert(null)}]),this.$state.alert=e},confirm(e,t){this.alert({body:e,actions:[{text:"Cancel",class:"btn btn-secondary",click:()=>this.alert(null)},{text:"Confirm",click:()=>{this.alert(null),Promise.resolve(t()).catch(e=>{let t="Uncaught exception: "+e.message;throw e.response&&e.response.data.message&&(t="The server returned an error: "+e.response.data.message),this.alert({body:t}),e})}}]})},startDragging(e){this.$state.dragging=e,document.addEventListener("dragend",()=>{this.$state.dragging=null},{once:!0})}}}),f={computed:{...Object(c["d"])(h),alert(){return this.uiStore.$state.alert}}},v=f,b=s("2877"),g=Object(b["a"])(v,p,m,!1,null,null,null),y=g.exports,C={components:{UiRoot:y}},_=C,D=Object(b["a"])(_,d,u,!1,null,null,null),S=D.exports,k=s("8c4f"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.authStore.user?s("div",{attrs:{id:"app"}},[s("b-container",{staticClass:"p-0",attrs:{fluid:""}},[s("main",[s("competency-dropdown"),s("enrollments-grid",{attrs:{selected:e.selected},on:{select:e.handleSelect}})],1),s("b-sidebar",{attrs:{id:"sidebar","no-header":"",right:"",shadow:"",width:"375px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hide;return[s("advanced-portfolio-sidebar",{attrs:{selected:e.selected},on:{hide:n}})]}}],null,!1,1176179488),model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)],1):e._e()},I=[],L=s("2ef0"),O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.studentCompetencyDetails?s("div",{class:["advanced-portfolio-sidebar-contents bg-white",{"block-loading":e.isLoading}]},[s("header",{staticClass:"p-3"},[s("b-row",{staticClass:"mb-2"},[s("b-col",[s("h1",{staticClass:"h4 my-1"},[e._v(" "+e._s(e.studentName)+" ")]),s("h2",{staticClass:"h6 text-muted m-0"},[s("b",[e._v(e._s(e.studentCompetencyDetails.Competency.Code)+":")]),e._v(" "+e._s(e.studentCompetencyDetails.Competency.Descriptor)+" ")])]),s("b-col",{attrs:{sm:"auto"}},[s("b-button",{staticClass:"mx-n2",attrs:{variant:"link",pill:""},on:{click:function(t){return e.$emit("hide")}}},[s("font-awesome-icon",{staticClass:"text-muted",attrs:{icon:"times"}})],1)],1)],1)],1),e.hasHiddenItems?s("div",{staticClass:"bg-light mt-n2 mb-3 px-3 py-2"},[s("b-form-checkbox",{attrs:{switch:""},model:{value:e.showHiddenItems,callback:function(t){e.showHiddenItems=t},expression:"showHiddenItems"}},[e._v(" Show hidden items ")])],1):e._e(),s("ol",{staticClass:"list-unstyled"},[e._l(e.availableLevels,(function(t){return s("li",{key:t},[s("new-level-panel",{attrs:{Level:t,StudentID:e.studentCompetencyDetails.Student.ID,CompetencyID:e.studentCompetencyDetails.Competency.ID}})],1)})),e._l(e.studentCompetencyDetails.data,(function(t){return s("li",{key:t.ID},[s("level-panel",{attrs:{portfolio:t,demonstrations:e.demonstrations,"skills-by-i-d":e.skillsByID,"show-hidden-items":e.showHiddenItems,"visible-levels":e.visibleLevels}})],1)}))],2)]):e._e()},$=[],j={getDisplayName(e){const{FirstName:t,LastName:s,MiddleName:n,PreferredName:l}=e,a=[t,l?`"${l}"`:n,s];return a.filter(Boolean).join(" ")}},x=s("1344"),E=Object(x["a"])(),N=s("b383"),P=s.n(N),U=s("bc3a"),A=s.n(U);const M=Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_API_BASE||"",R=()=>{const e=encodeURIComponent(window.location.href);window.location=`${M}/login?return=${e}`},H=(e={})=>{const t=e=>{const{status:t}=e.response||{};throw 401===t&&R(),e},s=A.a.create({baseURL:e.baseURL,withCredentials:!0,transformRequest(e,t){return Object.assign(t.post,{Accept:"application/json","Content-Type":"application/json"}),JSON.stringify(e)}});return s.defaults.headers.Accept="application/json",s.interceptors.response.use(e=>e.data,t),s};var B=H({baseURL:M});const T=e=>e;var q=({id:e,baseURL:t,actions:s={},getters:l={},fromServer:a=T})=>{const o={},i=e=>{let s=t;return e&&("object"===typeof e?(s+=t.includes("?")?"&":"?",s+=P.a.stringify(e)):s+=e),o[s]=o[s]||[],s};return Object(c["c"])(e,{baseURL:t,state:()=>({response:{},loading:{},error:{}}),getters:l,actions:{...s,isLoading(){return Object.values(this.$state.loading).find(e=>e)},get(e,t){return this.fetch(e,t),this.$state.response[i(e)]},fetch(e,t){const s=i(e);if(!t&&this.$state.response[s])return Promise.resolve(this.$state.response);if(this.$state.error[s])return Promise.reject(this.$state.error);if(this.$state.loading[s])return new Promise((e,t)=>o[s].push([e,t]));const l=e=>{Object.entries(e).forEach(([e,t])=>{n["default"].set(this.$state[e],s,t)}),Object.entries(this.$state.loading).forEach(([e,t])=>{t||delete this.$state.loading[e]})};return l({loading:!0}),B.get(s).then(e=>(l({loading:!1,response:a(e)}),o[s].forEach(([t])=>t(e)),o[s]=[],e)).catch(e=>{throw l({loading:!1,error:e}),o[s].forEach(([t,s])=>s(e)),o[s]=[],e})},refetch(e){return this.fetch(e,!0)},update(e){const t=i("/save");return n["default"].set(this.$state.loading,t,!0),B.post(t,e).then(e=>(n["default"].delete(this.$state.loading,t),e)).catch(e=>{throw n["default"].delete(this.$state.loading,t),e})},delete(e){const t=i(`/${e}/delete`);return n["default"].set(this.$state.loading,t,!0),B.post(t).then(e=>(n["default"].delete(this.$state.loading,t),e)).catch(e=>{throw n["default"].delete(this.$state.loading,t),e})}}})},V=q({id:"competency",baseURL:"/cbl/competencies"}),G=q({id:"demonstrationSkill",baseURL:"/cbl/demonstration-skills"}),F=q({id:"studentCompetency",baseURL:"/cbl/student-competencies"}),Y=q({id:"demonstration",baseURL:"/cbl/demonstrations"}),J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.wrapperClass,on:{drop:e.drop,dragover:function(e){e.preventDefault()},dragenter:function(e){e.preventDefault()}}},[s("b-container",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.collapseId,expression:"collapseId"}],staticClass:"bg-cbl-level-50"},[s("b-row",{staticClass:"py-2 align-items-center"},[s("b-col",[s("button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"btn-unstyled d-flex"},[s("h3",{staticClass:"h6 m-0"},[e._v(" Year "+e._s(e.portfolio.Level)+" ")])])]),s("b-col",{attrs:{cols:"4"}},[s("skill-progress",{attrs:{value:e.portfolio.progress}})],1)],1)],1),s("b-collapse",{attrs:{id:e.collapseId,visible:""}},[s("b-container",{staticClass:"bg-cbl-level-25"},[s("b-row",{staticClass:"text-center py-2"},[s("b-col",[s("stat-figure",{attrs:{label:"Baseline"}},[e._v(" "+e._s(e.stats.baseline)+" ")])],1),s("b-col",[s("stat-figure",{attrs:{label:"Performance"}},[e._v(" "+e._s(e.stats.performance)+" ")])],1),s("b-col",[s("stat-figure",{attrs:{label:"Growth"}},[e._v(" "+e._s(e.stats.growth)+" ")])],1)],1)],1),e._l(e.preppedSkillDemos,(function(t){return s("skill-demos",e._b({key:t.SkillID,attrs:{demonstrations:e.demonstrations,"show-hidden-items":e.showHiddenItems,level:e.portfolio.Level,"visible-levels":e.visibleLevels},on:{refetch:e.refetch}},"skill-demos",t,!1))})),e.canDelete?s("div",{staticClass:"p-3 bg-cbl-level-10 level-panel__delete"},[s("button",{staticClass:"btn btn-danger",on:{click:e.startDelete}},[e._v(" Delete Porfolio ")])]):e._e()],2)],1)},z=[],K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"skill-demos p-3 border-bottom bg-cbl-level-10"},[s("h4",{staticClass:"h6 skill-demos__heading"},[e._v(" "+e._s(e.skill.Code)+" "),s("span",{staticClass:"ml-1 text-black-50"},[e._v(" "+e._s(e.skill.Descriptor)+" ")])]),s("ol",{staticClass:"list-unstyled d-flex flex-column",staticStyle:{gap:"0.25rem"}},[0===e.skillDemos.length?s("li",{staticClass:"text-black-50 font-italic m-0"},[e._v(" No demonstrations recorded ")]):e._e(),e._l(e.skillDemos,(function(t){return s("skill-demo-card",{key:t.id,class:t.class,attrs:{demo:t,"show-hidden-items":e.showHiddenItems,level:e.level,"visible-levels":e.visibleLevels},on:{refetch:function(t){return e.$emit("refetch")}}})}))],2)])},Q=[],W=s("b166"),X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:e.wrapperClass,attrs:{draggable:"true"},on:{drag:e.drag}},[s("div",{staticClass:"skill-demo__rating py-1 bg-cbl-level"},[e.demo.Override?s("font-awesome-icon",{attrs:{icon:"check"}}):s("span",[e._v(e._s(0===e.demo.DemonstratedLevel?"M":e.demo.DemonstratedLevel))])],1),s("div",{staticClass:"skill-demo__title"},[e._v(" "+e._s(e.title)+" "),e.targetLevels.length?s("div",{staticClass:"skill-demo__controls"},[e._l(e.targetLevels,(function(t){return s("b-button",{key:t,attrs:{variant:"unstyled",title:"Move to level "+t},on:{click:function(s){return e.setTargetLevel(t)}}},[s("font-awesome-icon",{class:"cbl-level-"+t+" text-cbl-level",attrs:{icon:"chevron-circle-"+(t>e.level?"up":"down")}})],1)})),s("div",{staticClass:"skill-demo__grabber"}),s("b-button",{attrs:{variant:"unstyled"}},[s("font-awesome-icon",{staticClass:"text-info",attrs:{icon:"info-circle"}})],1)],2):e._e()]),s("div",{staticClass:"skill-demo__date text-black-50 mr-2"},[e._v(" "+e._s(e.demo.date)+" ")])])},Z=[],ee={props:{visibleLevels:{type:Array,default:()=>[]},demo:{type:Object,default:()=>({})},level:{type:Number,default:()=>0}},computed:{...Object(c["d"])(G,h),targetLevels(){const e=this.visibleLevels.slice(),t=e.filter(e=>e>this.level),s=e.filter(e=>e<this.level),n=[];return t.length&&n.push(Math.min(...t)),s.length&&n.push(Math.max(...s)),n},title(){const{Context:e,Override:t}=this.demo;return t?"[Overridden]":e},wrapperClass(){return["align-items-baseline bg-white d-flex rounded shadow-sm skill-demo",0===this.demo.DemonstratedLevel&&"cbl-level-missing"]}},methods:{setTargetLevel(e){if(e===this.level)return;const{ID:t}=this.demo,s=[{ID:t,TargetLevel:e}],n=`Are you sure you want to move this to level ${e}?`,l=()=>{this.demonstrationSkillStore.update({data:s}).then(()=>this.$emit("refetch"))};this.uiStore.confirm(n,l)},drag(){const{ID:e}=this.demo,{level:t}=this;this.uiStore.startDragging({ID:e,Level:t,type:"move-skill-demo",action:this.setTargetLevel})}}},te=ee,se=(s("11c3"),Object(b["a"])(te,X,Z,!1,null,"30f623e5",null)),ne=se.exports;const le=e=>{const{Modified:t,Created:s}=e;if(!t&&!s)return"";const n=new Date(1e3*(t||s));return n.getFullYear()!==(new Date).getFullYear()?Object(W["a"])(n,"MMM d, yyyy"):Object(W["a"])(n,"MMM d")};var ae={components:{SkillDemoCard:ne},props:{showHiddenItems:{type:Boolean,default:()=>!1},skill:{type:Object,default:()=>({})},level:{type:Number,default:()=>0},effectiveDemonstrationsData:{type:Array,default:()=>[]},ineffectiveDemonstrationsData:{type:Array,default:()=>[]},demonstrations:{type:Array,default:()=>[]},visibleLevels:{type:Array,default:()=>[]}},computed:{skillDemos(){const e=[],t=(t,s)=>{if(!s&&!this.showHiddenItems)return;const{DemonstratedLevel:n,ID:l,DemonstrationID:a,Override:o}=t,i=this.demonstrations.find(e=>e.ID===a);if(!i)return;const{Comments:r}=i;let{Context:c}=i;i.StudentTask&&(c=i.StudentTask.Task.Title),e.push({ID:l,DemonstratedLevel:n,Context:c,Comments:r,date:le(t),effective:s,Override:o,class:["demonstration-skill",s?"-effective":"-ineffective"]})};return this.effectiveDemonstrationsData.forEach(e=>t(e,!0)),this.ineffectiveDemonstrationsData.forEach(e=>t(e,!1)),e}}},oe=ae,ie=Object(b["a"])(oe,K,Q,!1,null,null,null),re=ie.exports,ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("b-progress",e._b({attrs:{max:"1"}},"b-progress",e.$attrs,!1))},de=[],ue=(s("57da"),{}),pe=Object(b["a"])(ue,ce,de,!1,null,"f961c804",null),me=pe.exports,he=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("figure",{class:"stat-figure"},[s("figcaption",{staticClass:"stat-figure__label"},[e._t("label",(function(){return[s("span",{staticClass:"text-black-50"},[e._v(e._s(e.label))])]}))],2),s("div",{staticClass:"stat-figure__stat"},[e._t("default",(function(){return[s("span",{staticClass:"text-black-50"},[e._v("—")])]}))],2)])},fe=[],ve={props:{label:{type:String,default:""}}},be=ve,ge=(s("40a8"),Object(b["a"])(be,he,fe,!1,null,"2f6496e6",null)),ye=ge.exports,Ce={components:{SkillDemos:re,SkillProgress:me,StatFigure:ye},props:{visibleLevels:{type:Array,default:()=>[]},showHiddenItems:{type:Boolean,default:()=>!1},portfolio:{type:Object,default:()=>null},demonstrations:{type:Array,default:()=>[]},skillsByID:{type:Object,default:()=>({})}},computed:{...Object(c["d"])(F,h),wrapperClass(){const{Level:e}=this.portfolio,{dragging:t}=this.uiStore,s=t&&"move-skill-demo"===t.type;return["level-panel mb-2 cbl-level-"+e,s&&["-drop-zone",t.Level===e?"-drag-source":"-drag-target"]]},stats(){const{BaselineRating:e,demonstrationsAverage:t,growth:s}=this.portfolio,n=e=>Number.isNaN(e)||void 0===e||null===e?"—":e.toFixed(1);return{baseline:n(e),growth:n(s),performance:n(t)}},collapseId(){return`level-${this.portfolio.ID}-collapse`},demonstrationsById(){const e={};return this.demonstrations.forEach(t=>{e[t.ID]=t}),e},preppedSkillDemos(){const e={},{effectiveDemonstrationsData:t,ineffectiveDemonstrationsData:s}=this.portfolio;return Object.entries(t).forEach(([t,s])=>{e[t]={SkillID:t,skill:this.skillsByID[t],effectiveDemonstrationsData:s,ineffectiveDemonstrationsData:[]}}),Object.entries(s).forEach(([t,s])=>{e[t]||(e[t]={SkillID:t,skill:this.skillsByID[t],effectiveDemonstrationsData:[]}),e[t].ineffectiveDemonstrationsData=s}),Object.values(e)},canDelete(){const e=this.visibleLevels.find(e=>e>this.portfolio.Level);return 0===this.preppedSkillDemos.length&&!e}},methods:{getBackgroundStyle(e){return`background-color: #${this.levelColor}${Math.round(255*e).toString(16)}`},refetch(){const{StudentID:e,CompetencyID:t}=this.portfolio;E.emit("update-store",{StudentID:e,CompetencyID:t})},startDelete(){let e=`Are you sure you want to delete Year ${this.portfolio.Level}?`;e+=" This cannot be undone.";const t=()=>this.studentCompetencyStore.delete(this.portfolio.ID).then(this.refetch).catch(e=>{throw this.refetch(),e});this.uiStore.confirm(e,t)},drop(){const{type:e,action:t}=this.uiStore.$state.dragging||{};"move-skill-demo"===e&&t(this.portfolio.Level)}}},_e=Ce,De=Object(b["a"])(_e,J,z,!1,null,null,null),Se=De.exports,ke=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:"level-panel -new mb-2 cbl-level-"+e.Level},[s("b-container",{staticClass:"bg-cbl-level-25"},[s("b-row",{staticClass:"py-2 align-items-center"},[s("b-col",[s("h3",{staticClass:"h6 m-0 text-muted"},[e._v(" Year "+e._s(e.Level)+" ")])]),s("b-col",{attrs:{cols:"4"}},[s("button",{staticClass:"btn btn-primary btn-sm float-right",on:{click:e.createLevel}},[e._v(" Enroll ")])])],1)],1)],1)},we=[],Ie={props:{Level:{type:Number,default:()=>null},StudentID:{type:Number,default:()=>null},CompetencyID:{type:Number,default:()=>null}},methods:{createLevel(){const{StudentID:e,CompetencyID:t,Level:s}=this,n=[{StudentID:e,CompetencyID:t,Level:s,EnteredVia:"enrollment",ID:-1,Class:"Slate\\CBL\\StudentCompetency",BaselineRating:null}],l="/cbl/student-competencies/save",a=()=>E.emit("update-store",{StudentID:e,CompetencyID:t});B.post(l,{data:n}).then(a)}}},Le=Ie,Oe=Object(b["a"])(Le,ke,we,!1,null,null,null),$e=Oe.exports,je={components:{NewLevelPanel:$e,LevelPanel:Se},props:{selected:{type:Object,default:()=>({})}},data(){return{showHiddenItems:!0}},computed:{...Object(c["d"])(V,Y,F,G),availableLevels(){const e=Math.max(this.$site.minLevel-1,...this.visibleLevels);return Object(L["range"])(e+1,this.$site.maxLevel+1).reverse()},visibleLevels(){const e=this.studentCompetencyDetails;return e?e.data.map(e=>e.Level):[]},competencies(){const e=this.$route.query.area,t=this.competencyStore.get("?limit=0&content_area="+e);return t&&t.data},studentName(){return j.getDisplayName(this.studentCompetencyDetails.Student)},hasHiddenItems(){return!!this.studentCompetencyDetails.data.find(e=>Object.keys(e.ineffectiveDemonstrationsData).length>0)},isLoading(){return this.studentCompetencyStore.isLoading()||this.demonstrationStore.isLoading()||this.demonstrationSkillStore.isLoading()},studentCompetencyDetailsUrl(){const{student:e,competency:t}=this.selected||{};return e&&t?"?limit=0&student="+e+"&competency="+t+"&include[]=demonstrationsAverage&include[]=growth&include[]=progress&include[]=Skills&include[]=effectiveDemonstrationsData&include[]=ineffectiveDemonstrationsData":null},studentCompetencyDetails(){const e=this.studentCompetencyDetailsUrl;return e&&this.studentCompetencyStore.get(e)},skillsByID(){const e={},{Skills:t}=this.studentCompetencyDetails.Competency;return t.forEach(t=>{e[t.ID]=t}),e},demonstrations(){const{studentCompetencyDetails:e}=this;if(!e)return null;const t=new Set;e.data.forEach(e=>{Object.values(e.effectiveDemonstrationsData).forEach(e=>{e.forEach(e=>{t.add(e.DemonstrationID)})}),Object.values(e.ineffectiveDemonstrationsData).forEach(e=>{e.forEach(e=>{t.add(e.DemonstrationID)})})});const s=this.demonstrationStore.get("?q=id:"+Array.from(t.values()).sort().join(",")+"&include[]=Creator&include[]=StudentTask.Task");return s&&s.data}},mounted(){E.on("update-store",this.updateStore)},unmounted(){E.off("update-store",this.updateStore)},methods:{updateStore(e){const{studentID:t,competencyID:s}=e;t!==this.selected.student.ID&&s!==this.selected.competency.ID||this.studentCompetencyStore.refetch(this.studentCompetencyDetailsUrl)}}},xe=je,Ee=Object(b["a"])(xe,O,$,!1,null,null,null),Ne=Ee.exports,Pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"slate-appheader"},[s("div",{staticClass:"slate-appheader__title"},[e._v(" Portfolio Manager ")]),s("div",[e._v(" Competency Area "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.area,expression:"area"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.area=t.target.multiple?s:s[0]}}},e._l(e.areaOptions,(function(t){return s("option",{key:t.Code,domProps:{value:t.Code}},[e._v(" "+e._s(t.Title)+" ")])})),0)]),s("div",[e._v(" Students "),s("select",{directives:[{name:"model",rawName:"v-model",value:e.students,expression:"students"}],on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.students=t.target.multiple?s:s[0]}}},e._l(e.studentOptions,(function(t){return s("option",{key:t.value,domProps:{value:t.value}},[e._v(" "+e._s(t.label)+" ")])})),0)])])},Ue=[],Ae=q({id:"contentArea",baseURL:"/cbl/content-areas"}),Me=q({id:"studentList",baseURL:"/people/*student-lists"});const Re=e=>({get(){return this.$route.query[e]},set(t){const{path:s,query:n}=this.$route;this.$router.replace({path:s,query:{...n,[e]:t}})}});var He={computed:{...Object(c["d"])(Ae,Me),area:Re("area"),students:Re("students"),areaOptions(){const e=this.contentAreaStore.get("?summary=true");return e&&e.data},studentOptions(){const e=this.studentListStore.get();return e&&e.data}}},Be=He,Te=Object(b["a"])(Be,Pe,Ue,!1,null,null,null),qe=Te.exports,Ve=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.studentCompetencies&&e.students&&e.competencies?s("table",{on:{mouseenter:e.highlightCells,mouseleave:e.highlightCells,mousemove:e.highlightCells}},[s("thead",[s("tr",[s("th",[e._v(" ")]),e._l(e.students,(function(t){return s("th",{key:t.Username,staticClass:"col-heading",class:{"-is-highlighted":e.shouldHighlightStudent(t.Username)},attrs:{"data-student":t.Username}},[s("div",{staticClass:"col-heading-clip"},[s("a",{staticClass:"col-heading-link",attrs:{href:"#"}},[s("div",{staticClass:"col-heading-text"},[e._v(" "+e._s(e.getDisplayName(t))+" ")])])])])}))],2)]),s("tbody",e._l(e.rows,(function(t){return s("tr",{key:t.Code},[s("th",{class:{"-is-highlighted":e.shouldHighlightCompetency(t.Code)},attrs:{"data-competency":t.Code}},[e._v(" "+e._s(t.Descriptor)+" ")]),e._l(t.values,(function(n,l){return s("td",{key:l,class:e.getCellClass(t,e.students[l],n),attrs:{"data-competency":t.Code,"data-student":e.students[l].Username},on:{click:function(s){return e.$emit("select",{competency:t.Code,student:e.students[l].Username})}}},[e._v(" "+e._s(n)+" "),s("div",{staticClass:"outline"})])}))],2)})),0)]):s("div",[e._v(" Select a list of students and a content area to load enrollments dashboard ")])},Ge=[],Fe=q({id:"student",baseURL:"/people/*students"}),Ye={props:{selected:{type:Object,default:()=>({})}},data(){return{hoveredCell:{domCache:null,student:"",competency:""}}},computed:{...Object(c["d"])(V,Fe,F),competencies(){const{area:e}=this.$route.query,t=this.competencyStore.get("?limit=0&content_area="+e);return t&&t.data},students(){const{students:e}=this.$route.query,t=this.studentStore.get("?limit=0&list="+e);return t&&t.data},studentCompetencies(){const e=this.getStudentCompetencies();return e&&e.data},rows(){if(!this.students||!this.competencies)return null;const e=this.students.map(e=>e.ID);return this.competencies.map(t=>{const{ID:s,Descriptor:n,Code:l}=t,a=Object(L["range"])(e.length).map(()=>0);return this.studentCompetencies.forEach(t=>{const n=e.indexOf(t.StudentID);t.CompetencyID===s&&-1!==n&&(a[n]=Math.max(a[n]||0,t.Level))}),{Descriptor:n,values:a,Code:l,ID:s}})}},mounted(){E.on("update-store",this.updateStore)},unmounted(){E.off("update-store",this.updateStore)},methods:{getStudentCompetencies(e){const{area:t,students:s}=this.$route.query;if(!t||!s)return null;const n={limit:0,students:s,content_area:t};return this.studentCompetencyStore.get(n,e)},getCellClass(e,t,s){const n=this.selected||{},{Code:l}=e,{Username:a}=t,o=l===n.competency&&a===n.student;return[`cbl-level-${s} bg-cbl-level-50 text-white`,o&&"-is-selected"]},highlightCells(e){const t=e.target.closest("td, th");t!==this.hoveredCell.domCache&&(this.hoveredCell.domCache=t,t?(Vue.set(this.hoveredCell,"student",t.dataset.student),Vue.set(this.hoveredCell,"competency",t.dataset.competency)):(Vue.set(this.hoveredCell,"student",""),Vue.set(this.hoveredCell,"competency","")))},shouldHighlightStudent(e){const t=this.selected||{};return this.hoveredCell.student===e||t.student===e},shouldHighlightCompetency(e){const t=this.selected||{};return this.hoveredCell.competency===e||t.competency===e},getDisplayName(e){return j.getDisplayName(e)},updateStore(e){let t=!1;const{StudentID:s,CompetencyID:n}=e;(s&&this.students.find(e=>e.ID===s)||n&&this.competencies.find(e=>e.ID===n))&&(t=!0),t&&this.getStudentCompetencies(!0)}}},Je=Ye,ze=(s("697f"),Object(b["a"])(Je,Ve,Ge,!1,null,"647805f6",null)),Ke=ze.exports,Qe=s("73ba"),We=s.n(Qe);const Xe="app_config_storage",Ze={sidebarIsOpen:!1,enrollmentGridSelection:void 0},et={...Ze,...We.a.get(Xe)};var tt=Object(c["c"])("config",{state:()=>et,actions:{set(e,t){this.$state[e]=t,We.a.set(Xe,this.$state)},toggleSidebar(){this.$state.sidebarIsOpen=!this.$state.sidebarIsOpen}}}),st=q({id:"auth",baseURL:"/login?include=Person",getters:{user(){const e=this.get();return e&&e.data.Person},token(){const e=this.get();return e&&e.data.Handle}},actions:{async required(){await this.fetch();const{user:e}=this;e||R()}}}),nt={name:"AdvancedPortfolioManager",components:{AdvancedPortfolioSidebar:Ne,CompetencyDropdown:qe,EnrollmentsGrid:Ke},computed:{...Object(c["d"])(st,tt),selected(){return this.configStore.$state.enrollmentGridSelection},visible:{get(){return!!this.selected},set(e){e||this.configStore.set("enrollmentGridSelection",null)}}},async mounted(){await this.authStore.required()},methods:{handleSelect(e){Object(L["isEqual"])(e,this.selected)?this.configStore.set("enrollmentGridSelection",null):this.configStore.set("enrollmentGridSelection",e)}}},lt=nt,at=Object(b["a"])(lt,w,I,!1,null,null,null),ot=at.exports;const it=[{path:"/",component:ot}];n["default"].use(k["a"]);var rt=new k["a"]({routes:it});s("f9e3"),s("2dd8"),s("a89b");a["c"].add(o["a"],o["b"],o["d"],o["c"],o["e"],o["f"],i["a"]),n["default"].component("FontAwesomeIcon",r["a"]),n["default"].use(l["a"]),window.Vue=n["default"],n["default"].use(c["a"]),n["default"].prototype.$site={minLevel:9,maxLevel:12};const ct=Object(c["b"])();new n["default"]({render:e=>e(S),pinia:ct,router:rt}).$mount("#app")},"57da":function(e,t,s){"use strict";s("36bf")},"697f":function(e,t,s){"use strict";s("824d")},"824d":function(e,t,s){},a89b:function(e,t,s){}});
//# sourceMappingURL=app.af2fd72d.js.map