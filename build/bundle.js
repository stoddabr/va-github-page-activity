var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function i(t){t.parentNode.removeChild(t)}function a(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function s(t){return document.createElement(t)}function f(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function p(){return d(" ")}function h(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){return""===t?null:+t}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function y(t,e){t.value=null==e?"":e}function v(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function _(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}t.selectedIndex=-1}let x;function b(t){x=t}function w(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const k=[],E=[],S=[],N=[],C=Promise.resolve();let j=!1;function A(t){S.push(t)}const F=new Set;let I=0;function O(){const t=x;do{for(;I<k.length;){const t=k[I];I++,b(t),P(t.$$)}for(b(null),k.length=0,I=0;E.length;)E.pop()();for(let t=0;t<S.length;t+=1){const e=S[t];F.has(e)||(F.add(e),e())}S.length=0}while(k.length);for(;N.length;)N.pop()();j=!1,F.clear(),b(t)}function P(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const q=new Set;function z(t,e){t&&t.i&&(q.delete(t),t.i(e))}function B(t,n,l,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:s}=t.$$;u&&u.m(n,l),c||A((()=>{const n=i.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(A)}function L(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(k.push(t),j||(j=!0,C.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,r,l,c,u,a,s,f=[-1]){const d=x;b(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};s&&s(p.root);let h=!1;if(p.ctx=l?l(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&M(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&z(e.$$.fragment),B(e,r.target,r.anchor,r.customElement),O()}b(d)}class T{$destroy(){L(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(t,e,n){const o=t.slice();return o[13]=e[n],o[15]=n,o}function G(t,e,n){const o=t.slice();return o[16]=e[n],o}function H(t){let e,n,o,r,l=t[16]+"";return{c(){e=s("option"),n=d(l),o=p(),e.__value=r=t[16],e.value=e.__value},m(t,r){u(t,e,r),c(e,n),c(e,o)},p(t,o){16&o&&l!==(l=t[16]+"")&&$(n,l),16&o&&r!==(r=t[16])&&(e.__value=r,e.value=e.__value)},d(t){t&&i(e)}}}function J(t){let e,n=t[0],o=[];for(let e=0;e<n.length;e+=1)o[e]=K(D(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=d("")},m(t,n){for(let e=0;e<o.length;e+=1)o[e].m(t,n);u(t,e,n)},p(t,r){if(69&r){let l;for(n=t[0],l=0;l<n.length;l+=1){const c=D(t,n,l);o[l]?o[l].p(c,r):(o[l]=K(c),o[l].c(),o[l].m(e.parentNode,e))}for(;l<o.length;l+=1)o[l].d(1);o.length=n.length}},d(t){a(o,t),t&&i(e)}}}function K(t){let e,n,o,r,l,a,s,p,h=t[13].age+"";return{c(){e=f("g"),n=f("text"),o=d(h),l=f("rect"),g(n,"x","0"),g(n,"y",r=t[6]/4+3),g(n,"class","svelte-2u595"),g(l,"stroke","white"),g(l,"stroke-width","1"),g(l,"id","bar"),g(l,"x","40"),g(l,"y","0"),g(l,"height",a=t[6]/2),g(l,"width",s=t[13].people/t[2]*U),g(l,"class","svelte-2u595"),g(e,"transform",p="translate(0, "+(t[15]+1)*t[6]+")")},m(t,r){u(t,e,r),c(e,n),c(n,o),c(e,l)},p(t,c){1&c&&h!==(h=t[13].age+"")&&$(o,h),64&c&&r!==(r=t[6]/4+3)&&g(n,"y",r),64&c&&a!==(a=t[6]/2)&&g(l,"height",a),5&c&&s!==(s=t[13].people/t[2]*U)&&g(l,"width",s),64&c&&p!==(p="translate(0, "+(t[15]+1)*t[6]+")")&&g(e,"transform",p)},d(t){t&&i(e)}}}function Q(e){let n,r,l,m,x,b,w,k,E,S,N,C,j,F,I,O,P,q,z,B,L,M=e[4],R=[];for(let t=0;t<M.length;t+=1)R[t]=H(G(e,M,t));let T=void 0!==e[0]&&J(e);return{c(){n=s("div"),r=s("label"),l=s("span"),l.textContent="Select year",m=p(),x=s("select");for(let t=0;t<R.length;t+=1)R[t].c();b=p(),w=s("label"),k=s("span"),k.textContent="Change bar height",E=p(),S=s("input"),N=p(),C=s("label"),j=s("span"),F=d("Set min age: "),I=d(e[5]),O=p(),P=s("input"),q=p(),z=f("svg"),T&&T.c(),void 0===e[3]&&A((()=>e[8].call(x))),g(S,"type","range"),g(S,"min","10"),g(S,"max","50"),g(S,"class","slider"),g(S,"id","myRange"),g(P,"type","range"),g(P,"min","0"),g(P,"max","100"),g(P,"step","5"),g(P,"class","slider"),g(P,"id","myRange"),g(n,"class","input-container svelte-2u595"),g(z,"id","visualization"),v(z,"height",(e[1]+1)*e[6]+"px"),g(z,"class","svelte-2u595")},m(t,o){u(t,n,o),c(n,r),c(r,l),c(r,m),c(r,x);for(let t=0;t<R.length;t+=1)R[t].m(x,null);_(x,e[3]),c(n,b),c(n,w),c(w,k),c(w,E),c(w,S),y(S,e[6]),c(n,N),c(n,C),c(C,j),c(j,F),c(j,I),c(C,O),c(C,P),y(P,e[5]),u(t,q,o),u(t,z,o),T&&T.m(z,null),B||(L=[h(x,"change",e[8]),h(x,"change",e[7]),h(S,"change",e[9]),h(S,"input",e[9]),h(P,"change",e[10]),h(P,"input",e[10]),h(P,"change",e[7])],B=!0)},p(t,[e]){if(16&e){let n;for(M=t[4],n=0;n<M.length;n+=1){const o=G(t,M,n);R[n]?R[n].p(o,e):(R[n]=H(o),R[n].c(),R[n].m(x,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=M.length}24&e&&_(x,t[3]),64&e&&y(S,t[6]),32&e&&$(I,t[5]),32&e&&y(P,t[5]),void 0!==t[0]?T?T.p(t,e):(T=J(t),T.c(),T.m(z,null)):T&&(T.d(1),T=null),66&e&&v(z,"height",(t[1]+1)*t[6]+"px")},i:t,o:t,d(t){t&&i(n),a(R,t),t&&i(q),t&&i(z),T&&T.d(),B=!1,o(L)}}}const U=500;function V(t,e,n){let o,r,l=0,c=10,u=2e3,i=[],a=0;w((async()=>{const t=await fetch("./static/census2000.json");o=(await t.json()).demographic_groups,console.log(o),n(0,r=o.filter((t=>2e3==t.year&&"F"==t.sex))),r&&n(1,l=r.length),n(2,c=r.reduce(((t,e)=>t&&t>e.people?t:e.people))),n(4,i=[...new Set(o.map((t=>t.year)))]),console.log({data_len:l,popMax:c,years:i})}));let s=30;return[r,l,c,u,i,a,s,function(){n(0,r=o.filter((t=>{return t.year==u&&"F"==t.sex&&(e=t.age,!!((e=Number.parseInt(e.split("-")[1]))&&e>a));var e})))},function(){u=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(3,u),n(4,i)},function(){s=m(this.value),n(6,s)},function(){a=m(this.value),n(5,a)}]}class W extends T{constructor(t){super(),R(this,t,V,Q,l,{})}}function X(e){let n,o,r,l,a;return l=new W({}),{c(){var t;n=s("main"),o=s("h1"),o.textContent=`In-Class Acitivity by ${e[0]}!`,r=p(),(t=l.$$.fragment)&&t.c()},m(t,e){u(t,n,e),c(n,o),c(n,r),B(l,n,null),a=!0},p:t,i(t){a||(z(l.$$.fragment,t),a=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push((()=>{q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(l.$$.fragment,t),a=!1},d(t){t&&i(n),L(l)}}}function Y(t,e,n){return['Brett "Sveltalicious" Stoddard']}return new class extends T{constructor(t){super(),R(this,t,Y,X,l,{myName:0})}get myName(){return this.$$.ctx[0]}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
