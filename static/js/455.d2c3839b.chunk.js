"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[455],{4455:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(3329),a=function(e){var n=e.contact,t=e.children;return(0,r.jsxs)("li",{id:n.id,children:[" ",n.name,"   ",n.number,t]})},u="Contacts_deluser__i-pfy",c=t(4420),i=t(2791),o=t(6590),s=t(3553),l=function(e){return e.contacts.contacts},m=function(e){return e.contacts.loading},d=function(e){return e.contacts.error},f=(0,s.P1)([l,function(e){return e.filter.filter}],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),h=function(){var e=(0,c.v9)(f),n=(0,c.v9)(m),t=(0,c.v9)(d),s=(0,c.I0)();(0,i.useEffect)((function(){s((0,o.m$)())}),[s]);var l=function(e){s((0,o.xX)(e.target.parentElement.id))};return(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsx)("h2",{children:"Loading..."}),t&&(0,r.jsx)("h2",{children:t}),(0,r.jsx)("ul",{children:e.map((function(e){return(0,r.jsx)(a,{contact:e,children:(0,r.jsx)("button",{className:u,onClick:l,type:"button",children:"Delete"})},e.id)}))})]})},x=t(6794),j=function(){var e=(0,c.I0)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"Find contacts by name"}),(0,r.jsx)("input",{onChange:function(n){e((0,x.U)(n.target.value))},type:"text",name:"filter"})]})},p=t(9439),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")},g="FormUser_formuser__gZ1vS",b=function(){var e=(0,c.v9)(l),n=(0,i.useState)(""),t=(0,p.Z)(n,2),a=t[0],u=t[1],s=(0,i.useState)(""),m=(0,p.Z)(s,2),d=m[0],f=m[1],h=(0,c.I0)(),x=function(e){var n=e.target,t=n.name,r=n.value;"name"===t?u(r):f(r)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t,r={id:v(),name:a,number:d};t=r,e.find((function(e){return e.name.toLowerCase()===t.name.toLowerCase()}))?alert(t.name+" is already in contacts"):h((0,o.je)(t)),n.target.elements.name.value="",n.target.elements.number.value=""},className:g,children:[(0,r.jsx)("label",{htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{onChange:x,type:"text",name:"name",required:!0}),(0,r.jsx)("label",{htmlFor:"number",children:"Number"}),(0,r.jsx)("input",{onChange:x,type:"tel",name:"number",required:!0}),(0,r.jsx)("button",{type:"submit",children:"Add contact"})]})})},C=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{}),(0,r.jsx)(j,{}),(0,r.jsx)(h,{})]})}}}]);
//# sourceMappingURL=455.d2c3839b.chunk.js.map