!function(){var t,e=document.querySelector("body"),a=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");a.addEventListener("click",(function(a){t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),a.target.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(e){clearInterval(t),e.target.disabled=!0,a.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.0dddcac9.js.map
