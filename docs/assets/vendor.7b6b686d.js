const j={},le=(e,n)=>e===n,I={equals:le};let oe=te;const E={},x=1,G=2,Y={owned:null,cleanups:null,context:null,owner:null};var d=null;let L=null,c=null,v=null,g=null,S=null,R=0;function D(e,n){n&&(d=n);const t=c,s=d,i=e.length===0?Y:{owned:null,cleanups:null,context:null,owner:s};d=i,c=null;try{return V(()=>e(()=>K(i)),!0)}finally{c=t,d=s}}function fe(e,n){n=n?Object.assign({},I,n):I;const t={value:e,observers:null,observerSlots:null,pending:E,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.pending!==E?t.pending:t.value)),H(t,i));return[Z.bind(t),s]}function U(e,n,t){const s=z(e,n,!1,x);$(s)}function B(e,n,t){t=t?Object.assign({},I,t):I;const s=z(e,n,!0,0);return s.pending=E,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,$(s),Z.bind(s)}function re(e){if(v)return e();let n;const t=v=[];try{n=e()}finally{v=null}return V(()=>{for(let s=0;s<t.length;s+=1){const i=t[s];if(i.pending!==E){const l=i.pending;i.pending=E,H(i,l)}}},!1),n}function O(e){let n,t=c;return c=null,n=e(),c=t,n}function ue(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ce(e){const n=B(e);return B(()=>k(n()))}function Z(){const e=L;if(this.sources&&(this.state||e)){const n=g;g=null,this.state===x||e?$(this):_(this),g=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function H(e,n,t){if(e.comparator&&e.comparator(e.value,n))return n;if(v)return e.pending===E&&v.push(e),e.pending=n,n;let s=!1;return e.value=n,e.observers&&e.observers.length&&V(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&L.disposed.has(l),l.pure?g.push(l):S.push(l),l.observers&&(s&&!l.tState||!s&&!l.state)&&ne(l),s||(l.state=x)}if(g.length>1e6)throw g=[],new Error},!1),n}function $(e){if(!e.fn)return;K(e);const n=d,t=c,s=R;c=d=e,ae(e,e.value,s),c=t,d=n}function ae(e,n,t){let s;try{s=e.fn(n)}catch(i){se(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?H(e,s):e.value=s,e.updatedAt=t)}function z(e,n,t,s=x,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:null,pure:t};return d===null||d!==Y&&(d.owned?d.owned.push(l):d.owned=[l]),l}function ee(e){const n=L;if(e.state!==x)return e.state=0;if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===x||n)$(e);else if(e.state===G||n){const i=g;g=null,_(e,t[0]),g=i}}function V(e,n){if(g)return e();let t=!1;n||(g=[]),S?t=!0:S=[],R++;try{return e()}catch(s){se(s)}finally{he(t)}}function he(e){g&&(te(g),g=null),!e&&(S.length?re(()=>{oe(S),S=null}):S=null)}function te(e){for(let n=0;n<e.length;n++)ee(e[n])}function _(e,n){e.state=0;const t=L;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||t?i!==n&&ee(i):(i.state===G||t)&&_(i,n))}}function ne(e){const n=L;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=G,s.pure?g.push(s):S.push(s),s.observers&&ne(s))}}function K(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),f=t.observerSlots.pop();s<i.length&&(l.sourceSlots[f]=s,i[s]=l,t.observerSlots[s]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)K(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function se(e){throw e}function k(e){if(typeof e=="function"&&!e.length)return k(e());if(Array.isArray(e)){const n=[];for(let t=0;t<e.length;t++){const s=k(e[t]);Array.isArray(s)?n.push.apply(n,s):n.push(s)}return n}return e}const de=Symbol("fallback");function Q(e){for(let n=0;n<e.length;n++)e[n]()}function ge(e,n,t={}){let s=[],i=[],l=[],f=0,o=n.length>1?[]:null;return ue(()=>Q(l)),()=>{let a=e()||[],u,r;return O(()=>{let h=a.length,w,C,T,P,q,y,b,A,m;if(h===0)f!==0&&(Q(l),l=[],s=[],i=[],f=0,o&&(o=[])),t.fallback&&(s=[de],i[0]=D(ie=>(l[0]=ie,t.fallback())),f=1);else if(f===0){for(i=new Array(h),r=0;r<h;r++)s[r]=a[r],i[r]=D(p);f=h}else{for(T=new Array(h),P=new Array(h),o&&(q=new Array(h)),y=0,b=Math.min(f,h);y<b&&s[y]===a[y];y++);for(b=f-1,A=h-1;b>=y&&A>=y&&s[b]===a[A];b--,A--)T[A]=i[b],P[A]=l[b],o&&(q[A]=o[b]);for(w=new Map,C=new Array(A+1),r=A;r>=y;r--)m=a[r],u=w.get(m),C[r]=u===void 0?-1:u,w.set(m,r);for(u=y;u<=b;u++)m=s[u],r=w.get(m),r!==void 0&&r!==-1?(T[r]=i[u],P[r]=l[u],o&&(q[r]=o[u]),r=C[r],w.set(m,r)):l[u]();for(r=y;r<h;r++)r in T?(i[r]=T[r],l[r]=P[r],o&&(o[r]=q[r],o[r](r))):i[r]=D(p);i=i.slice(0,f=h),s=a.slice(0)}return i});function p(h){if(l[r]=h,o){const[w,C]=fe(r);return o[r]=C,n(a[r],w)}return n(a[r])}}}function ye(e,n){return O(()=>e(n))}function be(e){const n="fallback"in e&&{fallback:()=>e.fallback};return B(ge(()=>e.each,e.children,n||void 0))}function Ae(e){let n=!1;const t=ce(()=>e.children),s=B(()=>{let i=t();Array.isArray(i)||(i=[i]);for(let l=0;l<i.length;l++){const f=i[l].when;if(f)return[l,f,i[l]]}return[-1]},void 0,{equals:(i,l)=>i[0]===l[0]&&(n?i[1]===l[1]:!i[1]==!l[1])&&i[2]===l[2]});return B(()=>{const[i,l,f]=s();if(i<0)return e.fallback;const o=f.children;return(n=typeof o=="function"&&o.length>0)?O(()=>o(l)):o})}function Se(e){return e}function W(e,n,t){let s=t.length,i=n.length,l=s,f=0,o=0,a=n[i-1].nextSibling,u=null;for(;f<i||o<l;){if(n[f]===t[o]){f++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===f){const r=l<s?o?t[o-1].nextSibling:t[l-o]:a;for(;o<l;)e.insertBefore(t[o++],r)}else if(l===o)for(;f<i;)(!u||!u.has(n[f]))&&e.removeChild(n[f]),f++;else if(n[f]===t[l-1]&&t[o]===n[i-1]){const r=n[--i].nextSibling;e.insertBefore(t[o++],n[f++].nextSibling),e.insertBefore(t[--l],r),n[i]=t[l]}else{if(!u){u=new Map;let p=o;for(;p<l;)u.set(t[p],p++)}const r=u.get(n[f]);if(r!=null)if(o<r&&r<l){let p=f,h=1,w;for(;++p<i&&p<l&&!((w=u.get(n[p]))==null||w!==r+h);)h++;if(h>r-o){const C=n[f];for(;o<r;)e.insertBefore(t[o++],C)}else e.replaceChild(t[o++],n[f++])}else f++;else e.removeChild(n[f++])}}}const X="_$DX_DELEGATE";function Ce(e,n,t){let s;return D(i=>{s=i,n===document?e():pe(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function xe(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function me(e,n=window.document){const t=n[X]||(n[X]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,we))}}function Ee(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function pe(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return M(e,n,s,t);U(i=>M(e,n(),i,t),s)}function we(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}});t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s(i,e):s(e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function M(e,n,t,s,i){for(;typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,f=s!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(n=n.toString()),f){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=N(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n;else if(n==null||l==="boolean"){if(j.context)return t;t=N(e,t,s)}else{if(l==="function")return U(()=>{let o=n();for(;typeof o=="function";)o=o();t=M(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[];if(F(o,n,i))return U(()=>t=M(e,o,t,s,!0)),()=>t;if(j.context&&t&&t.length){for(let a=0;a<o.length;a++)if(o[a].parentNode)return t=o;return t}if(o.length===0){if(t=N(e,t,s),f)return t}else Array.isArray(t)?t.length===0?J(e,o,s):W(e,t,o):t==null||t===""?J(e,o):W(e,f&&t||[e.firstChild],o);t=o}else if(n instanceof Node){if(j.context)return t=n.parentNode?n:t;if(Array.isArray(t)){if(f)return t=N(e,t,s,n);N(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,f?t:e.firstChild);t=n}}return t}function F(e,n,t){let s=!1;for(let i=0,l=n.length;i<l;i++){let f=n[i],o;if(f instanceof Node)e.push(f);else if(!(f==null||f===!0||f===!1))if(Array.isArray(f))s=F(e,f)||s;else if((o=typeof f)=="string")e.push(document.createTextNode(f));else if(o==="function")if(t){for(;typeof f=="function";)f=f();s=F(e,Array.isArray(f)?f:[f])||s}else e.push(f),s=!0;else e.push(document.createTextNode(f.toString()))}return s}function J(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function N(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let f=n.length-1;f>=0;f--){const o=n[f];if(i!==o){const a=o.parentNode===e;!l&&!f?a?e.replaceChild(i,o):e.insertBefore(i,t):a&&e.removeChild(o)}else l=!0}}else e.insertBefore(i,t);return[i]}export{be as F,Se as M,Ae as S,fe as a,ye as b,U as c,me as d,pe as i,Ce as r,Ee as s,xe as t};