(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=function(){var e=Math.floor(721*Math.random())+1;return e=e.toString(),"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e,".png")},r=function(e){if(!e||0===e.length)return"N/A";var t=0;return e.forEach((function(e){t+=e[3]})),Math.floor(t/e.length).toString()+"%"},c=function(e,t){var n=0,a=Object.keys(e).length;return Object.keys(t).forEach((function(a){t["".concat(a)].answer===e["".concat(a)].correct_answer&&(n+=1)})),Math.floor(n/a*100)}},27:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(2),r=n(0),c=n.n(r),o=(n(75),n(11)),s=n(5);function i(e){var t=e.quiz,n=Object(r.useState)(""),i=Object(a.a)(n,2),l=i[0],u=i[1],m=Object(r.useRef)(!0);return Object(r.useEffect)((function(){m.current&&(u(Object(o.c)()),m.current=!1)}),[m]),c.a.createElement(s.b,{to:{pathname:"/quiz/".concat(t.id),state:{scores:t.scores}},className:"quiz-item"},l.length>0?c.a.createElement("img",{alt:"pokemon",src:l,className:"picture"}):c.a.createElement("div",{className:"picture"}),c.a.createElement("div",{className:"column2"},c.a.createElement("h2",null,t.title)),c.a.createElement("div",{className:"column3"},c.a.createElement("h3",null,"Average Score: ",Object(o.a)(t.scores))))}},47:function(e,t,n){e.exports=n(84)},52:function(e,t,n){},53:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(23),s=n.n(o),i=(n(52),n(53),n(21)),l=n(16),u=n.n(l),m=n(22),d=n(17),f=n(33);a=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")||window.origin.includes(":3000")?"http://localhost:5000":"http://127.0.0.1:8000";var h,p=function(e,t){return f.post("".concat(a,"/quiz"),{id:e,scores:t}).then((function(e){return e.data.quiz})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},g=function(e){return f.get("".concat(a,"/attempt?id=").concat(e)).then((function(e){return e.data})).catch((function(e){console.log("error occurred on server side with fetch quiz attempt call",e)}))},b=function(e){return f.get("".concat(a,"/questions?id=").concat(e)).then((function(e){return e.data})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},E=Object(d.b)("quiz/fetchQuizesStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("".concat(a,"/quizes")).then((function(e){return e.data.quizes})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(d.b)("quiz/fetchQuizStatus",function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(d.b)("quiz/fetchQuizAttemptStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(d.b)("quiz/fetchQuestionsStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(d.c)({name:"quizes",initialState:{},reducers:{addQuiz:function(e,t){console.log("adding new quiz",t.payload),Object.assign(e,t.payload)}},extraReducers:(h={},Object(i.a)(h,E.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,w.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,v.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,O.fulfilled,(function(e,t){console.log("here is the action",t);var n=Object.values(t.payload)[0];n&&n.title&&n.questions&&Object.assign(e,t.payload)})),h)}),q=j.actions.addQuiz,y=(j.actions.receiveQuiz,function(e){return e.quizes}),N=j.reducer,k=n(6),z=n(45),A=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,45))}));function S(){var e,t=Object(k.c)(y),n=Object(k.b)(),a=Object(r.useRef)(!0);return Object(r.useEffect)((function(){a.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,n(E()),a.current=!1)})),t&&(e=Object.values(t).reverse().map((function(e,t){return e.title&&t<10?c.a.createElement(z.default,{key:t,quiz:e}):e.title&&t<30?c.a.createElement(r.Suspense,{key:t,fallback:c.a.createElement("div",null)},c.a.createElement(A,{quiz:e})):c.a.createElement("div",{key:t})}))),c.a.createElement("div",{className:"quiz-list"},e)}var C=n(2),P=(n(77),n(5));function T(){var e=Object(r.useState)(18),t=Object(C.a)(e,2),n=t[0],a=t[1],o=Object(r.useRef)(!0);return Object(r.useEffect)((function(){o.current&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&a(16),o.current=!1)}),[a]),c.a.createElement("div",{className:"nav-bar"},c.a.createElement(P.b,{to:"/"},c.a.createElement("div",{className:"logo"})),c.a.createElement(P.b,{to:"/create"},c.a.createElement("button",{className:"create-quiz-button",style:{fontSize:"".concat(n,"px")}},"Create Quiz")))}n(78);var x=n(11),L=n(15),_=n(12),Q=n(46);n(81);function I(e){var t,n=e.scores,a=e.quizId,o=Object(r.useState)(m()),s=Object(C.a)(o,2),i=s[0],l=s[1];function u(e){return e>50?"#4dff4d":e<=50&&e>20?"#ffdb4d":"#ff1a1a"}function m(){var e=window.innerWidth;return e<330?10:e<400?15:e<565?25:e<705?35:45}function d(e){return(e/100*i).toString()+"%"}function f(e){return(i-e/100*i).toString()+"%"}n&&(console.log("here are the scores in quiz page",n),t=Object(Q.a)(n).sort((function(e,t){return e[0]-t[0]})).map((function(e,t){return c.a.createElement("div",{className:"score-info",key:t},c.a.createElement("span",null,e[2]),c.a.createElement("div",{className:"score-bar",style:{width:"".concat(d(e[3])),marginRight:"".concat(f(e[3])),backgroundColor:"".concat(u(e[3]))}}),c.a.createElement("span",null,e[3]),c.a.createElement(P.b,{to:{pathname:"/score/".concat(e[0],"?quiz=").concat(a)}},c.a.createElement("button",{className:"attempt-button"},"Attempt")))})));function h(){l(m())}return Object(r.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}})),c.a.createElement("div",{className:"score-list"},c.a.createElement("p",null,"Scores"),n&&n.length>0?c.a.createElement("p",{className:"score-average"},"Average Score: ",Object(x.a)(n)):c.a.createElement("p",{className:"score-average"},"No one has taken this quiz yet"),c.a.createElement("br",null),t)}var M=n(4);n(82);function B(e){var t=e.showAlert,n=e.alertText,a=Object(r.useState)(!0),o=Object(C.a)(a,2),s=o[0],i=o[1];return Object(r.useEffect)((function(){window.onclick=function(e){var n=document.getElementById("alertModalBackground");t&&e.target===n&&i(!1)}})),c.a.createElement("div",{id:"alertModalBackground",className:"".concat(s?"modal-background":"hidden")},c.a.createElement("div",{className:"".concat(s?"alert-modal":"hidden")},c.a.createElement("p",null,n)))}function R(){var e=Object(k.b)(),t=window.location.href.split("/")[4],n=Object(r.useRef)(!0),a=Object(r.useState)(""),o=Object(C.a)(a,2),s=o[0],i=o[1],l=Object(r.useState)({icon:_.c,className:"copy-icon"}),u=Object(C.a)(l,2),m=u[0],d=u[1],f=Object(M.g)(),h=Object(r.useState)(!1),p=Object(C.a)(h,2),g=p[0],b=p[1],E=Object(r.useState)(""),v=Object(C.a)(E,2),O=v[0],j=v[1],q=Object(r.useState)(""),y=Object(C.a)(q,2),N=y[0],z=y[1],A=Object(k.c)((function(e){return e.quizes["".concat(t)]?e.quizes["".concat(t)]:{scores:[]}})),S=!!(A.title&&f.state&&f.state.justCreated);console.log("here is the qui before checking"),console.log(A),console.log("here is the quiz page quiz",A);var T=A?A.title:"";function Q(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),d({icon:_.b,className:"copy-icon2"})}return Object(r.useEffect)((function(){n.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,!(navigator.userAgent.toLowerCase().indexOf("safari")>-1)||navigator.userAgent.toLowerCase().indexOf("chrome")>-1||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||z("margin-mod"),document.body.scrollTop=0,document.documentElement.scrollTop=0,S||e(w(t,A.scores)),i(Object(x.c)()),S&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("Your quiz was successfully created! Share this page's link with your friends to see how they score!"):(j("Your quiz was successfully created! Share this page's link with your friends to see how they score!"),b(!0))),n.current=!1)}),[e,t,f.state]),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},s.length>0?c.a.createElement("img",{alt:"pokemon",src:s,className:"page-picture",style:{width:"100px"}}):c.a.createElement("div",{className:"page-picture"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,T)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(P.b,{to:{pathname:"/test/".concat(t),state:{justCreated:S}},className:"quiz-button"},"Take Quiz"),c.a.createElement("div",{className:"page-link-holder ".concat(N)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(L.a,{onClick:function(e){return Q(e)},className:"copy-icon",icon:m.icon,size:"lg"}))))),c.a.createElement(P.b,{to:"/test/".concat(t),className:"quiz-button2"},c.a.createElement("span",null,"Take Quiz")),c.a.createElement("button",{onClick:function(e){return Q(e)},className:"copy-link"},"Copy Link"),c.a.createElement(I,{scores:A.scores,quizId:A.id}),function(){if(g)return c.a.createElement(B,{showAlert:g,alertText:O})}())}n(27);function W(e){var t=e.attempt,n=e.question;function a(e){return e!==t.answer?c.a.createElement("div",null,e):c.a.createElement("div",null,c.a.createElement("mark",{className:"incorrect"},e))}return c.a.createElement("div",{className:"question-holder"},c.a.createElement("div",{className:"question"},t.answer===n.correct_answer?c.a.createElement(L.a,{className:"right",icon:_.a,size:"lg"}):c.a.createElement(L.a,{className:"wrong",icon:_.f,size:"lg"}),c.a.createElement("div",null,n.question)),c.a.createElement("mark",{className:"correct"},n.correct_answer),a(n.wrong_answer1),a(n.wrong_answer2),a(n.wrong_answer3))}function Y(e,t){var n,a=Object(k.b)(),o=window.location.href.split("/")[4].split("?")[0],s=window.location.href.split("=")[1],i=Object(r.useRef)(!0),l=Object(r.useState)(""),u=Object(C.a)(l,2),m=u[0],d=u[1],f=Object(r.useState)({icon:_.c,className:"copy-icon"}),h=Object(C.a)(f,2),p=h[0],g=h[1],b=Object(M.g)(),E=Object(r.useState)(!1),w=Object(C.a)(E,2),O=w[0],j=w[1],q=Object(r.useState)(""),y=Object(C.a)(q,2),N=y[0],z=y[1],A=Object(r.useState)(""),S=Object(C.a)(A,2),T=S[0],Q=S[1],I=Object(k.c)((function(e){return e.quizes["".concat(s)]&&e.quizes["".concat(s)].attempts?e.quizes["".concat(s)]:{scores:[]}}));console.log("here is the score page quiz",I);var R=I.scores[0]?I.scores[0][2]:"",Y=I.scores[0]?I.scores[0][3]:"";function D(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),g({icon:_.b,className:"copy-icon2"})}return Object(r.useEffect)((function(){i.current&&(!(navigator.userAgent.toLowerCase().indexOf("safari")>-1)||navigator.userAgent.toLowerCase().indexOf("chrome")>-1||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||Q("margin-mod"),document.body.scrollTop=0,document.documentElement.scrollTop=0,(!b.state||b.state&&!b.state.justCreated)&&a(v(o)),d(Object(x.c)()),b.state&&b.state.justScored&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("You scored ".concat(b.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")):(z("You scored ".concat(b.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")),j(!0))),i.current=!1)}),[a,o,b.state]),I.attempts&&I.questions&&(n=Object.keys(I.attempts).map((function(e,t){var n=I.attempts["".concat(e)],a=I.questions["".concat(n.question_id)];return c.a.createElement(W,{key:t,attempt:n,question:a})}))),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},m.length>0?c.a.createElement("img",{alt:"pokemon",src:m,className:"page-picture"}):c.a.createElement("div",{className:"page-picture"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,I.title)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(P.b,{className:"quiz-button",state:{scores:I.scores},to:"/quiz/".concat(s)},"Quiz Page"),c.a.createElement("div",{className:"page-link-holder ".concat(T)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(L.a,{onClick:function(e){return D(e)},className:"copy-icon",icon:p.icon,size:"lg"}))))),c.a.createElement(P.b,{className:"quiz-button2",to:"/quiz/".concat(s)},c.a.createElement("span",null,"Quiz Page")),c.a.createElement("button",{onClick:function(e){return D(e)},className:"copy-link"},"Copy Link"),c.a.createElement("div",{className:"score-info-holder"},c.a.createElement("div",null,"Testee: ",R),c.a.createElement("div",null,"Score: ",Y)),c.a.createElement("div",{className:"questions"},c.a.createElement("div",{className:"result-title"},"Results"),n),function(){if(O)return c.a.createElement(B,{showAlert:O,alertText:N})}())}n(43);var D,H=n(33);D=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")||window.origin.includes(":3000")?"http://localhost:5000":"http://127.0.0.1:8000";function J(){var e,t=Object(r.useState)(""),n=Object(C.a)(t,2),a=n[0],o=n[1],s={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""},i=Object(r.useState)({0:Object.assign({},s),1:Object.assign({},s)}),l=Object(C.a)(i,2),u=l[0],m=l[1],d=Object(r.useState)(1),f=Object(C.a)(d,2),h=f[0],p=f[1],g=Object(r.useState)({boolean:!1,id:""}),b=Object(C.a)(g,2),E=b[0],w=b[1],v=Object(k.b)();function O(e,t,n){var r;if("number"==typeof n){var c=n.toString()+t;r=document.getElementById(c)}else r=document.getElementById(t);var s=e.currentTarget.value;0===s.length&&(s="");var i=Object.assign({},u);switch(t){case"title":if(s.length>22){e.currentTarget.value=a;break}r.innerHTML=s.length.toString()+"/22",o(s);break;case"question":if(s.length>150){e.currentTarget.value=u["".concat(n)].question;break}r.innerHTML=s.length.toString()+"/150",i["".concat(n)].question=s,m(i);break;default:if(s.length>100){e.currentTarget.value=u["".concat(n)]["".concat(t)];break}r.innerHTML=s.length.toString()+"/100",i["".concat(n)]["".concat(t)]=s,m(i)}}function j(e){e.preventDefault();var t=[],n=!1;if(0===a.length&&t.push("Title"),Object.keys(u).forEach((function(e){var a=parseInt(e)+1;0===u["".concat(e)].question.length&&t.push("Question ".concat(a)),0===u["".concat(e)].correctAnswer.length&&t.push("Correct Answer (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer1.length&&t.push("Wrong Answer 1 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer2.length&&t.push("Wrong Answer 2 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer3.length&&t.push("Wrong Answer 3 (Question ".concat(a,")")),"n/a"===u["".concat(e)].wrongAnswer1.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer2.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer3.toLowerCase()&&(n=!0)})),0!==t.length||n){var r="";t.length>0&&(r+="Please fill out the following inputs: ",t.forEach((function(e,n){r+=e,n+1<t.length&&(r+=", ")}))),n&&(r+="\n \n Please note that you cannot use 'n/a' as an answer choice for all of a question's wrong answers"),alert(r)}else(function(e,t){return H.post("".concat(D,"/create"),{title:e,questions:t}).then((function(e){return e.data}))})(a,Object.values(u)).then((function(e){var t=Object.assign({},E);t.boolean=!0,t.id=e.id;var n={};n["".concat(e.id)]=e,v(q(n)),w(t)})).catch((function(e){console.log("error from the server side",e),alert("An error occurred with our servers. Please try submitting your quiz at a later time.")}))}return e=Object.values(u).map((function(e,t){return c.a.createElement("div",{key:t,className:"create-question-holder"},function(){if(E.boolean)return c.a.createElement(M.a,{to:{pathname:"/quiz/".concat(E.id),state:{justCreated:!0}}})}(),c.a.createElement("div",null,c.a.createElement("p",null,"Question ",t+1,": "),c.a.createElement("input",{onChange:function(e){return O(e,"question",t)},placeholder:e.question}),c.a.createElement("div",{id:"".concat(t,"question"),className:"counter2"},"0/150")),c.a.createElement("div",null,c.a.createElement("p",null,"Correct Answer: "),c.a.createElement("input",{onChange:function(e){return O(e,"correctAnswer",t)},placeholder:e.correctAnswer}),c.a.createElement("div",{id:"".concat(t,"correctAnswer"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 1: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer1",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer1"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 2: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer2",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer2"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 3: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer3",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer3"),className:"counter2"},"0/100")),c.a.createElement("br",null),c.a.createElement("br",null))})),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"quiz-form"},c.a.createElement("h1",null,"Create Your Quiz!"),c.a.createElement("span",null,"Title: "),c.a.createElement("input",{onChange:function(e){return O(e,"title")}}),c.a.createElement("div",{id:"title",className:"counter"},"0/22"),c.a.createElement("p",null,"Questions:"),c.a.createElement("div",{className:"instructions"},'Please fill out all of the below inputs. If you would like to use less than four answer choices for any of your questions, enter "n/a" for the corresponding wrong answer. Each question must have at least two answer choices'),c.a.createElement("br",null),c.a.createElement("br",null),e,c.a.createElement("div",{className:"icon-holder"},c.a.createElement(L.a,{className:h<2?"remove2":"remove",onClick:function(e){return function(e){if(e.preventDefault(),!(h<2)){var t=Object.assign({},u);delete t["".concat(h)];var n=h-1;m(t),p(n)}}(e)},icon:_.d,size:"3x"}),c.a.createElement(L.a,{className:h>8?"add2":"add",onClick:function(e){return function(e){if(e.preventDefault(),!(h>8)){var t=h+1,n={};n["".concat(t)]={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""};var a=Object.assign(u,n);m(a),p(t)}}(e)},icon:_.e,size:"3x"})),c.a.createElement("button",{onClick:function(e){return j(e)},className:"submit"},"Submit")))}n(83);function V(){var e,t=Object(k.b)(),n=window.location.href.split("/")[4].split("?")[0],a=Object(r.useRef)(!0),o=Object(M.g)(),s=Object(r.useState)(""),i=Object(C.a)(s,2),l=i[0],u=i[1],m=Object(r.useState)({}),d=Object(C.a)(m,2),f=d[0],h=d[1],p=Object(r.useState)({boolean:!1,scoreId:""}),g=Object(C.a)(p,2),b=g[0],E=g[1],w=Object(k.c)((function(e){return e.quizes["".concat(n)]?e.quizes["".concat(n)]:{scores:[]}})),v=!!(w.questions&&o.state&&o.state.justCreated);function j(){var n=[];if(0===l.length&&n.push("Please enter your name before submitting your answers"),Object.keys(e).length!==Object.keys(f).length&&n.push("Please answer all of the questions before submitting your answers"),0!==n.length){var a="";n.length>0&&n.forEach((function(e,t){a+="\n",a+=e})),alert(a)}else(function(e,t){return H.post("".concat(D,"/score"),{attempts:e,score:t}).then((function(e){return e.data}))})(Object.values(f),{score:Object(x.b)(w.questions,f),quiz:w,testTaker:l}).then((function(e){var n=Object.assign({},b);n.scoreId=e.score_id,n.boolean=!0,console.log("here is the quiz returns from the backend",e.quiz),t(q(e.quiz)),E(n)})).catch((function(e){console.log(e),alert("An error occurred with our servers. Please try submitting your answers at a later time.")}))}function y(e,t){var n=Object.assign({},f);n["".concat(e)]={questionId:e,answer:t},h(n)}return console.log("here is the test page quiz",w),Object(r.useEffect)((function(){a.current&&(v||t(O(n)),a.current=!1)}),[t,n]),w&&w.questions&&w.test_questions&&(e=Object.keys(w.test_questions).map((function(e,t){var n=w.test_questions["".concat(e)];return c.a.createElement("div",{key:t,className:"question-holder question-margin"},c.a.createElement("div",{className:"question"},c.a.createElement("div",null,"Question ",t+1,": ",n.question)),c.a.createElement("div",{className:"n/a"!==n.answer_1.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return y(e,n.answer_1)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_1)),c.a.createElement("div",{className:"n/a"!==n.answer_2.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return y(e,n.answer_2)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_2)),c.a.createElement("div",{className:"n/a"!==n.answer_3.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return y(e,n.answer_3)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_3)),c.a.createElement("div",{className:"n/a"!==n.answer_4.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return y(e,n.answer_4)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_4)))}))),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},c.a.createElement("div",{className:"pokeball"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"test-title"},c.a.createElement("div",null,w.title))),c.a.createElement("div",{className:"pokeball2"})),c.a.createElement("div",{className:"questions test-questions"},c.a.createElement("span",null,"Name: "),c.a.createElement("input",{className:"name-input",onChange:function(e){return function(e){var t=e.currentTarget.value;0===t.length&&(t=""),t.length>8?e.currentTarget.value=l:(document.getElementById("name").innerHTML=t.length.toString()+"/8",u(t))}(e)}}),c.a.createElement("div",{id:"name",className:"name-counter"},"0/8"),c.a.createElement("div",{className:"result-title"},"Questions"),e,c.a.createElement("button",{onClick:function(e){return j()},className:"submit test-submit"},"Submit"),function(){if(b.boolean){var e=o.state&&o.state.scores?o.state.scores:[];return c.a.createElement(M.a,{to:{pathname:"/score/".concat(b.scoreId,"?quiz=").concat(n),state:{justScored:!0,score:Object(x.b)(w.questions,f),scores:e}}})}}()))}var $=function(){return c.a.createElement(P.a,null,c.a.createElement(T,null),c.a.createElement(M.d,null,c.a.createElement(M.b,{path:"/create"},c.a.createElement(J,null)),c.a.createElement(M.b,{path:"/test/:id"},c.a.createElement(V,null)),c.a.createElement(M.b,{path:"/quiz/:id"},c.a.createElement(R,null)),c.a.createElement(M.b,{path:"/score/:id"},c.a.createElement(Y,null)),c.a.createElement(M.b,{path:"/"},c.a.createElement(S,null))))},F=Object(d.a)({reducer:{quizes:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(k.a,{store:F},c.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.b6f6ebc6.chunk.js.map