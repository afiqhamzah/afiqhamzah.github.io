(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{362:function(t){t.exports=JSON.parse('{"name":"Muhammad Afiq bin Hamzah","address":"Lot 2511, Jalan Merak, Taman Guru, Pintu Geng, 15100 Kota Bharu","phone_no":"+60195025280","email":"afiqhamzah8@gmail.com","github":"https://github.com/afiqhamzah"}')},363:function(t){t.exports=JSON.parse('{"university_name":"Universiti Malaysia Terengganu","university_address":"Kuala Nerus, Terengganu","major":"Software Engineering, BCompSc. (GPA: 3.23)","coursework":"Java Programming, Object Oriented Programming, Operating Systems, Networks, Software Testing","university_period":"2013 - 2016"}')},364:function(t){t.exports=JSON.parse('[{"id":1,"workplace":"Nazrol Tech Sdn. Bhd.","position":"Junior Software Developer","employment_period":"May 2017 - current","details":["Lead developer for e-Stok, an inventory system for Pusat Pungutan Zakat KL (PPZ)","Fullstack Developer for e-fem(eFirmaEjenMajikan), a biling/payment record management system for PPZ","Backend developer for MTEP, an expat skilled worker registration system","Fullstack Developer for eAkaun, an internal accounting system for PPZ"],"leveraged_knowledge":"in Laravel Framework, Vue.js Framework, javascript components"},{"id":2,"workplace":"BPTM/SUK/Kelantan","position":"Programmer (Intern)","employment_period":"Jul 2016 - Dec 2016","details":["Involve in debugging in e-Jejak, an internal HR information system for the state government of Kelantan","Initially design and develop GRACE, a cooperative system between Malaysian Productivity Company(MPC) and the Kelantan State Government to record and manage laws and acts"],"leveraged_knowledge":"in PHP, Laravel framework, Css, Bootstrap, Javascript, Jquery"}]')},365:function(t){t.exports=JSON.parse('{"proficient":": PHP(Laravel Framework), MYSQL, Linux, OSX, GIT, Bootstrap Framework","familiar":": Java, Oracle, Javascript, Vue.js, Docker"}')},369:function(t,e,a){},375:function(t,e,a){"use strict";var s=a(369);a.n(s).a},378:function(t,e,a){"use strict";a.r(e);var s=a(97),n=a(362),i={data:function(){return{mainInfo:n}}},o=a(16),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-one-third has-text-left"},[t._v(t._s(t.mainInfo.address))]),a("div",{staticClass:"column has-text-right"},[a("a",{attrs:{href:"tel:"+t.mainInfo.phone_no}},[t._v(t._s(t.mainInfo.phone_no))])])]),a("div",{staticClass:"columns has-text-centered"},[a("div",{staticClass:"column"},[a("span",{staticClass:"title"},[t._v(t._s(t.mainInfo.name))])])]),a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-left"},[a("a",{attrs:{href:"mailto:"+t.mainInfo.email}},[t._v(t._s(t.mainInfo.email))])]),a("div",{staticClass:"column has-text-right"},[a("a",{attrs:{href:t.mainInfo.github}},[t._v(t._s(t.mainInfo.github))])])])])}),[],!1,null,"be6494f4",null).exports,l=a(363),c={data:function(){return{education:l}}},u=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h1",{staticClass:"is-uppercase has-text-weight-bold"},[t._v("education")]),a("hr"),a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-weight-bold has-text-left"},[t._v(t._s(t.education.university_address))]),a("div",{staticClass:"column has-text-weight-bold has-text-centered"},[t._v(t._s(t.education.university_name))]),a("div",{staticClass:"column has-text-weight-bold has-text-right"},[t._v(t._s(t.education.university_period))])]),a("div",[a("span",{staticClass:"has-text-weight-bold"},[t._v("Education Major: ")]),t._v(t._s(t.education.major)+"\n  ")]),a("div",[a("span",{staticClass:"has-text-weight-bold"},[t._v("Education Coursework: ")]),t._v(t._s(t.education.coursework)+"\n  ")])])}),[],!1,null,"9daa4d5c",null).exports,d=a(364),m={data:function(){return{employments:d}},methods:{isNewPage:function(t){if(1===t)return"html2pdf__page-break"}}},v=(a(375),Object(o.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h1",{staticClass:"is-uppercase has-text-weight-bold"},[t._v("employment")]),a("hr"),t._l(t.employments,(function(e){return a("div",{key:e.id},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column has-text-weight-bold has-text-left"},[t._v(t._s(e.position))]),a("div",{staticClass:"column has-text-weight-bold has-text-centered"},[t._v(t._s(e.workplace))]),a("div",{staticClass:"column has-text-weight-bold has-text-right"},[t._v(t._s(e.employment_period))])]),a("div",{staticClass:"content",class:t.isNewPage(e.id)},[a("ul",[t._l(e.details,(function(e){return a("li",[t._v(t._s(e))])})),a("li",[a("span",{staticClass:"underlined has-text-weight-bold"},[t._v("Leverage knowledge")]),t._v("\n          "+t._s(e.leveraged_knowledge)+"\n        ")])],2),a("br"),a("br")])])}))],2)}),[],!1,null,"fb8a7304",null).exports),h=a(365),p={data:function(){return{skill:h}}},f=Object(o.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("h1",{staticClass:"is-uppercase has-text-weight-bold"},[t._v("skills")]),a("hr"),a("div",[a("span",{staticClass:"has-text-weight-bold"},[t._v("Proficient ")]),t._v(t._s(t.skill.proficient)+"\n  ")]),a("div",[a("span",{staticClass:"has-text-weight-bold"},[t._v("Familiar ")]),t._v(t._s(t.skill.familiar)+"\n  ")])])}),[],!1,null,"8c50647c",null).exports,_={components:{layout:s.a,mainInfo:r,education:u,employment:v,skill:f},data:function(){return{target:"target_pdf"}}},g=Object(o.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-hidden-touch"},[e("layout",{attrs:{target:this.target}},[e("div",{staticClass:"container is-fluid",attrs:{id:"target_pdf"}},[e("main-info"),e("education"),e("employment"),e("skill")],1)])],1)}),[],!1,null,"a9ba47ee",null);e.default=g.exports}}]);