(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(81),o=n.n(r),i=n(645),d=n.n(i)()(o());d.push([e.id,'body {\r\n    margin: 0;\r\n    display: grid;\r\n    grid-template-columns: clamp(150px, 30vw, 250px) auto;\r\n    grid-template-rows: 66px calc(100vh - 66px);\r\n}\r\n\r\nbody * {\r\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\r\n}\r\n\r\n.top-div {\r\n    background-color: deepskyblue;\r\n    height: 50px;\r\n    grid-column: 1 / -1;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.logo {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: 8px;\r\n}\r\n\r\n.logo-svg {\r\n    height: 2rem;\r\n    width: 2rem;\r\n}\r\n\r\n.title{\r\n    align-self: center;\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n}\r\n\r\n.new-project-button {\r\n    display: flex;\r\n    gap: 8px;\r\n    border: 1px solid black;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    transition: all 0.1s;\r\n}\r\n\r\n.new-project-button:hover {\r\n    transition: all 0.1s;\r\n    background-color: lime;\r\n    border: 1px solid rgba(0, 0, 0, 0.3);\r\n    cursor: pointer;\r\n}\r\n\r\n.new-project-svg {\r\n    height: 1.5rem;\r\n    width: 1.5rem;\r\n}\r\n\r\n.new-project-text {\r\n    align-self: center;\r\n    font-size: 1rem;\r\n}\r\n\r\n.sidebar {\r\n    grid-row: 2 / -1;\r\n    background-color: aqua;\r\n    padding: 16px 12px 8px 4px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.sidebar-heading {\r\n    font-size: 1.2rem;\r\n    font-weight: bold;\r\n    padding: 8px 12px 4px;\r\n    border-radius: 8px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.sidebar-heading.sidebar-selector:hover,\r\n.sidebar-heading.sidebar-selector.active {\r\n    transition: 0.3s;\r\n    transform: translateX(8px);\r\n    background-color: #bbffff;\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar-heading.active {\r\n    cursor: default;\r\n}\r\n\r\n.project {\r\n    padding: 4px 20px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.project:hover,\r\n.project.active {\r\n    transform: translateX(8px);\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.project.active {\r\n    cursor: default;\r\n}\r\n\r\n.main-body {\r\n    grid-row: 2 / -1;\r\n    grid-column: 2 / -1;\r\n    padding: 4px;\r\n    background-color: #eeeeee;\r\n}\r\n\r\n.project-header {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.description {\r\n    color: #444444;\r\n    padding: 4px;\r\n    font-size: 14px;\r\n    margin: 2px 4px 4px 4px;\r\n    flex: 1;\r\n}\r\n\r\n.new-todo {\r\n    border: 1px solid forestgreen;\r\n    height: 30px;\r\n    width: 30px;\r\n    font-size: 28px;\r\n    margin: 4px;\r\n    border-radius: 8px;\r\n    background-color: lime;\r\n    text-align: center;\r\n    line-height: 24px;\r\n    transition: 0.3s;\r\n}\r\n\r\n\r\n.new-todo:hover {\r\n    cursor: pointer;\r\n    box-shadow: #dddddd -3px 3px 3px;\r\n    transition: 0.3s;\r\n}\r\n\r\n.todo-block {\r\n    border: 1px solid #aaaaaa;\r\n    padding: 4px;\r\n    display: grid;\r\n    grid-template-columns: calc(100% - 135px) 135px;\r\n    gap: 4px;\r\n    margin: 4px 0;\r\n}\r\n\r\n.todo-due {\r\n    text-align: end;\r\n    margin-right: 8px;\r\n}\r\n\r\n.todo-buttons {\r\n    display: flex;\r\n    justify-content: end;\r\n    margin-right: 8px;\r\n    gap: 4px;\r\n    align-items: flex-end;\r\n}\r\n\r\n.todo-buttons > button {\r\n    border: 1px #555555 outset;\r\n    border-radius: 4px;\r\n}\r\n\r\n.todo-complete {\r\n    background-color: lime;\r\n}\r\n\r\n.todo-complete:hover {\r\n    background-color: #00db00;\r\n}\r\n\r\n.todo-edit:hover {\r\n    background-color: #dddddd;\r\n}\r\n\r\n#new-todo-component,\r\n.edit-todo-component,\r\n#new-project-component {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 300px;\r\n    background-color: #eeeeee;\r\n    transform: translate(-50%, -50%) scale(0);\r\n    transition: 0.3s;\r\n    padding: 16px;\r\n}\r\n\r\n#new-todo-component.active,\r\n.edit-todo-component.active,\r\n#new-project-component.active {\r\n    transition: 0.3s;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    z-index: 1;\r\n    border-radius: 8px;\r\n}\r\n\r\n.overlay.active {\r\n    position: fixed;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.new-todo-header,\r\n.edit-todo-header,\r\n.new-project-header {\r\n    text-align: center;\r\n    margin-top: 8px;\r\n}\r\n\r\nform * {\r\n    margin: 4px 0;\r\n}\r\n\r\n#name-input,\r\n#description-input,\r\n#edit-name-input,\r\n#edit-description-input,\r\n#new-project-input {\r\n    font-size: 18px;\r\n    width: 280px;\r\n    padding: 10px;\r\n    border: none;\r\n    resize: none;\r\n    border-radius: 8px;\r\n}\r\n\r\n#due-input-label,\r\n#edit-due-input-label {\r\n    font-size: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n}\r\n\r\n#due-input,\r\n#edit-due-input {\r\n    flex: 1;\r\n    font-size: 18px;\r\n    padding: 10px;\r\n    border: none;\r\n    border-radius: 8px;\r\n}\r\n\r\n#todo-submit-button,\r\n#edit-submit-button,\r\n#project-submit-button {\r\n    margin-top: 12px;\r\n    font-size: 20px;\r\n    width: 100%;\r\n    background-color: lime;\r\n    border: none;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n',""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],s=r.base?c[0]+r.base:c[0],l=i[s]||0,u="".concat(s," ").concat(l);i[s]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var v=o(m,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:v,references:1})}d.push(u)}return d}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=r(e,o),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),i=n(569),d=n.n(i),a=n(565),c=n.n(a),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(28),v={};v.styleTagTransform=p(),v.setAttributes=c(),v.insert=d().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=l(),t()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals;let f=[];function g(e,t,n=null){let r="New Todo",o=e,i=t,d=n,a=function(){const e=document.createElement("div");e.classList.add("edit-todo-component");const t=document.createElement("h1");return t.classList.add("edit-todo-header"),t.innerText="Edit Todo Item",e.append(t,function(){const e=document.createElement("form");e.classList.add("edit-todo-form");const t=document.createElement("input");t.type="text",t.id="edit-name-input",t.required=!0;const n=document.createElement("textarea");n.id="edit-description-input",n.rows=2;const r=document.createElement("input");r.type="date",r.id="edit-due-input",r.required=!0;const o=document.createElement("label");o.id="edit-due-input-label",o.innerText="Due Date:",o.append(r);const i=document.createElement("button");return i.type="submit",i.id="edit-submit-button",i.innerText="Edit",e.append(t,n,o,i),e}()),e}(),c=function(){return i},s=function(e){i=e},l=function(){return o},u=function(e){r=e},p=function(){return d};a.querySelector(".edit-todo-form").addEventListener("submit",(e=>{e.preventDefault(),function(){const e=a.querySelector(".edit-todo-form");var t;t=e.elements["edit-name-input"].value,o=t,u(e.elements["edit-description-input"].value||"New Todo");let n=e.elements["edit-due-input"].value.split("-"),r=n[0],i=n[1]-1,d=n[2];s(new Date(r,i,d)),"Todo"===document.querySelector(".sidebar-selector.active").innerText?w():p().projectDOM(),e.reset(),document.querySelector(".overlay").classList.remove("active"),a.classList.remove("active")}()}));let m={dueDate:c,getDOM:function(){let e=document.createElement("div");e.classList.add("todo-block");let t=document.createElement("div");t.classList.add("todo-title"),t.innerText=l();let n=document.createElement("div");n.classList.add("todo-due");let o=c().getFullYear(),i=function(e){switch(e){case 0:return"January";case 1:return"February";case 2:return"March";case 3:return"April";case 4:return"May";case 5:return"June";case 6:return"July";case 7:return"August";case 8:return"September";case 9:return"October";case 10:return"November";case 11:return"December"}}(c().getMonth()),d=c().getDate();n.innerText=`${i} ${d}, ${o}`;let s=document.createElement("div");s.classList.add("todo-description"),s.innerText=r;let u=document.createElement("div");u.classList.add("todo-buttons");let m=document.createElement("button");m.classList.add("todo-complete"),m.innerText="✓",m.addEventListener("click",(()=>p().completeTodo(this)));let v=document.createElement("button");return v.classList.add("todo-edit"),v.innerText="Edit",v.addEventListener("click",(()=>{const e=document.querySelector(".overlay");a.classList.add("active"),e.classList.add("active");const t=a.querySelector(".edit-todo-form");t.elements["edit-name-input"].value=l(),t.elements["edit-description-input"].value=r;let n=`${c().getMonth()+1}`;1===n.length&&(n=`0${n}`);let o=`${c().getDate()}`;1===o.length&&(o=`0${o}`),t.elements["edit-due-input"].value=`${c().getFullYear()}-${n}-${o}`})),u.append(m,v),e.append(t,n,s,u),e},getTitle:l,getProject:p,setDesc:u,dialogue:a};return f.push(m),m}function x(){return f}let b=[];function h(e,t="New Project"){let n=[],r=e,o=t||"New Project",i=function(){return r},d=function(){const e=document.querySelector(".main-body");e.innerHTML="";const t=n;t.sort(((e,t)=>e.dueDate().getTime()<t.dueDate().getTime()?-1:1));let r=document.createElement("div");r.classList.add("description"),r.innerText=o;let i=document.createElement("div");i.classList.add("project-header");let d=L();i.append(r,d),e.append(i);for(let n of t)e.append(n.getDOM())},a={getDOM:function(){let e=document.createElement("div");return e.classList.add("project"),e.classList.add("sidebar-selector"),e.addEventListener("click",y.bind(e)),e.addEventListener("click",d),e.innerText=i(),e},addTodo:function(e,t,r="New Todo"){let o=g(e,t,this);o.setDesc(r),n.push(o)},completeTodo:function(e){let t=n.indexOf(e);n.splice(t,1),d()},getTitle:i,projectDOM:d};return b.push(a),a}function y(){for(let e of document.querySelectorAll(".sidebar-selector"))e.classList.remove("active");this.classList.add("active")}function w(){document.querySelector(".main-body").innerHTML="";const e=x();e.sort(((e,t)=>e.dueDate().getTime()<t.dueDate().getTime()?-1:1));let t=document.createElement("div");t.classList.add("description"),t.innerText="List of all active Todos";let n=document.createElement("div");n.classList.add("project-header");let r=L();n.append(t,r);const o=document.querySelector(".main-body");o.append(n);for(let t of e)o.append(t.getDOM())}function L(){const e=document.createElement("div");return e.classList.add("new-todo"),e.innerText="+",e.addEventListener("click",(()=>{const e=document.querySelector("#new-todo-component"),t=document.querySelector(".overlay");e.classList.add("active"),t.classList.add("active")})),e}!function(){const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("top-div"),t.append(function(){document.createElement("div").classList.add("top-div");const e=document.createElement("div");e.classList.add("logo");const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("logo-svg"),t.setAttribute("viewBox","0 0 24 24");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("fill","currentColor"),n.setAttribute("d","M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"),t.append(n);const r=document.createElement("div");return r.classList.add("title"),r.innerText="Odin Todo",e.append(t,r),e}(),function(){const e=document.createElement("div");e.classList.add("new-project-button");const t=document.createElementNS("http://www.w3.org/2000/svg","svg");t.classList.add("new-project-svg"),t.setAttribute("viewBox","0 0 24 24");const n=document.createElementNS("http://www.w3.org/2000/svg","path");n.setAttribute("fill","currentColor"),n.setAttribute("d","M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V4H13V12L10.5 9.75L8 12V4H6V20H13.09M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z"),t.append(n);const r=document.createElement("div");return r.classList.add("new-project-text"),r.innerText="New Project",e.append(t,r),e.addEventListener("click",(()=>{document.querySelector("#new-project-component").classList.add("active"),document.querySelector(".overlay").classList.add("active")})),e}());const n=function(){const e=document.createElement("div");e.classList.add("sidebar");const t=document.createElement("div");t.addEventListener("click",y.bind(t)),t.addEventListener("click",w),t.classList.add("sidebar-heading"),t.classList.add("sidebar-selector"),t.classList.add("sidebar-todo"),t.innerText="Todo";const n=document.createElement("div");return n.classList.add("sidebar-heading"),n.innerText="Projects",e.append(t,n),e}();n.append(h("sample","").getDOM(),h("test","").getDOM());const r=h("three","");n.append(r.getDOM()),r.addTodo("dummy",new Date(2015,2,2)),r.addTodo("second",new Date(2021,5,18)),r.addTodo("earliest",new Date(1971,0,3));const o=document.createElement("div");o.classList.add("main-body");const i=function(){const e=document.createElement("div");e.id="new-todo-component";const t=document.createElement("form");t.id="new-todo-form";const n=document.createElement("h1");n.classList.add("new-todo-header"),n.innerText="New Todo Item";const r=document.createElement("input");r.type="text",r.id="name-input",r.placeholder="Name",r.required=!0;const o=document.createElement("textarea");o.id="description-input",o.rows=2,o.placeholder="Description";const i=document.createElement("input");i.type="date",i.id="due-input",i.required=!0;const d=document.createElement("label");d.htmlFor="due-input",d.id="due-input-label",d.innerText="Due Date:",d.append(i);const a=document.createElement("button");return a.type="submit",a.id="todo-submit-button",a.innerText="Create",t.append(r,o,d,a),t.addEventListener("submit",(e=>{e.preventDefault(),function(){let e=document.querySelector(".sidebar-selector.active"),t=document.querySelector("#new-todo-form"),n=t.elements["name-input"].value,r=t.elements["description-input"].value||"New Todo",o=t.elements["due-input"].value.split("-"),i=o[0],d=o[1]-1,a=o[2];if("Todo"===e.innerText)g(n,new Date(i,d,a)).setDesc(r),w();else{let t=function(e){for(let t of b)if(t.getTitle()===e)return t;return console.log("Error finding project: "+e),null}(e.innerText);t.addTodo(n,new Date(i,d,a),r),t.projectDOM()}t.reset(),document.querySelector(".overlay").classList.remove("active"),document.querySelector("#new-todo-component").classList.remove("active")}()})),e.append(n,t),e}(),d=function(){const e=document.createElement("div");e.id="new-project-component";const t=document.createElement("h1");t.classList.add("new-project-header"),t.innerText="New Project Item";const n=document.createElement("form");n.id="new-project-form";const r=document.createElement("input");r.type="text",r.id="new-project-input",r.required=!0,r.placeholder="Name";const o=document.createElement("textarea");o.id="description-input",o.rows=2,o.placeholder="Description";const i=document.createElement("button");return i.type="submit",i.id="project-submit-button",i.innerText="Create",n.append(r,o,i),n.addEventListener("submit",(t=>{t.preventDefault();let r=n.elements["new-project-input"].value,o=n.elements["description-input"].value;document.querySelector(".sidebar").appendChild(h(r,o).getDOM()),n.reset(),e.classList.remove("active"),document.querySelector(".overlay").classList.remove("active")})),e.append(t,n),e}(),a=document.createElement("div");a.classList.add("overlay"),a.addEventListener("click",(()=>{a.classList.remove("active"),i.classList.remove("active"),d.classList.remove("active");let e=document.querySelectorAll(".edit-todo-component");for(let t of e)t.classList.remove("active")})),e.append(t,n,o,i,d,a),x().forEach((t=>e.append(t.dialogue)))}()})()})();