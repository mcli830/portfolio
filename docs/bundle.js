!function c(i,a,u){function s(t,e){if(!a[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var o=a[t]={exports:{}};i[t][0].call(o.exports,function(e){return s(i[t][1][e]||e)},o,o.exports,c,i,a,u)}return a[t].exports}for(var l="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(e,t,n){"use strict";t.exports=function(n){!function(e){e.projects=Array.from(document.querySelectorAll(".portfolio__projects__list > a.project")).map(function(e){return{node:e,id:e.id,next:{view:!0,rect:e.getBoundingClientRect()}}})}(n);var r=Array.from(document.querySelectorAll(".portfolio__projects__filters .filter"));r.forEach(function(t){t.onclick=function(){var e=t.dataset.tag;r.forEach(function(e){return e.classList.remove("selected")}),function(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"all";e.projects.forEach(function(e){e.prev=Object.assign({},e.next);var t=e.node.dataset.tags.split(" ");t.includes(n)||"all"===n?(e.next.view=!0,e.node.style.display="",setTimeout(function(){return e.node.style.opacity=1},50)):(e.next.view=!1,Object.assign(e.node.style,{display:"none",opacity:0}))}),e.projects.forEach(function(e){return e.next.rect=e.node.getBoundingClientRect()})}(n,e),function(e){var r={duration:250,easing:"ease-out"};e.projects.filter(function(e){return e.prev.view&&e.next.view}).forEach(function(e){var t=e.prev.rect.x-e.next.rect.x,n=e.prev.rect.y-e.next.rect.y;e.node.animate([{transform:"translate(".concat(t,"px, ").concat(n,"px)")},{transform:"none"}],r)})}(n),t.classList.add("selected")}})}},{}],2:[function(e,t,n){"use strict";var r=e("./filter.js"),o={};document.addEventListener("DOMContentLoaded",function(){r(o),function(){var n=document.querySelector(".namecard__content"),r=document.querySelector("#portfolio"),o=document.querySelector(".portfolio > .overlay");n.onclick=function t(e){e.preventDefault();n.onclick=null;n.classList.add("on");o.classList.add("on");r.onclick=function(e){e.preventDefault(),r.onclick=null,n.classList.remove("on"),o.classList.remove("on"),n.onclick=t}}}()})},{"./filter.js":1}]},{},[2]);
//# sourceMappingURL=maps/bundle.js.map
