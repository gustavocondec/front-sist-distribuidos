(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"3ae4":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-layout",[r("q-page-container",[r("q-page",{staticClass:"page-register",attrs:{padding:""}},[r("q-card",{staticClass:"page-register__form"},[r("q-card-section",[r("h1",{staticClass:"text-h4 no-margin text-center"},[e._v("Registrar Usuario")])]),r("q-card-section",[r("q-form",{on:{submit:e.onRegister}},[r("q-input",{attrs:{label:"Nombres",rules:[function(e){return e&&e.length>0||"Ingrese Su Nombre."}]},model:{value:e.register.nombres,callback:function(t){e.$set(e.register,"nombres",t)},expression:"register.nombres"}}),r("q-input",{attrs:{label:"Apellidos",rules:[function(e){return e&&e.length>0||"Ingrese su apellido."}]},model:{value:e.register.apellidos,callback:function(t){e.$set(e.register,"apellidos",t)},expression:"register.apellidos"}}),r("q-input",{attrs:{label:"Tu correo",rules:[function(e){return e&&e.length>0||"Escriba su email."}]},model:{value:e.register.email,callback:function(t){e.$set(e.register,"email",t)},expression:"register.email"}}),r("q-select",{attrs:{label:"Seleccione el tipo de usuario",options:e.optionsTypesUser,rules:[function(e){return e.value&&e.value.length>0||"Seleccione su opcion."}],"option-value":"value"},model:{value:e.register.tipo,callback:function(t){e.$set(e.register,"tipo",t)},expression:"register.tipo"}}),r("q-input",{attrs:{label:"Tu contraseña",rules:[function(e){return e&&e.length>0||"Escriba su contraseña."}],type:"password"},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password",t)},expression:"register.password"}}),r("q-toggle",{attrs:{label:"Acepto la licencia de terminos."},model:{value:e.accept,callback:function(t){e.accept=t},expression:"accept"}}),r("div",[r("q-btn",{attrs:{color:"primary",type:"submit",label:"Registrar"}})],1)],1)],1),r("q-card-section",[e._v("\n          Ya tiene su cuenta? "),r("a",{staticStyle:{cursor:"pointer",color:"blue"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("Iniciar Sesion")])])],1)],1)],1)],1)},n=[],s=r("ded3"),a=r.n(s),i=r("7ba4"),l=r("70b0"),u={data(){return{optionsTypesUser:[{label:l["TYPES_USER"].USER_POSTULANT,value:"USER_POSTULANT"},{label:l["TYPES_USER"].USER_EMPLOYER,value:"USER_EMPLOYER"}],accept:!1,register:{email:"",password:"",nombres:"",apellidos:"",telefono:"",tipo:null}}},methods:{async onRegister(){try{const e=await i["a"].register(a()(a()({},this.register),{},{tipo:this.register.tipo.value}));setTimeout((()=>{this.$router.push("/login")}),3e3),this.$q.notify({type:"positive",message:"Usuario creado correctamente. Se rederegira al Inicio se Sesion.",timeout:3e3}),console.log(e)}catch(e){console.log(e),this.$q.notify({type:"negative",message:"Error al Registrarse"})}}}},c=u,p=(r("e9b5"),r("2877")),d=r("4d5a"),g=r("09e3"),m=r("9989"),f=r("f09f"),b=r("a370"),h=r("0378"),v=r("27f9"),S=r("ddd8"),E=r("9564"),T=r("9c40"),U=r("eebe"),y=r.n(U),q=Object(p["a"])(c,o,n,!1,null,null,null);t["default"]=q.exports;y()(q,"components",{QLayout:d["a"],QPageContainer:g["a"],QPage:m["a"],QCard:f["a"],QCardSection:b["a"],QForm:h["a"],QInput:v["a"],QSelect:S["a"],QToggle:E["a"],QBtn:T["a"]})},"70b0":function(e,t,r){"use strict";e.exports={TYPES_USER:{USER_POSTULANT:"Busco Trabajo",USER_EMPLOYER:"Necesito apoyo en el hogar"}}},"7ba4":function(e,t,r){"use strict";var o=r("bc3a"),n=r.n(o),s=function(e,t,r,o){function n(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,s){function a(e){try{l(o.next(e))}catch(t){s(t)}}function i(e){try{l(o["throw"](e))}catch(t){s(t)}}function l(e){e.done?r(e.value):n(e.value).then(a,i)}l((o=o.apply(e,t||[])).next())}))};const a="https://back-sist-distribuidos.herokuapp.com/usuarios";t["a"]={login(e){return s(this,void 0,void 0,(function*(){return n()({method:"POST",url:a+"login",data:e})}))},register(e){return s(this,void 0,void 0,(function*(){return n()({method:"POST",url:a,data:e})}))},getUser(e){return s(this,void 0,void 0,(function*(){return n()({method:"get",url:a+"/"+e})}))},updateUser(e){return s(this,void 0,void 0,(function*(){return n()({method:"PUT",url:a+"/"+e})}))},setAuthToken(e){e?n.a.defaults.headers.common["Authorization"]="Bearer "+e:delete n.a.defaults.headers.common["Authorization"]}}},ade3:function(e,t,r){},e9b5:function(e,t,r){"use strict";r("ade3")}}]);