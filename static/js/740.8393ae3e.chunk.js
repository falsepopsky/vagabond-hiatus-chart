(self.webpackChunkvagabond_hiatus_chart=self.webpackChunkvagabond_hiatus_chart||[]).push([[740],{9740:function(e,t,n){"use strict";n.d(t,{R0:function(){return K}});var r=n(5232),o=n(2007),a=n.n(o),i=n(6706),l=n(2791),u=n(4753),c=n(184),d=n(6181),f=n.n(d),s=n(4242),p=n.n(s),b=n(8121),h=n.n(b),v=n(3266),g=n.n(v);function y(e){e.x0=Math.round(e.x0),e.y0=Math.round(e.y0),e.x1=Math.round(e.x1),e.y1=Math.round(e.y1)}var x=n(5002);function m(e){if("function"!==typeof e)throw new Error;return e}function L(){return 0}function j(e){return function(){return e}}function C(e){var t=0,n=e.children,r=n&&n.length;if(r)for(;--r>=0;)t+=n[r].value;else t=1;e.value=t}function O(e,t){var n,r,o,a,i,l=new R(e),u=+e.value&&(l.value=e.value),c=[l];for(null==t&&(t=w);n=c.pop();)if(u&&(n.value=+n.data.value),(o=t(n.data))&&(i=o.length))for(n.children=new Array(i),a=i-1;a>=0;--a)c.push(r=n.children[a]=new R(o[a])),r.parent=n,r.depth=n.depth+1;return l.eachBefore(P)}function w(e){return e.children}function M(e){e.data=e.data.data}function P(e){var t=0;do{e.height=t}while((e=e.parent)&&e.height<++t)}function R(e){this.data=e,this.depth=this.height=0,this.parent=null}R.prototype=O.prototype={constructor:R,count:function(){return this.eachAfter(C)},each:function(e){var t,n,r,o,a=this,i=[a];do{for(t=i.reverse(),i=[];a=t.pop();)if(e(a),n=a.children)for(r=0,o=n.length;r<o;++r)i.push(n[r])}while(i.length);return this},eachAfter:function(e){for(var t,n,r,o=this,a=[o],i=[];o=a.pop();)if(i.push(o),t=o.children)for(n=0,r=t.length;n<r;++n)a.push(t[n]);for(;o=i.pop();)e(o);return this},eachBefore:function(e){for(var t,n,r=this,o=[r];r=o.pop();)if(e(r),t=r.children)for(n=t.length-1;n>=0;--n)o.push(t[n]);return this},sum:function(e){return this.eachAfter((function(t){for(var n=+e(t.data)||0,r=t.children,o=r&&r.length;--o>=0;)n+=r[o].value;t.value=n}))},sort:function(e){return this.eachBefore((function(t){t.children&&t.children.sort(e)}))},path:function(e){for(var t=this,n=function(e,t){if(e===t)return e;var n=e.ancestors(),r=t.ancestors(),o=null;e=n.pop(),t=r.pop();for(;e===t;)o=e,e=n.pop(),t=r.pop();return o}(t,e),r=[t];t!==n;)t=t.parent,r.push(t);for(var o=r.length;e!==n;)r.splice(o,0,e),e=e.parent;return r},ancestors:function(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t},descendants:function(){var e=[];return this.each((function(t){e.push(t)})),e},leaves:function(){var e=[];return this.eachBefore((function(t){t.children||e.push(t)})),e},links:function(){var e=this,t=[];return e.each((function(n){n!==e&&t.push({source:n.parent,target:n})})),t},copy:function(){return O(this).eachBefore(M)}};var S=n(1153);function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=(0,l.memo)((function(e){var t=e.node,n=e.animatedProps,o=e.borderWidth,a=e.enableLabel,i=e.enableParentLabel,l=e.labelSkipSize,d=(0,r.Fg)(),f=a&&t.isLeaf&&(0===l||Math.min(t.width,t.height)>l),s=i&&t.isParent;return(0,c.jsxs)(u.animated.g,{transform:n.transform,children:[(0,c.jsx)(u.animated.rect,{width:(0,u.to)(n.width,(function(e){return Math.max(e,0)})),height:(0,u.to)(n.height,(function(e){return Math.max(e,0)})),fill:t.fill?t.fill:n.color,strokeWidth:o,stroke:t.borderColor,fillOpacity:t.opacity,onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),f&&(0,c.jsx)(u.animated.text,{textAnchor:"middle",dominantBaseline:"central",style:A(A({},d.labels.text),{},{fill:t.labelTextColor,pointerEvents:"none"}),fillOpacity:n.labelOpacity,transform:n.labelTransform,children:t.label}),s&&(0,c.jsx)(u.animated.text,{dominantBaseline:"central",style:A(A({},d.labels.text),{},{fill:t.parentLabelTextColor,pointerEvents:"none"}),fillOpacity:n.parentLabelOpacity,transform:n.parentLabelTransform,children:t.parentLabel})]})})),z=(0,l.memo)((function(e){var t=e.node,n=e.animatedProps,o=e.borderWidth,a=e.enableLabel,i=e.enableParentLabel,l=e.labelSkipSize,d=(0,r.Fg)(),f=a&&t.isLeaf&&(0===l||Math.min(t.width,t.height)>l),s=i&&t.isParent;return(0,c.jsxs)(u.animated.div,{id:t.path.replace(/[^\w]/gi,"-"),style:{boxSizing:"border-box",position:"absolute",top:0,left:0,transform:n.htmlTransform,width:n.width,height:n.height,borderWidth:o,borderStyle:"solid",borderColor:t.borderColor,overflow:"hidden"},children:[(0,c.jsx)(u.animated.div,{style:{boxSizing:"border-box",position:"absolute",top:0,left:0,opacity:t.opacity,width:n.width,height:n.height,background:n.color},onMouseEnter:t.onMouseEnter,onMouseMove:t.onMouseMove,onMouseLeave:t.onMouseLeave,onClick:t.onClick}),f&&(0,c.jsx)(u.animated.span,{style:A(A({},d.labels.text),{},{position:"absolute",display:"flex",top:-5,left:-5,width:10,height:10,justifyContent:"center",alignItems:"center",whiteSpace:"nowrap",color:t.labelTextColor,transformOrigin:"center center",transform:n.labelHtmlTransform,opacity:n.labelOpacity,pointerEvents:"none"}),children:t.label}),s&&(0,c.jsx)(u.animated.span,{style:A(A({},d.labels.text),{},{position:"absolute",display:"flex",justifyContent:"flex-start",alignItems:"center",whiteSpace:"nowrap",width:10,height:10,color:t.parentLabelTextColor,transformOrigin:"top left",transform:n.parentLabelHtmlTransform,opacity:n.parentLabelOpacity,pointerEvents:"none"}),children:t.parentLabel})]})})),I={identity:a().oneOfType([a().string,a().func]).isRequired,value:a().oneOfType([a().string,a().func]).isRequired,valueFormat:a().oneOfType([a().string,a().func]),colors:i.qi.isRequired,colorBy:i.t.isRequired,nodeOpacity:a().number.isRequired,leavesOnly:a().bool.isRequired,tile:r.be.isRequired,innerPadding:a().number.isRequired,outerPadding:a().number.isRequired,enableLabel:a().bool.isRequired,label:a().oneOfType([a().string,a().func]).isRequired,labelFormat:a().string,labelSkipSize:a().number.isRequired,labelTextColor:i.UO.isRequired,orientLabel:a().bool.isRequired,enableParentLabel:a().bool.isRequired,parentLabel:a().oneOfType([a().string,a().func]).isRequired,parentLabelSize:a().number.isRequired,parentLabelPosition:a().oneOf(["top","right","bottom","left"]).isRequired,parentLabelPadding:a().number.isRequired,parentLabelTextColor:i.UO.isRequired,borderWidth:a().number.isRequired,borderColor:i.UO.isRequired,isInteractive:a().bool.isRequired,onMouseEnter:a().func,onMouseMove:a().func,onMouseLeave:a().func,onClick:a().func,tooltip:a().func},q=(A(A({},I),{},{nodeComponent:a().elementType.isRequired,role:a().string.isRequired},r._U),A(A({},I),{},{nodeComponent:a().elementType.isRequired}),A(A({},I),{},{pixelRatio:a().number.isRequired}),{identity:"id",value:"value",tile:"squarify",leavesOnly:!1,innerPadding:0,outerPadding:0,colors:{scheme:"nivo"},colorBy:"pathComponents.1",nodeOpacity:.33,enableLabel:!0,label:"formattedValue",labelSkipSize:0,labelTextColor:{from:"color",modifiers:[["darker",1]]},orientLabel:!0,enableParentLabel:!0,parentLabel:"id",parentLabelSize:20,parentLabelPosition:"top",parentLabelPadding:6,parentLabelTextColor:{from:"color",modifiers:[["darker",1]]},borderWidth:1,borderColor:{from:"color",modifiers:[["darker",1]]},isInteractive:!0,animate:!0,motionConfig:"gentle"}),B=A(A({},q),{},{nodeComponent:E,role:"img",defs:[],fill:[]}),U=A(A({},q),{},{nodeComponent:z}),W=A(A({},q),{},{pixelRatio:"undefined"!==typeof window&&window.devicePixelRatio||1});function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var D=(0,l.memo)((function(e){var t=e.node,n=e.tooltip;return(0,c.jsx)(S._5,{id:t.id,value:t.formattedValue,enableChip:!0,color:t.color,renderContent:"function"===typeof n?n.bind(null,{node:t}):null})})),Z=function(e){var t=e.width,n=e.height,o=e.tile,a=e.innerPadding,i=e.outerPadding,u=e.enableParentLabel,c=e.parentLabelSize,d=e.parentLabelPosition,f=e.leavesOnly;return(0,l.useMemo)((function(){var e=function(){var e=x.ZP,t=!1,n=1,r=1,o=[0],a=L,i=L,l=L,u=L,c=L;function d(e){return e.x0=e.y0=0,e.x1=n,e.y1=r,e.eachBefore(f),o=[0],t&&e.eachBefore(y),e}function f(t){var n=o[t.depth],r=t.x0+n,d=t.y0+n,f=t.x1-n,s=t.y1-n;f<r&&(r=f=(r+f)/2),s<d&&(d=s=(d+s)/2),t.x0=r,t.y0=d,t.x1=f,t.y1=s,t.children&&(n=o[t.depth+1]=a(t)/2,r+=c(t)-n,d+=i(t)-n,(f-=l(t)-n)<r&&(r=f=(r+f)/2),(s-=u(t)-n)<d&&(d=s=(d+s)/2),e(t,r,d,f,s))}return d.round=function(e){return arguments.length?(t=!!e,d):t},d.size=function(e){return arguments.length?(n=+e[0],r=+e[1],d):[n,r]},d.tile=function(t){return arguments.length?(e=m(t),d):e},d.padding=function(e){return arguments.length?d.paddingInner(e).paddingOuter(e):d.paddingInner()},d.paddingInner=function(e){return arguments.length?(a="function"===typeof e?e:j(+e),d):a},d.paddingOuter=function(e){return arguments.length?d.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):d.paddingTop()},d.paddingTop=function(e){return arguments.length?(i="function"===typeof e?e:j(+e),d):i},d.paddingRight=function(e){return arguments.length?(l="function"===typeof e?e:j(+e),d):l},d.paddingBottom=function(e){return arguments.length?(u="function"===typeof e?e:j(+e),d):u},d.paddingLeft=function(e){return arguments.length?(c="function"===typeof e?e:j(+e),d):c},d}().size([t,n]).tile((0,r.Md)(o)).round(!0).paddingInner(a).paddingOuter(i);if(u&&!f){var l=c+2*i;e["padding".concat(g()(d))](l)}return e}),[t,n,o,a,i,u,c,d,f])},Y=function(e){var t=e.root,n=e.getValue;return(0,l.useMemo)((function(){return O(t).sum(n)}),[t,n])},_=function(e){return(0,l.useMemo)((function(){return"function"===typeof e?e:function(t){return f()(t,e)}}),[e])},N=function(e){var t=e.data,n=e.identity,o=void 0===n?B.identity:n,a=e.value,u=void 0===a?B.value:a,c=e.valueFormat,d=e.leavesOnly,f=void 0===d?B.leavesOnly:d,s=e.width,b=e.height,v=e.tile,g=void 0===v?B.tile:v,y=e.innerPadding,x=void 0===y?B.innerPadding:y,m=e.outerPadding,L=void 0===m?B.outerPadding:m,j=e.label,C=void 0===j?B.label:j,O=e.orientLabel,w=void 0===O?B.orientLabel:O,M=e.enableParentLabel,P=void 0===M?B.enableParentLabel:M,R=e.parentLabel,S=void 0===R?B.parentLabel:R,T=e.parentLabelSize,k=void 0===T?B.parentLabelSize:T,A=e.parentLabelPosition,E=void 0===A?B.parentLabelPosition:A,z=e.parentLabelPadding,I=void 0===z?B.parentLabelPadding:z,q=e.colors,U=void 0===q?B.colors:q,W=e.colorBy,F=void 0===W?B.colorBy:W,D=e.nodeOpacity,N=void 0===D?B.nodeOpacity:D,V=e.borderColor,X=void 0===V?B.borderColor:V,G=e.labelTextColor,$=void 0===G?B.labelTextColor:G,J=e.parentLabelTextColor,K=void 0===J?B.parentLabelTextColor:J,Q=_(o),ee=_(u),te=(0,r.O_)(c),ne=_(C),re=_(S),oe=Z({width:s,height:b,tile:g,innerPadding:x,outerPadding:L,enableParentLabel:P,parentLabelSize:k,parentLabelPosition:E,leavesOnly:f}),ae=Y({root:t,getValue:ee}),ie=(0,l.useMemo)((function(){var e=h()(ae);return oe(e),f?e.leaves():e.descendants()}),[ae,oe,f]),le=(0,l.useMemo)((function(){return ie.map((function(e){var t=function(e,t){var n=e.ancestors().map((function(e){return t(e.data)})).reverse();return[n.join("."),n]}(e,Q),n=H(t,2),r=n[0],o=n[1],a={id:Q(e.data),path:r,pathComponents:o,data:p()(e.data,"children"),x:e.x0,y:e.y0,width:e.x1-e.x0,height:e.y1-e.y0,value:e.value,formattedValue:te(e.value),treeDepth:e.depth,treeHeight:e.height,isParent:e.height>0,isLeaf:0===e.height};return a.label=ne(a),a.parentLabel=re(a),a.parentLabelRotation=0,"top"===E&&(a.parentLabelX=L+I,a.parentLabelY=L+k/2),"right"===E&&(a.parentLabelX=a.width-L-k/2,a.parentLabelY=a.height-L-I,a.parentLabelRotation=-90),"bottom"===E&&(a.parentLabelX=L+I,a.parentLabelY=a.height-L-k/2),"left"===E&&(a.parentLabelX=L+k/2,a.parentLabelY=a.height-L-I,a.parentLabelRotation=-90),a}))}),[ie,f,Q,te,ne,re,k,E,I,L]),ue=(0,r.Fg)(),ce=(0,i.U)(U,F),de=(0,i.Bf)(X,ue),fe=(0,i.Bf)($,ue),se=(0,i.Bf)(K,ue),pe=(0,l.useMemo)((function(){return le.map((function(e){return e.opacity=N,e.labelRotation=w&&e.height>e.width?-90:0,e.color=ce(e),e.borderColor=de(e),e.labelTextColor=fe(e),e.parentLabelTextColor=se(e),e}))}),[le,ce,N,de,fe,se,w]);return{hierarchy:ae,nodes:pe,layout:oe}},V=function(e){return{transform:"translate(".concat(e.x,",").concat(e.y,")"),htmlTransform:"translate(".concat(e.x,"px,").concat(e.y,"px)"),labelOpacity:1,labelTransform:"translate(".concat(e.width/2,",").concat(e.height/2,") rotate(").concat(e.labelRotation,")"),labelHtmlTransform:"translate(".concat(e.width/2,"px,").concat(e.height/2,"px) rotate(").concat(e.labelRotation,"deg)"),parentLabelOpacity:1,parentLabelTransform:"translate(".concat(e.parentLabelX,",").concat(e.parentLabelY,") rotate(").concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(".concat(e.parentLabelX-(0===e.parentLabelRotation?0:5),"px,").concat(e.parentLabelY-(0===e.parentLabelRotation?5:0),"px) rotate(").concat(e.parentLabelRotation,"deg)"),width:e.width,height:e.height,color:e.color}},X=function(e){var t=e.x+e.width/2,n=e.y+e.height/2;return{transform:"translate(".concat(t,",").concat(n,")"),transformPixels:"translate(".concat(t,"px,").concat(n,"px)"),labelOpacity:0,labelTransform:"translate(0,0) rotate(".concat(e.labelRotation,")"),parentLabelOpacity:0,parentLabelTransform:"translate(0,0) rotate(".concat(e.parentLabelRotation,")"),parentLabelHtmlTransform:"translate(0px,0px) rotate(".concat(e.parentLabelRotation,"deg)"),width:0,height:0,color:e.color}},G=function(e){var t=e.nodes,n=e.nodeComponent,o=e.borderWidth,a=e.enableLabel,i=e.labelSkipSize,d=e.enableParentLabel,f=function(e,t){var n=t.isInteractive,r=t.onMouseEnter,o=t.onMouseMove,a=t.onMouseLeave,i=t.onClick,u=t.tooltip,d=(0,S.lL)(),f=d.showTooltipFromEvent,s=d.hideTooltip,p=(0,l.useCallback)((function(e,t){f((0,c.jsx)(D,{node:e,tooltip:u}),t,"left")}),[f,u]),b=(0,l.useCallback)((function(e,t){p(e,t),r&&r(e,t)}),[r,p]),h=(0,l.useCallback)((function(e,t){p(e,t),o&&o(e,t)}),[o,p]),v=(0,l.useCallback)((function(e,t){s(),a&&a(e,t)}),[a,s]),g=(0,l.useCallback)((function(e,t){i&&i(e,t)}),[i]);return(0,l.useMemo)((function(){return e.map((function(e){return n?A(A({},e),{},{onMouseEnter:function(t){return b(e,t)},onMouseMove:function(t){return h(e,t)},onMouseLeave:function(t){return v(e,t)},onClick:function(t){return g(e,t)}}):e}))}),[e,b,h,v,g])}(t,{isInteractive:e.isInteractive,onMouseEnter:e.onMouseEnter,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,tooltip:e.tooltip}),s=(0,r.tf)(),p=s.animate,b=s.config;return(0,u.useTransition)(f,{key:function(e){return e.path},initial:function(e){return V(e)},from:function(e){return X(e)},enter:function(e){return V(e)},update:function(e){return V(e)},leave:function(e){return X(e)},config:b,immediate:!p})((function(e,t){return(0,l.createElement)(n,{key:t.path,node:t,animatedProps:e,borderWidth:o,enableLabel:a,labelSkipSize:i,enableParentLabel:d})}))};G.propTypes={nodes:a().arrayOf(a().shape({})).isRequired,nodeComponent:a().elementType.isRequired,borderWidth:a().number.isRequired,enableLabel:a().bool.isRequired,labelSkipSize:a().number.isRequired,enableParentLabel:a().bool.isRequired,isInteractive:a().bool.isRequired,onMouseEnter:a().func,onMouseMove:a().func,onMouseLeave:a().func,onClick:a().func,tooltip:a().elementType};var $=(0,l.memo)(G),J=(0,r.li)((function(e){var t=e.data,n=e.identity,o=e.value,a=e.tile,i=e.nodeComponent,l=e.valueFormat,u=e.innerPadding,d=e.outerPadding,f=e.leavesOnly,s=e.width,p=e.height,b=e.margin,h=e.colors,v=e.colorBy,g=e.nodeOpacity,y=e.borderWidth,x=e.borderColor,m=e.defs,L=e.fill,j=e.enableLabel,C=e.label,O=e.labelTextColor,w=e.orientLabel,M=e.labelSkipSize,P=e.enableParentLabel,R=e.parentLabel,S=e.parentLabelSize,T=e.parentLabelPosition,k=e.parentLabelPadding,A=e.parentLabelTextColor,E=e.isInteractive,z=e.onMouseEnter,I=e.onMouseMove,q=e.onMouseLeave,B=e.onClick,U=e.tooltip,W=e.role,F=(0,r.Bs)(s,p,b),H=F.margin,D=F.innerWidth,Z=F.innerHeight,Y=F.outerWidth,_=F.outerHeight,V=N({data:t,identity:n,value:o,valueFormat:l,leavesOnly:f,width:D,height:Z,tile:a,innerPadding:u,outerPadding:d,colors:h,colorBy:v,nodeOpacity:g,borderColor:x,label:C,labelTextColor:O,orientLabel:w,enableParentLabel:P,parentLabel:R,parentLabelSize:S,parentLabelPosition:T,parentLabelPadding:k,parentLabelTextColor:A}).nodes,X=(0,r.yU)(m,V,L);return(0,c.jsx)(r.tM,{width:Y,height:_,margin:H,defs:X,role:W,children:(0,c.jsx)($,{nodes:V,nodeComponent:i,borderWidth:y,enableLabel:j,labelSkipSize:M,enableParentLabel:P,isInteractive:E,onMouseEnter:z,onMouseMove:I,onMouseLeave:q,onClick:B,tooltip:U})})}));J.defaultProps=B;var K=function(e){return(0,c.jsx)(r.d,{children:function(t){var n=t.width,r=t.height;return(0,c.jsx)(J,A({width:n,height:r},e))}})},Q=(0,r.li)((function(e){var t=e.data,n=e.identity,o=e.value,a=e.tile,i=e.nodeComponent,l=e.valueFormat,u=e.innerPadding,d=e.outerPadding,f=e.leavesOnly,s=e.width,p=e.height,b=e.margin,h=e.colors,v=e.colorBy,g=e.nodeOpacity,y=e.borderWidth,x=e.borderColor,m=e.enableLabel,L=e.label,j=e.labelTextColor,C=e.orientLabel,O=e.labelSkipSize,w=e.enableParentLabel,M=e.parentLabel,P=e.parentLabelSize,R=e.parentLabelPosition,S=e.parentLabelPadding,T=e.parentLabelTextColor,k=e.isInteractive,A=e.onMouseEnter,E=e.onMouseMove,z=e.onMouseLeave,I=e.onClick,q=e.tooltip,B=(0,r.Bs)(s,p,b),U=B.margin,W=B.innerWidth,F=B.innerHeight,H=B.outerWidth,D=B.outerHeight,Z=N({data:t,identity:n,value:o,valueFormat:l,leavesOnly:f,width:W,height:F,tile:a,innerPadding:u,outerPadding:d,colors:h,colorBy:v,nodeOpacity:g,borderColor:x,label:L,labelTextColor:j,orientLabel:C,enableParentLabel:w,parentLabel:M,parentLabelSize:P,parentLabelPosition:R,parentLabelPadding:S,parentLabelTextColor:T}).nodes;return(0,c.jsx)("div",{style:{position:"relative",width:H,height:D},children:(0,c.jsx)("div",{style:{position:"absolute",top:U.top,left:U.left},children:(0,c.jsx)($,{nodes:Z,nodeComponent:i,borderWidth:y,enableLabel:m,labelSkipSize:O,enableParentLabel:w,isInteractive:k,onMouseEnter:A,onMouseMove:E,onMouseLeave:z,onClick:I,tooltip:q})})})}));Q.defaultProps=U;var ee=function(e,t,n,o){return e.find((function(e){return(0,r.zn)(e.x+t.left,e.y+t.top,e.width,e.height,n,o)}))},te=(0,r.li)((function(e){var t=e.data,n=e.identity,o=e.value,a=e.tile,i=e.valueFormat,u=e.innerPadding,d=e.outerPadding,f=e.leavesOnly,s=e.width,p=e.height,b=e.margin,h=e.colors,v=e.colorBy,g=e.nodeOpacity,y=e.borderWidth,x=e.borderColor,m=e.enableLabel,L=e.label,j=e.labelTextColor,C=e.orientLabel,O=e.labelSkipSize,w=e.isInteractive,M=e.onMouseMove,P=e.onClick,R=e.tooltip,T=e.pixelRatio,k=(0,l.useRef)(null),A=(0,r.Bs)(s,p,b),E=A.margin,z=A.innerWidth,I=A.innerHeight,q=A.outerWidth,B=A.outerHeight,U=N({data:t,identity:n,value:o,valueFormat:i,leavesOnly:f,width:z,height:I,tile:a,innerPadding:u,outerPadding:d,colors:h,colorBy:v,nodeOpacity:g,borderColor:x,label:L,labelTextColor:j,orientLabel:C,enableParentLabel:!1}).nodes,W=(0,r.Fg)();(0,l.useEffect)((function(){k.current.width=q*T,k.current.height=B*T;var e=k.current.getContext("2d");e.scale(T,T),e.fillStyle=W.background,e.fillRect(0,0,q,B),e.translate(E.left,E.top),U.forEach((function(t){e.fillStyle=t.color,e.fillRect(t.x,t.y,t.width,t.height),y>0&&(e.strokeStyle=t.borderColor,e.lineWidth=y,e.strokeRect(t.x,t.y,t.width,t.height))})),m&&(e.textAlign="center",e.textBaseline="middle",e.font="".concat(W.labels.text.fontSize,"px ").concat(W.labels.text.fontFamily),U.forEach((function(t){if(t.isLeaf&&(0===O||Math.min(t.width,t.height)>O)){var n=C&&t.height>t.width;e.save(),e.translate(t.x+t.width/2,t.y+t.height/2),e.rotate((0,r.Ht)(n?-90:0)),e.fillStyle=t.labelTextColor,e.fillText(t.label,0,0),e.restore()}})))}),[k,U,q,B,z,I,E,y,m,C,O,W,T]);var F=(0,S.lL)(),Z=F.showTooltipFromEvent,Y=F.hideTooltip,_=(0,l.useCallback)((function(e){var t=H((0,r.P6)(k.current,e),2),n=t[0],o=t[1],a=ee(U,E,n,o);void 0!==a?(Z((0,c.jsx)(D,{node:a,tooltip:R}),e,"left"),M&&M(a,e)):Y()}),[k,U,E,Z,Y,R,M]),V=(0,l.useCallback)((function(){Y()}),[Y]),X=(0,l.useCallback)((function(e){var t=H((0,r.P6)(k.current,e),2),n=t[0],o=t[1],a=ee(U,E,n,o);void 0!==a&&P&&P(a,e)}),[k,U,E,P]);return(0,c.jsx)("canvas",{ref:k,width:q*T,height:B*T,style:{width:q,height:B},onMouseEnter:w?_:void 0,onMouseMove:w?_:void 0,onMouseLeave:w?V:void 0,onClick:w?X:void 0})}));te.defaultProps=W},4550:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}},2095:function(e){e.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}},4622:function(e){e.exports=function(e){return e.split("")}},240:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},1855:function(e,t,n){var r=n(4503),o=n(2742);e.exports=function(e,t){return e&&r(t,o(t),e)}},5076:function(e,t,n){var r=n(4503),o=n(3961);e.exports=function(e,t){return e&&r(t,o(t),e)}},1905:function(e,t,n){var r=n(2854),o=n(4550),a=n(8463),i=n(1855),l=n(5076),u=n(4523),c=n(291),d=n(2455),f=n(7636),s=n(8248),p=n(5341),b=n(8383),h=n(9243),v=n(9759),g=n(548),y=n(3629),x=n(5174),m=n(103),L=n(8092),j=n(6995),C=n(2742),O=n(3961),w="[object Arguments]",M="[object Function]",P="[object Object]",R={};R[w]=R["[object Array]"]=R["[object ArrayBuffer]"]=R["[object DataView]"]=R["[object Boolean]"]=R["[object Date]"]=R["[object Float32Array]"]=R["[object Float64Array]"]=R["[object Int8Array]"]=R["[object Int16Array]"]=R["[object Int32Array]"]=R["[object Map]"]=R["[object Number]"]=R[P]=R["[object RegExp]"]=R["[object Set]"]=R["[object String]"]=R["[object Symbol]"]=R["[object Uint8Array]"]=R["[object Uint8ClampedArray]"]=R["[object Uint16Array]"]=R["[object Uint32Array]"]=!0,R["[object Error]"]=R[M]=R["[object WeakMap]"]=!1,e.exports=function e(t,n,S,T,k,A){var E,z=1&n,I=2&n,q=4&n;if(S&&(E=k?S(t,T,k,A):S(t)),void 0!==E)return E;if(!L(t))return t;var B=y(t);if(B){if(E=h(t),!z)return c(t,E)}else{var U=b(t),W=U==M||"[object GeneratorFunction]"==U;if(x(t))return u(t,z);if(U==P||U==w||W&&!k){if(E=I||W?{}:g(t),!z)return I?f(t,l(E,t)):d(t,i(E,t))}else{if(!R[U])return k?t:{};E=v(t,U,z)}}A||(A=new r);var F=A.get(t);if(F)return F;A.set(t,E),j(t)?t.forEach((function(r){E.add(e(r,n,S,r,t,A))})):m(t)&&t.forEach((function(r,o){E.set(o,e(r,n,S,o,t,A))}));var H=B?void 0:(q?I?p:s:I?O:C)(t);return o(H||t,(function(r,o){H&&(r=t[o=r]),a(E,o,e(r,n,S,o,t,A))})),E}},3085:function(e,t,n){var r=n(8383),o=n(3141);e.exports=function(e){return o(e)&&"[object Map]"==r(e)}},8680:function(e,t,n){var r=n(8383),o=n(3141);e.exports=function(e){return o(e)&&"[object Set]"==r(e)}},4632:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},2646:function(e){e.exports=function(e,t,n){var r=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(n=n>o?o:n)<0&&(n+=o),o=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(o);++r<o;)a[r]=e[r+t];return a}},6555:function(e,t,n){var r=n(3082),o=n(5727),a=n(8978),i=n(9793);e.exports=function(e,t){return t=r(t,e),null==(e=a(e,t))||delete e[i(o(t))]}},9813:function(e,t,n){var r=n(2646);e.exports=function(e,t,n){var o=e.length;return n=void 0===n?o:n,!t&&n>=o?e:r(e,t,n)}},1022:function(e,t,n){var r=n(7010);e.exports=function(e,t){var n=t?r(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}},8503:function(e){var t=/\w*$/;e.exports=function(e){var n=new e.constructor(e.source,t.exec(e));return n.lastIndex=e.lastIndex,n}},4720:function(e,t,n){var r=n(7197),o=r?r.prototype:void 0,a=o?o.valueOf:void 0;e.exports=function(e){return a?Object(a.call(e)):{}}},2455:function(e,t,n){var r=n(4503),o=n(5918);e.exports=function(e,t){return r(e,o(e),t)}},7636:function(e,t,n){var r=n(4503),o=n(8487);e.exports=function(e,t){return r(e,o(e),t)}},322:function(e,t,n){var r=n(9813),o=n(7302),a=n(7580),i=n(3518);e.exports=function(e){return function(t){t=i(t);var n=o(t)?a(t):void 0,l=n?n[0]:t.charAt(0),u=n?r(n,1).join(""):t.slice(1);return l[e]()+u}}},7810:function(e,t,n){var r=n(2095),o=n(4857),a=n(5660),i=RegExp("['\u2019]","g");e.exports=function(e){return function(t){return r(a(o(t).replace(i,"")),e,"")}}},6013:function(e,t,n){var r=n(3977);e.exports=function(e){return r(e)?void 0:e}},5868:function(e,t,n){var r=n(4632)({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i","\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S","\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe","\u0149":"'n","\u017f":"s"});e.exports=r},5341:function(e,t,n){var r=n(1986),o=n(8487),a=n(3961);e.exports=function(e){return r(e,a,o)}},8487:function(e,t,n){var r=n(1705),o=n(1137),a=n(5918),i=n(8174),l=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)r(t,a(e)),e=o(e);return t}:i;e.exports=l},7302:function(e){var t=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return t.test(e)}},7137:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},9243:function(e){var t=Object.prototype.hasOwnProperty;e.exports=function(e){var n=e.length,r=new e.constructor(n);return n&&"string"==typeof e[0]&&t.call(e,"index")&&(r.index=e.index,r.input=e.input),r}},9759:function(e,t,n){var r=n(7010),o=n(1022),a=n(8503),i=n(4720),l=n(613);e.exports=function(e,t,n){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return r(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return o(e,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return l(e,n);case"[object Map]":case"[object Set]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return a(e);case"[object Symbol]":return i(e)}}},8978:function(e,t,n){var r=n(8667),o=n(2646);e.exports=function(e,t){return t.length<2?e:r(e,o(t,0,-1))}},7580:function(e,t,n){var r=n(4622),o=n(7302),a=n(2129);e.exports=function(e){return o(e)?a(e):r(e)}},2129:function(e){var t="[\\ud800-\\udfff]",n="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",r="\\ud83c[\\udffb-\\udfff]",o="[^\\ud800-\\udfff]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="(?:"+n+"|"+r+")"+"?",u="[\\ufe0e\\ufe0f]?",c=u+l+("(?:\\u200d(?:"+[o,a,i].join("|")+")"+u+l+")*"),d="(?:"+[o+n+"?",n,a,i,t].join("|")+")",f=RegExp(r+"(?="+r+")|"+d+c,"g");e.exports=function(e){return e.match(f)||[]}},1029:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+o+"]",i="\\d+",l="[\\u2700-\\u27bf]",u="["+n+"]",c="[^\\ud800-\\udfff"+o+i+t+n+r+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+r+"]",p="(?:"+u+"|"+c+")",b="(?:"+s+"|"+c+")",h="(?:['\u2019](?:d|ll|m|re|s|t|ve))?",v="(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",y="[\\ufe0e\\ufe0f]?",x=y+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,f].join("|")+")"+y+g+")*"),m="(?:"+[l,d,f].join("|")+")"+x,L=RegExp([s+"?"+u+"+"+h+"(?="+[a,s,"$"].join("|")+")",b+"+"+v+"(?="+[a,s+p,"$"].join("|")+")",s+"?"+p+"+"+h,s+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",i,m].join("|"),"g");e.exports=function(e){return e.match(L)||[]}},8121:function(e,t,n){var r=n(1905);e.exports=function(e){return r(e,5)}},4857:function(e,t,n){var r=n(5868),o=n(3518),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(a,r).replace(i,"")}},103:function(e,t,n){var r=n(3085),o=n(6194),a=n(9494),i=a&&a.isMap,l=i?o(i):r;e.exports=l},6995:function(e,t,n){var r=n(8680),o=n(6194),a=n(9494),i=a&&a.isSet,l=i?o(i):r;e.exports=l},4242:function(e,t,n){var r=n(8950),o=n(1905),a=n(6555),i=n(3082),l=n(4503),u=n(6013),c=n(7038),d=n(5341),f=c((function(e,t){var n={};if(null==e)return n;var c=!1;t=r(t,(function(t){return t=i(t,e),c||(c=t.length>1),t})),l(e,d(e),n),c&&(n=o(n,7,u));for(var f=t.length;f--;)a(n,t[f]);return n}));e.exports=f},3266:function(e,t,n){var r=n(7810),o=n(2085),a=r((function(e,t,n){return e+(n?" ":"")+o(t)}));e.exports=a},2085:function(e,t,n){var r=n(322)("toUpperCase");e.exports=r},5660:function(e,t,n){var r=n(240),o=n(7137),a=n(3518),i=n(1029);e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?o(e)?i(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=740.8393ae3e.chunk.js.map