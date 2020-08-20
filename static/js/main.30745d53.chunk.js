(this.webpackJsonpmomentum=this.webpackJsonpmomentum||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);a(11),a(12),a(13);var r=a(2),n=a(0),c=a.n(n),o=a(7),l=a(1);function s(e,t){var a=t.type,r=t.payload;switch(a){case"SET_CURRENT_TASK":return Object(l.a)({},e,{currentTask:r});case"SET_FETCHED_TASKS":return Object(l.a)({},e,{tasks:Object(o.a)(r)});case"ADD_TASK":return Object(l.a)({},e,{tasks:[].concat(Object(o.a)(e.tasks),[r])});case"REMOVE_TASK":return Object(l.a)({},e,{tasks:e.tasks.filter((function(e){return e._id!==r._id}))});case"EDIT_TASK":return Object(l.a)({},e,{tasks:e.tasks.map((function(e){return e._id===r._id?r:e}))});case"SET_USER":return Object(l.a)({},e,{user:r});case"SET_ACCESS_TOKEN":return Object(l.a)({},e,{accessToken:r});case"SET_IS_DARK":return Object(l.a)({},e,{isDark:r});default:return e}}var u={tasks:[],currentTask:{}},i=Object(n.createContext)(u),m=function(e){var t=e.children,a=Object(n.useReducer)(s,u),o=Object(r.a)(a,2),l=o[0],m=o[1],d=Object(n.useState)("dark"===window.localStorage.getItem("theme")),f=Object(r.a)(d,2),g=f[0],b=f[1];return Object(n.useEffect)((function(){g?(window.localStorage.setItem("theme","dark"),document.getElementsByTagName("html")[0].classList.add("mode-dark")):(window.localStorage.setItem("theme","light"),document.getElementsByTagName("html")[0].classList.remove("mode-dark"))}),[g]),Object(n.useEffect)((function(){"dark"===window.localStorage.getItem("theme")?b(!0):b(!1)}),[]),c.a.createElement(i.Provider,{value:{state:l,addTask:function(e){m({type:"ADD_TASK",payload:e})},removeTask:function(e){m({type:"REMOVE_TASK",payload:e})},setFetchedTasks:function(e){m({type:"SET_FETCHED_TASKS",payload:e})},setCurrentTask:function(e){m({type:"SET_CURRENT_TASK",payload:e})},editTask:function(e){m({type:"EDIT_TASK",payload:e})},setIsDark:b,isDark:g}},t)},d=a(9),f=a.n(d);function g(e){var t=e.task,a=Object(n.useContext)(i),r=a.setCurrentTask,o=a.removeTask;return c.a.createElement("div",{className:"w-full flex  justify-between items-center dark-hover:bg-gray-700 hover:bg-gray-200 px-4 py-1 rounded mb-4 text-xs"},c.a.createElement("div",{className:"w-full text-gray-800 dark:text-white mb-1 cursor-pointer flex items-center justify-between mr-2",onClick:function(){t.completed||r(t)}},c.a.createElement("h1",{className:"text-sm"},t.title),c.a.createElement("div",{className:"flex items-center justify-between"},c.a.createElement("span",{className:"mr-1"},t.pomodoros),c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-4 h-4 fill-current",fill:"inherit"},c.a.createElement("g",{"data-name":"Layer 2"},c.a.createElement("g",{"data-name":"clock"},c.a.createElement("rect",{width:"24",height:"24",transform:"rotate(180 12 12)",opacity:"0"}),c.a.createElement("path",{d:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"}),c.a.createElement("path",{d:"M16 11h-3V8a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1h4a1 1 0 0 0 0-2z"})))))),c.a.createElement("button",{onClick:function(){o(t)},className:"dark:text-white dark-hover:bg-gray-600 text-gray-800 hover:bg-gray-400 border-none outline-none w-8 h-8 flex items-center justify-center cursor-pointer rounded p-2"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current w-6 h-6",viewBox:"0 0 24 24"},c.a.createElement("g",{"data-name":"Layer 2"},c.a.createElement("g",{"data-name":"trash"},c.a.createElement("rect",{width:"24",height:"24",opacity:"0"}),c.a.createElement("path",{d:"M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"}))))))}var b=a(4),h=a(6);function p(e){var t,a=e.creatingTask,o=e.setCreatingTask,s=Object(n.useRef)(null),u=Object(n.useRef)(null),m=Object(n.useRef)(null),d=Object(n.useContext)(i).addTask,f=Object(n.useState)({title:"",pomodoros:""}),g=Object(r.a)(f,2),p=g[0],E=g[1],w=function(e){a&&!m.current.contains(e.target)&&o(!1)},y=Object(n.useCallback)((function(e){""===p.title||""===p.pomodoros||(d(Object(l.a)({},p,{pomodoros:parseInt(p.pomodoros),_id:Object(h.a)(new Date,"x")})),E({title:"",pomodoros:""})),w(e)}),[p]);return Object(n.useEffect)((function(){return document.addEventListener("mousedown",y),function(){return document.removeEventListener("mousedown",y)}}),[p]),Object(n.useEffect)((function(){s.current&&s.current.focus()}),[s]),c.a.createElement("form",{className:"flex items-end justify-between",ref:m},c.a.createElement("div",{className:"relative"},c.a.createElement("svg",{className:"text-gray-800 dark:text-white fill-current w-4 h-4 absolute top-4 left-2 top-2",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13 9H10V17H8V9H5V7H13V9ZM18 13H16V17H14V13H12V11H18V13Z",fill:"currentColor"})),c.a.createElement("input",{type:"text",placeholder:"Task title",value:p.title,onKeyDown:function(e){13==e.keyCode&&(""!==p.pomodoros&&""!==p.title?(d(Object(l.a)({},p,{pomodoros:parseInt(p.pomodoros),_id:Object(h.a)(new Date,"x")})),E({title:"",pomodoros:""})):u.current.focus())},onChange:function(e){E(Object(l.a)({},p,{title:e.target.value}))},className:"focus:outline-none mr-1 bg-gray-400 focus:bg-white dark:bg-gray-700 dark-focus:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 focus:border-indigo-600 text-gray-800 dark-focus:border-indigo-600 dark:text-white dark-placeholder:text-gray-400 rounded dark:border-gray-600 placeholder-gray-800 text-sm px-2 py-1",style:{textIndent:"1.5rem"},ref:s})),c.a.createElement("div",{className:"relative"},c.a.createElement("svg",{className:"text-gray-800 dark:text-white fill-current w-4 h-4 absolute top-4 left-2 top-2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M13 5.07089C16.3923 5.55612 19 8.47353 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.96159 5.87128 8.12669 7.26175 6.84738L5.84658 5.43221C4.09461 7.0743 3 9.40932 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.662 3 11.3283 3.01863 11 3.05493V9.08551H13V5.07089Z",fill:"currentColor"}),c.a.createElement("path",{d:"M7.70711 8.70708C7.31658 9.0976 7.31658 9.73077 7.70711 10.1213L10.5355 12.9497C10.9261 13.3402 11.5592 13.3402 11.9497 12.9497C12.3403 12.5592 12.3403 11.926 11.9497 11.5355L9.12132 8.70708C8.7308 8.31655 8.09763 8.31655 7.70711 8.70708Z",fill:"currentColor"})),c.a.createElement("input",(t={type:"number",className:"w-8",ref:u,value:p.pomodoros,onKeyDown:function(e){13==e.keyCode&&(""!==p.pomodoros&&""!==p.title?(d(Object(l.a)({},p,{pomodoros:parseInt(p.pomodoros),_id:Object(h.a)(new Date,"x")})),E({title:"",pomodoros:""})):s.current.focus())},onChange:function(e){E(Object(l.a)({},p,{pomodoros:e.target.value}))},min:"1",max:"99"},Object(b.a)(t,"className","bg-gray-400 focus:bg-white dark:bg-gray-700 dark-focus:bg-gray-800 border-2 border-gray-400 dark:border-gray-700 focus:outline-none focus:border-indigo-600 text-gray-800 dark-focus:border-indigo-600 dark:text-white dark-placeholder:text-gray-400 rounded dark:border-gray-600 placeholder-gray-800 text-sm px-2 py-1 max-w-sm w-full"),Object(b.a)(t,"style",{textIndent:"1.5rem",appearance:"none"}),t))))}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var y=c.a.createElement("g",{"data-name":"Layer 2"},c.a.createElement("g",{"data-name":"moon"},c.a.createElement("rect",{width:24,height:24,opacity:0}),c.a.createElement("path",{d:"M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z"}))),v=function(e){var t=e.svgRef,a=e.title,r=w(e,["svgRef","title"]);return c.a.createElement("svg",E({viewBox:"0 0 24 24",ref:t},r),a?c.a.createElement("title",null,a):null,y)},k=c.a.forwardRef((function(e,t){return c.a.createElement(v,E({svgRef:t},e))}));a.p;function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j=c.a.createElement("g",{"data-name":"Layer 2"},c.a.createElement("g",{"data-name":"sun"},c.a.createElement("rect",{width:24,height:24,transform:"rotate(180 12 12)",opacity:0}),c.a.createElement("path",{d:"M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z"}),c.a.createElement("path",{d:"M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"}),c.a.createElement("path",{d:"M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z"}),c.a.createElement("path",{d:"M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"}),c.a.createElement("path",{d:"M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"}),c.a.createElement("path",{d:"M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z"}),c.a.createElement("path",{d:"M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"}),c.a.createElement("path",{d:"M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"}),c.a.createElement("path",{d:"M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"}))),C=function(e){var t=e.svgRef,a=e.title,r=O(e,["svgRef","title"]);return c.a.createElement("svg",x({viewBox:"0 0 24 24",ref:t},r),a?c.a.createElement("title",null,a):null,j)},T=c.a.forwardRef((function(e,t){return c.a.createElement(C,x({svgRef:t},e))}));a.p;function N(){var e=Object(n.useContext)(i),t=e.state,a=e.isDark,o=e.setIsDark,l=Object(n.useState)(!1),s=Object(r.a)(l,2),u=s[0],m=s[1];Object(n.useRef)(null);return c.a.createElement("div",{className:"bg-white dark:bg-gray-800 col-span-3 p-8 flex flex-col items-center justify-between w-screen md:w-auto"},c.a.createElement("div",{className:"w-full"},c.a.createElement("div",{className:"w-full"},c.a.createElement("div",{className:"flex items-center text-indigo-600 mb-4"},c.a.createElement("svg",{className:"w-8 h-8 fill-current mr-2",width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M13 5.07089C16.3923 5.55612 19 8.47353 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 9.96159 5.87128 8.12669 7.26175 6.84738L5.84658 5.43221C4.09461 7.0743 3 9.40932 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C11.662 3 11.3283 3.01863 11 3.05493V9.08551H13V5.07089Z",fill:"currentColor"}),c.a.createElement("path",{d:"M7.70711 8.70708C7.31658 9.0976 7.31658 9.73077 7.70711 10.1213L10.5355 12.9497C10.9261 13.3402 11.5592 13.3402 11.9497 12.9497C12.3403 12.5592 12.3403 11.926 11.9497 11.5355L9.12132 8.70708C8.7308 8.31655 8.09763 8.31655 7.70711 8.70708Z",fill:"currentColor"})),c.a.createElement("h1",{className:"text-xl text-gray-800 dark:text-white font-bold mr-8"},"Momentum"))),c.a.createElement("div",{className:"w-full max-h-64 overflow-y-scroll"},t.tasks.filter((function(e){return!e.completed&&e._id!==t.currentTask._id})).map((function(e){return c.a.createElement(g,{task:e,key:e._id})})))),c.a.createElement("div",{className:"w-full"},c.a.createElement("div",{className:"w-full"},u?c.a.createElement(p,{creatingTask:u,setCreatingTask:m}):""),c.a.createElement("button",{onClick:function(){m((function(e){return!e}))},className:"mt-2 focus:outline-none text-sm flex items-center border-none w-full text-gray-800 dark:text-white hover:bg-gray-400 dark-hover:bg-gray-700 px-4 py-2 rounded bg-white dark:bg-gray-800"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"fill-current w-4 mr-4",fill:"inherit"},c.a.createElement("g",{"data-name":"Layer 2"},c.a.createElement("g",{"data-name":"plus"},c.a.createElement("rect",{width:"24",height:"24",transform:"rotate(180 12 12)",opacity:"0"}),c.a.createElement("path",{d:"M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"})))),"Add a task"),c.a.createElement("div",{className:"w-full text-gray-800 dark:text-white mt-4 flex items-center justify-between"},c.a.createElement("button",{onClick:function(){return o((function(e){return!e}))},className:"mr-2 bg-gray-400 dark:bg-gray-700 w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"},a?c.a.createElement(T,{className:"fill-current w-4 h-4"}):c.a.createElement(k,{className:"fill-current w-4 h-4"})),c.a.createElement("a",{href:"https://github.com/sarmentow/momentum",className:"bg-gray-400 dark:bg-gray-700 px-4 py-2 rounded flex items-center justify-center focus:outline-none"},"Source"))))}function S(e){var t=e.timeLeft,a={days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)};return c.a.createElement("h2",{className:"mb-1 text-4xl"},a.minutes<10?"0":null,a.minutes,":",a.seconds<10?"0":null,a.seconds)}function M(){var e=Object(n.useContext)(i),t=e.state,a=e.setCurrentTask,o=e.removeTask,l=Object(n.useState)(15e5),s=Object(r.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(!0),f=Object(r.a)(d,2),g=f[0],b=f[1],h=Object(n.useState)(!1),p=Object(r.a)(h,2),E=p[0],w=p[1],y=Object(n.useState)(0),v=Object(r.a)(y,2),k=v[0],x=v[1],O=Object(n.useState)(0),j=Object(r.a)(O,2),C=j[0],T=j[1],N=Object(n.useState)(0),M=Object(r.a)(N,2),_=M[0],R=M[1];return Object(n.useEffect)((function(){T(Date.now())}),[g,t.currentTask]),function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e})),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){0===Object.keys(t.currentTask).length||g||(R(Date.now()-C),m((function(e){return e-_})),T(Date.now()))}),100),Object(n.useEffect)((function(){t.currentTask.pomodoros===k&&(o(t.currentTask),a({}),x(0))}),[k,t.currentTask,a]),Object(n.useEffect)((function(){u<=0&&(E?(x((function(e){return e+1})),m(15e5),w(!1),b(!0)):E||(m(3e5),w(!0),b(!0)))}),[u]),Object(n.useEffect)((function(){0!==Object.keys(t.currentTask).length&&(b(!1),m(15e5))}),[t.currentTask]),c.a.createElement("div",{className:"w-full flex justify-center items-center bg-gray-300 shadow dark:bg-gray-900 text-gray-800 dark:text-white col-span-9"},0===Object.keys(t.currentTask).length?c.a.createElement("h1",{className:"text-2xl"},"Pick a task from the sidebar"):c.a.createElement("div",{className:"bg-white dark:bg-gray-800 rounded max-w-lg w-full px-8 py-8"},c.a.createElement("h1",{className:"text-5xl font-bold"},t.currentTask.title),c.a.createElement(S,{timeLeft:u}),c.a.createElement("p",{className:"mb-4"},k/t.currentTask.pomodoros*100||0,"%"),c.a.createElement("div",null,c.a.createElement("button",{className:"bg-indigo-600 border-2 border-indigo-600 font-bold text-sm text-white px-4 py-2 rounded focus:outline-none mr-2",onClick:function(){b((function(e){return!e}))}},g?"Resume":"Pause"),15e5!==u?c.a.createElement("button",{className:"bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 font-bold text-sm px-4 py-2 rounded focus:outline-none mr-2",onClick:function(){b(!0),m(15e5)}},"Reset"):"",c.a.createElement("button",{className:"bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 font-bold text-sm px-4 py-2 rounded focus:outline-none mr-2",onClick:function(){m(0)}},"Skip"))))}var _=function(){return c.a.createElement("div",{className:"grid md:grid-cols-12 min-h-screen transition duration-500 ease-in-out"},c.a.createElement(N,null),c.a.createElement(M,null))};f.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null,c.a.createElement(_,null))),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.30745d53.chunk.js.map