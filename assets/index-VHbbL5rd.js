(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const ce=(e,t)=>e===t,de=Symbol("solid-track"),F={equals:ce};let ee=re;const k=1,U=2,te={owned:null,cleanups:null,context:null,owner:null};var C=null;let j=null,ae=null,m=null,B=null,A=null,R=0;function L(e,t){const n=m,o=C,i=e.length===0,r=t===void 0?o:t,l=i?te:{owned:null,cleanups:null,context:r?r.context:null,owner:r},s=i?e:()=>e(()=>D(()=>q(l)));C=l,m=null;try{return G(s,!0)}finally{m=n,C=o}}function _(e,t){t=t?Object.assign({},F,t):F;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},o=i=>(typeof i=="function"&&(i=i(n.value)),ie(n,i));return[oe.bind(n),o]}function I(e,t,n){const o=Q(e,t,!1,k);z(o)}function fe(e,t,n){ee=ye;const o=Q(e,t,!1,k);(!n||!n.render)&&(o.user=!0),A?A.push(o):z(o)}function $(e,t,n){n=n?Object.assign({},F,n):F;const o=Q(e,t,!0,0);return o.observers=null,o.observerSlots=null,o.comparator=n.equals||void 0,z(o),oe.bind(o)}function D(e){if(m===null)return e();const t=m;m=null;try{return e()}finally{m=t}}function ue(e){fe(()=>D(e))}function ne(e){return C===null||(C.cleanups===null?C.cleanups=[e]:C.cleanups.push(e)),e}function oe(){if(this.sources&&this.state)if(this.state===k)z(this);else{const e=B;B=null,G(()=>M(this),!1),B=e}if(m){const e=this.observers?this.observers.length:0;m.sources?(m.sources.push(this),m.sourceSlots.push(e)):(m.sources=[this],m.sourceSlots=[e]),this.observers?(this.observers.push(m),this.observerSlots.push(m.sources.length-1)):(this.observers=[m],this.observerSlots=[m.sources.length-1])}return this.value}function ie(e,t,n){let o=e.value;return(!e.comparator||!e.comparator(o,t))&&(e.value=t,e.observers&&e.observers.length&&G(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],l=j&&j.running;l&&j.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?B.push(r):A.push(r),r.observers&&se(r)),l||(r.state=k)}if(B.length>1e6)throw B=[],new Error},!1)),t}function z(e){if(!e.fn)return;q(e);const t=R;he(e,e.value,t)}function he(e,t,n){let o;const i=C,r=m;m=C=e;try{o=e.fn(t)}catch(l){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(q),e.owned=null),e.updatedAt=n+1,le(l)}finally{m=r,C=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ie(e,o):e.value=o,e.updatedAt=n)}function Q(e,t,n,o=k,i){const r={fn:e,state:o,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:C,context:C?C.context:null,pure:n};return C===null||C!==te&&(C.owned?C.owned.push(r):C.owned=[r]),r}function H(e){if(e.state===0)return;if(e.state===U)return M(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<R);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)z(e);else if(e.state===U){const o=B;B=null,G(()=>M(e,t[0]),!1),B=o}}function G(e,t){if(B)return e();let n=!1;t||(B=[]),A?n=!0:A=[],R++;try{const o=e();return pe(n),o}catch(o){n||(A=null),B=null,le(o)}}function pe(e){if(B&&(re(B),B=null),e)return;const t=A;A=null,t.length&&G(()=>ee(t),!1)}function re(e){for(let t=0;t<e.length;t++)H(e[t])}function ye(e){let t,n=0;for(t=0;t<e.length;t++){const o=e[t];o.user?e[n++]=o:H(o)}for(t=0;t<n;t++)H(e[t])}function M(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const i=o.state;i===k?o!==t&&(!o.updatedAt||o.updatedAt<R)&&H(o):i===U&&M(o,t)}}}function se(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=U,n.pure?B.push(n):A.push(n),n.observers&&se(n))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),o=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),l=n.observerSlots.pop();o<i.length&&(r.sourceSlots[l]=o,i[o]=r,n.observerSlots[o]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ge(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t=C){throw ge(e)}const be=Symbol("fallback");function X(e){for(let t=0;t<e.length;t++)e[t]()}function me(e,t,n={}){let o=[],i=[],r=[],l=0,s=t.length>1?[]:null;return ne(()=>X(r)),()=>{let y=e()||[],g,c;return y[de],D(()=>{let d=y.length,p,u,a,h,b,w,x,N,E;if(d===0)l!==0&&(X(r),r=[],o=[],i=[],l=0,s&&(s=[])),n.fallback&&(o=[be],i[0]=L(v=>(r[0]=v,n.fallback())),l=1);else if(l===0){for(i=new Array(d),c=0;c<d;c++)o[c]=y[c],i[c]=L(f);l=d}else{for(a=new Array(d),h=new Array(d),s&&(b=new Array(d)),w=0,x=Math.min(l,d);w<x&&o[w]===y[w];w++);for(x=l-1,N=d-1;x>=w&&N>=w&&o[x]===y[N];x--,N--)a[N]=i[x],h[N]=r[x],s&&(b[N]=s[x]);for(p=new Map,u=new Array(N+1),c=N;c>=w;c--)E=y[c],g=p.get(E),u[c]=g===void 0?-1:g,p.set(E,c);for(g=w;g<=x;g++)E=o[g],c=p.get(E),c!==void 0&&c!==-1?(a[c]=i[g],h[c]=r[g],s&&(b[c]=s[g]),c=u[c],p.set(E,c)):r[g]();for(c=w;c<d;c++)c in a?(i[c]=a[c],r[c]=h[c],s&&(s[c]=b[c],s[c](c))):i[c]=L(f);i=i.slice(0,l=d),o=y.slice(0)}return i});function f(d){if(r[c]=d,s){const[p,u]=_(c);return s[c]=u,t(y[c],p)}return t(y[c])}}}function P(e,t){return D(()=>e(t||{}))}const Ce=e=>`Stale read from <${e}>.`;function J(e){const t="fallback"in e&&{fallback:()=>e.fallback};return $(me(()=>e.each,e.children,t||void 0))}function we(e){const t=e.keyed,n=$(()=>e.when,void 0,{equals:(o,i)=>t?o===i:!o==!i});return $(()=>{const o=n();if(o){const i=e.children;return typeof i=="function"&&i.length>0?D(()=>i(t?o:()=>{if(!D(n))throw Ce("Show");return e.when})):i}return e.fallback},void 0,void 0)}function xe(e,t,n){let o=n.length,i=t.length,r=o,l=0,s=0,y=t[i-1].nextSibling,g=null;for(;l<i||s<r;){if(t[l]===n[s]){l++,s++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===l){const c=r<o?s?n[s-1].nextSibling:n[r-s]:y;for(;s<r;)e.insertBefore(n[s++],c)}else if(r===s)for(;l<i;)(!g||!g.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[s]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[s++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[i]=n[r]}else{if(!g){g=new Map;let f=s;for(;f<r;)g.set(n[f],f++)}const c=g.get(t[l]);if(c!=null)if(s<c&&c<r){let f=l,d=1,p;for(;++f<i&&f<r&&!((p=g.get(t[f]))==null||p!==c+d);)d++;if(d>c-s){const u=t[l];for(;s<c;)e.insertBefore(n[s++],u)}else e.replaceChild(n[s++],t[l++])}else l++;else t[l++].remove()}}}const Y="_$DX_DELEGATE";function Ne(e,t,n,o={}){let i;return L(r=>{i=r,t===document?e():O(t,e(),t.firstChild?null:void 0,n)},o.owner),()=>{i(),t.textContent=""}}function W(e,t,n){let o;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>D(()=>document.importNode(o||(o=i()),!0)):()=>(o||(o=i())).cloneNode(!0);return r.cloneNode=r,r}function Be(e,t=window.document){const n=t[Y]||(t[Y]=new Set);for(let o=0,i=e.length;o<i;o++){const r=e[o];n.has(r)||(n.add(r),t.addEventListener(r,Ee))}}function S(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function O(e,t,n,o){if(n!==void 0&&!o&&(o=[]),typeof t!="function")return K(e,t,o,n);I(i=>K(e,t(),i,n),o)}function Ee(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const o=n[t];if(o&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?o.call(n,i,e):o.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,o,i){for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=o!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number")if(r==="number"&&(t=t.toString()),l){let s=n[0];s&&s.nodeType===3?s.data!==t&&(s.data=t):s=document.createTextNode(t),n=T(e,n,o,s)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||r==="boolean")n=T(e,n,o);else{if(r==="function")return I(()=>{let s=t();for(;typeof s=="function";)s=s();n=K(e,s,n,o)}),()=>n;if(Array.isArray(t)){const s=[],y=n&&Array.isArray(n);if(V(s,t,n,i))return I(()=>n=K(e,s,n,o,!0)),()=>n;if(s.length===0){if(n=T(e,n,o),l)return n}else y?n.length===0?Z(e,s,o):xe(e,n,s):(n&&T(e),Z(e,s));n=s}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=T(e,n,o,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function V(e,t,n,o){let i=!1;for(let r=0,l=t.length;r<l;r++){let s=t[r],y=n&&n[r],g;if(!(s==null||s===!0||s===!1))if((g=typeof s)=="object"&&s.nodeType)e.push(s);else if(Array.isArray(s))i=V(e,s,y)||i;else if(g==="function")if(o){for(;typeof s=="function";)s=s();i=V(e,Array.isArray(s)?s:[s],Array.isArray(y)?y:[y])||i}else e.push(s),i=!0;else{const c=String(s);y&&y.nodeType===3&&y.data===c?e.push(y):e.push(document.createTextNode(c))}}return i}function Z(e,t,n=null){for(let o=0,i=t.length;o<i;o++)e.insertBefore(t[o],n)}function T(e,t,n,o){if(n===void 0)return e.textContent="";const i=o||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const s=t[l];if(i!==s){const y=s.parentNode===e;!r&&!l?y?e.replaceChild(i,s):e.insertBefore(i,n):y&&s.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}var Ae=W('<div><ul id=parents-group tabindex=0><span> belongs to </span></ul><ul id=home tabindex=0 aria-live=assertive></ul><ul id=parent-context tabindex=0><span>Belongs to</span></ul><br><ul id=undo-text tabindex=0 aria-label="Pressing Undo"><span>Pressing Undo'),$e=W("<li>None"),De=W("<li tabindex=0><span aria-hidden=true>"),ke=W("<li tabindex=0><span aria-hidden=true> group");function Se(e){const[t,n]=_(e.nodeGraph[0].id),[o,i]=_(["0"]),[r,l]=_(new Map),s=$(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),y=f=>{if(o().length===1)return[];{const d=o()[o().length-2];return e.nodeGraph[d].children.filter(a=>a!==f)}},g=(f,d,p)=>{if(console.log("clicking",f,d,p),f==="-1"||d==="-1"||!f||!d)return;const u=y(f);let a=d;if(u.includes(d)){const h=o();h.pop(),i([...h,d])}else if(d===f){const h=e.nodeGraph[d].children;if(h.length>0){const b=h[0];i([...o(),b]),a=b}}else if(e.nodeGraph[f].parents.includes(d)&&p){const h=r().get(d);i([...h??["0"]])}else if(e.nodeGraph[f].parents.includes(d)&&!p){const h=o();h.pop(),h.pop(),i([...h,d,f]),a=f}n(a),setTimeout(()=>{const h=document.getElementById(`info-${a}`);h&&(h.hasAttribute("tabindex")||h.setAttribute("tabindex","0"),h.focus())},0)},c=f=>{if(f.key==="ArrowUp"&&f.shiftKey){const d=o();if(d.length>2){d.pop();const p=d[d.length-1],u=d[d.length-2];if(u&&e.nodeGraph[p].parents.includes(u))i([...d]),n(p);else{const h=r().get(p);i([...h??["0"]]),n(p)}const a=document.getElementById(`info-${p}`);a&&a.focus()}else if(d.length>1){d.pop();const p=d[d.length-1];if(p){i([...d]),n(p);const u=document.getElementById(`info-${p}`);u&&u.focus()}}else document.getElementById("parents-group")?.focus();f.preventDefault()}else if(f.key==="ArrowDown"&&f.shiftKey){if((document.activeElement?.id).startsWith("parents")){const u=document.getElementById(`info-${t()}`);u&&u.focus()}else{const u=e.nodeGraph[t()].children[0];if(u){i(h=>[...h,u]),n(u);const a=document.getElementById(`info-${u}`);a&&a.focus()}}f.preventDefault()}else if(f.key==="h"){const d=document.getElementById("home"),p=o()[o().length-1],u=document.getElementById(`info-${p}`);u?u.focus():d?.focus()}else if(f.key==="p")document.getElementById("parent-context")?.focus();else if(f.key==="Backspace")i(d=>{const p=[...d];p.pop();const u=p[p.length-1];if(u){const a=document.getElementById("undo-text");a&&a.focus(),n(u),setTimeout(()=>{const h=document.getElementById(`info-${u}`);h&&h.focus()},1e3)}return p});else if(f.key==="ArrowLeft"||f.key==="ArrowRight"||f.key==="ArrowUp"||f.key==="ArrowDown"){const d=document.activeElement,p=d?.id;if(p.startsWith("info-")||p==="home"){const u=Array.from(document.querySelectorAll("#home li")),a=u.indexOf(d);let h=a;(f.key==="ArrowLeft"||f.key==="ArrowUp")&&a>0?h=a-1:(f.key==="ArrowRight"||f.key==="ArrowDown")&&a<u.length-1&&(h=a+1);const b=u[h]?.id.split("info-")[1];if(b){const w=o();w.pop(),i([...w,b]),n(b)}u[h]?.focus(),f.preventDefault()}else if(p.startsWith("context")){const u=Array.from(document.querySelectorAll("#parent-context li")),a=u.indexOf(d);let h=a;(f.key==="ArrowLeft"||f.key==="ArrowUp")&&a>0?h=a-1:(f.key==="ArrowRight"||f.key==="ArrowDown")&&a<u.length-1&&(h=a+1),u[h]?.focus()}else p==="parent-context"?Array.from(document.querySelectorAll("#parent-context li"))[0]?.focus():f.preventDefault()}else if(f.key==="Enter"){const p=document.activeElement?.id;if(p.startsWith("info-")){const u=e.nodeGraph[t()].children[0];if(u){i(h=>[...h,u]),n(u);const a=document.getElementById(`info-${u}`);a&&a.focus()}}else if(p.startsWith("context")){const u=p.split("-")[3];let a=o();a.pop(),a.pop(),i(b=>[...a,u,t()]),n(t());const h=document.getElementById(`info-${t()}`);h&&h.focus()}else f.preventDefault()}else f.preventDefault()};return ue(()=>{const f=Te(e.nodeGraph);l(f),window.addEventListener("keydown",c)}),ne(()=>{window.removeEventListener("keydown",c)}),P(we,{get when(){return t()},get children(){return P(Oe,{get history(){return o()},get parentFocusId(){return $(()=>o().length>1)()?o()[o().length-2]:"-1"},get node(){return s()},get nodeGraph(){return e.nodeGraph},onNodeClick:g})}})}function Oe(e){function t(r){if(e.history.length==1)return[r];{const l=e.history[e.history.length-2];return e.nodeGraph[l].children}}const n=$(()=>{const r=t(e.node.id);return Array.from(r).map(s=>e.nodeGraph[s]).sort((s,y)=>{const g=s.priority-y.priority;return g!==0?g:Number(s.id)-Number(y.id)})}),o=$(()=>{const r=e.node.parents;return e.history.length==1?[]:r.filter(s=>s!==e.parentFocusId)}),i=$(()=>o().map(r=>e.nodeGraph[r]));return(()=>{var r=Ae(),l=r.firstChild,s=l.firstChild,y=s.firstChild,g=l.nextSibling,c=g.nextSibling,f=c.firstChild,d=c.nextSibling,p=d.nextSibling,u=p.firstChild;return s.$$click=()=>e.onNodeClick(e.node.id,e.parentFocusId,!0),S(s,"aria-hidden",!0),s.style.setProperty("font-weight","bold"),O(s,()=>e.node.displayName,y),O(s,()=>e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName,null),O(g,P(J,{get each(){return n()},get fallback(){return(()=>{var a=$e();return a.style.setProperty("color","grey"),a})()},children:(a,h)=>(()=>{var b=De(),w=b.firstChild;return b.$$click=()=>e.onNodeClick(e.node.id,a.id),O(w,()=>`${a.displayName}; ${a.descriptionTokens?.longDescription}`),I(x=>{var N=`${h()+1} of ${n().length}. ${a.displayName}; ${a.descriptionTokens?.longDescription}`,E=`info-${a.id}`;return N!==x.e&&S(b,"aria-label",x.e=N),E!==x.t&&S(b,"id",x.t=E),x},{e:void 0,t:void 0}),b})()})),f.style.setProperty("font-weight","bold"),O(c,P(J,{get each(){return i()},children:(a,h)=>(()=>{var b=ke(),w=b.firstChild,x=w.firstChild;return b.$$click=()=>e.onNodeClick(e.node.id,a.id,!1),O(w,()=>a.displayName,x),I(N=>{var E=`context-${e.node.id}-${h()}-${a.id}`,v=`${h()+1} of ${o().length}. ${a.displayName} group. Press Enter to select this grouping.`;return E!==N.e&&S(b,"id",N.e=E),v!==N.t&&S(b,"aria-label",N.t=v),N},{e:void 0,t:void 0}),b})()}),null),u.style.setProperty("font-weight","bold"),S(u,"aria-hidden",!0),I(()=>S(l,"aria-label",`${e.node.displayName} belongs to ${e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName}`)),r})()}function Te(e,t="0"){const n=new Map,o=[[t,[t]]];for(;o.length>0;){const[i,r]=o.shift();if(n.has(i))continue;n.set(i,r);const l=e[i].children;for(const s of l)n.has(s)||o.push([s,[...r,s]])}return n}Be(["click"]);const Ie={0:{id:"0",displayName:"Aspirin",description:"Chemical diagram for aspirin. Contains benzene, ester, and carboxylic acid.",descriptionTokens:{label:"Aspirin",shortDescription:"Chemical diagram for aspirin. Contains benzene ring, ester, and carboxylic acid.",longDescription:"Molecule containing benzene ring, ester, and carboxylic acid."},parents:[],children:["1","2","3"],priority:0},1:{id:"1",displayName:"Benzene",description:"Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",descriptionTokens:{label:"Benzene",shortDescription:"Benzene ring with 6 carbons.",longDescription:"Ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid)."},parents:["0"],children:["4","5","6","7","8","9"],priority:1},2:{id:"2",displayName:"Ester",description:"Ester group bonded to C1 of benzene ring.",descriptionTokens:{label:"Ester",shortDescription:"Ester group bonded to C1 of benzene ring.",longDescription:"Group bonded to C1 of benzene ring."},parents:["0"],children:["4","10","11","12","13"],priority:2},3:{id:"3",displayName:"Carboxylic acid",description:"Carboxylic acid group bonded to C2 of benzene ring.",descriptionTokens:{label:"Carboxylic acid",shortDescription:"Carboxylic acid group bonded to C2 of benzene ring.",longDescription:"Group bonded to C2 of benzene ring."},parents:["0"],children:["5","14","15","16"],priority:2},4:{id:"4",displayName:"C1",description:"Bonded to C2 and C6 of benzene and O1 of ester.",descriptionTokens:{label:"C1",shortDescription:"Bonded to C2 and C6 of benzene and O1 of ester.",longDescription:"Bonded to C2 and C6 of benzene and O1 of ester."},parents:["1","2"],children:[],priority:2},5:{id:"5",displayName:"C2",description:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",descriptionTokens:{label:"C2",shortDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",longDescription:"Bonded to C1 and C3 of benzene and C9 of carboxylic acid."},parents:["1","3"],children:[],priority:2},6:{id:"6",displayName:"C3",description:"Bonded to C2 and C4 of benzene.",descriptionTokens:{label:"C3",shortDescription:"Bonded to C2 and C4 of benzene.",longDescription:"Bonded to C2 and C4 of benzene."},parents:["1"],children:[],priority:2},7:{id:"7",displayName:"C4",description:"Bonded to C3 and C5 of benzene.",descriptionTokens:{label:"C4",shortDescription:"Bonded to C3 and C5 of benzene.",longDescription:"Bonded to C3 and C5 of benzene."},parents:["1"],children:[],priority:2},8:{id:"8",displayName:"C5",description:"Bonded to C4 and C6 of benzene.",descriptionTokens:{label:"C5",shortDescription:"Bonded to C4 and C6 of benzene.",longDescription:"Bonded to C4 and C6 of benzene."},parents:["1"],children:[],priority:2},9:{id:"9",displayName:"C6",description:"Bonded to C1 and C5 of benzene.",descriptionTokens:{label:"C6",shortDescription:"Bonded to C1 and C5 of benzene.",longDescription:"Bonded to C1 and C5 of benzene."},parents:["1"],children:[],priority:2},10:{id:"10",displayName:"O1",description:"Bonded to C1 of benzene and C7 of ester.",descriptionTokens:{label:"O1",shortDescription:"Bonded to C1 of benzene and C7 of ester.",longDescription:"Bonded to C1 of benzene and C7 of ester."},parents:["2"],children:[],priority:3},11:{id:"11",displayName:"C7",description:"Bonded to O1, O2, and C8 of ester",descriptionTokens:{label:"C7",shortDescription:"Bonded to O1, O2, and C8 of ester",longDescription:"Bonded to O1, O2, and C8 of ester"},parents:["2"],children:[],priority:3},12:{id:"12",displayName:"O2",description:"Bonded to C7 of ester.",descriptionTokens:{label:"O2",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},13:{id:"13",displayName:"C8",description:"Bonded to C7 of ester.",descriptionTokens:{label:"C8",shortDescription:"Bonded to C7 of ester.",longDescription:"Bonded to C7 of ester."},parents:["2"],children:[],priority:3},14:{id:"14",displayName:"C9",description:"Bonded to O3 and hydroxyl in carboxylic acid.",descriptionTokens:{label:"C9",shortDescription:"Bonded to O3 and hydroxyl in carboxylic acid.",longDescription:"Bonded to O3 and hydroxyl in carboxylic acid."},parents:["3"],children:[],priority:3},15:{id:"15",displayName:"O3",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"O3",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3},16:{id:"16",displayName:"Hydroxyl",description:"Bonded to C9 of carboxylic acid.",descriptionTokens:{label:"Hydroxyl",shortDescription:"Bonded to C9 of carboxylic acid.",longDescription:"Bonded to C9 of carboxylic acid."},parents:["3"],children:[],priority:3}},Pe=()=>P(Se,{nodeGraph:Ie,showHypergraph:!1}),ze=document.getElementById("root");Ne(()=>P(Pe,{}),ze);
