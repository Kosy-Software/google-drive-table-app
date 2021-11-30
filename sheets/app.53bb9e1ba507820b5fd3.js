(()=>{"use strict";(()=>{function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let l;function c(e,t){return l||(l=document.createElement("a")),l.href=t,e===l.href}function r(e){return 0===Object.keys(e).length}function a(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function u(e,t,n){e.$$.on_destroy.push(a(t,n))}function d(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}new Set;let g,p=!1;function h(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function y(){return v(" ")}function w(){return v("")}function b(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function x(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function _(e,t){e.value=null==t?"":t}function C(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function M(e,t,n){e.classList[n?"add":"remove"](t)}function A(e){g=e}function N(){if(!g)throw new Error("Function called outside component initialization");return g}function j(){const e=N();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const i=function(e,t,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,!1,t),s}(t,n);s.slice().forEach((t=>{t.call(e,i)}))}}}function T(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}new Set;const U=[],S=[],P=[],E=[],R=Promise.resolve();let L=!1;function I(e){P.push(e)}let H=!1;const D=new Set;function z(){if(!H){H=!0;do{for(let e=0;e<U.length;e+=1){const t=U[e];A(t),O(t.$$)}for(A(null),U.length=0;S.length;)S.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];D.has(t)||(D.add(t),t())}P.length=0}while(U.length);for(;E.length;)E.pop()();L=!1,H=!1,D.clear()}}function O(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(I)}}const G=new Set;let K,q;function J(){K={r:0,c:[],p:K}}function F(){K.r||s(K.c),K=K.p}function V(e,t){e&&e.i&&(G.delete(e),e.i(t))}function Y(e,t,n,s){if(e&&e.o){if(G.has(e))return;G.add(e),K.c.push((()=>{G.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function B(e,t){const n=t.token={};function s(e,s,i,o){if(t.token!==n)return;t.resolved=o;let l=t.ctx;void 0!==i&&(l=l.slice(),l[i]=o);const c=e&&(t.current=e)(l);let r=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==s&&e&&(J(),Y(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),F())})):t.block.d(1),c.c(),V(c,1),c.m(t.mount(),t.anchor),r=!0),t.block=c,t.blocks&&(t.blocks[s]=c),r&&z()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=N();if(e.then((e=>{A(n),s(t.then,1,t.value,e),A(null)}),(e=>{if(A(n),s(t.catch,2,t.error,e),A(null),!t.hasCatch)throw e})),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}var i}function W(e,t,n){const s=t.slice(),{resolved:i}=e;e.current===e.then&&(s[e.value]=i),e.current===e.catch&&(s[e.error]=i),e.block.p(s,n)}function X(e){e&&e.c()}function Z(e,n,o,l){const{fragment:c,on_mount:r,on_destroy:a,after_update:u}=e.$$;c&&c.m(n,o),l||I((()=>{const n=r.map(t).filter(i);a?a.push(...n):s(n),e.$$.on_mount=[]})),u.forEach(I)}function Q(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(t,i,o,l,c,r,a,u=[-1]){const d=g;A(t);const h=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:i.target||d.$$.root};a&&a(h.root);let f=!1;if(h.ctx=o?o(t,i.props||{},((e,n,...s)=>{const i=s.length?s[0]:n;return h.ctx&&c(h.ctx[e],h.ctx[e]=i)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](i),f&&function(e,t){-1===e.$$.dirty[0]&&(U.push(e),L||(L=!0,R.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],h.update(),f=!0,s(h.before_update),h.fragment=!!l&&l(h.ctx),i.target){if(i.hydrate){p=!0;const e=($=i.target,Array.from($.childNodes));h.fragment&&h.fragment.l(e),e.forEach(m)}else h.fragment&&h.fragment.c();i.intro&&V(t.$$.fragment),Z(t,i.target,i.anchor,i.customElement),p=!1,z()}var $;A(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(i);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){Q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class te{$destroy(){Q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class ne{constructor(e){this.kosyClient=window.parent,this.latestMessageNumber=0,this.kosyApp=e}dictionaryToArray(e){let t=[];for(const n in e)e.hasOwnProperty(n)&&t.push([n,e[n]]);return t}startApp(){return this.initialInfoPromise=new Promise(((e,t)=>{window.addEventListener("message",(t=>{let n=t.data;switch(n.type){case"receive-initial-info":this.latestMessageNumber=n.latestMessageNumber,this.clients=n.payload.clients,this.hostClientUuid=n.payload.initializerClientUuid,this.log("Resolving initial info promise with: ",n.payload),e(n.payload);break;case"set-client-info":{let e=n.clients,t=n.hostClientUuid;this.initialInfoPromise.then((n=>{let s=this.dictionaryToArray(e).filter((e=>!this.clients[e[0]])),i=this.dictionaryToArray(this.clients).filter((t=>!e[t[0]])),o=this.latestMessageNumber;this.hostClientUuid!==t&&this._relayMessageToClients(n,{type:"_host-has-changed",clientUuid:t},++o),s.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-joined",clientInfo:e[1]},++o))),i.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-left",clientUuid:e[0]},++o))),this.clients=e,this.hostClientUuid=t}));break}case"get-app-state":{let e=n.clientUuids;this.log("Get app state received -> sending app state");const t=this.kosyApp.onRequestState();this._sendMessageToKosy({type:"receive-app-state",state:t,clientUuids:e,latestMessageNumber:this.latestMessageNumber});break}case"set-app-state":this.latestMessageNumber=n.latestMessageNumber;let t=n.state;this.initialInfoPromise.then((()=>{this.log("Received app state from Kosy -> setting app state"),this.kosyApp.onProvideState(t)}));break;case"receive-message-as-host":this._handleReceiveMessageAsHost(n);break;case"receive-message-as-client":this._handleReceiveMessageAsClient(n)}})),this._sendMessageToKosy({type:"ready-and-listening"})})),this.initialInfoPromise}stopApp(){this._sendMessageToKosy({type:"stop-app"})}relayMessage(e){this.log("Relaying client message to host: ",e),this._sendMessageToKosy({type:"relay-message-to-host",message:e})}_relayMessageToClients(e,t,n){this.log("Relaying host to client message: ",t),this._sendMessageToKosy({type:"relay-message-to-clients",sentByClientUuid:e.currentClientUuid,message:t,messageNumber:n})}_sendMessageToKosy(e){this.kosyClient.postMessage(e,"*")}_handleReceiveMessageAsClientRecursive(e,t,n){var s,i,o,l,c,r;if(this.latestMessageNumber===e.messageNumber-1){switch(e.message.type){case"_host-has-changed":{let t=e.message.clientUuid;this.hostClientUuid=t,null===(i=(s=this.kosyApp).onHostHasChanged)||void 0===i||i.call(s,t);break}case"_client-has-joined":{let t=e.message.clientInfo;this.clients[t.clientUuid]=t,null===(l=(o=this.kosyApp).onClientHasJoined)||void 0===l||l.call(o,t);break}case"_client-has-left":{let t=e.message.clientUuid;this.clients[t]=null,null===(r=(c=this.kosyApp).onClientHasLeft)||void 0===r||r.call(c,t);break}default:this.kosyApp.onReceiveMessageAsClient(e.message)}this.latestMessageNumber=e.messageNumber}else n<50&&this.latestMessageNumber<e.messageNumber?setTimeout((()=>this._handleReceiveMessageAsClientRecursive(e,t,n+1)),100):(this.log("Timeout on processing message as client: ",e.message),this.log("Wait for Kosy to fix this mess..."))}_handleReceiveMessageAsClient(e){this.initialInfoPromise.then((t=>{this.log("Received message as client, processing: ",e.message),this._handleReceiveMessageAsClientRecursive(e,t,0)}))}_handleReceiveMessageAsHost(e){this.initialInfoPromise.then((t=>{this.log("Trying to handle message as host");const n=this.kosyApp.onReceiveMessageAsHost(e.message);n&&this._relayMessageToClients(t,n,this.latestMessageNumber+1)}))}log(...e){"1"===localStorage.getItem("debug-mode")&&console.log("From kosy-app-api: ",...e)}}const se=new RegExp("^(https://\\w+.google.com)"),ie=new RegExp("^(https://(drive|docs).google.com)","i"),oe=new RegExp("/d/([-\\w]{25,})"),le="https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly",ce=new Date("1970-01-01T00:00:00Z").getTime();function re(e){let t=new URL(e.replace("/preview","/edit"));return t.searchParams.append("userstoinvite","@"),t.toString()}async function ae(e){let t=ue(e);await he("client");let n=await de();gapi.client.setApiKey("AIzaSyDFUoIEXWGk0NPtqPjCadqnEpcgxydw9ko"),gapi.client.setToken({access_token:n.access_token});try{let n=await gapi.client.request({path:`https://www.googleapis.com/drive/v3/files/${t}?fields=webViewLink`}),s=JSON.parse((null==n?void 0:n.body)||"{}").webViewLink;if(s){if(ie.test(s))return Promise.resolve(e.replace("/view","/preview"));{let e=ue(s);return Promise.resolve(`https://drive.google.com/file/d/${e}/preview`)}}return Promise.reject()}catch(e){return Promise.reject()}}function ue(e){let t=e.match(oe);return t&&t.length>1?t[1]:null}async function de(){let e=JSON.parse(localStorage.getItem("google_access_token")||"{}");return new Date(ce+((null==e?void 0:e.expires_at)||6e5)-6e4)<new Date&&(e=await async function(){return await ge((e=>new Promise(((t,n)=>{try{let s=e.currentUser.get();s.hasGrantedScopes(le)?t(s.getAuthResponse(!0)):e.signIn().then((e=>t(e.getAuthResponse(!0)))).catch((e=>n(e)))}catch(e){n(e)}}))))}(),localStorage.setItem("google_access_token",JSON.stringify(e))),e}async function ge(e){return await he("auth2"),gapi.auth2.init({client_id:"1055348097262-m31jmp68886tmq7hmsa7pgg0fopb9dot.apps.googleusercontent.com",scope:le}).then((()=>e(gapi.auth2.getAuthInstance())))}async function pe(){return ge((e=>e.isSignedIn.get()&&e.currentUser.get().hasGrantedScopes(le)))}async function he(e){return new Promise(((t,n)=>gapi.load(e,{callback:()=>t({}),onerror:e=>n(e),timeout:5e3,ontimeout:()=>n()})))}function fe(t){let n,s,i,o,l,c,r,a;return{c(){n=$("div"),s=$("div"),i=$("h3"),i.textContent="You don't have access to this file",o=y(),l=$("p"),c=v(t[0]),r=y(),a=$("div"),a.innerHTML='<img class="access-denied svelte-fl2rw0" src="assets/access-denied.svg" alt="access-denied"/>',k(n,"class","center-content")},m(e,t){f(e,n,t),h(n,s),h(s,i),h(s,o),h(s,l),h(l,c),h(n,r),h(n,a)},p(e,[t]){1&t&&x(c,e[0])},i:e,o:e,d(e){e&&m(n)}}}function me(e,t,n){let{msg:s}=t;return e.$$set=e=>{"msg"in e&&n(0,s=e.msg)},[s]}const $e=class extends te{constructor(e){super(),ee(this,e,me,fe,o,{msg:0})}},ve=[];function ye(t,n=e){let s;const i=new Set;function l(e){if(o(t,e)&&(t=e,s)){const e=!ve.length;for(const e of i)e[1](),ve.push(e,t);if(e){for(let e=0;e<ve.length;e+=2)ve[e][0](ve[e+1]);ve.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(o,c=e){const r=[o,c];return i.add(r),1===i.size&&(s=n(l)||e),o(t),()=>{i.delete(r),0===i.size&&(s(),s=null)}}}}function we(t,n,o){const l=!Array.isArray(t),c=l?[t]:t,r=n.length<2;return{subscribe:ye(o,(t=>{let o=!1;const u=[];let d=0,g=e;const p=()=>{if(d)return;g();const s=n(l?u[0]:u,t);r?t(s):g=i(s)?s:e},h=c.map(((e,t)=>a(e,(e=>{u[t]=e,d&=~(1<<t),o&&p()}),(()=>{d|=1<<t}))));return o=!0,p(),function(){s(h),g()}})).subscribe}}const be=ye(null),ke=we(be,(e=>null==e?void 0:e.clients[e.initializerClientUuid])),xe=we(be,(e=>null==e?void 0:e.clients[e.currentClientUuid]));function _e(e){let t,n,s,i;const o=[Me,Ce],l=[];function c(e,t){return e[1].clientUuid!==e[2].clientUuid?0:1}return t=c(e),n=l[t]=o[t](e),{c(){n.c(),s=w()},m(e,n){l[t].m(e,n),f(e,s,n),i=!0},p(e,i){let r=t;t=c(e),t===r?l[t].p(e,i):(J(),Y(l[r],1,1,(()=>{l[r]=null})),F(),n=l[t],n?n.p(e,i):(n=l[t]=o[t](e),n.c()),V(n,1),n.m(s.parentNode,s))},i(e){i||(V(n),i=!0)},o(e){Y(n),i=!1},d(e){l[t].d(e),e&&m(s)}}}function Ce(t){let n,s;return n=new $e({props:{msg:"This should not occur, but it did, and we're very sorry :("}}),{c(){X(n.$$.fragment)},m(e,t){Z(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){Y(n.$$.fragment,e),s=!1},d(e){Q(n,e)}}}function Me(e){let t,n;return t=new $e({props:{msg:"Please ask "+e[1].clientName+" to share the file with you."}}),{c(){X(t.$$.fragment)},m(e,s){Z(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.msg="Please ask "+e[1].clientName+" to share the file with you."),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function Ae(t){let n,s;return{c(){n=$("iframe"),k(n,"title","google drive "),c(n.src,s=t[4])||k(n,"src",s),k(n,"class","svelte-tbe2c")},m(e,t){f(e,n,t)},p(e,t){1&t&&!c(n.src,s=e[4])&&k(n,"src",s)},i:e,o:e,d(e){e&&m(n)}}}function Ne(t){let n;return{c(){n=$("div")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function je(e){let t,n,s,i={ctx:e,current:null,token:null,hasCatch:!0,pending:Ne,then:Ae,catch:_e,value:4,blocks:[,,,]};return B(n=e[0],i),{c(){t=w(),i.block.c()},m(e,n){f(e,t,n),i.block.m(e,i.anchor=n),i.mount=()=>t.parentNode,i.anchor=t,s=!0},p(t,[s]){e=t,i.ctx=e,1&s&&n!==(n=e[0])&&B(n,i)||W(i,e,s)},i(e){s||(V(i.block),s=!0)},o(e){for(let e=0;e<3;e+=1)Y(i.blocks[e]);s=!1},d(e){e&&m(t),i.block.d(e),i.token=null,i=null}}}function Te(e,t,n){let s,i,o;u(e,ke,(e=>n(1,i=e))),u(e,xe,(e=>n(2,o=e)));let{url:l}=t;return e.$$set=e=>{"url"in e&&n(3,l=e.url)},e.$$.update=()=>{8&e.$$.dirty&&n(0,s=ae(l))},[s,i,o,l]}const Ue=class extends te{constructor(e){super(),ee(this,e,Te,je,o,{url:3})}};function Se(e){let t,n,i,o;const l=e[5].default,c=function(e,t,n,s){if(e){const s=d(e,t,n,null);return e[0](s)}}(l,e,e[4]);return{c(){t=$("button"),c&&c.c(),k(t,"class",e[1]),t.disabled=e[0]},m(s,l){f(s,t,l),c&&c.m(t,null),n=!0,i||(o=[b(t,"click",e[6]),b(t,"dblclick",e[7]),b(t,"focus",e[8])],i=!0)},p(e,[s]){c&&c.p&&(!n||16&s)&&function(e,t,n,s,i,o){if(i){const l=d(t,n,s,o);e.p(l,i)}}(c,l,e,e[4],n?function(e,t,n,s){if(e[2]&&s){const i=e[2](s(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|i[s];return e}return t.dirty|i}return t.dirty}(l,e[4],s,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[4]),null),(!n||2&s)&&k(t,"class",e[1]),(!n||1&s)&&(t.disabled=e[0])},i(e){n||(V(c,e),n=!0)},o(e){Y(c,e),n=!1},d(e){e&&m(t),c&&c.d(e),i=!1,s(o)}}}function Pe(e,t,n){let{$$slots:s={},$$scope:i}=t,{size:o="regular"}=t,{importance:l}=t,{disabled:c=!1}=t,r="";return e.$$set=e=>{"size"in e&&n(2,o=e.size),"importance"in e&&n(3,l=e.importance),"disabled"in e&&n(0,c=e.disabled),"$$scope"in e&&n(4,i=e.$$scope)},e.$$.update=()=>{if(12&e.$$.dirty){let e=["re-button","size-"+o];l&&e.push("importance-"+l),n(1,r=e.join(" "))}},[c,r,o,l,i,s,function(t){T.call(this,e,t)},function(t){T.call(this,e,t)},function(t){T.call(this,e,t)}]}const Ee=class extends te{constructor(e){super(),ee(this,e,Pe,Se,o,{size:2,importance:3,disabled:0})}};function Re(e){let t,n,i,o,l,c,r,a,u,d,g,p,w,C,A,N,j,T,U,S,P,E,R,L,I,H,D,z;r=new Ee({props:{importance:"secondary",$$slots:{default:[Ie]},$$scope:{ctx:e}}}),r.$on("click",e[12]),u=new Ee({props:{importance:"secondary",$$slots:{default:[He]},$$scope:{ctx:e}}}),u.$on("click",e[13]);let O=e[0]&&De(e),G=e[1]&&ze();return{c(){t=$("div"),n=$("h3"),i=v("Embed Google "),o=v(e[5]),l=y(),c=$("div"),X(r.$$.fragment),a=y(),X(u.$$.fragment),d=y(),g=$("p"),g.textContent="OR",p=y(),w=$("div"),C=$("div"),A=$("input"),N=y(),j=$("small"),j.textContent="Go to Google Docs, click the Share button, copy the link and paste it here",T=y(),U=$("div"),S=y(),P=$("button"),E=$("span"),E.textContent="Open file",L=y(),O&&O.c(),I=y(),G&&G.c(),k(t,"class","svelte-11j5ktl"),k(c,"class","buttons svelte-11j5ktl"),k(g,"class","svelte-11j5ktl"),k(A,"name","shared-link"),k(A,"type","text"),k(A,"placeholder","E.g. https://docs.google.com/..."),k(A,"class","svelte-11j5ktl"),M(A,"invalid",!e[3]&&!e[7]),M(A,"valid",e[7]),k(C,"class","svelte-11j5ktl"),k(j,"class","svelte-11j5ktl"),k(U,"class","large-gap svelte-11j5ktl"),k(E,"class","text"),k(P,"class","re-button size-regular full-width importance-primary svelte-11j5ktl"),P.disabled=R=!e[7],k(w,"class","svelte-11j5ktl")},m(s,m){f(s,t,m),h(t,n),h(n,i),h(n,o),f(s,l,m),f(s,c,m),Z(r,c,null),h(c,a),Z(u,c,null),f(s,d,m),f(s,g,m),f(s,p,m),f(s,w,m),h(w,C),h(C,A),_(A,e[2]),h(w,N),h(w,j),h(w,T),h(w,U),h(w,S),h(w,P),h(P,E),h(w,L),O&&O.m(w,null),h(w,I),G&&G.m(w,null),H=!0,D||(z=[b(A,"input",e[14]),b(A,"input",e[15]),b(P,"click",e[16])],D=!0)},p(e,t){(!H||32&t)&&x(o,e[5]);const n={};8388672&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const s={};8388608&t&&(s.$$scope={dirty:t,ctx:e}),u.$set(s),4&t&&A.value!==e[2]&&_(A,e[2]),136&t&&M(A,"invalid",!e[3]&&!e[7]),128&t&&M(A,"valid",e[7]),(!H||128&t&&R!==(R=!e[7]))&&(P.disabled=R),e[0]?O?O.p(e,t):(O=De(e),O.c(),O.m(w,I)):O&&(O.d(1),O=null),e[1]?G||(G=ze(),G.c(),G.m(w,null)):G&&(G.d(1),G=null)},i(e){H||(V(r.$$.fragment,e),V(u.$$.fragment,e),H=!0)},o(e){Y(r.$$.fragment,e),Y(u.$$.fragment,e),H=!1},d(e){e&&m(t),e&&m(l),e&&m(c),Q(r),Q(u),e&&m(d),e&&m(g),e&&m(p),e&&m(w),O&&O.d(),G&&G.d(),D=!1,s(z)}}}function Le(t){let n;return{c(){n=$("div"),n.innerHTML='<h3>Your file is being created...</h3> \n            <div class="large-gap svelte-11j5ktl"></div> \n            <div class="svelte-11j5ktl"><img class="creating-icon svelte-11j5ktl" alt="creating" src="assets/creating.gif"/></div>',k(n,"class","svelte-11j5ktl")},m(e,t){f(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Ie(e){let t,n,s,i;return{c(){t=$("img"),s=y(),i=$("span"),i.textContent="Pick a file",k(t,"class","icon-left svelte-11j5ktl"),k(t,"alt","Pick a file icon"),c(t.src,n=e[6])||k(t,"src",n),k(i,"class","text")},m(e,n){f(e,t,n),f(e,s,n),f(e,i,n)},p(e,s){64&s&&!c(t.src,n=e[6])&&k(t,"src",n)},d(e){e&&m(t),e&&m(s),e&&m(i)}}}function He(e){let t,n,s,i;return{c(){t=$("img"),s=y(),i=$("span"),i.textContent="Create new file",k(t,"class","icon-left svelte-11j5ktl"),k(t,"alt","Create new file icon"),c(t.src,n="assets/create-new-file-icon.svg")||k(t,"src","assets/create-new-file-icon.svg"),k(i,"class","text")},m(e,n){f(e,t,n),f(e,s,n),f(e,i,n)},d(e){e&&m(t),e&&m(s),e&&m(i)}}}function De(e){let t,n,s,i,o,l;return{c(){t=$("label"),n=v("The file you picked is not a shared file. Please click "),s=$("a"),i=v("here"),l=v(" to enable file sharing."),k(s,"href",o=re(e[2])),k(s,"target","_blank"),k(t,"class","error-label svelte-11j5ktl"),k(t,"for","open-picker")},m(e,o){f(e,t,o),h(t,n),h(t,s),h(s,i),h(t,l)},p(e,t){4&t&&o!==(o=re(e[2]))&&k(s,"href",o)},d(e){e&&m(t)}}}function ze(e){let t;return{c(){t=$("label"),t.textContent="The file you tried to share with the table is not available to you.",k(t,"class","error-label svelte-11j5ktl"),k(t,"for","open-picker")},m(e,n){f(e,t,n)},d(e){e&&m(t)}}}function Oe(e){let t,n,s,i;const o=[Le,Re],l=[];function c(e,t){return e[4]?0:1}return n=c(e),s=l[n]=o[n](e),{c(){t=$("div"),s.c(),k(t,"class","center-content picking svelte-11j5ktl")},m(e,s){f(e,t,s),l[n].m(t,null),i=!0},p(e,[i]){let r=n;n=c(e),n===r?l[n].p(e,i):(J(),Y(l[r],1,1,(()=>{l[r]=null})),F(),s=l[n],s?s.p(e,i):(s=l[n]=o[n](e),s.c()),V(s,1),s.m(t,null))},i(e){i||(V(s),i=!0)},o(e){Y(s),i=!1},d(e){e&&m(t),l[n].d()}}}function Ge(e,t,n){let s,i,o,l;u(e,be,(e=>n(17,l=e)));const c=j();let r=!1,a=!1,d="",g=!1;const p=()=>function(e,t){const n=window.outerWidth/2+window.screenX-t.width/2,s=window.outerHeight/2+window.screenY-t.height/2;window.open("picker.html","_blank",`fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${t.width},height=${t.height},top=${s},left=${n}`)}(0,{width:1024,height:1024}),h=e=>{e.data&&e.data.type&&"google-drive-url-picked"===e.data.type&&(e.data.payload.error?(n(0,r=!0),n(2,d=e.data.payload.url)):c("picked",e.data.payload.url))};var f;window.addEventListener("message",h),f=()=>window.removeEventListener("message",h),N().$$.on_destroy.push(f);const m=()=>{ae(d).then((e=>c("picked",e))).catch((()=>{n(1,a=!0)}))},$=new Date,v=l.locationName&&""!==l.locationName?l.locationName:"New",y=async()=>{try{n(4,g=!0);let e=await async function(e){return new Promise((async(t,n)=>{let s=await ge((async t=>{let n,s;await he("client"),await async function(e,t){return new Promise(((e,t)=>{gapi.client.load("drive","v3",(()=>e()))}))}(),n="xlsx",s="application/vnd.google-apps.spreadsheet";let i=t.currentUser.get(),o=await gapi.client.drive.files.create({resource:{name:`${e}.xlsx`,mimeType:"application/vnd.google-apps.spreadsheet"},fields:"id,webViewLink"});return await gapi.client.drive.permissions.create({fileId:o.result.id,resource:{role:"writer",type:"anyone"},oauth_token:i.getAuthResponse().access_token}),o.result.webViewLink}));return t(s)})).catch((e=>(console.error(e),Promise.reject(e))))}(`${v}_${$.getFullYear()}_${$.getMonth()+1}_${$.getDate()}`);c("picked",e)}catch(e){console.error(e),n(4,g=!1)}};let w,b;return w="Sheets",b="assets/Icon-Sheets.png",e.$$.update=()=>{var t;4&e.$$.dirty&&n(3,s=""===d),12&e.$$.dirty&&n(11,i=!(s||(t=d,t&&se.test(t)))),2059&e.$$.dirty&&n(7,o=!s&&!(i||r||a))},[r,a,d,s,g,"Sheets","assets/Icon-Sheets.png",o,p,m,y,i,()=>p(),()=>y(),function(){d=this.value,n(2,d)},()=>{n(0,r=!1),n(1,a=!1)},()=>m()]}const Ke=class extends te{constructor(e){super(),ee(this,e,Ge,Oe,o,{})}};function qe(t){let n,s,i,o,l,r,a,u,d,g,p,w,b,_,C,M=t[2].clientName+"";return{c(){n=$("div"),s=$("h3"),i=v("Google "),o=v(t[0]),l=v(" sharing"),r=y(),a=$("p"),u=v(M),d=v(" is picking a file to share"),g=y(),p=$("div"),w=y(),b=$("div"),_=$("img"),k(a,"class","svelte-1hac2d5"),k(p,"class","large-gap svelte-1hac2d5"),k(_,"class","waiting-icon svelte-1hac2d5"),k(_,"alt","waiting"),c(_.src,C=t[1])||k(_,"src",C),k(n,"class","center-content waiting svelte-1hac2d5")},m(e,t){f(e,n,t),h(n,s),h(s,i),h(s,o),h(s,l),h(n,r),h(n,a),h(a,u),h(a,d),h(n,g),h(n,p),h(n,w),h(n,b),h(b,_)},p(e,[t]){1&t&&x(o,e[0]),4&t&&M!==(M=e[2].clientName+"")&&x(u,M),2&t&&!c(_.src,C=e[1])&&k(_,"src",C)},i:e,o:e,d(e){e&&m(n)}}}function Je(e,t,n){let s,i,o;return u(e,ke,(e=>n(2,s=e))),i="Sheets",o="assets/Icon-Sheets-Large.png",["Sheets","assets/Icon-Sheets-Large.png",s]}const Fe=class extends te{constructor(e){super(),ee(this,e,Je,qe,o,{})}};function Ve(e){let t;return{c(){t=$("p"),t.textContent="Please log in with google",k(t,"class","svelte-lvvhca")},m(e,n){f(e,t,n)},d(e){e&&m(t)}}}function Ye(e){let t;return{c(){t=$("p"),t.textContent="Please log in to your Google account to view the shared file",k(t,"class","svelte-lvvhca")},m(e,n){f(e,t,n)},d(e){e&&m(t)}}}function Be(e){let t;return{c(){t=$("p"),t.textContent="To start sharing a file, please log in with google",k(t,"class","svelte-lvvhca")},m(e,n){f(e,t,n)},d(e){e&&m(t)}}}function We(e){let t,n,s,i;return{c(){t=$("span"),t.textContent="Log in with Google",n=y(),s=$("img"),k(t,"class","text"),k(s,"class","icon-right"),k(s,"alt","google-icon"),c(s.src,i="assets/Icon-Login.svg")||k(s,"src","assets/Icon-Login.svg")},m(e,i){f(e,t,i),f(e,n,i),f(e,s,i)},d(e){e&&m(t),e&&m(n),e&&m(s)}}}function Xe(e){let t,n,s,i,o,l,r,a,u;function d(e,t){return e[1].clientUuid==e[2].clientUuid?Be:e[0]?Ye:Ve}let g=d(e),p=g(e);return a=new Ee({props:{importance:"secondary",$$slots:{default:[We]},$$scope:{ctx:e}}}),a.$on("click",e[4]),{c(){t=$("div"),n=$("div"),n.innerHTML="<h3>Google Drive sharing</h3>",s=y(),p.c(),i=y(),o=$("img"),r=y(),X(a.$$.fragment),k(o,"class","waiting-icon svelte-lvvhca"),k(o,"alt","waiting"),c(o.src,l="assets/Icon-Login-Large.png")||k(o,"src","assets/Icon-Login-Large.png"),k(t,"class","center-content waiting")},m(e,l){f(e,t,l),h(t,n),h(t,s),p.m(t,null),h(t,i),h(t,o),h(t,r),Z(a,t,null),u=!0},p(e,[n]){g!==(g=d(e))&&(p.d(1),p=g(e),p&&(p.c(),p.m(t,i)));const s={};64&n&&(s.$$scope={dirty:n,ctx:e}),a.$set(s)},i(e){u||(V(a.$$.fragment,e),u=!0)},o(e){Y(a.$$.fragment,e),u=!1},d(e){e&&m(t),p.d(),Q(a)}}}function Ze(e,t,n){let s,i;u(e,ke,(e=>n(1,s=e))),u(e,xe,(e=>n(2,i=e)));let{url:o}=t;const l=j();let c=async()=>{await de(),await pe()||(localStorage.removeItem("google_access_token"),await de()),l("signed-in")};return e.$$set=e=>{"url"in e&&n(0,o=e.url)},[o,s,i,c,()=>c()]}const Qe=class extends te{constructor(e){super(),ee(this,e,Ze,Xe,o,{url:0})}};function et(t){let n,s,i,o,l,c,r,a,u=JSON.stringify(t[17])+"";return{c(){n=$("link"),s=y(),i=$("div"),o=$("h2"),o.innerHTML='<i class="fas fa-exclamation-circle"></i> Oops',l=y(),c=$("span"),r=v("An error has occured while initializing the google drive app: "),a=v(u),k(n,"rel","stylesheet"),k(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),C(o,"color","red"),C(c,"color","red"),k(i,"class","center-content")},m(e,t){f(e,n,t),f(e,s,t),f(e,i,t),h(i,o),h(i,l),h(i,c),h(c,r),h(c,a)},p:e,i:e,o:e,d(e){e&&m(n),e&&m(s),e&&m(i)}}}function tt(e){let t,n,s,i;const o=[ot,it,st,nt],l=[];function c(e,t){return e[1]?"viewing"===e[2]?1:"picking"===e[2]?2:"waiting"===e[2]?3:-1:0}return~(t=c(e))&&(n=l[t]=o[t](e)),{c(){n&&n.c(),s=w()},m(e,n){~t&&l[t].m(e,n),f(e,s,n),i=!0},p(e,i){let r=t;t=c(e),t===r?~t&&l[t].p(e,i):(n&&(J(),Y(l[r],1,1,(()=>{l[r]=null})),F()),~t?(n=l[t],n?n.p(e,i):(n=l[t]=o[t](e),n.c()),V(n,1),n.m(s.parentNode,s)):n=null)},i(e){i||(V(n),i=!0)},o(e){Y(n),i=!1},d(e){~t&&l[t].d(e),e&&m(s)}}}function nt(t){let n,s;return n=new Fe({}),{c(){X(n.$$.fragment)},m(e,t){Z(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){Y(n.$$.fragment,e),s=!1},d(e){Q(n,e)}}}function st(t){let n,s;return n=new Ke({}),n.$on("picked",t[8]),{c(){X(n.$$.fragment)},m(e,t){Z(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){Y(n.$$.fragment,e),s=!1},d(e){Q(n,e)}}}function it(e){let t,n;return t=new Ue({props:{url:e[0].googleDriveUrl}}),{c(){X(t.$$.fragment)},m(e,s){Z(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.url=e[0].googleDriveUrl),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function ot(e){let t,n;return t=new Qe({props:{url:e[0].googleDriveUrl}}),t.$on("signed-in",e[7]),{c(){X(t.$$.fragment)},m(e,s){Z(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.url=e[0].googleDriveUrl),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function lt(t){let n,s,i={ctx:t,current:null,token:null,hasCatch:!1,pending:at,then:rt,catch:ct};return B(s=t[3],i),{c(){n=w(),i.block.c()},m(e,t){f(e,n,t),i.block.m(e,i.anchor=t),i.mount=()=>n.parentNode,i.anchor=n},p(e,n){t=e},i:e,o:e,d(e){e&&m(n),i.block.d(e),i.token=null,i=null}}}function ct(t){return{c:e,m:e,d:e}}function rt(e){let t,n,s;return{c(){t=$("link"),n=y(),s=$("div"),s.innerHTML='<span><i class="fa fa-circle-notch fa-spin"></i> Loading google drive app</span>',k(t,"rel","stylesheet"),k(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),k(s,"class","center-content")},m(e,i){f(e,t,i),f(e,n,i),f(e,s,i)},d(e){e&&m(t),e&&m(n),e&&m(s)}}}function at(e){let t;return{c(){t=$("div")},m(e,n){f(e,t,n)},d(e){e&&m(t)}}}function ut(e){let t,n,s,i={ctx:e,current:null,token:null,hasCatch:!0,pending:lt,then:tt,catch:et,error:17,blocks:[,,,]};return B(n=e[4],i),{c(){t=w(),i.block.c()},m(e,n){f(e,t,n),i.block.m(e,i.anchor=n),i.mount=()=>t.parentNode,i.anchor=t,s=!0},p(t,[n]){W(i,e=t,n)},i(e){s||(V(i.block),s=!0)},o(e){for(let e=0;e<3;e+=1)Y(i.blocks[e]);s=!1},d(e){e&&m(t),i.block.d(e),i.token=null,i=null}}}function dt(e,t,n){let s,i;u(e,xe,(e=>n(9,s=e))),u(e,ke,(e=>n(10,i=e)));let o,l={googleDriveUrl:null},c=!1,r=new ne({onClientHasLeft:e=>function(e){e!==i.clientUuid||l.googleDriveUrl||r.stopApp()}(e),onReceiveMessageAsHost:e=>e,onReceiveMessageAsClient:e=>{!function(e){"receive-google-drive-url"===e.type&&(h("Received a message from Kosy: ",e),n(0,l=Object.assign(Object.assign({},l),{googleDriveUrl:e.payload})),n(2,o="viewing"))}(e)},onRequestState:()=>l,onProvideState:e=>n(0,l=e)}),a=new Promise(((e,t)=>{setTimeout((()=>{e()}),3e3)})),d=r.startApp().then((async e=>{var t,s;n(1,c=await pe()),be.set(e),e.currentClientUuid==e.initializerClientUuid?n(2,o="picking"):(null===(t=e.currentAppState)||void 0===t?void 0:t.googleDriveUrl)?n(2,o="viewing"):n(2,o="waiting"),n(0,l=null!==(s=e.currentAppState)&&void 0!==s?s:l)})),g=e=>{h("Relaying message: drive url picked",e),r.relayMessage({type:"receive-google-drive-url",payload:e})},p=async()=>{h("Signed in with google -> refreshing views if necessary"),n(1,c=await pe())};function h(...e){var t;console.log(`${null!==(t=null==s?void 0:s.clientName)&&void 0!==t?t:"New user"} logged: `,...e)}return[l,c,o,a,d,g,p,()=>p(),e=>g(e.detail)]}new class extends te{constructor(e){super(),ee(this,e,dt,ut,o,{})}}({target:document.getElementById("container"),props:{}})})()})();