"use strict";(self.webpackChunkreact_saas_template=self.webpackChunkreact_saas_template||[]).push([[883],{53883:function(e,t,n){n.r(t);var a=n(29439),r=n(72791),o=n(20601),s=n(27906),i=n(90466),l=n(12891),c=n(18602),h=n(35667),d=n(91951),u=n(10283),p=n(41971),y=n(38302),b=n(67025),f=n(66532),m=n(51859),x=n(42953),g=n(38317),k=n(65952),j=n(80184);function w(e){return(0,d.Z)(new Date(1e3*e),"MMMM d, p yyyy")}function M(e,t,n){var a=Number.POSITIVE_INFINITY;return e.forEach((function(e){a>e[t]&&(a=e[t])})),Math.round(a-a*n)}var Z=["1 Week","1 Month","6 Months"];t.default=(0,g.Z)((function(e){return{cardContentInner:{marginTop:e.spacing(-4)}}}),{withTheme:!0})((function(e){var t=e.color,n=e.data,d=e.title,g=e.classes,C=e.theme,v=e.height,S=(0,r.useState)(null),I=(0,a.Z)(S,2),N=I[0],T=I[1],E=(0,r.useState)("1 Month"),W=(0,a.Z)(E,2),_=W[0],F=W[1],L=(0,r.useCallback)((function(e){T(e.currentTarget)}),[T]),H=(0,r.useCallback)((function(e){return[e,d]}),[d]),K=(0,r.useCallback)((function(){switch(_){case"1 Week":return"Last week";case"1 Month":return"Last month";case"6 Months":return"Last 6 months";default:throw new Error("No branch selected in switch-statement")}}),[_]),P=(0,r.useCallback)((function(){var e;switch(_){case"1 Week":e=604800;break;case"1 Month":e=2678400;break;case"6 Months":e=16070400;break;default:throw new Error("No branch selected in switch-statement")}for(var t=new Date/1e3-e,a=[],r=0;r<n.length;r+=1)t<n[r].timestamp&&a.unshift(n[r]);return a}),[n,_]),z=(0,r.useCallback)((function(){T(null)}),[T]),B=(0,r.useCallback)((function(e){F(e),z()}),[F,z]),D=Boolean(N);return(0,j.jsxs)(u.Z,{children:[(0,j.jsx)(p.Z,{pt:2,px:2,pb:4,children:(0,j.jsxs)(p.Z,{display:"flex",justifyContent:"space-between",children:[(0,j.jsxs)("div",{children:[(0,j.jsx)(y.Z,{variant:"subtitle1",children:d}),(0,j.jsx)(y.Z,{variant:"body2",color:"textSecondary",children:K()})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)(b.Z,{"aria-label":"More","aria-owns":D?"long-menu":void 0,"aria-haspopup":"true",onClick:L,children:(0,j.jsx)(k.Z,{})}),(0,j.jsx)(f.Z,{id:"long-menu",anchorEl:N,open:D,onClose:z,PaperProps:{style:{maxHeight:216,width:200}},disableScrollLock:!0,children:Z.map((function(e){return(0,j.jsx)(m.Z,{selected:e===_,onClick:function(){B(e)},name:e,children:e},e)}))})]})]})}),(0,j.jsx)(x.Z,{children:(0,j.jsx)(p.Z,{className:g.cardContentInner,height:v,children:(0,j.jsx)(o.h,{width:"100%",height:"100%",children:(0,j.jsxs)(s.T,{data:P(),type:"number",children:[(0,j.jsx)(i.K,{dataKey:"timestamp",type:"number",domain:["dataMin","dataMax"],hide:!0}),(0,j.jsx)(l.B,{domain:[M(n,"value",.05),"dataMax"],hide:!0}),(0,j.jsx)(c.u,{type:"monotone",dataKey:"value",stroke:t,fill:t}),(0,j.jsx)(h.u,{labelFormatter:w,formatter:H,cursor:!1,contentStyle:{border:"none",padding:C.spacing(1),borderRadius:C.shape.borderRadius,boxShadow:C.shadows[1]},labelStyle:C.typography.body1,itemStyle:{fontSize:C.typography.body1.fontSize,letterSpacing:C.typography.body1.letterSpacing,fontFamily:C.typography.body1.fontFamily,lineHeight:C.typography.body1.lineHeight,fontWeight:C.typography.body1.fontWeight}})]})})})})]})}))}}]);
//# sourceMappingURL=883.9d8054f3.chunk.js.map