function w(){}function C(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function K(){return Object.create(null)}function B(t){t.forEach(P)}function D(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function R(t){return Object.keys(t).length===0}function L(t,...n){if(t==null){for(const i of n)i(void 0);return w}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function V(t,n,e){t.$$.on_destroy.push(L(n,e))}function X(t,n,e,i){if(t){const r=N(t,n,e,i);return t[0](r)}}function N(t,n,e,i){return t[1]&&i?C(e.ctx.slice(),t[1](i(n))):e.ctx}function Y(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(n.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=n.dirty[u]|r[u];return s}return n.dirty|r}return n.dirty}function Z(t,n,e,i,r,s){if(r){const c=N(n,e,i,s);t.p(c,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function tt(t){return t&&D(t.destroy)?t.destroy:w}let m=!1;function nt(){m=!0}function et(){m=!1}function M(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function O(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&l.push(o)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,o=(r>0&&n[e[r]].claim_order<=a?r+1:M(1,r,S=>n[e[S]].claim_order,a))-1;i[l]=e[o]+1;const k=o+1;e[k]=l,r=Math.max(k,r)}const s=[],c=[];let u=n.length-1;for(let l=e[r]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);u>=l;u--)c.push(n[u]);u--}for(;u>=0;u--)c.push(n[u]);s.reverse(),c.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<c.length;l++){for(;a<s.length&&c[l].claim_order>=s[a].claim_order;)a++;const o=a<s.length?s[a]:null;t.insertBefore(c[l],o)}}function T(t,n){if(m){for(O(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function it(t,n,e){m&&!e?T(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function q(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function lt(){return x(" ")}function ut(){return x("")}function st(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function at(t){return function(n){return n.preventDefault(),t.call(this,n)}}function ot(t){return function(n){n.target===this&&t.call(this,n)}}function ft(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _t(t){return t.dataset.svelteH}function dt(t){return t===""?null:+t}function ht(t){return Array.from(t.childNodes)}function H(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,r=!1){H(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),u}}for(let c=t.claim_info.last_index-1;c>=0;c--){const u=t[c];if(n(u)){const l=e(u);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function I(t,n,e,i){return A(t,r=>r.nodeName===n,r=>{const s=[];for(let c=0;c<r.attributes.length;c++){const u=r.attributes[c];e[u.name]||s.push(u.name)}s.forEach(c=>r.removeAttribute(c))},()=>i(n))}function mt(t,n,e){return I(t,n,e,q)}function z(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>x(n),!0)}function pt(t){return z(t," ")}function bt(t,n){n=""+n,t.data!==n&&(t.data=n)}function yt(t,n){t.value=n??""}function gt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function xt(t,n,e){t.classList.toggle(n,!!e)}function F(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function vt(t,n){return new t(n)}let h;function p(t){h=t}function v(){if(!h)throw new Error("Function called outside component initialization");return h}function kt(t){v().$$.on_mount.push(t)}function Et(t){v().$$.after_update.push(t)}function wt(){const t=v();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=F(n,e,{cancelable:i});return r.slice().forEach(c=>{c.call(t,s)}),!s.defaultPrevented}return!0}}const d=[],E=[];let _=[];const y=[],j=Promise.resolve();let g=!1;function U(){g||(g=!0,j.then(G))}function Nt(){return U(),j}function W(t){_.push(t)}function At(t){y.push(t)}const b=new Set;let f=0;function G(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const n=d[f];f++,p(n),J(n.$$)}}catch(n){throw d.length=0,f=0,n}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];b.has(e)||(b.add(e),e())}_.length=0}while(d.length);for(;y.length;)y.pop()();g=!1,b.clear(),p(t)}function J(t){if(t.fragment!==null){t.update(),B(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(W)}}function jt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{B as A,K as B,G as C,D,R as E,W as F,jt as G,h as H,p as I,P as J,d as K,U as L,nt as M,et as N,tt as O,wt as P,xt as Q,st as R,ot as S,at as T,At as U,_t as V,yt as W,dt as X,ct as Y,lt as a,ht as b,mt as c,z as d,q as e,rt as f,pt as g,T as h,it as i,bt as j,V as k,ut as l,Et as m,w as n,kt as o,ft as p,gt as q,E as r,Q as s,x as t,vt as u,Nt as v,X as w,Z as x,$ as y,Y as z};