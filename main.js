!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"plusTaskButton",(function(){return s})),n.d(t,"plusProjectButton",(function(){return u})),n.d(t,"userProjects",(function(){return N})),n.d(t,"projectCount",(function(){return g})),n.d(t,"currentProject",(function(){return C}));const o=document.getElementById("sideBar"),c=()=>{"25%"===o.style.width?(o.style.width="0",content.style.marginLeft="0"):(o.style.width="25%",content.style.marginLeft="25%")},a=(e,t,n={})=>{let o=0;return{id:e,name:t,tasks:n,addTask:e=>{n[o]=e,o++},setName:e=>{t=e}}},l=()=>{let e=[];for(const t of N){let n={id:t.id,name:t.name,tasks:t.tasks};e.push(n)}window.localStorage.setItem("userProjects",JSON.stringify(e))},d=document.getElementById("projectList"),r=e=>{console.log(e);for(let t of e){let e=document.createElement("div");e.id=t.name,e.className="renderProjectItem";let n=document.createElement("div");n.className="editProject",e.appendChild(n);let o=document.createElement("div");o.className="editProjectDot_1",n.appendChild(o);let c=document.createElement("div");c.className="editProjectDot_2",n.appendChild(c);let a=document.createElement("div");a.className="editProjectDot_3",n.appendChild(a);let l=document.createElement("p");l.className="projectName",l.textContent=t.name,e.appendChild(l),d.appendChild(e)}},i=document.getElementById("burgerIcon"),s=document.getElementById("newTaskPlus"),m=document.getElementById("newTaskIcon"),u=document.getElementById("newProjectPlus"),p=document.getElementById("newProjectIcon"),y=document.getElementById("currentProject"),h=document.getElementById("content"),E=document.getElementsByClassName("projectName"),P=document.getElementsByClassName("editProject"),f=document.getElementById("projectList");i.addEventListener("click",(function(){i.classList.toggle("change"),c()})),m.addEventListener("click",(function(){s.classList.toggle("changeToCross"),newTaskModal.style.display="block"})),p.addEventListener("click",(function(){u.classList.toggle("changeToCross"),newProjectModal.style.display="block"}));let C,g=1,N=JSON.parse(window.localStorage.getItem("userProjects")||"[]");0===N.length?(N.push(a(g,"Proyecto Prueba")),g+=1,C=N[0],l()):(C=N[N.length-1],g=N.length+1),r(N),Array.prototype.forEach.call(E,(function(e){e.addEventListener("click",()=>{y.textContent=e.innerText})})),Array.prototype.forEach.call(P,(function(e){e.addEventListener("click",(function(){editProjectModal.style.display="block";document.getElementById("deleteProjectButton").addEventListener("click",(function(){let t=e.closest(".renderProjectItem").id;for(let e of N)e.name==t&&N.splice(N.indexOf(e),1);editProjectModal.style.display="none",C=N[N.length-1],y.textContent=C.name,f.textContent="",l(),r(N),location.reload(),c()}))}))})),y.textContent=C.name,h.appendChild((()=>{const e=document.createElement("div");e.id="newProjectModal",e.className="newProjectModal";const t=document.createElement("form");t.id="popProjectModal",t.className="popProjectModal",e.appendChild(t);const n=document.createElement("input");n.id="projectTitle",n.className="projectTitle",n.required=!0,n.maxLength=20,n.placeholder="Nombre Proyecto",t.appendChild(n);const o=document.createElement("button");o.id="cancelButton",o.className="cancelButton",o.type="button",o.textContent="Cancelar",t.appendChild(o);const c=document.createElement("input");return c.id="submitProject",c.className="submitProject",c.type="submit",c.value="Crear Proyecto",t.appendChild(c),o.addEventListener("click",(function(){u.classList.toggle("changeToCross"),e.style.display="none"})),c.addEventListener("click",(function(){""!=n.value&&(N.push(a(g,n.value)),g++,u.classList.toggle("changeToCross"),l())})),e})()),h.appendChild((e=>{const t=document.createElement("div");t.id="newTaskModal",t.className="newTaskModal";const n=document.createElement("div");n.id="popTaskModal",n.className="popTaskModal",t.appendChild(n);const o=document.createElement("h2");o.id="projectSelected",o.className="projectSelected",o.textContent=e,n.appendChild(o);const c=document.createElement("h3");c.className="modalTitle",c.textContent="Nueva Tarea",n.appendChild(c);const a=document.createElement("form");a.id="modalForm",a.className="modalForm",n.appendChild(a);const l=document.createElement("input");l.id="taskTitle",l.className="taskTitle",l.required=!0,l.maxLength=20,l.placeholder="Título",a.appendChild(l);const d=document.createElement("textarea");d.id="notes",d.className="notes",d.placeholder="Descripción",a.appendChild(d);const r=document.createElement("input");r.id="dueDate",r.className="dueDate",r.type="date",r.placeholder="Fecha",a.appendChild(r);const i=document.createElement("div");i.id="priority",i.className="priority";const m=document.createElement("label");m.className="labelPriorityButtons",m.setAttribute("for","priority"),m.textContent="Prioridad",i.appendChild(m);const u=document.createElement("span");u.id="lowPriority",u.className="lowPrioritySelected",u.textContent="Baja",u.setAttribute("value","1"),i.appendChild(u);const p=document.createElement("span");p.id="mediumPriority",p.className="mediumPriority",p.textContent="Media",p.setAttribute("value","2"),i.appendChild(p);const y=document.createElement("span");y.id="highPriority",y.className="highPriority",y.textContent="Alta",y.setAttribute("value","3"),i.appendChild(y),a.appendChild(i);const h=document.createElement("button");h.id="cancelNewTaskButton",h.className="cancelNewTaskButton",h.type="button",h.textContent="Cancelar",a.appendChild(h);const E=document.createElement("input");return E.id="submitTask",E.className="submitTask",E.type="submit",E.value="Crear Tarea",a.appendChild(E),h.addEventListener("click",(function(){s.classList.toggle("changeToCross"),t.style.display="none"})),u.addEventListener("click",(function(){"lowPriority"==u.className&&(u.className="lowPrioritySelected",p.className="mediumPriority",y.className="highPriority")})),p.addEventListener("click",(function(){"mediumPriority"==p.className&&(p.className="mediumPrioritySelected",u.className="lowPriority",y.className="highPriority")})),y.addEventListener("click",(function(){"highPriority"==y.className&&(y.className="highPrioritySelected",u.className="lowPriority",p.className="mediumPriority")})),t})(y.innerText)),h.appendChild((()=>{const e=document.createElement("div");e.id="editProjectModal",e.className="editProjectModal";const t=document.createElement("div");t.id="popEditProject",t.className="popEditProject",e.appendChild(t);const n=document.createElement("button");n.id="cancelEditButton",n.className="cancelEditButton",n.type="button",n.textContent="Cancelar",t.appendChild(n);const o=document.createElement("button");return o.id="deleteProjectButton",o.className="deleteProjectButton",o.type="button",o.textContent="Eliminar Proyecto",t.appendChild(o),n.addEventListener("click",()=>{e.style.display="none"}),e})())}]);