"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{644:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(9601),r="ContactList_item__EZYHO",s="ContactList_button__7kL4l",c=a(9434),o=a(2286),l=a(2791),i=a(8547),u=a(3329),m=function(){var e=(0,c.v9)(o.PT),t=(0,c.I0)();(0,l.useEffect)((function(){t((0,i.yF)())}),[t]);var a=function(e){t((0,i.GK)(e.target.dataset.id))};return(0,u.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e){var t=e.id,n=e.name,c=e.number;return(0,u.jsxs)("li",{className:r,children:[(0,u.jsx)("button",{className:s,onClick:a,type:"button","data-id":t,children:"Delete"}),(0,u.jsx)("p",{children:"".concat(n,": ").concat(c)})]},t)}))})},d=a(5496),h="Filter_input__N7T3z",_=function(){var e=(0,c.v9)(o.e1),t=(0,c.I0)();return(0,u.jsx)("label",{children:(0,u.jsx)("input",{className:h,type:"text",name:"filter",value:e,placeholder:"Find contacts by name",onChange:function(e){t((0,d.C)(e.currentTarget.value))}})})},p="ContactsPage_box__hZjJ3",f="ContactsPage_primeryTitle__xjAYf",b="ContactsPage_secondaryTitle__b7mK0",x=a(9439),j="ContactForm_form__dhl+T",v="ContactForm_input__Bl93P",C="ContactForm_button__eSwX9",N=a(8174),y=function(){var e=(0,c.v9)(o.Af),t=(0,c.I0)(),a=(0,l.useState)(""),n=(0,x.Z)(a,2),r=n[0],s=n[1],m=(0,l.useState)(""),d=(0,x.Z)(m,2),h=d[0],_=d[1],p=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":s(n);break;case"number":_(n);break;default:return}},f=function(){s(""),_("")};return(0,u.jsxs)("form",{className:j,onSubmit:function(a){a.preventDefault(),function(a,n){null!==e&&void 0!==e&&e.find((function(e){return e.name===a}))?N.Am.error("".concat(a," is already in contacts")):t((0,i.el)({name:a,number:n}))}(r,h),N.Am.success("".concat(r," added to contacts.")),f()},children:[(0,u.jsx)("label",{title:"Name",htmlFor:"name"}),(0,u.jsx)("input",{className:v,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:p,value:r,required:!0}),(0,u.jsx)("label",{htmlFor:"number"}),(0,u.jsx)("input",{className:v,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:p,value:h,required:!0}),(0,u.jsx)("button",{className:C,type:"submit",children:"Add contact"})]})};function g(){return(0,u.jsx)(n.x,{children:(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("h1",{className:f,children:"Phonebook"}),(0,u.jsx)(y,{}),(0,u.jsx)("h2",{className:b,children:"Contacts"}),(0,u.jsx)(_,{}),(0,u.jsx)(m,{})]})})}}}]);
//# sourceMappingURL=644.229fd862.chunk.js.map