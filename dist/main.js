!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"plusTaskButton",(function(){return r})),n.d(t,"plusProjectButton",(function(){return i})),n.d(t,"userProjects",(function(){return h})),n.d(t,"projectCount",(function(){return y}));const o=document.getElementById("sideBar"),a=(e,t,n={})=>{let o=0;return{id:e,name:t,tasks:n,addTask:e=>{n[o]=e,o++},setName:e=>{t=e}}},c=()=>{let e=[];for(const t of h){let n={id:t.id,name:t.name,tasks:t.tasks};e.push(n)}window.localStorage.setItem("userProjects",JSON.stringify(e))},l=document.getElementById("burgerIcon"),r=document.getElementById("newTaskPlus"),s=document.getElementById("newTaskIcon"),i=document.getElementById("newProjectPlus"),d=document.getElementById("newProjectIcon"),u=document.getElementById("currentProject"),m=document.getElementById("content");l.addEventListener("click",(function(){l.classList.toggle("change"),"25%"===o.style.width?(o.style.width="0",content.style.marginLeft="0"):(o.style.width="25%",content.style.marginLeft="25%")})),s.addEventListener("click",(function(){r.classList.toggle("changeToCross"),newTaskModal.style.display="block"})),d.addEventListener("click",(function(){i.classList.toggle("changeToCross"),newProjectModal.style.display="block"}));let p,y=0,h=JSON.parse(window.localStorage.getItem("userProjects")||"[]");console.log(h),0===h.length?(y=0,h.push(a(y+1,"Proyecto Prueba")),y++,p=h[0],c()):p=h[0],console.log(window.localStorage),m.appendChild((()=>{const e=document.createElement("div");e.id="newProjectModal",e.className="newProjectModal";const t=document.createElement("form");t.id="popProjectModal",t.className="popProjectModal",e.appendChild(t);const n=document.createElement("input");n.id="projectTitle",n.className="projectTitle",n.required=!0,n.maxLength=20,n.placeholder="Nombre Proyecto",t.appendChild(n);const o=document.createElement("button");o.id="cancelButton",o.className="cancelButton",o.type="button",o.textContent="Cancelar",t.appendChild(o);const l=document.createElement("input");return l.id="submitProject",l.className="submitProject",l.type="submit",l.value="Crear Proyecto",t.appendChild(l),o.addEventListener("click",(function(){i.classList.toggle("changeToCross"),e.style.display="none"})),l.addEventListener("submit",(function(){h.push(a(y+1,n.value)),y++,c(),i.classList.toggle("changeToCross"),e.style.display="none"})),e})()),m.appendChild((e=>{const t=document.createElement("div");t.id="newTaskModal",t.className="newTaskModal";const n=document.createElement("div");n.id="popTaskModal",n.className="popTaskModal",t.appendChild(n);const o=document.createElement("h2");o.id="projectSelected",o.className="projectSelected",o.textContent=e,n.appendChild(o);const a=document.createElement("h3");a.className="modalTitle",a.textContent="Nueva Tarea",n.appendChild(a);const c=document.createElement("form");c.id="modalForm",c.className="modalForm",n.appendChild(c);const l=document.createElement("input");l.id="taskTitle",l.className="taskTitle",l.required=!0,l.maxLength=20,l.placeholder="Título",c.appendChild(l);const s=document.createElement("textarea");s.id="notes",s.className="notes",s.placeholder="Descripción",c.appendChild(s);const i=document.createElement("input");i.id="dueDate",i.className="dueDate",i.type="date",i.placeholder="Fecha",c.appendChild(i);const d=document.createElement("div");d.id="priority",d.className="priority";const u=document.createElement("label");u.className="labelPriorityButtons",u.setAttribute("for","priority"),u.textContent="Prioridad",d.appendChild(u);const m=document.createElement("span");m.id="lowPriority",m.className="lowPrioritySelected",m.textContent="Baja",m.setAttribute("value","1"),d.appendChild(m);const p=document.createElement("span");p.id="mediumPriority",p.className="mediumPriority",p.textContent="Media",p.setAttribute("value","2"),d.appendChild(p);const y=document.createElement("span");y.id="highPriority",y.className="highPriority",y.textContent="Alta",y.setAttribute("value","3"),d.appendChild(y),c.appendChild(d);const h=document.createElement("button");h.id="cancelNewTaskButton",h.className="cancelNewTaskButton",h.type="button",h.textContent="Cancelar",c.appendChild(h);const g=document.createElement("input");return g.id="submitTask",g.className="submitTask",g.type="submit",g.value="Crear Tarea",c.appendChild(g),h.addEventListener("click",(function(){r.classList.toggle("changeToCross"),t.style.display="none"})),m.addEventListener("click",(function(){"lowPriority"==m.className&&(m.className="lowPrioritySelected",p.className="mediumPriority",y.className="highPriority")})),p.addEventListener("click",(function(){"mediumPriority"==p.className&&(p.className="mediumPrioritySelected",m.className="lowPriority",y.className="highPriority")})),y.addEventListener("click",(function(){"highPriority"==y.className&&(y.className="highPrioritySelected",m.className="lowPriority",p.className="mediumPriority")})),t})(u.innerText)),u.textContent=p.name}]);