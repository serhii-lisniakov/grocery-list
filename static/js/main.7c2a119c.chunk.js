(this["webpackJsonptest-interview"]=this["webpackJsonptest-interview"]||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/cart.cc3cb56d.svg"},33:function(e,t,a){e.exports=a(48)},38:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(14),c=a.n(i),s=(a(38),a(7)),l=a(12),o=a(2),u=a(16),d=a(17),m=a(21),p=a(20),E=(a(43),a(29)),h=a.n(E),v=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"header-logo"},r.a.createElement("img",{src:h.a,alt:""}),r.a.createElement("span",null,"My Grosery List")),r.a.createElement("div",{className:"header-links"},r.a.createElement(l.b,{to:"/list",activeClassName:"header-link-active",className:"header-link"},"List"),r.a.createElement(l.b,{to:"/entries",activeClassName:"header-link-active",className:"header-link"},"Entries")))}}]),a}(n.Component),f=Object(o.g)(v),y=function(e){return e.condition?e.children:null},b=a(32),g=a(31),k=a(8),N={entries:[{id:1,priority:"1",name:"eggs",status:"have",date:"29.09.2020"},{id:2,priority:"3",name:"bread",status:"have",date:"30.09.2020"},{id:3,priority:"1",name:"chips",status:"ran out",date:"28.09.2020"},{id:4,priority:"2",name:"milk",status:"have",date:"14.09.2020"},{id:5,priority:"5",name:"beer",status:"have",date:"28.09.2020"}]};a(45);var O=function(e){return r.a.createElement("div",{className:"entry"},r.a.createElement("div",{className:"entry-priority"},e.priority),r.a.createElement("div",{className:"entry-name"},e.name),r.a.createElement("div",{className:"entry-status"},r.a.createElement("span",{onClick:e.changeStatus,"data-id":e.id,style:"have"===e.status?{background:"rgb(37, 163, 85)"}:{background:"rgb(216, 56, 56)"}},e.status)),r.a.createElement("div",{className:"entry-date"},r.a.createElement("span",null,e.date)),r.a.createElement("div",{className:"entry-actions"},r.a.createElement("span",{onClick:e.delete,"data-id":e.id},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"16",viewBox:"0 0 14.93 16.99"}," ",r.a.createElement("g",{transform:"translate(-1331.63 -446.18)"}," ",r.a.createElement("path",{fill:"#fff",d:"M1332.75,452.22l.79,9.59a1.484,1.484,0,0,0,1.49,1.36h8.14a1.481,1.481,0,0,0,1.48-1.36l.8-9.59h-12.7Zm3.86,7.47a.5.5,0,0,1-.5.5.508.508,0,0,1-.5-.5v-5.98a.5.5,0,0,1,.5-.49.493.493,0,0,1,.5.49Zm2.99,0a.508.508,0,0,1-.5.5.5.5,0,0,1-.5-.5v-5.98a.493.493,0,0,1,.5-.49.5.5,0,0,1,.5.49Zm2.98,0a.5.5,0,1,1-.99,0v-5.98a.5.5,0,0,1,.99,0Z"})," ",r.a.createElement("path",{fill:"#fff",d:"M1345.07,448.17h-3.48v-.49a1.5,1.5,0,0,0-1.5-1.5h-1.99a1.5,1.5,0,0,0-1.49,1.5v.49h-3.49a1.5,1.5,0,0,0-1.49,1.5v.99a.5.5,0,0,0,.5.5h13.94a.493.493,0,0,0,.49-.5v-.99A1.5,1.5,0,0,0,1345.07,448.17Zm-4.48,0h-2.99v-.49a.5.5,0,0,1,.5-.5h1.99a.5.5,0,0,1,.5.5Z"})," ")," "))))},j=Object(s.b)((function(e){return{entries:e.entriesReducer.entries}}),null)((function(e){var t=Object(n.useState)(e.entries),a=Object(b.a)(t,2),i=a[0],c=a[1],l=Object(s.c)(),o=function(t){l(function(e){return{type:"DELETE_ENTRY",payload:e}}(i.find((function(e){return e.id===+t.currentTarget.dataset.id})))),c(e.entries)},u=function(t){l(function(e){return{type:"CHANGE_STATUS",payload:e}}(i.find((function(e){return e.id===+t.currentTarget.dataset.id})))),c(e.entries)};return r.a.createElement("div",null,i.sort((function(e,t){return e.priority-t.priority})).map((function(e){return r.a.createElement(O,{key:e.id,id:e.id,priority:e.priority,name:e.name,status:e.status,date:e.date,delete:o,changeStatus:u})})))})),w=a(19),C=(a(46),function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={entries:[e.props.entries],priority:"1",name:""},e.inputHandler=function(t,a){e.setState(Object(w.a)({},t,a.target.value))},e.addEntry=function(){var t={id:e.props.entries.length+1,priority:e.state.priority,name:e.state.name,status:"ran out",date:(new Date).toLocaleDateString()};e.props.createEntry(t),e.setState({entries:[e.props.entries]})},e.filter=function(){var t=document.querySelector("#checkHave"),a=document.querySelector("#checkRunOut");e.setState((function(){return t.checked&&a.checked?{entries:e.state.entries}:t.checked||a.checked?t.checked?{entries:e.state.entries.filter((function(e){return"ran out"!==e.status}))}:a.checked?{entries:e.state.entries.filter((function(e){return"have"!==e.status}))}:void 0:{entries:[]}}))},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){this.render()}},{key:"render",value:function(){return r.a.createElement("div",{className:"list"},r.a.createElement("div",{className:"list-actions"},r.a.createElement("div",null,r.a.createElement("label",null,r.a.createElement("input",{id:"checkHave",onChange:this.filter,defaultChecked:!0,type:"checkbox"})," ran out"),r.a.createElement("label",null,r.a.createElement("input",{id:"checkRunOut",onChange:this.filter,defaultChecked:!0,type:"checkbox"})," have"))),r.a.createElement("div",{className:"list-header"},r.a.createElement("div",null,"priority"),r.a.createElement("div",null,"name"),r.a.createElement("div",null,"status"),r.a.createElement("div",null,"date"),r.a.createElement("div",null,"actions")),r.a.createElement("div",{className:"list-add"},r.a.createElement("select",{onChange:this.inputHandler.bind(this,"priority")},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("input",{type:"text",onChange:this.inputHandler.bind(this,"name")}),r.a.createElement("button",{onClick:this.addEntry,className:"list-btn"},"+")),r.a.createElement("div",{className:"list-content"},this.state.entries.sort((function(e,t){return e.priority-t.priority})).map((function(e){return r.a.createElement(j,{key:e.id,id:e.id,priority:e.priority,name:e.name,status:e.status,date:e.date})}))))}}]),a}(n.Component)),S=Object(s.b)((function(e){return{entries:e.entriesReducer.entries}}),(function(e){return{createEntry:function(t){return e({type:"CREATE_ENTRY",payload:t})}}}))(C),T=(a(47),function(e){return r.a.createElement("div",{className:e.class},r.a.createElement("div",{className:"container"},r.a.createElement(y,{condition:"page page-list"===e.class},r.a.createElement(S,null)),r.a.createElement(y,{condition:"page page-entries"===e.class},r.a.createElement(j,null)),r.a.createElement(y,{condition:"page page-error"===e.class},r.a.createElement("div",null,"Error 404. Page not found."))))});var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"/grocery-list"},r.a.createElement(f,null),r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",render:function(){return r.a.createElement(o.a,{to:"/list"})}}),r.a.createElement(o.b,{path:"/list",render:function(){return r.a.createElement(T,{class:"page page-list"})}}),r.a.createElement(o.b,{path:"/entries",render:function(){return r.a.createElement(T,{class:"page page-entries"})}}),r.a.createElement(o.b,{render:function(){return r.a.createElement(T,{class:"page page-error"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=a(10),A=a(30),H=Object(x.combineReducers)({entriesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ENTRY":return Object(k.a)(Object(k.a)({},e),{},{entries:[t.payload].concat(Object(g.a)(e.entries))});case"DELETE_ENTRY":return Object(k.a)(Object(k.a)({},e),{},{entries:e.entries.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_STATUS":return Object(k.a)(Object(k.a)({},e),{},{entries:e.entries.forEach((function(e){e.id===t.payload.id&&((e.status="have")?e.status="ran out":(e.status="ran out")&&(e.status="have"))}))});default:return e}}}),D=(localStorage.getItem("grocery"),Object(x.createStore)(H,Object(A.composeWithDevTools)()));c.a.render(r.a.createElement(s.a,{store:D},r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.7c2a119c.chunk.js.map