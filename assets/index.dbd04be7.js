(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const l of c)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function n(c){const l={};return c.integrity&&(l.integrity=c.integrity),c.referrerpolicy&&(l.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?l.credentials="include":c.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(c){if(c.ep)return;c.ep=!0;const l=n(c);fetch(c.href,l)}})();function v(){}function I(e){return e()}function R(){return Object.create(null)}function j(e){e.forEach(I)}function X(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function q(e,t){return k||(k=document.createElement("a")),k.href=t,e===k.href}function Y(e){return Object.keys(e).length===0}function g(e,t){e.appendChild(t)}function z(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode.removeChild(e)}function Z(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function K(){return G(" ")}function H(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let P;function w(e){P=e}const y=[],N=[],E=[],B=[],ne=Promise.resolve();let T=!1;function re(){T||(T=!0,ne.then(J))}function A(e){E.push(e)}const O=new Set;let x=0;function J(){const e=P;do{for(;x<y.length;){const t=y[x];x++,w(t),oe(t.$$)}for(w(null),y.length=0,x=0;N.length;)N.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];O.has(n)||(O.add(n),n())}E.length=0}while(y.length);for(;B.length;)B.pop()();T=!1,O.clear(),w(e)}function oe(e){if(e.fragment!==null){e.update(),j(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const L=new Set;let p;function ce(){p={r:0,c:[],p}}function le(){p.r||j(p.c),p=p.p}function $(e,t){e&&e.i&&(L.delete(e),e.i(t))}function S(e,t,n,o){if(e&&e.o){if(L.has(e))return;L.add(e),p.c.push(()=>{L.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ie(e){e&&e.c()}function Q(e,t,n,o){const{fragment:c,on_mount:l,on_destroy:u,after_update:d}=e.$$;c&&c.m(t,n),o||A(()=>{const f=l.map(I).filter(X);u?u.push(...f):j(f),e.$$.on_mount=[]}),d.forEach(A)}function U(e,t){const n=e.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function se(e,t){e.$$.dirty[0]===-1&&(y.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,n,o,c,l,u,d=[-1]){const f=P;w(e);const r=e.$$={fragment:null,ctx:null,props:l,update:v,not_equal:c,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:R(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};u&&u(r.root);let s=!1;if(r.ctx=n?n(e,t.props||{},(i,h,...a)=>{const b=a.length?a[0]:h;return r.ctx&&c(r.ctx[i],r.ctx[i]=b)&&(!r.skip_bound&&r.bound[i]&&r.bound[i](b),s&&se(e,i)),h}):[],r.update(),s=!0,j(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){const i=ee(t.target);r.fragment&&r.fragment.l(i),i.forEach(C)}else r.fragment&&r.fragment.c();t.intro&&$(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),J()}w(f)}class W{$destroy(){U(this,1),this.$destroy=v}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ue(e){let t,n,o,c,l,u,d,f;return{c(){t=_("button"),n=_("img"),c=K(),l=_("code"),u=G(e[2]),m(n,"class","m-auto icon-outline bg-white"),m(n,"width",100),m(n,"height",100),m(n,"alt",e[0]),q(n.src,o="./objects/dark-bramble/"+e[1])||m(n,"src",o),m(n,"loading","lazy"),m(l,"class","break-words text-xs"),m(t,"class","overflow-hidden text-left m-2 p-2 border border-black")},m(r,s){z(r,t,s),g(t,n),g(t,c),g(t,l),g(l,u),e[5](l),d||(f=H(t,"click",e[4]),d=!0)},p(r,[s]){s&1&&m(n,"alt",r[0]),s&2&&!q(n.src,o="./objects/dark-bramble/"+r[1])&&m(n,"src",o),s&4&&te(u,r[2])},i:v,o:v,d(r){r&&C(t),e[5](null),d=!1,f()}}}function fe(e,t,n){const o=()=>{console.log("clicked"),navigator.clipboard.writeText(c),f()};let{path:c}=t,{file:l}=t,u="",d;function f(){var s=document.createRange();s.selectNode(d),window.getSelection().removeAllRanges(),window.getSelection().addRange(s)}function r(s){N[s?"unshift":"push"](()=>{d=s,n(3,d)})}return e.$$set=s=>{"path"in s&&n(0,c=s.path),"file"in s&&n(1,l=s.file)},e.$$.update=()=>{if(e.$$.dirty&1){const s=String(c).split("/");n(2,u=s[s.length-1])}},[c,l,u,d,o,r]}class ae extends W{constructor(t){super(),V(this,t,fe,ue,M,{path:0,file:1})}}function F(e,t,n){const o=e.slice();return o[6]=t[n][0],o[7]=t[n][1],o}function D(e){let t,n;return t=new ae({props:{file:e[6],path:e[7]}}),{c(){ie(t.$$.fragment)},m(o,c){Q(t,o,c),n=!0},p(o,c){const l={};c&1&&(l.file=o[6]),c&1&&(l.path=o[7]),t.$set(l)},i(o){n||($(t.$$.fragment,o),n=!0)},o(o){S(t.$$.fragment,o),n=!1},d(o){U(t,o)}}}function de(e){let t,n,o,c,l,u,d,f=e[0],r=[];for(let i=0;i<f.length;i+=1)r[i]=D(F(e,f,i));const s=i=>S(r[i],1,1,()=>{r[i]=null});return{c(){t=_("main"),n=_("input"),o=K(),c=_("div");for(let i=0;i<r.length;i+=1)r[i].c();m(n,"class","p-2 mb-2"),m(n,"placeholder","Filter"),m(c,"class","grid grid-cols-4"),m(t,"class","m-auto p-4")},m(i,h){z(i,t,h),g(t,n),g(t,o),g(t,c);for(let a=0;a<r.length;a+=1)r[a].m(c,null);l=!0,u||(d=H(n,"keyup",e[4]),u=!0)},p(i,[h]){if(h&1){f=i[0];let a;for(a=0;a<f.length;a+=1){const b=F(i,f,a);r[a]?(r[a].p(b,h),$(r[a],1)):(r[a]=D(b),r[a].c(),$(r[a],1),r[a].m(c,null))}for(ce(),a=f.length;a<r.length;a+=1)s(a);le()}},i(i){if(!l){for(let h=0;h<f.length;h+=1)$(r[h]);l=!0}},o(i){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)S(r[h]);l=!1},d(i){i&&C(t),Z(r,i),u=!1,d()}}}function he(e,t,n){let o={},c,l="",u=-1;const d=r=>{clearTimeout(u),u=setTimeout(()=>{n(3,l=r)},300)},f=({currentTarget:{value:r}})=>d(r);return e.$$.update=()=>{e.$$.dirty&12&&n(0,c=Object.entries(o).filter(r=>r[1].toLocaleLowerCase().includes(l.toLocaleLowerCase())))},(async()=>n(2,o=(await(await fetch("./objects/dark-bramble/objects.json")).json()).Objects))(),[c,d,o,l,f]}class me extends W{constructor(t){super(),V(this,t,he,de,M,{})}}new me({target:document.getElementById("app")});