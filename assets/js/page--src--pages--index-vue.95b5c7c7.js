(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,5],{222:function(t,e,s){},225:function(t,e,s){"use strict";var a=s(222);s.n(a).a},226:function(t,e){t.exports={vue:{name:"Vue",icon:"vuejs",pack:"mdi",stars:3,description:"I love vue",tagType:"is-primary",iconType:"is-info"},react:{name:"React",icon:"react",pack:"mdi",stars:4,description:"I love vue"},node:{name:"Nodejs",icon:"nodejs",pack:"mdi",stars:4,description:"I love vue"},webpack:{name:"Webpack",icon:"webpack",pack:"mdi",stars:3,description:"Use this all the time"},golang:{name:"golang",icon:"linux",pack:"mdi",stars:3,description:"Use this all the time"},java:{name:"Java",icon:"language-javascript",pack:"mdi",stars:2,description:"Coursework and side projects"},php:{name:"PHP",icon:"language-php",stars:2,description:"Used laravel at work"},html5:{name:"HTML5",icon:"language-html5",stars:2,description:"Coursework and side projects"},Typescript:{name:"TypeScript",icon:"language-typescript",stars:2,description:"Coursework and side projects"},Bash:{name:"bash",icon:"bash",stars:2,description:"Coursework and side projects"}}},227:function(t,e,s){"use strict";s.r(e);var a=s(226),i=s.n(a),n={data:function(){return{skills:i.a}},methods:{starsClass:function(t,e){return e<=t?"star":"star-outline"}},computed:{}},r=s(29),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("Skills")]),s("h2",{staticClass:"subtitle"},[t._v("List is not comprehensive")]),s("div",{staticClass:"columns is-multiline"},t._l(t.skills,(function(e){return s("div",{key:e.name,staticClass:"column is-narrow"},[s("div",{staticClass:"card"},[s("header",{staticClass:"card-header"},[s("p",{staticClass:"card-header-title"},[s("b-taglist",{staticClass:"is-large",attrs:{attached:""}},[s("b-tag",[s("b-icon",{attrs:{icon:e.icon,size:"is-medium",type:e.iconType||"is-success"}})],1),s("b-tag",{attrs:{type:e.tagType||"is-success"}},[t._v(t._s(e.name))])],1)],1)]),s("div",{staticClass:"card-content"},[s("div",{staticClass:"content"},[s("b",[t._v("Skill: ")]),t._l(5,(function(a){return s("b-icon",{key:a,attrs:{icon:t.starsClass(e.stars,a),size:"is-small"}})})),s("p",[t._v(t._s(e.description))])],2)])])])})),0)])}),[],!1,null,null,null).exports,o={components:{Layout:s(94).a,Skills:l}},c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{attrs:{title:"David Li Portfolio"}},[s("br"),s("br"),s("Skills"),s("br"),s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("Gridsome")]),s("h2",{staticClass:"subtitle"},[t._v("Steps to get started")])]),s("hr"),s("br"),s("div",{staticClass:"container"},[s("b-steps",{model:{value:t.activeStep,callback:function(e){t.activeStep=e},expression:"activeStep"}},[s("b-step-item",{attrs:{label:"Installation",icon:"npm"}},[s("ul",[s("li",[t._v(" Install gridsome by running "),s("i",[t._v(" npm install -g gridsome ")])]),s("li",[t._v(" Then clone this repo by running "),s("i",[t._v(" git clone https://github.com/FriendlyUser/gridsome-starter-buefy.git")])])])]),s("b-step-item",{attrs:{label:"Configuration",icon:"web"}},[s("ul",[s("li",[t._v(" Update "),s("i",[t._v("gridsome.config.js")]),t._v(" with unique site name and hosting details. ")]),s("li",[t._v(" Change formspree to use your personal email address. ")])])]),s("b-step-item",{attrs:{label:"Deployment",icon:"azure"}},[t._v("\n      Deployment can be handled using azure pipelines, additionally considering adding more customization.\n    ")])],1)],1),s("div",{staticClass:"container"},[s("h3",{staticClass:"title"},[t._v("Contact Me")]),s("section",[s("form",{attrs:{action:"https://formspree.io/davidli012345@gmail.com",method:"POST"}},[s("b-field",{attrs:{horizontal:"",label:"Subject",type:"is-danger",message:"Please enter a subject"}},[s("b-input",{attrs:{name:"subject",expanded:""}})],1),s("b-field",{attrs:{horizontal:"",label:"From"}},[s("b-input",{attrs:{name:"name",placeholder:"Name",expanded:""}}),s("b-input",{attrs:{name:"email",type:"email",placeholder:"nobody@nowhere.com",expanded:""}})],1),s("b-field",{attrs:{horizontal:"",label:"Topic"}},[s("b-select",{attrs:{placeholder:"Select a topic"}},[s("option",{attrs:{value:"1"}},[t._v("Bulma")]),s("option",{attrs:{value:"2"}},[t._v("Vue.js")]),s("option",{attrs:{value:"3"}},[t._v("Buefy")])])],1),s("b-field",{attrs:{horizontal:"",label:"Message"}},[s("b-input",{attrs:{type:"textarea",name:"text"}})],1),s("b-field",{attrs:{horizontal:""}},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary"},[t._v("\n              Send message\n            ")])])]),[s("b-field",{attrs:{label:"Select Ya date"}},[s("b-datepicker",{attrs:{placeholder:"Type or select a date...",icon:"calendar-today",editable:""}})],1)]],2)])]),s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[t._v("Gridsome Starter Buefy")]),t._v(" by "),s("a",{attrs:{href:"https://FriendlyUser.github.io"}},[t._v("David Li")]),t._v(". The source code is licensed\n      "),s("a",{attrs:{href:"http://opensource.org/licenses/mit-license.php"}},[t._v("MIT")]),t._v(". The website content\n      is licensed "),s("a",{attrs:{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"}},[t._v("CC BY NC SA 4.0")]),t._v(".\n    ")])])])],1)}),[],!1,null,null,null);e.default=c.exports},228:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{message:"Under Construction"}}},i=(s(225),s(29)),n=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero is-fullheight is-dark is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-huge-title"},[this._v(this._s(this.message))]),e("h2",{staticClass:"subtitle is-huge-subtitle"},[this._v("\n          👷‍♂️ 🛠️ 🚧 🚧  🛠️👷‍♀️\n      ")])])])])}),[],!1,null,"2f2e5598",null);e.default=n.exports},231:function(t,e,s){"use strict";s.r(e);var a=s(228),i={components:{Demo:s(227).default,UnderConstruction:a.default}},n=s(29),r=Object(n.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("UnderConstruction")],1)}),[],!1,null,null,null);e.default=r.exports}}]);