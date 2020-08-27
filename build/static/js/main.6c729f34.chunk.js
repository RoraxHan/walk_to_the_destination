(this.webpackJsonpwalk_to_the_destination=this.webpackJsonpwalk_to_the_destination||[]).push([[0],[,function(e,t){e.exports={NODE_UNVISITED:0,NODE_VISITED:1,NODE_IS_WALL:-1,NODE_IS_SOURCE:10,NODE_IS_TARGET:100,NODE_FALLS_IN_PATH:50,NODE_IS_VISITING:2}},,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),l=a.n(i),o=(a(14),a(2)),r=a(3),c=a(5),u=a(4),d=(a(15),a(8)),m=a.n(d),h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={description:e.getSelectedOptionDescription(e.props.selectedOption,e.props.options)},e.handleHover=function(t){e.setState({description:t.description})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.options,n=t.selectedOption,i=t.onChanged,l=void 0!==a[0].description,o=l?"30%":"100%",r=this.getSelectedOption(n,a);return s.a.createElement("div",{className:"options-container"},s.a.createElement("div",{className:"option-names-container",style:{width:o}},a.map((function(t){return s.a.createElement("button",{key:t.id,style:{textAlign:l?"right":"center"},className:t.id===n?"active":"",onMouseEnter:function(){return e.handleHover(t)},onMouseLeave:function(){return e.handleHover(r)},onClick:function(){return i(t.id,void 0===t.speed?null:t.speed)}},t.name)}))),l?s.a.createElement("div",{className:"option-description-container",style:{width:"60%",left:o}},this.state.description):null)}},{key:"getSelectedOption",value:function(e,t){return t.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedOptionDescription",value:function(e,t){var a=this.getSelectedOption(e,t);return void 0===a?null:a.description}}]),a}(n.Component),p=(a(16),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={algorithms:[{id:"algo-dijkstra",name:"Dijkstra's",description:s.a.createElement("div",null,s.a.createElement("p",null,"Let the node at which we are starting be called the",s.a.createElement("b",null,"initial node"),". Let the",s.a.createElement("b",null,"distance of node",s.a.createElement("i",null,"Y")),"be the distance from the ",s.a.createElement("b",null," initial node"),"to",s.a.createElement("i",null,"Y"),". Dijkstra's algorithm will assign some initial distance values and will try to improve them step by step."),s.a.createElement("ol",null,s.a.createElement("li",null,"Mark all nodes unvisited. Create a set of all the unvisited nodes called the",s.a.createElement("i",null,"unvisited set"),"."),s.a.createElement("li",null,"Assign to every node a tentative distance value: set it to zero for our initial node and to infinity for all other nodes. Set the initial node as current."),s.a.createElement("li",null,"For the current node, consider all of its unvisited neighbours and calculate their",s.a.createElement("i",null,"tentative"),"distances through the current node. Compare the newly calculated",s.a.createElement("i",null,"tentative"),"distance to the current assigned value and assign the smaller one. For example, if the current node",s.a.createElement("i",null,"A"),"is marked with a distance of 6, and the edge connecting it with a neighbour",s.a.createElement("i",null,"B"),"has length 2, then the distance to",s.a.createElement("i",null,"B"),"through",s.a.createElement("i",null,"A"),"will be 6 + 2 = 8. If B was previously marked with a distance greater than 8 then change it to 8. Otherwise, the current value will be kept."),s.a.createElement("li",null,"When we are done considering all of the unvisited neighbours of the current node, mark the current node as visited and remove it from the",s.a.createElement("i",null,"unvisited set"),". A visited node will never be checked again."),s.a.createElement("li",null,"If the destination node has been marked visited (when planning a route between two specific nodes) or if the smallest tentative distance among the nodes in the",s.a.createElement("i",null,"unvisited set"),"is infinity (when planning a complete traversal; occurs when there is no connection between the initial node and remaining unvisited nodes), then stop. The algorithm has finished."),s.a.createElement("li",null,'Otherwise, select the unvisited node that is marked with the smallest tentative distance, set it as the new "current node", and go back to step 3.')),s.a.createElement("p",null,'When planning a route, it is actually not necessary to wait until the destination node is "visited" as above: the algorithm can stop once the destination node has the smallest tentative distance among all "unvisited" nodes (and thus could be selected as the next "current").'))},{id:"algo-a*",name:"A*",description:s.a.createElement("div",null,s.a.createElement("p",null,"We create two lists \u2013 ",s.a.createElement("i",null,"Open List")," and"," ",s.a.createElement("i",null,"Closed List"),"(just like Dijkstra Algorithm)"),s.a.createElement("p",null,"1. Initialize the open list",s.a.createElement("br",null),"2. Initialize the closed list put the starting node on the open list (you can leave its"," ",s.a.createElement("strong",null,"f")," at zero)",s.a.createElement("br",null),"3. while the open list is not empty ",s.a.createElement("br",null),"a) find the node with the least ",s.a.createElement("strong",null,"f")," ",'on the open list, call it "q" ',s.a.createElement("br",null),"b) pop q off the open list ",s.a.createElement("br",null),"c) generate q's 8 successors and set their parents to q ",s.a.createElement("br",null),"d) for each successor ",s.a.createElement("br",null),"i) if successor is the goal, stop search successor.",s.a.createElement("strong",null,"g")," = q.",s.a.createElement("strong",null,"g")," + distance between successor and q successor.",s.a.createElement("strong",null,"h")," ","= distance from goal to successor (This can be done using many ways, we will discuss three heuristics- Manhattan, Diagonal and Euclidean Heuristics) successor.",s.a.createElement("strong",null,"f")," = successor.",s.a.createElement("strong",null,"g")," + successor.",s.a.createElement("strong",null,"h"),s.a.createElement("br",null),"ii) if a node with the same position as successor is in the OPEN list which has a lower"," ",s.a.createElement("strong",null,"f")," than successor, skip this successor ",s.a.createElement("br",null),"iii) if a node with the same position as successor is in the CLOSED list which has a lower"," ",s.a.createElement("strong",null,"f")," than successor, skip this successor otherwise, add the node to the open list end (for loop) e) push q on the closed list end (while loop)"," "))},{id:"algo-greedy",name:"Greedy",description:s.a.createElement("div",null,s.a.createElement("p",null,"A",s.a.createElement("b",null,"greedy algorithm"),"is any algorithm that follows the problem-solving heuristic of making the locally optimal choice at each stage. In many problems, a greedy strategy does not usually produce an optimal solution, but nonetheless a greedy heuristic may yield locally optimal solutions that approximate a globally optimal solution in a reasonable amount of time."),s.a.createElement("p",null,"For example, a greedy strategy for the",s.a.createElement("a",{href:"/wiki/Travelling_salesman_problem",title:"Travelling salesman problem"},"travelling salesman problem"),'(which is of a high computational complexity) is the following heuristic: "At each step of the journey, visit the nearest unvisited city." This heuristic does not intend to find a best solution, but it terminates in a reasonable number of steps; finding an optimal solution to such a complex problem typically requires unreasonably many steps. In mathematical optimization, greedy algorithms optimally solve combinatorial problems having the properties of',s.a.createElement("a",{href:"/wiki/Matroid",title:"Matroid"},"matroids"),", and give constant-factor approximations to optimization problems with submodular structure."))}],mazes:[{id:"maze-none",name:"Create"},{id:"maze-recursive-division",name:"Recursive Division"}],speeds:[{id:"speed-faster",name:"Faster",speed:15},{id:"speed-fast",name:"Fast",speed:20},{id:"speed-normal",name:"Normal",speed:25},{id:"speed-slow",name:"Slow",speed:30},{id:"speed-slower",name:"Slower",speed:35}]},e}return Object(r.a)(a,[{key:"showAlgorithmOptionsContainer",value:function(){document.querySelector(".algorithm-options-container").classList.add("show")}},{key:"showSpeedOptionsContainer",value:function(){document.querySelector(".speed-options-container").classList.add("show")}},{key:"render",value:function(){var e=this.props,t=e.selectedAlgorithmId,a=e.selectedSpeedId,n=e.onAlgorithmChanged,i=e.onSpeedChanged;return s.a.createElement(s.a.Fragment,null,s.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-custom navbar-dark text-light pl-1"},s.a.createElement("span",{className:"navbar-brand mb-0"},s.a.createElement("img",{src:m.a,width:"30",height:"30",className:"d-inline-block align-top",alt:"",loading:"lazy"}),s.a.createElement("span",null,"Walk to the Destination")),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},s.a.createElement("ul",{className:"navbar-nav"},s.a.createElement("li",{className:"nav-item active ml-2"},s.a.createElement("button",{className:"btn-algorithm my-1",onClick:this.showAlgorithmOptionsContainer},s.a.createElement("span",null,this.getSelectedAlgorithm(t).name)," ","Algorithm",s.a.createElement("i",{className:"fas fa-check-double ml-1"}))),s.a.createElement("li",{className:"nav-item active ml-2"},s.a.createElement("button",{className:"btn-speed my-1",onClick:this.showSpeedOptionsContainer},"Speed :"," ",s.a.createElement("span",null,this.getSelectedSpeed(a).name)," ",s.a.createElement("i",{className:"fas fa-tachometer-alt"})))))),s.a.createElement("div",{className:"algorithm-options-container"},s.a.createElement(h,{options:this.state.algorithms,selectedOption:t,onChanged:n})),s.a.createElement("div",{className:"speed-options-container"},s.a.createElement(h,{options:this.state.speeds,selectedOption:a,onChanged:i})))}},{key:"getSelectedAlgorithm",value:function(e){return this.state.algorithms.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedMaze",value:function(e){return this.state.mazes.filter((function(t){return t.id===e}))[0]}},{key:"getSelectedSpeed",value:function(e){return this.state.speeds.filter((function(t){return t.id===e}))[0]}}]),a}(n.Component)),g=(a(20),a(21),a(1)),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.nodeState,a=e.position,n=e.onMouseDown,i=e.onMouseUp,l=e.onMouseEnter,o=e.onMouseLeave;return s.a.createElement("div",{className:this.getNodeStateClass(t),"data-x":a.x,"data-y":a.y,onMouseDown:function(){return n(t,a)},onMouseUp:function(){return i(t,a)},onMouseEnter:function(){return l(t,a)},onMouseLeave:function(){return o(t,a)}})}},{key:"getNodeStateClass",value:function(e){var t="node node-";switch(e){case g.NODE_UNVISITED:t+="unvisited";break;case g.NODE_VISITED:t+="visited";break;case g.NODE_IS_WALL:t+="wall";break;case g.NODE_IS_SOURCE:t+="source";break;case g.NODE_IS_TARGET:t+="target";break;default:t+="unvisited"}return t}}]),a}(n.Component);var f=function(e,t){this.x=e,this.y=t},v=a(1),w=function(){return s.a.createElement("section",{className:"legend-container"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(E,{nodeState:v.NODE_UNVISITED,position:new f(-1,-1)}),s.a.createElement("span",{className:"ml-2"},"Unvisited"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(E,{nodeState:v.NODE_VISITED,position:new f(-1,-1)}),s.a.createElement("span",{className:"ml-2"},"Visited"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(E,{nodeState:v.NODE_IS_WALL,position:new f(-1,-1)}),s.a.createElement("span",{className:"ml-2"},"Wall"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(E,{nodeState:v.NODE_IS_SOURCE,position:new f(-1,-1)}),s.a.createElement("span",{className:"ml-2"},"Source"))),s.a.createElement("li",null,s.a.createElement("div",null,s.a.createElement(E,{nodeState:v.NODE_IS_TARGET,position:new f(-1,-1)}),s.a.createElement("span",{className:"ml-2"},"Target")))))},y=a(1),b=a.n(y),S=(a(22),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isMousePressed:!1,movingSource:!1,movingTarget:!1},e}return Object(r.a)(a,[{key:"handleMouseUp",value:function(e,t){this.setState({isMousePressed:!1}),e===b.a.NODE_IS_SOURCE?this.setState({movingSource:!1}):e===b.a.NODE_IS_TARGET&&this.setState({movingTarget:!1})}},{key:"handleMouseDown",value:function(e,t){this.setState({isMousePressed:!0}),console.log("(".concat(t.x,", ").concat(t.y,") : mouseDown | pressed=").concat(this.state.isMousePressed)),e===b.a.NODE_IS_SOURCE?this.setState({movingSource:!0}):e===b.a.NODE_IS_TARGET?this.setState({movingTarget:!0}):this.props.toggleWall(t)}},{key:"handleMouseEnter",value:function(e,t){this.state.isMousePressed&&(console.log("(".concat(t.x,", ").concat(t.y,") : mouseEnter | pressed=").concat(this.state.isMousePressed)),this.state.movingSource?this.props.setNodeAsSource(t):this.state.movingTarget?this.props.setNodeAsTarget(t):(console.log(t),this.props.toggleWall(t)))}},{key:"handleMouseLeave",value:function(e,t){}},{key:"decideNodeState",value:function(e,t,a,n,s){return e===a.x&&t===a.y?b.a.NODE_IS_SOURCE:e===n.x&&t===n.y?b.a.NODE_IS_TARGET:s.some((function(a){return a.x===e&&a.y===t}))?b.a.NODE_IS_WALL:b.a.NODE_UNVISITED}},{key:"render",value:function(){for(var e=this,t=this.props,a=t.rows,n=t.columns,i=t.source,l=t.target,o=t.walls,r=(window.innerWidth-20*n)/2,c=(window.innerHeight-190-20*a)/2,u=[],d=1;d<=a;d++)for(var m=1;m<=n;m++){var h="node-"+d+"-"+m,p=this.decideNodeState(d,m,i,l,o);u.push(s.a.createElement(E,{key:h,position:new f(d,m),id:h,nodeState:p,onMouseDown:function(t,a){return e.handleMouseDown(t,a)},onMouseUp:function(t,a){return e.handleMouseUp(t,a)},onMouseEnter:function(t,a){return e.handleMouseEnter(t,a)},onMouseLeave:function(t,a){return e.handleMouseLeave(t,a)}}))}return s.a.createElement("section",{className:"grid-container",style:{paddingTop:c,paddingRight:r,paddingBottom:c,paddingLeft:r}},u)}}]),a}(n.Component)),N=(a(23),function(e){var t=e.insights;return s.a.createElement("section",{className:"insights-container"},s.a.createElement("div",null,s.a.createElement("p",null,t)))}),O=(a(24),function(){return s.a.createElement("section",{className:"copyright-container"},s.a.createElement("div",{className:"github-links"},s.a.createElement("a",{href:"https://github.com/shantanu0323"},s.a.createElement("i",{className:"fab fa-github-square"}))),s.a.createElement("div",{className:"copyright"},"Made with ",s.a.createElement("i",{className:"fas fa-heart text-danger"})," by"," ",s.a.createElement("a",{href:"https://shantanu0323.github.io"},"Shantanu Pramanik")),s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://www.linkedin.com/in/shantanu-pramanik/"},s.a.createElement("i",{className:"fab fa-linkedin"})),s.a.createElement("a",{href:"https://www.facebook.com/shantanu.pramanik1"},s.a.createElement("i",{className:"fab fa-facebook-square"})),s.a.createElement("a",{href:"https://www.twitter.com/shantanu0323/"},s.a.createElement("i",{className:"fab fa-twitter-square"})),s.a.createElement("a",{href:"https://www.instagram.com/shantanu0323/"},s.a.createElement("i",{className:"fab fa-instagram-square"}))))}),k=(a(25),a(26),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={selectedAlgorithmId:"algo-dijkstra",selectedMazeId:"maze-recursive-division",selectedSpeedId:"speed-fast",speed:20,rows:0,columns:0,source:new f(-1,-1),target:new f(-1,-1),walls:[]},e.setAlgorithmId=function(t){e.setState({selectedAlgorithmId:t}),document.querySelector(".algorithm-options-container").classList.remove("show")},e.setMazeId=function(t){e.setState({selectedMazeId:t}),document.querySelector(".maze-options-container").classList.remove("show")},e.setSpeedId=function(t,a){e.setState({selectedSpeedId:t,speed:a}),document.querySelector(".speed-options-container").classList.remove("show")},e.setNodeAsSource=function(t){if(console.log("SOURCE: ".concat(t)),t.x!==e.state.target.x||t.y!==e.state.target.y){var a=e.state.walls;a.some((function(e){return e.x===t.x&&e.y===t.y}))&&(a=e.state.walls.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))),e.setState({source:t,walls:a})}},e.setNodeAsTarget=function(t){if(console.log("TARGET: ".concat(t)),t.x!==e.state.source.x||t.y!==e.state.source.y){var a=e.state.walls;a.some((function(e){return e.x===t.x&&e.y===t.y}))&&(a=e.state.walls.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))),e.setState({target:t,walls:a})}},e.toggleWall=function(t){console.log(t);var a=e.state.walls;a.some((function(e){return e.x===t.x&&e.y===t.y}))?(console.log("check"),a=a.filter((function(e){return!(e.x===t.x&&e.y===t.y)}))):a.push(t),e.setState({walls:a})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.crossOrigin="anonymous",e.src="https://kit.fontawesome.com/f7fe82406d.js",document.body.appendChild(e);var t=window.innerHeight-190,a=window.innerWidth,n=parseInt((t-40)/20),s=parseInt((a-40)/20),i=new f(parseInt(.1*n),parseInt(.1*s)),l=new f(parseInt(.9*n),parseInt(.9*s));this.setState({rows:n,columns:s,source:i,target:l})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,{selectedAlgorithmId:this.state.selectedAlgorithmId,selectedMazeId:this.state.selectedMazeId,selectedSpeedId:this.state.selectedSpeedId,onAlgorithmChanged:this.setAlgorithmId,onMazeChanged:this.setMazeId,onSpeedChanged:this.setSpeedId}),s.a.createElement(w,null),s.a.createElement(S,{rows:this.state.rows,columns:this.state.columns,source:this.state.source,target:this.state.target,walls:this.state.walls,setNodeAsSource:this.setNodeAsSource,setNodeAsTarget:this.setNodeAsTarget,toggleWall:this.toggleWall}),s.a.createElement(N,{insights:"Insights"}),s.a.createElement(O,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.Fragment,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.6c729f34.chunk.js.map