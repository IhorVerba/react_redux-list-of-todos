(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(9),n=c.n(a),s=c(5),r=c(16),o=c(7),l=c(14),i=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},b=c(4),h=function(e){return{type:"query/SET",payload:e}},O=function(){return{type:"query/CLEAR"}},m=function(e){return{type:"status/SET",payload:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"query/SET":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"query/CLEAR":return Object(b.a)(Object(b.a)({},e),{},{query:""});case"status/SET":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});default:return e}},x=c(12),p=function(e){return{type:"todos/SET",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET"===t.type?[].concat(Object(x.a)(e),Object(x.a)(t.payload)):e},v=Object(o.combineReducers)({currentTodo:j,filter:f,todos:y}),N=Object(o.createStore)(v,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(i.a))),g=c(0),T=(c(24),c(25),s.b),E=s.c,S=c(1),k=function(e){var t=e.todos,c=E((function(e){return e.currentTodo})),a=T();return Object(S.jsx)(S.Fragment,{children:t.length?Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:t.map((function(e){return Object(S.jsxs)("tr",{"data-cy":"todo",className:e===c?"has-background-info-light":"",children:[Object(S.jsx)("td",{className:"is-vcentered",children:e.id}),Object(S.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(e){a(d(e))}(e)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:e===c?"far fa-eye-slash":"far fa-eye"})})})})]},e.id)}))})]}):Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"})})},w=function(){var e=E((function(e){return e.filter})),t=Object(s.b)();return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",value:e.status,onChange:function(e){t(m(e.target.value))},children:[Object(S.jsx)("option",{value:"all",children:"All"}),Object(S.jsx)("option",{value:"active",children:"Active"}),Object(S.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:e.query,onChange:function(e){t(h(e.target.value))}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),e.query&&Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t(O())}})})]})]})},q=c(3),C=(c(27),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})});function L(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var R=function(e){var t=e.todo,c=Object(g.useState)(null),a=Object(q.a)(c,2),n=a[0],s=a[1],r=Object(g.useState)(!1),o=Object(q.a)(r,2),l=o[0],i=o[1],d=T();return Object(g.useEffect)((function(){var e;i(!0),(e=t.userId,L("/users/".concat(e))).then(s).finally((function(){return i(!1)}))}),[]),Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),l?Object(S.jsx)(C,{}):Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return d(u())}})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(S.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(S.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})},_=function(){var e=E((function(e){return e.todos})),t=E((function(e){return e.filter})),c=E((function(e){return e.currentTodo})),a=T();Object(g.useEffect)((function(){L("/todos").then((function(e){return a(p(e))}))}),[]);var n=Object(g.useMemo)((function(){return e.filter((function(e){var c=function(e){return e.title.toLowerCase().includes(t.query.toLowerCase())}(e);switch(t.status){case"completed":return e.completed&&c;case"active":return!e.completed&&c;default:return c}}))}),[t.query,t.status,e]);return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(w,{})}),Object(S.jsx)("div",{className:"block",children:0===e.length?Object(S.jsx)(C,{}):Object(S.jsx)(k,{todos:n})})]})})}),c&&Object(S.jsx)(R,{todo:c})]})},A=function(){return Object(S.jsx)(s.a,{store:N,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(_,{})})})};n.a.render(Object(S.jsx)(A,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.145be3cf.chunk.js.map