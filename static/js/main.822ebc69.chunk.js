(this["webpackJsonpgraph-algo-visualizer"]=this["webpackJsonpgraph-algo-visualizer"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a(3),i=(a(30),a(18)),u=a.n(i),s=(a(31),a(32),function(e,t){return{type:"SET_NODE_TYPE",node:e,nodeType:t}}),l=function(e){return{type:"SET_GRAPH_MODE",graphMode:e}},h=Object.freeze({START:"start",END:"end",WALL:"wall",WEIGHT:"weight"}),p=Object.freeze({DEFAULT:"default",START:"start",END:"end",WALL:"wall",TRAVERSED:"traversed",PATH:"path"}),d=a(4),f=a.n(d),m=a(6),b=a(1),E=a(7),g=a(5),w=a(2),A=(a(34),function(e){var t=e.row,a=e.col,o=e.weight,i=e.nodeType,u=Object(c.c)((function(e){return e.graph.graphMode})),l=Object(c.c)((function(e){return e.algorithm.isRunning})),d=Object(c.b)(),f=Object(r.useCallback)((function(){var e;if(u===h.WEIGHT)if(i!==p.WALL&&i!==p.START&&i!==p.END){var r=o;do{if(null===(r=prompt("Enter a positive number.")))return;r=parseInt(r,10)}while(isNaN(r)||r<1);d(function(e,t){return{type:"SET_NODE_WEIGHT",node:e,weight:t}}({row:t,col:a},r))}else alert("Cannot add weight to start, end, or wall node.");else i!==p.START&&i!==p.END&&1===o?(e=u===h.WALL&&i===p.WALL?p.DEFAULT:u,d(s({row:t,col:a},e))):alert("Cannot overwrite start, end, or weighted node.")}),[d,u,t,a,o,i]);return n.a.createElement("span",{className:"node-container",style:{height:45,width:45}},n.a.createElement("button",{className:"".concat(i," node"),onClick:f,disabled:l},o>1&&o))});function y(){var e=Math.floor((window.innerHeight-125)/45),t=Math.floor(window.innerWidth/45),a=Object(b.a)(Array(e)).map((function(){return Object(b.a)(Array(t)).map((function(){return p.DEFAULT}))})),r=Object(b.a)(Array(e)).map((function(){return Object(b.a)(Array(t)).map((function(){return 1}))})),n={row:Math.floor(e/2),col:Math.floor(t/3)-1},o={row:Math.floor(e/2),col:Math.floor(2*t/3)};return a[n.row][n.col]=p.START,a[o.row][o.col]=p.END,{matrix:a,weights:r,startNode:n,endNode:o,graphMode:h.WALL}}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y(),t=arguments.length>1?arguments[1]:void 0,a=e.matrix,r=e.weights,n=e.startNode,o=e.endNode;switch(t.type){case"SET_NODE_TYPE":var c=t.node,i=c.row,u=c.col,s=t.nodeType;if(a[i][u]===p.START||a[i][u]===p.END)return e;var l=a.map((function(e,t){return e.map((function(e,a){return t===i&&a===u?s:s===p.START&&e===p.START?(n={row:i,col:u},p.DEFAULT):s===p.END&&e===p.END?(o={row:i,col:u},p.DEFAULT):e}))}));return Object(w.a)(Object(w.a)({},e),{},{matrix:l,startNode:n,endNode:o});case"SET_NODE_WEIGHT":var h=t.node,d=h.row,f=h.col,m=t.weight,b=r.map((function(e,t){return e.map((function(e,a){return t===d&&a===f?m:e}))}));return Object(w.a)(Object(w.a)({},e),{},{weights:b});case"SET_GRAPH_MODE":return Object(w.a)(Object(w.a)({},e),{},{graphMode:t.graphMode});case"CLEAR_GRAPH":var E=a.map((function(e){return e.map((function(e){return e===p.TRAVERSED||e===p.PATH?p.DEFAULT:e}))}));return Object(w.a)(Object(w.a)({},e),{},{matrix:E});case"RESET_GRAPH":var g=a.map((function(e){return e.map((function(e){return e!==p.START&&e!==p.END?p.DEFAULT:e}))}));return Object(w.a)(Object(w.a)({},e),{},{matrix:g});default:return e}},T={isRunning:!1};var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_ALGORITHM":return Object(w.a)(Object(w.a)({},e),{},{isRunning:!0});case"END_ALGORITHM":return Object(w.a)(Object(w.a)({},e),{},{isRunning:!1});default:return e}},O=Object(g.b)({graph:v,algorithm:_}),N=Object(g.c)(O);function R(e,t){var a=e.row,r=e.col,n=new Set;return r!==t[0].length-1&&t[a][r+1]!==p.WALL&&n.add({row:a,col:r+1}),0!==r&&t[a][r-1]!==p.WALL&&n.add({row:a,col:r-1}),a!==t.length-1&&t[a+1][r]!==p.WALL&&n.add({row:a+1,col:r}),0!==a&&t[a-1][r]!==p.WALL&&n.add({row:a-1,col:r}),n}function j(e){return new Promise((function(t){return setTimeout(t,e)}))}var k=a(11),L=a(12),D=function(){function e(){Object(k.a)(this,e),this._queue=[],this._offset=0}return Object(L.a)(e,[{key:"getLength",value:function(){return this._queue.length-this._offset}},{key:"isEmpty",value:function(){return 0===this._queue.length}},{key:"enqueue",value:function(e){this._queue.push(e)}},{key:"dequeue",value:function(){if(0!==this._queue.length){var e=this._queue[this._offset++];return 2*this._offset>=this._queue.length&&(this._queue=this._queue.slice(this._offset),this._offset=0),e}}},{key:"peek",value:function(){return this._queue.length>0?this._queue[this._offset]:void 0}}]),e}();function S(){return H.apply(this,arguments)}function H(){return(H=Object(E.a)(f.a.mark((function e(){var t,a,r,n,o,c,i,u,l,h,d,E,g,w,A;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.dispatch({type:"CLEAR_GRAPH"}),N.dispatch({type:"START_ALGORITHM"}),t=N.getState().graph,a=t.matrix,r=t.startNode,n=t.endNode,o=a.length,c=a[0].length,i=Object(b.a)(Array(o)).map((function(){return Object(b.a)(Array(c)).map((function(){}))})),u=Object(b.a)(Array(o)).map((function(){return Object(b.a)(Array(c)).map((function(){return!1}))})),l=!1,(h=new D).enqueue(r),u[r.row][r.col]=!0;case 11:if(h.isEmpty()||l){e.next=22;break}if(N.getState().algorithm.isRunning){e.next=14;break}return e.abrupt("break",22);case 14:d=h.dequeue(),N.dispatch(s(d,p.TRAVERSED)),E=Object(m.a)(R(d,a));try{for(E.s();!(g=E.n()).done;)w=g.value,u[w.row][w.col]||(h.enqueue(w),u[w.row][w.col]=!0,i[w.row][w.col]=d),w.row===n.row&&w.col===n.col&&(l=!0)}catch(f){E.e(f)}finally{E.f()}return e.next=20,j(0);case 20:e.next=11;break;case 22:if(A=i[n.row][n.col])for(;A.row!==r.row||A.col!==r.col;)N.dispatch(s(A,p.PATH)),A=i[A.row][A.col];N.dispatch({type:"END_ALGORITHM"});case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return G.apply(this,arguments)}function G(){return(G=Object(E.a)(f.a.mark((function e(){var t,a,r,n,o,c,i,u,l,h,d,E,g,w,A;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.dispatch({type:"CLEAR_GRAPH"}),N.dispatch({type:"START_ALGORITHM"}),t=N.getState().graph,a=t.matrix,r=t.startNode,n=t.endNode,o=a.length,c=a[0].length,i=Object(b.a)(Array(o)).map((function(){return Object(b.a)(Array(c)).map((function(){}))})),u=Object(b.a)(Array(o)).map((function(){return Object(b.a)(Array(c)).map((function(){return!1}))})),l=!1,h=[r];case 9:if(!h.length||l){e.next=22;break}if(N.getState().algorithm.isRunning){e.next=12;break}return e.abrupt("break",22);case 12:if(d=h.pop(),u[d.row][d.col]){e.next=20;break}u[d.row][d.col]=!0,N.dispatch(s(d,p.TRAVERSED)),E=Object(m.a)(R(d,a));try{for(E.s();!(g=E.n()).done;)w=g.value,u[w.row][w.col]||(h.push(w),i[w.row][w.col]=d),w.row===n.row&&w.col===n.col&&(l=!0)}catch(f){E.e(f)}finally{E.f()}return e.next=20,j(0);case 20:e.next=9;break;case 22:if(A=i[n.row][n.col])for(;A.row!==r.row||A.col!==r.col;)N.dispatch(s(A,p.PATH)),A=i[A.row][A.col];N.dispatch({type:"END_ALGORITHM"});case 25:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=function(e){return e>>1},C=function(e){return e<<1},W=function(e){return 1+(e<<1)},I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e,t){return e>t};Object(k.a)(this,e),this._heap=[0],this._comparator=t}return Object(L.a)(e,[{key:"size",value:function(){return this._heap.length-1}},{key:"isEmpty",value:function(){return 0===this.size()}},{key:"peek",value:function(){if(!this.isEmpty())return this._heap[1].value}},{key:"push",value:function(e,t){var a={value:e,priority:t};this._heap.push(a),this._siftUp()}},{key:"pop",value:function(){if(!this.isEmpty()){var e=this._heap[1],t=this.size();return this._swap(1,t),this._heap.pop(),this._siftDown(),e}}},{key:"_greater",value:function(e,t){return this._comparator(this._heap[e].priority,this._heap[t].priority)}},{key:"_swap",value:function(e,t){var a=[this._heap[t],this._heap[e]];this._heap[e]=a[0],this._heap[t]=a[1]}},{key:"_siftUp",value:function(){for(var e=this.size();e>1&&this._greater(e,M(e));)this._swap(e,M(e)),e=M(e)}},{key:"_siftDown",value:function(){for(var e=1;C(e)<=this.size()&&this._greater(C(e),e)||W(e)<=this.size()&&this._greater(W(e),e);){var t=W(e)<=this.size()&&this._greater(W(e),C(e))?W(e):C(e);this._swap(e,t),e=t}}}]),e}();function P(){return q.apply(this,arguments)}function q(){return(q=Object(E.a)(f.a.mark((function e(){var t,a,r,n,o,c,i,u,l,h,d,E,g,w,A,y,v,T,_,O;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.dispatch({type:"CLEAR_GRAPH"}),N.dispatch({type:"START_ALGORITHM"}),t=N.getState().graph,a=t.matrix,r=t.weights,n=t.startNode,o=t.endNode,c=a.length,i=a[0].length,(u=new I((function(e,t){return e<t}))).push(n,0),l=Object(b.a)(Array(c)).map((function(){return Object(b.a)(Array(i)).map((function(){return 1/0}))})),h=Object(b.a)(Array(c)).map((function(){return Object(b.a)(Array(i)).map((function(){}))})),d=Object(b.a)(Array(c)).map((function(){return Object(b.a)(Array(i)).map((function(){return!1}))})),E=!1;case 11:if(E){e.next=30;break}if(N.getState().algorithm.isRunning){e.next=14;break}return e.abrupt("break",30);case 14:if(g=u.pop()){e.next=17;break}return e.abrupt("break",30);case 17:if(w=g.value,A=g.priority,!d[w.row][w.col]){e.next=22;break}return e.abrupt("continue",11);case 22:d[w.row][w.col]=!0,N.dispatch(s(w,p.TRAVERSED));case 24:y=Object(m.a)(R(w,a));try{for(y.s();!(v=y.n()).done;)T=v.value,(_=A+r[T.row][T.col])<l[T.row][T.col]&&(l[T.row][T.col]=_,h[T.row][T.col]=w,u.push(T,_)),T.row===o.row&&T.col===o.col&&(E=!0)}catch(f){y.e(f)}finally{y.f()}return e.next=28,j(0);case 28:e.next=11;break;case 30:if(O=h[o.row][o.col])for(;O.row!==n.row||O.col!==n.col;)N.dispatch(s(O,p.PATH)),O=h[O.row][O.col];N.dispatch({type:"END_ALGORITHM"});case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.algorithm.isRunning}));return n.a.createElement("div",{className:"actions-bar"},n.a.createElement("div",{className:"button-container"},n.a.createElement("h1",{className:"button-group-header"},"Insert:"),n.a.createElement("div",{className:"button-group"},n.a.createElement("div",{className:"mode-button"},n.a.createElement("input",{className:"mode-radio",type:"radio",id:"start-radio",name:"graph-mode",onClick:function(){return e(l(h.START))}}),n.a.createElement("label",{className:"mode-label",htmlFor:"start-radio"},"START")),n.a.createElement("div",{className:"mode-button"},n.a.createElement("input",{className:"mode-radio",type:"radio",id:"end-radio",name:"graph-mode",onClick:function(){return e(l(h.END))}}),n.a.createElement("label",{className:"mode-label",htmlFor:"end-radio"},"END")),n.a.createElement("div",{className:"mode-button"},n.a.createElement("input",{className:"mode-radio",type:"radio",id:"wall-radio",name:"graph-mode",onClick:function(){return e(l(h.WALL))},defaultChecked:!0}),n.a.createElement("label",{className:"mode-label",htmlFor:"wall-radio"},"WALL")),n.a.createElement("div",{className:"mode-button"},n.a.createElement("input",{className:"mode-radio",type:"radio",id:"weight-radio",name:"graph-mode",onClick:function(){return e(l(h.WEIGHT))}}),n.a.createElement("label",{className:"mode-label",htmlFor:"weight-radio"},"WEIGHT")))),n.a.createElement("div",{className:"button-container"},n.a.createElement("h1",{className:"button-group-header"},"Run:"),n.a.createElement("div",{className:"button-group"},n.a.createElement("div",{className:"button-group"},n.a.createElement("button",{className:"run button",onClick:S,disabled:t},"BFS"),n.a.createElement("button",{className:"run button",onClick:x,disabled:t},"DFS"),n.a.createElement("button",{className:"run button",onClick:P,disabled:t},"Dijkstra's")),n.a.createElement("div",{className:"button-group"},n.a.createElement("button",{className:"stop button",onClick:function(){return e({type:"END_ALGORITHM"})},disabled:!t},"Stop"),n.a.createElement("button",{className:"action button",onClick:function(){return e({type:"CLEAR_GRAPH"})},disabled:t},"Clear Graph"),n.a.createElement("button",{className:"action button",onClick:function(){return e({type:"RESET_GRAPH"})},disabled:t},"Reset Graph")))))},z=(a(35),function(){var e=Object(c.c)((function(e){return e.graph.matrix})),t=Object(c.c)((function(e){return e.graph.weights}));return n.a.createElement("div",{className:"graph"},e&&e.length>0&&e.map((function(e,a){return n.a.createElement("div",{key:"row ".concat(a),className:"graph-row",style:{width:45*e.length,height:45}},e&&e.length>0&&e.map((function(e,r){return n.a.createElement(A,{key:"Node (".concat(a,", ").concat(r,")"),row:a,col:r,weight:t[a][r],nodeType:e})})))})))}),U=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("img",{src:u.a,className:"App-logo",alt:"logo"}),n.a.createElement("b",null,"Graph Algorithm Visualizer")),n.a.createElement(F,null),n.a.createElement(z,null))};Object(o.render)(n.a.createElement(c.a,{store:N},n.a.createElement(U,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.822ebc69.chunk.js.map