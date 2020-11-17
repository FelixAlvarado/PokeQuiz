(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i}));var a=n(2),r=n(0),c=n.n(r),o=(n(75),n(8)),s=n(5);function i(e){var t=e.quiz,n=Object(r.useState)(""),i=Object(a.a)(n,2),l=i[0],u=i[1],m=Object(r.useRef)(!0);return Object(r.useEffect)((function(){m.current&&(u(Object(o.d)()),m.current=!1)}),[m]),c.a.createElement(s.b,{to:{pathname:"/quiz/".concat(t.id),state:{scores:t.scores}},className:"quiz-item"},l.length>0?c.a.createElement("img",{alt:"pokemon",src:l,className:"picture"}):c.a.createElement("div",{className:"picture"}),c.a.createElement("div",{className:"column2"},c.a.createElement("h2",null,t.title)),c.a.createElement("div",{className:"column3"},c.a.createElement("h3",null,"Average Score: ",Object(o.a)(t.scores))))}},47:function(e,t,n){e.exports=n(84)},52:function(e,t,n){},53:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},8:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return o}));var a=function(){var e=Math.floor(721*Math.random())+1;return e=e.toString(),"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(e,".png")},r=function(e){if(!e||0===e.length)return"N/A";var t=0;return e.forEach((function(e){t+=e[3]})),Math.floor(t/e.length).toString()+"%"},c=function(e,t){var n=0,a=Object.keys(e).length;return Object.keys(t).forEach((function(a){t["".concat(a)].answer===e["".concat(a)].correct_answer&&(n+=1)})),Math.floor(n/a*100)},o=function(e,t){var n=[];return Object.values(e).forEach((function(e){t==e[1]&&n.push(e)})),n}},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(23),s=n.n(o),i=(n(52),n(53),n(18)),l=n(14),u=n.n(l),m=n(19),d=n(17),f=n(33);a=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")||window.origin.includes(":3000")?"http://localhost:5000":"http://127.0.0.1:8000";var h,p=function(e){return f.post("".concat(a,"/quiz"),{id:e}).then((function(e){return e.data.quiz})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},g=function(e){return f.get("".concat(a,"/attempt?id=").concat(e)).then((function(e){return e.data})).catch((function(e){console.log("error occurred on server side with fetch quiz attempt call",e)}))},b=function(e){return f.get("".concat(a,"/questions?id=").concat(e)).then((function(e){return e.data})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}))},E=function(e){return console.log("about to fetch scores with thi quiz id",e),f.get("".concat(a,"/scores?id=").concat(e)).then((function(e){return console.log("got this response from fetch scores",e),e.data})).catch((function(e){console.log("error occurred on server side when attempting to fetch scores",e)}))},v=Object(d.b)("quiz/fetchQuizesStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("".concat(a,"/quizes")).then((function(e){return e.data.quizes})).catch((function(e){console.log("error occurred on server side when attempting to fetch questions",e)}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),w=Object(d.b)("quiz/fetchQuizStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=Object(d.b)("quiz/fetchQuizAttemptStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(d.b)("quiz/fetchQuestionsStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),q=Object(d.c)({name:"quizes",initialState:{},reducers:{addQuiz:function(e,t){Object.assign(e,t.payload)}},extraReducers:(h={},Object(i.a)(h,v.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,w.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,O.fulfilled,(function(e,t){Object.assign(e,t.payload)})),Object(i.a)(h,j.fulfilled,(function(e,t){var n=Object.values(t.payload)[0];n&&n.title&&n.questions&&Object.assign(e,t.payload)})),h)}),N=q.actions.addQuiz,y=(q.actions.receiveQuiz,function(e){return e.quizes}),k=q.reducer,z=n(6),S=n(45),A=Object(r.lazy)((function(){return Promise.resolve().then(n.bind(null,45))}));function C(){var e,t=Object(z.c)(y),n=Object(z.b)(),a=Object(r.useRef)(!0);return Object(r.useEffect)((function(){a.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,n(v()),a.current=!1)})),t&&(e=Object.values(t).reverse().map((function(e,t){return e.title&&t<10?c.a.createElement(S.default,{key:t,quiz:e}):e.title&&t<30?c.a.createElement(r.Suspense,{key:t,fallback:c.a.createElement("div",null)},c.a.createElement(A,{quiz:e})):c.a.createElement("div",{key:t})}))),c.a.createElement("div",{className:"quiz-list"},e)}var _=n(2),T=(n(77),n(5));function P(){var e=Object(r.useState)(18),t=Object(_.a)(e,2),n=t[0],a=t[1],o=Object(r.useRef)(!0);return Object(r.useEffect)((function(){o.current&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&a(16),o.current=!1)}),[a]),c.a.createElement("div",{className:"nav-bar"},c.a.createElement(T.b,{to:"/"},c.a.createElement("div",{className:"logo"})),c.a.createElement(T.b,{to:"/create"},c.a.createElement("button",{className:"create-quiz-button",style:{fontSize:"".concat(n,"px")}},"Create Quiz")))}var L=Object(d.b)("score/getScoresStatus",function(){var e=Object(m.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(d.c)({name:"scores",initialState:{},reducers:{addScore:function(e,t){console.log("here is the new score being added",t.payload),Object.assign(e,t.payload)}},extraReducers:Object(i.a)({},L.fulfilled,(function(e,t){console.log("here are the new score being added",t.payload),Object.assign(e,t.payload)}))}),I=x.actions.addScore,Q=x.reducer,B=(n(78),n(8)),M=n(12),W=n(13),D=n(46);n(81);function R(e){var t,n=e.scores,a=e.quizId,o=Object(r.useState)(m()),s=Object(_.a)(o,2),i=s[0],l=s[1];function u(e){return e>50?"#4dff4d":e<=50&&e>20?"#ffdb4d":"#ff1a1a"}function m(){var e=window.innerWidth;return e<330?10:e<400?15:e<565?25:e<705?35:45}function d(e){return(e/100*i).toString()+"%"}function f(e){return(i-e/100*i).toString()+"%"}n&&(console.log("here are the scores in quiz page",n),t=Object(D.a)(n).sort((function(e,t){return e[0]-t[0]})).map((function(e,t){return c.a.createElement("div",{className:"score-info",key:t},c.a.createElement("span",null,e[2]),c.a.createElement("div",{className:"score-bar",style:{width:"".concat(d(e[3])),marginRight:"".concat(f(e[3])),backgroundColor:"".concat(u(e[3]))}}),c.a.createElement("span",null,e[3]),c.a.createElement(T.b,{to:{pathname:"/score/".concat(e[0],"?quiz=").concat(a)}},c.a.createElement("button",{className:"attempt-button"},"Attempt")))})));function h(){l(m())}return Object(r.useEffect)((function(){return window.addEventListener("resize",h),function(){window.removeEventListener("resize",h)}})),c.a.createElement("div",{className:"score-list"},c.a.createElement("p",null,"Scores"),n&&n.length>0?c.a.createElement("p",{className:"score-average"},"Average Score: ",Object(B.a)(n)):c.a.createElement("p",{className:"score-average"},"No one has taken this quiz yet"),c.a.createElement("br",null),t)}var H=n(4);n(82);function Y(e){var t=e.showAlert,n=e.alertText,a=Object(r.useState)(!0),o=Object(_.a)(a,2),s=o[0],i=o[1];return Object(r.useEffect)((function(){window.onclick=function(e){var n=document.getElementById("alertModalBackground");t&&e.target===n&&i(!1)}})),c.a.createElement("div",{id:"alertModalBackground",className:"".concat(s?"modal-background":"hidden")},c.a.createElement("div",{className:"".concat(s?"alert-modal":"hidden")},c.a.createElement("p",null,n)))}function K(){var e=Object(z.b)(),t=window.location.href.split("/")[4],n=Object(r.useRef)(!0),o=Object(r.useState)(""),s=Object(_.a)(o,2),i=s[0],l=s[1],u=Object(r.useState)({icon:W.c,className:"copy-icon"}),m=Object(_.a)(u,2),d=m[0],h=m[1],p=Object(H.g)(),g=Object(r.useState)(!1),b=Object(_.a)(g,2),v=b[0],O=b[1],j=Object(r.useState)(""),q=Object(_.a)(j,2),N=q[0],y=q[1],k=Object(r.useState)(""),S=Object(_.a)(k,2),A=S[0],C=S[1],P=Object(z.c)((function(e){return e.scores})),L=Object(B.c)(P,t),x=window.location.href.split("/")[5];console.log("here is the passs",x),console.log("here is the env pass",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).pass);var Q=Object(z.c)((function(e){return e.quizes["".concat(t)]?e.quizes["".concat(t)]:{scores:[]}})),D=!!(Q.title&&p.state&&p.state.justCreated),K=Q?Q.title:"";function V(){return i.length>0?c.a.createElement("img",{alt:"pokemon",src:i,className:"page-picture",style:{width:"100px"}}):c.a.createElement("div",{className:"page-picture"})}function U(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),h({icon:W.b,className:"copy-icon2"})}function U(e){e.preventDefault(),function(e){return f.get("".concat(a,"/delete?id=").concat(e)).then((function(e){return e.data})).catch((function(e){console.log("error occurred on server side when attempting to fetch scores",e)}))}(t).then((function(e){})).catch((function(e){return console.log("error occurred while deleted quiz",e)}))}return Object(r.useEffect)((function(){n.current&&(document.body.scrollTop=0,document.documentElement.scrollTop=0,!(navigator.userAgent.toLowerCase().indexOf("safari")>-1)||navigator.userAgent.toLowerCase().indexOf("chrome")>-1||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||C("margin-mod"),document.body.scrollTop=0,document.documentElement.scrollTop=0,D||E(t).then((function(n){e(I(n)),e(w(t))})),l(Object(B.d)()),D&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("Your quiz was successfully created! Share this page's link with your friends to see how they score!"):(y("Your quiz was successfully created! Share this page's link with your friends to see how they score!"),O(!0))),n.current=!1)}),[e,t,p.state]),c.a.createElement("div",{className:"page-holder"},/chrome/i.test(navigator.userAgent)?c.a.createElement("div",{className:"page-top-section"},V(),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,K)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(T.b,{to:{pathname:"/test/".concat(t),state:{justCreated:D}},className:"quiz-button"},"Take Quiz"),c.a.createElement("div",{className:"page-link-holder ".concat(A)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(M.a,{onClick:function(e){return U(e)},className:"copy-icon",icon:d.icon,size:"lg"}))))):c.a.createElement("div",{className:"page-top-section-grid"},V(),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,K)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(T.b,{to:{pathname:"/test/".concat(t),state:{justCreated:D}},className:"quiz-button"},"Take Quiz"),c.a.createElement("div",{className:"page-link-holder ".concat(A)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(M.a,{onClick:function(e){return U(e)},className:"copy-icon",icon:d.icon,size:"lg"}))))),c.a.createElement("button",{className:x===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).pass?"none":"",onClick:function(e){return U(e)}},"delete quiz"),c.a.createElement(T.b,{to:"/test/".concat(t),className:"quiz-button2"},c.a.createElement("span",null,"Take Quiz")),c.a.createElement("button",{onClick:function(e){return U(e)},className:"copy-link"},"Copy Link"),c.a.createElement(R,{scores:L,quizId:Q.id}),function(){if(v)return c.a.createElement(Y,{showAlert:v,alertText:N})}())}n(27);function V(e){var t=e.attempt,n=e.question;function a(e){return console.log("here is the wrong answer",e),console.log("here is the wrong answer length",e.length),e!==t.answer||e===t.answer&&e===n.correct_answer?c.a.createElement("div",null,e):c.a.createElement("div",null,c.a.createElement("mark",{className:"incorrect"},e))}return c.a.createElement("div",{className:"question-holder"},c.a.createElement("div",{className:"question"},t.answer===n.correct_answer?c.a.createElement(M.a,{className:"right",icon:W.a,size:"lg"}):c.a.createElement(M.a,{className:"wrong",icon:W.f,size:"lg"}),c.a.createElement("div",null,n.question)),c.a.createElement("mark",{className:"correct"},n.correct_answer),a(n.wrong_answer1),a(n.wrong_answer2),a(n.wrong_answer3))}function U(e,t){var n,a=Object(z.b)(),o=window.location.href.split("/")[4].split("?")[0],s=window.location.href.split("=")[1],i=Object(r.useRef)(!0),l=Object(r.useState)(""),u=Object(_.a)(l,2),m=u[0],d=u[1],f=Object(r.useState)({icon:W.c,className:"copy-icon"}),h=Object(_.a)(f,2),p=h[0],g=h[1],b=Object(H.g)(),E=Object(r.useState)(!1),v=Object(_.a)(E,2),w=v[0],j=v[1],q=Object(r.useState)(""),N=Object(_.a)(q,2),y=N[0],k=N[1],S=Object(r.useState)(""),A=Object(_.a)(S,2),C=A[0],P=A[1],L=Object(z.c)((function(e){return e.quizes["".concat(s)]&&e.quizes["".concat(s)].attempts?e.quizes["".concat(s)]:{scores:[]}})),x=L?L.title:"";console.log("here is the score page quiz",L);var I=L.scores[0]?L.scores[0][2]:"",Q=L.scores[0]?L.scores[0][3]:"";function D(e){e.preventDefault(),document.getElementById("currentLink").select(),document.execCommand("copy"),g({icon:W.b,className:"copy-icon2"})}function R(){return m.length>0?c.a.createElement("img",{alt:"pokemon",src:m,className:"page-picture"}):c.a.createElement("div",{className:"page-picture"})}return Object(r.useEffect)((function(){i.current&&(!(navigator.userAgent.toLowerCase().indexOf("safari")>-1)||navigator.userAgent.toLowerCase().indexOf("chrome")>-1||/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||P("margin-mod"),document.body.scrollTop=0,document.documentElement.scrollTop=0,(!b.state||b.state&&!b.state.justCreated)&&a(O(o)),d(Object(B.d)()),b.state&&b.state.justScored&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?alert("You scored ".concat(b.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")):(k("You scored ".concat(b.state.score,"%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!")),j(!0))),i.current=!1)}),[a,o,b.state]),L.attempts&&L.questions&&(n=Object.keys(L.attempts).map((function(e,t){var n=L.attempts["".concat(e)],a=L.questions["".concat(n.question_id)];return c.a.createElement(V,{key:t,attempt:n,question:a})}))),c.a.createElement("div",{className:"page-holder"},(/chrome/i.test(navigator.userAgent),c.a.createElement("div",{className:"page-top-section-grid"},R(),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"page-title"},c.a.createElement("div",null,x)),c.a.createElement("div",{className:"link-button-holder"},c.a.createElement(T.b,{to:{pathname:"/quiz/".concat(s)},className:"quiz-button"},"Quiz Page"),c.a.createElement("div",{className:"page-link-holder ".concat(C)},c.a.createElement("input",{id:"currentLink",defaultValue:window.location.href}),c.a.createElement(M.a,{onClick:function(e){return D(e)},className:"copy-icon",icon:p.icon,size:"lg"})))))),c.a.createElement(T.b,{className:"quiz-button2",to:"/quiz/".concat(s)},c.a.createElement("span",null,"Quiz Page")),c.a.createElement("button",{onClick:function(e){return D(e)},className:"copy-link"},"Copy Link"),c.a.createElement("div",{className:"score-info-holder"},c.a.createElement("div",null,"Testee: ",I),c.a.createElement("div",null,"Score: ",Q)),c.a.createElement("div",{className:"questions"},c.a.createElement("div",{className:"result-title"},"Results"),n),function(){if(w)return c.a.createElement(Y,{showAlert:w,alertText:y})}())}n(43);var J,$=n(33);J=window.origin.includes("herokuapp")?"https://pokequiz1.herokuapp.com":window.origin.includes(":5000")||window.origin.includes(":3000")?"http://localhost:5000":"http://127.0.0.1:8000";function F(){var e,t=Object(r.useState)(""),n=Object(_.a)(t,2),a=n[0],o=n[1],s={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""},i=Object(r.useState)({0:Object.assign({},s),1:Object.assign({},s)}),l=Object(_.a)(i,2),u=l[0],m=l[1],d=Object(r.useState)(1),f=Object(_.a)(d,2),h=f[0],p=f[1],g=Object(r.useState)({boolean:!1,id:""}),b=Object(_.a)(g,2),E=b[0],v=b[1],w=Object(z.b)();function O(e,t,n){var r;if("number"==typeof n){var c=n.toString()+t;r=document.getElementById(c)}else r=document.getElementById(t);var s=e.currentTarget.value;0===s.length&&(s="");var i=Object.assign({},u);switch(t){case"title":if(s.length>22){e.currentTarget.value=a;break}r.innerHTML=s.length.toString()+"/22",o(s);break;case"question":if(s.length>150){e.currentTarget.value=u["".concat(n)].question;break}r.innerHTML=s.length.toString()+"/150",i["".concat(n)].question=s,m(i);break;default:if(s.length>100){e.currentTarget.value=u["".concat(n)]["".concat(t)];break}r.innerHTML=s.length.toString()+"/100",i["".concat(n)]["".concat(t)]=s,m(i)}}function j(e){e.preventDefault();var t=[],n=!1;if(0===a.length&&t.push("Title"),Object.keys(u).forEach((function(e){var a=parseInt(e)+1;0===u["".concat(e)].question.length&&t.push("Question ".concat(a)),0===u["".concat(e)].correctAnswer.length&&t.push("Correct Answer (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer1.length&&t.push("Wrong Answer 1 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer2.length&&t.push("Wrong Answer 2 (Question ".concat(a,")")),0===u["".concat(e)].wrongAnswer3.length&&t.push("Wrong Answer 3 (Question ".concat(a,")")),"n/a"===u["".concat(e)].wrongAnswer1.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer2.toLowerCase()&&"n/a"===u["".concat(e)].wrongAnswer3.toLowerCase()&&(n=!0)})),0!==t.length||n){var r="";t.length>0&&(r+="Please fill out the following inputs: ",t.forEach((function(e,n){r+=e,n+1<t.length&&(r+=", ")}))),n&&(r+="\n \n Please note that you cannot use 'n/a' as an answer choice for all of a question's wrong answers"),alert(r)}else(function(e,t){return $.post("".concat(J,"/create"),{title:e,questions:t}).then((function(e){return e.data}))})(a,Object.values(u)).then((function(e){var t=Object.assign({},E);t.boolean=!0,t.id=e.id;var n={};n["".concat(e.id)]=e,w(N(n)),v(t)})).catch((function(e){console.log("error from the server side",e),alert("An error occurred with our servers. Please try submitting your quiz at a later time.")}))}return e=Object.values(u).map((function(e,t){return c.a.createElement("div",{key:t,className:"create-question-holder"},function(){if(E.boolean)return c.a.createElement(H.a,{to:{pathname:"/quiz/".concat(E.id),state:{justCreated:!0}}})}(),c.a.createElement("div",null,c.a.createElement("p",null,"Question ",t+1,": "),c.a.createElement("input",{onChange:function(e){return O(e,"question",t)},placeholder:e.question}),c.a.createElement("div",{id:"".concat(t,"question"),className:"counter2"},"0/150")),c.a.createElement("div",null,c.a.createElement("p",null,"Correct Answer: "),c.a.createElement("input",{onChange:function(e){return O(e,"correctAnswer",t)},placeholder:e.correctAnswer}),c.a.createElement("div",{id:"".concat(t,"correctAnswer"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 1: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer1",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer1"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 2: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer2",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer2"),className:"counter2"},"0/100")),c.a.createElement("div",null,c.a.createElement("p",null,"Wrong Answer 3: "),c.a.createElement("input",{onChange:function(e){return O(e,"wrongAnswer3",t)},placeholder:e.wrongAnswer}),c.a.createElement("div",{id:"".concat(t,"wrongAnswer3"),className:"counter2"},"0/100")),c.a.createElement("br",null),c.a.createElement("br",null))})),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"quiz-form"},c.a.createElement("h1",null,"Create Your Quiz!"),c.a.createElement("span",null,"Title: "),c.a.createElement("input",{onChange:function(e){return O(e,"title")}}),c.a.createElement("div",{id:"title",className:"counter"},"0/22"),c.a.createElement("p",null,"Questions:"),c.a.createElement("div",{className:"instructions"},'Please fill out all of the below inputs. If you would like to use less than four answer choices for any of your questions, enter "n/a" for the corresponding wrong answer. Each question must have at least two answer choices'),c.a.createElement("br",null),c.a.createElement("br",null),e,c.a.createElement("div",{className:"icon-holder"},c.a.createElement(M.a,{className:h<2?"remove2":"remove",onClick:function(e){return function(e){if(e.preventDefault(),!(h<2)){var t=Object.assign({},u);delete t["".concat(h)];var n=h-1;m(t),p(n)}}(e)},icon:W.d,size:"3x"}),c.a.createElement(M.a,{className:h>8?"add2":"add",onClick:function(e){return function(e){if(e.preventDefault(),!(h>8)){var t=h+1,n={};n["".concat(t)]={question:"",correctAnswer:"",wrongAnswer1:"",wrongAnswer2:"",wrongAnswer3:""};var a=Object.assign(u,n);m(a),p(t)}}(e)},icon:W.e,size:"3x"})),c.a.createElement("button",{onClick:function(e){return j(e)},className:"submit"},"Submit")))}n(83);function G(){var e,t=Object(z.b)(),n=window.location.href.split("/")[4].split("?")[0],a=Object(r.useRef)(!0),o=Object(H.g)(),s=Object(r.useState)(""),i=Object(_.a)(s,2),l=i[0],u=i[1],m=Object(r.useState)({}),d=Object(_.a)(m,2),f=d[0],h=d[1],p=Object(r.useState)({boolean:!1,scoreId:""}),g=Object(_.a)(p,2),b=g[0],E=g[1],v=Object(z.c)((function(e){return e.quizes["".concat(n)]?e.quizes["".concat(n)]:{scores:[]}})),w=!!(v.questions&&o.state&&o.state.justCreated);function O(){var a=[];if(0===l.length&&a.push("Please enter your name before submitting your answers"),Object.keys(e).length!==Object.keys(f).length&&a.push("Please answer all of the questions before submitting your answers"),0!==a.length){var r="";a.length>0&&a.forEach((function(e,t){r+="\n",r+=e})),alert(r)}else(function(e,t){return $.post("".concat(J,"/score"),{attempts:e,score:t}).then((function(e){return e.data}))})(Object.values(f),{score:Object(B.b)(v.questions,f),quiz:v,testTaker:l}).then((function(e){var a=Object.assign({},b);a.scoreId=e.score_id,a.boolean=!0,console.log("here is the quiz returns from the backend",e.quiz);var r={};r["".concat(e.score_id)]=[e.score_id,n,l,Object(B.b)(v.questions,f)],t(I(r)),t(N(e.quiz)),E(a)})).catch((function(e){console.log(e),alert("An error occurred with our servers. Please try submitting your answers at a later time.")}))}function q(e,t){var n=Object.assign({},f);n["".concat(e)]={questionId:e,answer:t},h(n)}return console.log("here is the test page quiz",v),Object(r.useEffect)((function(){a.current&&(w||t(j(n)),a.current=!1)}),[t,n]),v&&v.questions&&v.test_questions&&(e=Object.keys(v.test_questions).map((function(e,t){var n=v.test_questions["".concat(e)];return c.a.createElement("div",{key:t,className:"question-holder question-margin"},c.a.createElement("div",{className:"question"},c.a.createElement("div",null,"Question ",t+1,": ",n.question)),c.a.createElement("div",{className:"n/a"!==n.answer_1.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return q(e,n.answer_1)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_1)),c.a.createElement("div",{className:"n/a"!==n.answer_2.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return q(e,n.answer_2)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_2)),c.a.createElement("div",{className:"n/a"!==n.answer_3.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return q(e,n.answer_3)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_3)),c.a.createElement("div",{className:"n/a"!==n.answer_4.toLowerCase()?"":"no-display"},c.a.createElement("input",{onChange:function(t){return q(e,n.answer_4)},type:"radio",name:n.id}),c.a.createElement("label",null,n.answer_4)))}))),c.a.createElement("div",{className:"page-holder"},c.a.createElement("div",{className:"page-top-section"},c.a.createElement("div",{className:"pokeball"}),c.a.createElement("div",{className:"page-top-right"},c.a.createElement("div",{className:"test-title"},c.a.createElement("div",null,v.title))),c.a.createElement("div",{className:"pokeball2"})),c.a.createElement("div",{className:"questions test-questions"},c.a.createElement("span",null,"Name: "),c.a.createElement("input",{className:"name-input",onChange:function(e){return function(e){var t=e.currentTarget.value;0===t.length&&(t=""),t.length>8?e.currentTarget.value=l:(document.getElementById("name").innerHTML=t.length.toString()+"/8",u(t))}(e)}}),c.a.createElement("div",{id:"name",className:"name-counter"},"0/8"),c.a.createElement("div",{className:"result-title"},"Questions"),e,c.a.createElement("button",{onClick:function(e){return O()},className:"submit test-submit"},"Submit"),function(){if(b.boolean){o.state&&o.state.scores&&o.state.scores;return c.a.createElement(H.a,{to:{pathname:"/score/".concat(b.scoreId,"?quiz=").concat(n),state:{justScored:!0,score:Object(B.b)(v.questions,f)}}})}}()))}var X=function(){return c.a.createElement(T.a,null,c.a.createElement(P,null),c.a.createElement(H.d,null,c.a.createElement(H.b,{path:"/create"},c.a.createElement(F,null)),c.a.createElement(H.b,{path:"/test/:id"},c.a.createElement(G,null)),c.a.createElement(H.b,{path:"/quiz/:id"},c.a.createElement(K,null)),c.a.createElement(H.b,{path:"/score/:id"},c.a.createElement(U,null)),c.a.createElement(H.b,{path:"/"},c.a.createElement(C,null))))},Z=Object(d.a)({reducer:{quizes:k,scores:Q}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(z.a,{store:Z},c.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.53fc3f3d.chunk.js.map