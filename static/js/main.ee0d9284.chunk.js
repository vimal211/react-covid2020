(this["webpackJsonpreact-covid"]=this["webpackJsonpreact-covid"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(6),d=c.n(n),s=(c(22),c(23),c(3)),i=c(17),j=c.n(i),o=c(1),l=Object(r.createContext)(),h=function(e){var t=Object(r.useState)([5,5]),c=Object(s.a)(t,2),a=c[0],n=c[1],d=Object(r.useState)([]),i=Object(s.a)(d,2),h=i[0],u=i[1];return Object(r.useEffect)((function(){j.a.get("https://data.covid19india.org/v4/min/data.min.json").then((function(e){var t=[],c=["Andaman and Nicobar Islands","Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chattisgarh","Delhi","Dadra and Nagar Haveli","Goa","Gujarat","Himachal Pradesh","Haryana","Jharkhand","Jammu and Kashmir","Karnataka","Kerala","Ladakh","Lakshadweep Islands","Maharashtra","Meghalaya","Manipur","Madhya Pradesh","Mizoram","Nagaland","Odisha","Punjab","Pondicherry","Rajasthan","Sikkim","Telangana","Tamil Nadu","Tripura","Other Territory","Uttar Pradesh","Uttarakhand","West Bengal"];["AN","AP","AR","AS","BR","CH","CT","DL","DN","GA","GJ","HP","HR","JH","JK","KA","KL","LA","LD","MH","ML","MN","MP","MZ","NL","OR","PB","PY","RJ","SK","TG","TN","TR","TT","UP","UT","WB"].forEach((function(r,a){var n={name:c[a],confirmed:e.data[r].total.confirmed,deceased:e.data[r].total.deceased,recovered:e.data[r].total.recovered,tested:e.data[r].total.tested};t.push(n)})),n(t)})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)(l.Provider,{value:[a,n,h,u],children:e.children})};c(43);var u=function(){var e=new Date,t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=Object(r.useContext)(l),a=Object(s.a)(c,1)[0].map((function(e){return e.tested})).reduce((function(e,t){return e+t})).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return Object(o.jsxs)("div",{className:"overall",children:[Object(o.jsxs)("div",{className:"left",children:[Object(o.jsx)("h3",{children:"India"}),Object(o.jsxs)("p",{children:["Last updated on ",e.getDate()," ",t[e.getMonth()],","," ",e.getFullYear()]})]}),Object(o.jsxs)("div",{className:"right",children:[Object(o.jsx)("p",{children:"Tested"}),Object(o.jsx)("h3",{children:a}),Object(o.jsxs)("p",{children:["As of ",t[e.getMonth()]," ",e.getDate(),", ",e.getFullYear()]}),Object(o.jsx)("p",{children:"per source"})]})]})},b=(c(44),c(8));c(45);var O=function(){var e=Object(r.useContext)(l),t=Object(s.a)(e,4),c=t[0],a=(t[1],t[2],t[3]),n=c.map((function(e){return e.confirmed})).reduce((function(e,t){return e+t})),d=c.map((function(e){return e.recovered})).reduce((function(e,t){return e+t})),i=c.map((function(e){return e.deceased})).reduce((function(e,t){return e+t})),j=n-(i+d);return Object(o.jsxs)("div",{children:[Object(o.jsx)(b.a,{theme:"colored"}),Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("p",{children:"Search your state"}),Object(o.jsx)("input",{onChange:function(e){var t=e.target.value,r=[];""===t?a(c):(r=c.filter((function(e){if(e.name.toLowerCase().includes(t.toLowerCase()))return e})),console.log(r),0===r.length&&b.b.error("No state found"),a(r))},type:"text",className:"fas",placeholder:"Search"}),Object(o.jsxs)("div",{className:"conatiners",children:[Object(o.jsxs)("div",{className:"confirmed",children:[Object(o.jsx)("p",{children:"Confirmed"}),Object(o.jsx)("h1",{children:n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(o.jsxs)("div",{className:"active",children:[Object(o.jsx)("p",{children:"Active"}),Object(o.jsx)("h1",{children:j.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(o.jsxs)("div",{className:"recovered",children:[Object(o.jsx)("p",{children:"Recovered"}),Object(o.jsx)("h1",{children:d.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(o.jsxs)("div",{className:"deceased",children:[Object(o.jsx)("p",{children:"Deceased"}),Object(o.jsx)("h1",{children:i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})]})]})]})};c(46);var x=function(){var e=Object(r.useContext)(l),t=Object(s.a)(e,4),c=t[0],a=(t[1],t[2]),n=(t[3],function(e){return e.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.confirmed?e.confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""}),Object(o.jsxs)("td",{children:[" ",(e.confirmed-(e.recovered+e.deceased)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")]}),Object(o.jsx)("td",{children:e.confirmed?e.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""}),Object(o.jsx)("td",{children:e.confirmed?e.deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""}),Object(o.jsx)("td",{children:e.confirmed?e.tested.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):""})]})}))});return Object(o.jsx)("div",{className:"state",children:Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"State"}),Object(o.jsx)("th",{children:"Confirmed"}),Object(o.jsx)("th",{children:"Active"}),Object(o.jsx)("th",{children:"Recovered"}),Object(o.jsx)("th",{children:"Decesed"}),Object(o.jsx)("th",{children:"Tested"})]}),a.length>0?n(a):n(c)]})})};c(47);var f=function(){return Object(o.jsxs)("div",{className:"Home",children:[Object(o.jsx)(u,{}),Object(o.jsx)(O,{}),Object(o.jsx)(x,{})]})};var m=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(f,{})})};d.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(h,{children:Object(o.jsx)(m,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.ee0d9284.chunk.js.map