(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},28:function(e,t,a){},29:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(4),l=a.n(r),o=(a(28),a(3)),i=a(5),c=a(6),m=a(10),p=a(8),h=a(7),d=a(9),u=(a(29),a(21)),v=a(2),g=a.n(v),f=a(20),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).mounted=!1,a.state={error:!1,parkCodes:[],items:[],chosenState:a.props.chosenState,nameQuery:a.props.nameQuery,isLoaded:!1,vc:[],cg:[],alerts:[],events:[],news:[],lessons:[],people:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0;var t="https://developer.nps.gov/api/v1/parks?q="+this.state.nameQuery+"&stateCode="+this.state.chosenState+"&api_key=mxhnif0llUeKpr38jW6UbEdpbCEG0z0ntWjMQ1Ad";g.a.get(t).then(function(t){e.mounted&&(e.setState({items:t.data}),e.getInformation())})}},{key:"getInformation",value:function(){var e=this,t=this.state.items.total;if(this.state.items.total>0){for(var a=["https://developer.nps.gov/api/v1/visitorcenters?parkCode=","https://developer.nps.gov/api/v1/campgrounds?parkCode=","https://developer.nps.gov/api/v1/alerts?parkCode=","https://developer.nps.gov/api/v1/events?parkCode=","https://developer.nps.gov/api/v1/newsreleases?parkCode=","https://developer.nps.gov/api/v1/lessonplans?parkCode=","https://developer.nps.gov/api/v1/people?parkCode="],n=[],s=0;s<this.state.items.total;s++){var r=this.state.items.data[s].parkCode;n.push(r);for(var l=0;l<a.length;l++)a[l]+=r,a[l]+=s+1<t?"%2C":"&api_key=mxhnif0llUeKpr38jW6UbEdpbCEG0z0ntWjMQ1Ad"}this.setState({parkCodes:n}),Promise.all([g.a.get(a[0]),g.a.get(a[1]),g.a.get(a[2]),g.a.get(a[3]),g.a.get(a[4]),g.a.get(a[5]),g.a.get(a[6])]).then(function(t){var a=Object(u.a)(t,7),n=a[0],s=a[1],r=a[2],l=a[3],o=a[4],i=a[5],c=a[6];e.setState({vc:n.data.data,cg:s.data.data,alerts:r.data.data,events:l.data.data,news:o.data.data,lessons:i.data.data,people:c.data.data,isLoaded:!0})})}}},{key:"extractAll",value:function(){var e=this.state.parkCodes,t=[];console.log(this.state.people);for(var a=0;a<e.length;a++){t.push({parkCode:e[a]}),t[a].latLong="n/a",t[a].name="",t[a].visitorCenter="n/a",t[a].campground="n/a",t[a].alerts="n/a",t[a].events="n/a",t[a].news="n/a",t[a].lessons="n/a",t[a].people="n/a";for(var n=0;n<this.state.items.total;n++)if(this.state.items.data[n].parkCode===t[a].parkCode){t[a].latLong=this.state.items.data[n].latLong,t[a].name=this.state.items.data[n].name;break}for(var s=0;s<this.state.vc.length;s++)if(this.state.vc[s].parkCode===t[a].parkCode){t[a].visitorCenter=this.state.vc[s].name;break}for(var r=0;r<this.state.cg.length;r++)if(this.state.cg[r].parkCode===t[a].parkCode){t[a].campground=this.state.cg[r].name;break}for(var l=0;l<this.state.alerts.length;l++)if(this.state.alerts[l].parkCode===t[a].parkCode){t[a].alerts=this.state.alerts[l].title;break}for(var o=0;o<this.state.events.length;o++)if(this.state.events[o].sitecode===t[a].parkCode){t[a].events=this.state.events[o].title;break}for(var i=0;i<this.state.news.length;i++)if(this.state.news[i].parkCode===t[a].parkCode){t[a].news=this.state.news[i].title;break}for(var c=0;c<this.state.lessons.length;c++)if(this.state.lessons[c].parks[0]===t[a].parkCode){t[a].lessons=this.state.lessons[c].title;break}for(var m=0;m<this.state.people.length;m++)if(this.state.people[m].parkCode===t[a].parkCode){t[a].people=this.state.people[m].title;break}}return t}},{key:"render",value:function(){var e;if(this.state.isLoaded&this.state.items.total>0){var t=this.extractAll();console.log(t),e=s.a.createElement("div",{className:"d-flex p-2"},s.a.createElement("button",{className:"btn btn-primary",onClick:this.props.newSearch},"New Search"),t.map(function(e,t){return s.a.createElement("div",{key:t,className:"card text-center"},s.a.createElement("img",{className:"card-img-top",src:"https://us.123rf.com/450wm/yupiramos/yupiramos1804/yupiramos180403918/98744014-stock-vector-mountains-and-lake-nature-scene-vector-illustration-design.jpg?ver=6",alt:"Card cap"}),s.a.createElement("div",{className:"card-body"},s.a.createElement(f.a,{trigger:s.a.createElement("button",{className:"button"},e.name),modal:!0,closeOnDocumentClick:!0},s.a.createElement("h2",null,e.name),s.a.createElement("p",null,s.a.createElement("strong",null,"Visitor Center:")," ",e.visitorCenter),s.a.createElement("p",null,s.a.createElement("strong",null,e.latLong)," "),s.a.createElement("p",null,s.a.createElement("strong",null,"Nearest Campground: "),e.campground),s.a.createElement("p",null,s.a.createElement("strong",null,"Alerts: "),e.alerts),s.a.createElement("p",null,s.a.createElement("strong",null,"Events: "),e.events),s.a.createElement("p",null,s.a.createElement("strong",null,"News: "),e.news),s.a.createElement("p",null,s.a.createElement("strong",null,"Lesson Plans: "),e.lessons),s.a.createElement("p",null,s.a.createElement("strong",null,"Relevant People: "),e.people),s.a.createElement("span",null," ",s.a.createElement("em",null,"Click Outside to Close")))))}))}else e=this.state.isLoaded?s.a.createElement("h1",null,"None found"):s.a.createElement("h1",{className:"loading"},"Loading.....");return s.a.createElement(s.a.Fragment,null,e)}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).states=["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","LOR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"],a.handleSubmit=function(e){e.preventDefault(),a.setState({isSearched:!0})},a.handleNameChange=function(e){var t;e.preventDefault(),a.setState((t={},Object(o.a)(t,e.target.id,e.target.value),Object(o.a)(t,"isSearched",!1),t))},a.handleStateChange=function(e){var t;e.preventDefault(),a.setState((t={},Object(o.a)(t,e.target.id,e.target.value),Object(o.a)(t,"isSearched",!1),t))},a.state={nameQuery:null,chosenState:"AL",isSearched:!1},a.newSearch=a.newSearch.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"newSearch",value:function(e){this.setState({isSearched:!1})}},{key:"render",value:function(){var e;return e=this.state.isSearched?s.a.createElement(k,{nameQuery:this.state.nameQuery,chosenState:this.state.chosenState,newSearch:this.newSearch}):null,s.a.createElement(s.a.Fragment,null,this.state.isSearched?null:s.a.createElement("div",{className:"container-fluid ","style-prop-object":"height:100vh; background-size: cover; background-image: url(https://www.naturalworldsafaris.com/~/media/images/wildlife/african-elephant/kenya-wildlife-elephant-copyright-will-bolsover.jpg);"},s.a.createElement("div",{className:"row justify-content-center align-items-center d-flex text-center h-100 mt-5 mb-5 b-primary"},s.a.createElement("form",{className:"mr-1",onSubmit:this.handleSubmit},s.a.createElement("h1",null,"National Park Services"),s.a.createElement("h3",null,"Search for a Park"),s.a.createElement("div",{className:"form-group "},s.a.createElement("label",{htmlFor:"nameID"}),s.a.createElement("input",{type:"text",className:"form-control",id:"nameQuery",placeholder:"Ex: Zion National Park",onChange:this.handleNameChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"stateID"}," ",s.a.createElement("em",null,"in which state?")," "),s.a.createElement("select",{className:"form-control",id:"chosenState",onChange:this.handleStateChange},this.states.map(function(e){return s.a.createElement("option",{key:e},e)}))),s.a.createElement("button",{className:"btn btn-secondary bg-warning "},"Submit")))),e)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);l.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.6bc8aa65.chunk.js.map