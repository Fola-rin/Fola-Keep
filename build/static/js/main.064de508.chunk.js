(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{132:function(t,e,n){},134:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(28),a=n.n(i),o=n(29),r=n(27),s=n(7),j=(n(112),n(85),n(3)),l=function(){return Object(j.jsx)("nav",{children:Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("h2",{children:"Fola-Keep"})})})},d=function(){var t=(new Date).getFullYear();return Object(j.jsxs)("footer",{children:[Object(j.jsxs)("p",{children:["Made by Oyeleke Afolarin ",Object(j.jsx)("br",{})," "]}),Object(j.jsxs)("p",{children:["Copyright \u24d2 ",t]})]})},b=n(86),u=n.n(b),O=n(100),x=n.n(O),h=n(153),v=Object(c.createContext)(),p=function(t){return Object(j.jsxs)(h.a.div,{className:"note",layoutId:"card-div-".concat(t.id),initial:{opacity:1,transition:{duration:.15}},children:[Object(j.jsxs)(h.a.div,{layoutId:"card-content-parent-".concat(t.id),children:[Object(j.jsx)(h.a.div,{layoutId:"card-title-".concat(t.id),children:Object(j.jsx)("h1",{children:t.title})}),Object(j.jsx)(h.a.div,{layoutId:"card-content-".concat(t.id),children:Object(j.jsx)("p",{children:t.content})})]}),Object(j.jsxs)("div",{className:"noteIconDiv",children:[Object(j.jsx)("button",{onClick:function(e){t.onDelete(t.id)},id:t.id,children:Object(j.jsx)(u.a,{})}),Object(j.jsxs)("button",{children:[Object(j.jsx)(x.a,{}),Object(j.jsx)(r.b,{onClick:t.onClickNote,to:t.id.toString(),className:"card-open-link"})]})]})]})},f=function(){var t=Object(c.useContext)(v),e=t.notes,n=t.setNotes;function i(t){n((function(e){return e.reduce((function(e,n,c){return t!==c+1&&(console.log([c,n]),n.id=c>t-1?c:c+1,e.push(n)),e}),[])}))}return Object(j.jsx)("div",{children:e.map((function(t,e){return Object(j.jsx)(p,{id:e+1,title:t.title,content:t.content,onDelete:i},e)}))},"keyx")},m=n(49),y=n(42),g=n(78),C=n(101),N=n.n(C),k=n(154),I=n(156);var S=function(){var t=Object(c.useContext)(v),e=t.notes,n=t.setNotes,i=Object(c.useState)({title:"",content:""}),a=Object(o.a)(i,2),r=a[0],s=a[1],l=Object(c.useState)(!1),d=Object(o.a)(l,2),b=d[0],u=d[1],O=Object(c.useState)(!0),x=Object(o.a)(O,2),h=x[0],p=x[1];function f(t){var e=t.target,n=e.name,c=e.value;s((function(t){return Object(y.a)(Object(y.a)({},t),{},Object(m.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"create-note",children:[b&&Object(j.jsx)("input",{name:"title",onChange:f,value:r.title,placeholder:"Title"}),Object(j.jsx)("textarea",{onClick:function(){u(!0)},name:"content",onChange:f,value:r.content,placeholder:"Take a note...",rows:b?"3":"1"}),h?null:Object(j.jsx)("p",{style:{color:"red"},children:"Please input the empty field(s) before submitting"}),Object(j.jsx)(I.a,{in:b,children:Object(j.jsx)(k.a,{onClick:function(t){if(""===r.title||""===r.content)p(!1);else{var c=Object(y.a)({id:e.length+1},r);p(!0),i=c,n((function(t){return console.log(t),[].concat(Object(g.a)(t),[i])})),console.log(c),s({title:"",content:""})}var i;t.preventDefault()},children:Object(j.jsx)(N.a,{})})})]})})},w=(n(132),n(155)),D=n(102),F=n.n(D),J=function(t){var e=Object(c.useContext)(v),n=e.notes,i=e.setNotes,a=n.find((function(e){return e.id===t.id})),s=a.title,l=a.content,d=Object(c.useState)({title:s,content:l}),b=Object(o.a)(d,2),u=b[0],O=b[1];function x(t){var e=t.target,n=e.name,c=e.value;O((function(t){return Object(y.a)(Object(y.a)({},t),{},Object(m.a)({},n,c))}))}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.2,delay:.15},style:{pointerEvents:"auto"},className:"overlay"}),Object(j.jsxs)("div",{className:"editNoteContainer",children:[Object(j.jsx)(r.b,{to:"/"}),Object(j.jsxs)(h.a.div,{className:"note edit",layoutId:"card-div-".concat(t.id),exit:{opacity:1,transition:{duration:.15}},children:[Object(j.jsxs)(h.a.div,{layoutId:"card-content-parent-".concat(t.id),children:[Object(j.jsxs)(h.a.div,{layoutId:"card-title-".concat(t.id),children:[Object(j.jsx)("input",{name:"title",onChange:x,value:u.title})," "]}),Object(j.jsx)(h.a.div,{layoutId:"card-content-".concat(t.id),children:Object(j.jsx)("textarea",{name:"content",onChange:x,value:u.content,rows:"3"})})]}),Object(j.jsxs)("button",{children:[Object(j.jsx)(r.b,{to:"/",onClick:function(){var e=n.findIndex((function(e){return e.id===t.id})),c=Object(g.a)(n),a=Object(y.a)({},n[e]);a={id:e+1,title:u.title,content:u.content},c[e]=a,i(c)}}),Object(j.jsx)(F.a,{})]})]})]})]})},T=[{id:1,title:"How to use FolaKeep",content:"1. Tap the bin icon to delete \n2. Tap the pen icon to edit \n3. Once youre done editing click the \u2713 icon to save your changes"}];var E=function(){var t=localStorage.getItem("notes"),e=Object(c.useState)(t?JSON.parse(t):T),n=Object(o.a)(e,2),i=n[0],a=n[1];return Object(c.useEffect)((function(){localStorage.setItem("notes",JSON.stringify(i))}),[i]),Object(j.jsx)(v.Provider,{value:{notes:i,setNotes:a},children:Object(j.jsx)(w.a,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)(S,{}),Object(j.jsx)(s.a,{path:["/:id","/"],component:function(t){var e=t.match,n=e.params.id;console.log(e);var c=null;return n&&(c=i.find((function(t){return t.id==n}))),Object(j.jsxs)("div",{children:[Object(j.jsx)(f,{}),c&&Object(j.jsx)(J,{id:c.id})]})}})]}),Object(j.jsx)(d,{})]})})})};a.a.render(Object(j.jsx)(E,{}),document.querySelector("#root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.064de508.chunk.js.map