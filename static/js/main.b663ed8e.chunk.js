(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(e,t,a){e.exports=a(67)},43:function(e,t,a){},44:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(32),s=a.n(o),r=(a(43),a(33)),l=a(15),c=a(6),u=a(7),d=a(9),m=a(8),h=a(10),p=(a(44),a(11)),g=a(12),v=a(18),f=a.n(v),w=a(34),b=a(16),y=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).isRented=function(){console.log(e.props.m.newMovie),!0===e.props.m.newMovie&&(console.log("kjgkbkjbkjbkjkjbkjb"),e.setState({notNewMovie:!e.state.notNewMovie},function(){console.log(this.state.notNewMovie)})),e.props.isRented(e.props.m)},e.state={notNewMovie:!1},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.m;return i.a.createElement("div",null,i.a.createElement("h1",null,e.title),i.a.createElement(p.b,{to:"/Moveis/".concat(e.id)},i.a.createElement("img",{class:"img",src:e.img,alt:e.title,style:{width:"375px"}})),i.a.createElement("br",null),this.props.m.newMovie?i.a.createElement("a",{onClick:this.isRented}," ",!1!==this.state.notNewMovie?i.a.createElement("h1",null,"-"):i.a.createElement("h1",null,"+")," "):i.a.createElement("a",{onClick:this.isRented}," ",e.isRented?i.a.createElement("h1",null,"-"):i.a.createElement("h1",null,"+")," "))}}]),t}(n.Component),j=a(37),S=a.n(j),k=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).updateTestText=function(t){var a=t.target.name,n=t.target.value;console.log(typeof n),"string"===typeof n&&e.setState(Object(b.a)({},a,n),Object(w.a)(f.a.mark(function e(){var t,i,o=this;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("testText"!==a){e.next=4;break}this.setState({sarchMoveis:this.props.movies.filter(function(e){return e.title.includes(o.state.testText)})}),e.next=12;break;case 4:if(""===n){e.next=12;break}return e.next=7,S.a.get("https://www.omdbapi.com/?t=".concat(n,"+&apikey=67c20ef2&/"));case 7:t=e.sent,console.log(t.data),i={price:5*(Math.floor(7*Math.random())+1)+5,id:this.props.movies.length,isRented:!1,title:t.data.Title,year:t.data.Year,img:t.data.Poster,descrShort:t.data.Plot,newMovie:!0},this.setState({newMovie:i}),console.log(i);case 12:case"end":return e.stop()}},e,this)}))),""===n&&e.setState({sarchMoveis:void 0,newMovie:void 0})},e.sarchMoveis=function(){e.setState({sarchMoveis:e.props.movies})},e.state={},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this;return e=void 0===this.state.sarchMoveis?this.props.movies:this.state.sarchMoveis,i.a.createElement("div",null,i.a.createElement("input",{name:"testText",type:"text",value:this.state.testText,onChange:this.updateTestText,placeholder:"Search form your movies"}),i.a.createElement("input",{name:"testText1",type:"text",value:this.state.testText1,onChange:this.updateTestText,placeholder:"Search for new movie"}),i.a.createElement("h1",null,this.state.newMovie?i.a.createElement("div",null,"   New Movie :",i.a.createElement(y,{m:this.state.newMovie,isRented:this.props.addNewMovie})):null,void 0!==e.filter(function(e){return!0===e.isRented})[0]?"Rented :":null,e.filter(function(e){return!0===e.isRented}).map(function(e){return i.a.createElement(y,{m:e,isRented:t.props.isRented})}),void 0!==e.filter(function(e){return!1===e.isRented})[0]?"Movies :":null,e.filter(function(e){return!1===e.isRented}).map(function(e){return i.a.createElement(y,{m:e,isRented:t.props.isRented})})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).localStorage=function(e){var t=e.target.text;if(window.localStorage.setItem("now",t),null===window.localStorage.getItem(t)){var n=a.props.users.find(function(e){return e.name===t});window.localStorage.setItem(t,JSON.stringify(n)),a.localStorage(e)}else{var i=JSON.parse(window.localStorage[t]);a.props.pushNewUser(i)}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h1",null,"Reflix"),i.a.createElement("h1",null,"who's watching?"),i.a.createElement("div",{id:"users"},this.props.users.map(function(t){return i.a.createElement("h3",{className:t.name}," ",i.a.createElement("br",null)," ",i.a.createElement(p.b,{onClick:e.localStorage,to:"/Catalog"},t.name))})))}}]),t}(n.Component),R=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log(this.props.match.params.id);var e=this.props.match.params.id,t=this.props.movies.find(function(t){return t.id===e});return i.a.createElement("div",null,i.a.createElement("h1",null,t.title),i.a.createElement("img",{className:"img",src:t.img,alt:"",style:{width:"375px"}}),i.a.createElement("br",null),i.a.createElement("div",{className:"year"}," ",t.year),i.a.createElement("a",null,t.descrShort))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).pushNewUser=function(t){e.setState({Budget:t.Budget},function(){var e=Object(l.a)(this.state.users),a=Object(l.a)(this.state.movies);a.map(function(e){return e.isRented=!1}),t.isRented.map(function(e){return a[e]?a[e].isRented=!0:console.log("gdfg")}),this.setState({movies:a},function(){}),this.setState({users:e})})},e.isRented=function(t){t=t.id;var a=Object(l.a)(e.state.movies),n=e.state.Budget;void 0!==a[t].isRented&&!1===a[t].isRented?e.state.Budget>=e.state.movies.find(function(e){return e.id===t}).price?(a[t].isRented=!0,n-=e.state.movies.find(function(e){return e.id===t}).price,e.setState({movies:a,Budget:n},function(){if("catlog"!==localStorage.getItem("now")){var e=[];a.filter(function(e){return!0===e.isRented}).map(function(t){return e.push(t.id)});var t=localStorage.getItem("now"),i=JSON.parse(localStorage.getItem(t));i.isRented=e,i.Budget=n,window.localStorage.setItem(t,JSON.stringify(i))}})):alert("you can't aport to buy ".concat(a[t].title," becuse you have only ").concat(e.state.Budget,"$ and it Cost ").concat(a[t].price,"$")):(a[t].isRented=!1,n+=e.state.movies.find(function(e){return e.id===t}).price,e.setState({movies:a,Budget:n},function(){if("catlog"!==localStorage.getItem("now")){var e=[];a.filter(function(e){return!0===e.isRented}).map(function(t){return e.push(t.id)});var t=localStorage.getItem("now"),i=JSON.parse(localStorage.getItem(t));i.isRented=e,i.Budget=n,window.localStorage.setItem(t,JSON.stringify(i))}}))},e.catalog=function(){window.localStorage.setItem("now","catlog")},e.componentWillMount=function(){e.catalog()},e.addNewMovie=function(t){var a=Object(r.a)({},t),n=Object(l.a)(e.state.movies);console.log(t.id,n.length,void 0!==n.filter(function(e){return e.id===t.id})[0]),void 0!==n.filter(function(e){return e.id===t.id})[0]?(console.log("dflsnakjfbksjdabkj"),n.splice(t.id,1)):(a.newMovie=!1,n.push(a),console.log(n)),e.setState({movies:n}),console.log(e.state.movies)},e.state={users:[{id:0,name:"mor",color:"red",isRented:[0,1,2],Budget:10},{id:1,name:"bar",color:"green",isRented:[1],Budget:200},{id:2,name:"roni",color:"blue",isRented:[0,2],Budget:100},{id:3,name:"maya",color:"yellow",isRented:[0],Budget:100}],movies:[{price:20,id:0,isRented:!1,title:"Tarzan",year:1999,img:"https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811",descrShort:"Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out."},{price:35,id:1,isRented:!1,title:"The Lion King",img:"https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg",year:1994,descrShort:"A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies."},{price:15,id:2,isRented:!1,title:"Beauty and the Beast",year:1991,img:"https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg",descrShort:"A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself."},{price:20,id:3,isRented:!1,title:"Beauty and the Beast",year:2016,img:"https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg",descrShort:"Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation."},{price:10,id:4,isRented:!1,title:"The Sword in the Stone",year:1963,img:"https://musicart.xboxlive.com/7/232a3700-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",descrShort:"Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means."},{price:15,id:5,isRented:!1,title:"Madagascar",year:2005,img:"https://1.bp.blogspot.com/-b27jTqRUeFo/V_dkWR0V7pI/AAAAAAAAAFY/fu0o8yI6pSoC24PNqgY4QLEQ4BpU8ecUACLcB/s1600/download.jpg",descrShort:"A group of animals who have spent all their life in a New York zoo end up in the jungles of Madagascar, and must adjust to living in the wild.."}],Budget:50,isRented:[]},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(p.a,null,i.a.createElement("div",null,i.a.createElement(p.b,{to:"/"},"Home  || "),i.a.createElement(p.b,{to:"/Catalog",onClick:this.catalog},"Catalog "),i.a.createElement("div",{className:"Budget"},"Budget: ",this.state.Budget,"$"),i.a.createElement(g.a,{path:"/",exact:!0,render:function(){return i.a.createElement(E,{users:e.state.users,movies:e.state.movies,pushNewUser:e.pushNewUser})}}),i.a.createElement(g.a,{path:"/Catalog",exact:!0,render:function(){return i.a.createElement(k,{addNewMovie:e.addNewMovie,movies:e.state.movies,isRented:e.isRented})}}),i.a.createElement(g.a,{path:"/Moveis/:id",exact:!0,render:function(t){var a=t.match;return e.state.movies.find(function(e){return e.id===a.params.id})?i.a.createElement(R,{match:a,movies:e.state.movies}):i.a.createElement(k,null)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.b663ed8e.chunk.js.map