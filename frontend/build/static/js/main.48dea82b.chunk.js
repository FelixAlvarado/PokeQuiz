(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){e.exports=n(79)},47:function(e,t,n){},48:function(e,t,n){},70:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(21),s=n.n(o),i=(n(47),n(48),n(19)),l=n(15),u=n.n(l),m=n(20),d=n(16),f=n(30);a=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")?"http://localhost:5000":"http://127.0.0.1:8000";var h,p=function(e){return f.get("".concat(a,"/quiz?id=").concat(e)).then((function(e){return console.log("here is the data that was fetched for quiz page",e.data.quiz),e.data.quiz})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},g=function(e){return console.log("attempting to fetch quiz attempt data"),f.get("".concat(a,"/attempt?id=").concat(e)).then((function(e){return console.log("here is the fetch quiz attempt response",e),e.data})).catch((function(e){console.log("error occurred on server side with fetch quiz attempt call",e)}))},b=function(e){return console.log("fetching questions"),f.get("".concat(a,"/questions?id=").concat(e)).then((function(e){return console.log("here is the data received from fetch questions",e),e.data})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},E=Object(d.b)("quiz/fetchQuizesStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("".concat(a,"/quizes")).then((function(e){return e.data.quizes})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(d.b)("quiz/fetchQuizStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(d.b)("quiz/fetchQuizAttemptStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(d.b)("quiz/fetchQuestionsStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(d.c)({name:"quizes",initialState:{},reducers:{addQuiz:function(e,t){console.log("quiz being added in quiz slice",t.payload),Object.assign(e,t.payload)}},extraReducers:(h={},Object(i.a)(h,E.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,w.fulfilled,(function(e,t){console.log("made it to get quiz payload",t.payload),Object.assign(e,t.payload)})),Object(i.a)(h,v.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,q.fulfilled,(function(e,t){console.log("get questions payload",t.payload);var n=Object.values(t.payload)[0];n&&n.title&&n.questions&&(console.log("made it to modifying quiz"),Object.assign(e,t.payload))})),h)}),O=j.actions.addQuiz,y=(j.actions.receiveQuiz,function(e){return e.quizes}),N=j.reducer,z=n(6),k=n(3),A=(n(70),function(){var e=Math.floor(721*Math.random())+1;return e=e.toString(),"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e,".png")}),S=function(e){if(!e||0===e.length)return"N/A";var t=0;return e.forEach((function(e){t+=e[1]})),Math.floor(t/e.length).toString()+"%"},C=function(e,t){var n=0,a=Object.keys(e).length;return Object.keys(t).forEach((function(a){t["".concat(a)].answer===e["".concat(a)].correct_answer&&(n+=1)})),Math.floor(n/a*100)},T=n(5);function Q(e){var t=e.quiz,n=Object(c.useState)(""),a=Object(k.a)(n,2),o=a[0],s=a[1],i=Object(c.useRef)(!0);return Object(c.useEffect)((function(){i.current&&(s(A()),i.current=!1)}),[i]),r.a.createElement(T.b,{to:"/quiz/".concat(t.id),className:"quiz-item"},o.length>0?r.a.createElement("img",{alt:"pokemon",src:o,className:"picture"}):r.a.createElement("div",{className:"picture"}),r.a.createElement("div",null,r.a.createElement("h2",null,t.title)),r.a.createElement("div",null,r.a.createElement("h3",null,"Average Score: ",S(t.scores))))}function _(){var e,t=Object(z.c)(y),n=Object(z.b)(),a=Object(c.useRef)(!0);return Object(c.useEffect)((function(){a.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,n(E()),a.current=!1)})),t&&(e=Object.values(t).reverse().map((function(e,t){return e.title?r.a.createElement(Q,{key:t,quiz:e}):void 0}))),r.a.createElement("div",{className:"quiz-list"},e)}n(72);function L(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement(T.b,{to:"/"},r.a.createElement("div",{className:"logo"})),r.a.createElement(T.b,{to:"/create"},r.a.createElement("button",{className:"create-quiz-button"},"Create Quiz")))}n(73);var I=n(14),x=n(11);n(76);function P(e){var t,n=e.scores,a=e.quizId;console.log("here are the scores",n),console.log("here is the quiz id",a);var o=Object(c.useState)(m()),s=Object(k.a)(o,2),i=s[0],l=s[1];function u(e){return e>50?"#4dff4d":e<=50&&e>20?"#ffdb4d":"#ff1a1a"}function m(){var e=window.innerWidth;return e<330?10:e<400?15:e<565?25:e<705?35:45}function d(e){return(e/100*i).toString()+"%"}function f(e){return(i-e/100*i).toString()+"%"}function h(){l(m())}return n&&(t=n.map((function(e,t){return r.a.createElement("div",{className:"score-info",key:t},r.a.createElement("span",null,e[0]),r.a.createElement("div",{className:"score-bar",style:{width:"".concat(d(e[1])),marginRight:"".concat(f(e[1])),backgroundColor:"".concat(u(e[1]))}}),r.a.createElement("span",null,e[1]),r.a.createElement(T.b,{to:"/score/".concat(e[2],"?quiz=").concat(a)},r.a.createElement("button",{className:"attempt-button"},"Attempt")))}))),Object(c.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}})),r.a.createElement("div",{className:"score-list"},r.a.createElement("p",null,"Scores"),n&&n.length>0?r.a.createElement("p",{className:"score-average"},"Average Score: ",S(n)):r.a.createElement("p",{className:"score-average"},"No one has taken this quiz yet"),r.a.createElement("br",null),t)}var M=n(4);n(77);function B(e){var t=e.showAlert,n=e.alertText,a=Object(c.useState)(!0),o=Object(k.a)(a,2),s=o[0],i=o[1];return Object(c.useEffect)((function(){window.onclick=function(e){var n=document.getElementById("alertModalBackground");t&&e.target===n&&i(!1)}})),r.a.createElement("div",{id:"alertModalBackground",className:"".concat(s?"modal-background":"hidden")},r.a.createElement("div",{className:"".concat(s?"alert-modal":"hidden")},r.a.createElement("p",null,n)))}function W(){var e=Object(z.b)(),t=window.location.href.split("/")[4],n=Object(c.useRef)(!0),a=Object(c.useState)(""),o=Object(k.a)(a,2),s=o[0],i=o[1],l=Object(c.useState)({icon:x.c,className:"copy-icon"}),u=Object(k.a)(l,2),m=u[0],d=u[1],f=Object(M.g)(),h=Object(c.useState)(!1),p=Object(k.a)(h,2),g=p[0],b=p[1],E=Object(c.useState)(""),v=Object(k.a)(E,2),q=v[0],j=v[1],O=Object(z.c)((function(e){return e.quizes["".concat(t)]?e.quizes["".concat(t)]:{}}));console.log("here is the quiz",O);var y=O?O.title:"";function N(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),d({icon:x.b,className:"copy-icon2"})}return Object(c.useEffect)((function(){n.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,f.state||e(w(t)),i(A()),f.state&&f.state.justCreated&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("Your quiz was successfully created! Share this page's link with your friends to see how they score!"):(j("Your quiz was successfully created! Share this page's link with your friends to see how they score!"),b(!0))),n.current=!1)}),[e,t,f.state]),r.a.createElement("div",{className:"page-holder"},r.a.createElement("div",{className:"page-top-section"},s.length>0?r.a.createElement("img",{alt:"pokemon",src:s,className:"page-picture"}):r.a.createElement("div",{className:"page-picture"}),r.a.createElement("div",{className:"page-top-right"},r.a.createElement("div",{className:"page-title"},r.a.createElement("div",null,y)),r.a.createElement("div",{className:"link-button-holder"},r.a.createElement(T.b,{to:"/test/".concat(t),className:"quiz-button"},"Take Quiz"),r.a.createElement("div",{className:"page-link-holder"},r.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),r.a.createElement(I.a,{onClick:function(e){return N(e)},className:"copy-icon",icon:m.icon,size:"lg"}))))),r.a.createElement(T.b,{to:"/test/".concat(t),className:"quiz-button2"},r.a.createElement("span",null,"Take Quiz")),r.a.createElement("button",{onClick:function(e){return N(e)},className:"copy-link"},"Copy Link"),r.a.createElement(P,{scores:O.scores,quizId:O.id}),function(){if(g)return r.a.createElement(B,{showAlert:g,alertText:q})}())}n(24);function R(e){var t=e.attempt,n=e.question;function a(e){return e!==t.answer?r.a.createElement("div",null,e):r.a.createElement("div",null,r.a.createElement("mark",{className:"incorrect"},e))}return r.a.createElement("div",{className:"question-holder"},r.a.createElement("div",{className:"question"},t.answer===n.correct_answer?r.a.createElement(I.a,{className:"right",icon:x.a,size:"lg"}):r.a.createElement(I.a,{className:"wrong",icon:x.f,size:"lg"}),r.a.createElement("div",null,n.question)),r.a.createElement("mark",{className:"correct"},n.correct_answer),a(n.wrong_answer1),a(n.wrong_answer2),a(n.wrong_answer3))}function Y(){var e,t=Object(z.b)(),n=window.location.href.split("/")[4].split("?")[0],a=window.location.href.split("=")[1],o=Object(c.useRef)(!0),s=Object(c.useState)(""),i=Object(k.a)(s,2),l=i[0],u=i[1],m=Object(c.useState)({icon:x.c,className:"copy-icon"}),d=Object(k.a)(m,2),f=d[0],h=d[1],p=Object(M.g)(),g=Object(c.useState)(!1),b=Object(k.a)(g,2),E=b[0],w=b[1],q=Object(c.useState)(""),j=Object(k.a)(q,2),O=j[0],y=j[1],N=Object(z.c)((function(e){return e.quizes["".concat(a)]&&e.quizes["".concat(a)].attempts?e.quizes["".concat(a)]:{scores:[[]]}}));function S(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),h({icon:x.b,className:"copy-icon2"})}return console.log("here is the quiz",N),Object(c.useEffect)((function(){o.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,t(v(n)),u(A()),p.state&&p.state.justScored&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("You scored ".concat(p.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")):(y("You scored ".concat(p.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")),w(!0))),o.current=!1)}),[t,n,p.state]),N.attempts&&N.questions&&(e=Object.keys(N.attempts).map((function(e,t){var n=N.attempts["".concat(e)],a=N.questions["".concat(n.question_id)];return r.a.createElement(R,{key:t,attempt:n,question:a})}))),r.a.createElement("div",{className:"page-holder"},r.a.createElement("div",{className:"page-top-section"},l.length>0?r.a.createElement("img",{alt:"pokemon",src:l,className:"page-picture"}):r.a.createElement("div",{className:"page-picture"}),r.a.createElement("div",{className:"page-top-right"},r.a.createElement("div",{className:"page-title"},r.a.createElement("div",null,N.title)),r.a.createElement("div",{className:"link-button-holder"},r.a.createElement(T.b,{className:"quiz-button",to:"/quiz/".concat(a)},"Quiz Page"),r.a.createElement("div",{className:"page-link-holder"},r.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),r.a.createElement(I.a,{onClick:function(e){return S(e)},className:"copy-icon",icon:f.icon,size:"lg"}))))),r.a.createElement(T.b,{className:"quiz-button2",to:"/quiz/".concat(a)},r.a.createElement("span",null,"Quiz Page")),r.a.createElement("button",{onClick:function(e){return S(e)},className:"copy-link"},"Copy Link"),r.a.createElement("div",{className:"score-info-holder"},r.a.createElement("div",null,"Testee: ",N.scores[0][0]),r.a.createElement("div",null,"Score: ",N.scores[0][1])),r.a.createElement("div",{className:"questions"},r.a.createElement("div",{className:"result-title"},"Results"),e),function(){if(E)return r.a.createElement(B,{showAlert:E,alertText:O})}())}n(40);var D,H=n(30);D=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")?"http://localhost:5000":"http://127.0.0.1:8000";function J(){var e,t=Object(c.useState)(""),n=Object(k.a)(t,2),a=n[0],o=n[1],s={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""},i=Object(c.useState)({0:Object.assign({},s),1:Object.assign({},s)}),l=Object(k.a)(i,2),u=l[0],m=l[1],d=Object(c.useState)(1),f=Object(k.a)(d,2),h=f[0],p=f[1],g=Object(c.useState)({boolean:!1,id:""}),b=Object(k.a)(g,2),E=b[0],w=b[1],v=Object(z.b)();function q(e,t,n){var c;if("number"==typeof n){var r=n.toString()+t;c=document.getElementById(r)}else c=document.getElementById(t);var s=e.currentTarget.value;0===s.length&&(s="");var i=Object.assign({},u);switch(t){case"title":if(s.length>22){e.currentTarget.value=a;break}c.innerHTML=s.length.toString()+"/22",o(s);break;case"question":if(s.length>150){e.currentTarget.value=u["".concat(n)].question;break}c.innerHTML=s.length.toString()+"/150",i["".concat(n)].question=s,m(i);break;default:if(s.length>100){e.currentTarget.value=u["".concat(n)]["".concat(t)];break}c.innerHTML=s.length.toString()+"/100",i["".concat(n)]["".concat(t)]=s,m(i)}}function j(e){e.preventDefault();var t=[],n=!1;if(0===a.length&&t.push("Title"),Object.keys(u).forEach((function(e){var a=parseInt(e)+1;0===u["".concat(e)].question.length&&t.push("Question ".concat(a)),0===u["".concat(e)].correctAnswer.length&&t.push("Correct Answer (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer1.length&&t.push("Wrong Answer 1 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer2.length&&t.push("Wrong Answer 2 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer3.length&&t.push("Wrong Answer 3 (Question ".concat(a,")")),"n/a"===u["".concat(e)].wrongAnswer1.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer2.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer3.toLowerCase()&&(n=!0)})),0!==t.length||n){var c="";t.length>0&&(c+="Please fill out the following inputs: ",t.forEach((function(e,n){c+=e,n+1<t.length&&(c+=", ")}))),n&&(c+="\n \n Please note that you cannot use 'n/a' as an answer choice for all of a question's wrong answers"),alert(c)}else(function(e,t){return H.post("".concat(D,"/create"),{title:e,questions:t}).then((function(e){return e.data}))})(a,Object.values(u)).then((function(e){var t=Object.assign({},E);t.boolean=!0,t.id=e.id;var n={};n["".concat(e.id)]=e,v(O(n)),w(t)})).catch((function(e){console.log("error from the server side",e),alert("An error occurred with our servers. Please try submitting your quiz at a later time.")}))}return e=Object.values(u).map((function(e,t){return r.a.createElement("div",{key:t,className:"create-question-holder"},function(){if(E.boolean)return r.a.createElement(M.a,{to:{pathname:"/quiz/".concat(E.id),state:{justCreated:!0}}})}(),r.a.createElement("div",null,r.a.createElement("p",null,"Question ",t+1,": "),r.a.createElement("input",{onChange:function(e){return q(e,"question",t)},placeholder:e.question}),r.a.createElement("div",{id:"".concat(t,"question"),className:"counter2"},"0/150")),r.a.createElement("div",null,r.a.createElement("p",null,"Correct Answer: "),r.a.createElement("input",{onChange:function(e){return q(e,"correctAnswer",t)},placeholder:e.correctAnswer}),r.a.createElement("div",{id:"".concat(t,"correctAnswer"),className:"counter2"},"0/100")),r.a.createElement("div",null,r.a.createElement("p",null,"Wrong Answer 1: "),r.a.createElement("input",{onChange:function(e){return q(e,"wrongAnswer1",t)},placeholder:e.wrongAnswer}),r.a.createElement("div",{id:"".concat(t,"wrongAnswer1"),className:"counter2"},"0/100")),r.a.createElement("div",null,r.a.createElement("p",null,"Wrong Answer 2: "),r.a.createElement("input",{onChange:function(e){return q(e,"wrongAnswer2",t)},placeholder:e.wrongAnswer}),r.a.createElement("div",{id:"".concat(t,"wrongAnswer2"),className:"counter2"},"0/100")),r.a.createElement("div",null,r.a.createElement("p",null,"Wrong Answer 3: "),r.a.createElement("input",{onChange:function(e){return q(e,"wrongAnswer3",t)},placeholder:e.wrongAnswer}),r.a.createElement("div",{id:"".concat(t,"wrongAnswer3"),className:"counter2"},"0/100")),r.a.createElement("br",null),r.a.createElement("br",null))})),r.a.createElement("div",{className:"page-holder"},r.a.createElement("div",{className:"quiz-form"},r.a.createElement("h1",null,"Create Your Quiz!"),r.a.createElement("span",null,"Title: "),r.a.createElement("input",{onChange:function(e){return q(e,"title")}}),r.a.createElement("div",{id:"title",className:"counter"},"0/22"),r.a.createElement("p",null,"Questions:"),r.a.createElement("div",{className:"instructions"},'Please fill out all of the below inputs. If you would like to use less than four answer choices for any of your questions, enter "n/a" for the corresponding wrong answer. Each question must have at least two answer choices'),r.a.createElement("br",null),r.a.createElement("br",null),e,r.a.createElement("div",{className:"icon-holder"},r.a.createElement(I.a,{className:h<2?"remove2":"remove",onClick:function(e){return function(e){if(e.preventDefault(),!(h<2)){var t=Object.assign({},u);delete t["".concat(h)];var n=h-1;m(t),p(n)}}(e)},icon:x.d,size:"3x"}),r.a.createElement(I.a,{className:h>8?"add2":"add",onClick:function(e){return function(e){if(e.preventDefault(),!(h>8)){var t=h+1,n={};n["".concat(t)]={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""};var a=Object.assign(u,n);m(a),p(t)}}(e)},icon:x.e,size:"3x"})),r.a.createElement("button",{onClick:function(e){return j(e)},className:"submit"},"Submit")))}n(78);function V(){var e,t=Object(z.b)(),n=window.location.href.split("/")[4].split("?")[0],a=Object(c.useRef)(!0),o=Object(c.useState)(""),s=Object(k.a)(o,2),i=s[0],l=s[1],u=Object(c.useState)({}),m=Object(k.a)(u,2),d=m[0],f=m[1],h=Object(c.useState)({boolean:!1,scoreId:""}),p=Object(k.a)(h,2),g=p[0],b=p[1],E=Object(z.c)((function(e){return console.log("here is the current state used in selector",e),e.quizes["".concat(n)]?e.quizes["".concat(n)]:{}}));function w(){var n=[];if(0===i.length&&n.push("Please enter your name before submitting your answers"),Object.keys(e).length!==Object.keys(d).length&&n.push("Please answer all of the questions before submitting your answers"),0!==n.length){var a="";n.length>0&&n.forEach((function(e,t){a+="\n",a+=e})),alert(a)}else(function(e,t){return H.post("".concat(D,"/score"),{attempts:e,score:t}).then((function(e){return e.data}))})(Object.values(d),{score:C(E.questions,d),testTaker:i,quiz:E}).then((function(e){var n=Object.assign({},g);n.scoreId=e.score_id,n.boolean=!0,console.log("quiz being sent to dispatch on test submit",e.quiz),t(O(e.quiz)),b(n)})).catch((function(e){console.log(e),alert("An error occurred with our servers. Please try submitting your answers at a later time.")}))}function v(e,t){var n=Object.assign({},d);n["".concat(e)]={questionId:e,answer:t},f(n)}return Object(c.useEffect)((function(){a.current&&(t(q(n)),a.current=!1)}),[t,n]),E&&E.questions&&(e=Object.keys(E.test_questions).map((function(e,t){var n=E.test_questions["".concat(e)];return r.a.createElement("div",{key:t,className:"question-holder question-margin"},r.a.createElement("div",{className:"question"},r.a.createElement("div",null,"Question ",t+1,": ",n.question)),r.a.createElement("div",{className:"n/a"!==n.answer_1.toLowerCase()?"":"no-display"},r.a.createElement("input",{onChange:function(t){return v(e,n.answer_1)},type:"radio",name:n.id}),r.a.createElement("label",null,n.answer_1)),r.a.createElement("div",{className:"n/a"!==n.answer_2.toLowerCase()?"":"no-display"},r.a.createElement("input",{onChange:function(t){return v(e,n.answer_2)},type:"radio",name:n.id}),r.a.createElement("label",null,n.answer_2)),r.a.createElement("div",{className:"n/a"!==n.answer_3.toLowerCase()?"":"no-display"},r.a.createElement("input",{onChange:function(t){return v(e,n.answer_3)},type:"radio",name:n.id}),r.a.createElement("label",null,n.answer_3)),r.a.createElement("div",{className:"n/a"!==n.answer_4.toLowerCase()?"":"no-display"},r.a.createElement("input",{onChange:function(t){return v(e,n.answer_4)},type:"radio",name:n.id}),r.a.createElement("label",null,n.answer_4)))}))),r.a.createElement("div",{className:"page-holder"},r.a.createElement("div",{className:"page-top-section"},r.a.createElement("div",{className:"pokeball"}),r.a.createElement("div",{className:"page-top-right"},r.a.createElement("div",{className:"test-title"},r.a.createElement("div",null,E.title))),r.a.createElement("div",{className:"pokeball2"})),r.a.createElement("div",{className:"questions test-questions"},r.a.createElement("span",null,"Name: "),r.a.createElement("input",{className:"name-input",onChange:function(e){return function(e){var t=e.currentTarget.value;0===t.length&&(t=""),t.length>8?e.currentTarget.value=i:(document.getElementById("name").innerHTML=t.length.toString()+"/8",l(t))}(e)}}),r.a.createElement("div",{id:"name",className:"name-counter"},"0/8"),r.a.createElement("div",{className:"result-title"},"Questions"),e,r.a.createElement("button",{onClick:function(e){return w()},className:"submit test-submit"},"Submit"),function(){if(g.boolean)return r.a.createElement(M.a,{to:{pathname:"/score/".concat(g.scoreId,"?quiz=").concat(n),state:{justScored:!0,score:C(E.questions,d)}}})}()))}var $=function(){return r.a.createElement(T.a,null,r.a.createElement(L,null),r.a.createElement(M.d,null,r.a.createElement(M.b,{path:"/create"},r.a.createElement(J,null)),r.a.createElement(M.b,{path:"/test/:id"},r.a.createElement(V,null)),r.a.createElement(M.b,{path:"/quiz/:id"},r.a.createElement(W,null)),r.a.createElement(M.b,{path:"/score/:id"},r.a.createElement(Y,null)),r.a.createElement(M.b,{path:"/"},r.a.createElement(_,null))))},F=Object(d.a)({reducer:{quizes:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z.a,{store:F},r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.48dea82b.chunk.js.map