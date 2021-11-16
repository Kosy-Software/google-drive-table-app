(()=>{"use strict";(()=>{function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c;function l(e,t){return c||(c=document.createElement("a")),c.href=t,e===c.href}function r(e){return 0===Object.keys(e).length}function a(t,...n){if(null==t)return e;const s=t.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}function u(e,t,n){e.$$.on_destroy.push(a(t,n))}function d(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}new Set;let g,p=!1;function f(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function v(e){return document.createTextNode(e)}function y(){return v(" ")}function b(){return v("")}function w(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function x(e,t){e.value=null==t?"":t}function C(e,t,n,s){e.style.setProperty(t,n,s?"important":"")}function M(e,t,n){e.classList[n?"add":"remove"](t)}function A(e){g=e}function T(){if(!g)throw new Error("Function called outside component initialization");return g}function U(){const e=T();return(t,n)=>{const s=e.$$.callbacks[t];if(s){const i=function(e,t,n=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,n,!1,t),s}(t,n);s.slice().forEach((t=>{t.call(e,i)}))}}}function N(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}new Set;const S=[],P=[],E=[],L=[],R=Promise.resolve();let I=!1;function q(e){E.push(e)}let j=!1;const H=new Set;function D(){if(!j){j=!0;do{for(let e=0;e<S.length;e+=1){const t=S[e];A(t),z(t.$$)}for(A(null),S.length=0;P.length;)P.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];H.has(t)||(H.add(t),t())}E.length=0}while(S.length);for(;L.length;)L.pop()();I=!1,j=!1,H.clear()}}function z(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const O=new Set;let G,K;function J(){G={r:0,c:[],p:G}}function F(){G.r||s(G.c),G=G.p}function V(e,t){e&&e.i&&(O.delete(e),e.i(t))}function Y(e,t,n,s){if(e&&e.o){if(O.has(e))return;O.add(e),G.c.push((()=>{O.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function B(e,t){const n=t.token={};function s(e,s,i,o){if(t.token!==n)return;t.resolved=o;let c=t.ctx;void 0!==i&&(c=c.slice(),c[i]=o);const l=e&&(t.current=e)(c);let r=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==s&&e&&(J(),Y(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),F())})):t.block.d(1),l.c(),V(l,1),l.m(t.mount(),t.anchor),r=!0),t.block=l,t.blocks&&(t.blocks[s]=l),r&&D()}if((i=e)&&"object"==typeof i&&"function"==typeof i.then){const n=T();if(e.then((e=>{A(n),s(t.then,1,t.value,e),A(null)}),(e=>{if(A(n),s(t.catch,2,t.error,e),A(null),!t.hasCatch)throw e})),t.current!==t.pending)return s(t.pending,0),!0}else{if(t.current!==t.then)return s(t.then,1,t.value,e),!0;t.resolved=e}var i}function W(e,t,n){const s=t.slice(),{resolved:i}=e;e.current===e.then&&(s[e.value]=i),e.current===e.catch&&(s[e.error]=i),e.block.p(s,n)}function X(e){e&&e.c()}function Z(e,n,o,c){const{fragment:l,on_mount:r,on_destroy:a,after_update:u}=e.$$;l&&l.m(n,o),c||q((()=>{const n=r.map(t).filter(i);a?a.push(...n):s(n),e.$$.on_mount=[]})),u.forEach(q)}function Q(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ee(t,i,o,c,l,r,a,u=[-1]){const d=g;A(t);const f=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:u,skip_bound:!1,root:i.target||d.$$.root};a&&a(f.root);let h=!1;if(f.ctx=o?o(t,i.props||{},((e,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&l(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),h&&function(e,t){-1===e.$$.dirty[0]&&(S.push(e),I||(I=!0,R.then(D)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],f.update(),h=!0,s(f.before_update),f.fragment=!!c&&c(f.ctx),i.target){if(i.hydrate){p=!0;const e=($=i.target,Array.from($.childNodes));f.fragment&&f.fragment.l(e),e.forEach(m)}else f.fragment&&f.fragment.c();i.intro&&V(t.$$.fragment),Z(t,i.target,i.anchor,i.customElement),p=!1,D()}var $;A(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(K=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(i);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){s(this.$$.on_disconnect)}$destroy(){Q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class te{$destroy(){Q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!r(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class ne{constructor(e){this.kosyClient=window.parent,this.latestMessageNumber=0,this.kosyApp=e}dictionaryToArray(e){let t=[];for(const n in e)e.hasOwnProperty(n)&&t.push([n,e[n]]);return t}startApp(){return this.initialInfoPromise=new Promise(((e,t)=>{window.addEventListener("message",(t=>{let n=t.data;switch(n.type){case"receive-initial-info":this.latestMessageNumber=n.latestMessageNumber,this.clients=n.payload.clients,this.hostClientUuid=n.payload.initializerClientUuid,this.log("Resolving initial info promise with: ",n.payload),e(n.payload);break;case"set-client-info":{let e=n.clients,t=n.hostClientUuid;this.initialInfoPromise.then((n=>{let s=this.dictionaryToArray(e).filter((e=>!this.clients[e[0]])),i=this.dictionaryToArray(this.clients).filter((t=>!e[t[0]])),o=this.latestMessageNumber;this.hostClientUuid!==t&&this._relayMessageToClients(n,{type:"_host-has-changed",clientUuid:t},++o),s.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-joined",clientInfo:e[1]},++o))),i.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-left",clientUuid:e[0]},++o))),this.clients=e,this.hostClientUuid=t}));break}case"get-app-state":{let e=n.clientUuids;this.log("Get app state received -> sending app state");const t=this.kosyApp.onRequestState();this._sendMessageToKosy({type:"receive-app-state",state:t,clientUuids:e,latestMessageNumber:this.latestMessageNumber});break}case"set-app-state":this.latestMessageNumber=n.latestMessageNumber;let t=n.state;this.initialInfoPromise.then((()=>{this.log("Received app state from Kosy -> setting app state"),this.kosyApp.onProvideState(t)}));break;case"receive-message-as-host":this._handleReceiveMessageAsHost(n);break;case"receive-message-as-client":this._handleReceiveMessageAsClient(n)}})),this._sendMessageToKosy({type:"ready-and-listening"})})),this.initialInfoPromise}stopApp(){this._sendMessageToKosy({type:"stop-app"})}relayMessage(e){this.log("Relaying client message to host: ",e),this._sendMessageToKosy({type:"relay-message-to-host",message:e})}_relayMessageToClients(e,t,n){this.log("Relaying host to client message: ",t),this._sendMessageToKosy({type:"relay-message-to-clients",sentByClientUuid:e.currentClientUuid,message:t,messageNumber:n})}_sendMessageToKosy(e){this.kosyClient.postMessage(e,"*")}_handleReceiveMessageAsClientRecursive(e,t,n){var s,i,o,c,l,r;if(this.latestMessageNumber===e.messageNumber-1){switch(e.message.type){case"_host-has-changed":{let t=e.message.clientUuid;this.hostClientUuid=t,null===(i=(s=this.kosyApp).onHostHasChanged)||void 0===i||i.call(s,t);break}case"_client-has-joined":{let t=e.message.clientInfo;this.clients[t.clientUuid]=t,null===(c=(o=this.kosyApp).onClientHasJoined)||void 0===c||c.call(o,t);break}case"_client-has-left":{let t=e.message.clientUuid;this.clients[t]=null,null===(r=(l=this.kosyApp).onClientHasLeft)||void 0===r||r.call(l,t);break}default:this.kosyApp.onReceiveMessageAsClient(e.message)}this.latestMessageNumber=e.messageNumber}else n<50&&this.latestMessageNumber<e.messageNumber?setTimeout((()=>this._handleReceiveMessageAsClientRecursive(e,t,n+1)),100):(this.log("Timeout on processing message as client: ",e.message),this.log("Wait for Kosy to fix this mess..."))}_handleReceiveMessageAsClient(e){this.initialInfoPromise.then((t=>{this.log("Received message as client, processing: ",e.message),this._handleReceiveMessageAsClientRecursive(e,t,0)}))}_handleReceiveMessageAsHost(e){this.initialInfoPromise.then((t=>{this.log("Trying to handle message as host");const n=this.kosyApp.onReceiveMessageAsHost(e.message);n&&this._relayMessageToClients(t,n,this.latestMessageNumber+1)}))}log(...e){"1"===localStorage.getItem("debug-mode")&&console.log("From kosy-app-api: ",...e)}}const se=new RegExp("^(https://\\w+.google.com)"),ie=new RegExp("^(https://(drive|docs).google.com)","i"),oe=new RegExp("/d/([-\\w]{25,})"),ce="https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly",le=new Date("1970-01-01T00:00:00Z").getTime();function re(e){let t=new URL(e.replace("/preview","/edit"));return t.searchParams.append("userstoinvite","@"),t.toString()}async function ae(e){let t=ue(e);await fe("client");let n=await de();gapi.client.setApiKey("AIzaSyDFUoIEXWGk0NPtqPjCadqnEpcgxydw9ko"),gapi.client.setToken({access_token:n.access_token});try{let n=await gapi.client.request({path:`https://www.googleapis.com/drive/v3/files/${t}?fields=webViewLink`}),s=JSON.parse((null==n?void 0:n.body)||"{}").webViewLink;if(s){if(ie.test(s))return Promise.resolve(e.replace("/view","/preview"));{let e=ue(s);return Promise.resolve(`https://drive.google.com/file/d/${e}/preview`)}}return Promise.reject()}catch(e){return Promise.reject()}}function ue(e){let t=e.match(oe);return t&&t.length>1?t[1]:null}async function de(){let e=JSON.parse(localStorage.getItem("google_access_token")||"{}");return new Date(le+((null==e?void 0:e.expires_at)||6e5)-6e4)<new Date&&(e=await async function(){return await ge((e=>new Promise(((t,n)=>{try{let s=e.currentUser.get();s.hasGrantedScopes(ce)?t(s.getAuthResponse(!0)):e.signIn().then((e=>t(e.getAuthResponse(!0)))).catch((e=>n(e)))}catch(e){n(e)}}))))}(),localStorage.setItem("google_access_token",JSON.stringify(e))),e}async function ge(e){return await fe("auth2"),gapi.auth2.init({client_id:"1055348097262-m31jmp68886tmq7hmsa7pgg0fopb9dot.apps.googleusercontent.com",scope:ce}).then((()=>e(gapi.auth2.getAuthInstance())))}async function pe(){return ge((e=>e.isSignedIn.get()&&e.currentUser.get().hasGrantedScopes(ce)))}async function fe(e){return new Promise(((t,n)=>gapi.load(e,{callback:()=>t({}),onerror:e=>n(e),timeout:5e3,ontimeout:()=>n()})))}function he(t){let n,s,i,o,c,l,r,a;return{c(){n=$("div"),s=$("div"),i=$("h3"),i.textContent="You don't have access to this file",o=y(),c=$("p"),l=v(t[0]),r=y(),a=$("div"),a.innerHTML='<img class="access-denied svelte-fl2rw0" src="assets/access-denied.svg" alt="access-denied"/>',k(n,"class","center-content")},m(e,t){h(e,n,t),f(n,s),f(s,i),f(s,o),f(s,c),f(c,l),f(n,r),f(n,a)},p(e,[t]){1&t&&_(l,e[0])},i:e,o:e,d(e){e&&m(n)}}}function me(e,t,n){let{msg:s}=t;return e.$$set=e=>{"msg"in e&&n(0,s=e.msg)},[s]}const $e=class extends te{constructor(e){super(),ee(this,e,me,he,o,{msg:0})}},ve=[];function ye(t,n=e){let s;const i=new Set;function c(e){if(o(t,e)&&(t=e,s)){const e=!ve.length;for(const e of i)e[1](),ve.push(e,t);if(e){for(let e=0;e<ve.length;e+=2)ve[e][0](ve[e+1]);ve.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(o,l=e){const r=[o,l];return i.add(r),1===i.size&&(s=n(c)||e),o(t),()=>{i.delete(r),0===i.size&&(s(),s=null)}}}}function be(t,n,o){const c=!Array.isArray(t),l=c?[t]:t,r=n.length<2;return{subscribe:ye(o,(t=>{let o=!1;const u=[];let d=0,g=e;const p=()=>{if(d)return;g();const s=n(c?u[0]:u,t);r?t(s):g=i(s)?s:e},f=l.map(((e,t)=>a(e,(e=>{u[t]=e,d&=~(1<<t),o&&p()}),(()=>{d|=1<<t}))));return o=!0,p(),function(){s(f),g()}})).subscribe}}const we=ye(null),ke=be(we,(e=>null==e?void 0:e.clients[e.initializerClientUuid])),_e=be(we,(e=>null==e?void 0:e.clients[e.currentClientUuid]));function xe(e){let t,n,s,i;const o=[Me,Ce],c=[];function l(e,t){return e[1].clientUuid!==e[2].clientUuid?0:1}return t=l(e),n=c[t]=o[t](e),{c(){n.c(),s=b()},m(e,n){c[t].m(e,n),h(e,s,n),i=!0},p(e,i){let r=t;t=l(e),t===r?c[t].p(e,i):(J(),Y(c[r],1,1,(()=>{c[r]=null})),F(),n=c[t],n?n.p(e,i):(n=c[t]=o[t](e),n.c()),V(n,1),n.m(s.parentNode,s))},i(e){i||(V(n),i=!0)},o(e){Y(n),i=!1},d(e){c[t].d(e),e&&m(s)}}}function Ce(t){let n,s;return n=new $e({props:{msg:"This should not occur, but it did, and we're very sorry :("}}),{c(){X(n.$$.fragment)},m(e,t){Z(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){Y(n.$$.fragment,e),s=!1},d(e){Q(n,e)}}}function Me(e){let t,n;return t=new $e({props:{msg:"Please ask "+e[1].clientName+" to share the file with you."}}),{c(){X(t.$$.fragment)},m(e,s){Z(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.msg="Please ask "+e[1].clientName+" to share the file with you."),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function Ae(t){let n,s;return{c(){n=$("iframe"),k(n,"title","google drive "),l(n.src,s=t[4])||k(n,"src",s),k(n,"class","svelte-tbe2c")},m(e,t){h(e,n,t)},p(e,t){1&t&&!l(n.src,s=e[4])&&k(n,"src",s)},i:e,o:e,d(e){e&&m(n)}}}function Te(t){let n;return{c(){n=$("div")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function Ue(e){let t,n,s,i={ctx:e,current:null,token:null,hasCatch:!0,pending:Te,then:Ae,catch:xe,value:4,blocks:[,,,]};return B(n=e[0],i),{c(){t=b(),i.block.c()},m(e,n){h(e,t,n),i.block.m(e,i.anchor=n),i.mount=()=>t.parentNode,i.anchor=t,s=!0},p(t,[s]){e=t,i.ctx=e,1&s&&n!==(n=e[0])&&B(n,i)||W(i,e,s)},i(e){s||(V(i.block),s=!0)},o(e){for(let e=0;e<3;e+=1)Y(i.blocks[e]);s=!1},d(e){e&&m(t),i.block.d(e),i.token=null,i=null}}}function Ne(e,t,n){let s,i,o;u(e,ke,(e=>n(1,i=e))),u(e,_e,(e=>n(2,o=e)));let{url:c}=t;return e.$$set=e=>{"url"in e&&n(3,c=e.url)},e.$$.update=()=>{8&e.$$.dirty&&n(0,s=ae(c))},[s,i,o,c]}const Se=class extends te{constructor(e){super(),ee(this,e,Ne,Ue,o,{url:3})}};function Pe(e){let t,n,i,o;const c=e[5].default,l=function(e,t,n,s){if(e){const s=d(e,t,n,null);return e[0](s)}}(c,e,e[4]);return{c(){t=$("button"),l&&l.c(),k(t,"class",e[1]),t.disabled=e[0]},m(s,c){h(s,t,c),l&&l.m(t,null),n=!0,i||(o=[w(t,"click",e[6]),w(t,"dblclick",e[7]),w(t,"focus",e[8])],i=!0)},p(e,[s]){l&&l.p&&(!n||16&s)&&function(e,t,n,s,i,o){if(i){const c=d(t,n,s,o);e.p(c,i)}}(l,c,e,e[4],n?function(e,t,n,s){if(e[2]&&s){const i=e[2](s(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|i[s];return e}return t.dirty|i}return t.dirty}(c,e[4],s,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[4]),null),(!n||2&s)&&k(t,"class",e[1]),(!n||1&s)&&(t.disabled=e[0])},i(e){n||(V(l,e),n=!0)},o(e){Y(l,e),n=!1},d(e){e&&m(t),l&&l.d(e),i=!1,s(o)}}}function Ee(e,t,n){let{$$slots:s={},$$scope:i}=t,{size:o="regular"}=t,{importance:c}=t,{disabled:l=!1}=t,r="";return e.$$set=e=>{"size"in e&&n(2,o=e.size),"importance"in e&&n(3,c=e.importance),"disabled"in e&&n(0,l=e.disabled),"$$scope"in e&&n(4,i=e.$$scope)},e.$$.update=()=>{if(12&e.$$.dirty){let e=["re-button","size-"+o];c&&e.push("importance-"+c),n(1,r=e.join(" "))}},[l,r,o,c,i,s,function(t){N.call(this,e,t)},function(t){N.call(this,e,t)},function(t){N.call(this,e,t)}]}const Le=class extends te{constructor(e){super(),ee(this,e,Ee,Pe,o,{size:2,importance:3,disabled:0})}};function Re(e){let t,n,i,o,c,l,r,a,u,d,g,p,b,C,A,T,U,N,S,P,E,L,R,I,q,j,H,D;r=new Le({props:{importance:"secondary",$$slots:{default:[qe]},$$scope:{ctx:e}}}),r.$on("click",e[12]),u=new Le({props:{importance:"secondary",$$slots:{default:[je]},$$scope:{ctx:e}}}),u.$on("click",e[13]);let z=e[0]&&He(e),O=e[1]&&De();return{c(){t=$("div"),n=$("h3"),i=v("Embed Google "),o=v(e[5]),c=y(),l=$("div"),X(r.$$.fragment),a=y(),X(u.$$.fragment),d=y(),g=$("p"),g.textContent="OR",p=y(),b=$("div"),C=$("div"),A=$("input"),T=y(),U=$("small"),U.textContent="Go to Google Docs, click the Share button, copy the link and paste it here",N=y(),S=$("div"),P=y(),E=$("button"),L=$("span"),L.textContent="Open file",I=y(),z&&z.c(),q=y(),O&&O.c(),k(t,"class","svelte-18bqf1c"),k(l,"class","buttons svelte-18bqf1c"),k(g,"class","svelte-18bqf1c"),k(A,"name","shared-link"),k(A,"type","text"),k(A,"placeholder","E.g. https://docs.google.com/..."),k(A,"class","svelte-18bqf1c"),M(A,"invalid",!e[3]&&!e[7]),M(A,"valid",e[7]),k(C,"class","svelte-18bqf1c"),k(U,"class","svelte-18bqf1c"),k(S,"class","large-gap svelte-18bqf1c"),k(L,"class","text"),k(E,"class","re-button size-regular full-width importance-primary svelte-18bqf1c"),E.disabled=R=!e[7],k(b,"class","svelte-18bqf1c")},m(s,m){h(s,t,m),f(t,n),f(n,i),f(n,o),h(s,c,m),h(s,l,m),Z(r,l,null),f(l,a),Z(u,l,null),h(s,d,m),h(s,g,m),h(s,p,m),h(s,b,m),f(b,C),f(C,A),x(A,e[2]),f(b,T),f(b,U),f(b,N),f(b,S),f(b,P),f(b,E),f(E,L),f(b,I),z&&z.m(b,null),f(b,q),O&&O.m(b,null),j=!0,H||(D=[w(A,"input",e[14]),w(A,"input",e[15]),w(E,"click",e[16])],H=!0)},p(e,t){(!j||32&t)&&_(o,e[5]);const n={};4194368&t&&(n.$$scope={dirty:t,ctx:e}),r.$set(n);const s={};4194304&t&&(s.$$scope={dirty:t,ctx:e}),u.$set(s),4&t&&A.value!==e[2]&&x(A,e[2]),136&t&&M(A,"invalid",!e[3]&&!e[7]),128&t&&M(A,"valid",e[7]),(!j||128&t&&R!==(R=!e[7]))&&(E.disabled=R),e[0]?z?z.p(e,t):(z=He(e),z.c(),z.m(b,q)):z&&(z.d(1),z=null),e[1]?O||(O=De(),O.c(),O.m(b,null)):O&&(O.d(1),O=null)},i(e){j||(V(r.$$.fragment,e),V(u.$$.fragment,e),j=!0)},o(e){Y(r.$$.fragment,e),Y(u.$$.fragment,e),j=!1},d(e){e&&m(t),e&&m(c),e&&m(l),Q(r),Q(u),e&&m(d),e&&m(g),e&&m(p),e&&m(b),z&&z.d(),O&&O.d(),H=!1,s(D)}}}function Ie(t){let n;return{c(){n=$("div"),n.innerHTML='<h3>Your file is being created...</h3> \n            <div class="big-gap svelte-18bqf1c"></div> \n            <div class="svelte-18bqf1c"><img class="creating-icon" alt="creating" src="assets/creating.webp"/></div>',k(n,"class","svelte-18bqf1c")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&m(n)}}}function qe(e){let t,n,s,i;return{c(){t=$("img"),s=y(),i=$("span"),i.textContent="Pick a file",k(t,"class","icon-left svelte-18bqf1c"),k(t,"alt","Pick a file icon"),l(t.src,n=e[6])||k(t,"src",n),k(i,"class","text")},m(e,n){h(e,t,n),h(e,s,n),h(e,i,n)},p(e,s){64&s&&!l(t.src,n=e[6])&&k(t,"src",n)},d(e){e&&m(t),e&&m(s),e&&m(i)}}}function je(e){let t,n,s,i;return{c(){t=$("img"),s=y(),i=$("span"),i.textContent="Create new file",k(t,"class","icon-left svelte-18bqf1c"),k(t,"alt","Create new file icon"),l(t.src,n="assets/create-new-file-icon.svg")||k(t,"src","assets/create-new-file-icon.svg"),k(i,"class","text")},m(e,n){h(e,t,n),h(e,s,n),h(e,i,n)},d(e){e&&m(t),e&&m(s),e&&m(i)}}}function He(e){let t,n,s,i,o,c;return{c(){t=$("label"),n=v("The file you picked is not a shared file. Please click "),s=$("a"),i=v("here"),c=v(" to enable file sharing."),k(s,"href",o=re(e[2])),k(s,"target","_blank"),k(t,"class","error-label svelte-18bqf1c"),k(t,"for","open-picker")},m(e,o){h(e,t,o),f(t,n),f(t,s),f(s,i),f(t,c)},p(e,t){4&t&&o!==(o=re(e[2]))&&k(s,"href",o)},d(e){e&&m(t)}}}function De(e){let t;return{c(){t=$("label"),t.textContent="The file you tried to share with the table is not available to you.",k(t,"class","error-label svelte-18bqf1c"),k(t,"for","open-picker")},m(e,n){h(e,t,n)},d(e){e&&m(t)}}}function ze(e){let t,n,s,i;const o=[Ie,Re],c=[];function l(e,t){return e[4]?0:1}return n=l(e),s=c[n]=o[n](e),{c(){t=$("div"),s.c(),k(t,"class","center-content picking svelte-18bqf1c")},m(e,s){h(e,t,s),c[n].m(t,null),i=!0},p(e,[i]){let r=n;n=l(e),n===r?c[n].p(e,i):(J(),Y(c[r],1,1,(()=>{c[r]=null})),F(),s=c[n],s?s.p(e,i):(s=c[n]=o[n](e),s.c()),V(s,1),s.m(t,null))},i(e){i||(V(s),i=!0)},o(e){Y(s),i=!1},d(e){e&&m(t),c[n].d()}}}function Oe(e,t,n){let s,i,o,c;u(e,_e,(e=>n(17,c=e)));const l=U();let r=!1,a=!1,d="",g=!1;const p=()=>function(e,t){const n=window.outerWidth/2+window.screenX-t.width/2,s=window.outerHeight/2+window.screenY-t.height/2;window.open("picker.html","_blank",`fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${t.width},height=${t.height},top=${s},left=${n}`)}(0,{width:1024,height:1024}),f=e=>{e.data&&e.data.type&&"google-drive-url-picked"===e.data.type&&(e.data.payload.error?(n(0,r=!0),n(2,d=e.data.payload.url)):l("picked",e.data.payload.url))};var h;window.addEventListener("message",f),h=()=>window.removeEventListener("message",f),T().$$.on_destroy.push(h);const m=()=>{ae(d).then((e=>l("picked",e))).catch((()=>{n(1,a=!0)}))},$=new Date,v=async()=>{try{n(4,g=!0);let e=await async function(e){return new Promise((async(t,n)=>{let s=await ge((async t=>{let n,s;await fe("client"),await async function(e,t){return new Promise(((e,t)=>{gapi.client.load("drive","v3",(()=>e()))}))}(),n="pptx",s="application/vnd.google-apps.presentation";let i=t.currentUser.get(),o=await gapi.client.drive.files.create({resource:{name:`${e}.pptx`,mimeType:"application/vnd.google-apps.presentation"},fields:"id,webViewLink"});return await gapi.client.drive.permissions.create({fileId:o.result.id,resource:{role:"writer",type:"anyone"},oauth_token:i.getAuthResponse().access_token}),o.result.webViewLink}));return t(s)})).catch((e=>(console.error(e),Promise.reject(e))))}(`${c.clientLocation.table.tableName}_${$.getFullYear()}_${$.getMonth()+1}_${$.getDate()}`);l("picked",e)}catch(e){console.error(e),n(4,g=!1)}};let y,b;return y="Slides",b="assets/Icon-Slides.png",e.$$.update=()=>{var t;4&e.$$.dirty&&n(3,s=""===d),12&e.$$.dirty&&n(11,i=!(s||(t=d,t&&se.test(t)))),2059&e.$$.dirty&&n(7,o=!s&&!(i||r||a))},[r,a,d,s,g,"Slides","assets/Icon-Slides.png",o,p,m,v,i,()=>p(),()=>v(),function(){d=this.value,n(2,d)},()=>{n(0,r=!1),n(1,a=!1)},()=>m()]}const Ge=class extends te{constructor(e){super(),ee(this,e,Oe,ze,o,{})}};function Ke(t){let n,s,i,o,c,r,a,u,d,g,p,b,w,x,C,M=t[2].clientName+"";return{c(){n=$("div"),s=$("h3"),i=v("Google "),o=v(t[0]),c=v(" sharing"),r=y(),a=$("p"),u=v(M),d=v(" is picking a file to share"),g=y(),p=$("div"),b=y(),w=$("div"),x=$("img"),k(a,"class","svelte-1hac2d5"),k(p,"class","large-gap svelte-1hac2d5"),k(x,"class","waiting-icon svelte-1hac2d5"),k(x,"alt","waiting"),l(x.src,C=t[1])||k(x,"src",C),k(n,"class","center-content waiting svelte-1hac2d5")},m(e,t){h(e,n,t),f(n,s),f(s,i),f(s,o),f(s,c),f(n,r),f(n,a),f(a,u),f(a,d),f(n,g),f(n,p),f(n,b),f(n,w),f(w,x)},p(e,[t]){1&t&&_(o,e[0]),4&t&&M!==(M=e[2].clientName+"")&&_(u,M),2&t&&!l(x.src,C=e[1])&&k(x,"src",C)},i:e,o:e,d(e){e&&m(n)}}}function Je(e,t,n){let s,i,o;return u(e,ke,(e=>n(2,s=e))),i="Slides",o="assets/Icon-Slides-Large.png",["Slides","assets/Icon-Slides-Large.png",s]}const Fe=class extends te{constructor(e){super(),ee(this,e,Je,Ke,o,{})}};function Ve(e){let t;return{c(){t=$("p"),t.textContent="Please log in with google",k(t,"class","svelte-lvvhca")},m(e,n){h(e,t,n)},d(e){e&&m(t)}}}function Ye(e){let t;return{c(){t=$("p"),t.textContent="Please log in to your Google account to view the shared file",k(t,"class","svelte-lvvhca")},m(e,n){h(e,t,n)},d(e){e&&m(t)}}}function Be(e){let t;return{c(){t=$("p"),t.textContent="To start sharing a file, please log in with google",k(t,"class","svelte-lvvhca")},m(e,n){h(e,t,n)},d(e){e&&m(t)}}}function We(e){let t,n,s,i;return{c(){t=$("span"),t.textContent="Log in with Google",n=y(),s=$("img"),k(t,"class","text"),k(s,"class","icon-right"),k(s,"alt","google-icon"),l(s.src,i="assets/Icon-Login.svg")||k(s,"src","assets/Icon-Login.svg")},m(e,i){h(e,t,i),h(e,n,i),h(e,s,i)},d(e){e&&m(t),e&&m(n),e&&m(s)}}}function Xe(e){let t,n,s,i,o,c,r,a,u;function d(e,t){return e[1].clientUuid==e[2].clientUuid?Be:e[0]?Ye:Ve}let g=d(e),p=g(e);return a=new Le({props:{importance:"secondary",$$slots:{default:[We]},$$scope:{ctx:e}}}),a.$on("click",e[4]),{c(){t=$("div"),n=$("div"),n.innerHTML="<h3>Google Drive sharing</h3>",s=y(),p.c(),i=y(),o=$("img"),r=y(),X(a.$$.fragment),k(o,"class","waiting-icon svelte-lvvhca"),k(o,"alt","waiting"),l(o.src,c="assets/Icon-Login-Large.png")||k(o,"src","assets/Icon-Login-Large.png"),k(t,"class","center-content waiting")},m(e,c){h(e,t,c),f(t,n),f(t,s),p.m(t,null),f(t,i),f(t,o),f(t,r),Z(a,t,null),u=!0},p(e,[n]){g!==(g=d(e))&&(p.d(1),p=g(e),p&&(p.c(),p.m(t,i)));const s={};64&n&&(s.$$scope={dirty:n,ctx:e}),a.$set(s)},i(e){u||(V(a.$$.fragment,e),u=!0)},o(e){Y(a.$$.fragment,e),u=!1},d(e){e&&m(t),p.d(),Q(a)}}}function Ze(e,t,n){let s,i;u(e,ke,(e=>n(1,s=e))),u(e,_e,(e=>n(2,i=e)));let{url:o}=t;const c=U();let l=async()=>{await de(),await pe()||(localStorage.removeItem("google_access_token"),await de()),c("signed-in")};return e.$$set=e=>{"url"in e&&n(0,o=e.url)},[o,s,i,l,()=>l()]}const Qe=class extends te{constructor(e){super(),ee(this,e,Ze,Xe,o,{url:0})}};function et(t){let n,s,i,o,c,l,r,a,u=JSON.stringify(t[17])+"";return{c(){n=$("link"),s=y(),i=$("div"),o=$("h2"),o.innerHTML='<i class="fas fa-exclamation-circle"></i> Oops',c=y(),l=$("span"),r=v("An error has occured while initializing the google drive app: "),a=v(u),k(n,"rel","stylesheet"),k(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),C(o,"color","red"),C(l,"color","red"),k(i,"class","center-content")},m(e,t){h(e,n,t),h(e,s,t),h(e,i,t),f(i,o),f(i,c),f(i,l),f(l,r),f(l,a)},p:e,i:e,o:e,d(e){e&&m(n),e&&m(s),e&&m(i)}}}function tt(e){let t,n,s,i;const o=[ot,it,st,nt],c=[];function l(e,t){return e[1]?"viewing"===e[2]?1:"picking"===e[2]?2:"waiting"===e[2]?3:-1:0}return~(t=l(e))&&(n=c[t]=o[t](e)),{c(){n&&n.c(),s=b()},m(e,n){~t&&c[t].m(e,n),h(e,s,n),i=!0},p(e,i){let r=t;t=l(e),t===r?~t&&c[t].p(e,i):(n&&(J(),Y(c[r],1,1,(()=>{c[r]=null})),F()),~t?(n=c[t],n?n.p(e,i):(n=c[t]=o[t](e),n.c()),V(n,1),n.m(s.parentNode,s)):n=null)},i(e){i||(V(n),i=!0)},o(e){Y(n),i=!1},d(e){~t&&c[t].d(e),e&&m(s)}}}function nt(t){let n,s;return n=new Fe({}),{c(){X(n.$$.fragment)},m(e,t){Z(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){Y(n.$$.fragment,e),s=!1},d(e){Q(n,e)}}}function st(t){let n,s;return n=new Ge({}),n.$on("picked",t[8]),{c(){X(n.$$.fragment)},m(e,t){Z(n,e,t),s=!0},p:e,i(e){s||(V(n.$$.fragment,e),s=!0)},o(e){Y(n.$$.fragment,e),s=!1},d(e){Q(n,e)}}}function it(e){let t,n;return t=new Se({props:{url:e[0].googleDriveUrl}}),{c(){X(t.$$.fragment)},m(e,s){Z(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.url=e[0].googleDriveUrl),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function ot(e){let t,n;return t=new Qe({props:{url:e[0].googleDriveUrl}}),t.$on("signed-in",e[7]),{c(){X(t.$$.fragment)},m(e,s){Z(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.url=e[0].googleDriveUrl),t.$set(s)},i(e){n||(V(t.$$.fragment,e),n=!0)},o(e){Y(t.$$.fragment,e),n=!1},d(e){Q(t,e)}}}function ct(t){let n,s,i={ctx:t,current:null,token:null,hasCatch:!1,pending:at,then:rt,catch:lt};return B(s=t[3],i),{c(){n=b(),i.block.c()},m(e,t){h(e,n,t),i.block.m(e,i.anchor=t),i.mount=()=>n.parentNode,i.anchor=n},p(e,n){t=e},i:e,o:e,d(e){e&&m(n),i.block.d(e),i.token=null,i=null}}}function lt(t){return{c:e,m:e,d:e}}function rt(e){let t,n,s;return{c(){t=$("link"),n=y(),s=$("div"),s.innerHTML='<span><i class="fa fa-circle-notch fa-spin"></i> Loading google drive app</span>',k(t,"rel","stylesheet"),k(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),k(s,"class","center-content")},m(e,i){h(e,t,i),h(e,n,i),h(e,s,i)},d(e){e&&m(t),e&&m(n),e&&m(s)}}}function at(e){let t;return{c(){t=$("div")},m(e,n){h(e,t,n)},d(e){e&&m(t)}}}function ut(e){let t,n,s,i={ctx:e,current:null,token:null,hasCatch:!0,pending:ct,then:tt,catch:et,error:17,blocks:[,,,]};return B(n=e[4],i),{c(){t=b(),i.block.c()},m(e,n){h(e,t,n),i.block.m(e,i.anchor=n),i.mount=()=>t.parentNode,i.anchor=t,s=!0},p(t,[n]){W(i,e=t,n)},i(e){s||(V(i.block),s=!0)},o(e){for(let e=0;e<3;e+=1)Y(i.blocks[e]);s=!1},d(e){e&&m(t),i.block.d(e),i.token=null,i=null}}}function dt(e,t,n){let s,i;u(e,_e,(e=>n(9,s=e))),u(e,ke,(e=>n(10,i=e)));let o,c={googleDriveUrl:null},l=!1,r=new ne({onClientHasLeft:e=>function(e){e!==i.clientUuid||c.googleDriveUrl||r.stopApp()}(e),onReceiveMessageAsHost:e=>e,onReceiveMessageAsClient:e=>{!function(e){"receive-google-drive-url"===e.type&&(f("Received a message from Kosy: ",e),n(0,c=Object.assign(Object.assign({},c),{googleDriveUrl:e.payload})),n(2,o="viewing"))}(e)},onRequestState:()=>c,onProvideState:e=>n(0,c=e)}),a=new Promise(((e,t)=>{setTimeout((()=>{e()}),3e3)})),d=r.startApp().then((async e=>{var t,s;n(1,l=await pe()),we.set(e),e.currentClientUuid==e.initializerClientUuid?n(2,o="picking"):(null===(t=e.currentAppState)||void 0===t?void 0:t.googleDriveUrl)?n(2,o="viewing"):n(2,o="waiting"),n(0,c=null!==(s=e.currentAppState)&&void 0!==s?s:c)})),g=e=>{f("Relaying message: drive url picked",e),r.relayMessage({type:"receive-google-drive-url",payload:e})},p=async()=>{f("Signed in with google -> refreshing views if necessary"),n(1,l=await pe())};function f(...e){var t;console.log(`${null!==(t=null==s?void 0:s.clientName)&&void 0!==t?t:"New user"} logged: `,...e)}return[c,l,o,a,d,g,p,()=>p(),e=>g(e.detail)]}new class extends te{constructor(e){super(),ee(this,e,dt,ut,o,{})}}({target:document.getElementById("container"),props:{}})})()})();