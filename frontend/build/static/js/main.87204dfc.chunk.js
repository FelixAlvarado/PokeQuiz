(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=function(){var e=Math.floor(721*Math.random())+1;return e=e.toString(),"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e,".png")},r=function(e){if(!e||0===e.length)return"N/A";var t=0;return e.forEach((function(e){t+=e[1]})),Math.floor(t/e.length).toString()+"%"},c=function(e,t){var n=0,a=Object.keys(e).length;return Object.keys(t).forEach((function(a){t["".concat(a)].answer===e["".concat(a)].correct_answer&&(n+=1)})),Math.floor(n/a*100)}},25:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(2),r=n(0),c=n.n(r),o=(n(72),n(11)),s=n(5);function i(e){var t=e.quiz,n=Object(r.useState)(""),i=Object(a.a)(n,2),l=i[0],u=i[1],m=Object(r.useRef)(!0);return Object(r.useEffect)((function(){m.current&&(u(Object(o.c)()),m.current=!1)}),[m]),c.a.createElement(s.b,{to:"/quiz/".concat(t.id),className:"quiz-item"},l.length>0?c.a.createElement("img",{alt:"pokemon",src:l,className:"picture",style:{width:"100px"}}):c.a.createElement("div",{className:"picture"}),c.a.createElement("div",null,c.a.createElement("h2",null,t.title)),c.a.createElement("div",null,c.a.createElement("h3",null,"Average Score: ",Object(o.a)(t.scores))))}},44:function(e,t,n){e.exports=n(81)},49:function(e,t,n){},50:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(22),s=n.n(o),i=(n(49),n(50),n(20)),l=n(16),u=n.n(l),m=n(21),d=n(17),f=n(31);a=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")||window.origin.includes(":3000")?"http://localhost:5000":"http://127.0.0.1:8000";var h,p=function(e,t){return f.post("".concat(a,"/quiz?id"),{id:e,scores:t}).then((function(e){return console.log("here is the data that was fetched for quiz page",e.data.quiz),e.data.quiz})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},g=function(e){return console.log("attempting to fetch quiz attempt data"),f.get("".concat(a,"/attempt?id=").concat(e)).then((function(e){return console.log("here is the fetch quiz attempt response",e),e.data})).catch((function(e){console.log("error occurred on server side with fetch quiz attempt call",e)}))},b=function(e){return console.log("fetching questions"),f.get("".concat(a,"/questions?id=").concat(e)).then((function(e){return console.log("here is the data received from fetch questions",e),e.data})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},E=Object(d.b)("quiz/fetchQuizesStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("".concat(a,"/quizes")).then((function(e){return e.data.quizes})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(d.b)("quiz/fetchQuizStatus",function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(d.b)("quiz/fetchQuizAttemptStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(d.b)("quiz/fetchQuestionsStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(d.c)({name:"quizes",initialState:{},reducers:{addQuiz:function(e,t){console.log("quiz being added in quiz slice",t.payload),Object.assign(e,t.payload)}},extraReducers:(h={},Object(i.a)(h,E.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,w.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,v.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,O.fulfilled,(function(e,t){console.log("get questions payload",t.payload);var n=Object.values(t.payload)[0];n&&n.title&&n.questions&&(console.log("made it to modifying quiz"),Object.assign(e,t.payload))})),h)}),q=j.actions.addQuiz,y=(j.actions.receiveQuiz,function(e){return e.quizes}),N=j.reducer,z=n(6),k=n(43),A=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,43))}));function S(){var e,t=Object(z.c)(y),n=Object(z.b)(),a=Object(r.useRef)(!0);return Object(r.useEffect)((function(){a.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,n(E()),a.current=!1)})),t&&(e=Object.values(t).reverse().map((function(e,t){return e.title&&t<10?c.a.createElement(k.default,{key:t,quiz:e}):e.title?c.a.createElement(r.Suspense,{key:t,fallback:c.a.createElement("div",null)},c.a.createElement(A,{quiz:e})):c.a.createElement("div",{key:t})}))),c.a.createElement("div",{className:"quiz-list"},e)}var C=n(2),P=(n(74),n(5));function T(){var e=Object(r.useState)(18),t=Object(C.a)(e,2),n=t[0],a=t[1],o=Object(r.useRef)(!0);return Object(r.useEffect)((function(){o.current&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&a(16),o.current=!1)}),[a]),c.a.createElement("div",{className:"nav-bar"},c.a.createElement(P.b,{to:"/"},c.a.createElement("div",{className:"logo"})),c.a.createElement(P.b,{to:"/create"},c.a.createElement("button",{className:"create-quiz-button",style:{fontSize:"".concat(n,"px")}},"Create Quiz")))}n(75);var x=n(11),L=n(15),Q=n(12);n(78);function _(e){var t,n=e.scores,a=e.quizId;console.log("here are the scores",n),console.log("here is the quiz id",a);var o=Object(r.useState)(m()),s=Object(C.a)(o,2),i=s[0],l=s[1];function u(e){return e>50?"#4dff4d":e<=50&&e>20?"#ffdb4d":"#ff1a1a"}function m(){var e=window.innerWidth;return e<330?10:e<400?15:e<565?25:e<705?35:45}function d(e){return(e/100*i).toString()+"%"}function f(e){return(i-e/100*i).toString()+"%"}function h(){l(m())}return n&&(t=n.map((function(e,t){return c.a.createElement("div",{className:"score-info",key:t},c.a.createElement("span",null,e[0]),c.a.createElement("div",{className:"score-bar",style:{width:"".concat(d(e[1])),marginRight:"".concat(f(e[1])),backgroundColor:"".concat(u(e[1]))}}),c.a.createElement("span",null,e[1]),c.a.createElement(P.b,{to:"/score/".concat(e[2],"?quiz=").concat(a)},c.a.createElement("button",{className:"attempt-button"},"Attempt")))}))),Object(r.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}})),c.a.createElement("div",{className:"score-list"},c.a.createElement("p",null,"Scores"),n&&n.length>0?c.a.createElement("p",{className:"score-average"},"Average Score: ",Object(x.a)(n)):c.a.createElement("p",{className:"score-average"},"No one has taken this quiz yet"),c.a.createElement("br",null),t)}var I=n(4);n(79);function M(e){var t=e.showAlert,n=e.alertText,a=Object(r.useState)(!0),o=Object(C.a)(a,2),s=o[0],i=o[1];return Object(r.useEffect)((function(){window.onclick=function(e){var n=document.getElementById("alertModalBackground");t&&e.target===n&&i(!1)}})),c.a.createElement("div",{id:"alertModalBackground",className:"".concat(s?"modal-background":"hidden")},c.a.createElement("div",{className:"".concat(s?"alert-modal":"hidden")},c.a.createElement("p",null,n)))}function B(){var e=Object(z.b)(),t=window.location.href.split("/")[4],n=Object(r.useRef)(!0),a=Object(r.useState)(""),o=Object(C.a)(a,2),s=o[0],i=o[1],l=Object(r.useState)({icon:Q.c,className:"copy-icon"}),u=Object(C.a)(l,2),m=u[0],d=u[1],f=Object(I.g)(),h=Object(r.useState)(!1),p=Object(C.a)(h,2),g=p[0],b=p[1],E=Object(r.useState)(""),v=Object(C.a)(E,2),O=v[0],j=v[1],q=Object(r.useState)(""),y=Object(C.a)(q,2),N=y[0],k=y[1],A=Object(z.c)((function(e){return e.quizes["".concat(t)]?e.quizes["".concat(t)]:{}})),S=A?A.title:"";function T(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),d({icon:Q.b,className:"copy-icon2"})}return Object(r.useEffect)((function(){n.current&&(!(navigator.userAgent.toLowerCase().indexOf("safari")>-1)||navigator.userAgent.toLowerCase().indexOf("chrome")>-1||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||k("margin-mod"),document.body.scrollTop=0,document.documentElement.scrollTop=0,f.state||e(w(t,A.scores)),i(Object(x.c)()),f.state&&f.state.justCreated&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("Your quiz was successfully created! Share this page's link with your friends to see how they score!"):(j("Your quiz was successfully created! Share this page's link with your friends to see how they score!"),b(!0))),n.current=!1)}),[e,t,f.state]),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},s.length>0?c.a.createElement("img",{alt:"pokemon",src:s,className:"page-picture",style:{width:"100px"}}):c.a.createElement("div",{className:"page-picture"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,S)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(P.b,{to:"/test/".concat(t),className:"quiz-button"},"Take Quiz"),c.a.createElement("div",{className:"page-link-holder ".concat(N)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(L.a,{onClick:function(e){return T(e)},className:"copy-icon",icon:m.icon,size:"lg"}))))),c.a.createElement(P.b,{to:"/test/".concat(t),className:"quiz-button2"},c.a.createElement("span",null,"Take Quiz")),c.a.createElement("button",{onClick:function(e){return T(e)},className:"copy-link"},"Copy Link"),c.a.createElement(_,{scores:A.scores,quizId:A.id}),function(){if(g)return c.a.createElement(M,{showAlert:g,alertText:O})}())}n(25);function R(e){var t=e.attempt,n=e.question;function a(e){return e!==t.answer?c.a.createElement("div",null,e):c.a.createElement("div",null,c.a.createElement("mark",{className:"incorrect"},e))}return c.a.createElement("div",{className:"question-holder"},c.a.createElement("div",{className:"question"},t.answer===n.correct_answer?c.a.createElement(L.a,{className:"right",icon:Q.a,size:"lg"}):c.a.createElement(L.a,{className:"wrong",icon:Q.f,size:"lg"}),c.a.createElement("div",null,n.question)),c.a.createElement("mark",{className:"correct"},n.correct_answer),a(n.wrong_answer1),a(n.wrong_answer2),a(n.wrong_answer3))}function W(){var e,t=Object(z.b)(),n=window.location.href.split("/")[4].split("?")[0],a=window.location.href.split("=")[1],o=Object(r.useRef)(!0),s=Object(r.useState)(""),i=Object(C.a)(s,2),l=i[0],u=i[1],m=Object(r.useState)({icon:Q.c,className:"copy-icon"}),d=Object(C.a)(m,2),f=d[0],h=d[1],p=Object(I.g)(),g=Object(r.useState)(!1),b=Object(C.a)(g,2),E=b[0],w=b[1],O=Object(r.useState)(""),j=Object(C.a)(O,2),q=j[0],y=j[1],N=Object(r.useState)(""),k=Object(C.a)(N,2),A=k[0],S=k[1],T=Object(z.c)((function(e){return e.quizes["".concat(a)]&&e.quizes["".concat(a)].attempts?e.quizes["".concat(a)]:{scores:[[]]}}));function _(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),h({icon:Q.b,className:"copy-icon2"})}return console.log("here is the quiz",T),Object(r.useEffect)((function(){o.current&&(navigator.userAgent.toLowerCase().indexOf("safari/")>-1&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&S("margin-mod"),document.body.scrollTop=0,document.documentElement.scrollTop=0,t(v(n)),u(Object(x.c)()),p.state&&p.state.justScored&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("You scored ".concat(p.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")):(y("You scored ".concat(p.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")),w(!0))),o.current=!1)}),[t,n,p.state]),T.attempts&&T.questions&&(e=Object.keys(T.attempts).map((function(e,t){var n=T.attempts["".concat(e)],a=T.questions["".concat(n.question_id)];return c.a.createElement(R,{key:t,attempt:n,question:a})}))),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},l.length>0?c.a.createElement("img",{alt:"pokemon",src:l,className:"page-picture"}):c.a.createElement("div",{className:"page-picture"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,T.title)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(P.b,{className:"quiz-button",to:"/quiz/".concat(a)},"Quiz Page"),c.a.createElement("div",{className:"page-link-holder ".concat(A)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(L.a,{onClick:function(e){return _(e)},className:"copy-icon",icon:f.icon,size:"lg"}))))),c.a.createElement(P.b,{className:"quiz-button2",to:"/quiz/".concat(a)},c.a.createElement("span",null,"Quiz Page")),c.a.createElement("button",{onClick:function(e){return _(e)},className:"copy-link"},"Copy Link"),c.a.createElement("div",{className:"score-info-holder"},c.a.createElement("div",null,"Testee: ",T.scores[0][0]),c.a.createElement("div",null,"Score: ",T.scores[0][1])),c.a.createElement("div",{className:"questions"},c.a.createElement("div",{className:"result-title"},"Results"),e),function(){if(E)return c.a.createElement(M,{showAlert:E,alertText:q})}())}n(41);var Y,D=n(31);Y=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")||window.origin.includes(":3000")?"http://localhost:5000":"http://127.0.0.1:8000";function H(){var e,t=Object(r.useState)(""),n=Object(C.a)(t,2),a=n[0],o=n[1],s={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""},i=Object(r.useState)({0:Object.assign({},s),1:Object.assign({},s)}),l=Object(C.a)(i,2),u=l[0],m=l[1],d=Object(r.useState)(1),f=Object(C.a)(d,2),h=f[0],p=f[1],g=Object(r.useState)({boolean:!1,id:""}),b=Object(C.a)(g,2),E=b[0],w=b[1],v=Object(z.b)();function O(e,t,n){var r;if("number"==typeof n){var c=n.toString()+t;r=document.getElementById(c)}else r=document.getElementById(t);var s=e.currentTarget.value;0===s.length&&(s="");var i=Object.assign({},u);switch(t){case"title":if(s.length>22){e.currentTarget.value=a;break}r.innerHTML=s.length.toString()+"/22",o(s);break;case"question":if(s.length>150){e.currentTarget.value=u["".concat(n)].question;break}r.innerHTML=s.length.toString()+"/150",i["".concat(n)].question=s,m(i);break;default:if(s.length>100){e.currentTarget.value=u["".concat(n)]["".concat(t)];break}r.innerHTML=s.length.toString()+"/100",i["".concat(n)]["".concat(t)]=s,m(i)}}function j(e){e.preventDefault();var t=[],n=!1;if(0===a.length&&t.push("Title"),Object.keys(u).forEach((function(e){var a=parseInt(e)+1;0===u["".concat(e)].question.length&&t.push("Question ".concat(a)),0===u["".concat(e)].correctAnswer.length&&t.push("Correct Answer (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer1.length&&t.push("Wrong Answer 1 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer2.length&&t.push("Wrong Answer 2 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer3.length&&t.push("Wrong Answer 3 (Question ".concat(a,")")),"n/a"===u["".concat(e)].wrongAnswer1.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer2.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer3.toLowerCase()&&(n=!0)})),0!==t.length||n){var r="";t.length>0&&(r+="Please fill out the following inputs: ",t.forEach((function(e,n){r+=e,n+1<t.length&&(r+=", ")}))),n&&(r+="\n \n Please note that you cannot use 'n/a' as an answer choice for all of a question's wrong answers"),alert(r)}else(function(e,t){return D.post("".concat(Y,"/create"),{title:e,questions:t}).then((function(e){return e.data}))})(a,Object.values(u)).then((function(e){var t=Object.assign({},E);t.boolean=!0,t.id=e.id;var n={};n["".concat(e.id)]=e,v(q(n)),w(t)})).catch((function(e){console.log("error from the server side",e),alert("An error occurred with our servers. Please try submitting your quiz at a later time.")}))}return e=Object.values(u).map((function(e,t){return c.a.createElement("div",{key:t,className:"create-question-holder"},function(){if(E.boolean)return c.a.createElement(I.a,{to:{pathname:"/quiz/".concat(E.id),state:{justCreated:!0}}})}(),c.a.createElement("div",null,c.a.createElement("p",null,"Question ",t+1,": "),c.a.createElement("input",{onChange:function(e){return O(e,"question",t)},placeholder:e.question}),c.a.createElement("div",{id:"".concat(t,"question"),className:"counter2"},"0/150")),c.a.createElement("div",null,c.a.createElement("p",null,"Correct Answer: "),c.a.createElement("input",{onChange:function(e){return O(e,"correctAnswer",t)},placeholder:e.correctAnswer}),c.a.createElement("div",{id:"".concat(t,"correctAnswer"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 1: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer1",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer1"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 2: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer2",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer2"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 3: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer3",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer3"),className:"counter2"},"0/100")),c.a.createElement("br",null),c.a.createElement("br",null))})),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"quiz-form"},c.a.createElement("h1",null,"Create Your Quiz!"),c.a.createElement("span",null,"Title: "),c.a.createElement("input",{onChange:function(e){return O(e,"title")}}),c.a.createElement("div",{id:"title",className:"counter"},"0/22"),c.a.createElement("p",null,"Questions:"),c.a.createElement("div",{className:"instructions"},'Please fill out all of the below inputs. If you would like to use less than four answer choices for any of your questions, enter "n/a" for the corresponding wrong answer. Each question must have at least two answer choices'),c.a.createElement("br",null),c.a.createElement("br",null),e,c.a.createElement("div",{className:"icon-holder"},c.a.createElement(L.a,{className:h<2?"remove2":"remove",onClick:function(e){return function(e){if(e.preventDefault(),!(h<2)){var t=Object.assign({},u);delete t["".concat(h)];var n=h-1;m(t),p(n)}}(e)},icon:Q.d,size:"3x"}),c.a.createElement(L.a,{className:h>8?"add2":"add",onClick:function(e){return function(e){if(e.preventDefault(),!(h>8)){var t=h+1,n={};n["".concat(t)]={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""};var a=Object.assign(u,n);m(a),p(t)}}(e)},icon:Q.e,size:"3x"})),c.a.createElement("button",{onClick:function(e){return j(e)},className:"submit"},"Submit")))}n(80);function J(){var e,t=Object(z.b)(),n=window.location.href.split("/")[4].split("?")[0],a=Object(r.useRef)(!0),o=Object(r.useState)(""),s=Object(C.a)(o,2),i=s[0],l=s[1],u=Object(r.useState)({}),m=Object(C.a)(u,2),d=m[0],f=m[1],h=Object(r.useState)({boolean:!1,scoreId:""}),p=Object(C.a)(h,2),g=p[0],b=p[1],E=Object(z.c)((function(e){return console.log("here is the current state used in selector",e),e.quizes["".concat(n)]?e.quizes["".concat(n)]:{}}));function w(){var n=[];if(0===i.length&&n.push("Please enter your name before submitting your answers"),Object.keys(e).length!==Object.keys(d).length&&n.push("Please answer all of the questions before submitting your answers"),0!==n.length){var a="";n.length>0&&n.forEach((function(e,t){a+="\n",a+=e})),alert(a)}else(function(e,t){return D.post("".concat(Y,"/score"),{attempts:e,score:t}).then((function(e){return e.data}))})(Object.values(d),{score:Object(x.b)(E.questions,d),testTaker:i,quiz:E}).then((function(e){var n=Object.assign({},g);n.scoreId=e.score_id,n.boolean=!0,console.log("quiz being sent to dispatch on test submit",e.quiz),t(q(e.quiz)),b(n)})).catch((function(e){console.log(e),alert("An error occurred with our servers. Please try submitting your answers at a later time.")}))}function v(e,t){var n=Object.assign({},d);n["".concat(e)]={questionId:e,answer:t},f(n)}return Object(r.useEffect)((function(){a.current&&(t(O(n)),a.current=!1)}),[t,n]),E&&E.questions&&(e=Object.keys(E.test_questions).map((function(e,t){var n=E.test_questions["".concat(e)];return c.a.createElement("div",{key:t,className:"question-holder question-margin"},c.a.createElement("div",{className:"question"},c.a.createElement("div",null,"Question ",t+1,": ",n.question)),c.a.createElement("div",{className:"n/a"!==n.answer_1.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return v(e,n.answer_1)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_1)),c.a.createElement("div",{className:"n/a"!==n.answer_2.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return v(e,n.answer_2)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_2)),c.a.createElement("div",{className:"n/a"!==n.answer_3.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return v(e,n.answer_3)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_3)),c.a.createElement("div",{className:"n/a"!==n.answer_4.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return v(e,n.answer_4)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_4)))}))),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},c.a.createElement("div",{className:"pokeball"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"test-title"},c.a.createElement("div",null,E.title))),c.a.createElement("div",{className:"pokeball2"})),c.a.createElement("div",{className:"questions test-questions"},c.a.createElement("span",null,"Name: "),c.a.createElement("input",{className:"name-input",onChange:function(e){return function(e){var t=e.currentTarget.value;0===t.length&&(t=""),t.length>8?e.currentTarget.value=i:(document.getElementById("name").innerHTML=t.length.toString()+"/8",l(t))}(e)}}),c.a.createElement("div",{id:"name",className:"name-counter"},"0/8"),c.a.createElement("div",{className:"result-title"},"Questions"),e,c.a.createElement("button",{onClick:function(e){return w()},className:"submit test-submit"},"Submit"),function(){if(g.boolean)return c.a.createElement(I.a,{to:{pathname:"/score/".concat(g.scoreId,"?quiz=").concat(n),state:{justScored:!0,score:Object(x.b)(E.questions,d)}}})}()))}var V=function(){return c.a.createElement(P.a,null,c.a.createElement(T,null),c.a.createElement(I.d,null,c.a.createElement(I.b,{path:"/create"},c.a.createElement(H,null)),c.a.createElement(I.b,{path:"/test/:id"},c.a.createElement(J,null)),c.a.createElement(I.b,{path:"/quiz/:id"},c.a.createElement(B,null)),c.a.createElement(I.b,{path:"/score/:id"},c.a.createElement(W,null)),c.a.createElement(I.b,{path:"/"},c.a.createElement(S,null))))},$=Object(d.a)({reducer:{quizes:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z.a,{store:$},c.a.createElement(V,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.87204dfc.chunk.js.map