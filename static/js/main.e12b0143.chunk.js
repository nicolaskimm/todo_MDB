(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),i=a(2),c=a.n(i),r=(a(15),a(6)),o=a(3),l=a(4),u=a(7),k=a(5),m=a(8),d=(a(16),a(17),function(t){return t.taskArray.map(function(t){return n.a.createElement("li",{className:"singleItem",key:t.id},n.a.createElement("p",{className:"singleItem_text"},t.text))})}),h=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(u.a)(this,Object(k.a)(e).call(this,t))).state={tasks:[]},a}return Object(m.a)(e,t),Object(l.a)(e,[{key:"addTask",value:function(){var t={id:this.state.tasks.length+1,text:"Task number # ".concat(this.state.tasks.length+1)},e=[].concat(Object(r.a)(this.state.tasks),[t]);this.setState({tasks:e})}},{key:"removeLastTask",value:function(){var t=this,e=this.state.tasks.filter(function(e){return e.id<t.state.tasks.length});this.setState({tasks:e})}},{key:"clearAllTasks",value:function(){this.setState({tasks:[]})}},{key:"render",value:function(){return n.a.createElement("div",{className:"task_board"},n.a.createElement("h1",{className:"task_board-title"},"ToDo Board"),n.a.createElement("div",{className:"task_board-buttonSection"},n.a.createElement("button",{onClick:this.addTask.bind(this)},"add"),n.a.createElement("button",{onClick:this.removeLastTask.bind(this)},"remove"),n.a.createElement("button",{onClick:this.clearAllTasks.bind(this)},"clear")),n.a.createElement(d,{taskArray:this.state.tasks}))}}]),e}(s.Component);c.a.render(n.a.createElement(h,null),document.getElementById("app_root"))},9:function(t,e,a){t.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.e12b0143.chunk.js.map