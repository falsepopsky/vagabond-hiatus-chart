(this["webpackJsonpvagabond-hiatus-chart"]=this["webpackJsonpvagabond-hiatus-chart"]||[]).push([[4],{226:function(e,t,n){var r=n(105),o=n(378),a=n(143),i=n(379),l=n(380),u=n(179),c=n(182),d=n(381),f=n(382),b=n(197),s=n(228),p=n(119),h=n(383),v=n(384),g=n(183),m=n(64),y=n(111),x=n(388),L=n(67),O=n(390),j=n(99),C=n(97),w="[object Arguments]",P="[object Function]",M="[object Object]",E={};E[w]=E["[object Array]"]=E["[object ArrayBuffer]"]=E["[object DataView]"]=E["[object Boolean]"]=E["[object Date]"]=E["[object Float32Array]"]=E["[object Float64Array]"]=E["[object Int8Array]"]=E["[object Int16Array]"]=E["[object Int32Array]"]=E["[object Map]"]=E["[object Number]"]=E[M]=E["[object RegExp]"]=E["[object Set]"]=E["[object String]"]=E["[object Symbol]"]=E["[object Uint8Array]"]=E["[object Uint8ClampedArray]"]=E["[object Uint16Array]"]=E["[object Uint32Array]"]=!0,E["[object Error]"]=E[P]=E["[object WeakMap]"]=!1,e.exports=function e(t,n,S,R,T,A){var k,z=1&n,I=2&n,q=4&n;if(S&&(k=T?S(t,R,T,A):S(t)),void 0!==k)return k;if(!L(t))return t;var B=m(t);if(B){if(k=h(t),!z)return c(t,k)}else{var W=p(t),U=W==P||"[object GeneratorFunction]"==W;if(y(t))return u(t,z);if(W==M||W==w||U&&!T){if(k=I||U?{}:g(t),!z)return I?f(t,l(k,t)):d(t,i(k,t))}else{if(!E[W])return T?t:{};k=v(t,W,z)}}A||(A=new r);var F=A.get(t);if(F)return F;A.set(t,k),O(t)?t.forEach((function(r){k.add(e(r,n,S,r,t,A))})):x(t)&&t.forEach((function(r,o){k.set(o,e(r,n,S,o,t,A))}));var D=B?void 0:(q?I?s:b:I?C:j)(t);return o(D||t,(function(r,o){D&&(r=t[o=r]),a(k,o,e(r,n,S,o,t,A))})),k}},227:function(e,t,n){var r=n(151),o=n(139),a=n(152),i=n(199),l=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,a(e)),e=o(e);return t}:i;e.exports=l},228:function(e,t,n){var r=n(198),o=n(227),a=n(97);e.exports=function(e){return r(e,a,o)}},229:function(e,t){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},230:function(e,t){var n=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return n.test(e)}},376:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return F}));var r=n(0),o=n.n(r),a=n(75),i=n(8),l=n.n(i),u=n(164),c=n(423),d=n(115),f=n.n(d),b=n(377),s=n.n(b),p=n(395),h=n.n(p),v=n(396),g=n.n(v),m=n(493),y=n(489),x=n(102);function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=Object(r.memo)((function(e){var t=e.node,n=e.animatedProps,r=e.borderWidth,i=e.enableLabel,l=e.enableParentLabel,u=e.labelSkipSize,d=Object(a.A)(),f=i&&t.isLeaf&&(0===u||Math.min(t.width,t.height)>u),b=l&&t.isParent;return o.a.createElement(c.animated.g,{transform:n.transform},o.a.createElement(c.animated.rect,{width:Object(c.to)(n.width,(function(e){return Math.max(e,0)})),height:Object(c.to)(n.height,(function(e){return Math.max(e,0)})),fill:t.fill?t.fill:n.color,strokeWidth:r,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),f&&o.a.createElement(c.animated.text,{textAnchor:"middle",dominantBaseline:"central",style:j(j({},d.labels.text),{},{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:n.labelOpacity,transform:n.labelTransform},t.label),b&&o.a.createElement(c.animated.text,{dominantBaseline:"central",style:j(j({},d.labels.text),{},{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:n.parentLabelOpacity,transform:n.parentLabelTransform},t.parentLabel))})),w=Object(r.memo)((function(e){var t=e.node,n=e.animatedProps,r=e.borderWidth,i=e.enableLabel,l=e.enableParentLabel,u=e.labelSkipSize,d=Object(a.A)(),f=i&&t.isLeaf&&(0===u||Math.min(t.width,t.height)>u),b=l&&t.isParent;return o.a.createElement(c.animated.div,{id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:n.htmlTransform,width:n.width,height:n.height,borderWidth:r,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"}},o.a.createElement(c.animated.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:n.width,height:n.height,background:n.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),f&&o.a.createElement(c.animated.span,{style:j(j({},d.labels.text),{},{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:n.labelHtmlTransform,opacity:n.labelOpacity,pointerEvents:"none"})},t.label),b&&o.a.createElement(c.animated.span,{style:j(j({},d.labels.text),{},{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:n.parentLabelHtmlTransform,opacity:n.parentLabelOpacity,pointerEvents:"none"})},t.parentLabel))})),P={identity:l.a.oneOfType([l.a.string,l.a.func]).isRequired,value:l.a.oneOfType([l.a.string,l.a.func]).isRequired,valueFormat:l.a.oneOfType([l.a.string,l.a.func]),colors:u.c.isRequired,colorBy:u.a.isRequired,nodeOpacity:l.a.number.isRequired,leavesOnly:l.a.bool.isRequired,tile:a.v.isRequired,innerPadding:l.a.number.isRequired,outerPadding:l.a.number.isRequired,enableLabel:l.a.bool.isRequired,label:l.a.oneOfType([l.a.string,l.a.func]).isRequired,labelFormat:l.a.string,labelSkipSize:l.a.number.isRequired,labelTextColor:u.b.isRequired,orientLabel:l.a.bool.isRequired,enableParentLabel:l.a.bool.isRequired,parentLabel:l.a.oneOfType([l.a.string,l.a.func]).isRequired,parentLabelSize:l.a.number.isRequired,parentLabelPosition:l.a.oneOf(["top","right","bottom","left"]).isRequired,parentLabelPadding:l.a.number.isRequired,parentLabelTextColor:u.b.isRequired,borderWidth:l.a.number.isRequired,borderColor:u.b.isRequired,isInteractive:l.a.bool.isRequired,onMouseEnter:l.a.func,onMouseMove:l.a.func,onMouseLeave:l.a.func,onClick:l.a.func,tooltip:l.a.func},M=(j(j({},P),{},{nodeComponent:l.a.elementType.isRequired,role:l.a.string.isRequired},a.i),j(j({},P),{},{nodeComponent:l.a.elementType.isRequired}),j(j({},P),{},{pixelRatio:l.a.number.isRequired}),{identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,animate:!0,motionConfig:"gentle"}),E=j(j({},M),{},{nodeComponent:C,role:"img",defs:[],fill:[]}),S=j(j({},M),{},{nodeComponent:w}),R=j(j({},M),{},{pixelRatio:e.window&&e.window.devicePixelRatio?e.window.devicePixelRatio:1});function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=Object(r.memo)((function(e){var t=e.node,n=e.tooltip;return o.a.createElement(x.a,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color,renderContent:"function"===typeof n?n.bind(null,{node:t}):null})})),z=function(e){return Object(r.useMemo)((function(){return"function"===typeof e?e:function(t){return f()(t,e)}}),[e])},I=function(e){var t=e.data,n=e.identity,o=void 0===n?E.identity:n,i=e.value,l=void 0===i?E.value:i,c=e.valueFormat,d=e.leavesOnly,f=void 0===d?E.leavesOnly:d,b=e.width,p=e.height,v=e.tile,x=void 0===v?E.tile:v,L=e.innerPadding,O=void 0===L?E.innerPadding:L,j=e.outerPadding,C=void 0===j?E.outerPadding:j,w=e.label,P=void 0===w?E.label:w,M=e.orientLabel,S=void 0===M?E.orientLabel:M,R=e.enableParentLabel,T=void 0===R?E.enableParentLabel:R,k=e.parentLabel,I=void 0===k?E.parentLabel:k,q=e.parentLabelSize,B=void 0===q?E.parentLabelSize:q,W=e.parentLabelPosition,U=void 0===W?E.parentLabelPosition:W,F=e.parentLabelPadding,D=void 0===F?E.parentLabelPadding:F,H=e.colors,Z=void 0===H?E.colors:H,Y=e.colorBy,N=void 0===Y?E.colorBy:Y,V=e.nodeOpacity,X=void 0===V?E.nodeOpacity:V,G=e.borderColor,J=void 0===G?E.borderColor:G,$=e.labelTextColor,_=void 0===$?E.labelTextColor:$,K=e.parentLabelTextColor,Q=void 0===K?E.parentLabelTextColor:K,ee=z(o),te=z(l),ne=Object(a.B)(c),re=z(P),oe=z(I),ae=function(e){var t=e.width,n=e.height,o=e.tile,i=e.innerPadding,l=e.outerPadding,u=e.enableParentLabel,c=e.parentLabelSize,d=e.parentLabelPosition,f=e.leavesOnly;return Object(r.useMemo)((function(){var e=Object(m.a)().size([t,n]).tile(Object(a.u)(o)).round(!0).paddingInner(i).paddingOuter(l);if(u&&!f){var r=c+2*l;e["padding".concat(g()(d))](r)}return e}),[t,n,o,i,l,u,c,d,f])}({width:b,height:p,tile:x,innerPadding:O,outerPadding:C,enableParentLabel:T,parentLabelSize:B,parentLabelPosition:U,leavesOnly:f}),ie=function(e){var t=e.root,n=e.getValue;return Object(r.useMemo)((function(){return Object(y.a)(t).sum(n)}),[t,n])}({root:t,getValue:te}),le=Object(r.useMemo)((function(){var e=h()(ie);return ae(e),f?e.leaves():e.descendants()}),[ie,ae,f]),ue=Object(r.useMemo)((function(){return le.map((function(e){var t=A(function(e,t){var n=e.ancestors().map((function(e){return t(e.data)})).reverse();return[n.join("."),n]}(e,ee),2),n=t[0],r=t[1],o={id:ee(e.data),path:n,pathComponents:r,data:s()(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:ne(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height};return o.label=re(o),o.parentLabel=oe(o),o.parentLabelRotation=0,"top"===U&&(o.parentLabelX=C+D,o.parentLabelY=C+B/2),"right"===U&&(o.parentLabelX=o.width-C-B/2,o.parentLabelY=o.height-C-D,o.parentLabelRotation=-90),"bottom"===U&&(o.parentLabelX=C+D,o.parentLabelY=o.height-C-B/2),"left"===U&&(o.parentLabelX=C+B/2,o.parentLabelY=o.height-C-D,o.parentLabelRotation=-90),o}))}),[le,f,ee,ne,re,oe,B,U,D,C]),ce=Object(a.A)(),de=Object(u.e)(Z,N),fe=Object(u.d)(J,ce),be=Object(u.d)(_,ce),se=Object(u.d)(Q,ce),pe=Object(r.useMemo)((function(){return ue.map((function(e){return e.opacity=X,e.labelRotation=S&&e.height>e.width?-90:0,e.color=de(e),e.borderColor=fe(e),e.labelTextColor=be(e),e.parentLabelTextColor=se(e),e}))}),[ue,de,X,fe,be,se,S]);return{hierarchy:ie,nodes:pe,layout:ae}},q=function(e){return{transform:"translate(".concat(e.x,",").concat(e.y,")"),htmlTransform:"translate(".concat(e.x,"px,").concat(e.y,"px)"),labelOpacity:1,labelTransform:"translate(".concat(e.width/2,",").concat(e.height/2,") rotate(").concat(e.labelRotation,")"),labelHtmlTransform:"translate(".concat(e.width/2,"px,").concat(e.height/2,"px) rotate(").concat(e.labelRotation,"deg)"),parentLabelOpacity:1,parentLabelTransform:"translate(".concat(e.parentLabelX,",").concat(e.parentLabelY,") rotate(").concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(".concat(e.parentLabelX-(0===e.parentLabelRotation?0:5),"px,").concat(e.parentLabelY-(0===e.parentLabelRotation?5:0),"px) rotate(").concat(e.parentLabelRotation,"deg)"),width:e.width,height:e.height,color:e.color}},B=function(e){var t=e.x+e.width/2,n=e.y+e.height/2;return{transform:"translate(".concat(t,",").concat(n,")"),transformPixels:"translate(".concat(t,"px,").concat(n,"px)"),labelOpacity:0,labelTransform:"translate(0,0) rotate(".concat(e.labelRotation,")"),parentLabelOpacity:0,parentLabelTransform:"translate(0,0) rotate(".concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(0px,0px) rotate(".concat(e.parentLabelRotation,"deg)"),width:0,height:0,color:e.color}},W=Object(r.memo)((function(e){var t=e.nodes,n=e.nodeComponent,i=e.borderWidth,l=e.enableLabel,u=e.labelSkipSize,d=e.enableParentLabel,f=function(e,t){var n=t.isInteractive,a=t.onMouseEnter,i=t.onMouseMove,l=t.onMouseLeave,u=t.onClick,c=t.tooltip,d=Object(x.h)(),f=d.showTooltipFromEvent,b=d.hideTooltip,s=Object(r.useCallback)((function(e,t){f(o.a.createElement(k,{node:e,tooltip:c}),t,"left")}),[f,c]),p=Object(r.useCallback)((function(e,t){s(e,t),a&&a(e,t)}),[a,s]),h=Object(r.useCallback)((function(e,t){s(e,t),i&&i(e,t)}),[i,s]),v=Object(r.useCallback)((function(e,t){b(),l&&l(e,t)}),[l,b]),g=Object(r.useCallback)((function(e,t){u&&u(e,t)}),[u]);return Object(r.useMemo)((function(){return e.map((function(e){return n?j(j({},e),{},{onMouseEnter:function(t){return p(e,t)},onMouseMove:function(t){return h(e,t)},onMouseLeave:function(t){return v(e,t)},onClick:function(t){return g(e,t)}}):e}))}),[e,p,h,v,g])}(t,{isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}),b=Object(a.z)(),s=b.animate,p=b.config;return Object(c.useTransition)(f,{key:function(e){return e.path},initial:function(e){return q(e)},from:function(e){return B(e)},enter:function(e){return q(e)},update:function(e){return q(e)},leave:function(e){return B(e)},config:p,immediate:!s})((function(e,t){return o.a.createElement(n,{key:t.path,node:t,animatedProps:e,borderWidth:i,enableLabel:l,labelSkipSize:u,enableParentLabel:d})}))})),U=Object(a.C)((function(e){var t=e.data,n=e.identity,r=e.value,i=e.tile,l=e.nodeComponent,u=e.valueFormat,c=e.innerPadding,d=e.outerPadding,f=e.leavesOnly,b=e.width,s=e.height,p=e.margin,h=e.colors,v=e.colorBy,g=e.nodeOpacity,m=e.borderWidth,y=e.borderColor,x=e.defs,L=e.fill,O=e.enableLabel,j=e.label,C=e.labelTextColor,w=e.orientLabel,P=e.labelSkipSize,M=e.enableParentLabel,E=e.parentLabel,S=e.parentLabelSize,R=e.parentLabelPosition,T=e.parentLabelPadding,A=e.parentLabelTextColor,k=e.isInteractive,z=e.onMouseEnter,q=e.onMouseMove,B=e.onMouseLeave,U=e.onClick,F=e.tooltip,D=e.role,H=Object(a.x)(b,s,p),Z=H.margin,Y=H.innerWidth,N=H.innerHeight,V=H.outerWidth,X=H.outerHeight,G=I({data:t,identity:n,value:r,valueFormat:u,leavesOnly:f,width:Y,height:N,tile:i,innerPadding:c,outerPadding:d,colors:h,colorBy:v,nodeOpacity:g,borderColor:y,label:j,labelTextColor:C,orientLabel:w,enableParentLabel:M,parentLabel:E,parentLabelSize:S,parentLabelPosition:R,parentLabelPadding:T,parentLabelTextColor:A}).nodes,J=Object(a.f)(x,G,L);return o.a.createElement(a.e,{width:V,height:X,margin:Z,defs:J,role:D},o.a.createElement(W,{nodes:G,nodeComponent:l,borderWidth:m,enableLabel:O,labelSkipSize:P,enableParentLabel:M,isInteractive:k,onMouseEnter:z,onMouseMove:q,onMouseLeave:B,onClick:U,tooltip:F}))}));U.defaultProps=E;var F=function(e){return o.a.createElement(a.d,null,(function(t){var n=t.width,r=t.height;return o.a.createElement(U,Object.assign({width:n,height:r},e))}))},D=Object(a.C)((function(e){var t=e.data,n=e.identity,r=e.value,i=e.tile,l=e.nodeComponent,u=e.valueFormat,c=e.innerPadding,d=e.outerPadding,f=e.leavesOnly,b=e.width,s=e.height,p=e.margin,h=e.colors,v=e.colorBy,g=e.nodeOpacity,m=e.borderWidth,y=e.borderColor,x=e.enableLabel,L=e.label,O=e.labelTextColor,j=e.orientLabel,C=e.labelSkipSize,w=e.enableParentLabel,P=e.parentLabel,M=e.parentLabelSize,E=e.parentLabelPosition,S=e.parentLabelPadding,R=e.parentLabelTextColor,T=e.isInteractive,A=e.onMouseEnter,k=e.onMouseMove,z=e.onMouseLeave,q=e.onClick,B=e.tooltip,U=Object(a.x)(b,s,p),F=U.margin,D=U.innerWidth,H=U.innerHeight,Z=U.outerWidth,Y=U.outerHeight,N=I({data:t,identity:n,value:r,valueFormat:u,leavesOnly:f,width:D,height:H,tile:i,innerPadding:c,outerPadding:d,colors:h,colorBy:v,nodeOpacity:g,borderColor:y,label:L,labelTextColor:O,orientLabel:j,enableParentLabel:w,parentLabel:P,parentLabelSize:M,parentLabelPosition:E,parentLabelPadding:S,parentLabelTextColor:R}).nodes;return o.a.createElement("div",{style:{position:"relative",width:Z,height:Y}},o.a.createElement("div",{style:{position:"absolute",top:F.top,left:F.left}},o.a.createElement(W,{nodes:N,nodeComponent:l,borderWidth:m,enableLabel:x,labelSkipSize:C,enableParentLabel:w,isInteractive:T,onMouseEnter:A,onMouseMove:k,onMouseLeave:z,onClick:q,tooltip:B})))}));D.defaultProps=S;var H=function(e,t,n,r){return e.find((function(e){return Object(a.o)(e.x+t.left,e.y+t.top,e.width,e.height,n,r)}))},Z=Object(a.C)((function(e){var t=e.data,n=e.identity,i=e.value,l=e.tile,u=e.valueFormat,c=e.innerPadding,d=e.outerPadding,f=e.leavesOnly,b=e.width,s=e.height,p=e.margin,h=e.colors,v=e.colorBy,g=e.nodeOpacity,m=e.borderWidth,y=e.borderColor,L=e.enableLabel,O=e.label,j=e.labelTextColor,C=e.orientLabel,w=e.labelSkipSize,P=e.isInteractive,M=e.onMouseMove,E=e.onClick,S=e.tooltip,R=e.pixelRatio,T=Object(r.useRef)(null),z=Object(a.x)(b,s,p),q=z.margin,B=z.innerWidth,W=z.innerHeight,U=z.outerWidth,F=z.outerHeight,D=I({data:t,identity:n,value:i,valueFormat:u,leavesOnly:f,width:B,height:W,tile:l,innerPadding:c,outerPadding:d,colors:h,colorBy:v,nodeOpacity:g,borderColor:y,label:O,labelTextColor:j,orientLabel:C,enableParentLabel:!1}).nodes,Z=Object(a.A)();Object(r.useEffect)((function(){T.current.width=U*R,T.current.height=F*R;var e=T.current.getContext("2d");e.scale(R,R),e.fillStyle=Z.background,e.fillRect(0,0,U,F),e.translate(q.left,q.top),D.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),m>0&&(e.strokeStyle=t.borderColor,e.lineWidth=m,e.strokeRect(t.x,t.y,t.width,t.height))})),L&&(e.textAlign="center",e.textBaseline="middle",e.font="".concat(Z.labels.text.fontSize,"px ").concat(Z.labels.text.fontFamily),D.forEach((function(t){if(t.isLeaf&&(0===w||Math.min(t.width,t.height)>w)){var n=C&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate(Object(a.j)(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(t.label,0,0),e.restore()}})))}),[T,D,U,F,B,W,q,m,L,C,w,Z,R]);var Y=Object(x.h)(),N=Y.showTooltipFromEvent,V=Y.hideTooltip,X=Object(r.useCallback)((function(e){var t=A(Object(a.m)(T.current,e),2),n=t[0],r=t[1],i=H(D,q,n,r);void 0!==i?(N(o.a.createElement(k,{node:i,tooltip:S}),e,"left"),M&&M(i,e)):V()}),[T,D,q,N,V,S,M]),G=Object(r.useCallback)((function(){V()}),[V]),J=Object(r.useCallback)((function(e){var t=A(Object(a.m)(T.current,e),2),n=t[0],r=t[1],o=H(D,q,n,r);void 0!==o&&E&&E(o,e)}),[T,D,q,E]);return o.a.createElement("canvas",{ref:T,width:U*R,height:F*R,style:{width:U,height:F},onMouseEnter:P?X:void 0,onMouseMove:P?X:void 0,onMouseLeave:P?G:void 0,onClick:P?J:void 0})}));Z.defaultProps=R}).call(this,n(32))},377:function(e,t,n){var r=n(118),o=n(226),a=n(392),i=n(86),l=n(85),u=n(394),c=n(207),d=n(228),f=c((function(e,t){var n={};if(null==e)return n;var c=!1;t=r(t,(function(t){return t=i(t,e),c||(c=t.length>1),t})),l(e,d(e),n),c&&(n=o(n,7,u));for(var f=t.length;f--;)a(n,t[f]);return n}));e.exports=f},378:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},379:function(e,t,n){var r=n(85),o=n(99);e.exports=function(e,t){return e&&r(t,o(t),e)}},380:function(e,t,n){var r=n(85),o=n(97);e.exports=function(e,t){return e&&r(t,o(t),e)}},381:function(e,t,n){var r=n(85),o=n(152);e.exports=function(e,t){return r(e,o(e),t)}},382:function(e,t,n){var r=n(85),o=n(227);e.exports=function(e,t){return r(e,o(e),t)}},383:function(e,t){var n=Object.prototype.hasOwnProperty;e.exports=function(e){var t=e.length,r=new e.constructor(t);return t&&"string"==typeof e[0]&&n.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},384:function(e,t,n){var r=n(138),o=n(385),a=n(386),i=n(387),l=n(180);e.exports=function(e,t,n){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return l(e,n);case"[object Map]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return a(e);case"[object Set]":return new u;case"[object Symbol]":return i(e)}}},385:function(e,t,n){var r=n(138);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},386:function(e,t){var n=/\w*$/;e.exports=function(e){var t=new e.constructor(e.source,n.exec(e));return t.lastIndex=e.lastIndex,t}},387:function(e,t,n){var r=n(82),o=r?r.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},388:function(e,t,n){var r=n(389),o=n(84),a=n(112),i=a&&a.isMap,l=i?o(i):r;e.exports=l},389:function(e,t,n){var r=n(119),o=n(65);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},390:function(e,t,n){var r=n(391),o=n(84),a=n(112),i=a&&a.isSet,l=i?o(i):r;e.exports=l},391:function(e,t,n){var r=n(119),o=n(65);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}},392:function(e,t,n){var r=n(86),o=n(146),a=n(393),i=n(87);e.exports=function(e,t){return t=r(t,e),null==(e=a(e,t))||delete e[i(o(t))]}},393:function(e,t,n){var r=n(98),o=n(229);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},394:function(e,t,n){var r=n(96);e.exports=function(e){return r(e)?void 0:e}},395:function(e,t,n){var r=n(226);e.exports=function(e){return r(e,5)}},396:function(e,t,n){var r=n(397),o=n(406),a=r((function(e,t,n){return e+(n?" ":"")+o(t)}));e.exports=a},397:function(e,t,n){var r=n(398),o=n(399),a=n(402),i=RegExp("['\u2019]","g");e.exports=function(e){return function(t){return r(a(o(t).replace(i,"")),e,"")}}},398:function(e,t){e.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}},399:function(e,t,n){var r=n(400),o=n(117),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(a,r).replace(i,"")}},400:function(e,t,n){var r=n(401)({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"});e.exports=r},401:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},402:function(e,t,n){var r=n(403),o=n(404),a=n(117),i=n(405);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?o(e)?i(e):r(e):e.match(t)||[]}},403:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},404:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},405:function(e,t){var n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",o="A-Z\\xc0-\\xd6\\xd8-\\xde",a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+a+"]",l="\\d+",u="[\\u2700-\\u27bf]",c="["+r+"]",d="[^\\ud800-\\udfff"+a+l+n+r+o+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+o+"]",p="(?:"+c+"|"+d+")",h="(?:"+s+"|"+d+")",v="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",g="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",x=y+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,b].join("|")+")"+y+m+")*"),L="(?:"+[u,f,b].join("|")+")"+x,O=RegExp([s+"?"+c+"+"+v+"(?="+[i,s,"$"].join("|")+")",h+"+"+g+"(?="+[i,s+p,"$"].join("|")+")",s+"?"+p+"+"+v,s+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",l,L].join("|"),"g");e.exports=function(e){return e.match(O)||[]}},406:function(e,t,n){var r=n(407)("toUpperCase");e.exports=r},407:function(e,t,n){var r=n(408),o=n(230),a=n(409),i=n(117);e.exports=function(e){return function(t){t=i(t);var n=o(t)?a(t):void 0,l=n?n[0]:t.charAt(0),u=n?r(n,1).join(""):t.slice(1);return l[e]()+u}}},408:function(e,t,n){var r=n(229);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},409:function(e,t,n){var r=n(410),o=n(230),a=n(411);e.exports=function(e){return o(e)?a(e):r(e)}},410:function(e,t){e.exports=function(e){return e.split("")}},411:function(e,t){var n="[\\ud800-\\udfff]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",o="\\ud83c[\\udffb-\\udfff]",a="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",u="(?:"+r+"|"+o+")"+"?",c="[\\ufe0e\\ufe0f]?",d=c+u+("(?:\\u200d(?:"+[a,i,l].join("|")+")"+c+u+")*"),f="(?:"+[a+r+"?",r,i,l,n].join("|")+")",b=RegExp(o+"(?="+o+")|"+f+d,"g");e.exports=function(e){return e.match(b)||[]}},493:function(e,t,n){"use strict";var r=function(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)},o=n(217);function a(e){if("function"!==typeof e)throw new Error;return e}function i(){return 0}var l=function(e){return function(){return e}};t.a=function(){var e=o.a,t=!1,n=1,u=1,c=[0],d=i,f=i,b=i,s=i,p=i;function h(e){return e.x0=e.y0=0,e.x1=n,e.y1=u,e.eachBefore(v),c=[0],t&&e.eachBefore(r),e}function v(t){var n=c[t.depth],r=t.x0+n,o=t.y0+n,a=t.x1-n,i=t.y1-n;a<r&&(r=a=(r+a)/2),i<o&&(o=i=(o+i)/2),t.x0=r,t.y0=o,t.x1=a,t.y1=i,t.children&&(n=c[t.depth+1]=d(t)/2,r+=p(t)-n,o+=f(t)-n,(a-=b(t)-n)<r&&(r=a=(r+a)/2),(i-=s(t)-n)<o&&(o=i=(o+i)/2),e(t,r,o,a,i))}return h.round=function(e){return arguments.length?(t=!!e,h):t},h.size=function(e){return arguments.length?(n=+e[0],u=+e[1],h):[n,u]},h.tile=function(t){return arguments.length?(e=a(t),h):e},h.padding=function(e){return arguments.length?h.paddingInner(e).paddingOuter(e):h.paddingInner()},h.paddingInner=function(e){return arguments.length?(d="function"===typeof e?e:l(+e),h):d},h.paddingOuter=function(e){return arguments.length?h.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):h.paddingTop()},h.paddingTop=function(e){return arguments.length?(f="function"===typeof e?e:l(+e),h):f},h.paddingRight=function(e){return arguments.length?(b="function"===typeof e?e:l(+e),h):b},h.paddingBottom=function(e){return arguments.length?(s="function"===typeof e?e:l(+e),h):s},h.paddingLeft=function(e){return arguments.length?(p="function"===typeof e?e:l(+e),h):p},h}}}]);
//# sourceMappingURL=4.972a9e89.chunk.js.map