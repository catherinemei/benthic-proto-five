(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();const ae=(e,t)=>e===t,ce=Symbol("solid-track"),O={equals:ae};let ee=se;const B=1,_=2,te={owned:null,cleanups:null,context:null,owner:null};var b=null;let V=null,de=null,C=null,D=null,N=null,q=0;function U(e,t){const n=C,i=b,o=e.length===0,s=t===void 0?i:t,l=o?te:{owned:null,cleanups:null,context:s?s.context:null,owner:s},r=o?e:()=>e(()=>k(()=>R(l)));b=l,C=null;try{return F(r,!0)}finally{C=n,b=i}}function G(e,t){t=t?Object.assign({},O,t):O;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=o=>(typeof o=="function"&&(o=o(n.value)),oe(n,o));return[ie.bind(n),i]}function P(e,t,n){const i=Y(e,t,!1,B);I(i)}function ue(e,t,n){ee=ge;const i=Y(e,t,!1,B);(!n||!n.render)&&(i.user=!0),N?N.push(i):I(i)}function x(e,t,n){n=n?Object.assign({},O,n):O;const i=Y(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,I(i),ie.bind(i)}function k(e){if(C===null)return e();const t=C;C=null;try{return e()}finally{C=t}}function pe(e){ue(()=>k(e))}function ne(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function ie(){if(this.sources&&this.state)if(this.state===B)I(this);else{const e=D;D=null,F(()=>j(this),!1),D=e}if(C){const e=this.observers?this.observers.length:0;C.sources?(C.sources.push(this),C.sourceSlots.push(e)):(C.sources=[this],C.sourceSlots=[e]),this.observers?(this.observers.push(C),this.observerSlots.push(C.sources.length-1)):(this.observers=[C],this.observerSlots=[C.sources.length-1])}return this.value}function oe(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&F(()=>{for(let o=0;o<e.observers.length;o+=1){const s=e.observers[o],l=V&&V.running;l&&V.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?D.push(s):N.push(s),s.observers&&re(s)),l||(s.state=B)}if(D.length>1e6)throw D=[],new Error},!1)),t}function I(e){if(!e.fn)return;R(e);const t=q;fe(e,e.value,t)}function fe(e,t,n){let i;const o=b,s=C;C=b=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=B,e.owned&&e.owned.forEach(R),e.owned=null),e.updatedAt=n+1,le(l)}finally{C=s,b=o}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?oe(e,i):e.value=i,e.updatedAt=n)}function Y(e,t,n,i=B,o){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:b?b.context:null,pure:n};return b===null||b!==te&&(b.owned?b.owned.push(s):b.owned=[s]),s}function H(e){if(e.state===0)return;if(e.state===_)return j(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<q);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===B)I(e);else if(e.state===_){const i=D;D=null,F(()=>j(e,t[0]),!1),D=i}}function F(e,t){if(D)return e();let n=!1;t||(D=[]),N?n=!0:N=[],q++;try{const i=e();return he(n),i}catch(i){n||(N=null),D=null,le(i)}}function he(e){if(D&&(se(D),D=null),e)return;const t=N;N=null,t.length&&F(()=>ee(t),!1)}function se(e){for(let t=0;t<e.length;t++)H(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:H(i)}for(t=0;t<n;t++)H(e[t])}function j(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const o=i.state;o===B?i!==t&&(!i.updatedAt||i.updatedAt<q)&&H(i):o===_&&j(i,t)}}}function re(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=_,n.pure?D.push(n):N.push(n),n.observers&&re(n))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const s=o.pop(),l=n.observerSlots.pop();i<o.length&&(s.sourceSlots[l]=i,o[i]=s,n.observerSlots[i]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ye(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function le(e,t=b){throw ye(e)}const me=Symbol("fallback");function Q(e){for(let t=0;t<e.length;t++)e[t]()}function Ce(e,t,n={}){let i=[],o=[],s=[],l=0,r=t.length>1?[]:null;return ne(()=>Q(s)),()=>{let h=e()||[],y,c;return h[ce],k(()=>{let u=h.length,f,a,d,g,m,T,w,A,L;if(u===0)l!==0&&(Q(s),s=[],i=[],o=[],l=0,r&&(r=[])),n.fallback&&(i=[me],o[0]=U(M=>(s[0]=M,n.fallback())),l=1);else if(l===0){for(o=new Array(u),c=0;c<u;c++)i[c]=h[c],o[c]=U(p);l=u}else{for(d=new Array(u),g=new Array(u),r&&(m=new Array(u)),T=0,w=Math.min(l,u);T<w&&i[T]===h[T];T++);for(w=l-1,A=u-1;w>=T&&A>=T&&i[w]===h[A];w--,A--)d[A]=o[w],g[A]=s[w],r&&(m[A]=r[w]);for(f=new Map,a=new Array(A+1),c=A;c>=T;c--)L=h[c],y=f.get(L),a[c]=y===void 0?-1:y,f.set(L,c);for(y=T;y<=w;y++)L=i[y],c=f.get(L),c!==void 0&&c!==-1?(d[c]=o[y],g[c]=s[y],r&&(m[c]=r[y]),c=a[c],f.set(L,c)):s[y]();for(c=T;c<u;c++)c in d?(o[c]=d[c],s[c]=g[c],r&&(r[c]=m[c],r[c](c))):o[c]=U(p);o=o.slice(0,l=u),i=h.slice(0)}return o});function p(u){if(s[c]=u,r){const[f,a]=G(c);return r[c]=a,t(h[c],f)}return t(h[c])}}}function v(e,t){return k(()=>e(t||{}))}const be=e=>`Stale read from <${e}>.`;function J(e){const t="fallback"in e&&{fallback:()=>e.fallback};return x(Ce(()=>e.each,e.children,t||void 0))}function Te(e){const t=e.keyed,n=x(()=>e.when,void 0,{equals:(i,o)=>t?i===o:!i==!o});return x(()=>{const i=n();if(i){const o=e.children;return typeof o=="function"&&o.length>0?k(()=>o(t?i:()=>{if(!k(n))throw be("Show");return e.when})):o}return e.fallback},void 0,void 0)}function we(e,t,n){let i=n.length,o=t.length,s=i,l=0,r=0,h=t[o-1].nextSibling,y=null;for(;l<o||r<s;){if(t[l]===n[r]){l++,r++;continue}for(;t[o-1]===n[s-1];)o--,s--;if(o===l){const c=s<i?r?n[r-1].nextSibling:n[s-r]:h;for(;r<s;)e.insertBefore(n[r++],c)}else if(s===r)for(;l<o;)(!y||!y.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[r]===t[o-1]){const c=t[--o].nextSibling;e.insertBefore(n[r++],t[l++].nextSibling),e.insertBefore(n[--s],c),t[o]=n[s]}else{if(!y){y=new Map;let p=r;for(;p<s;)y.set(n[p],p++)}const c=y.get(t[l]);if(c!=null)if(r<c&&c<s){let p=l,u=1,f;for(;++p<o&&p<s&&!((f=y.get(t[p]))==null||f!==c+u);)u++;if(u>c-r){const a=t[l];for(;r<c;)e.insertBefore(n[r++],a)}else e.replaceChild(n[r++],t[l++])}else l++;else t[l++].remove()}}}const Z="_$DX_DELEGATE";function Ae(e,t,n,i={}){let o;return U(s=>{o=s,t===document?e():S(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{o(),t.textContent=""}}function W(e,t,n){let i;const o=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},s=t?()=>k(()=>document.importNode(i||(i=o()),!0)):()=>(i||(i=o())).cloneNode(!0);return s.cloneNode=s,s}function De(e,t=window.document){const n=t[Z]||(t[Z]=new Set);for(let i=0,o=e.length;i<o;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Le))}}function E(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function S(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return K(e,t,i,n);P(o=>K(e,t(),o,n),i)}function Le(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const i=n[t];if(i&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?i.call(n,o,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function K(e,t,n,i,o){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let r=n[0];r&&r.nodeType===3?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=$(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=$(e,n,i);else{if(s==="function")return P(()=>{let r=t();for(;typeof r=="function";)r=r();n=K(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],h=n&&Array.isArray(n);if(X(r,t,n,o))return P(()=>n=K(e,r,n,i,!0)),()=>n;if(r.length===0){if(n=$(e,n,i),l)return n}else h?n.length===0?z(e,r,i):we(e,n,r):(n&&$(e),z(e,r));n=r}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=$(e,n,i,t);$(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function X(e,t,n,i){let o=!1;for(let s=0,l=t.length;s<l;s++){let r=t[s],h=n&&n[s],y;if(!(r==null||r===!0||r===!1))if((y=typeof r)=="object"&&r.nodeType)e.push(r);else if(Array.isArray(r))o=X(e,r,h)||o;else if(y==="function")if(i){for(;typeof r=="function";)r=r();o=X(e,Array.isArray(r)?r:[r],Array.isArray(h)?h:[h])||o}else e.push(r),o=!0;else{const c=String(r);h&&h.nodeType===3&&h.data===c?e.push(h):e.push(document.createTextNode(c))}}return o}function z(e,t,n=null){for(let i=0,o=t.length;i<o;i++)e.insertBefore(t[i],n)}function $(e,t,n,i){if(n===void 0)return e.textContent="";const o=i||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const r=t[l];if(o!==r){const h=r.parentNode===e;!s&&!l?h?e.replaceChild(o,r):e.insertBefore(o,n):h&&r.remove()}else s=!0}}else e.insertBefore(o,n);return[o]}var Ne=W('<div><ul id=parents-group tabindex=0><span> belongs to </span></ul><ul id=home tabindex=0 aria-live=assertive></ul><ul id=parent-context tabindex=0><span>Belongs to</span></ul><br><ul id=undo-text tabindex=0 aria-label="Pressing Undo"><span>Pressing Undo'),Ee=W("<li>None"),xe=W("<li tabindex=0><span aria-hidden=true>"),ke=W("<li tabindex=0><span aria-hidden=true> group");function Be(e){const[t,n]=G(e.nodeGraph[0].id),[i,o]=G(["0"]),[s,l]=G(new Map),r=x(()=>t()!==null?e.nodeGraph[t()]:e.nodeGraph[0]),h=p=>{const u=e.nodeGraph[p].parents,f=new Set;for(const a of u)for(const d of e.nodeGraph[a].children)f.add(d);return f},y=(p,u)=>{if(p===u)return;if(h(u).has(p)){const a=i();a.pop(),o([...a,u])}else if(e.nodeGraph[p].parents.includes(u)){const a=s().get(u);o([...a??["0"]])}else e.nodeGraph[p].children.includes(u)&&o(a=>[...a,u]);n(u),setTimeout(()=>{const a=document.getElementById(`info-${u}`);a&&(a.hasAttribute("tabindex")||a.setAttribute("tabindex","0"),a.focus())},0)},c=p=>{if(p.key==="ArrowUp"&&p.shiftKey){const u=i();if(u.length>2){u.pop();const f=u[u.length-1],a=u[u.length-2];if(a&&e.nodeGraph[f].parents.includes(a))o([...u]),n(f);else{const g=s().get(f);o([...g??["0"]]),n(f)}const d=document.getElementById(`info-${f}`);d&&d.focus()}else if(u.length>1){u.pop();const f=u[u.length-1];if(f){o([...u]),n(f);const a=document.getElementById(`info-${f}`);a&&a.focus()}}else document.getElementById("parents-group")?.focus();p.preventDefault()}else if(p.key==="ArrowDown"&&p.shiftKey){if((document.activeElement?.id).startsWith("parents")){const a=document.getElementById(`info-${t()}`);a&&a.focus()}else{const a=e.nodeGraph[t()].children[0];if(a){o(g=>[...g,a]),n(a);const d=document.getElementById(`info-${a}`);d&&d.focus()}}p.preventDefault()}else if(p.key==="h"){const u=document.getElementById("home"),f=i()[i().length-1],a=document.getElementById(`info-${f}`);a?a.focus():u?.focus()}else if(p.key==="p")document.getElementById("parent-context")?.focus();else if(p.key==="Backspace")o(u=>{const f=[...u];f.pop();const a=f[f.length-1];if(a){const d=document.getElementById("undo-text");d&&d.focus(),n(a),setTimeout(()=>{const g=document.getElementById(`info-${a}`);g&&g.focus()},1e3)}return f});else if(p.key==="ArrowLeft"||p.key==="ArrowRight"||p.key==="ArrowUp"||p.key==="ArrowDown"){const u=document.activeElement,f=u?.id;if(f.startsWith("info-")||f==="home"){const a=Array.from(document.querySelectorAll("#home li")),d=a.indexOf(u);let g=d;(p.key==="ArrowLeft"||p.key==="ArrowUp")&&d>0?g=d-1:(p.key==="ArrowRight"||p.key==="ArrowDown")&&d<a.length-1&&(g=d+1);const m=a[g]?.id.split("info-")[1];if(m){const T=i();T.pop(),o([...T,m]),n(m)}a[g]?.focus(),p.preventDefault()}else if(f.startsWith("context")){const a=Array.from(document.querySelectorAll("#parent-context li")),d=a.indexOf(u);let g=d;(p.key==="ArrowLeft"||p.key==="ArrowUp")&&d>0?g=d-1:(p.key==="ArrowRight"||p.key==="ArrowDown")&&d<a.length-1&&(g=d+1),a[g]?.focus()}else f==="parent-context"?Array.from(document.querySelectorAll("#parent-context li"))[0]?.focus():p.preventDefault()}else if(p.key==="Enter"){const f=document.activeElement?.id;if(f.startsWith("info-")){const a=e.nodeGraph[t()].children[0];if(a){o(g=>[...g,a]),n(a);const d=document.getElementById(`info-${a}`);d&&d.focus()}}else if(f.startsWith("context")){const a=f.split("-")[3];let d=i();d.pop(),d.pop(),o(m=>[...d,a,t()]),n(t());const g=document.getElementById(`info-${t()}`);g&&g.focus()}else p.preventDefault()}else p.preventDefault()};return pe(()=>{const p=$e(e.nodeGraph);l(p),window.addEventListener("keydown",c)}),ne(()=>{window.removeEventListener("keydown",c)}),v(Te,{get when(){return t()},get children(){return v(Se,{get history(){return i()},get parentFocusId(){return x(()=>i().length>1)()?i()[i().length-2]:"-1"},get node(){return r()},get nodeGraph(){return e.nodeGraph},onNodeClick:y})}})}function Se(e){function t(s){if(e.history.length==1)return[s];{const l=e.history[e.history.length-2];return e.nodeGraph[l].children}}const n=x(()=>{const s=t(e.node.id);return Array.from(s).map(r=>e.nodeGraph[r]).sort((r,h)=>{const y=r.priority-h.priority;return y!==0?y:Number(r.id)-Number(h.id)})}),i=x(()=>{const s=e.node.parents;return e.history.length==1?[]:s.filter(r=>r!==e.parentFocusId)}),o=x(()=>i().map(s=>e.nodeGraph[s]));return(()=>{var s=Ne(),l=s.firstChild,r=l.firstChild,h=r.firstChild,y=l.nextSibling,c=y.nextSibling,p=c.firstChild,u=c.nextSibling,f=u.nextSibling,a=f.firstChild;return E(r,"aria-hidden",!0),r.style.setProperty("font-weight","bold"),S(r,()=>e.node.displayName,h),S(r,()=>e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName,null),S(y,v(J,{get each(){return n()},get fallback(){return(()=>{var d=Ee();return d.style.setProperty("color","grey"),d})()},children:(d,g)=>(()=>{var m=xe(),T=m.firstChild;return m.$$click=()=>e.onNodeClick(e.node.id,d.id),S(T,()=>`${d.displayName}; ${d.descriptionTokens?.longDescription}`),P(w=>{var A=`${g()+1} of ${n().length}. ${d.displayName}; ${d.descriptionTokens?.longDescription}`,L=`info-${d.id}`;return A!==w.e&&E(m,"aria-label",w.e=A),L!==w.t&&E(m,"id",w.t=L),w},{e:void 0,t:void 0}),m})()})),p.style.setProperty("font-weight","bold"),S(c,v(J,{get each(){return o()},children:(d,g)=>(()=>{var m=ke(),T=m.firstChild,w=T.firstChild;return m.$$click=()=>e.onNodeClick(e.node.id,d.id),S(T,()=>d.displayName,w),P(A=>{var L=`context-${e.node.id}-${g()}-${d.id}`,M=`${d.displayName} group`;return L!==A.e&&E(m,"id",A.e=L),M!==A.t&&E(m,"aria-label",A.t=M),A},{e:void 0,t:void 0}),m})()}),null),a.style.setProperty("font-weight","bold"),E(a,"aria-hidden",!0),P(d=>{var g=`${e.node.displayName} belongs to ${e.parentFocusId==="-1"?"no groups":e.nodeGraph[e.parentFocusId].displayName}`,m=e.node.parents.length==0?`${e.node.displayName} belongs to 0 additional groups`:`${e.node.displayName} belongs to ${i().length} additional groups. Press arrow keys to navigate and press Enter to confirm selection.`;return g!==d.e&&E(l,"aria-label",d.e=g),m!==d.t&&E(c,"aria-label",d.t=m),d},{e:void 0,t:void 0}),s})()}function $e(e,t="0"){const n=new Map,i=[[t,[t]]];for(;i.length>0;){const[o,s]=i.shift();if(n.has(o))continue;n.set(o,s);const l=e[o].children;for(const r of l)n.has(r)||i.push([r,[...s,r]])}return n}De(["click"]);const Pe={0:{id:"0",displayName:"Stacked Bar Chart",description:"Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies.",descriptionTokens:{label:"Stacked Bar Chart",shortDescription:"Major Trophies for some English teams.",longDescription:"Major Trophies for some English teams. Axes team and sum trophies."},parents:[],children:["1","2","22"],priority:0},1:{id:"1",displayName:"X-axis",description:"X Axis. Arsenal, Chelsea, Liverpool, Manchester United.",descriptionTokens:{label:"X-axis",shortDescription:"Contains 4 teams.",longDescription:"Contains 4 teams."},parents:["0"],children:["3","4","5","6"],priority:1},2:{id:"2",displayName:"Legend",description:"Legend. Contest included: BPL, FA Cup, CL.",descriptionTokens:{label:"Legend",shortDescription:"Contains 3 contests.",longDescription:"Contains 3 contests."},parents:["0"],children:["7","8","9"],priority:2},3:{id:"3",displayName:"Arsenal",description:"Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal.",descriptionTokens:{label:"Arsenal",shortDescription:"Contains: 3 contests. Total trophies: 17.",longDescription:"Total trophies: 17. Contains 3 contests. Bar representing trophies won by Arsenal."},parents:["1"],children:["10","11","12"],priority:2},4:{id:"4",displayName:"Chelsea",description:"Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea.",descriptionTokens:{label:"Chelsea",shortDescription:"Contains: 3 contests. Total trophies: 15.",longDescription:"Total trophies: 15. Contains 3 contests. Bar representing trophies won by Chelsea."},parents:["1"],children:["13","14","15"],priority:2},5:{id:"5",displayName:"Liverpool",description:"Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool",descriptionTokens:{label:"Liverpool",shortDescription:"Contains: 3 contests. Total trophies: 15.",longDescription:"Total trophies: 15. Contains 3 contests. Bar representing trophies won by Liverpool"},parents:["1"],children:["16","17","18"],priority:2},6:{id:"6",displayName:"Manchester",description:"Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United.",descriptionTokens:{label:"Manchester United",shortDescription:"Contains: 3 contests. Total trophies: 28.",longDescription:"Total trophies: 28. Contains 3 contests. Bar representing trophies won by Manchester United."},parents:["1"],children:["19","20","21"],priority:2},7:{id:"7",displayName:"BPL",description:"Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition.",descriptionTokens:{label:"BPL",shortDescription:"Contains: 4 teams. Total trophies: 22.",longDescription:"Total trophies: 22. Contains 4 teams. Legend grouping for the BPL competition."},parents:["2"],children:["10","13","16","19"],priority:3},8:{id:"8",displayName:"FA Cup",description:"Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition.",descriptionTokens:{label:"FA Cup",shortDescription:"Contains: 4 teams. Total trophies: 42.",longDescription:"Total trophies: 42. Contains 4 teams. Legend grouping for the FA Cup competition."},parents:["2"],children:["11","14","17","20"],priority:3},9:{id:"9",displayName:"CL",description:"Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition.",descriptionTokens:{label:"CL",shortDescription:"Contains: 4 teams. Total trophies: 11.",longDescription:"Total trophies: 11. Contains 4 teams. Legend grouping for the CL competition."},parents:["2"],children:["12","15","18","21"],priority:3},10:{id:"10",displayName:"Arsenal BPL",description:"Team: Arsenal. Contest: BPL. Trophies: 3. Data point.",descriptionTokens:{label:"Arsenal BPL",shortDescription:"Trophies: 3.",longDescription:"Trophies: 3. Data point."},parents:["3","7"],children:[],priority:4},11:{id:"11",displayName:"Arsenal FA Cup",description:"Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point.",descriptionTokens:{label:"Arsenal FA Cup",shortDescription:"Trophies: 14.",longDescription:"Trophies: 14. Data point."},parents:["3","8"],children:[],priority:4},12:{id:"12",displayName:"Arsenal CL",description:"Team: Arsenal. Contest: CL. Trophies: 0. Data point.",descriptionTokens:{label:"Arsenal CL",shortDescription:"Trophies: 0.",longDescription:"Trophies: 0. Data point."},parents:["3","9"],children:[],priority:4},13:{id:"13",displayName:"Chelsea BPL",description:"Team: Chelsea. Contest: BPL. Trophies: 5. Data point.",descriptionTokens:{label:"Chelsea BPL",shortDescription:"Trophies: 5.",longDescription:"Trophies: 5. Data point."},parents:["4","7"],children:[],priority:4},14:{id:"14",displayName:"Chelsea FA Cup",description:"Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point.",descriptionTokens:{label:"Chelsea FA Cup",shortDescription:"Trophies: 8.",longDescription:"Trophies: 8. Data point."},parents:["4","8"],children:[],priority:4},15:{id:"15",displayName:"Chelsea CL",description:"Team: Chelsea. Contest: CL. Trophies: 2. Data point.",descriptionTokens:{label:"Chelsea CL",shortDescription:"Trophies: 2.",longDescription:"Trophies: 2. Data point."},parents:["4","9"],children:[],priority:4},16:{id:"16",displayName:"Liverpool BPL",description:"Team: Liverpool. Contest: BPL. Trophies: 1. Data point.",descriptionTokens:{label:"Liverpool BPL",shortDescription:"Trophies: 1.",longDescription:"Trophies: 1. Data point."},parents:["5","7"],children:[],priority:4},17:{id:"17",displayName:"Liverpool FA Cup",description:"Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point.",descriptionTokens:{label:"Liverpool FA Cup",shortDescription:"Trophies: 8.",longDescription:"Trophies: 8. Data point."},parents:["5","8"],children:[],priority:4},18:{id:"18",displayName:"Liverpool CL",description:"Team: Liverpool. Contest: CL. Trophies: 6. Data point.",descriptionTokens:{label:"Liverpool CL",shortDescription:"Trophies: 6.",longDescription:"Trophies: 6. Data point."},parents:["5","9"],children:[],priority:4},19:{id:"19",displayName:"Manchester BPL",description:"Team: Manchester United. Contest: BPL. Trophies: 13. Data point.",descriptionTokens:{label:"Manchester United BPL",shortDescription:"Trophies: 13.",longDescription:"Trophies: 13. Data point."},parents:["6","7"],children:[],priority:4},20:{id:"20",displayName:"Manchester FA Cup",description:"Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point.",descriptionTokens:{label:"Manchester United FA Cup",shortDescription:"Trophies: 12.",longDescription:"Trophies: 12. Data point."},parents:["6","8"],children:[],priority:4},21:{id:"21",displayName:"Manchester United CL",description:"Team: Manchester United. Contest: CL. Trophies: 3. Data point.",descriptionTokens:{label:"Manchester United CL",shortDescription:"Trophies: 3.",longDescription:"Trophies: 3. Data point."},parents:["6","9"],children:[],priority:4},22:{id:"22",displayName:"Y-axis",description:"Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale.",descriptionTokens:{label:"Y-axis",shortDescription:"Y-axis. Count trophies.",longDescription:"Label: count trophies. Values range from 0 to 30 on a numerical scale."},parents:["0"],children:[],priority:2}},ve=()=>v(Be,{nodeGraph:Pe,showHypergraph:!1}),Ie=document.getElementById("root");Ae(()=>v(ve,{}),Ie);
