(window.webpackJsonpse=window.webpackJsonpse||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},185:function(e,t,a){e.exports=a(290)},281:function(e,t,a){},290:function(e,t,a){"use strict";a.r(t);a(186),a(212),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254);var n=a(0),c=a.n(n),r=a(66),i=a.n(r),o=a(38),l=a.n(o),s=a(67),u=a.n(s),p=a(96),m=a(50),d=a(106),h=a.n(d),f=a(105),b=a.n(f),k=(a(263),a(49)),y=a.n(k),E=a(42),v=a.n(E),g=a(100),_=a.n(g),w=a(68),x=a.n(w),j=a(97),O=a.n(j),P=a(99),S=a.n(P),A=a(98),C=a.n(A),K=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(y.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(x.a,{title:"User Data Fetched with VK Connect"},c.a.createElement(O.a,{before:n.photo_200?c.a.createElement(C.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(x.a,{title:"Navigation Example"},c.a.createElement(S.a,null,c.a.createElement(_.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},U=a(69),V=a(104),I=a.n(V),W=a(101),z=a.n(W),N=a(102),B=a.n(N),J=a(103),D=a.n(J),F=(a(281),Object(U.b)()),G=function(e){return c.a.createElement(y.a,{id:e.id},c.a.createElement(v.a,{left:c.a.createElement(I.a,{onClick:e.go,"data-to":"home"},F===U.a?c.a.createElement(z.a,null):c.a.createElement(B.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:D.a,alt:"Persik The Cat"}))},T=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(null)),i=Object(m.a)(r,2),o=i[0],s=i[1],d=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),f=Object(m.a)(d,2),k=f[0],y=f[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,s(t),y(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var E=function(e){l.a.send("VKWebAppShowStoryBox",{background_type:"image",url:"https://static.vovadev.ru/story.png",locked:!0,stickers:[{sticker_type:"renderable",sticker:{content_type:"image",url:"https://static.vovadev.ru/stick.png",transform:{rotation:0,relation_width:.3,gravity:"center"},clickable_zones:[{action_type:"action_link",action:{link:"https://vk.com/everydayyaroslav",tooltip_text_key:"\u0414\u0430-\u0434\u0430, \u0441\u044e\u0434\u0430",transform:[{x:0,y:0},{x:512,y:0},{x:512,y:512},{x:0,y:512}]}}],original_width:512,original_height:512,can_delete:!1}}]})};return c.a.createElement(h.a,{activePanel:a,popout:k},c.a.createElement(K,{id:"home",fetchedUser:o,go:E}),c.a.createElement(G,{id:"persik",go:E}))};l.a.send("VKWebAppInit"),i.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.7ede3df2.chunk.js.map