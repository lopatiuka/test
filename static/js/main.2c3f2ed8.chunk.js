(this["webpackJsonpreact-admin"]=this["webpackJsonpreact-admin"]||[]).push([[0],{216:function(e,t,a){},336:function(e,t,a){e.exports=a(592)},341:function(e,t,a){},342:function(e,t,a){},592:function(e,t,a){"use strict";a.r(t);var n,r,c=a(0),l=a.n(c),i=a(15),o=a.n(i),u=(a(341),a(342),a(24)),s=a(25),m=a(31),p=a(32),v=a(14),f=a(19),h=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("h3",null,"+38 066 614 64 68"),l.a.createElement("h3",null,"\u0410\u0434\u0440\u0435\u0441: \u0443\u043b. \u0420\u044b\u043c\u0430\u0440\u0441\u043a\u0430\u044f 22, \u0425\u0430\u0440\u044c\u043a\u043e\u0432, \u0423\u043a\u0440\u0430\u0438\u043d\u0430"),l.a.createElement("p",null,"RemotEmployees 2018-2020 \xa9 All rights reserved"))}}]),a}(l.a.Component),d=a(22),E=a.n(d),g=a(43),b=a(13),k=b.a.model({fullName:b.a.optional(b.a.string,"asd"),telephone:b.a.optional(b.a.string,"123"),email:b.a.optional(b.a.string,"asd"),vacancie:b.a.optional(b.a.string,"asd"),cvLink:b.a.optional(b.a.string,"asd"),testTaskLink:b.a.optional(b.a.string,"asd"),howKnow:b.a.optional(b.a.string,"asd"),message:b.a.optional(b.a.string,"")}).actions((function(e){return{setName:function(t){e.fullName=t,console.log(e.fullName)},setTelephone:function(t){e.telephone=t},setEmail:function(t){e.email=t},setVacancie:function(t){e.vacancie=t,console.log(e.vacancie)},setCvLink:function(t){e.cvLink=t},setTestTaskLink:function(t){e.testTaskLink=t},setHowKnow:function(t){e.howKnow=t},setMessage:function(t){e.message=t}}})),y=a(66),w=a.n(y),j=new(function(){function e(){Object(u.a)(this,e),this.path="http://localhost:5000/candidates"}return Object(s.a)(e,[{key:"create",value:function(){var e=Object(g.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(this.path,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),O=b.a.model({candidates:b.a.array(k)}).actions((function(e){return{create:function(e,t,a,n,r,c,l,i,o){return Object(g.a)(E.a.mark((function u(){var s;return E.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return e.preventDefault(),s={fullName:t,telephone:a,email:n,vacancie:r,cvLink:c,testTaskLink:l,howKnow:i,message:o},u.next=4,j.create(s);case 4:u.sent.fullName?alert("\u0421\u043f\u0430\u0441\u0438\u0431\u043e, \u043c\u044b \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"):alert("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437");case 7:case"end":return u.stop()}}),u)})))()}}})).create({}),C=k.create({}),N=a(73),x=Object(N.a)(n=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"candidate-form"},l.a.createElement("h2",null,"\u041e\u0442\u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u044e"),l.a.createElement("p",null,"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u0430\u0447\u0438 \u0437\u0430\u044f\u0432\u043a\u0438"),l.a.createElement("form",{className:"candidate-form"},l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"\u0424\u0418\u041e",value:C.fullName,onChange:function(e){return C.setName(e.target.value)}}),l.a.createElement("input",{type:"phone",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",value:C.telephone,onChange:function(e){return C.setTelephone(e.target.value)}})),l.a.createElement("input",{type:"email",placeholder:"Email",value:C.email,onChange:function(e){return C.setEmail(e.target.value)}}),l.a.createElement("select",{value:C.vacancie,onChange:function(e){return C.setVacancie(e.target.value)}},l.a.createElement("option",null,"Angular Developer"),l.a.createElement("option",null,"Designer"),l.a.createElement("option",null,"Marketologist"),l.a.createElement("option",null,"Frontend Developer")),l.a.createElement("input",{type:"text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0440\u0435\u0437\u044e\u043c\u0435",value:C.cvLink,onChange:function(e){return C.setCvLink(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",value:C.testTaskLink,onChange:function(e){return C.setTestTaskLink(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"\u041a\u0430\u043a \u0432\u044b \u043e \u043d\u0430\u0441 \u0443\u0437\u043d\u0430\u043b\u0438?",value:C.howKnow,onChange:function(e){return C.setHowKnow(e.target.value)}}),l.a.createElement("input",{type:"text",placeholder:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",value:C.message,onChange:function(e){return C.setMessage(e.target.value)}}),l.a.createElement("input",{type:"submit",value:"\u041e\u0422\u041f\u0420\u0410\u0412\u0418\u0422\u042c",className:"send-button",onClick:function(e){return O.create(e,C.fullName,C.telephone,C.email,C.vacancie,C.cvLink,C.testTaskLink,C.howKnow,C.message)}})))}}]),a}(l.a.Component))||n,T=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"navigation"},l.a.createElement(f.c,{exact:!0,to:"/",className:"link",activeClassName:"activeLink"},"Main"),l.a.createElement(f.c,{to:"/vacancies",className:"link",activeClassName:"activeLink"},"Vacancies")))}}]),a}(l.a.Component),D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T,null),l.a.createElement("section",{className:"main"},l.a.createElement("div",null,l.a.createElement("p",null,"REMOTE STAFF",l.a.createElement("br",null),l.a.createElement("span",null,"NEEDED"))),l.a.createElement("p",null,"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 2 \u0433\u043e\u0434\u0430.",l.a.createElement("br",null),"100+ \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432.",l.a.createElement("br",null),"40+ \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432.",l.a.createElement("br",null),"\u041f\u0435\u0440\u0432\u0430\u044f \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0446\u0430 \u0432\u0441\u0435 \u0435\u0449\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0443 \u043d\u0430\u0441.",l.a.createElement("br",null),"\u041f\u0435\u0440\u0432\u044b\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0432\u0441\u0435 \u0435\u0449\u0435 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0441 \u043d\u0430\u043c\u0438.",l.a.createElement("br",null),l.a.createElement("span",null,"\u041d\u0430\u0448\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u0438\u0437 6 \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u0423\u043a\u0440\u0430\u0438\u043d\u044b")),l.a.createElement(f.c,{className:"link",to:"/vacancies"},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438")),l.a.createElement("section",{className:"how"},l.a.createElement("h1",null,"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443?")),l.a.createElement("section",{className:"advantages"},l.a.createElement("h1",null,"\u041f\u0420\u0415\u0418\u041c\u0423\u0429\u0415\u0421\u0422\u0412\u0410 \u0420\u0410\u0411\u041e\u0422\u042b \u0421 \u041d\u0410\u041c\u0418"),l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))),l.a.createElement("section",{className:"areas-we-work"},l.a.createElement("h1",null,"\u0412 \u043a\u0430\u043a\u0438\u0445 \u0441\u0444\u0435\u0440\u0430\u0445 \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c"),l.a.createElement("p",null,"\u0412\u044b\u0431\u0435\u0440\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0435 \u0434\u043b\u044f \u0441\u0435\u0431\u044f \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u043d\u0430\u0447\u043d\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0443\u0436\u0435 \u0437\u0430\u0432\u0442\u0440\u0430!")),l.a.createElement("section",{className:"about-us"},l.a.createElement("h1",null,"\u0415\u0429\u0401 \u041d\u0415\u041c\u041d\u041e\u0413\u041e \u041e \u041d\u0410\u0421")),l.a.createElement("section",{className:"join"},l.a.createElement("h1",null,"\u0413\u041e\u0422\u041e\u0412 \u041f\u0420\u0418\u0421\u041e\u0415\u0414\u0418\u041d\u0418\u0422\u042c\u0421\u042f?"),l.a.createElement(x,null)),l.a.createElement(h,null))}}]),a}(l.a.Component),L=b.a.model({id:b.a.identifierNumber,title:b.a.optional(b.a.string,""),description:b.a.optional(b.a.string,""),category:b.a.optional(b.a.string,"Web development"),imagePath:b.a.optional(b.a.string,"")}).volatile((function(){return{image:null}})).actions((function(e){return{setTitle:function(t){e.title=t},setDescription:function(t){e.description=t},setCategory:function(t){e.category=t},setImage:function(t){e.image=t},setDefaultValues:function(){e.title="",e.description="",e.category="Web development"}}})),A=new(function(){function e(){Object(u.a)(this,e),this.path="http://localhost:5000/vacancies",this.token=localStorage.getItem("token")}return Object(s.a)(e,[{key:"getAll",value:function(){var e=Object(g.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get(this.path);case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(g.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat(this.path,"/:").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=Object(g.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post(this.path,t,{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json; multipart/form-data"}});case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"edit",value:function(){var e=Object(g.a)(E.a.mark((function e(t,a){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.put("".concat(this.path,"/").concat(t),a,{headers:{Authorization:"Bearer ".concat(this.token),"Content-Type":"application/json; multipart/form-data"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(g.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.delete("".concat(this.path,"/:").concat(t));case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}()),S=L.create({id:0}),F=b.a.model({vacancies:b.a.array(L),category:b.a.optional(b.a.string,"")}).actions((function(e){return{getAllVacancies:function(){return Object(g.a)(E.a.mark((function t(){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getAll();case 2:(a=t.sent).message?alert("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0430\u0439\u0442"):e.vacancies=a;case 4:case"end":return t.stop()}}),t)})))()},createVacancie:function(e,t,a,n,r){return Object(g.a)(E.a.mark((function c(){var l;return E.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return e.preventDefault(),(l=new window.FormData).append("title",t),l.append("description",a),l.append("category",n),l.append("image",r),c.next=8,A.create(l);case 8:c.sent.title?alert("\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430"):alert("\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451"),S.setDefaultValues();case 11:case"end":return c.stop()}}),c)})))()},editVacancie:function(e,t,a,n,r,c){return Object(g.a)(E.a.mark((function l(){var i;return E.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return e.preventDefault(),(i=new window.FormData).append("title",a),i.append("description",n),i.append("category",r),i.append("image",c),l.next=8,A.edit(t,i);case 8:l.sent.title?alert("\u0417\u0430\u043f\u0438\u0441\u044c \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430"):alert("\u041e\u0448\u0438\u0431\u043a\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451"),S.setDefaultValues();case 11:case"end":return l.stop()}}),l)})))()}}})).views((function(e){return{vacanciesFilter:function(t,a,n,r){e.category=a;for(var c=0;c<n.length;c++)n[c].innerText===t.target.innerText?n[c].classList.add(r):n[c].classList.remove(r)}}})).create({});Object(b.b)(F);var P,V,I=Object(N.a)(r=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){F.category=""}},{key:"render",value:function(){return l.a.createElement("div",{className:"conteiner"},l.a.createElement("ul",{className:"vacancies-filter"},l.a.createElement("li",{onClick:function(e){return F.vacanciesFilter(e,"",document.querySelectorAll(".vacancies-filter>li"),"activeFilter")}},"All"),l.a.createElement("li",{onClick:function(e){return F.vacanciesFilter(e,"design",document.querySelectorAll(".vacancies-filter>li"),"activeFilter")}},"Design"),l.a.createElement("li",{onClick:function(e){return F.vacanciesFilter(e,"marketing",document.querySelectorAll(".vacancies-filter>li"),"activeFilter")}},"Marketing"),l.a.createElement("li",{onClick:function(e){return F.vacanciesFilter(e,"web development",document.querySelectorAll(".vacancies-filter>li"),"activeFilter")}},"Web development")),l.a.createElement("div",{className:"vacancies-block"},l.a.createElement("ul",{className:"vacancies"},F.vacancies.map((function(e){return""===F.category?l.a.createElement("li",{key:e.id},l.a.createElement("img",{src:"../../../../".concat(e.imagePath),alt:"vacancie"}),l.a.createElement("p",{className:"content"},e.title),l.a.createElement(f.c,{to:"/vacancies/".concat(e.id),className:"link"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")):e.category.toLowerCase()===F.category?l.a.createElement("li",{key:e.id},l.a.createElement("p",{className:"content"},e.title),l.a.createElement(f.c,{to:"/vacancies/".concat(e.id),className:"link"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435")):null})))))}}]),a}(l.a.Component))||r,M=(a(216),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T,null),l.a.createElement("div",{className:"info"},l.a.createElement("h1",null,"\u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438"),l.a.createElement("p",null,"\u0412 \u0434\u0430\u043d\u043d\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438. \u0414\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0431\u043e\u0440\u0430, \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0432\u0430\u0448\u0438\u043c\u0438 \u043d\u0430\u0432\u044b\u043a\u0430\u043c\u0438 \u0438 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u043c\u0438 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f\u043c\u0438, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u043c.")),l.a.createElement(I,null),l.a.createElement(h,null))}}]),a}(l.a.Component)),K=Object(N.a)(P=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){for(var e,t=this.props.match.params.id,a=0;a<F.vacancies.length;a++)if(F.vacancies[a].id.toString()===t){e=F.vacancies[a];break}return void 0===e?l.a.createElement("h2",null,"\u0412\u0430\u043a\u0430\u043d\u0441\u0438\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"):l.a.createElement("div",{className:"vacancie-window"},l.a.createElement(T,null),l.a.createElement("div",{className:"vacancie-title"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,"\u0412 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 Remote Employees \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f ",e.title," \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430 \u0438\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445")),l.a.createElement(x,null),l.a.createElement(h,null))}}]),a}(l.a.Component))||P,W=a(287),B=a(160),q=a(665),z=a(664),H={login:function(e){var t={login:e.username,password:e.password};return w.a.post("http://localhost:5000/login",t,{headers:{"Content-Type":"application/json"}}).then((function(e){if(e.data.error||200!==e.status)throw new Error(e.data.error);var t=e.data;return localStorage.setItem("token",t),Promise.resolve()}))},logout:function(){return localStorage.removeItem("token"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("token"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},J=a(666),R=a(667),U=a(671),$=a(663),G=function(e){return c.createElement(J.a,e,c.createElement(R.a,null,c.createElement(U.a,{source:"id"}),c.createElement(U.a,{source:"title"}),c.createElement(U.a,{source:"description"}),c.createElement(U.a,{source:"category"}),c.createElement($.a,null)))},Q=Object(N.a)(V=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.match.params.id;return c.createElement("form",{className:"vacancie-form"},c.createElement("input",{type:"text",name:"title",placeholder:"Title",value:S.title,onChange:function(e){S.setTitle(e.target.value)}}),c.createElement("input",{type:"text",name:"description",placeholder:"Description",value:S.description,onChange:function(e){S.setDescription(e.target.value)}}),c.createElement("select",{name:"category",value:S.category,onChange:function(e){S.setCategory(e.target.value)}},c.createElement("option",null,"Web development"),c.createElement("option",null,"Design"),c.createElement("option",null,"Marketing")),c.createElement("input",{type:"file",name:"image",placeholder:"Title",onChange:function(e){S.setImage(e.target.files[0])}}),c.createElement("input",{type:"submit",onClick:function(t){return F.editVacancie(t,e,S.title,S.description,S.category,S.image)},value:"Save"}))}}]),a}(c.Component))||V,X=Object(N.a)((function(e){return c.createElement("form",{className:"vacancie-form"},c.createElement("input",{type:"text",name:"title",placeholder:"Title",value:S.title,onChange:function(e){S.setTitle(e.target.value)}}),c.createElement("input",{type:"text",name:"description",placeholder:"Description",value:S.description,onChange:function(e){S.setDescription(e.target.value)}}),c.createElement("select",{name:"category",value:S.category,onChange:function(e){S.setCategory(e.target.value)}},c.createElement("option",null,"Web development"),c.createElement("option",null,"Design"),c.createElement("option",null,"Marketing")),c.createElement("input",{type:"file",name:"image",placeholder:"Title",onChange:function(e){S.setImage(e.target.files[0])}}),c.createElement("input",{type:"submit",onClick:function(e){return F.createVacancie(e,S.title,S.description,S.category,S.image)},value:"Save"}))})),Y=function(e){return c.createElement(J.a,e,c.createElement(R.a,null,c.createElement(U.a,{source:"id"}),c.createElement(U.a,{source:"fullName"}),c.createElement(U.a,{source:"telephone"}),c.createElement(U.a,{source:"vacancie"}),c.createElement(U.a,{source:"cvLink"}),c.createElement(U.a,{source:"testTaskLink"}),c.createElement(U.a,{source:"howKnow"}),c.createElement(U.a,{source:"message"}),c.createElement($.a,null)))},Z=a(301),_=a.n(Z),ee=a(302),te=a.n(ee),ae=Object(W.a)("http://localhost:5000",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.headers||(t.headers=new Headers({Accept:"application/json"}));var a=localStorage.getItem("token");return t.headers.set("Authorization","Bearer ".concat(a)),B.a.fetchJson(e,t)}));var ne=function(e){return l.a.createElement(q.a,{authProvider:H,dataProvider:ae},l.a.createElement(z.a,{name:"vacancies",list:G,edit:Q,create:X,icon:_.a}),l.a.createElement(z.a,{name:"candidates",list:Y,icon:te.a}))},re=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(u.a)(this,a),n=t.call(this,e),F.getAllVacancies(),n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f.a,null,l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/",component:D}),l.a.createElement(v.b,{exact:!0,path:"/vacancies",component:M}),l.a.createElement(v.b,{path:"/vacancies/:id",component:K}),l.a.createElement(v.b,{exact:!0,path:"/admin",component:ne}))))}}]),a}(l.a.Component);var ce=function(){return l.a.createElement("div",null,l.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[336,1,2]]]);
//# sourceMappingURL=main.2c3f2ed8.chunk.js.map