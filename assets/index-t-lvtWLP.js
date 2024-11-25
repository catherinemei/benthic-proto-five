(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const de=(e,t)=>e===t,ce=Symbol("solid-track"),F={equals:de};let Z=ie;const S=1,_=2,ee={owned:null,cleanups:null,context:null,owner:null};var w=null;let W=null,ae=null,m=null,N=null,A=null,K=0;function G(e,t){const n=m,o=w,i=e.length===0,r=t===void 0?o:t,l=i?ee:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=i?e:()=>e(()=>$(()=>R(l)));w=l,m=null;try{return z(s,!0)}finally{m=n,w=o}}function L(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=i=>(typeof i=="function"&&(i=i(n.value)),oe(n,i));return[ne.bind(n),o]}function I(e,t,n){const o=V(e,t,!1,S);v(o)}function fe(e,t,n){Z=ye;const o=V(e,t,!1,S);(!n||!n.render)&&(o.user=!0),A?A.push(o):v(o)}function k(e,t,n){n=n?Object.assign({},F,n):F;const o=V(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,v(o),ne.bind(o)}function $(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function ue(e){fe(()=>$(e))}function te(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function ne(){if(this.sources&&this.state)if(this.state===S)v(this);else{const e=N;N=null,z(()=>H(this),!1),N=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function oe(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&z(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=W&&W.running;l&&W.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?N.push(r):A.push(r),r.observers&&re(r)),l||(r.state=S)}if(N.length>1e6)throw N=[],new Error},!1)),t}function v(e){if(!e.fn)return;R(e);const t=K;he(e,e.value,t)}function he(e,t,n){let o;const i=w,r=m;m=w=e;try{o=e.fn(t)}catch(l){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,se(l)}finally{m=r,w=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,o):e.value=o,e.updatedAt=n)}function V(e,t,n,o=S,i){const r={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==ee&&(w.owned?w.owned.push(r):w.owned=[r]),r}function U(e){if(e.state===0)return;if(e.state===_)return H(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<K);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)v(e);else if(e.state===_){const o=N;N=null,z(()=>H(e,t[0]),!1),N=o}}function z(e,t){if(N)return e();let n=!1;t||(N=[]),A?n=!0:A=[],K++;try{const o=e();return pe(n),o}catch(o){n||(A=null),N=null,se(o)}}function pe(e){if(N&&(ie(N),N=null),e)return;const t=A;A=null,t.length&&z(()=>Z(t),!1)}function ie(e){for(let t=0;t<e.length;t++)U(e[t])}function ye(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:U(o)}for(t=0;t<n;t++)U(e[t])}function H(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const i=o.state;i===S?o!==t&&(!o.updatedAt||o.updatedAt<K)&&U(o):i===_&&H(o,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=_,n.pure?N.push(n):A.push(n),n.observers&&re(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();o<i.length&&(r.sourceSlots[l]=o,i[o]=r,n.observerSlots[o]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ge(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function se(e,t=w){throw ge(e)}const be=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function me(e,t,n={}){let o=[],i=[],r=[],l=0,s=t.length>1?[]:null;return te(()=>Q(r)),()=>{let y=e()||[],g,c;return y[ce],$(()=>{let a=y.length,p,d,h,f,x,b,C,E,B;if(a===0)l!==0&&(Q(r),r=[],o=[],i=[],l=0,s&&(s=[])),n.fallback&&(o=[be],i[0]=G(le=>(r[0]=le,n.fallback())),l=1);else if(l===0){for(i=new Array(a),c=0;c<a;c++)o[c]=y[c],i[c]=G(u);l=a}else{for(h=new Array(a),f=new Array(a),s&&(x=new Array(a)),b=0,C=Math.min(l,a);b<C&&o[b]===y[b];b++);for(C=l-1,E=a-1;C>=b&&E>=b&&o[C]===y[E];C--,E--)h[E]=i[C],f[E]=r[C],s&&(x[E]=s[C]);for(p=new Map,d=new Array(E+1),c=E;c>=b;c--)B=y[c],g=p.get(B),d[c]=g===void 0?-1:g,p.set(B,c);for(g=b;g<=C;g++)B=o[g],c=p.get(B),c!==void 0&&c!==-1?(h[c]=i[g],f[c]=r[g],s&&(x[c]=s[g]),c=d[c],p.set(B,c)):r[g]();for(c=b;c<a;c++)c in h?(i[c]=h[c],r[c]=f[c],s&&(s[c]=x[c],s[c](c))):i[c]=G(u);i=i.slice(0,l=a),o=y.slice(0)}return i});function u(a){if(r[c]=a,s){const[p,d]=L(c);return s[c]=d,t(y[c],p)}return t(y[c])}}}function P(e,t){return $(()=>e(t||{}))}const Ce=e=>`Stale read from <${e}>.`;function X(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(me(()=>e.each,e.children,t||void 0))}function we(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(o,i)=>t?o===i:!o==!i});return k(()=>{const o=n();if(o){const i=e.children;return typeof i=="function"&&i.length>0?$(()=>i(t?o:()=>{if(!$(n))throw Ce("Show");return e.when})):i}return e.fallback},void 0,void 0)}function xe(e,t,n){let o=n.length,i=t.length,r=o,l=0,s=0,y=t[i-1].nextSibling,g=null;for(;l<i||s<r;){if(t[l]===n[s]){l++,s++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const c=r<o?s?n[s-1].nextSibling:n[r-s]:y;for(;s<r;)e.insertBefore(n[s++],c)}else if(r===s)for(;l<i;)(!g||!g.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[s]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!g){g=new Map;let u=s;for(;u<r;)g.set(n[u],u++)}const c=g.get(t[l]);if(c!=null)if(s<c&&c<r){let u=l,a=1,p;for(;++u<i&&u<r&&!((p=g.get(t[u]))==null||p!==c+a);)a++;if(a>c-s){const d=t[l];for(;s<c;)e.insertBefore(n[s++],d)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const J="_$DX_DELEGATE";function Ne(e,t,n,o={}){let i;return G(r=>{i=r,t===document?e():O(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function q(e,t,n){let o;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>$(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return r.cloneNode=r,r}function Ee(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let o=0,i=e.length;o<i;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,Be))}}function D(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function O(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return M(e,t,o,n);I(i=>M(e,t(),i,n),o)}function Be(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?o.call(n,i,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function M(e,t,n,o,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=T(e,n,o,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=T(e,n,o);else{if(r==="function")return I(()=>{let s=t();for(;typeof s=="function";)s=s();n=M(e,s,n,o)}),()=>n;if(Array.isArray(t)){const s=[],y=n&&Array.isArray(n);if(j(s,t,n,i))return I(()=>n=M(e,s,n,o,!0)),()=>n;if(s.length===0){if(n=T(e,n,o),l)return n}else y?n.length===0?Y(e,s,o):xe(e,n,s):(n&&T(e),Y(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=T(e,n,o,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function j(e,t,n,o){let i=!1;for(let r=0,l=t.length;r<l;r++){let s=t[r],y=n&&n[r],g;if(!(s==null||s===!0||s===!1))if((g=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=j(e,s,y)||i;else if(g==="function")if(o){for(;typeof s=="function";)s=s();i=j(e,Array.isArray(s)?s:[s],Array.isArray(y)?y:[y])||i}else e.push(s),i=!0;else{const c=String(s);y&&y.nodeType===3&&y.data===c?e.push(y):e.push(document.createTextNode(c))}}return i}function Y(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function T(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(i!==s){const y=s.parentNode===e;!r&&!l?y?e.replaceChild(i,s):e.insertBefore(i,n):y&&s.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var Ae=q('<div><ul id=parents-group tabindex=0><span> belongs to </span></ul><ul id=home tabindex=0 aria-live=assertive></ul><ul id=parent-context tabindex=0></ul><br><ul id=undo-text tabindex=0 aria-label="Pressing Undo"><span>Pressing Undo'),De=q("<li>None"),ke=q("<li tabindex=0><span aria-hidden=true>"),$e=q("<li tabindex=0><span aria-hidden=true> group");function Se(e){const[t,n]=L(e.nodeGraph[0].id),[o,i]=L(["0"]),[r,l]=L(new Map),s=k(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),y=u=>{if(o().length===1)return[];{const a=o()[o().length-2];return e.nodeGraph[a].children.filter(h=>h!==u)}},g=(u,a,p)=>{if(console.log("clicking",u,a,p),u==="-1"||a==="-1"||!u||!a)return;const d=y(u);let h=a;if(d.includes(a)){const f=o();f.pop(),i([...f,a])}else if(a===u){const f=e.nodeGraph[a].children;if(f.length>0){const x=f[0];i([...o(),x]),h=x}}else if(e.nodeGraph[u].parents.includes(a)&&p){const f=r().get(a);i([...f??["0"]])}else if(e.nodeGraph[u].parents.includes(a)&&!p){const f=o();f.pop(),f.pop(),i([...f,a,u]),h=u}n(h),setTimeout(()=>{const f=document.getElementById(`info-${h}`);f&&(f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),f.focus())},0)},c=u=>{if(u.key==="ArrowUp"&&u.shiftKey){const a=o();if(a.length>2){a.pop();const p=a[a.length-1],d=a[a.length-2];if(d&&e.nodeGraph[p].parents.includes(d))i([...a]),n(p);else{const f=r().get(p);i([...f??["0"]]),n(p)}const h=document.getElementById(`info-${p}`);h&&h.focus()}else if(a.length>1){a.pop();const p=a[a.length-1];if(p){i([...a]),n(p);const d=document.getElementById(`info-${p}`);d&&d.focus()}}else document.getElementById("parents-group")?.focus();u.preventDefault()}else if(u.key==="ArrowDown"&&u.shiftKey){if((document.activeElement?.id).startsWith("parents")){const d=document.getElementById(`info-${t()}`);d&&d.focus()}else{const d=e.nodeGraph[t()].children[0];if(d){i(f=>[...f,d]),n(d);const h=document.getElementById(`info-${d}`);h&&h.focus()}}u.preventDefault()}else if(u.key==="h"){const a=document.getElementById("home"),p=o()[o().length-1],d=document.getElementById(`info-${p}`);d?d.focus():a?.focus()}else if(u.key==="p")document.getElementById("parent-context")?.focus();else if(u.key==="Backspace")i(a=>{const p=[...a];p.pop();const d=p[p.length-1];if(d){const h=document.getElementById("undo-text");h&&h.focus(),n(d),setTimeout(()=>{const f=document.getElementById(`info-${d}`);f&&f.focus()},1e3)}return p});else if(u.key==="ArrowLeft"||u.key==="ArrowRight"||u.key==="ArrowUp"||u.key==="ArrowDown"){const a=document.activeElement,p=a?.id;if(p.startsWith("info-")||p==="home"){const d=Array.from(document.querySelectorAll("#home li")),h=d.indexOf(a);let f=h;(u.key==="ArrowLeft"||u.key==="ArrowUp")&&h>0?f=h-1:(u.key==="ArrowRight"||u.key==="ArrowDown")&&h<d.length-1&&(f=h+1);const x=d[f]?.id.split("info-")[1];if(x){const b=o();b.pop(),i([...b,x]),n(x)}d[f]?.focus(),u.preventDefault()}else if(p.startsWith("context")){const d=Array.from(document.querySelectorAll("#parent-context li")),h=d.indexOf(a);let f=h;(u.key==="ArrowLeft"||u.key==="ArrowUp")&&h>0?f=h-1:(u.key==="ArrowRight"||u.key==="ArrowDown")&&h<d.length-1&&(f=h+1),d[f]?.focus()}else p==="parent-context"?Array.from(document.querySelectorAll("#parent-context li"))[0]?.focus():u.preventDefault()}else if(u.key==="Enter"){const p=document.activeElement?.id;if(p.startsWith("info-")){const d=e.nodeGraph[t()].children[0];if(d){i(f=>[...f,d]),n(d);const h=document.getElementById(`info-${d}`);h&&h.focus()}}else if(p.startsWith("context")){const d=p.split("-")[3];let h=o();h.pop(),h.pop(),i(x=>[...h,d,t()]),n(t());const f=document.getElementById(`info-${t()}`);f&&f.focus()}else u.preventDefault()}else u.preventDefault()};return ue(()=>{const u=Te(e.nodeGraph);l(u),window.addEventListener("keydown",c)}),te(()=>{window.removeEventListener("keydown",c)}),P(we,{get when(){return t()},get children(){return P(Oe,{get history(){return o()},get parentFocusId(){return k(()=>o().length>1)()?o()[o().length-2]:"-1"},get node(){return s()},get nodeGraph(){return e.nodeGraph},onNodeClick:g})}})}function Oe(e){function t(r){if(e.history.length==1)return[r];{const l=e.history[e.history.length-2];return e.nodeGraph[l].children}}const n=k(()=>{const r=t(e.node.id);return Array.from(r).map(s=>e.nodeGraph[s]).sort((s,y)=>{const g=s.priority-y.priority;return g!==0?g:Number(s.id)-Number(y.id)})}),o=k(()=>{const r=e.node.parents;return e.history.length==1?[]:r.filter(s=>s!==e.parentFocusId)}),i=k(()=>o().map(r=>e.nodeGraph[r]));return(()=>{var r=Ae(),l=r.firstChild,s=l.firstChild,y=s.firstChild,g=l.nextSibling,c=g.nextSibling,u=c.nextSibling,a=u.nextSibling,p=a.firstChild;return s.$$click=()=>e.onNodeClick(e.node.id,e.parentFocusId,!0),D(s,"aria-hidden",!0),s.style.setProperty("font-weight","bold"),O(s,()=>e.node.displayName,y),O(s,()=>e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName,null),O(g,P(X,{get each(){return n()},get fallback(){return(()=>{var d=De();return d.style.setProperty("color","grey"),d})()},children:(d,h)=>(()=>{var f=ke(),x=f.firstChild;return f.$$click=()=>e.onNodeClick(e.node.id,d.id),O(x,()=>`${d.displayName}; ${d.descriptionTokens?.longDescription}`),I(b=>{var C=`${h()+1} of ${n().length}. ${d.displayName}; ${d.descriptionTokens?.longDescription}`,E=`info-${d.id}`;return C!==b.e&&D(f,"aria-label",b.e=C),E!==b.t&&D(f,"id",b.t=E),b},{e:void 0,t:void 0}),f})()})),O(c,P(X,{get each(){return i()},children:(d,h)=>(()=>{var f=$e(),x=f.firstChild,b=x.firstChild;return f.$$click=()=>e.onNodeClick(e.node.id,d.id,!1),O(x,()=>d.displayName,b),I(C=>{var E=`context-${e.node.id}-${h()}-${d.id}`,B=`${d.displayName} group`;return E!==C.e&&D(f,"id",C.e=E),B!==C.t&&D(f,"aria-label",C.t=B),C},{e:void 0,t:void 0}),f})()})),p.style.setProperty("font-weight","bold"),D(p,"aria-hidden",!0),I(d=>{var h=`${e.node.displayName} belongs to ${e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName}`,f=o().length===0?`${e.node.displayName} belongs to 0 additional groups. Press h to return to previous node.`:`${e.node.displayName} belongs to ${o().length} additional groups. Press arrow keys to navigate and press Enter to confirm selection.`;return h!==d.e&&D(l,"aria-label",d.e=h),f!==d.t&&D(c,"aria-label",d.t=f),d},{e:void 0,t:void 0}),r})()}function Te(e,t="0"){const n=new Map,o=[[t,[t]]];for(;o.length>0;){const[i,r]=o.shift();if(n.has(i))continue;n.set(i,r);const l=e[i].children;for(const s of l)n.has(s)||o.push([s,[...r,s]])}return n}Ee(["click"]);const Ie={0:{id:"0",displayName:"Aspirin",description:"Chemical diagram for aspirin. Contains benzene, ester, and carboxylic acid.",descriptionTokens:{label:"Aspirin",shortDescription:"Chemical diagram for aspirin. Contains benzene ring, ester, and carboxylic acid.",longDescription:"Molecule containing benzene ring, ester, and carboxylic acid."},parents:[],children:["1","2","3"],priority:0},1:{id:"1",displayName:"Benzene",description:"Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",descriptionTokens:{label:"Benzene",shortDescription:"Benzene ring with 6 carbons.",longDescription:"Ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid)."},parents:["0"],children:["4","5","6","7","8","9"],priority:1},2:{id:"2",displayName:"Ester",description:"Ester group bonded to C1 of benzene ring.",descriptionTokens:{label:"Ester",shortDescription:"Ester group bonded to C1 of benzene ring.",longDescription:"Group bonded to C1 of benzene ring."},parents:["0"],children:["4","10","11","12","13"],priority:2},3:{id:"3",displayName:"Carboxylic acid",description:"Carboxylic acid group bonded to C2 of benzene ring.",descriptionTokens:{label:"Carboxylic acid",shortDescription:"Carboxylic acid group bonded to C2 of benzene ring.",longDescription:"Group bonded to C2 of benzene ring."},parents:["0"],children:["5","14","15","16"],priority:2},4:{id:"4",displayName:"C1",description:"Bonded to C2 and C6 of benzene and O1 of ester.",descriptionTokens:{label:"C1",shortDescription:"Bonded to C2 and C6 of benzene and O1 of ester.",longDescription:"Bonded to C2 and C6 of benzene and O1 of ester."},parents:["1","2"],children:[],priority:2},5:{id:"5",displayName:"C2",description:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",descriptionTokens:{label:"C2",shortDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",longDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid."},parents:["1","3"],children:[],priority:2},6:{id:"6",displayName:"C3",description:"Bonded to C2 and C4 of benzene.",descriptionTokens:{label:"C3",shortDescription:"Bonded to C2 and C4 of benzene.",longDescription:"Bonded to C2 and C4 of benzene."},parents:["1"],children:[],priority:2},7:{id:"7",displayName:"C4",description:"Bonded to C3 and C5 of benzene.",descriptionTokens:{label:"C4",shortDescription:"Bonded to C3 and C5 of benzene.",longDescription:"Bonded to C3 and C5 of benzene."},parents:["1"],children:[],priority:2},8:{id:"8",displayName:"C5",description:"Bonded to C4 and C6 of benzene.",descriptionTokens:{label:"C5",shortDescription:"Bonded to C4 and C6 of benzene.",longDescription:"Bonded to C4 and C6 of benzene."},parents:["1"],children:[],priority:2},9:{id:"9",displayName:"C6",description:"Bonded to C1 and C5 of benzene.",descriptionTokens:{label:"C6",shortDescription:"Bonded to C1 and C5 of benzene.",longDescription:"Bonded to C1 and C5 of benzene."},parents:["1"],children:[],priority:2},10:{id:"10",displayName:"O1",description:"Bonded to C1 of benzene and C7 of ester.",descriptionTokens:{label:"O1",shortDescription:"Bonded to C1 of benzene and C7 of ester.",longDescription:"Bonded to C1 of benzene and C7 of ester."},parents:["2"],children:[],priority:3},11:{id:"11",displayName:"C7",description:"Bonded to O1, O2, and C8 of ester",descriptionTokens:{label:"C7",shortDescription:"Bonded to O1, O2, and C8 of ester",longDescription:"Bonded to O1, O2, and C8 of ester"},parents:["2"],children:[],priority:3},12:{id:"12",displayName:"O2",description:"Bonded to C7 of ester.",descriptionTokens:{label:"O2",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},13:{id:"13",displayName:"C8",description:"Bonded to C7 of ester.",descriptionTokens:{label:"C8",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},14:{id:"14",displayName:"C9",description:"Bonded to O3 and hydroxyl in carboxylic acid.",descriptionTokens:{label:"C9",shortDescription:"Bonded to O3 and hydroxyl in carboxylic acid.",longDescription:"Bonded to O3 and hydroxyl in carboxylic acid."},parents:["3"],children:[],priority:3},15:{id:"15",displayName:"O3",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"O3",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3},16:{id:"16",displayName:"Hydroxyl",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"Hydroxyl",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3}},Pe=()=>P(Se,{nodeGraph:Ie,showHypergraph:!1}),ve=document.getElementById("root");Ne(()=>P(Pe,{}),ve);
