(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const ce=(e,t)=>e===t,ae=Symbol("solid-track"),_={equals:ce};let te=se;const S=1,U=2,ne={owned:null,cleanups:null,context:null,owner:null};var w=null;let j=null,fe=null,C=null,N=null,$=null,R=0;function L(e,t){const n=C,o=w,i=e.length===0,r=t===void 0?o:t,l=i?ne:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=i?e:()=>e(()=>D(()=>q(l)));w=l,C=null;try{return G(s,!0)}finally{C=n,w=o}}function F(e,t){t=t?Object.assign({},_,t):_;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=i=>(typeof i=="function"&&(i=i(n.value)),re(n,i));return[ie.bind(n),o]}function I(e,t,n){const o=Q(e,t,!1,S);z(o)}function ue(e,t,n){te=ge;const o=Q(e,t,!1,S);(!n||!n.render)&&(o.user=!0),$?$.push(o):z(o)}function k(e,t,n){n=n?Object.assign({},_,n):_;const o=Q(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,z(o),ie.bind(o)}function D(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function he(e){ue(()=>D(e))}function oe(e){return w===null||(w.cleanups===null?w.cleanups=[e]:w.cleanups.push(e)),e}function ie(){if(this.sources&&this.state)if(this.state===S)z(this);else{const e=N;N=null,G(()=>M(this),!1),N=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function re(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&G(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=j&&j.running;l&&j.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?N.push(r):$.push(r),r.observers&&le(r)),l||(r.state=S)}if(N.length>1e6)throw N=[],new Error},!1)),t}function z(e){if(!e.fn)return;q(e);const t=R;pe(e,e.value,t)}function pe(e,t,n){let o;const i=w,r=C;C=w=e;try{o=e.fn(t)}catch(l){return e.pure&&(e.state=S,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,de(l)}finally{C=r,w=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?re(e,o):e.value=o,e.updatedAt=n)}function Q(e,t,n,o=S,i){const r={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:w,context:w?w.context:null,pure:n};return w===null||w!==ne&&(w.owned?w.owned.push(r):w.owned=[r]),r}function H(e){if(e.state===0)return;if(e.state===U)return M(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===S)z(e);else if(e.state===U){const o=N;N=null,G(()=>M(e,t[0]),!1),N=o}}function G(e,t){if(N)return e();let n=!1;t||(N=[]),$?n=!0:$=[],R++;try{const o=e();return ye(n),o}catch(o){n||($=null),N=null,de(o)}}function ye(e){if(N&&(se(N),N=null),e)return;const t=$;$=null,t.length&&G(()=>te(t),!1)}function se(e){for(let t=0;t<e.length;t++)H(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:H(o)}for(t=0;t<n;t++)H(e[t])}function M(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const i=o.state;i===S?o!==t&&(!o.updatedAt||o.updatedAt<R)&&H(o):i===U&&M(o,t)}}}function le(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?N.push(n):$.push(n),n.observers&&le(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();o<i.length&&(r.sourceSlots[l]=o,i[o]=r,n.observerSlots[o]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function be(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function de(e,t=w){throw be(e)}const me=Symbol("fallback");function J(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let o=[],i=[],r=[],l=0,s=t.length>1?[]:null;return oe(()=>J(r)),()=>{let y=e()||[],g,c;return y[ae],D(()=>{let a=y.length,h,u,p,d,m,b,B,x,E;if(a===0)l!==0&&(J(r),r=[],o=[],i=[],l=0,s&&(s=[])),n.fallback&&(o=[me],i[0]=L(O=>(r[0]=O,n.fallback())),l=1);else if(l===0){for(i=new Array(a),c=0;c<a;c++)o[c]=y[c],i[c]=L(f);l=a}else{for(p=new Array(a),d=new Array(a),s&&(m=new Array(a)),b=0,B=Math.min(l,a);b<B&&o[b]===y[b];b++);for(B=l-1,x=a-1;B>=b&&x>=b&&o[B]===y[x];B--,x--)p[x]=i[B],d[x]=r[B],s&&(m[x]=s[B]);for(h=new Map,u=new Array(x+1),c=x;c>=b;c--)E=y[c],g=h.get(E),u[c]=g===void 0?-1:g,h.set(E,c);for(g=b;g<=B;g++)E=o[g],c=h.get(E),c!==void 0&&c!==-1?(p[c]=i[g],d[c]=r[g],s&&(m[c]=s[g]),c=u[c],h.set(E,c)):r[g]();for(c=b;c<a;c++)c in p?(i[c]=p[c],r[c]=d[c],s&&(s[c]=m[c],s[c](c))):i[c]=L(f);i=i.slice(0,l=a),o=y.slice(0)}return i});function f(a){if(r[c]=a,s){const[h,u]=F(c);return s[c]=u,t(y[c],h)}return t(y[c])}}}function v(e,t){return D(()=>e(t||{}))}const we=e=>`Stale read from <${e}>.`;function Y(e){const t="fallback"in e&&{fallback:()=>e.fallback};return k(Ce(()=>e.each,e.children,t||void 0))}function xe(e){const t=e.keyed,n=k(()=>e.when,void 0,{equals:(o,i)=>t?o===i:!o==!i});return k(()=>{const o=n();if(o){const i=e.children;return typeof i=="function"&&i.length>0?D(()=>i(t?o:()=>{if(!D(n))throw we("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Ne(e,t,n){let o=n.length,i=t.length,r=o,l=0,s=0,y=t[i-1].nextSibling,g=null;for(;l<i||s<r;){if(t[l]===n[s]){l++,s++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const c=r<o?s?n[s-1].nextSibling:n[r-s]:y;for(;s<r;)e.insertBefore(n[s++],c)}else if(r===s)for(;l<i;)(!g||!g.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[s]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!g){g=new Map;let f=s;for(;f<r;)g.set(n[f],f++)}const c=g.get(t[l]);if(c!=null)if(s<c&&c<r){let f=l,a=1,h;for(;++f<i&&f<r&&!((h=g.get(t[f]))==null||h!==c+a);)a++;if(a>c-s){const u=t[l];for(;s<c;)e.insertBefore(n[s++],u)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const Z="_$DX_DELEGATE";function Be(e,t,n,o={}){let i;return L(r=>{i=r,t===document?e():T(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function W(e,t,n){let o;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>D(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return r.cloneNode=r,r}function Ee(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let o=0,i=e.length;o<i;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,Ae))}}function A(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function T(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return K(e,t,o,n);I(i=>K(e,t(),i,n),o)}function Ae(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?o.call(n,i,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,o,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=P(e,n,o,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=P(e,n,o);else{if(r==="function")return I(()=>{let s=t();for(;typeof s=="function";)s=s();n=K(e,s,n,o)}),()=>n;if(Array.isArray(t)){const s=[],y=n&&Array.isArray(n);if(V(s,t,n,i))return I(()=>n=K(e,s,n,o,!0)),()=>n;if(s.length===0){if(n=P(e,n,o),l)return n}else y?n.length===0?ee(e,s,o):Ne(e,n,s):(n&&P(e),ee(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=P(e,n,o,t);P(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function V(e,t,n,o){let i=!1;for(let r=0,l=t.length;r<l;r++){let s=t[r],y=n&&n[r],g;if(!(s==null||s===!0||s===!1))if((g=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=V(e,s,y)||i;else if(g==="function")if(o){for(;typeof s=="function";)s=s();i=V(e,Array.isArray(s)?s:[s],Array.isArray(y)?y:[y])||i}else e.push(s),i=!0;else{const c=String(s);y&&y.nodeType===3&&y.data===c?e.push(y):e.push(document.createTextNode(c))}}return i}function ee(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function P(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(i!==s){const y=s.parentNode===e;!r&&!l?y?e.replaceChild(i,s):e.insertBefore(i,n):y&&s.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var $e=W('<div><ul id=parents-group tabindex=0><span> belongs to </span></ul><ul id=home tabindex=0 aria-live=assertive></ul><ul tabindex=-1 aria-label="Pressing Undo"><span>Belongs to</span></ul><ul id=parent-context tabindex=0></ul><br><ul id=undo-text tabindex=0 aria-label="Pressing Undo"><span>Pressing Undo'),ke=W("<li>None"),De=W("<li tabindex=0><span aria-hidden=true>"),Se=W("<li tabindex=0><span aria-hidden=true> group");function Oe(e){const[t,n]=F(e.nodeGraph[0].id),[o,i]=F(["0"]),[r,l]=F(new Map),s=k(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),y=f=>{if(o().length===1)return[];{const a=o()[o().length-2];return e.nodeGraph[a].children.filter(p=>p!==f)}},g=(f,a,h)=>{if(f==="-1"||a==="-1"||!f||!a)return;const u=y(f);let p=a;if(u.includes(a)){const d=o();d.pop(),i([...d,a])}else if(a===f){const d=e.nodeGraph[a].children;if(d.length>0){const m=d[0];i([...o(),m]),p=m}}else if(e.nodeGraph[f].parents.includes(a)&&h){const d=r().get(a);i([...d??["0"]])}else if(e.nodeGraph[f].parents.includes(a)&&!h){const d=o();d.pop(),d.pop(),i([...d,a,f]),p=f}n(p),setTimeout(()=>{const d=document.getElementById(`info-${p}`);d&&(d.hasAttribute("tabindex")||d.setAttribute("tabindex","0"),d.focus())},0)},c=f=>{if(f.key==="ArrowUp"&&f.shiftKey){const a=o();if(a.length>2){a.pop();const h=a[a.length-1],u=a[a.length-2];if(u&&e.nodeGraph[h].parents.includes(u))i([...a]),n(h);else{const d=r().get(h);i([...d??["0"]]),n(h)}const p=document.getElementById(`info-${h}`);p&&p.focus()}else if(a.length>1){a.pop();const h=a[a.length-1];if(h){i([...a]),n(h);const u=document.getElementById(`info-${h}`);u&&u.focus()}}else document.getElementById("parents-group")?.focus();f.preventDefault()}else if(f.key==="ArrowDown"&&f.shiftKey){if((document.activeElement?.id).startsWith("parents")){const u=document.getElementById(`info-${t()}`);u&&u.focus()}else{const u=e.nodeGraph[t()].children[0];if(u){i(d=>[...d,u]),n(u);const p=document.getElementById(`info-${u}`);p&&p.focus()}}f.preventDefault()}else if(f.key==="h"){const a=document.getElementById("home"),h=o()[o().length-1],u=document.getElementById(`info-${h}`);u?u.focus():a?.focus()}else if(f.key==="p")document.getElementById("parent-context")?.focus();else if(f.key==="Backspace")i(a=>{const h=[...a];h.pop();const u=h[h.length-1];if(u){const p=document.getElementById("undo-text");p&&p.focus(),n(u),setTimeout(()=>{const d=document.getElementById(`info-${u}`);d&&d.focus()},1e3)}return h});else if(f.key==="ArrowLeft"||f.key==="ArrowRight"||f.key==="ArrowUp"||f.key==="ArrowDown"){const a=document.activeElement,h=a?.id;if(h.startsWith("info-")||h==="home"){console.log("traversing one of the nodes");const u=Array.from(document.querySelectorAll("#home li")),p=u.indexOf(a);let d=p;(f.key==="ArrowLeft"||f.key==="ArrowUp")&&p>0?d=p-1:(f.key==="ArrowRight"||f.key==="ArrowDown")&&p<u.length-1&&(d=p+1);const m=u[d]?.id.split("info-")[1];if(m){const b=o();b.pop(),i([...b,m]),n(m)}u[d]?.focus(),f.preventDefault()}else if(h.startsWith("context")){console.log("traversing one of the context nodes");const u=Array.from(document.querySelectorAll("#parent-context li")),p=u.indexOf(a);let d=p;(f.key==="ArrowLeft"||f.key==="ArrowUp")&&p>0?d=p-1:(f.key==="ArrowRight"||f.key==="ArrowDown")&&p<u.length-1&&(d=p+1),u[d]?.focus()}else h==="parent-context"?(console.log("array keys while on the overall list"),Array.from(document.querySelectorAll("#parent-context li"))[0]?.focus()):f.preventDefault()}else if(f.key==="Enter"){const h=document.activeElement?.id;if(h.startsWith("info-")){const u=e.nodeGraph[t()].children[0];if(u){i(d=>[...d,u]),n(u);const p=document.getElementById(`info-${u}`);p&&p.focus()}}else if(h.startsWith("context")){const u=h.split("-")[3];let p=o();p.pop(),p.pop(),i(m=>[...p,u,t()]),n(t());const d=document.getElementById(`info-${t()}`);d&&d.focus()}else f.preventDefault()}else f.preventDefault()};return he(()=>{const f=Pe(e.nodeGraph);l(f),window.addEventListener("keydown",c)}),oe(()=>{window.removeEventListener("keydown",c)}),v(xe,{get when(){return t()},get children(){return v(Te,{get history(){return o()},get parentFocusId(){return k(()=>o().length>1)()?o()[o().length-2]:"-1"},get node(){return s()},get nodeGraph(){return e.nodeGraph},onNodeClick:g})}})}function Te(e){function t(r){if(e.history.length==1)return[r];{const l=e.history[e.history.length-2];return e.nodeGraph[l].children}}const n=k(()=>{const r=t(e.node.id);return Array.from(r).map(s=>e.nodeGraph[s]).sort((s,y)=>{const g=s.priority-y.priority;return g!==0?g:Number(s.id)-Number(y.id)})}),o=k(()=>{const r=e.node.parents;return e.history.length==1?[]:r.filter(s=>s!==e.parentFocusId)}),i=k(()=>o().map(r=>e.nodeGraph[r]));return(()=>{var r=$e(),l=r.firstChild,s=l.firstChild,y=s.firstChild,g=l.nextSibling,c=g.nextSibling,f=c.firstChild,a=c.nextSibling,h=a.nextSibling,u=h.nextSibling,p=u.firstChild;return s.$$click=()=>e.onNodeClick(e.node.id,e.parentFocusId,!0),A(s,"aria-hidden",!0),s.style.setProperty("font-weight","bold"),T(s,()=>e.node.displayName,y),T(s,()=>e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName,null),T(g,v(Y,{get each(){return n()},get fallback(){return(()=>{var d=ke();return d.style.setProperty("color","grey"),d})()},children:(d,m)=>(()=>{var b=De(),B=b.firstChild;return b.$$click=()=>e.onNodeClick(e.node.id,d.id),T(B,()=>`${d.displayName}; ${d.descriptionTokens?.longDescription}`),I(x=>{var E=`${m()+1} of ${n().length}. ${d.displayName}; ${d.descriptionTokens?.longDescription}`,O=`info-${d.id}`;return E!==x.e&&A(b,"aria-label",x.e=E),O!==x.t&&A(b,"id",x.t=O),x},{e:void 0,t:void 0}),b})()})),c.style.setProperty("margin-bottom","-15px"),f.style.setProperty("font-weight","bold"),A(f,"aria-hidden",!0),T(a,v(Y,{get each(){return i()},children:(d,m)=>(()=>{var b=Se(),B=b.firstChild,x=B.firstChild;return b.$$click=()=>e.onNodeClick(e.node.id,d.id,!1),T(B,()=>d.displayName,x),I(E=>{var O=`context-${e.node.id}-${m()}-${d.id}`,X=`${m()+1} of ${o().length}. ${d.displayName} group. Press Enter to select this grouping.`;return O!==E.e&&A(b,"id",E.e=O),X!==E.t&&A(b,"aria-label",E.t=X),E},{e:void 0,t:void 0}),b})()})),p.style.setProperty("font-weight","bold"),A(p,"aria-hidden",!0),I(d=>{var m=`${e.node.displayName} belongs to ${e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName}`,b=o().length===0?`${e.node.displayName} belongs to 0 additional groups. Press h to return to previous node.`:`${e.node.displayName} belongs to ${o().length} additional groups. Use arrow and enter keys to make selection.`;return m!==d.e&&A(l,"aria-label",d.e=m),b!==d.t&&A(a,"aria-label",d.t=b),d},{e:void 0,t:void 0}),r})()}function Pe(e,t="0"){const n=new Map,o=[[t,[t]]];for(;o.length>0;){const[i,r]=o.shift();if(n.has(i))continue;n.set(i,r);const l=e[i].children;for(const s of l)n.has(s)||o.push([s,[...r,s]])}return n}Ee(["click"]);const Ie={0:{id:"0",displayName:"Aspirin",description:"Chemical diagram for aspirin. Contains benzene, ester, and carboxylic acid.",descriptionTokens:{label:"Aspirin",shortDescription:"Chemical diagram for aspirin. Contains benzene ring, ester, and carboxylic acid.",longDescription:"Molecule containing benzene ring, ester, and carboxylic acid."},parents:[],children:["1","2","3"],priority:0},1:{id:"1",displayName:"Benzene",description:"Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",descriptionTokens:{label:"Benzene",shortDescription:"Benzene ring with 6 carbons.",longDescription:"Ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid)."},parents:["0"],children:["4","5","6","7","8","9"],priority:1},2:{id:"2",displayName:"Ester",description:"Ester group bonded to C1 of benzene ring.",descriptionTokens:{label:"Ester",shortDescription:"Ester group bonded to C1 of benzene ring.",longDescription:"Group bonded to C1 of benzene ring."},parents:["0"],children:["4","10","11","12","13"],priority:2},3:{id:"3",displayName:"Carboxylic acid",description:"Carboxylic acid group bonded to C2 of benzene ring.",descriptionTokens:{label:"Carboxylic acid",shortDescription:"Carboxylic acid group bonded to C2 of benzene ring.",longDescription:"Group bonded to C2 of benzene ring."},parents:["0"],children:["5","14","15","16"],priority:2},4:{id:"4",displayName:"C1",description:"Bonded to C2 and C6 of benzene and O1 of ester.",descriptionTokens:{label:"C1",shortDescription:"Bonded to C2 and C6 of benzene and O1 of ester.",longDescription:"Bonded to C2 and C6 of benzene and O1 of ester."},parents:["1","2"],children:[],priority:2},5:{id:"5",displayName:"C2",description:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",descriptionTokens:{label:"C2",shortDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",longDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid."},parents:["1","3"],children:[],priority:2},6:{id:"6",displayName:"C3",description:"Bonded to C2 and C4 of benzene.",descriptionTokens:{label:"C3",shortDescription:"Bonded to C2 and C4 of benzene.",longDescription:"Bonded to C2 and C4 of benzene."},parents:["1"],children:[],priority:2},7:{id:"7",displayName:"C4",description:"Bonded to C3 and C5 of benzene.",descriptionTokens:{label:"C4",shortDescription:"Bonded to C3 and C5 of benzene.",longDescription:"Bonded to C3 and C5 of benzene."},parents:["1"],children:[],priority:2},8:{id:"8",displayName:"C5",description:"Bonded to C4 and C6 of benzene.",descriptionTokens:{label:"C5",shortDescription:"Bonded to C4 and C6 of benzene.",longDescription:"Bonded to C4 and C6 of benzene."},parents:["1"],children:[],priority:2},9:{id:"9",displayName:"C6",description:"Bonded to C1 and C5 of benzene.",descriptionTokens:{label:"C6",shortDescription:"Bonded to C1 and C5 of benzene.",longDescription:"Bonded to C1 and C5 of benzene."},parents:["1"],children:[],priority:2},10:{id:"10",displayName:"O1",description:"Bonded to C1 of benzene and C7 of ester.",descriptionTokens:{label:"O1",shortDescription:"Bonded to C1 of benzene and C7 of ester.",longDescription:"Bonded to C1 of benzene and C7 of ester."},parents:["2"],children:[],priority:3},11:{id:"11",displayName:"C7",description:"Bonded to O1, O2, and C8 of ester",descriptionTokens:{label:"C7",shortDescription:"Bonded to O1, O2, and C8 of ester",longDescription:"Bonded to O1, O2, and C8 of ester"},parents:["2"],children:[],priority:3},12:{id:"12",displayName:"O2",description:"Bonded to C7 of ester.",descriptionTokens:{label:"O2",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},13:{id:"13",displayName:"C8",description:"Bonded to C7 of ester.",descriptionTokens:{label:"C8",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},14:{id:"14",displayName:"C9",description:"Bonded to O3 and hydroxyl in carboxylic acid.",descriptionTokens:{label:"C9",shortDescription:"Bonded to O3 and hydroxyl in carboxylic acid.",longDescription:"Bonded to O3 and hydroxyl in carboxylic acid."},parents:["3"],children:[],priority:3},15:{id:"15",displayName:"O3",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"O3",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3},16:{id:"16",displayName:"Hydroxyl",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"Hydroxyl",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3}},ve=()=>v(Oe,{nodeGraph:Ie,showHypergraph:!1}),ze=document.getElementById("root");Be(()=>v(ve,{}),ze);
