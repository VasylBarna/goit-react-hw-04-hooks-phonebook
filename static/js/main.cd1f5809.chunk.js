(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={form:"ContactForm_form__1NUCn",btn:"ContactForm_btn___G3Mm"}},function(e,t,n){e.exports={list:"ContactsList_list__1I0e0",btn:"ContactsList_btn__cayO-"}},function(e,t,n){e.exports={title:"App_title__2jCjM",subtitle:"App_subtitle__iWHAK"}},,function(e,t,n){e.exports={container:"Container_container__3jJxF"}},function(e,t,n){e.exports={find:"Filter_find__1JI6W"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=(n(18),n(13)),s=n(2),u=n(10),l=n.n(u),b=n(0),d=function(e){var t=e.children;return Object(b.jsx)("div",{className:l.a.container,children:t})},j=n(6),m=n.n(j);function f(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),u=Object(s.a)(o,2),l=u[0],d=u[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":d(a);break;default:return}},f=function(){i(""),d("")};return Object(b.jsxs)("form",{className:m.a.form,onSubmit:function(e){return e.preventDefault(),t(c,l),f()},children:[Object(b.jsxs)("label",{children:["Name",Object(b.jsx)("input",{type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:j,required:!0})]}),Object(b.jsxs)("label",{children:["Phone number",Object(b.jsx)("input",{type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:j,required:!0})]}),Object(b.jsx)("button",{className:m.a.btn,type:"submit",children:"Add contact"})]})}var h=n(11),O=n.n(h),p=function(e){var t=e.filter,n=e.onChange;return Object(b.jsxs)("label",{className:O.a.find,children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:t,onChange:n})]})},x=n(7),C=n.n(x),_=function(e){var t=e.friends,n=e.onDeleteContacts;return Object(b.jsx)("ul",{className:C.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(b.jsxs)("li",{children:[a,": ",r,Object(b.jsx)("button",{className:C.a.btn,type:"button",onClick:function(){return n(t)},children:"Delete"})]},t)}))})},v=n(8),g=n.n(v),S=n(22);var w=n(12);function N(){var e=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(c))}),[e,c]),[c,i]}("contacts",w),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],l=i[1];return Object(b.jsxs)(d,{children:[Object(b.jsx)("h1",{className:g.a.title,children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:function(e,t){var a={id:Object(S.a)(),name:e,number:t};n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts")):r((function(e){return[a].concat(Object(o.a)(e))}))}}),Object(b.jsx)("h2",{className:g.a.subtitle,children:"Contacts"}),Object(b.jsx)(p,{onChange:function(e){l(e.currentTarget.value)},filter:u}),Object(b.jsx)(_,{friends:n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())})),onDeleteContacts:function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root")),k()}],[[20,1,2]]]);
//# sourceMappingURL=main.cd1f5809.chunk.js.map