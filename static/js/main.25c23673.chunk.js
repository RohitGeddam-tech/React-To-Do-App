(this["webpackJsonpreact-to-do-app"]=this["webpackJsonpreact-to-do-app"]||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(2),s=n.n(c),r=n(4),i=n.n(r),o=(n(20),n(12)),u=n(7),d=n(8),l=n(14),j=n(13),m=(n(21),n(22),n(9)),p=n(10);var h=function(t){var e=t.items.map((function(e){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(a.jsx)("span",{children:Object(a.jsx)(m.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(a.jsx)("div",{children:Object(a.jsx)(p.a,{duration:300,easing:"ease-in-out",children:e})})},b=n(3),x=n(11);b.b.add(x.a);var f=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={items:[],currentItem:{text:"",key:""}},t.handleInput=function(e){t.setState({currentItem:{text:e.target.value,key:Date.now()}})},t.addItem=function(e){e.preventDefault();var n=t.state.currentItem;if(console.log(n),""!==n.text){var a=[].concat(Object(o.a)(t.state.items),[n]);t.setState({items:a,currentItem:{text:"",key:""}})}},t.onDeleteItem=function(e){var n=t.state.items.filter((function(t){return t.key!==e}));t.setState({items:n})},t.setUpdate=function(e,n){var a=t.state.items;a.map((function(t){t.key===n&&(t.text=e)})),t.setState({items:a})},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(a.jsx)("button",{type:"submit",children:"Add"})]})}),Object(a.jsx)(h,{items:this.state.items,deleteItem:this.onDeleteItem,setUpdate:this.setUpdate})]})}}]),n}(s.a.Component);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.25c23673.chunk.js.map