(()=>{"use strict";(()=>{function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e){return 0===Object.keys(e).length}function l(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function r(e,t,n){e.$$.on_destroy.push(l(t,n))}function a(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}new Set;let u,d=!1;function g(e,t,n,s){for(;e<t;){const i=e+(t-e>>1);n(i)<=s?e=i+1:t=i}return e}function p(e,t){d?(function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let i=0;for(let e=0;e<t.length;e++){const o=g(1,i+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;s[e]=n[o]+1;const c=o+1;n[c]=e,i=Math.max(c,i)}const o=[],c=[];let l=t.length-1;for(let e=n[i]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);l>=e;l--)c.push(t[l]);l--}for(;l>=0;l--)c.push(t[l]);o.reverse(),c.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<c.length;t++){for(;n<o.length&&c[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(c[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function h(e,t,n){d&&!n?p(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function f(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function $(){return v(" ")}function y(){return v("")}function b(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function k(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _(e,t){e.value=null==t?"":t}function x(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function C(e,t,n){e.classList[n?"add":"remove"](t)}function M(e){u=e}function A(){if(!u)throw new Error("Function called outside component initialization");return u}function N(){const e=A();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const i=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);s.slice().forEach((t=>{t.call(e,i)}))}}}function T(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}new Set;const U=[],S=[],P=[],R=[],E=Promise.resolve();let L=!1;function I(e){P.push(e)}let j=!1;const H=new Set;function D(){if(!j){j=!0;do{for(let e=0;e<U.length;e+=1){const t=U[e];M(t),q(t.$$)}for(M(null),U.length=0;S.length;)S.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];H.has(t)||(H.add(t),t())}P.length=0}while(U.length);for(;R.length;)R.pop()();L=!1,j=!1,H.clear()}}function q(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const O=new Set;let z,G;function K(){z={r:0,c:[],p:z}}function B(){z.r||s(z.c),z=z.p}function J(e,t){e&&e.i&&(O.delete(e),e.i(t))}function V(e,t,n,s){if(e&&e.o){if(O.has(e))return;O.add(e),z.c.push((()=>{O.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function F(e,t){const n=t.token={};function s(e,s,i,o){if(t.token!==n)return;t.resolved=o;let c=t.ctx;void 0!==i&&(c=c.slice(),c[i]=o);const l=e&&(t.current=e)(c);let r=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==s&&e&&(K(),V(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),B())})):t.block.d(1),l.c(),J(l,1),l.m(t.mount(),t.anchor),r=!0),t.block=l,t.blocks&&(t.blocks[s]=l),r&&D()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=A();if(e.then((e=>{M(n),s(t.then,1,t.value,e),M(null)}),(e=>{if(M(n),s(t.catch,2,t.error,e),M(null),!t.hasCatch)throw e})),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}var i}function W(e,t,n){const s=t.slice(),{resolved:i}=e;e.current===e.then&&(s[e.value]=i),e.current===e.catch&&(s[e.error]=i),e.block.p(s,n)}function X(e){e&&e.c()}function Y(e,n,o,c){const{fragment:l,on_mount:r,on_destroy:a,after_update:u}=e.$$;l&&l.m(n,o),c||I((()=>{const n=r.map(t).filter(i);a?a.push(...n):s(n),e.$$.on_mount=[]})),u.forEach(I)}function Z(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,i,o,c,l,r,a=[-1]){const g=u;M(t);const p=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:i.context||[]),callbacks:n(),dirty:a,skip_bound:!1};let h=!1;if(p.ctx=o?o(t,i.props||{},((e,n,...s)=>{const i=s.length?s[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=i)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](i),h&&function(e,t){-1===e.$$.dirty[0]&&(U.push(e),L||(L=!0,E.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),i.target){if(i.hydrate){d=!0;const e=(m=i.target,Array.from(m.childNodes));p.fragment&&p.fragment.l(e),e.forEach(f)}else p.fragment&&p.fragment.c();i.intro&&J(t.$$.fragment),Y(t,i.target,i.anchor,i.customElement),d=!1,D()}var m;M(g)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(G=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(i);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!c(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class ee{$destroy(){Z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!c(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class te{constructor(e){this.kosyClient=window.parent,this.latestMessageNumber=0,this.kosyApp=e}dictionaryToArray(e){let t=[];for(const n in e)e.hasOwnProperty(n)&&t.push([n,e[n]]);return t}startApp(){return this.initialInfoPromise=new Promise(((e,t)=>{window.addEventListener("message",(t=>{let n=t.data;switch(n.type){case"receive-initial-info":this.latestMessageNumber=n.latestMessageNumber,this.clients=n.payload.clients,this.hostClientUuid=n.payload.initializerClientUuid,this.log("Resolving initial info promise with: ",n.payload),e(n.payload);break;case"set-client-info":{let e=n.clients,t=n.hostClientUuid;this.initialInfoPromise.then((n=>{let s=this.dictionaryToArray(e).filter((e=>!this.clients[e[0]])),i=this.dictionaryToArray(this.clients).filter((t=>!e[t[0]])),o=this.latestMessageNumber;this.hostClientUuid!==t&&this._relayMessageToClients(n,{type:"_host-has-changed",clientUuid:t},++o),s.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-joined",clientInfo:e[1]},++o))),i.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-left",clientUuid:e[0]},++o))),this.clients=e,this.hostClientUuid=t}));break}case"get-app-state":{let e=n.clientUuids;this.log("Get app state received -> sending app state");const t=this.kosyApp.onRequestState();this._sendMessageToKosy({type:"receive-app-state",state:t,clientUuids:e,latestMessageNumber:this.latestMessageNumber});break}case"set-app-state":this.latestMessageNumber=n.latestMessageNumber;let t=n.state;this.initialInfoPromise.then((()=>{this.log("Received app state from Kosy -> setting app state"),this.kosyApp.onProvideState(t)}));break;case"receive-message-as-host":this._handleReceiveMessageAsHost(n);break;case"receive-message-as-client":this._handleReceiveMessageAsClient(n)}})),this._sendMessageToKosy({type:"ready-and-listening"})})),this.initialInfoPromise}stopApp(){this._sendMessageToKosy({type:"stop-app"})}relayMessage(e){this.log("Relaying client message to host: ",e),this._sendMessageToKosy({type:"relay-message-to-host",message:e})}_relayMessageToClients(e,t,n){this.log("Relaying host to client message: ",t),this._sendMessageToKosy({type:"relay-message-to-clients",sentByClientUuid:e.currentClientUuid,message:t,messageNumber:n})}_sendMessageToKosy(e){this.kosyClient.postMessage(e,"*")}_handleReceiveMessageAsClientRecursive(e,t,n){var s,i,o,c,l,r;if(this.latestMessageNumber===e.messageNumber-1){switch(e.message.type){case"_host-has-changed":{let t=e.message.clientUuid;this.hostClientUuid=t,null===(i=(s=this.kosyApp).onHostHasChanged)||void 0===i||i.call(s,t);break}case"_client-has-joined":{let t=e.message.clientInfo;this.clients[t.clientUuid]=t,null===(c=(o=this.kosyApp).onClientHasJoined)||void 0===c||c.call(o,t);break}case"_client-has-left":{let t=e.message.clientUuid;this.clients[t]=null,null===(r=(l=this.kosyApp).onClientHasLeft)||void 0===r||r.call(l,t);break}default:this.kosyApp.onReceiveMessageAsClient(e.message)}this.latestMessageNumber=e.messageNumber}else n<50&&this.latestMessageNumber<e.messageNumber?setTimeout((()=>this._handleReceiveMessageAsClientRecursive(e,t,n+1)),100):(this.log("Timeout on processing message as client: ",e.message),this.log("Wait for Kosy to fix this mess..."))}_handleReceiveMessageAsClient(e){this.initialInfoPromise.then((t=>{this.log("Received message as client, processing: ",e.message),this._handleReceiveMessageAsClientRecursive(e,t,0)}))}_handleReceiveMessageAsHost(e){this.initialInfoPromise.then((t=>{this.log("Trying to handle message as host");const n=this.kosyApp.onReceiveMessageAsHost(e.message);n&&this._relayMessageToClients(t,n,this.latestMessageNumber+1)}))}log(...e){"1"===localStorage.getItem("debug-mode")&&console.log("From kosy-app-api: ",...e)}}const ne=new RegExp("^(https://\\w+.google.com)"),se=new RegExp("^(https://(drive|docs).google.com)","i"),ie=new RegExp("/d/([-\\w]{25,})"),oe="https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly",ce=new Date("1970-01-01T00:00:00Z").getTime();function le(e){let t=new URL(e.replace("/preview","/edit"));return t.searchParams.append("userstoinvite","@"),t.toString()}async function re(e){let t=ae(e);await pe("client");let n=await ue();gapi.client.setApiKey("AIzaSyDFUoIEXWGk0NPtqPjCadqnEpcgxydw9ko"),gapi.client.setToken({access_token:n.access_token});try{let n=await gapi.client.request({path:`https://www.googleapis.com/drive/v3/files/${t}?fields=webViewLink`}),s=JSON.parse((null==n?void 0:n.body)||"{}").webViewLink;if(s){if(se.test(s))return Promise.resolve(e.replace("/view","/preview"));{let e=ae(s);return Promise.resolve(`https://drive.google.com/file/d/${e}/preview`)}}return Promise.reject()}catch(e){return Promise.reject()}}function ae(e){let t=e.match(ie);return t&&t.length>1?t[1]:null}async function ue(){let e=JSON.parse(localStorage.getItem("google_access_token")||"{}");return new Date(ce+((null==e?void 0:e.expires_at)||6e5)-6e4)<new Date&&(e=await async function(){return await de((e=>new Promise(((t,n)=>{try{let s=e.currentUser.get();s.hasGrantedScopes(oe)?t(s.getAuthResponse(!0)):e.signIn().then((e=>t(e.getAuthResponse(!0)))).catch((e=>n(e)))}catch(e){n(e)}}))))}(),localStorage.setItem("google_access_token",JSON.stringify(e))),e}async function de(e){return await pe("auth2"),gapi.auth2.init({client_id:"1055348097262-m31jmp68886tmq7hmsa7pgg0fopb9dot.apps.googleusercontent.com",scope:oe}).then((()=>e(gapi.auth2.getAuthInstance())))}async function ge(){return de((e=>e.isSignedIn.get()&&e.currentUser.get().hasGrantedScopes(oe)))}async function pe(e){return new Promise(((t,n)=>gapi.load(e,{callback:()=>t({}),onerror:e=>n(e),timeout:5e3,ontimeout:()=>n()})))}function he(t){let n,s,i,o,c,l,r,a,u,d;return{c(){n=m("div"),s=m("div"),i=m("h3"),i.textContent="You don't have access to this file",o=$(),c=m("p"),l=v(t[0]),r=$(),a=m("div"),u=$(),d=m("div"),d.innerHTML='<img class="access-denied svelte-fl2rw0" src="assets/access-denied.svg" alt="access-denied"/>',w(a,"class","gap"),w(n,"class","center-content")},m(e,t){h(e,n,t),p(n,s),p(s,i),p(s,o),p(s,c),p(c,l),p(n,r),p(n,a),p(n,u),p(n,d)},p(e,[t]){1&t&&k(l,e[0])},i:e,o:e,d(e){e&&f(n)}}}function fe(e,t,n){let{msg:s}=t;return e.$$set=e=>{"msg"in e&&n(0,s=e.msg)},[s]}const me=class extends ee{constructor(e){super(),Q(this,e,fe,he,o,{msg:0})}},ve=[];function $e(t,n=e){let s;const i=[];function c(e){if(o(t,e)&&(t=e,s)){const e=!ve.length;for(let e=0;e<i.length;e+=1){const n=i[e];n[1](),ve.push(n,t)}if(e){for(let e=0;e<ve.length;e+=2)ve[e][0](ve[e+1]);ve.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(o,l=e){const r=[o,l];return i.push(r),1===i.length&&(s=n(c)||e),o(t),()=>{const e=i.indexOf(r);-1!==e&&i.splice(e,1),0===i.length&&(s(),s=null)}}}}function ye(t,n,o){const c=!Array.isArray(t),r=c?[t]:t,a=n.length<2;return{subscribe:$e(o,(t=>{let o=!1;const u=[];let d=0,g=e;const p=()=>{if(d)return;g();const s=n(c?u[0]:u,t);a?t(s):g=i(s)?s:e},h=r.map(((e,t)=>l(e,(e=>{u[t]=e,d&=~(1<<t),o&&p()}),(()=>{d|=1<<t}))));return o=!0,p(),function(){s(h),g()}})).subscribe}}const be=$e(null),we=ye(be,(e=>null==e?void 0:e.clients[e.initializerClientUuid])),ke=ye(be,(e=>null==e?void 0:e.clients[e.currentClientUuid]));function _e(e){let t,n,s,i;const o=[Ce,xe],c=[];function l(e,t){return e[1].clientUuid!==e[2].clientUuid?0:1}return t=l(e),n=c[t]=o[t](e),{c(){n.c(),s=y()},m(e,n){c[t].m(e,n),h(e,s,n),i=!0},p(e,i){let r=t;t=l(e),t===r?c[t].p(e,i):(K(),V(c[r],1,1,(()=>{c[r]=null})),B(),n=c[t],n?n.p(e,i):(n=c[t]=o[t](e),n.c()),J(n,1),n.m(s.parentNode,s))},i(e){i||(J(n),i=!0)},o(e){V(n),i=!1},d(e){c[t].d(e),e&&f(s)}}}function xe(t){let n,s;return n=new me({props:{msg:"This should not occur, but it did, and we're very sorry :("}}),{c(){X(n.$$.fragment)},m(e,t){Y(n,e,t),s=!0},p:e,i(e){s||(J(n.$$.fragment,e),s=!0)},o(e){V(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function Ce(e){let t,n;return t=new me({props:{msg:"Please ask "+e[1].clientName+" to share the file with you."}}),{c(){X(t.$$.fragment)},m(e,s){Y(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.msg="Please ask "+e[1].clientName+" to share the file with you."),t.$set(s)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){V(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function Me(t){let n,s;return{c(){n=m("iframe"),w(n,"title","google drive "),n.src!==(s=t[4])&&w(n,"src",s),w(n,"class","svelte-tbe2c")},m(e,t){h(e,n,t)},p(e,t){1&t&&n.src!==(s=e[4])&&w(n,"src",s)},i:e,o:e,d(e){e&&f(n)}}}function Ae(t){let n;return{c(){n=m("div")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&f(n)}}}function Ne(e){let t,n,s,i={ctx:e,current:null,token:null,hasCatch:!0,pending:Ae,then:Me,catch:_e,value:4,blocks:[,,,]};return F(n=e[0],i),{c(){t=y(),i.block.c()},m(e,n){h(e,t,n),i.block.m(e,i.anchor=n),i.mount=()=>t.parentNode,i.anchor=t,s=!0},p(t,[s]){e=t,i.ctx=e,1&s&&n!==(n=e[0])&&F(n,i)||W(i,e,s)},i(e){s||(J(i.block),s=!0)},o(e){for(let e=0;e<3;e+=1)V(i.blocks[e]);s=!1},d(e){e&&f(t),i.block.d(e),i.token=null,i=null}}}function Te(e,t,n){let s,i,o;r(e,we,(e=>n(1,i=e))),r(e,ke,(e=>n(2,o=e)));let{url:c}=t;return e.$$set=e=>{"url"in e&&n(3,c=e.url)},e.$$.update=()=>{8&e.$$.dirty&&n(0,s=re(c))},[s,i,o,c]}const Ue=class extends ee{constructor(e){super(),Q(this,e,Te,Ne,o,{url:3})}};function Se(e){let t,n,i,o;const c=e[5].default,l=function(e,t,n,s){if(e){const s=a(e,t,n,null);return e[0](s)}}(c,e,e[4]);return{c(){t=m("button"),l&&l.c(),w(t,"class",e[1]),t.disabled=e[0]},m(s,c){h(s,t,c),l&&l.m(t,null),n=!0,i||(o=[b(t,"click",e[6]),b(t,"dblclick",e[7]),b(t,"focus",e[8])],i=!0)},p(e,[s]){l&&l.p&&(!n||16&s)&&function(e,t,n,s,i,o,c){const l=function(e,t,n,s){if(e[2]&&s){const i=e[2](s(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|i[s];return e}return t.dirty|i}return t.dirty}(t,s,i,null);if(l){const i=a(t,n,s,null);e.p(i,l)}}(l,c,e,e[4],n?s:-1),(!n||2&s)&&w(t,"class",e[1]),(!n||1&s)&&(t.disabled=e[0])},i(e){n||(J(l,e),n=!0)},o(e){V(l,e),n=!1},d(e){e&&f(t),l&&l.d(e),i=!1,s(o)}}}function Pe(e,t,n){let{$$slots:s={},$$scope:i}=t,{size:o="regular"}=t,{importance:c}=t,{disabled:l=!1}=t,r="";return e.$$set=e=>{"size"in e&&n(2,o=e.size),"importance"in e&&n(3,c=e.importance),"disabled"in e&&n(0,l=e.disabled),"$$scope"in e&&n(4,i=e.$$scope)},e.$$.update=()=>{if(12&e.$$.dirty){let e=["re-button","size-"+o];c&&e.push("importance-"+c),n(1,r=e.join(" "))}},[l,r,o,c,i,s,function(t){T.call(this,e,t)},function(t){T.call(this,e,t)},function(t){T.call(this,e,t)}]}const Re=class extends ee{constructor(e){super(),Q(this,e,Pe,Se,o,{size:2,importance:3,disabled:0})}};function Ee(e){let t,n,s,i;return{c(){t=m("span"),t.textContent="Share an existing file",n=$(),s=m("img"),w(t,"class","text"),w(s,"class","icon-right"),w(s,"alt","google drive icon"),s.src!==(i="assets/google-drive-icon.svg")&&w(s,"src","assets/google-drive-icon.svg")},m(e,i){h(e,t,i),h(e,n,i),h(e,s,i)},d(e){e&&f(t),e&&f(n),e&&f(s)}}}function Le(e){let t,n,i,o,c,l,r,a,u,d,g,v,y,k,_,x,C,M;return _=new Re({props:{importance:"secondary",$$slots:{default:[Ee]},$$scope:{ctx:e}}}),_.$on("click",e[5]),{c(){t=m("div"),n=m("div"),n.innerHTML='<h3>Create new file</h3> \n        <p class="svelte-vvaqu0">The file will be created on google drive and<br/>\n            will be available to participants</p>',i=$(),o=m("div"),c=$(),l=m("div"),r=m("button"),r.innerHTML='<img alt="google doc" src="assets/google-docs-icon.svg"/> \n            <span>Google Doc</span>',a=$(),u=m("button"),u.innerHTML='<img alt="google sheet" src="assets/google-sheets-icon.svg"/> \n            <span>Google Sheet</span>',d=$(),g=m("button"),g.innerHTML='<img alt="google slide" src="assets/google-slides-icon.svg"/> \n            <span>Google Slide</span>',v=$(),y=m("p"),y.textContent="OR",k=$(),X(_.$$.fragment),w(n,"class","svelte-vvaqu0"),w(o,"class","gap svelte-vvaqu0"),w(r,"class","big-button svelte-vvaqu0"),w(u,"class","big-button svelte-vvaqu0"),w(g,"class","big-button svelte-vvaqu0"),w(l,"class","big-buttons svelte-vvaqu0"),w(y,"class","svelte-vvaqu0"),w(t,"class","center-content creating svelte-vvaqu0")},m(s,f){h(s,t,f),p(t,n),p(t,i),p(t,o),p(t,c),p(t,l),p(l,r),p(l,a),p(l,u),p(l,d),p(l,g),p(t,v),p(t,y),p(t,k),Y(_,t,null),x=!0,C||(M=[b(r,"click",e[2]),b(u,"click",e[3]),b(g,"click",e[4])],C=!0)},p(e,[t]){const n={};1024&t&&(n.$$scope={dirty:t,ctx:e}),_.$set(n)},i(e){x||(J(_.$$.fragment,e),x=!0)},o(e){V(_.$$.fragment,e),x=!1},d(e){e&&f(t),Z(_),C=!1,s(M)}}}function Ie(e,t,n){let s;r(e,ke,(e=>n(6,s=e)));var i=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function c(e){try{r(s.next(e))}catch(e){o(e)}}function l(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}r((s=s.apply(e,t||[])).next())}))};const o=N(),c=e=>i(void 0,void 0,void 0,(function*(){let t=yield async function(e,t){return new Promise((async(n,s)=>{let i=await de((async n=>{let s,i;switch(await pe("client"),await async function(e,t){return new Promise(((e,t)=>{gapi.client.load("drive","v3",(()=>e()))}))}(),e){case"document":s="docx",i="application/vnd.google-apps.document";break;case"sheet":s="xlsx",i="application/vnd.google-apps.spreadsheet";break;case"slide":s="pptx",i="application/vnd.google-apps.presentation";break;default:s="docx",i="application/vnd.google-apps.document"}let o=n.currentUser.get(),c=await gapi.client.drive.files.create({resource:{name:`${t}.${s}`,mimeType:i},fields:"id,webViewLink"});return await gapi.client.drive.permissions.create({fileId:c.result.id,resource:{role:"writer",type:"anyone"},oauth_token:o.getAuthResponse().access_token}),c.result.webViewLink}));return n(i)})).catch((e=>(console.error(e),Promise.reject(e))))}(e,s.clientLocation.table.tableName+"_"+(new Date).toISOString().replace(/\D/g,""));o("created",t)})),l=()=>{o("canceled")};return[c,l,()=>c("document"),()=>c("sheet"),()=>c("slide"),()=>l()]}const je=class extends ee{constructor(e){super(),Q(this,e,Ie,Le,o,{})}};function He(e){let t,n,i,o,c,l,r,a,u,d,g,v,k,x,M,A,N,T,U,S;r=new Re({props:{importance:"primary",disabled:!e[5],$$slots:{default:[qe]},$$scope:{ctx:e}}}),r.$on("click",e[14]),v=new Re({props:{importance:"secondary",$$slots:{default:[Oe]},$$scope:{ctx:e}}}),v.$on("click",e[15]),x=new Re({props:{importance:"secondary",$$slots:{default:[ze]},$$scope:{ctx:e}}}),x.$on("click",e[16]);let P=e[0]&&Ge(e),R=e[1]&&Ke();return{c(){t=m("div"),t.innerHTML='<h3>Embed google drive</h3> \n            <p class="svelte-1o7e8h1">In Google Docs/Drive, click the Share button,<br/>\n                copy the link and paste below</p>',n=$(),i=m("div"),o=$(),c=m("input"),l=$(),X(r.$$.fragment),a=$(),u=m("p"),u.textContent="OR",d=$(),g=m("div"),X(v.$$.fragment),k=$(),X(x.$$.fragment),M=$(),P&&P.c(),A=$(),R&&R.c(),N=y(),w(t,"class","svelte-1o7e8h1"),w(i,"class","gap svelte-1o7e8h1"),w(c,"type","text"),w(c,"placeholder","E.g. https://drive.google.com/..."),w(c,"class","svelte-1o7e8h1"),C(c,"invalid",!e[3]&&!e[5]),C(c,"valid",e[5]),w(u,"class","svelte-1o7e8h1"),w(g,"class","buttons svelte-1o7e8h1")},m(s,f){h(s,t,f),h(s,n,f),h(s,i,f),h(s,o,f),h(s,c,f),_(c,e[2]),h(s,l,f),Y(r,s,f),h(s,a,f),h(s,u,f),h(s,d,f),h(s,g,f),Y(v,g,null),p(g,k),Y(x,g,null),h(s,M,f),P&&P.m(s,f),h(s,A,f),R&&R.m(s,f),h(s,N,f),T=!0,U||(S=[b(c,"input",e[12]),b(c,"input",e[13])],U=!0)},p(e,t){4&t&&c.value!==e[2]&&_(c,e[2]),40&t&&C(c,"invalid",!e[3]&&!e[5]),32&t&&C(c,"valid",e[5]);const n={};32&t&&(n.disabled=!e[5]),524288&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const s={};524288&t&&(s.$$scope={dirty:t,ctx:e}),v.$set(s);const i={};524288&t&&(i.$$scope={dirty:t,ctx:e}),x.$set(i),e[0]?P?P.p(e,t):(P=Ge(e),P.c(),P.m(A.parentNode,A)):P&&(P.d(1),P=null),e[1]?R||(R=Ke(),R.c(),R.m(N.parentNode,N)):R&&(R.d(1),R=null)},i(e){T||(J(r.$$.fragment,e),J(v.$$.fragment,e),J(x.$$.fragment,e),T=!0)},o(e){V(r.$$.fragment,e),V(v.$$.fragment,e),V(x.$$.fragment,e),T=!1},d(e){e&&f(t),e&&f(n),e&&f(i),e&&f(o),e&&f(c),e&&f(l),Z(r,e),e&&f(a),e&&f(u),e&&f(d),e&&f(g),Z(v),Z(x),e&&f(M),P&&P.d(e),e&&f(A),R&&R.d(e),e&&f(N),U=!1,s(S)}}}function De(t){let n,s;return n=new je({}),n.$on("created",t[10]),n.$on("canceled",t[11]),{c(){X(n.$$.fragment)},m(e,t){Y(n,e,t),s=!0},p:e,i(e){s||(J(n.$$.fragment,e),s=!0)},o(e){V(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function qe(e){let t;return{c(){t=m("span"),t.textContent="Open file",w(t,"class","text")},m(e,n){h(e,t,n)},d(e){e&&f(t)}}}function Oe(e){let t,n,s,i;return{c(){t=m("span"),t.textContent="Pick a file",n=$(),s=m("img"),w(t,"class","text"),w(s,"class","icon-right"),w(s,"alt","google drive icon"),s.src!==(i="assets/google-drive-icon.svg")&&w(s,"src","assets/google-drive-icon.svg")},m(e,i){h(e,t,i),h(e,n,i),h(e,s,i)},d(e){e&&f(t),e&&f(n),e&&f(s)}}}function ze(e){let t;return{c(){t=m("span"),t.innerHTML='Create new file <big style="color: black;">+</big>',w(t,"class","text")},m(e,n){h(e,t,n)},d(e){e&&f(t)}}}function Ge(e){let t,n,s,i,o,c;return{c(){t=m("label"),n=v("The file you picked is not a shared file. Please click "),s=m("a"),i=v("here"),c=v(" to enable file sharing."),w(s,"href",o=le(e[2])),w(s,"target","_blank"),w(t,"class","error-label svelte-1o7e8h1"),w(t,"for","open-picker")},m(e,o){h(e,t,o),p(t,n),p(t,s),p(s,i),p(t,c)},p(e,t){4&t&&o!==(o=le(e[2]))&&w(s,"href",o)},d(e){e&&f(t)}}}function Ke(e){let t;return{c(){t=m("label"),t.textContent="The file you tried to share with the table is not available to you.",w(t,"class","error-label svelte-1o7e8h1"),w(t,"for","open-picker")},m(e,n){h(e,t,n)},d(e){e&&f(t)}}}function Be(e){let t,n,s,i;const o=[De,He],c=[];function l(e,t){return e[4]?0:1}return n=l(e),s=c[n]=o[n](e),{c(){t=m("div"),s.c(),w(t,"class","center-content picking svelte-1o7e8h1")},m(e,s){h(e,t,s),c[n].m(t,null),i=!0},p(e,[i]){let r=n;n=l(e),n===r?c[n].p(e,i):(K(),V(c[r],1,1,(()=>{c[r]=null})),B(),s=c[n],s?s.p(e,i):(s=c[n]=o[n](e),s.c()),J(s,1),s.m(t,null))},i(e){i||(J(s),i=!0)},o(e){V(s),i=!1},d(e){e&&f(t),c[n].d()}}}function Je(e,t,n){let s,i,o;const c=N();let l=!1,r=!1,a="",u=!1,d=()=>function(e,t){const n=window.outerWidth/2+window.screenX-t.width/2,s=window.outerHeight/2+window.screenY-t.height/2;window.open("picker.html","_blank",`fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${t.width},height=${t.height},top=${s},left=${n}`)}(0,{width:1024,height:1024}),g=e=>{if(e.data&&e.data.type)switch(e.data.type){case"google-drive-url-picked":e.data.payload.error?(n(0,l=!0),n(2,a=e.data.payload.url)):c("picked",e.data.payload.url)}};var p;window.addEventListener("message",g),p=()=>window.removeEventListener("message",g),A().$$.on_destroy.push(p);let h=()=>{re(a).then((e=>c("picked",e))).catch((()=>{n(1,r=!0)}))},f=e=>{c("picked",e)};return e.$$.update=()=>{var t;4&e.$$.dirty&&n(3,s=""===a),12&e.$$.dirty&&n(9,i=!(s||(t=a,t&&ne.test(t)))),523&e.$$.dirty&&n(5,o=!s&&!(i||l||r))},[l,r,a,s,u,o,d,h,f,i,e=>f(e.detail),()=>n(4,u=!1),function(){a=this.value,n(2,a)},()=>{n(0,l=!1),n(1,r=!1)},()=>h(),()=>d(),()=>n(4,u=!0)]}const Ve=class extends ee{constructor(e){super(),Q(this,e,Je,Be,o,{})}};function Fe(t){let n,s,i,o,c,l,r,a,u,d,g=t[0].clientName+"";return{c(){n=m("div"),s=m("h3"),s.textContent="Google Drive sharing",i=$(),o=m("p"),c=v(g),l=v(" is picking a file to share"),r=$(),a=m("div"),u=$(),d=m("div"),d.innerHTML='<img class="waiting-icon svelte-1x6eg8j" alt="waiting" src="assets/waiting.svg"/>',w(a,"class","gap svelte-1x6eg8j"),w(n,"class","center-content waiting svelte-1x6eg8j")},m(e,t){h(e,n,t),p(n,s),p(n,i),p(n,o),p(o,c),p(o,l),p(n,r),p(n,a),p(n,u),p(n,d)},p(e,[t]){1&t&&g!==(g=e[0].clientName+"")&&k(c,g)},i:e,o:e,d(e){e&&f(n)}}}function We(e,t,n){let s;return r(e,we,(e=>n(0,s=e))),[s]}const Xe=class extends ee{constructor(e){super(),Q(this,e,We,Fe,o,{})}};function Ye(t){let n;return{c(){n=m("p"),n.textContent="Please log in with google"},m(e,t){h(e,n,t)},p:e,d(e){e&&f(n)}}}function Ze(e){let t,n,s,i,o=e[1].clientName+"";return{c(){t=m("p"),n=v("A file has been shared by "),s=v(o),i=v(", please log in with google to view it")},m(e,o){h(e,t,o),p(t,n),p(t,s),p(t,i)},p(e,t){2&t&&o!==(o=e[1].clientName+"")&&k(s,o)},d(e){e&&f(t)}}}function Qe(t){let n;return{c(){n=m("p"),n.textContent="To start sharing a file, please log in with google"},m(e,t){h(e,n,t)},p:e,d(e){e&&f(n)}}}function et(e){let t,n,s,i;return{c(){t=m("span"),t.textContent="Log in with Google",n=$(),s=m("img"),w(t,"class","text"),w(s,"class","icon-right"),w(s,"alt","google-icon"),s.src!==(i="assets/google-icon.svg")&&w(s,"src","assets/google-icon.svg")},m(e,i){h(e,t,i),h(e,n,i),h(e,s,i)},d(e){e&&f(t),e&&f(n),e&&f(s)}}}function tt(e){let t,n,s,i,o,c;function l(e,t){return e[1].clientUuid==e[2].clientUuid?Qe:e[0]?Ze:Ye}let r=l(e),a=r(e);return o=new Re({props:{importance:"secondary",$$slots:{default:[et]},$$scope:{ctx:e}}}),o.$on("click",e[4]),{c(){t=m("div"),n=m("h3"),n.textContent="Google Drive sharing",s=$(),a.c(),i=$(),X(o.$$.fragment),w(t,"class","center-content waiting")},m(e,l){h(e,t,l),p(t,n),p(t,s),a.m(t,null),p(t,i),Y(o,t,null),c=!0},p(e,[n]){r===(r=l(e))&&a?a.p(e,n):(a.d(1),a=r(e),a&&(a.c(),a.m(t,i)));const s={};128&n&&(s.$$scope={dirty:n,ctx:e}),o.$set(s)},i(e){c||(J(o.$$.fragment,e),c=!0)},o(e){V(o.$$.fragment,e),c=!1},d(e){e&&f(t),a.d(),Z(o)}}}function nt(e,t,n){let s,i;r(e,we,(e=>n(1,s=e))),r(e,ke,(e=>n(2,i=e)));var o=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function c(e){try{r(s.next(e))}catch(e){o(e)}}function l(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}r((s=s.apply(e,t||[])).next())}))};let{url:c}=t;const l=N();let a=()=>o(void 0,void 0,void 0,(function*(){yield ue(),(yield ge())||(localStorage.removeItem("google_access_token"),yield ue()),l("signed-in")}));return e.$$set=e=>{"url"in e&&n(0,c=e.url)},[c,s,i,a,()=>a()]}const st=class extends ee{constructor(e){super(),Q(this,e,nt,tt,o,{url:0})}};function it(t){let n,s,i,o,c,l,r,a,u=JSON.stringify(t[18])+"";return{c(){n=m("link"),s=$(),i=m("div"),o=m("h2"),o.innerHTML='<i class="fas fa-exclamation-circle"></i> Oops',c=$(),l=m("span"),r=v("An error has occured while initializing the google drive app: "),a=v(u),w(n,"rel","stylesheet"),w(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),x(o,"color","red"),x(l,"color","red"),w(i,"class","center-content")},m(e,t){h(e,n,t),h(e,s,t),h(e,i,t),p(i,o),p(i,c),p(i,l),p(l,r),p(l,a)},p:e,i:e,o:e,d(e){e&&f(n),e&&f(s),e&&f(i)}}}function ot(e){let t,n,s,i;const o=[at,rt,lt,ct],c=[];function l(e,t){return e[1]?"viewing"===e[2]?1:"picking"===e[2]?2:"waiting"===e[2]?3:-1:0}return~(t=l(e))&&(n=c[t]=o[t](e)),{c(){n&&n.c(),s=y()},m(e,n){~t&&c[t].m(e,n),h(e,s,n),i=!0},p(e,i){let r=t;t=l(e),t===r?~t&&c[t].p(e,i):(n&&(K(),V(c[r],1,1,(()=>{c[r]=null})),B()),~t?(n=c[t],n?n.p(e,i):(n=c[t]=o[t](e),n.c()),J(n,1),n.m(s.parentNode,s)):n=null)},i(e){i||(J(n),i=!0)},o(e){V(n),i=!1},d(e){~t&&c[t].d(e),e&&f(s)}}}function ct(t){let n,s;return n=new Xe({}),{c(){X(n.$$.fragment)},m(e,t){Y(n,e,t),s=!0},p:e,i(e){s||(J(n.$$.fragment,e),s=!0)},o(e){V(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function lt(t){let n,s;return n=new Ve({}),n.$on("picked",t[8]),{c(){X(n.$$.fragment)},m(e,t){Y(n,e,t),s=!0},p:e,i(e){s||(J(n.$$.fragment,e),s=!0)},o(e){V(n.$$.fragment,e),s=!1},d(e){Z(n,e)}}}function rt(e){let t,n;return t=new Ue({props:{url:e[0].googleDriveUrl}}),{c(){X(t.$$.fragment)},m(e,s){Y(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.url=e[0].googleDriveUrl),t.$set(s)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){V(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function at(e){let t,n;return t=new st({props:{url:e[0].googleDriveUrl}}),t.$on("signed-in",e[7]),{c(){X(t.$$.fragment)},m(e,s){Y(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.url=e[0].googleDriveUrl),t.$set(s)},i(e){n||(J(t.$$.fragment,e),n=!0)},o(e){V(t.$$.fragment,e),n=!1},d(e){Z(t,e)}}}function ut(t){let n,s,i={ctx:t,current:null,token:null,hasCatch:!1,pending:pt,then:gt,catch:dt};return F(s=t[3],i),{c(){n=y(),i.block.c()},m(e,t){h(e,n,t),i.block.m(e,i.anchor=t),i.mount=()=>n.parentNode,i.anchor=n},p(e,n){t=e},i:e,o:e,d(e){e&&f(n),i.block.d(e),i.token=null,i=null}}}function dt(t){return{c:e,m:e,d:e}}function gt(e){let t,n,s;return{c(){t=m("link"),n=$(),s=m("div"),s.innerHTML='<span><i class="fa fa-circle-notch fa-spin"></i> Loading google drive app</span>',w(t,"rel","stylesheet"),w(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),w(s,"class","center-content")},m(e,i){h(e,t,i),h(e,n,i),h(e,s,i)},d(e){e&&f(t),e&&f(n),e&&f(s)}}}function pt(e){let t;return{c(){t=m("div")},m(e,n){h(e,t,n)},d(e){e&&f(t)}}}function ht(e){let t,n,s,i={ctx:e,current:null,token:null,hasCatch:!0,pending:ut,then:ot,catch:it,error:18,blocks:[,,,]};return F(n=e[4],i),{c(){t=y(),i.block.c()},m(e,n){h(e,t,n),i.block.m(e,i.anchor=n),i.mount=()=>t.parentNode,i.anchor=t,s=!0},p(t,[n]){W(i,e=t,n)},i(e){s||(J(i.block),s=!0)},o(e){for(let e=0;e<3;e+=1)V(i.blocks[e]);s=!1},d(e){e&&f(t),i.block.d(e),i.token=null,i=null}}}function ft(e,t,n){let s,i;r(e,we,(e=>n(9,s=e))),r(e,ke,(e=>n(10,i=e)));var o=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,o){function c(e){try{r(s.next(e))}catch(e){o(e)}}function l(e){try{r(s.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,l)}r((s=s.apply(e,t||[])).next())}))};let c,l={googleDriveUrl:null},a=!1,u=new te({onClientHasLeft:e=>function(e){e!==s.clientUuid||l.googleDriveUrl||u.stopApp()}(e),onReceiveMessageAsHost:e=>e,onReceiveMessageAsClient:e=>{!function(e){switch(e.type){case"receive-google-drive-url":f("Received a message from Kosy: ",e),n(0,l=Object.assign(Object.assign({},l),{googleDriveUrl:e.payload})),n(2,c="viewing")}}(e)},onRequestState:()=>l,onProvideState:e=>n(0,l=e)}),d=new Promise(((e,t)=>{setTimeout((()=>{e()}),3e3)})),g=u.startApp().then((e=>o(void 0,void 0,void 0,(function*(){var t,s;n(1,a=yield ge()),be.set(e),e.currentClientUuid==e.initializerClientUuid?n(2,c="picking"):(null===(t=e.currentAppState)||void 0===t?void 0:t.googleDriveUrl)?n(2,c="viewing"):n(2,c="waiting"),n(0,l=null!==(s=e.currentAppState)&&void 0!==s?s:l)})))),p=e=>{f("Relaying message: drive url picked",e),u.relayMessage({type:"receive-google-drive-url",payload:e})},h=()=>o(void 0,void 0,void 0,(function*(){f("Signed in with google -> refreshing views if necessary"),n(1,a=yield ge())}));function f(...e){var t;console.log(`${null!==(t=null==i?void 0:i.clientName)&&void 0!==t?t:"New user"} logged: `,...e)}return[l,a,c,d,g,p,h,()=>h(),e=>p(e.detail)]}new class extends ee{constructor(e){super(),Q(this,e,ft,ht,o,{})}}({target:document.getElementById("container"),props:{}})})()})();