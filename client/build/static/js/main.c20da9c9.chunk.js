(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,t,a){e.exports={containerCompleto:"Details_containerCompleto__2M3ra",spanBo:"Details_spanBo__1uJcN",buttonVolver:"Details_buttonVolver__3t2jL",volverSpan:"Details_volverSpan__ds4iK",bodyDetail:"Details_bodyDetail__2Yuq8",containerDetail:"Details_containerDetail__3Y7ni",backgroundDetail:"Details_backgroundDetail__3ZOcm",imageDetail:"Details_imageDetail__DErT2",contentDetail:"Details_contentDetail__S0Ycf",pokemonNameDetail:"Details_pokemonNameDetail__1AN32",pokemonType:"Details_pokemonType__1SQCY",pokemonStats:"Details_pokemonStats__3LgNx","scale-up-hor-left":"Details_scale-up-hor-left__3_dWD",containerLoading:"Details_containerLoading__25MHP"}},19:function(e,t,a){e.exports={cardContainer:"CardsContainer_cardContainer__25UDD",nameCard:"CardsContainer_nameCard__yUUYR",cardInfo:"CardsContainer_cardInfo__CryMu"}},24:function(e,t,a){e.exports={navContainer:"NavBar_navContainer__1sHq6",navLinkCont:"NavBar_navLinkCont__D_Z9V",linkContainer:"NavBar_linkContainer__w81jD",linkHome:"NavBar_linkHome__1bZaV",linkCrear:"NavBar_linkCrear__31lks"}},34:function(e,t,a){e.exports={containerSB:"SearchBar_containerSB__3D4XN",inputSB:"SearchBar_inputSB__1Ge68",buttonSB:"SearchBar_buttonSB__2ugsO"}},38:function(e,t,a){e.exports={pagination:"Paginado_pagination__Gc59y",buttonP:"Paginado_buttonP__2VAr6"}},40:function(e,t,a){e.exports={containerLanding:"Landing_containerLanding__1NMvq",pokeballButton:"Landing_pokeballButton__1ep3l"}},49:function(e,t,a){},50:function(e,t,a){},6:function(e,t,a){e.exports={containerF:"Form_containerF__1xB2W",formContainer:"Form_formContainer__uRfHA",formTitle:"Form_formTitle__1w1_P",inputContainer:"Form_inputContainer__3WadR",form:"Form_form__2SX7_",selectType:"Form_selectType__24bKh",spanError:"Form_spanError__3lGSx",buttonCrear:"Form_buttonCrear__2I-SA",buttonVolver:"Form_buttonVolver__f1YNI",go:"Form_go__12BnY"}},64:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(29),r=a.n(c),o=(a(49),a(50),a(7)),s=a(14),i=a(19),l=a.n(i),d=a(0),p=function(e){var t=e.image,a=e.name,n=e.types,c=e.attack,r=e.hp,o=e.id;return Object(d.jsxs)("div",{className:l.a.cardContainer,children:[Object(d.jsxs)("div",{className:l.a.cardTitle,children:[Object(d.jsx)("h2",{className:l.a.nameCard,children:a}),Object(d.jsxs)("h5",{className:l.a.hp,children:["Hp:",r]}),Object(d.jsxs)("h5",{className:l.a.hp,children:["Attack: ",c]})]}),Object(d.jsxs)("div",{className:l.a.cardInfo,children:[Object(d.jsx)("img",{src:t,alt:a}),Object(d.jsx)("div",{className:l.a.cardInfo,children:n.map((function(e,t){return Object(d.jsx)("p",{children:e},t)}))})]})]},o)},j=a(9),u=a(12),b=a(17),m=a(23),h=a(65),O="GET_POKEMONS",v="FILTER_CREATED",x="ORDER_BY_NAME",_="GET_NAME_POKEMONS",f="GET_TYPES",g="GET_DETAIL",y="ORDER_BY_ATTACK",k="ORDER_BY_HP",N="FILTER_BY_TYPE",C=function(){return function(){var e=Object(m.a)(Object(b.a)().mark((function e(t){var a,n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/pokemons");case 2:a=e.sent,n=a.data,t({type:O,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},D=function(){return function(){var e=Object(m.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/types",{});case 2:return a=e.sent,e.abrupt("return",t({type:f,payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},E=a(38),S=a.n(E);function B(e){for(var t=e.pokemonsPerPage,a=e.pokemons,n=e.paginado,c=[],r=0;r<=Math.ceil(a/t);r++)c.push(r+1);return Object(d.jsx)("nav",{children:Object(d.jsx)("ul",{className:S.a.pagination,children:c&&c.map((function(e){return Object(d.jsx)("li",{style:{listStyle:"none"},children:Object(d.jsx)("button",{className:S.a.buttonP,onClick:function(){return n(e)},children:e})},e)}))})})}var T=a(8),A=a.n(T),w=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.pokemons})),a=Object(n.useState)(""),c=Object(s.a)(a,2),r=(c[0],c[1]),o=Object(u.c)((function(e){return e.types})),i=Object(n.useState)(1),l=Object(s.a)(i,2),b=l[0],m=l[1],h=Object(n.useState)(12),O=Object(s.a)(h,2),_=O[0],f=(O[1],b*_),g=f-_,E=t.slice(g,f);Object(n.useEffect)((function(){e(C()),e(D())}),[e]);var S=function(t){var a;e((a=t.target.value,console.log(a),{type:v,payload:a})),m(1)},T=function(t){var a;t.preventDefault(),"Tipos"!==t.target.value&&e((a=t.target.value,{type:N,payload:a})),m(1)},w=function(t){var a;t.preventDefault(),e((a=t.target.value,{type:x,payload:a})),m(1),r("Ordenado ".concat(t.target.value))},F=function(t){var a;t.preventDefault(),"attack"!==t.target.value&&e((a=t.target.value,{type:y,payload:a})),m(1),r("Ordenado ".concat(t.target.value))},P=function(t){var a;t.preventDefault(),"jp"!==t.target.value&&e((a=t.target.value,{type:k,payload:a})),m(1),r("Ordenado ".concat(t.target.value))};return Object(d.jsxs)("div",{className:A.a.homeContainer,children:[Object(d.jsx)("div",{className:A.a.containerButton,children:Object(d.jsxs)("button",{className:A.a.recargar,onClick:function(t){!function(t){t.preventDefault(),e(C())}(t)},children:[Object(d.jsx)("span",{className:A.a.reloadIcon,children:"\u27f3"})," Recargar Pok\xe9mon"]})}),Object(d.jsxs)("div",{className:A.a.filtersContainer,children:[Object(d.jsxs)("select",{className:A.a.filterSelect,onChange:function(e){return w(e)},children:[Object(d.jsx)("option",{value:"asc",children:"A-Z"}),Object(d.jsx)("option",{value:"desc",children:"Z-A"})]}),Object(d.jsxs)("select",{className:A.a.filterSelect,onChange:function(e){return S(e)},children:[Object(d.jsx)("option",{value:"All",children:"Todos"}),Object(d.jsx)("option",{value:"created",children:"Creados"}),Object(d.jsx)("option",{value:"api",children:"Api"})]}),Object(d.jsxs)("select",{className:A.a.filterSelect,onChange:function(e){return T(e)},children:[Object(d.jsx)("option",{children:"Tipos"}),Object(d.jsx)("option",{value:"All",children:"Todos"}),null===o||void 0===o?void 0:o.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(d.jsxs)("select",{className:A.a.filterSelect,onChange:function(e){return F(e)},children:[Object(d.jsx)("option",{value:"attack",children:"Ataque"}),Object(d.jsx)("option",{value:"min",children:"min"}),Object(d.jsx)("option",{value:"max",children:"max"})]}),Object(d.jsxs)("select",{className:A.a.filterSelect,onChange:function(e){return P(e)},children:[Object(d.jsx)("option",{value:"hp",children:"Hp"}),Object(d.jsx)("option",{value:"min",children:"min"}),Object(d.jsx)("option",{value:"max",children:"max"})]})]}),Object(d.jsx)("div",{className:"".concat(A.a.CardsContainer," ").concat(A.a.cardRow),children:null===E||void 0===E?void 0:E.map((function(e,t){return Object(d.jsx)(j.b,{to:"/detail/".concat(e.id),className:A.a.cardLink,children:Object(d.jsx)(p,{name:e.name,hp:e.hp,attack:e.attack,image:e.image,id:e.id,types:e.types},t)},t)}))}),Object(d.jsx)("div",{className:A.a.paginadoContainer,children:Object(d.jsx)(B,{className:A.a.paginado,pokemonsPerPage:_,pokemons:t.length,paginado:function(e){m(e)}})})]})},F=a(40),P=a.n(F),H=a.p+"static/media/pokeballLogo.7fbaba7e.png",L=function(){return Object(d.jsx)("div",{className:P.a.containerLanding,children:Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:P.a.pokeballButton,children:Object(d.jsx)(j.b,{to:"/home",children:Object(d.jsx)("img",{src:H,alt:"Pokebola"})})})})})},R=a(10),I=a.n(R),Y=function(){var e,t,a,c,r,s,i,l,p,O,v,x,_,f,y,k=Object(o.f)().id,N=Object(u.b)();Object(n.useEffect)((function(){return N(function(e){return function(){var t=Object(m.a)(Object(b.a)().mark((function t(a){var n;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/pokemons/".concat(e));case 3:return n=t.sent,t.abrupt("return",a({type:g,payload:n.data}));case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(k)),function(){N({type:"GET_DETAIL",payload:{}})}}),[N,k]);var C=Object(u.c)((function(e){return e.detail}));console.log(C);var D={fire:"#F57D31",normal:"#AAA67F",fighting:"#D3425F",flying:"#A891EC",ground:"#DEC16B",poison:"#A43E9E",rock:"#B69E31",bug:"#A7B723",ghost:"#70559B",steel:"#5695A3",water:"#6493EB",grass:"#74CB48",electric:"#F9CF30",psychic:"#FB5584",ice:"#9AD6DF",dragon:"#7037FF",dark:"#75574C",fairy:"#E69EAC",unknown:"#BF5481",shadow:"#36045E"};return C?Object(d.jsxs)("div",{className:I.a.containerCompleto,children:[Object(d.jsx)(j.b,{className:I.a.spanBo,to:"/home",children:Object(d.jsx)("button",{className:I.a.buttonVolver,children:Object(d.jsx)("span",{className:I.a.volverSpan,children:"Volver"})})}),C.length>0?Object(d.jsx)("div",{className:I.a.bodyDetail,children:Object(d.jsxs)("div",{className:I.a.conteinerDetail,style:{backgroundColor:D[null===(e=C[0])||void 0===e?void 0:e.types[0]]},children:[Object(d.jsx)("div",{className:I.a.backgroundDetail,children:Object(d.jsx)("img",{className:I.a.imageDetail,src:C[0].image,alt:C[0].name})}),Object(d.jsxs)("div",{className:I.a.contentDetail,children:[Object(d.jsx)("h1",{className:I.a.pokemonNameDetail,children:C[0].name}),Object(d.jsxs)("h3",{className:I.a.pokemonType,style:{backgroundColor:D[null===(t=C[0])||void 0===t?void 0:t.types[0]]},children:[Object(d.jsx)("p",{children:"TYPE: "}),null===(a=C[0])||void 0===a?void 0:a.types.join(" ")]}),Object(d.jsxs)("div",{className:I.a.pokemonStats,children:[Object(d.jsxs)("p",{style:{backgroundColor:D[null===(c=C[0])||void 0===c?void 0:c.types[0]]},children:[Object(d.jsx)("span",{children:"HP: "})," ",null===(r=C[0])||void 0===r?void 0:r.hp]}),Object(d.jsxs)("p",{style:{backgroundColor:D[null===(s=C[0])||void 0===s?void 0:s.types[0]]},children:[Object(d.jsx)("span",{children:"ATTACK: "}),null===(i=C[0])||void 0===i?void 0:i.attack]}),Object(d.jsxs)("p",{style:{backgroundColor:D[null===(l=C[0])||void 0===l?void 0:l.types[0]]},children:[Object(d.jsx)("span",{children:"DEFENSE: "}),null===(p=C[0])||void 0===p?void 0:p.defense]}),Object(d.jsxs)("p",{style:{backgroundColor:D[null===(O=C[0])||void 0===O?void 0:O.types[0]]},children:[Object(d.jsx)("span",{children:"SPEED: "}),null===(v=C[0])||void 0===v?void 0:v.speed]}),Object(d.jsxs)("p",{style:{backgroundColor:D[null===(x=C[0])||void 0===x?void 0:x.types[0]]},children:[Object(d.jsx)("span",{style:{color:"black"},children:"HEIGHT: "}),null===(_=C[0])||void 0===_?void 0:_.height]}),Object(d.jsxs)("p",{style:{backgroundColor:D[null===(f=C[0])||void 0===f?void 0:f.types[0]]},children:[Object(d.jsx)("span",{children:"WEIGHT: "}),null===(y=C[0])||void 0===y?void 0:y.weight]})]})]})]})}):Object(d.jsx)("div",{className:I.a.containerLoading,children:Object(d.jsx)("p",{className:I.a.loading,children:"...Loading"})})]}):Object(d.jsx)("p",{children:"Loading..."})},U=a(22),V=a(21),G=a(4),M=function(e){var t={};return e.name?e.name.length>10?t.name="No puede tener m\xe1s de 10 caracteres":/^[a-zA-Z]+$/.test(e.name)||(t.name="Solo puede contener letras"):t.name="Debe ingresar un nombre",(!e.hp||e.hp<=0||e.hp>255)&&(t.hp="Debe ser mayor a 0 y menor a 255"),(!e.attack||e.attack<=0||e.attack>255)&&(t.attack="Debe ser mayor a 0 y menor a 255"),(!e.defense||e.defense<=0||e.defense>255)&&(t.defense="Debe ser mayor a 0 y menor a 255"),(!e.speed||e.speed<=0||e.speed>255)&&(t.speed="Debe ser mayor a 0 y menor a 255"),(!e.height||e.height<=0||e.height>255)&&(t.height="Debe ser mayor a 0 y menor a 255"),(!e.weight||e.weight<=0||e.weight>255)&&(t.weight="Debe ser mayor a 0 y menor a 255"),e.types.length<1&&(t.types="Debes elegir al menos 2 tipos"),t},q=a(6),K=a.n(q),Z=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.types})),a=Object(n.useState)({name:"",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-56YdThnTlX2LJ4ixqaLzbfPFOPTzkE1H4Q&usqp=CAU",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",types:[]}),c=Object(s.a)(a,2),r=c[0],o=c[1];Object(n.useEffect)((function(){e(D())}),[e]);var i=Object(n.useState)({}),l=Object(s.a)(i,2),p=l[0],O=l[1],v=function(e){var t=e.target.name,a=e.target.value,n=M(Object(G.a)(Object(G.a)({},r),{},Object(V.a)({},t,a)));O(Object(G.a)(Object(G.a)({},p),{},Object(V.a)({},t,n[t]))),o(Object(G.a)(Object(G.a)({},r),{},Object(V.a)({},t,a)))},x=function(t){var a;t.preventDefault(),e((a=r,function(){var e=Object(m.a)(Object(b.a)().mark((function e(t){var n;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.post("/pokemons/",a);case 3:return n=e.sent,alert("El pokemon fue creado correctamente"),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),alert(e.t0.response.data.error);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),o({name:"",image:"",hp:"",attack:"",defense:"",speed:"",height:"",weight:"",types:[]})};return Object(d.jsxs)("div",{className:K.a.containerF,children:[Object(d.jsx)("div",{className:K.a.formContainer,children:Object(d.jsxs)("form",{onSubmit:function(e){return x(e)},children:[Object(d.jsx)("h3",{className:K.a.formTitle,children:"CREA UN POKEMON!"}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"text",value:r.name,placeholder:"Name",name:"name",onChange:v}),Object(d.jsx)("div",{children:p.name&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.name})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"text",value:r.image,placeholder:"Image",name:"image",onChange:v}),Object(d.jsx)("div",{children:p.image&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.image})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"number",value:r.hp,placeholder:"Hp",name:"hp",onChange:v}),Object(d.jsx)("div",{children:p.hp&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.hp})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"number",value:r.attack,placeholder:"Attack",name:"attack",onChange:v}),Object(d.jsx)("div",{children:p.attack&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.attack})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"number",value:r.defense,placeholder:"Defense",name:"defense",onChange:v}),Object(d.jsx)("div",{children:p.defense&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.defense})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"number",value:r.speed,placeholder:"Speed",name:"speed",onChange:v}),Object(d.jsx)("div",{children:p.speed&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.speed})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"number",value:r.height,placeholder:"Height",name:"height",onChange:v}),Object(d.jsx)("div",{children:p.height&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.height})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("input",{type:"number",value:r.weight,placeholder:"Weight",name:"weight",onChange:v}),Object(d.jsx)("div",{children:p.weight&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.weight})})]}),Object(d.jsxs)("div",{className:K.a.inputContainer,children:[Object(d.jsx)("label",{className:K.a.typeS,children:"Type: "}),Object(d.jsx)("select",{onChange:function(e){return function(e){e.preventDefault(),o(Object(G.a)(Object(G.a)({},r),{},{types:[].concat(Object(U.a)(r.types),[e.target.value])})),O(M(Object(G.a)(Object(G.a)({},r),{},Object(V.a)({},e.target.name,e.target.value))))}(e)},className:K.a.selectType,children:t.map((function(e,t){return Object(d.jsx)("option",{value:e.name,children:e.name},t)}))}),Object(d.jsx)("div",{children:p.types&&"string"===typeof p.types&&Object(d.jsx)("span",{className:K.a.spanError,style:{color:"#e74c3c"},children:p.types})})]}),Object(d.jsx)("div",{className:K.a.crearP,children:Object(d.jsx)("button",{type:"submit",name:"submit",className:K.a.buttonCrear,children:Object(d.jsx)("p",{className:K.a.go,children:"CREAR!"})})})]})}),Object(d.jsx)(j.b,{to:"/home",children:Object(d.jsx)("button",{className:K.a.buttonVolver,children:"Volver"})})]})},W=a(24),z=a.n(W),X=a(34),J=a.n(X),Q=function(){var e=Object(u.b)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],r=a[1],o=function(t){t.preventDefault(),e(function(e){return function(){var t=Object(m.a)(Object(b.a)().mark((function t(a){var n;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get("/pokemons?name=".concat(e));case 3:return n=t.sent,t.abrupt("return",a({type:_,payload:n.data}));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",a({type:_,payload:{error:t.t0}}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(c))};return Object(d.jsxs)("div",{className:J.a.containerSB,children:[Object(d.jsx)("input",{type:"text",placeholder:"Busca tu Pokemon...",onChange:function(e){return function(e){e.preventDefault(),r(e.target.value)}(e)},className:J.a.inputSB}),Object(d.jsx)("button",{type:"submit",onClick:function(e){return o(e)},className:J.a.buttonSB,children:"Buscar"})]})},$=function(){return Object(d.jsxs)("div",{className:z.a.navContainer,children:[Object(d.jsx)("div",{className:z.a.navImgCont,children:Object(d.jsx)("img",{src:"",alt:""})}),Object(d.jsxs)("div",{className:z.a.linkContainer,children:[Object(d.jsx)(j.b,{className:z.a.linkHome,to:"/home",children:"HOME"}),Object(d.jsx)(j.b,{className:z.a.linkCrear,to:"/create",children:"CREATE"})]}),Object(d.jsx)(Q,{})]})};h.a.defaults.baseURL="http://localhost:3001";var ee=function(){var e=Object(o.e)();return Object(d.jsxs)("div",{className:"App",children:["/"!==e.pathname&&Object(d.jsx)($,{}),Object(d.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(d.jsx)(o.a,{exact:!0,path:"/home",component:w}),Object(d.jsx)(o.a,{path:"/detail/:id",component:Y}),Object(d.jsx)(o.a,{exact:!0,path:"/create",component:Z})]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))},ae=a(35),ne=a(43),ce={pokemons:[],pokemonsBackUp:[],types:[],detail:{}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(G.a)(Object(G.a)({},e),{},{pokemons:t.payload,pokemonsBackUp:t.payload});case v:var a=Object(U.a)(e.pokemons);return a="created"===t.payload?e.pokemonsBackUp.filter((function(e){return isNaN(e.id)})):"api"===t.payload?e.pokemonsBackUp.filter((function(e){return!isNaN(e.id)})):e.pokemonsBackUp,console.log("filtrao",a),Object(G.a)(Object(G.a)({},e),{},{pokemons:a});case N:var n;return n="All"===t.payload?e.pokemons:e.pokemonsBackUp.filter((function(e){return e.types.includes(t.payload)})),Object(G.a)(Object(G.a)({},e),{},{pokemons:n});case x:var c="asc"===t.payload?e.pokemons.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})):e.pokemons.sort((function(e,t){return e.name>t.name?-1:t.name>e.name?1:0}));return Object(G.a)(Object(G.a)({},e),{},{pokemons:c});case y:var r=Object(U.a)(e.pokemons);return"min"===t.payload&&r.sort((function(e,t){return e.attack-t.attack})),"max"===t.payload&&r.sort((function(e,t){return t.attack-e.attack})),Object(G.a)(Object(G.a)({},e),{},{pokemons:r});case k:var o=Object(U.a)(e.pokemons);return"min"===t.payload&&o.sort((function(e,t){return e.hp-t.hp})),"max"===t.payload&&o.sort((function(e,t){return t.hp-e.hp})),Object(G.a)(Object(G.a)({},e),{},{pokemons:o});case _:return t.payload.error?Object(G.a)(Object(G.a)({},e),{},{pokemons:[],notFound:!0}):Object(G.a)(Object(G.a)({},e),{},{pokemons:t.payload,notFound:!1});case f:return Object(G.a)(Object(G.a)({},e),{},{types:t.payload});case g:return Object(G.a)(Object(G.a)({},e),{},{detail:t.payload});default:return Object(G.a)({},e)}},oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ae.b,se=Object(ae.c)(re,oe(Object(ae.a)(ne.a)));r.a.render(Object(d.jsx)(u.a,{store:se,children:Object(d.jsx)(j.a,{children:Object(d.jsx)(ee,{})})}),document.getElementById("root")),te()},8:function(e,t,a){e.exports={homeContainer:"Home_homeContainer__3VkLz",containerButton:"Home_containerButton__a2fjs",filtersContainer:"Home_filtersContainer__1sZaz",filterSelect:"Home_filterSelect__5lht0",recargar:"Home_recargar__TD1qG",reloadIcon:"Home_reloadIcon__rRRw-",cardsContainer:"Home_cardsContainer__YxePg",cardLink:"Home_cardLink__SdTKU",cardRow:"Home_cardRow__21OSa",paginadoContainer:"Home_paginadoContainer__3HC3v",paginado:"Home_paginado__U2aWp"}}},[[64,1,2]]]);
//# sourceMappingURL=main.c20da9c9.chunk.js.map