!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"plusTaskButton",(function(){return c}));const o=document.getElementById("sideBar");const a=document.getElementById("burgerIcon"),c=document.getElementById("newTaskPlus"),l=document.getElementById("newTaskIcon"),r=document.getElementById("newProjectPlus"),d=document.getElementById("newProjectIcon"),i=document.getElementById("currentProject"),s=document.getElementById("content");a.addEventListener("click",(function(){a.classList.toggle("change"),"25%"===o.style.width?(o.style.width="0",content.style.marginLeft="0"):(o.style.width="25%",content.style.marginLeft="25%")})),l.addEventListener("click",(function(){c.classList.toggle("changeToCross"),s.appendChild(function(e){const t=document.createElement("div");t.id="newTaskModal",t.className="newTaskModal";const n=document.createElement("popModal");n.id="popModal",n.className="popModal",t.appendChild(n);const o=document.createElement("h2");o.id="projectSelected",o.className="projectSelected",o.textContent=e,n.appendChild(o);const a=document.createElement("h3");a.className="modalTitle",a.textContent="Nueva Tarea",n.appendChild(a);const l=document.createElement("form");l.id="modalForm",l.className="modalForm",n.appendChild(l);const r=document.createElement("input");r.id="taskTitle",r.className="taskTitle",r.required=!0,r.maxLength=20,r.placeholder="Título",l.appendChild(r);const d=document.createElement("textarea");d.id="notes",d.className="notes",d.placeholder="Descripción",l.appendChild(d);const i=document.createElement("input");i.id="dueDate",i.className="dueDate",i.type="date",i.placeholder="Fecha",l.appendChild(i);const s=document.createElement("div");s.id="priority",s.className="priority";const u=document.createElement("label");u.className="labelPriorityButtons",u.setAttribute("for","priority"),u.textContent="Prioridad",s.appendChild(u);const m=document.createElement("span");m.id="lowPriority",m.className="lowPriority",m.value="1",s.appendChild(m);const p=document.createElement("span");p.id="mediumPriority",p.className="mediumPriority",m.value="2",s.appendChild(p);const y=document.createElement("span");y.id="highPriority",y.className="highPriority",m.value="3",s.appendChild(y),l.appendChild(s);const f=document.createElement("button");f.id="cancelNewTaskButton",f.className="cancelNewTaskButton",f.textContent="Cancelar",f.type="button",l.appendChild(f);const h=document.createElement("input");return h.id="submitTask",h.className="submitTask",h.type="submit",h.value="Crear Tarea",l.appendChild(h),t.style.display="block",f.addEventListener("click",(function(){c.classList.toggle("changeToCross"),t.style.display="none"})),t}(i.innerText))})),d.addEventListener("click",(function(){r.classList.toggle("changeToCross")}))}]);