(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(11),n=a.n(s),r=a(6),i=a(2),o=a(3),c=a(5),l=a(4),d=a(10),u=a(1),m=a.n(u),p=a(8),h=a.n(p),b=(a(16),a(17),a(0)),j=function(e){var t=e.user;return t&&Object(b.jsxs)("div",{className:"user",children:[Object(b.jsx)("span",{className:"user__name",children:"".concat(t.name,". ")}),Object(b.jsx)("span",{className:"user__email",children:"Email: ".concat(t.email)})]})},f=(a(19),function(e){var t=e.todo;return Object(b.jsxs)("div",{className:"todo-item",children:[Object(b.jsx)(j,{user:t.user}),Object(b.jsx)("p",{className:"todo-item__title",children:"Todo: ".concat(t.title)}),t.completed?Object(b.jsx)("span",{className:"todo-item__status-completed",children:"Completed"}):Object(b.jsx)("span",{className:"todo-item__status-notcompleted",children:"Need to do"})]})}),g=(a(20),function(e){var t=e.todos;return Object(b.jsx)("ul",{className:"todo__list",children:t.map((function(e){return Object(b.jsx)("li",{className:"todo__item",children:Object(b.jsx)(f,{todo:e})},e.id)}))})}),y=a(9),O=a.n(y),v=(a(21),function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={inputTitle:"",selectUserId:0,hasInputError:!1,hasSelectError:!1},e.inputTitle=function(t){var a=t.target.value;e.setState({inputTitle:a.replaceAll(/[^\w\d \u0430-\u044f\u0451\u044a\u044c]/gi,""),hasInputError:!1})},e.selectUser=function(t){var a=t.currentTarget.value;e.setState({selectUserId:Number(a),hasSelectError:!1})},e.validation=function(t,a){return!(0===t||!a)||(e.setState({hasInputError:!a,hasSelectError:!t}),!1)},e.resetInputs=function(){e.setState({inputTitle:"",selectUserId:0,hasInputError:!1,hasSelectError:!1})},e.formSubmit=function(t){t.preventDefault();var a=e.props,s=a.users,n=a.addTodo,r=a.lastId,i=e.state,o=i.selectUserId,c=i.inputTitle;e.validation(o,c)&&(n({userId:o,id:r,title:c,completed:!1,user:s.find((function(e){return e.id===o}))||null}),e.resetInputs())},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.users,t=this.state,a=t.hasInputError,s=t.hasSelectError,n=t.inputTitle,r=t.selectUserId;return Object(b.jsxs)("form",{onSubmit:this.formSubmit,className:"form",children:[Object(b.jsx)("h1",{className:"form__title",children:"Create new TODO"}),Object(b.jsxs)("label",{htmlFor:"title",children:[Object(b.jsx)("span",{className:"form__input-title",children:"Title:"}),Object(b.jsx)("input",{className:O()("form__input",{"form__input--error":a}),type:"text",name:"inputTitle",placeholder:"Todo",id:"title",value:n,onChange:this.inputTitle})]}),a&&Object(b.jsx)("span",{className:"form__error-text",children:"Please enter the title"}),Object(b.jsxs)("label",{htmlFor:"select",children:[Object(b.jsx)("span",{className:"form__input-title",children:"User:"}),Object(b.jsxs)("select",{className:O()("form__select",{"form__select--error":s}),name:"selectUser",id:"select",value:r,onChange:this.selectUser,children:[Object(b.jsx)("option",{value:"0",children:"Choose User"}),e.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),s&&Object(b.jsx)("span",{className:"form__error-text",children:"Please choose a user"}),Object(b.jsx)("button",{type:"submit",className:"form__button",children:"Add"})]})]})}}]),a}(m.a.Component)),x=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],_=[{userId:1,id:"1",title:"delectus aut autem",completed:!1},{userId:1,id:"2",title:"quis ut nam facilis et officia qui",completed:!1}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{user:x.find((function(t){return t.id===e.userId}))||null})})),S=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={preparedTodos:Object(r.a)(_),users:Object(r.a)(x),lastIdTodo:h()()},e.addTodo=function(t){e.setState((function(e){return{preparedTodos:[].concat(Object(r.a)(e.preparedTodos),[t]),lastIdTodo:h()()}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.preparedTodos,a=e.users,s=e.lastIdTodo;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(v,{addTodo:this.addTodo,users:a,lastId:s}),Object(b.jsx)(g,{todos:t})]})}}]),a}(m.a.Component),w=S;n.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4c82f49f.chunk.js.map