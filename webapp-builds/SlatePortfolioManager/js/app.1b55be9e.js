(function(){"use strict";var e={1453:function(e,t,s){var n=s(9876),l=s(9963),o=s(6252);function a(e,t,s,n,l,a){const i=(0,o.up)("router-view"),r=(0,o.up)("ui-root");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(i),(0,o.Wm)(r)])}var i=s(3577);const r={class:"d-flex justify-center"};function d(e,t,s,n,l,a){const d=(0,o.up)("v-card-text"),c=(0,o.up)("v-btn"),u=(0,o.up)("v-card-actions"),m=(0,o.up)("v-card"),p=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.iD)("div",null,[a.alert?((0,o.wg)(),(0,o.j4)(p,{key:0,modelValue:a.showAlert,"onUpdate:modelValue":t[0]||(t[0]=e=>a.showAlert=e)},{default:(0,o.w5)((()=>[(0,o._)("div",r,[(0,o.Wm)(m,{width:"400"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(a.alert.body),1)])),_:1}),(0,o.Wm)(u,{class:"justify-end"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.alert.actions,((e,t)=>((0,o.wg)(),(0,o.j4)(c,{key:t,type:"button",variant:"flat",color:e.color,onClick:e.click},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(e.text),1)])),_:2},1032,["color","onClick"])))),128))])),_:1})])),_:1})])])),_:1},8,["modelValue"])):(0,o.kq)("",!0)])}var c=(0,n.Q_)("ui",{state:()=>({alert:null,confirm:null,dragging:null}),actions:{alert(e){e&&!e.actions&&(e.actions=[{text:"Close",click:()=>this.alert(null)}]),this.$state.alert=e},confirm(e,t){this.alert({body:e,actions:[{text:"Cancel",click:()=>this.alert(null)},{text:"Confirm",color:"primary",click:()=>{this.alert(null),Promise.resolve(t()).catch((e=>{let t=`Uncaught exception: ${e.message}`;throw e.response&&e.response.data.message&&(t=`The server returned an error: ${e.response.data.message}`),this.alert({body:t}),e}))}}]})},startDragging(e){this.$state.dragging=e,document.addEventListener("dragend",(()=>{this.$state.dragging=null}),{once:!0})}}}),u={computed:{...(0,n.Kc)(c),showAlert:{get(){return!!this.uiStore.$state.alert},set(e){e||this.uiStore.alert(null)}},alert(){return this.uiStore.$state.alert}}},m=s(3744);const p=(0,m.Z)(u,[["render",d]]);var h=p,f={components:{UiRoot:h}};const v=(0,m.Z)(f,[["render",a]]);var g=v,y=s(2201);function D(e,t,s,n,l,a){const i=(0,o.up)("advanced-portfolio-sidebar"),r=(0,o.up)("v-navigation-drawer"),d=(0,o.up)("competency-dropdown"),c=(0,o.up)("enrollments-grid"),u=(0,o.up)("v-main"),m=(0,o.up)("v-app");return e.authStore.user?((0,o.wg)(),(0,o.j4)(m,{key:0,id:"app"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{modelValue:l.detailsSidebarIsOpen,"onUpdate:modelValue":t[1]||(t[1]=e=>l.detailsSidebarIsOpen=e),elevation:12,floating:"",location:"right",width:"375"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{selected:a.selected,onHide:t[0]||(t[0]=e=>a.handleSelect(null))},null,8,["selected"])])),_:1},8,["modelValue"]),(0,o.Wm)(u,{class:"d-flex flex-column flex-grow-1"},{default:(0,o.w5)((()=>[(0,o.Wm)(d),(0,o.Wm)(c,{style:{flex:"1 1 0"},selected:a.selected,onSelect:a.handleSelect},null,8,["selected","onSelect"])])),_:1})])),_:1})):(0,o.kq)("",!0)}var w=s(6486);const b={class:"slate-appheader d-flex align-center pa-6"},k=(0,o._)("div",{class:"slate-appheader__title"}," Portfolio Manager ",-1),_={style:{"min-width":"300px"}},C={style:{"min-width":"300px"}};function S(e,t,s,n,l,a){const i=(0,o.up)("v-select");return(0,o.wg)(),(0,o.iD)("div",b,[k,(0,o._)("div",_,[(0,o.Wm)(i,{modelValue:a.area,"onUpdate:modelValue":t[0]||(t[0]=e=>a.area=e),label:"Competency Area",variant:"solo",items:a.areaOptions,"hide-details":"auto"},null,8,["modelValue","items"])]),(0,o._)("div",C,[(0,o.Wm)(i,{modelValue:a.students,"onUpdate:modelValue":t[1]||(t[1]=e=>a.students=e),label:"Students",variant:"solo",items:a.studentOptions,"hide-details":"auto"},null,8,["modelValue","items"])])])}s(7658);var I=s(7673),L=s(594);const x={NODE_ENV:"production",BASE_URL:""}.VUE_APP_API_BASE||"",$=()=>{const e=encodeURIComponent(window.location.href);window.location=`${x}/login?return=${e}`},j=(e={})=>{const t=e=>{const{status:t}=e.response||{};throw 401===t&&$(),e},s=L.Z.create({baseURL:e.baseURL,withCredentials:!0,transformRequest(e,t){return Object.assign(t,{Accept:"application/json","Content-Type":"application/json"}),JSON.stringify(e)}});return s.defaults.headers.Accept="application/json",s.interceptors.response.use((e=>e.data),t),s};var U=j({baseURL:x});const O=e=>e;var W=({id:e,baseURL:t,actions:s={},getters:l={},fromServer:o=O})=>{const a={},i=e=>{let s=t;return e&&("object"===typeof e?(s+=t.includes("?")?"&":"?",s+=I.stringify(e)):s+=e),a[s]=a[s]||[],s};return(0,n.Q_)(e,{baseURL:t,state:()=>({response:{},loading:{},error:{}}),getters:l,actions:{...s,isLoading(){return Object.values(this.$state.loading).find((e=>e))},get(e,t){return this.fetch(e,t),this.$state.response[i(e)]},fetch(e,t){const s=i(e);if(!t&&this.$state.response[s])return Promise.resolve(this.$state.response);if(this.$state.error[s])return Promise.reject(this.$state.error);if(this.$state.loading[s])return new Promise(((e,t)=>a[s].push([e,t])));const n=e=>{Object.entries(e).forEach((([e,t])=>{this.$state[e][s]=t})),Object.entries(this.$state.loading).forEach((([e,t])=>{t||delete this.$state.loading[e]}))};return n({loading:!0}),U.get(s).then((e=>(n({loading:!1,response:o(e)}),a[s].forEach((([t])=>t(e))),a[s]=[],e))).catch((e=>{throw n({loading:!1,error:e}),a[s].forEach((([t,s])=>s(e))),a[s]=[],e}))},refetch(e){return this.fetch(e,!0)},update(e){const t=i("/save");return this.$state.loading[t]=!0,U.post(t,e).then((e=>(delete this.$state.loading[t],e))).catch((e=>{throw delete this.$state.loading[t],e}))},delete(e){const t=i(`/${e}/delete`);return this.$state.loading[t]=!0,U.post(t).then((e=>(delete this.$state.loading[t],e))).catch((e=>{throw delete this.$state.loading[t],e}))}}})},z=W({id:"contentArea",baseURL:"/cbl/content-areas"}),A=W({id:"studentList",baseURL:"/people/*student-lists"});const V=e=>({get(){return this.$route.query[e]},set(t){const{path:s,query:n}=this.$route;this.$router.replace({path:s,query:{...n,[e]:t}})}});var H={computed:{...(0,n.Kc)(z,A),area:V("area"),students:V("students"),areaOptions(){const e=this.contentAreaStore.get("?summary=true");return e&&e.data.map((({Code:e,Title:t})=>({value:e,title:t})))},studentOptions(){const e=this.studentListStore.get();return e&&e.data.map((({label:e,value:t})=>({title:e,value:t})))}}};const M=(0,m.Z)(H,[["render",S]]);var E=M;const T=e=>((0,o.dD)("data-v-08404840"),e=e(),(0,o.Cn)(),e),N={key:0,class:"overflow-x-auto"},P=T((()=>(0,o._)("th",null,"   ",-1))),R=["data-student"],q={class:"col-heading-clip"},B={class:"col-heading-link",href:"#"},Y={class:"col-heading-text"},Z=["data-competency"],K={class:"row-heading"},G=["data-competency","data-student","onClick"],F=T((()=>(0,o._)("div",{class:"outline"},null,-1))),Q={key:1};function J(e,t,s,n,l,a){const r=(0,o.up)("v-tooltip");return a.studentCompetencies&&a.students&&a.competencies?((0,o.wg)(),(0,o.iD)("div",N,[(0,o._)("table",{onMouseenter:t[0]||(t[0]=(...e)=>a.highlightCells&&a.highlightCells(...e)),onMouseleave:t[1]||(t[1]=(...e)=>a.highlightCells&&a.highlightCells(...e)),onMousemove:t[2]||(t[2]=(...e)=>a.highlightCells&&a.highlightCells(...e))},[(0,o._)("thead",null,[(0,o._)("tr",null,[P,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.students,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e.Username,class:(0,i.C_)(["col-heading",{"-is-highlighted":a.shouldHighlightStudent(e.Username)}]),"data-student":e.Username},[(0,o._)("div",q,[(0,o._)("a",B,[(0,o._)("div",Y,(0,i.zw)(a.getDisplayName(e)),1)])])],10,R)))),128))])]),(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.rows,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.Code},[(0,o._)("th",{"data-competency":t.Code,class:(0,i.C_)({"-is-highlighted":a.shouldHighlightCompetency(t.Code)})},[(0,o._)("div",K,[(0,o.Wm)(r,{text:t.Descriptor},{activator:(0,o.w5)((({props:e})=>[(0,o._)("div",(0,o.dG)({class:"text-truncate"},e),(0,i.zw)(t.Descriptor),17)])),_:2},1032,["text"])])],10,Z),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.values,((s,n)=>((0,o.wg)(),(0,o.iD)("td",{key:n,"data-competency":t.Code,"data-student":a.students[n].Username,class:(0,i.C_)(a.getCellClass(t,a.students[n],s)),onClick:s=>e.$emit("select",{competency:t.Code,student:a.students[n].Username})},[(0,o.Uk)((0,i.zw)(s)+" ",1),F],10,G)))),128))])))),128))])],32)])):((0,o.wg)(),(0,o.iD)("div",Q," Select a list of students and a content area to load enrollments dashboard "))}var X={getDisplayName(e){const{FirstName:t,LastName:s,MiddleName:n,PreferredName:l}=e,o=[t,l?`"${l}"`:n,s];return o.filter(Boolean).join(" ")}},ee=W({id:"competency",baseURL:"/cbl/competencies"}),te=W({id:"student",baseURL:"/people/*students"}),se=W({id:"studentCompetency",baseURL:"/cbl/student-competencies"}),ne=s(9391),le=(0,ne.Z)(),oe={props:{selected:{type:Object,default:()=>({})}},data(){return{hoveredCell:{domCache:null,student:"",competency:""}}},computed:{...(0,n.Kc)(ee,te,se),competencies(){const{area:e}=this.$route.query,t=this.competencyStore.get(`?limit=0&content_area=${e}`);return t&&t.data},students(){const{students:e}=this.$route.query,t=this.studentStore.get(`?limit=0&list=${e}`);return t&&t.data},studentCompetencies(){const e=this.getStudentCompetencies();return e&&e.data},rows(){if(!this.students||!this.competencies)return null;const e=this.students.map((e=>e.ID));return this.competencies.map((t=>{const{ID:s,Descriptor:n,Code:l}=t,o=(0,w.range)(e.length).map((()=>0));return this.studentCompetencies.forEach((t=>{const n=e.indexOf(t.StudentID);t.CompetencyID===s&&-1!==n&&(o[n]=Math.max(o[n]||0,t.Level))})),{Descriptor:n,values:o,Code:l,ID:s}}))}},mounted(){le.on("update-store",this.updateStore)},unmounted(){le.off("update-store",this.updateStore)},methods:{getStudentCompetencies(e){const{area:t,students:s}=this.$route.query;if(!t||!s)return null;const n={limit:0,students:s,content_area:t};return this.studentCompetencyStore.get(n,e)},getCellClass(e,t,s){const n=this.selected||{},{Code:l}=e,{Username:o}=t,a=l===n.competency&&o===n.student;return[`cbl-level-${s} bg-cbl-level-25`,a&&"-is-selected"]},highlightCells(e){const t=e.target.closest("td, th");t!==this.hoveredCell.domCache&&(this.hoveredCell.domCache=t,t?(this.hoveredCell.student=t.dataset.student,this.hoveredCell.competency=t.dataset.competency):(this.hoveredCell.student="",this.hoveredCell.competency=""))},shouldHighlightStudent(e){const t=this.selected||{};return this.hoveredCell.student===e||t.student===e},shouldHighlightCompetency(e){const t=this.selected||{};return this.hoveredCell.competency===e||t.competency===e},getDisplayName(e){return X.getDisplayName(e)},updateStore(e){let t=!1;const{StudentID:s,CompetencyID:n}=e;(s&&this.students.find((e=>e.ID===s))||n&&this.competencies.find((e=>e.ID===n)))&&(t=!0),t&&this.getStudentCompetencies(!0)}}};const ae=(0,m.Z)(oe,[["render",J],["__scopeId","data-v-08404840"]]);var ie=ae,re=s(8833);const de="app_config_storage",ce={sidebarIsOpen:!1,enrollmentGridSelection:void 0},ue={...ce,...re.get(de)};var me=(0,n.Q_)("config",{state:()=>ue,actions:{set(e,t){this.$state[e]=t,re.set(de,this.$state)},toggleSidebar(){this.$state.sidebarIsOpen=!this.$state.sidebarIsOpen}}}),pe=W({id:"auth",baseURL:"/login?include=Person",getters:{user(){const e=this.get();return e&&e.data.Person},token(){const e=this.get();return e&&e.data.Handle}},actions:{async required(){await this.fetch();const{user:e}=this;e||$()}}});const he={class:(0,i.C_)(["advanced-portfolio-sidebar-contents","pb-12"])},fe=(0,o._)("p",{class:"mb-3"}," Loading competency… ",-1),ve={class:"px-4 py-3"},ge={class:"d-flex align-start"},ye={class:"flex-grow-1"},De={class:"h4 my-1"},we={class:"h6 text-muted m-0"},be={class:"list-unstyled"},ke={key:0,class:"text-center pa-6"};function _e(e,t,s,n,l,a){const r=(0,o.up)("v-progress-circular"),d=(0,o.up)("v-sheet"),c=(0,o.up)("v-overlay"),u=(0,o.up)("v-icon"),m=(0,o.up)("v-btn"),p=(0,o.up)("v-checkbox"),h=(0,o.up)("level-panel"),f=(0,o.up)("new-level-panel");return(0,o.wg)(),(0,o.iD)("div",he,[a.isLoading?((0,o.wg)(),(0,o.j4)(c,{key:0,scrim:"white",contained:"","model-value":a.isLoading,class:"align-center justify-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{rounded:"lg",elevation:4,class:"text-center pa-6"},{default:(0,o.w5)((()=>[fe,(0,o.Wm)(r,{indeterminate:""})])),_:1})])),_:1},8,["model-value"])):(0,o.kq)("",!0),a.studentCompetencyDetails?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o._)("header",ve,[(0,o._)("div",ge,[(0,o._)("div",ye,[(0,o._)("h1",De,(0,i.zw)(a.studentName),1),(0,o._)("h2",we,[(0,o._)("b",null,(0,i.zw)(a.studentCompetencyDetails.Competency.Code)+":",1),(0,o.Uk)(" "+(0,i.zw)(a.studentCompetencyDetails.Competency.Descriptor),1)])]),(0,o.Wm)(m,{variant:"plain",class:"mr-n3",size:"small",icon:"",onClick:t[0]||(t[0]=t=>e.$emit("hide"))},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{icon:"fa:fa fa-times"})])),_:1})])]),a.hasHiddenItems?((0,o.wg)(),(0,o.j4)(p,{key:0,modelValue:l.showHiddenItems,"onUpdate:modelValue":t[1]||(t[1]=e=>l.showHiddenItems=e),label:"Show hidden items","hide-details":"auto",class:"pl-2"},null,8,["modelValue"])):(0,o.kq)("",!0),(0,o._)("ol",be,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.levels,(e=>((0,o.wg)(),(0,o.iD)("li",{key:e},[e.portfolio?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[e.portfolio?((0,o.wg)(),(0,o.j4)(h,{key:0,portfolio:e.portfolio,demonstrations:a.demonstrations,"skills-by-i-d":a.skillsByID,"show-hidden-items":l.showHiddenItems,"enrolled-levels":a.enrolledLevels},null,8,["portfolio","demonstrations","skills-by-i-d","show-hidden-items","enrolled-levels"])):(0,o.kq)("",!0)],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[e.portfolio?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(f,{key:0,Level:e.level,StudentID:a.studentCompetencyDetails.Student.ID,CompetencyID:a.studentCompetencyDetails.Competency.ID},null,8,["Level","StudentID","CompetencyID"]))],64))])))),128))])],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[a.isLoading?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("div",ke," No competency selected "))],64))])}var Ce=W({id:"demonstrationSkill",baseURL:"/cbl/demonstration-skills"}),Se=W({id:"demonstration",baseURL:"/cbl/demonstrations"});const Ie={class:"h6 mb-0"},Le={class:"bg-cbl-level-25 justify-space-around pa-2 d-flex text-center"},xe={key:0,class:"pa-3 text-center bg-cbl-level-10 level-panel__delete"};function $e(e,t,s,n,a,r){const d=(0,o.up)("v-col"),c=(0,o.up)("v-progress-linear"),u=(0,o.up)("v-row"),m=(0,o.up)("v-expansion-panel-title"),p=(0,o.up)("edit-baseline"),h=(0,o.up)("stat-figure"),f=(0,o.up)("skill-demos"),v=(0,o.up)("v-btn"),g=(0,o.up)("v-expansion-panel-text"),y=(0,o.up)("v-expansion-panel"),D=(0,o.up)("v-expansion-panels");return(0,o.wg)(),(0,o.j4)(D,{modelValue:a.open,"onUpdate:modelValue":t[0]||(t[0]=e=>a.open=e),class:(0,i.C_)(r.wrapperClass),onDrop:r.drop,onDragover:t[1]||(t[1]=(0,l.iM)((()=>{}),["prevent"])),onDragenter:t[2]||(t[2]=(0,l.iM)((()=>{}),["prevent"]))},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{class:"rounded-0",elevation:4,value:"only"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{class:"bg-cbl-level-50 px-4 py-3"},{actions:(0,o.w5)((()=>[])),default:(0,o.w5)((()=>[(0,o.Wm)(u,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{class:"align-center"},{default:(0,o.w5)((()=>[(0,o._)("h3",Ie," Year "+(0,i.zw)(s.portfolio.Level),1)])),_:1}),(0,o.Wm)(d,{cols:"4"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"model-value":100*s.portfolio.progress,height:"16","bg-color":"#e9ecef",class:"bg-white rounded",color:"var(--cbl-level-color)",style:{"box-shadow":"0 -1px 2px rgba(0, 0, 0, .1),\n                inset 0 3px 6px rgba(0, 0, 0, .1)"}},null,8,["model-value"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o._)("div",Le,[(0,o.Wm)(h,{label:"Baseline"},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{value:r.stats.baseline,portfolio:s.portfolio},null,8,["value","portfolio"])])),_:1}),(0,o.Wm)(h,{label:"Performance"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.stats.performance),1)])),_:1}),(0,o.Wm)(h,{label:"Growth"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,i.zw)(r.stats.growth),1)])),_:1})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.preppedSkillDemos,(e=>((0,o.wg)(),(0,o.j4)(f,(0,o.dG)({key:e.SkillID,demonstrations:s.demonstrations},e,{"show-hidden-items":s.showHiddenItems,level:s.portfolio.Level,"enrolled-levels":s.enrolledLevels,onRefetch:r.refetch}),null,16,["demonstrations","show-hidden-items","level","enrolled-levels","onRefetch"])))),128)),r.canDelete?((0,o.wg)(),(0,o.iD)("div",xe,[(0,o.Wm)(v,{color:"error",size:"small",onClick:r.startDelete},{default:(0,o.w5)((()=>[(0,o.Uk)(" Delete Porfolio ")])),_:1},8,["onClick"])])):(0,o.kq)("",!0)])),_:1})])),_:1})])),_:1},8,["modelValue","class","onDrop"])}function je(e,t,s,n,a,r){const d=(0,o.up)("v-text-field"),c=(0,o.up)("v-card-text"),u=(0,o.up)("v-btn"),m=(0,o.up)("v-card-actions"),p=(0,o.up)("v-card"),h=(0,o.up)("v-form"),f=(0,o.up)("v-dialog");return(0,o.wg)(),(0,o.j4)(f,{modelValue:a.dialog,"onUpdate:modelValue":t[2]||(t[2]=e=>a.dialog=e)},{activator:(0,o.w5)((()=>[(0,o._)("span",{class:"baseline-link",onClick:t[0]||(t[0]=e=>a.dialog=!0)},(0,i.zw)(s.value),1)])),default:(0,o.w5)((()=>[(0,o.Wm)(h,{onSubmit:(0,l.iM)(r.submit,["prevent"])},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{style:{width:"248px",margin:"auto"}},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{modelValue:a.temporaryValue,"onUpdate:modelValue":t[1]||(t[1]=e=>a.temporaryValue=e),style:{width:"200px"},label:"New Baseline",required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(u,{color:"primary",block:"",onClick:r.submit},{default:(0,o.w5)((()=>[(0,o.Uk)(" Save ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1},8,["onSubmit"])])),_:1},8,["modelValue"])}var Ue={props:{value:{type:String,default:()=>""},portfolio:{type:Object,default:()=>null}},data(){return{dialog:!1,temporaryValue:this.value}},methods:{submit(){const{StudentID:e,CompetencyID:t,ID:s,Class:n}=this.portfolio,l=[{Class:n,ID:s,BaselineRating:this.temporaryValue}],o="/cbl/student-competencies/save",a=()=>le.emit("update-store",{StudentID:e,CompetencyID:t});U.post(o,{data:l}).then(a),this.dialog=!1}}};const Oe=(0,m.Z)(Ue,[["render",je]]);var We=Oe;const ze=e=>((0,o.dD)("data-v-0c1ee5f7"),e=e(),(0,o.Cn)(),e),Ae={class:(0,i.C_)("stat-figure")},Ve={class:"stat-figure__label"},He={class:"text-black-50"},Me={class:"stat-figure__stat"},Ee=ze((()=>(0,o._)("span",{class:"text-black-50"},"—",-1)));function Te(e,t,s,n,l,a){return(0,o.wg)(),(0,o.iD)("figure",Ae,[(0,o._)("figcaption",Ve,[(0,o.WI)(e.$slots,"label",{},(()=>[(0,o._)("span",He,(0,i.zw)(s.label),1)]),!0)]),(0,o._)("div",Me,[(0,o.WI)(e.$slots,"default",{},(()=>[Ee]),!0)])])}var Ne={props:{label:{type:String,default:""}}};const Pe=(0,m.Z)(Ne,[["render",Te],["__scopeId","data-v-0c1ee5f7"]]);var Re=Pe;const qe={class:"skill-demos pa-4 border-bottom bg-cbl-level-10"},Be={class:"h6 skill-demos__heading"},Ye={class:"ml-1 text-black-50"},Ze={class:"list-unstyled d-flex flex-column",style:{gap:"0.25rem"}},Ke={key:0,class:"text-black-50 font-italic m-0"};function Ge(e,t,s,n,l,a){const r=(0,o.up)("skill-demo-card");return(0,o.wg)(),(0,o.iD)("div",qe,[(0,o._)("h4",Be,[(0,o.Uk)((0,i.zw)(s.skill.Code)+" ",1),(0,o._)("span",Ye,(0,i.zw)(s.skill.Descriptor),1)]),(0,o._)("ol",Ze,[0===a.skillDemos.length?((0,o.wg)(),(0,o.iD)("li",Ke," No demonstrations recorded ")):(0,o.kq)("",!0),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.skillDemos,(n=>((0,o.wg)(),(0,o.j4)(r,{key:n.skillDemo.id,"skill-demo":n.skillDemo,demonstration:n.demonstration,effective:n.effective,"show-hidden-items":s.showHiddenItems,level:s.level,"enrolled-levels":s.enrolledLevels,onRefetch:t[0]||(t[0]=t=>e.$emit("refetch"))},null,8,["skill-demo","demonstration","effective","show-hidden-items","level","enrolled-levels"])))),128))])])}const Fe=e=>((0,o.dD)("data-v-6e55447e"),e=e(),(0,o.Cn)(),e),Qe={class:"skill-demo__rating py-1 bg-cbl-level"},Je={key:1},Xe={class:"skill-demo__title"},et={class:"skill-demo__hover"},tt={key:0,class:"skill-demo__controls"},st=Fe((()=>(0,o._)("div",{class:"skill-demo__grabber"},null,-1))),nt={key:1,class:"flex-grow"},lt={key:0},ot={key:1},at={key:0},it={key:1},rt={class:"skill-demo__date text-black-50 mr-2"};function dt(e,t,s,n,l,a){const r=(0,o.up)("v-icon"),d=(0,o.up)("v-btn"),c=(0,o.up)("v-tooltip");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(a.wrapperClass),draggable:"true",onDrag:t[0]||(t[0]=(...e)=>a.drag&&a.drag(...e))},[(0,o._)("div",Qe,[s.skillDemo.Override?((0,o.wg)(),(0,o.j4)(r,{key:0,icon:"fa:fa fa-check",size:"x-small"})):((0,o.wg)(),(0,o.iD)("span",Je,(0,i.zw)(a.demonstratedLevel),1))]),(0,o._)("div",Xe,[(0,o.Uk)((0,i.zw)(a.title)+" ",1),(0,o._)("div",et,[a.targetLevels.length?((0,o.wg)(),(0,o.iD)("div",tt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.targetLevels,(e=>((0,o.wg)(),(0,o.j4)(d,{key:e,variant:"plain",title:`Move to level ${e}`,class:"btn-unstyled",onClick:t=>a.setTargetLevel(e)},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{icon:"fa fa-chevron-circle-"+(e>s.level?"up":"down"),class:(0,i.C_)(`cbl-level-${e} text-cbl-level`)},null,8,["icon","class"])])),_:2},1032,["title","onClick"])))),128)),st])):((0,o.wg)(),(0,o.iD)("div",nt)),(0,o.Wm)(c,{location:"bottom"},{activator:(0,o.w5)((({props:e})=>[(0,o.Wm)(d,(0,o.dG)({variant:"plain",class:"btn-unstyled"},e),{default:(0,o.w5)((()=>[(0,o.Wm)(r,{icon:"`fa:fa fa-info-circle",class:(0,i.C_)(`text-cbl-level cbl-level-${s.level}`)},null,8,["class"])])),_:2},1040)])),default:(0,o.w5)((()=>[a.createdBy?((0,o.wg)(),(0,o.iD)("div",lt," Created By: "+(0,i.zw)(a.createdBy),1)):(0,o.kq)("",!0),(0,o._)("div",null," Demonstration ID: "+(0,i.zw)(s.demonstration.ID),1),(0,o._)("div",null," DemonstrationSkill ID: "+(0,i.zw)(s.skillDemo.ID),1),(0,o._)("div",null," Demonstration Date: "+(0,i.zw)(a.fullDate),1),(0,o._)("div",null," Experience Type: "+(0,i.zw)(s.demonstration.Context),1),(0,o._)("div",null," Performance Type: "+(0,i.zw)(s.demonstration.PerformanceType),1),s.demonstration.ArtifactURL?((0,o.wg)(),(0,o.iD)("div",ot," Artifact URL: "+(0,i.zw)(s.demonstration.ArtifactURL),1)):s.demonstration.StudentTask?((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[a.submittedDate?((0,o.wg)(),(0,o.iD)("div",at," Submitted: "+(0,i.zw)(a.submittedDate),1)):(0,o.kq)("",!0),s.demonstration.StudentTask.Task.Title?((0,o.wg)(),(0,o.iD)("div",it," Title: "+(0,i.zw)(s.demonstration.StudentTask.Task.Title),1)):(0,o.kq)("",!0)],64)):(0,o.kq)("",!0)])),_:1})])]),(0,o._)("div",rt,(0,i.zw)(a.date),1)],34)}var ct=s(2167);const ut=e=>{if(!e)return"";const t=new Date(1e3*e);return t.getFullYear()!==(new Date).getFullYear()?(0,ct.Z)(t,"MMM d, yyyy"):(0,ct.Z)(t,"MMM d")};var mt={props:{enrolledLevels:{type:Array,default:()=>[]},skillDemo:{type:Object,default:()=>({})},demonstration:{type:Object,default:()=>({})},level:{type:Number,default:()=>0},effective:{type:Boolean,default:()=>!0}},computed:{...(0,n.Kc)(Ce,c),demonstratedLevel(){const{DemonstratedLevel:e}=this.skillDemo;return 0===e?"M":e},fullDate(){const{Modified:e,Created:t}=this.skillDemo;if(!e&&!t)return"";const s=new Date(1e3*(e||t));return(0,ct.Z)(s,"MMM d, yyyy, h:mm aaa")},date(){const{Modified:e,Created:t}=this.skillDemo;return ut(e||t)},submittedDate(){return ut(this.demonstration.StudentTask.Created)},createdBy(){if(!this.demonstration.Created)return null;const{FirstName:e="",LastName:t=""}=this.demonstration.Creator;return`${e} ${t}`},targetLevels(){const e=this.enrolledLevels.slice(),t=e.filter((e=>e>this.level)),s=e.filter((e=>e<this.level)),n=[];return t.length&&n.push(Math.min(...t)),s.length&&n.push(Math.max(...s)),n},title(){const{Context:e,Override:t,StudentTask:s}=this.demonstration;if(t)return"[Overridden]";const n=s&&s.Task.Title;return n||e},wrapperClass(){return["align-items-baseline bg-white d-flex rounded shadow-sm skill-demo",0===this.skillDemo.DemonstratedLevel&&"cbl-level-missing","elevation-1",this.effective?"-effective":"-ineffective"]}},methods:{setTargetLevel(e){if(e===this.level)return;const{ID:t}=this.skillDemo,s=[{ID:t,TargetLevel:e}],n=`Are you sure you want to move this to level ${e}?`,l=()=>{this.demonstrationSkillStore.update({data:s}).then((()=>this.$emit("refetch")))};this.uiStore.confirm(n,l)},drag(){const{ID:e}=this.skillDemo,{level:t}=this;this.uiStore.startDragging({ID:e,Level:t,type:"move-skill-demo",action:this.setTargetLevel})}}};const pt=(0,m.Z)(mt,[["render",dt],["__scopeId","data-v-6e55447e"]]);var ht=pt,ft={components:{SkillDemoCard:ht},props:{showHiddenItems:{type:Boolean,default:()=>!1},skill:{type:Object,default:()=>({})},level:{type:Number,default:()=>0},effectiveDemonstrationsData:{type:Array,default:()=>[]},ineffectiveDemonstrationsData:{type:Array,default:()=>[]},demonstrations:{type:Array,default:()=>[]},enrolledLevels:{type:Array,default:()=>[]}},computed:{skillDemos(){const e=[],t=(t,s)=>{if(!s&&!this.showHiddenItems)return;const{DemonstrationID:n}=t,l=this.demonstrations.find((e=>e.ID===n));l&&e.push({skillDemo:t,demonstration:l,effective:s})};return this.effectiveDemonstrationsData.forEach((e=>t(e,!0))),this.ineffectiveDemonstrationsData.forEach((e=>t(e,!1))),e}}};const vt=(0,m.Z)(ft,[["render",Ge]]);var gt=vt,yt={components:{EditBaseline:We,SkillDemos:gt,StatFigure:Re},props:{enrolledLevels:{type:Array,default:()=>[]},showHiddenItems:{type:Boolean,default:()=>!1},portfolio:{type:Object,default:()=>null},demonstrations:{type:Array,default:()=>[]},skillsByID:{type:Object,default:()=>({})}},data(){return{open:"only",editing_baseline:!1}},computed:{...(0,n.Kc)(se,c),wrapperClass(){const{Level:e}=this.portfolio,{dragging:t}=this.uiStore,s=t&&"move-skill-demo"===t.type;return[`level-panel mb-2 cbl-level-${e}`,s&&["-drop-zone",t.Level===e?"-drag-source":"-drag-target"]]},stats(){const{BaselineRating:e,demonstrationsAverage:t,growth:s}=this.portfolio,n=e=>Number.isNaN(e)||void 0===e||null===e?"—":e.toFixed(1);return{baseline:n(e),growth:n(s),performance:n(t)}},collapseId(){return`level-${this.portfolio.ID}-collapse`},demonstrationsById(){const e={};return this.demonstrations.forEach((t=>{e[t.ID]=t})),e},preppedSkillDemos(){const e={},{effectiveDemonstrationsData:t,ineffectiveDemonstrationsData:s}=this.portfolio;return Object.entries(t).forEach((([t,s])=>{e[t]={SkillID:t,skill:this.skillsByID[t],effectiveDemonstrationsData:s,ineffectiveDemonstrationsData:[]}})),Object.entries(s).forEach((([t,s])=>{e[t]||(e[t]={SkillID:t,skill:this.skillsByID[t],effectiveDemonstrationsData:[]}),e[t].ineffectiveDemonstrationsData=s})),Object.values(e)},canDelete(){const e=this.enrolledLevels.find((e=>e>this.portfolio.Level));return 0===this.preppedSkillDemos.length&&!e}},methods:{getBackgroundStyle(e){return`background-color: #${this.levelColor}${Math.round(255*e).toString(16)}`},refetch(){const{StudentID:e,CompetencyID:t}=this.portfolio;le.emit("update-store",{StudentID:e,CompetencyID:t})},startDelete(){let e=`Are you sure you want to delete Year ${this.portfolio.Level}?`;e+=" This cannot be undone.";const t=()=>this.studentCompetencyStore.delete(this.portfolio.ID).then(this.refetch).catch((e=>{throw this.refetch(),e}));this.uiStore.confirm(e,t)},drop(){const{type:e,action:t}=this.uiStore.$state.dragging||{};"move-skill-demo"===e&&t(this.portfolio.Level)}}};const Dt=(0,m.Z)(yt,[["render",$e],["__scopeId","data-v-64b4dcc4"]]);var wt=Dt;const bt={class:"bg-cbl-level-25 d-flex justify-space-between px-4 py-2 align-center"},kt={class:"h6 mb-0 text-muted"};function _t(e,t,s,n,l,a){const r=(0,o.up)("v-btn");return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(`level-panel -new mb-2 cbl-level-${s.Level}`)},[(0,o._)("div",bt,[(0,o._)("h3",kt," Year "+(0,i.zw)(s.Level),1),(0,o.Wm)(r,{size:"small",class:"text-white",color:"var(--cbl-level-color)",onClick:a.createLevel},{default:(0,o.w5)((()=>[(0,o.Uk)(" Enroll ")])),_:1},8,["onClick"])])],2)}var Ct={props:{Level:{type:Number,default:()=>null},StudentID:{type:Number,default:()=>null},CompetencyID:{type:Number,default:()=>null}},methods:{createLevel(){const{StudentID:e,CompetencyID:t,Level:s}=this,n=[{StudentID:e,CompetencyID:t,Level:s,EnteredVia:"enrollment",ID:-1,Class:"Slate\\CBL\\StudentCompetency",BaselineRating:null}],l="/cbl/student-competencies/save",o=()=>le.emit("update-store",{StudentID:e,CompetencyID:t});U.post(l,{data:n}).then(o)}}};const St=(0,m.Z)(Ct,[["render",_t]]);var It=St,Lt={name:"AdvancedPortfolioSidebar",components:{NewLevelPanel:It,LevelPanel:wt},props:{selected:{type:Object,default:()=>({})}},data(){return{showHiddenItems:!0}},computed:{...(0,n.Kc)(ee,Se,se,Ce),levels(){const e=(0,w.range)(this.$site.minLevel,this.$site.maxLevel+1).reverse();return e.map((e=>({level:e,portfolio:this.studentCompetencyDetails.data.find((t=>t.Level===e))})))},enrolledLevels(){const e=this.studentCompetencyDetails;return e?e.data.map((e=>e.Level)):[]},competencies(){const e=this.$route.query.area,t=this.competencyStore.get(`?limit=0&content_area=${e}`);return t&&t.data},studentName(){return X.getDisplayName(this.studentCompetencyDetails.Student)},hasHiddenItems(){return!!this.studentCompetencyDetails.data.find((e=>Object.keys(e.ineffectiveDemonstrationsData).length>0))},isLoading(){return this.studentCompetencyStore.isLoading()||this.demonstrationStore.isLoading()||this.demonstrationSkillStore.isLoading()},studentCompetencyDetailsUrl(){const{student:e,competency:t}=this.selected||{};return e&&t?`?limit=0&student=${e}&competency=${t}&include[]=demonstrationsAverage&include[]=growth&include[]=progress&include[]=Skills&include[]=effectiveDemonstrationsData&include[]=ineffectiveDemonstrationsData`:null},studentCompetencyDetails(){const e=this.studentCompetencyDetailsUrl;return e&&this.studentCompetencyStore.get(e)},skillsByID(){const e={},{Skills:t}=this.studentCompetencyDetails.Competency;return t.forEach((t=>{e[t.ID]=t})),e},demonstrations(){const{studentCompetencyDetails:e}=this;if(!e)return null;const t=new Set;e.data.forEach((e=>{Object.values(e.effectiveDemonstrationsData).forEach((e=>{e.forEach((e=>{t.add(e.DemonstrationID)}))})),Object.values(e.ineffectiveDemonstrationsData).forEach((e=>{e.forEach((e=>{t.add(e.DemonstrationID)}))}))}));const s=this.demonstrationStore.get(`?q=id:${Array.from(t.values()).sort().join(",")}&include[]=Creator&include[]=StudentTask.Task`);return s&&s.data}},mounted(){le.on("update-store",this.updateStore)},unmounted(){le.off("update-store",this.updateStore)},methods:{updateStore(e){const{studentID:t,competencyID:s}=e;t!==this.selected.student.ID&&s!==this.selected.competency.ID||this.studentCompetencyStore.refetch(this.studentCompetencyDetailsUrl)}}};const xt=(0,m.Z)(Lt,[["render",_e]]);var $t=xt,jt=$t,Ut={name:"AdvancedPortfolioManager",components:{AdvancedPortfolioSidebar:jt,CompetencyDropdown:E,EnrollmentsGrid:ie},data(){return{detailsSidebarIsOpen:!1}},computed:{...(0,n.Kc)(pe,me),selected(){return this.configStore.$state.enrollmentGridSelection}},async mounted(){await this.authStore.required()},methods:{handleSelect(e){const t=(0,w.isEqual)(e,this.selected)?null:e;this.configStore.set("enrollmentGridSelection",t),this.detailsSidebarIsOpen=Boolean(t)}}};const Ot=(0,m.Z)(Ut,[["render",D]]);var Wt=Ot,zt=Wt,At={AdvancedPortfolioManager:zt};const{AdvancedPortfolioManager:Vt}=At,Ht=[{path:"/",component:Vt}],Mt=(0,y.p7)({history:(0,y.r5)(),routes:Ht});var Et=Mt,Tt={install(e){e.config.globalProperties.$site={minLevel:9,maxLevel:12}}},Nt=s(1291),Pt=s(3009),Rt=s(6300),qt=s(9459),Bt=(s(9773),(0,Nt.Rd)({components:Pt,directives:Rt,icons:{defaultSet:"fa",aliases:qt.j,sets:{fa:qt.fa}}}));const Yt=(0,n.WB)();(0,l.ri)(g).use(Et).use(Yt).use(Bt).use(Tt).mount("#app-container")}},t={};function s(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,s),o.loaded=!0,o.exports}s.m=e,function(){var e=[];s.O=function(t,n,l,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],l=e[c][1],o=e[c][2];for(var i=!0,r=0;r<n.length;r++)(!1&o||a>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[r])}))?n.splice(r--,1):(i=!1,o<a&&(a=o));if(i){e.splice(c--,1);var d=l();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,l,o]}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,a=n[0],i=n[1],r=n[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(l in i)s.o(i,l)&&(s.m[l]=i[l]);if(r)var c=r(s)}for(t&&t(n);d<a.length;d++)o=a[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},n=self["webpackChunkslate_portfolio_manager"]=self["webpackChunkslate_portfolio_manager"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(1453)}));n=s.O(n)})();
//# sourceMappingURL=app.1b55be9e.js.map