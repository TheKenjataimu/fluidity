(this.webpackJsonpfluidity=this.webpackJsonpfluidity||[]).push([[0],{100:function(n,e,t){n.exports=t(221)},105:function(n,e,t){},106:function(n,e,t){},221:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(81),i=t.n(o),c=(t(105),t(106),t(5)),l=t(3),u=t(4),s=t(32),d={get:function(){var n=localStorage.getItem("search-settings");if(n)return d.parse(n)},set:function(n){return localStorage.setItem("search-settings",JSON.stringify(n))},parse:function(n){return JSON.parse(n)}},p={get:function(){var n=localStorage.getItem("link-groups");if(n)return p.parse(n)},set:function(n){return localStorage.setItem("link-groups",JSON.stringify(n))},parse:function(n){return JSON.parse(n)}},f=function(){var n=localStorage.getItem("design");if(n)return m.parse(n)},v=function(n){return localStorage.setItem("design",JSON.stringify(n))},m={get:function(){var n=localStorage.getItem("themes");if(n)return JSON.parse(n)},set:function(n){return localStorage.setItem("themes",JSON.stringify(n))},add:function(n){var e=m.get();e?m.set([].concat(Object(s.a)(e),[n])):m.set([n])},remove:function(n){var e=m.get();e&&m.set(e.filter((function(e){return e.name!==n})))},parse:function(n){return JSON.parse(n)}};function b(){var n=Object(l.a)(["\n    transform: rotate(90deg);\n    min-width: max-content;\n    color: ",";\n    transition: .5s;\n    letter-spacing: 5px;\n"]);return b=function(){return n},n}function g(){var n=Object(l.a)(["\n    padding: 0;\n    background-color: var(--bg-color);\n    border: 4px solid var(--accent-color);\n    height: 100%;\n    width: 90px;\n    cursor: ",';\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0.8;\n    position: relative;\n    ::before {\n        content: "";\n        position: absolute;\n        bottom: 0px;\n        width: 100%;\n        height: ',";\n        background-color: var(--accent-color);\n        transition:  ",";\n    }\n    :hover, :focus{\n        outline: none;\n        ","\n    }\n\n    > .wave {\n        /* Waves Source: https://codepen.io/mburakerman/pen/eRZZEv */\n        width: 82px;\n        height: 50px;\n        position: absolute;\n        top: ",";\n        overflow: hidden;\n        transition:  ",';\n        ::before{\n            content:"";\n            width: 180px;\n            height: 185px;\n            position: absolute;\n            top: -25%;\n            left: 50%;\n            margin-left: -90px;\n            margin-top: -140px;\n            border-radius: 37%;\n            background-color: var(--bg-color);\n            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n        }\n        @keyframes wave {\n            from { transform: rotate(0deg);}\n            from { transform: rotate(360deg);}\n        }\n    }\n\n\n    ',";\n"]);return g=function(){return n},n}function h(){var n=Object(l.a)(["\n    height: 100%;\n    width: ",";\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    overflow: hidden;\n    transition:.3s;\n"]);return h=function(){return n},n}function x(){var n=Object(l.a)(["\n    height: 400px;\n    display: flex;\n    padding: 0 10px;\n    flex-direction: row;\n    border-right:3px solid var(--default-color);\n    :first-of-type{\n        border-left:3px solid var(--default-color);\n    }\n"]);return x=function(){return n},n}function w(){var n=Object(l.a)(["\n    margin-left: 100px;\n    display:flex;\n    width:calc(100% - 400px - 100px);\n\n    @media only screen and (max-width: 1730px) {\n"]);return w=function(){return n},n}var E=u.a.div(w()),j=function(n){return r.a.createElement(E,null,n.children)},y=u.a.div(x()),O=u.a.div(h(),(function(n){return n.width+"px"})),k=u.a.button(g(),(function(n){return n.active?"default":"pointer"}),(function(n){return n.active?"390px":"0"}),(function(n){return n.active?"1s":".5s"}),(function(n){return!n.active&&"\n            ::before {\n                height: 50%;\n            }\n            > .wave {\n                top: 180px;\n                ::before{\n                    animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n                    top: -25%;\n                    left: 50%;\n                }\n            }\n        "}),(function(n){return n.active?"0px":"350px"}),(function(n){return n.active?"1s":".5s"}),(function(n){return!n.active&&"\n        :hover{\n            > * {\n                color: var(--bg-color);\n                text-shadow:\n                    5px 0px 0 var(--accent-color),\n                    4px 0px 0 var(--accent-color),\n                    3px 0px 0 var(--accent-color),\n                    2px 0px 0 var(--accent-color),\n                    1px 0px 0 var(--accent-color),\n                    -1px 0px 0 var(--accent-color),\n                    0px 1px 0 var(--accent-color),\n                    0px -1px 0 var(--accent-color);\n            }\n        }\n    "})),S=u.a.h1(b(),(function(n){return n.active?"var(--bg-color)":"var(--default-color)"})),C=function(n){var e,t=n.active,o=n.title,i=n.children,l=n.onClick,u=Object(a.useState)(t?500:0),s=Object(c.a)(u,2),d=s[0],p=s[1];return Object(a.useEffect)((function(){p(e&&t?e.clientWidth-113*e.children.length-3:0)}),[t]),r.a.createElement(y,{ref:function(n){return e=null===n||void 0===n?void 0:n.parentElement}},r.a.createElement(k,{active:t,onClick:l,tabIndex:t?-1:void 0},r.a.createElement("div",{className:"wave"}),r.a.createElement(S,{active:t,title:o},o)),r.a.createElement(O,{width:d,"aria-hidden":!t||void 0},i))},A=t(51),z=t.n(A),I=t(83),_=t.n(I),D=t(84),B=t.n(D),J=t(85),T=t.n(J),F=t(86),N=t.n(F),L=t(87),V=t.n(L),P=t(88),q=t.n(P),G=t(89),M=t.n(G),W=[{title:"Reddit",links:[{label:"r/startpages",value:"https://www.reddit.com/r/startpages/"},{label:"r/unixporn",value:"https://www.reddit.com/r/unixporn/"},{label:"r/rainmeter",value:"https://www.reddit.com/r/rainmeter/"},{label:"r/AnimalsBeingDerps",value:"https://www.reddit.com/r/AnimalsBeingDerps/"}]},{title:"3D Modelling",links:[{label:"Blender",value:"https://www.blender.org/"},{label:"BlenderGuru",value:"https://www.blenderguru.com/"},{label:"Poliigon",value:"https://www.poliigon.com/"},{label:"Blender tutorial",value:"https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U"},{label:"The other Blender tutorial",value:"https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1"}]},{title:"Design",links:[{label:"PixlrX",value:"https://pixlr.com/x/"},{label:"AI Image Enlarger",value:"https://bigjpg.com/en"},{label:"Img to Svg Converter",value:"https://picsvg.com/"},{label:"Affinity",value:"https://affinity.serif.com/en-us/tutorials/designer/desktop/"},{label:"Affinity - YT",value:"https://www.youtube.com/c/AffinityRevolution/playlists"}]},{title:"Music",links:[{label:"i wanna be a cowboy",value:"https://www.youtube.com/watch?v=8zWz92f_HGs"},{label:"let the bodies hit the floor",value:"https://www.youtube.com/watch?v=b--VKaCB9u0"},{label:"Nobody Kanna Cross It",value:"https://www.youtube.com/watch?v=2wqTnwJGvtc"},{label:"Smug Dancin",value:"https://www.youtube.com/watch?v=eNZ9Od1jQ4Q"},{label:"Utamaru - The Sanctified Mind Cover",value:"https://www.youtube.com/watch?v=MHlJKLlS07U"}]},{title:"Sauce",links:[{label:"JS Library - React",value:"https://reactjs.org/"},{label:"CSS Writing Library - EmotionJS",value:"https://emotion.sh/docs/introduction"},{label:"Pictures - DeathAndMilk",value:"https://www.instagram.com/deathandmilk_/"},{label:"Icons - FontAwesome",value:"https://fontawesome.com/icons"},{label:"Text Flicker - CodeMyUI",value:"https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/"},{label:"Wave Animation - mburakerman",value:"https://codepen.io/mburakerman/pen/eRZZEv"},{label:"About me t(\u0ca0\u76ca\u0ca0t)",value:"/"},{label:"Da real sauce \u0505(\u2661\ufe43\u2661\u0505)",value:"https://www.youtube.com/watch?v=qr89xoZyE1g"},{label:"Even more real sauce ( \u0361\xb0 \u035c\u0296 \u0361\xb0)",value:"https://www.youtube.com/watch?v=VLhJOd_TFiI"}]}],R=[{label:"pic_1",value:z.a},{label:"pic_2",value:_.a},{label:"pic_3",value:B.a},{label:"pic_4",value:T.a},{label:"pic_5",value:N.a},{label:"pic_6",value:V.a},{label:"pic_7",value:q.a},{label:"pic_8",value:M.a}],U=[{label:"DuckDuckGo",value:"duckduckgo.com/"},{label:"Google",value:"google.com/search"},{label:"Qwant",value:"qwant.com/"}],Z={engine:U[0].value,fastForward:{deepl:"https://deepl.com/",maps:"https://google.de/maps/",reddit:"https://reddit.com/",github:"https://github.com/",gitlab:"https://gitlab.com/",youtube:"https://youtube.com/"}},H=[{name:"DeathAndMilk",image:z.a,colors:{"--bg-color":"#2E2E2E","--default-color":"#E6E6E6","--accent-color":"#FFB4E6","--accent-color2":"#B4FFE6"}},{name:"Pop!OS",image:"https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",colors:{"--bg-color":"#333136","--default-color":"#2BC5EB","--accent-color":"#FCD307","--accent-color2":"#2BC5EB"}},{name:"Dark Souls",image:"https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",colors:{"--bg-color":"#32323C","--default-color":"#A0A08C","--accent-color":"#9A6650","--accent-color2":"#461E28"}},{name:"S.E.Lain",image:"https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",colors:{"--bg-color":"#0a1a25","--default-color":"#a6b7ab","--accent-color":"#94656b","--accent-color2":"#57182e"}},{name:"Kitties",image:"https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",colors:{"--bg-color":"#495662","--default-color":"#d1f1fa","--accent-color":"#80aad4","--accent-color2":"#e8a9b7"}}];function K(){var n=Object(l.a)(['\n    width: fit-content;\n    white-space: nowrap;\n    position:relative;\n    padding: 10px 0 10px 30px;\n    font-size:1rem;\n\n    ::before{\n        position:absolute;\n        left:0px;\n        bottom:5px;\n        z-index:0;\n        content: "";\n        height:5px;\n        width:100%;\n        background-color: var(--accent-color);\n        transition:.5s;\n        opacity:.7;\n    }\n\n    :hover, :focus {\n        color: var(--accent-color2);\n        animation:text-flicker 0.01s ease 0s infinite alternate;\n        outline: none;\n    }\n\n']);return K=function(){return n},n}var Y=u.a.a(K()),Q=function(){var n=Object(a.useState)(0),e=Object(c.a)(n,2),t=e[0],o=e[1],i=W;try{var l=p.get();l&&(i=l)}catch(u){console.error("Links could not be loaded.")}return r.a.createElement(j,null,i.map((function(n,e){return r.a.createElement(C,{key:"AccordionGroup"+e,active:t===e,title:n.title,onClick:function(){return o(e)}},n.links.map((function(n,a){return r.a.createElement(Y,{tabIndex:t!==e?-1:void 0,key:"LinkItem"+a,href:n.value},n.label)})))})))},X=t(90),$=t.n(X),nn=t(91),en=t.n(nn),tn=t(92),an=t.n(tn);function rn(){var n=Object(l.a)(["\n    position: fixed;\n    left: 35px;\n    bottom: 40px;\n    height: 2.9rem;\n    width: 2.9rem;\n\n    background: var(--default-color);\n    \n    -webkit-mask-size: cover;\n    mask-size: cover;\n    -webkit-mask-image: url(",");\n    mask-image: url(",");\n"]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n    width: 100%;\n    font-size: 30pt;\n    \n    background-color: rgba(0,0,0,0);\n    color: var(--default-color);\n    transition: .3s;\n    border: none;\n    border-bottom: 2px solid var(--default-color);\n    opacity: 0.3;\n    \n    ::placeholder {\n        color: var(--default-color);\n    }\n    \n    :hover, :focus {\n        opacity: 1;\n        outline: none;\n    }\n"]);return on=function(){return n},n}function cn(){var n=Object(l.a)(["\n    position: fixed;\n    left: 100px;\n    right: 50px;\n    bottom: 40px;\n    height:min-content;\n    "]);return cn=function(){return n},n}var ln=u.a.div(cn()),un=u.a.input(on()),sn=u.a.div(rn(),(function(n){return n.src}),(function(n){return n.src})),dn=function(){var n=d.get()||Z,e=(null===n||void 0===n?void 0:n.engine)||"duckduckgo.com/",t=en.a;e.startsWith("google")?t=$.a:e.startsWith("qwant")&&(t=an.a);return r.a.createElement(ln,null,r.a.createElement(un,{placeholder:"Always stay clean!",type:"input",onKeyUp:function(t){return 13===t.which&&(a=t.currentTarget.value,void(n.fastForward[a]?window.location.href=n.fastForward[a]:window.location.href="https://"+e+"?q="+a));var a},autoFocus:!0}),r.a.createElement(sn,{src:t}))},pn=t(7),fn=t(30),vn=t(33);function mn(){var n=Object(l.a)(["\n    color: ",";\n    background-color: transparent;\n    min-width:50px;\n\tfont-size: 20px;\n    border: none;\n\topacity: 0.7;\n\tcursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    :enabled:hover{\n        ",";\n    }\n    :focus{\n        outline: none;\n    }\n    :disabled{\n        opacity: 0.2;\n        cursor: default;\n    }\n\n    > span{\n        padding-right:10px;\n    }\n"]);return mn=function(){return n},n}var bn=u.a.button(mn(),(function(n){return n.inverted?"var(--bg-color)":"var(--default-color)"}),(function(n){return n.inverted?"filter: \n            drop-shadow(2px 2px 0 var(--accent-color))\n            drop-shadow(-2px -2px 0 var(--accent-color))\n            drop-shadow(-2px 2px 0 var(--accent-color))\n            drop-shadow(2px -2px 0 var(--accent-color))":"animation: box-flicker 0.01s ease 0s infinite alternate"})),gn=function(n){var e=n.icon,t=n.text,a=n.children,o=Object(vn.a)(n,["icon","text","children"]);return r.a.createElement(bn,o,a&&a,t&&r.a.createElement("span",null,t),e&&r.a.createElement(fn.a,{icon:e}))};function hn(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    color: var(--default-color);\n    border: none;\n    height: 100%;\n    width: 100%;\n    outline: none;\n    resize: none;\n"]);return hn=function(){return n},n}function xn(){var n=Object(l.a)(["\n    position: relative;\n    border: 2px solid var(--default-color);\n    display:flex;\n    padding: 10px 0 10px 20px;\n    height: calc(100% - 40px);\n    ","\n"]);return xn=function(){return n},n}var wn=u.a.div(xn(),(function(n){var e=n.error;return e&&'\n        ::after{\n            content: "'.concat(e,'";\n            color: var(--accent-color);\n            position: absolute;\n            top: 10px;\n            right: 15px;\n            font-size: 0.8rem;\n        }\n    ')})),En=u.a.textarea(hn()),jn=JSON.stringify([{title:"Title",links:[{label:"label",value:"url"},{label:"label",value:"url"},{label:"label",value:"url"}]}],null,4),yn=function(n){var e=n.initialValue,t=n.onChange,o=Object(a.useState)(void 0),i=Object(c.a)(o,2),l=i[0],u=i[1],s=Object(a.useState)(JSON.stringify(e,null,4)),d=Object(c.a)(s,2),f=d[0],v=d[1];Object(a.useEffect)((function(){v(JSON.stringify(e,null,4))}),[e]);var m=function(n){v(n);try{var e=p.parse(n);u(void 0),t(e)}catch(a){u("Your links are not parseable. Probably you have a Syntax Error?")}};return r.a.createElement(wn,{error:l},r.a.createElement(En,{onChange:function(n){return m(n.currentTarget.value)},placeholder:jn,value:f}))};function On(){var n=Object(l.a)(["\n    width: 100%;\n"]);return On=function(){return n},n}var kn=u.a.div(On()),Sn=function(n){var e=n.linkGroups,t=n.setLinkGroups;return r.a.createElement(kn,null,r.a.createElement(Ge,null,"Links"),r.a.createElement(yn,{onChange:t,initialValue:e}))},Cn=t(8);function An(){var n=Object(l.a)(["\n    height: 20px;\n    display: flex;\n    flex-direction: row;\n    padding:5px 0;\n    > span {\n        min-width: 100px;\n        display: flex;\n        justify-content: center;\n    }\n"]);return An=function(){return n},n}var zn=u.a.div(An()),In=function(n){var e,t=n.values,o=n.onChange,i=n.currentValue,l=Object(a.useState)(0),u=Object(c.a)(l,2),s=u[0],d=u[1];Object(a.useEffect)((function(){t.forEach((function(n,e){i===n.value&&e!==s&&d(e)}))}),[i,t,s]);var p=function(n){var e;d(n),o(null===(e=t[n])||void 0===e?void 0:e.value)};return r.a.createElement(zn,null,r.a.createElement(gn,{disabled:s<=0,onClick:function(){p(s-1)},icon:pn.b}),r.a.createElement("span",null,null===(e=t[s])||void 0===e?void 0:e.label),r.a.createElement(gn,{disabled:s>=t.length-1,onClick:function(){return p(s+1)},icon:pn.c}))};function _n(){var n=Object(l.a)(["\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: 1fr;\n    grid-column-gap: 40px;\n"]);return _n=function(){return n},n}var Dn=u.a.div(_n()),Bn=function(n){var e=n.searchSettings,t=n.setSearchSettings;return r.a.createElement(Dn,null,r.a.createElement("div",null,r.a.createElement(Ge,null,"Searchbar"),r.a.createElement(Me,null,r.a.createElement(In,{currentValue:e.engine,values:U,onChange:function(n){return t(Object(Cn.a)(Object(Cn.a)({},e),{},{engine:n}))}})),r.a.createElement("br",null),r.a.createElement(Ge,null,"Fast Forward Search")))};function Jn(){var n=Object(l.a)(["\n    margin: 0;\n    padding: 10px 20px;\n    justify-content: flex-start;\n    font-size: initial;\n    :enabled:hover {\n        animation:none;\n        opacity: 1;\n        background-color: var(--default-color);\n        color: var(--bg-color);\n    }\n"]);return Jn=function(){return n},n}function Tn(){var n=Object(l.a)(["\n    height: ",";\n    position: absolute;\n    left: 4px;\n    top: 40px;\n    width: calc(100% - 3px);\n    background-color: var(--bg-color);\n    overflow: hidden;\n    z-index: 9;\n    animation: box-flicker 0.01s ease 0s infinite alternate;\n    transition: ",";\n    > div {\n        padding-top: 5px;\n        display: flex;\n        flex-direction: column;\n    }\n"]);return Tn=function(){return n},n}function Fn(){var n=Object(l.a)(["\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    height: 40px;\n    width: calc(100% + 4px);\n    display: flex;\n    flex-direction: row;\n    align-items: space-between;\n    justify-content: space-between;\n    padding:10px 20px;\n    border: 2px solid var(--default-color);\n    background-color: var(--bg-color);\n\n    :enabled:hover, :focus, :hover {\n        animation:none;\n        opacity: 1;\n    }\n\tfont-size: initial;\n    z-index: 10;\n"]);return Fn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n    position: relative;\n    height: 40px;\n"]);return Nn=function(){return n},n}var Ln=u.a.div(Nn()),Vn=Object(u.a)(gn)(Fn()),Pn=u.a.div(Tn(),(function(n){return n.height+"px"}),(function(n){return.1*n.items+"s"})),qn=Object(u.a)(gn)(Jn()),Gn=function(n){var e=n.items,t=n.onChange,o=n.value,i=Object(a.useState)(0),l=Object(c.a)(i,2),u=l[0],s=l[1],d=Object(a.useState)(!1),p=Object(c.a)(d,2),f=p[0],v=p[1];return r.a.createElement(Ln,null,r.a.createElement(Vn,{text:function(){var n=e.filter((function(n){return n.value===o}));return n.length>0?n[0].label:o}(),icon:pn.a,onClick:function(){return v(!f)}}),r.a.createElement(Pn,{height:f?u:0,items:e.length},r.a.createElement("div",{onBlur:function(){return v(!1)},ref:function(n){return s((null===n||void 0===n?void 0:n.clientHeight)||0)}},e.map((function(n){return r.a.createElement(qn,{onClick:function(){return function(n){t(n),v(!1)}(n.value)},key:n.value,text:n.label})})))))};function Mn(){var n=Object(l.a)(["\n    border: 2px solid var(--default-color);\n    width: calc(100% - 40px);\n    height: 100%;\n    padding: 10px 20px;\n    background-color: var(--bg-color);\n    color: var(--default-color);\n    outline:none;\n    opacity:0.5;\n    :enabled:hover, :focus{\n        opacity:1;\n    }\n    \n"]);return Mn=function(){return n},n}var Wn=u.a.input(Mn()),Rn=function(n){var e=n.onChange,t=Object(vn.a)(n,["onChange"]);return r.a.createElement(Wn,Object.assign({type:"text",onChange:function(n){return e(n.currentTarget.value)}},t))},Un=t(98);function Zn(){var n=Object(l.a)(["\n    > div * {\n        background-color: var(--bg-color)!important;\n        color: var(--default-color)!important;\n        box-shadow: none;\n    }\n    > div{\n        border: 2px solid var(--default-color);\n    }\n"]);return Zn=function(){return n},n}function Hn(){var n=Object(l.a)(["\n    width: 100%;\n    padding: 5px 0;\n    cursor: pointer;\n    opacity: ",";\n    color: ",";\n    :hover {\n        color: var(--accent-color2);\n        animation:text-flicker 0.01s ease 0s infinite alternate;\n    }\n"]);return Hn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n    display: flex;\n    > div {\n        padding: 0 10px;\n        width: 180px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    }\n"]);return Kn=function(){return n},n}var Yn=u.a.div(Kn()),Qn=u.a.div(Hn(),(function(n){return!n.active&&"0.7"}),(function(n){return n.active&&"var(--accent-color)"})),Xn=u.a.div(Zn()),$n=function(n){var e=n.colors,t=n.setColors,o=Object(a.useState)(Object.keys(H[0].colors)[0]),i=Object(c.a)(o,2),l=i[0],u=i[1];return r.a.createElement(Yn,null,r.a.createElement("div",null,Object.keys(e).map((function(n){return r.a.createElement(Qn,{key:n,active:n===l,onClick:function(){return u(n)}},n)}))),r.a.createElement(Xn,null,r.a.createElement(Un.a,{color:e[l],onChange:function(n){return n&&function(n){var a=Object(Cn.a)({},e);a[l]=n.hex,t(a)}(n)}})))};function ne(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: space-between;\n"]);return ne=function(){return n},n}function ee(){var n=Object(l.a)(["\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    margin: 10px;\n    > * {\n        margin-left: 30px;\n    }\n"]);return ee=function(){return n},n}function te(){var n=Object(l.a)(["\n    transform: rotate(90deg);\n    min-width: max-content;\n    color: var(--bg-color);\n    transition: .5s;\n    letter-spacing: 5px;\n"]);return te=function(){return n},n}function ae(){var n=Object(l.a)(['\n    width:calc(100% - 80px);\n    padding: 20px 40px;\n     position: relative;\n    :before{\n        content:"";\n        width:calc(100% - 80px);\n        position: absolute;\n    }\n']);return ae=function(){return n},n}function re(){var n=Object(l.a)(["\n    border: 4px solid ",';\n    height: 300px;\n    width: 80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    ::before {\n        content: "";\n        position: absolute;\n        bottom: 0px;\n        width: 100%;\n        height: 100%;\n        background-color: ',';\n    }\n\n   > .wave {\n        width: 80px;\n        height: 50px;\n        position: absolute;\n        top: 0px;\n        overflow: hidden;\n        ::before{\n            content:"";\n            width: 180px;\n            height: 185px;\n            position: absolute;\n            top: -25%;\n            left: 50%;\n            margin-left: -90px;\n            margin-top: -140px;\n            border-radius: 37%;\n            background: var(--bg-color);\n            animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);\n        }\n        @keyframes wave {\n            from { transform: rotate(0deg);}\n            from { transform: rotate(360deg);}\n        }\n    }\n']);return re=function(){return n},n}function oe(){var n=Object(l.a)(["\n    margin: 10px; \n    height: 300px;\n    width: 300px;\n    border: 1px solid var(--default-color);\n    padding: 5px;\n    object-fit:cover;\n\n    animation:circling-shadow-small 4s ease 0s infinite normal;\n"]);return oe=function(){return n},n}function ie(){var n=Object(l.a)(["\n    ",'\n\n    background-color: var(--bg-color);\n    display: flex;\n    justify-content: space-evenly;\n    align-items:center;\n    border: 2px solid var(--accent-color);\n    width: calc(100% - 400px);\n    height: 100%;\n    position: relative;\n    ::before{\n        content: "','";\n        color: var(--accent-color);\n        position: absolute;\n        top: 10px;\n        left: 15px;\n        font-size: 0.8rem;\n    }\n    ::after{\n        content: "Design Preview";\n        color: var(--accent-color);\n        position: absolute;\n        top: 10px;\n        right: 15px;\n        font-size: 0.8rem;\n    }\n']);return ie=function(){return n},n}var ce=u.a.div(ie(),(function(n){var e=n.colors;return Object.keys(e).map((function(n){return n+":"+e[n]})).toString().replaceAll(",",";")+";"}),(function(n){return n.name})),le=u.a.img(oe()),ue=u.a.div(re(),(function(n){var e=n.colorVar;return"var(".concat(e,")")}),(function(n){var e=n.colorVar;return"var(".concat(e,")")})),se=u.a.div(ae()),de=u.a.h2(te()),pe=u.a.div(ee()),fe=u.a.div(ne()),ve=function(n){var e=n.title,t=n.colorVar;return r.a.createElement(ue,{colorVar:t},r.a.createElement("div",{className:"wave"}),r.a.createElement(de,null,e))},me=function(n){var e=n.design,t=n.setDesign,o=n.themes,i=n.setThemes,l=Object(a.useState)(!1),u=Object(c.a)(l,2),d=u[0],p=u[1],f=function(n){return t(Object(Cn.a)(Object(Cn.a)({},e),{},{image:n}))};Object(a.useEffect)((function(){o.filter((function(n){return be(n,e)})).length>0?p(!1):d||p(!0)}),[e,o]);var v=function(n){var e=o.filter((function(e){return e.name===n}));e.length>0&&t(e[0])},m=function(n){return o.filter((function(n){return n.name===e.name})).length>0};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(qe,null,r.a.createElement(Ge,null,"Theme"),r.a.createElement(Me,null,o&&r.a.createElement(Gn,{value:e.name,items:o.map((function(n){return{label:n.name,value:n.name}})),onChange:v})),r.a.createElement(Me,null,r.a.createElement(Rn,{value:e.name,onChange:function(n){return t(Object(Cn.a)(Object(Cn.a)({},e),{},{name:n}))},placeholder:"Theme name"})),r.a.createElement(se,null),r.a.createElement(Me,null,r.a.createElement(Rn,{value:e.image,onChange:f,placeholder:"Image URL"}),r.a.createElement(In,{currentValue:e.image,values:R,onChange:f})),r.a.createElement(se,null),r.a.createElement(Me,null,r.a.createElement($n,{colors:e.colors,setColors:function(n){return t(Object(Cn.a)(Object(Cn.a)({},e),{},{colors:n}))}})),r.a.createElement(se,null),r.a.createElement(Me,null,r.a.createElement(fe,null,r.a.createElement(Re,{onClick:function(){return n=e,void i([].concat(Object(s.a)(o.filter((function(e){return e.name!==n.name}))),[n]));var n},text:m(e.name)?"Save Theme":"Add Theme",icon:m(e.name)?pn.g:pn.f,disabled:!d||void 0}),r.a.createElement(Re,{onClick:function(){return n=e.name,i(o.filter((function(e){return e.name!==n}))),void(o.length>0&&v(o[0].name));var n},text:"Remove Theme",icon:pn.e,disabled:!m(e.name)}))))),r.a.createElement(ce,{name:e.name,colors:e.colors},r.a.createElement(le,{src:e.image}),r.a.createElement(pe,null,r.a.createElement(ve,{title:"Default",colorVar:"--default-color"}),r.a.createElement(ve,{title:"Accent",colorVar:"--accent-color"}),r.a.createElement(ve,{title:"Accent 2",colorVar:"--accent-color2"}))))},be=function(n,e){var t=!0;return n.name!==e.name&&(t=!1),n.image!==e.image&&(t=!1),Object.keys(n.colors).forEach((function(a){n.colors[a]!==e.colors[a]&&(t=!1)})),t},ge=[{version:"0.3.1",changes:["Fixed a bug which prevented the link editor to load the current data","Added some more default data"]},{version:"0.3.0",description:"This update was hell for me, fucking themes took me way too long and I needed to restructure all the internal design data.Also oof, had so many bugs caused by the not existing peresistence of my data. Hope you enjoy it!",changes:["Added theme management"]},{version:"0.2.1",changes:["Optimized keyboard control","Restructured settings"]},{version:"0.2.0",changes:["Added this changelog","Added tabs in settings","Added design preview",'Added "Discard Changes" button in settings',"Added project logo","Changed structure of settings","I think I enhanced stability overall a bit"]},{version:"0.1.0",description:"The initial state of this project."}],he=t(97),xe=t.n(he);function we(){var n=Object(l.a)(["\n    width:600px;\n    > p {\n        margin-bottom: 10px;\n    }\n"]);return we=function(){return n},n}function Ee(){var n=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow-y: auto;\n    > h1 {\n        font-weight: 500;\n    }\n    > img {\n        width: 180px;\n        height: 180px;\n    }\n"]);return Ee=function(){return n},n}var je=u.a.div(Ee()),ye=u.a.div(we()),Oe=function(){return r.a.createElement(je,null,r.a.createElement("img",{src:xe.a,alt:"logo"}),r.a.createElement("h1",null,"Changelog"),ge.map((function(n){return r.a.createElement(ke,n)})))},ke=function(n){var e=n.version,t=n.description,a=n.changes;return r.a.createElement(ye,null,r.a.createElement("h2",null,"v",e),t&&r.a.createElement("p",null,t),a&&r.a.createElement("p",null,"Changes:"),null===a||void 0===a?void 0:a.map((function(n){return r.a.createElement("li",null,n)})))};function Se(){var n=Object(l.a)(["\n    font-size: 1rem;\n    font-weight: 500;\n    transition: .3s;\n    height: 100%;\n    min-width: 150px;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    cursor: ",";\n    ",";\n    :hover {\n        text-shadow: var(--text-shadow-downwards);\n    }\n"]);return Se=function(){return n},n}function Ce(){var n=Object(l.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n"]);return Ce=function(){return n},n}function Ae(){var n=Object(l.a)(["\n    background-color: var(--default-color);\n    color: var(--bg-color);\n    font-size: 1rem;\n    padding: 10px 20px;\n    :enabled:hover{\n        animation: circling-shadow-small 2s ease 0s infinite normal;\n    }\n"]);return Ae=function(){return n},n}function ze(){var n=Object(l.a)(["\n    z-index:15;\n    height:30px;\n    opacity: 1;\n    padding:0;\n"]);return ze=function(){return n},n}function Ie(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    position: relative;\n    padding: 10px 0px;\n    + {\n        margin-top:15px;\n    }\n"]);return Ie=function(){return n},n}function _e(){var n=Object(l.a)(["\n    font-size: 1rem;\n    padding: 10px 0;\n"]);return _e=function(){return n},n}function De(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    width:400px;\n    height:100%;\n    margin-right:30px;\n    padding-right:20px;\n    overflow-y: auto;\n"]);return De=function(){return n},n}function Be(){var n=Object(l.a)(["\n    display:flex;\n    justify-content: space-between;\n    position:absolute;\n    left:30px;\n    right:30px;\n    bottom:30px;\n"]);return Be=function(){return n},n}function Je(){var n=Object(l.a)(['\n    ::before{\n        content:"Settings";\n        margin: 5px 20px 0 10px;\n    }\n    color: var(--bg-color);\n    background-color: var(--default-color);\n    width:100%;\n    height: 32px;\n    position:absolute;\n    left:0;\n    top:0;\n    display:flex;\n    justify-content: space-between;\n']);return Je=function(){return n},n}function Te(){var n=Object(l.a)(["\n    width: 100%;\n    height: calc(100% - 80px);\n    display:flex;\n"]);return Te=function(){return n},n}function Fe(){var n=Object(l.a)(["\n    background-color: var(--bg-color);\n    position: relative;\n    border: 2px solid var(--default-color);\n    width: 100%;\n    height: 100%;\n    padding: 60px 30px 30px 30px;\n    box-shadow: 10px 10px 0px var(--accent-color);\n"]);return Fe=function(){return n},n}var Ne=u.a.div(Fe()),Le=u.a.div(Te()),Ve=u.a.div(Je()),Pe=u.a.div(Be()),qe=u.a.div(De()),Ge=u.a.p(_e()),Me=u.a.div(Ie()),We=Object(u.a)(gn)(ze()),Re=Object(u.a)(gn)(Ae()),Ue=u.a.div(Ce()),Ze=u.a.button(Se(),(function(n){return n.active?"default":"pointer"}),(function(n){return n.active&&"text-shadow: var(--text-shadow-downwards)"})),He=["Links","Appearance","Searchbar","Changelog"],Ke=function(n){var e=n.hidePopup,t=Object(a.useState)(H[0]),o=Object(c.a)(t,2),i=o[0],l=o[1],u=Object(a.useState)(H),s=Object(c.a)(u,2),b=s[0],g=s[1],h=Object(a.useState)(He[0]),x=Object(c.a)(h,2),w=x[0],E=x[1],j=Object(a.useState)(W),y=Object(c.a)(j,2),O=y[0],k=y[1],S=Object(a.useState)(Z),C=Object(c.a)(S,2),A=C[0],z=C[1];Object(a.useEffect)((function(){try{var n=f();n&&l(n)}catch(r){console.error("Your currently applied design appears to be corrupted.")}try{var e=m.get();e&&g(e)}catch(o){console.error("Your currently saved themes appear to be corrupted.")}try{var t=d.get();t&&z(t)}catch(i){console.error("Your currently applied search settings appear to be corrupted.")}try{var a=p.get();a&&k(a)}catch(c){console.error("Your currently applied links appear to be corrupted.")}}),[]);return r.a.createElement(Ne,null,r.a.createElement(Ve,null,r.a.createElement(Ue,null,He.map((function(n){return r.a.createElement(Ze,{key:n,active:n===w,onClick:function(){return E(n)}},n)}))),r.a.createElement(We,{inverted:!0,onClick:function(){return e()},icon:pn.i})),r.a.createElement(Le,null,"Links"===w&&r.a.createElement(Sn,{linkGroups:O,setLinkGroups:k}),"Appearance"===w&&r.a.createElement(me,{design:i,setDesign:l,themes:b,setThemes:g}),"Searchbar"===w&&r.a.createElement(Bn,{searchSettings:A,setSearchSettings:z}),"Changelog"===w&&r.a.createElement(Oe,null)),"Changelog"!==w&&r.a.createElement(Pe,null,r.a.createElement(Re,{onClick:function(){return v(i),m.set(b),d.set(A),p.set(O),void window.location.reload(!1)},text:"Apply Changes",icon:pn.g}),r.a.createElement(Re,{onClick:function(){window.location.reload(!1)},text:"Discard Changes",icon:pn.d}),r.a.createElement(Re,{onClick:function(){localStorage.clear(),window.location.reload(!1)},text:"Delete All Settings",icon:pn.j})))};function Ye(){var n=Object(l.a)(["\n    position: absolute;\n\ttop:0px;\n    left:0px;\n    right:0px;\n    bottom:0px;\n    padding:100px;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return Ye=function(){return n},n}function Qe(){var n=Object(l.a)(["\n    position: fixed;\n\tleft:0px;\n    width:100%;\n    height:100%;\n    background-color: var(--bg-color);\n    opacity: 0.7;\n"]);return Qe=function(){return n},n}function Xe(){var n=Object(l.a)(["\n\tposition: fixed;\n\ttop: 20px;\n\tright:20px;\n\tfont-size: 20px;\n\n\tcolor: var(--default-color);\n    background-color:transparent;\n    border:none;\n\topacity: 0.3;\n\n\tcursor: pointer;\n\ttransition: .3s;\n\n    :hover{\n        opacity: .5;\n        color: var(--accent-color2);\n        animation:box-flicker 0.01s ease 0s infinite alternate;\n    }\n    :focus{\n        outline: none;\n    }\n"]);return Xe=function(){return n},n}var $e=u.a.button(Xe()),nt=u.a.div(Qe()),et=u.a.div(Ye()),tt=function(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement($e,{onClick:function(){return o(!0)}},r.a.createElement(fn.a,{icon:pn.h})),t&&r.a.createElement(et,null,r.a.createElement(nt,{onClick:function(){}}),r.a.createElement(Ke,{hidePopup:function(){return o(!1)}})))};function at(){var n=Object(l.a)(["\n    height:400px;\n    width:400px;\n    border: 2px solid var(--default-color);\n    padding: 10px;\n    object-fit:cover;\n\n    animation:circling-shadow 4s ease 0s infinite normal;\n"]);return at=function(){return n},n}function rt(){var n=Object(l.a)(["\n    padding:0px 100px;\n    display:flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items:center;\n    height:calc(100% - 100px);\n"]);return rt=function(){return n},n}var ot=u.a.div(rt()),it=u.a.img(at()),ct=function(){var n,e=Object(a.useState)((null===(n=f())||void 0===n?void 0:n.image)||R[0].value),t=Object(c.a)(e,2),o=t[0],i=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ot,null,r.a.createElement("div",null,r.a.createElement(it,{src:o,onError:function(){return i(R[0].value)}})),r.a.createElement(Q,null)),r.a.createElement(dn,null),r.a.createElement(tt,null))},lt=function(){var n=document.documentElement;try{var e,t=null===(e=f())||void 0===e?void 0:e.colors;t&&Object.keys(t).forEach((function(e){n.style.setProperty(e,t[e])}))}catch(a){}return r.a.createElement(ct,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(lt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},51:function(n,e,t){n.exports=t.p+"static/media/pic_1.03400a86.jpg"},83:function(n,e,t){n.exports=t.p+"static/media/pic_2.42b93d95.jpg"},84:function(n,e,t){n.exports=t.p+"static/media/pic_3.8796fde5.jpg"},85:function(n,e,t){n.exports=t.p+"static/media/pic_4.66ccb182.jpg"},86:function(n,e,t){n.exports=t.p+"static/media/pic_5.6e9543cd.jpg"},87:function(n,e,t){n.exports=t.p+"static/media/pic_6.65b20253.jpg"},88:function(n,e,t){n.exports=t.p+"static/media/pic_7.6516acf6.jpg"},89:function(n,e,t){n.exports=t.p+"static/media/pic_8.ba1342f4.png"},90:function(n,e,t){n.exports=t.p+"static/media/google.9ef22081.svg"},91:function(n,e,t){n.exports=t.p+"static/media/duckduckgo.e5067b7c.svg"},92:function(n,e,t){n.exports=t.p+"static/media/qwant.f90c346a.svg"},97:function(n,e,t){n.exports=t.p+"static/media/logo.06ef2568.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.42a0cd0b.chunk.js.map