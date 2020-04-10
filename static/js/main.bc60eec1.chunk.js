(this.webpackJsonpnikotodev=this.webpackJsonpnikotodev||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(4),l=t.n(o),c=t(2),i=t(1),s=(t(10),function(){return r.a.createElement(i.a,null,r.a.createElement(i.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"onboarding"},r.a.createElement("div",{className:"onboarding__information-basic"},r.a.createElement("p",{className:"onboarding__name"},"Heya!",r.a.createElement("span",{role:"img",className:"onboarding__waving-hand","aria-label":"wave"},"\ud83d\udc4b"),"I'm ",r.a.createElement("span",{className:"onboarding__name--heavy"},"nikoto.")),r.a.createElement("p",{className:"onboarding__occupation"},"Software Engineer",r.a.createElement("br",null),"@ Spotahome ",r.a.createElement("img",{className:"onboarding__spotahome",src:"./images/spotahome.jpg",alt:"spotahome logo"}))),r.a.createElement("code",{className:"onboarding__teaser"},"Want to know me better? Use the terminal. ",r.a.createElement("br",null),'Start by typing "help" and pressing enter.'),r.a.createElement("div",{className:"onboarding__information-socials"},r.a.createElement("a",{href:"https://github.com/nikotomad",target:"_blank",rel:"noopener noreferrer",className:"onboarding__information-socials-link"},r.a.createElement("img",{className:"onboarding__information-icon",src:"./images/icon-github.svg",width:"40",alt:"github"}),"Github"),r.a.createElement("a",{href:"https://www.linkedin.com/in/nikolaasverlee/",target:"_blank",rel:"noopener noreferrer",className:"onboarding__information-socials-link"},r.a.createElement("img",{className:"onboarding__information-icon",src:"./images/icon-linkedin.webp",width:"40",alt:"linkedin"}),"Linkedin"))))}),m=function(){return r.a.createElement(i.a,null,r.a.createElement(i.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},r.a.createElement("h1",null,"Projects")))},u=r.a.createContext(),d=u.Provider,p=u.Consumer,g=(t(11),function(){return r.a.createElement(p,null,(function(e){return r.a.createElement("div",{className:"sliding-panel"},function(e){switch(e){case"onboarding":return r.a.createElement(s,null);case"projects":return r.a.createElement(m,null);default:return r.a.createElement(s,null)}}(e.step))}))}),E={help:{result:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"[available commands are]:"),r.a.createElement("p",null,"- home"),r.a.createElement("p",null,"- about"),r.a.createElement("p",null,"- contact"),r.a.createElement("p",null,"- team"),r.a.createElement("p",null,"- skills"),r.a.createElement("p",null,"- projects"),r.a.createElement("p",null,"- clear"))},about:{result:"Based in Madrid. Software Engineer. Worst engineer at the company but third coolest."},team:{result:r.a.createElement("img",{loading:"eager",src:"./images/broccoli.png",alt:"brocolli",width:"50"})},skills:{result:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Frontend: React, React Native, Redux"),r.a.createElement("p",null,"Backend & DB: Node.js + Mongo"),r.a.createElement("p",null,"Testing: Jest, Cypress, Detox"),r.a.createElement("p",null,"Other: Test driven development, BDD, Kibana, Grafana"))},clear:{result:""},contact:{result:'Liked this experiment? Send me an invite on linkedin with the code word "terminalsrock" and we can connect.'},"whois weapon":{result:r.a.createElement("img",{src:"./images/avatar-niko.jpg",alt:"weapon",width:"100"})},home:{result:"Navigated to home."},projects:{result:'Navigated to projects. This section is still under construction. Feel free to check back on it later! You can go back to the first screen by writing "home"'}},h=(t(12),function(e){var a=e.panelContext,t=Object(n.useState)([]),o=Object(c.a)(t,2),l=o[0],i=o[1],s=Object(n.useState)(""),m=Object(c.a)(s,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"terminal"},r.a.createElement("div",{className:"terminal__navbar"},r.a.createElement("span",{className:"terminal__navbar-close"})),r.a.createElement("div",{className:"terminal__screen"},r.a.createElement("div",{className:"terminal__screen-results"},l&&l.map((function(e,a){return r.a.createElement("div",{className:"terminal__screen-row",key:"".concat(e).concat(a)},r.a.createElement("p",{className:"terminal__command"},"".concat("/dev/guest"," \u2192 ").concat(e)),r.a.createElement("p",{className:"terminal__result"},E[e]&&E[e].result||'Command not found. Type "help" for more info.'))})))),r.a.createElement("div",{className:"terminal__actions",onKeyDown:function(e){var t=e.key,n="Enter"===t;u&&"Enter"===t&&(l.push(u),d("")),"home"===u&&n&&a.updateStep("onboarding"),"projects"===u&&n&&a.updateStep("projects"),"clear"===u&&n&&i([])}},r.a.createElement("span",{className:"terminal__actions-symbol"},"$ ".concat("/dev/guest")),r.a.createElement("input",{autoFocus:!0,type:"text",className:"terminal__actions-command",value:u,onChange:function(e){return d(e.target.value)},tabIndex:"0",placeholder:"type command.."})))}),b=(t(13),function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{className:"github-button",href:"https://github.com/nikotomad/nikoto.dev","data-color-scheme":"no-preference: dark; light: dark; dark: dark;","data-size":"large","data-show-count":"true","aria-label":"Star nikotomad/nikoto.dev on GitHub"},"Stars"))}),v=(t(14),function(){var e=Object(n.useState)("onboarding"),a=Object(c.a)(e,2),t=a[0],o=a[1],l={step:t,updateStep:function(e){return o(e)}};return r.a.createElement(d,{value:l},r.a.createElement("div",{className:"homepage"},r.a.createElement(g,{panelContext:l}),r.a.createElement(h,{panelContext:l}),r.a.createElement(b,null)))});t(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.bc60eec1.chunk.js.map