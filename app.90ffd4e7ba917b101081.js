(()=>{"use strict";(()=>{function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function s(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function l(e){return 0===Object.keys(e).length}function r(e,t,n,i){return e[1]&&i?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](i(t))):n.ctx}new Set;let c,a=!1;function u(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function d(e,t){a?(function(e){if(e.hydrate_init)return;e.hydrate_init=!0;const t=e.childNodes,n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=u(1,s+1,(e=>t[n[e]].claim_order),t[e].claim_order)-1;i[e]=n[o]+1;const l=o+1;n[l]=e,s=Math.max(l,s)}const o=[],l=[];let r=t.length-1;for(let e=n[s]+1;0!=e;e=i[e-1]){for(o.push(t[e-1]);r>=e;r--)l.push(t[r]);r--}for(;r>=0;r--)l.push(t[r]);o.reverse(),l.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<l.length;t++){for(;n<o.length&&l[t].claim_order>=o[n].claim_order;)n++;const i=n<o.length?o[n]:null;e.insertBefore(l[t],i)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild),t!==e.actual_end_child?e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling):t.parentNode!==e&&e.appendChild(t)}function h(e,t,n){a&&!n?d(e,t):(t.parentNode!==e||n&&t.nextSibling!==n)&&e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function p(e){return document.createElement(e)}function f(e){return document.createTextNode(e)}function m(){return f(" ")}function $(){return f("")}function v(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function y(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function w(e,t){e.value=null==t?"":t}function k(e,t,n){e.classList[n?"add":"remove"](t)}function _(e){c=e}function x(){if(!c)throw new Error("Function called outside component initialization");return c}function C(){const e=x();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const s=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);i.slice().forEach((t=>{t.call(e,s)}))}}}function M(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}new Set;const U=[],N=[],A=[],T=[],S=Promise.resolve();let I=!1;function E(e){A.push(e)}let R=!1;const P=new Set;function z(){if(!R){R=!0;do{for(let e=0;e<U.length;e+=1){const t=U[e];_(t),D(t.$$)}for(_(null),U.length=0;N.length;)N.pop()();for(let e=0;e<A.length;e+=1){const t=A[e];P.has(t)||(P.add(t),t())}A.length=0}while(U.length);for(;T.length;)T.pop()();I=!1,R=!1,P.clear()}}function D(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const L=new Set;let j,H;function G(){j={r:0,c:[],p:j}}function O(){j.r||i(j.c),j=j.p}function K(e,t){e&&e.i&&(L.delete(e),e.i(t))}function q(e,t,n,i){if(e&&e.o){if(L.has(e))return;L.add(e),j.c.push((()=>{L.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function B(e,t){const n=t.token={};function i(e,i,s,o){if(t.token!==n)return;t.resolved=o;let l=t.ctx;void 0!==s&&(l=l.slice(),l[s]=o);const r=e&&(t.current=e)(l);let c=!1;t.block&&(t.blocks?t.blocks.forEach(((e,n)=>{n!==i&&e&&(G(),q(e,1,1,(()=>{t.blocks[n]===e&&(t.blocks[n]=null)})),O())})):t.block.d(1),r.c(),K(r,1),r.m(t.mount(),t.anchor),c=!0),t.block=r,t.blocks&&(t.blocks[i]=r),c&&z()}if((s=e)&&"object"==typeof s&&"function"==typeof s.then){const n=x();if(e.then((e=>{_(n),i(t.then,1,t.value,e),_(null)}),(e=>{if(_(n),i(t.catch,2,t.error,e),_(null),!t.hasCatch)throw e})),t.current!==t.pending)return i(t.pending,0),!0}else{if(t.current!==t.then)return i(t.then,1,t.value,e),!0;t.resolved=e}var s}function J(e,t,n){const i=t.slice(),{resolved:s}=e;e.current===e.then&&(i[e.value]=s),e.current===e.catch&&(i[e.error]=s),e.block.p(i,n)}function F(e){e&&e.c()}function W(e,n,o,l){const{fragment:r,on_mount:c,on_destroy:a,after_update:u}=e.$$;r&&r.m(n,o),l||E((()=>{const n=c.map(t).filter(s);a?a.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(E)}function V(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,s,o,l,r,u,d=[-1]){const h=c;_(t);const p=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:s.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let f=!1;if(p.ctx=o?o(t,s.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return p.ctx&&r(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),f&&function(e,t){-1===e.$$.dirty[0]&&(U.push(e),I||(I=!0,S.then(z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],p.update(),f=!0,i(p.before_update),p.fragment=!!l&&l(p.ctx),s.target){if(s.hydrate){a=!0;const e=(m=s.target,Array.from(m.childNodes));p.fragment&&p.fragment.l(e),e.forEach(g)}else p.fragment&&p.fragment.c();s.intro&&K(t.$$.fragment),W(t,s.target,s.anchor,s.customElement),a=!1,z()}var m;_(h)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(H=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(s);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){V(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class Y{$destroy(){V(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!l(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class Z{constructor(e){this.kosyClient=window.parent,this.latestMessageNumber=0,this.kosyApp=e}dictionaryToArray(e){let t=[];for(const n in e)e.hasOwnProperty(n)&&t.push([n,e[n]]);return t}startApp(){return this.initialInfoPromise=new Promise(((e,t)=>{window.addEventListener("message",(t=>{let n=t.data;switch(n.type){case"receive-initial-info":this.latestMessageNumber=n.latestMessageNumber,this.clients=n.payload.clients,this.hostClientUuid=n.payload.initializerClientUuid,this.log("Resolving initial info promise with: ",n.payload),e(n.payload);break;case"set-client-info":{let e=n.clients,t=n.hostClientUuid;this.initialInfoPromise.then((n=>{let i=this.dictionaryToArray(e).filter((e=>!this.clients[e[0]])),s=this.dictionaryToArray(this.clients).filter((t=>!e[t[0]])),o=this.latestMessageNumber;this.hostClientUuid!==t&&this._relayMessageToClients(n,{type:"_host-has-changed",clientUuid:t},++o),i.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-joined",clientInfo:e[1]},++o))),s.forEach((e=>this._relayMessageToClients(n,{type:"_client-has-left",clientUuid:e[0]},++o))),this.clients=e,this.hostClientUuid=t}));break}case"get-app-state":{let e=n.clientUuids;this.log("Get app state received -> sending app state");const t=this.kosyApp.onRequestState();this._sendMessageToKosy({type:"receive-app-state",state:t,clientUuids:e,latestMessageNumber:this.latestMessageNumber});break}case"set-app-state":this.latestMessageNumber=n.latestMessageNumber;let t=n.state;this.initialInfoPromise.then((()=>{this.log("Received app state from Kosy -> setting app state"),this.kosyApp.onProvideState(t)}));break;case"receive-message-as-host":this._handleReceiveMessageAsHost(n);break;case"receive-message-as-client":this._handleReceiveMessageAsClient(n)}})),this._sendMessageToKosy({type:"ready-and-listening"})})),this.initialInfoPromise}stopApp(){this._sendMessageToKosy({type:"stop-app"})}relayMessage(e){this.log("Relaying client message to host: ",e),this._sendMessageToKosy({type:"relay-message-to-host",message:e})}_relayMessageToClients(e,t,n){this.log("Relaying host to client message: ",t),this._sendMessageToKosy({type:"relay-message-to-clients",sentByClientUuid:e.currentClientUuid,message:t,messageNumber:n})}_sendMessageToKosy(e){this.kosyClient.postMessage(e,"*")}_handleReceiveMessageAsClientRecursive(e,t,n){var i,s,o,l,r,c;if(this.latestMessageNumber===e.messageNumber-1){switch(e.message.type){case"_host-has-changed":{let t=e.message.clientUuid;this.hostClientUuid=t,null===(s=(i=this.kosyApp).onHostHasChanged)||void 0===s||s.call(i,t);break}case"_client-has-joined":{let t=e.message.clientInfo;this.clients[t.clientUuid]=t,null===(l=(o=this.kosyApp).onClientHasJoined)||void 0===l||l.call(o,t);break}case"_client-has-left":{let t=e.message.clientUuid;this.clients[t]=null,null===(c=(r=this.kosyApp).onClientHasLeft)||void 0===c||c.call(r,t);break}default:this.kosyApp.onReceiveMessageAsClient(e.message)}this.latestMessageNumber=e.messageNumber}else n<50&&this.latestMessageNumber<e.messageNumber?setTimeout((()=>this._handleReceiveMessageAsClientRecursive(e,t,n+1)),100):(this.log("Timeout on processing message as client: ",e.message),this.log("Wait for Kosy to fix this mess..."))}_handleReceiveMessageAsClient(e){this.initialInfoPromise.then((t=>{this.log("Received message as client, processing: ",e.message),this._handleReceiveMessageAsClientRecursive(e,t,0)}))}_handleReceiveMessageAsHost(e){this.initialInfoPromise.then((t=>{this.log("Trying to handle message as host");const n=this.kosyApp.onReceiveMessageAsHost(e.message);n&&this._relayMessageToClients(t,n,this.latestMessageNumber+1)}))}log(...e){"1"===localStorage.getItem("debug-mode")&&console.log("From kosy-app-api: ",...e)}}const Q=JSON.parse('{"l":{"c":"AIzaSyDFUoIEXWGk0NPtqPjCadqnEpcgxydw9ko","x":"1055348097262-m31jmp68886tmq7hmsa7pgg0fopb9dot.apps.googleusercontent.com"}}'),ee=new RegExp("^(https://\\w+.google.com)"),te=new RegExp("^(https://(drive|docs).google.com)","i"),ne=new RegExp("/d/([-\\w]{25,})"),ie="https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly",se=new Date("1970-01-01T00:00:00Z").getTime();function oe(e){let t=new URL(e.replace("/preview","/edit"));return t.searchParams.append("userstoinvite","@"),t.toString()}async function le(e){let t=re(e);await de("client");let n=await ce();gapi.client.setApiKey(Q.l.c),gapi.client.setToken({access_token:n.access_token});try{let n=await gapi.client.request({path:`https://www.googleapis.com/drive/v3/files/${t}?fields=webViewLink`}),i=JSON.parse((null==n?void 0:n.body)||"{}").webViewLink;if(i){if(te.test(i))return Promise.resolve(e.replace("/view","/preview"));{let e=re(i);return Promise.resolve(`https://drive.google.com/file/d/${e}/preview`)}}return Promise.reject()}catch(e){return Promise.reject()}}function re(e){let t=e.match(ne);return t&&t.length>1?t[1]:null}async function ce(){let e=JSON.parse(localStorage.getItem("google_access_token")||"{}");return new Date(se+((null==e?void 0:e.expires_at)||6e5)-6e4)<new Date&&(e=await async function(){return await ae((e=>new Promise(((t,n)=>{try{let i=e.currentUser.get();i.hasGrantedScopes(ie)?t(i.getAuthResponse(!0)):e.signIn().then((e=>t(e.getAuthResponse(!0)))).catch((e=>n(e)))}catch(e){n()}}))))}(),localStorage.setItem("google_access_token",JSON.stringify(e))),e}async function ae(e){return await de("auth2"),gapi.auth2.init({client_id:Q.l.x,scope:ie}).then((()=>e(gapi.auth2.getAuthInstance())))}async function ue(){return ae((e=>e.isSignedIn.get()&&e.currentUser.get().hasGrantedScopes(ie)))}async function de(e){return new Promise(((t,n)=>gapi.load(e,{callback:()=>t({}),onerror:()=>n(),timeout:5e3,ontimeout:()=>n()})))}function he(t){let n,i,s,o,l,r,c,a,u,$;return{c(){n=p("div"),i=p("div"),s=p("h3"),s.textContent="You don't have access to this file",o=m(),l=p("p"),r=f(t[0]),c=m(),a=p("div"),u=m(),$=p("div"),$.innerHTML='<img class="access-denied svelte-fl2rw0" src="assets/access-denied.svg" alt="access-denied"/>',y(a,"class","gap"),y(n,"class","center-content")},m(e,t){h(e,n,t),d(n,i),d(i,s),d(i,o),d(i,l),d(l,r),d(n,c),d(n,a),d(n,u),d(n,$)},p(e,[t]){1&t&&b(r,e[0])},i:e,o:e,d(e){e&&g(n)}}}function ge(e,t,n){let{msg:i}=t;return e.$$set=e=>{"msg"in e&&n(0,i=e.msg)},[i]}const pe=class extends Y{constructor(e){super(),X(this,e,ge,he,o,{msg:0})}};function fe(e){let t,n,i,s;const o=[$e,me],l=[];function r(e,t){return e[0].clientUuid!==e[1].clientUuid?0:1}return t=r(e),n=l[t]=o[t](e),{c(){n.c(),i=$()},m(e,n){l[t].m(e,n),h(e,i,n),s=!0},p(e,s){let c=t;t=r(e),t===c?l[t].p(e,s):(G(),q(l[c],1,1,(()=>{l[c]=null})),O(),n=l[t],n?n.p(e,s):(n=l[t]=o[t](e),n.c()),K(n,1),n.m(i.parentNode,i))},i(e){s||(K(n),s=!0)},o(e){q(n),s=!1},d(e){l[t].d(e),e&&g(i)}}}function me(t){let n,i;return n=new pe({props:{msg:"This should not occur, but it did, and we're very sorry :("}}),{c(){F(n.$$.fragment)},m(e,t){W(n,e,t),i=!0},p:e,i(e){i||(K(n.$$.fragment,e),i=!0)},o(e){q(n.$$.fragment,e),i=!1},d(e){V(n,e)}}}function $e(e){let t,n;return t=new pe({props:{msg:"Please ask "+e[0].clientName+" to share the file with you."}}),{c(){F(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.msg="Please ask "+e[0].clientName+" to share the file with you."),t.$set(i)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function ve(t){let n,i;return{c(){n=p("iframe"),y(n,"title","google drive "),n.src!==(i=t[4])&&y(n,"src",i),y(n,"class","svelte-tbe2c")},m(e,t){h(e,n,t)},p(e,t){4&t&&n.src!==(i=e[4])&&y(n,"src",i)},i:e,o:e,d(e){e&&g(n)}}}function ye(t){let n;return{c(){n=p("div")},m(e,t){h(e,n,t)},p:e,i:e,o:e,d(e){e&&g(n)}}}function be(e){let t,n,i,s={ctx:e,current:null,token:null,hasCatch:!0,pending:ye,then:ve,catch:fe,value:4,blocks:[,,,]};return B(n=e[2],s),{c(){t=$(),s.block.c()},m(e,n){h(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t,i=!0},p(t,[i]){e=t,s.ctx=e,4&i&&n!==(n=e[2])&&B(n,s)||J(s,e,i)},i(e){i||(K(s.block),i=!0)},o(e){for(let e=0;e<3;e+=1)q(s.blocks[e]);i=!1},d(e){e&&g(t),s.block.d(e),s.token=null,s=null}}}function we(e,t,n){let i,{url:s}=t,{initializer:o}=t,{currentClient:l}=t;return e.$$set=e=>{"url"in e&&n(3,s=e.url),"initializer"in e&&n(0,o=e.initializer),"currentClient"in e&&n(1,l=e.currentClient)},e.$$.update=()=>{8&e.$$.dirty&&n(2,i=le(s))},[o,l,i,s]}const ke=class extends Y{constructor(e){super(),X(this,e,we,be,o,{url:3,initializer:0,currentClient:1})}};function _e(e){let t,n,s,o;const l=e[5].default,c=function(e,t,n,i){if(e){const i=r(e,t,n,null);return e[0](i)}}(l,e,e[4]);return{c(){t=p("button"),c&&c.c(),y(t,"class",e[1]),t.disabled=e[0]},m(i,l){h(i,t,l),c&&c.m(t,null),n=!0,s||(o=[v(t,"click",e[6]),v(t,"dblclick",e[7]),v(t,"focus",e[8])],s=!0)},p(e,[i]){c&&c.p&&(!n||16&i)&&function(e,t,n,i,s,o,l){const c=function(e,t,n,i){if(e[2]&&i){const s=e[2](i(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let i=0;i<n;i+=1)e[i]=t.dirty[i]|s[i];return e}return t.dirty|s}return t.dirty}(t,i,s,null);if(c){const s=r(t,n,i,null);e.p(s,c)}}(c,l,e,e[4],n?i:-1),(!n||2&i)&&y(t,"class",e[1]),(!n||1&i)&&(t.disabled=e[0])},i(e){n||(K(c,e),n=!0)},o(e){q(c,e),n=!1},d(e){e&&g(t),c&&c.d(e),s=!1,i(o)}}}function xe(e,t,n){let{$$slots:i={},$$scope:s}=t,{size:o="regular"}=t,{importance:l}=t,{disabled:r=!1}=t,c="";return e.$$set=e=>{"size"in e&&n(2,o=e.size),"importance"in e&&n(3,l=e.importance),"disabled"in e&&n(0,r=e.disabled),"$$scope"in e&&n(4,s=e.$$scope)},e.$$.update=()=>{if(12&e.$$.dirty){let e=["re-button","size-"+o];l&&e.push("importance-"+l),n(1,c=e.join(" "))}},[r,c,o,l,s,i,function(t){M.call(this,e,t)},function(t){M.call(this,e,t)},function(t){M.call(this,e,t)}]}const Ce=class extends Y{constructor(e){super(),X(this,e,xe,_e,o,{size:2,importance:3,disabled:0})}};function Me(e){let t;return{c(){t=p("span"),t.textContent="Open file",y(t,"class","text")},m(e,n){h(e,t,n)},d(e){e&&g(t)}}}function Ue(e){let t,n,i;return{c(){t=p("span"),t.textContent="Pick a file",n=m(),i=p("div"),i.innerHTML='<img class="icon-right" alt="google drive icon" src="assets/google-drive-icon.svg"/>',y(t,"class","text"),y(i,"class","svelte-1o7e8h1")},m(e,s){h(e,t,s),h(e,n,s),h(e,i,s)},d(e){e&&g(t),e&&g(n),e&&g(i)}}}function Ne(e){let t,n,i,s,o,l;return{c(){t=p("label"),n=f("The file you picked is not a shared file. Please click "),i=p("a"),s=f("here"),l=f(" to enable file sharing."),y(i,"href",o=oe(e[2])),y(i,"target","_blank"),y(t,"class","error-label svelte-1o7e8h1"),y(t,"for","open-picker")},m(e,o){h(e,t,o),d(t,n),d(t,i),d(i,s),d(t,l)},p(e,t){4&t&&o!==(o=oe(e[2]))&&y(i,"href",o)},d(e){e&&g(t)}}}function Ae(e){let t;return{c(){t=p("label"),t.textContent="The file you tried to share with the table is not available to you.",y(t,"class","error-label svelte-1o7e8h1"),y(t,"for","open-picker")},m(e,n){h(e,t,n)},d(e){e&&g(t)}}}function Te(e){let t,n,s,o,l,r,c,a,u,f,$,b,_,x,C,M,U;a=new Ce({props:{importance:"primary",disabled:!e[4],$$slots:{default:[Me]},$$scope:{ctx:e}}}),a.$on("click",e[10]),b=new Ce({props:{importance:"secondary",$$slots:{default:[Ue]},$$scope:{ctx:e}}}),b.$on("click",e[11]);let N=e[0]&&Ne(e),A=e[1]&&Ae();return{c(){t=p("div"),n=p("div"),n.innerHTML='<h3>Embed google drive</h3> \n        <p class="svelte-1o7e8h1">In Google Docs/Drive, click the Share button,<br/>\n            copy the link and paste below</p>',s=m(),o=p("div"),l=m(),r=p("input"),c=m(),F(a.$$.fragment),u=m(),f=p("p"),f.textContent="OR",$=m(),F(b.$$.fragment),_=m(),N&&N.c(),x=m(),A&&A.c(),y(n,"class","svelte-1o7e8h1"),y(o,"class","gap svelte-1o7e8h1"),y(r,"type","text"),y(r,"placeholder","E.g. https://drive.google.com/..."),y(r,"class","svelte-1o7e8h1"),k(r,"invalid",!e[3]&&!e[4]),k(r,"valid",e[4]),y(f,"class","svelte-1o7e8h1"),y(t,"class","center-content picking svelte-1o7e8h1")},m(i,g){h(i,t,g),d(t,n),d(t,s),d(t,o),d(t,l),d(t,r),w(r,e[2]),d(t,c),W(a,t,null),d(t,u),d(t,f),d(t,$),W(b,t,null),d(t,_),N&&N.m(t,null),d(t,x),A&&A.m(t,null),C=!0,M||(U=[v(r,"input",e[8]),v(r,"input",e[9])],M=!0)},p(e,[n]){4&n&&r.value!==e[2]&&w(r,e[2]),24&n&&k(r,"invalid",!e[3]&&!e[4]),16&n&&k(r,"valid",e[4]);const i={};16&n&&(i.disabled=!e[4]),32768&n&&(i.$$scope={dirty:n,ctx:e}),a.$set(i);const s={};32768&n&&(s.$$scope={dirty:n,ctx:e}),b.$set(s),e[0]?N?N.p(e,n):(N=Ne(e),N.c(),N.m(t,x)):N&&(N.d(1),N=null),e[1]?A||(A=Ae(),A.c(),A.m(t,null)):A&&(A.d(1),A=null)},i(e){C||(K(a.$$.fragment,e),K(b.$$.fragment,e),C=!0)},o(e){q(a.$$.fragment,e),q(b.$$.fragment,e),C=!1},d(e){e&&g(t),V(a),V(b),N&&N.d(),A&&A.d(),M=!1,i(U)}}}function Se(e,t,n){let i,s,o;const l=C();let r=!1,c=!1,a="",u=()=>function(e,t){const n=window.outerWidth/2+window.screenX-t.width/2,i=window.outerHeight/2+window.screenY-t.height/2;window.open("picker.html","_blank",`fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${t.width},height=${t.height},top=${i},left=${n}`)}(0,{width:1024,height:1024}),d=e=>{if(e.data&&e.data.type)switch(e.data.type){case"google-drive-url-picked":e.data.payload.error?(n(0,r=!0),n(2,a=e.data.payload.url)):l("picked",e.data.payload.url)}};var h;window.addEventListener("message",d),h=()=>window.removeEventListener("message",d),x().$$.on_destroy.push(h);let g=()=>{le(a).then((e=>l("picked",e))).catch((()=>{n(1,c=!0)}))};return e.$$.update=()=>{var t;4&e.$$.dirty&&n(3,i=""===a),12&e.$$.dirty&&n(7,s=!(i||(t=a,t&&ee.test(t)))),139&e.$$.dirty&&n(4,o=!i&&!(s||r||c))},[r,c,a,i,o,u,g,s,function(){a=this.value,n(2,a)},()=>{n(0,r=!1),n(1,c=!1)},()=>g(),()=>u()]}const Ie=class extends Y{constructor(e){super(),X(this,e,Se,Te,o,{})}};function Ee(e){let t,n,i,s=e[2].clientName+"";return{c(){t=p("p"),n=f(s),i=f(" is picking a file to share")},m(e,s){h(e,t,s),d(t,n),d(t,i)},p(e,t){4&t&&s!==(s=e[2].clientName+"")&&b(n,s)},d(e){e&&g(t)}}}function Re(e){let t,n,i,s,o,l=e[2].clientName+"";return{c(){t=p("p"),n=f(l),i=f(" has picked a file to share, "),s=p("br"),o=f("\n            please log in with google to view it.")},m(e,l){h(e,t,l),d(t,n),d(t,i),d(t,s),d(t,o)},p(e,t){4&t&&l!==(l=e[2].clientName+"")&&b(n,l)},d(e){e&&g(t)}}}function Pe(t){let n;return{c(){n=p("p"),n.textContent="To start sharing a file, please log in with google"},m(e,t){h(e,n,t)},p:e,d(e){e&&g(n)}}}function ze(e){let t,n;return t=new Ce({props:{importance:"secondary",$$slots:{default:[De]},$$scope:{ctx:e}}}),t.$on("click",e[5]),{c(){F(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,n){const i={};256&n&&(i.$$scope={dirty:n,ctx:e}),t.$set(i)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function De(e){let t,n,i,s;return{c(){t=p("span"),t.textContent="Log in with Google",n=m(),i=p("img"),y(t,"class","text"),y(i,"class","icon-right"),y(i,"alt","google-icon"),i.src!==(s="assets/google-icon.svg")&&y(i,"src","assets/google-icon.svg")},m(e,s){h(e,t,s),h(e,n,s),h(e,i,s)},d(e){e&&g(t),e&&g(n),e&&g(i)}}}function Le(e){let t,n,i,s,o,l,r,c,a,u,f;function $(e,t){return e[2].clientUuid===e[3].clientUuid?Pe:e[0]?Re:Ee}let v=$(e),b=v(e),w=!e[1]&&ze(e);return{c(){t=p("div"),n=p("h3"),n.textContent="Google Drive sharing",i=m(),b.c(),s=m(),o=p("div"),l=m(),r=p("div"),r.innerHTML='<img class="waiting-icon svelte-1x6eg8j" alt="waiting" src="assets/waiting.svg"/>',c=m(),a=p("div"),u=m(),w&&w.c(),y(o,"class","gap svelte-1x6eg8j"),y(a,"class","gap svelte-1x6eg8j"),y(t,"class","center-content waiting svelte-1x6eg8j")},m(e,g){h(e,t,g),d(t,n),d(t,i),b.m(t,null),d(t,s),d(t,o),d(t,l),d(t,r),d(t,c),d(t,a),d(t,u),w&&w.m(t,null),f=!0},p(e,[n]){v===(v=$(e))&&b?b.p(e,n):(b.d(1),b=v(e),b&&(b.c(),b.m(t,s))),e[1]?w&&(G(),q(w,1,1,(()=>{w=null})),O()):w?(w.p(e,n),2&n&&K(w,1)):(w=ze(e),w.c(),K(w,1),w.m(t,null))},i(e){f||(K(w),f=!0)},o(e){q(w),f=!1},d(e){e&&g(t),b.d(),w&&w.d()}}}function je(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function l(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}c((i=i.apply(e,t||[])).next())}))};let{googleDriveUrl:s}=t,{currentUserIsSignedIntoGoogle:o}=t,{initializer:l}=t,{currentClient:r}=t;const c=C();let a=()=>i(void 0,void 0,void 0,(function*(){yield ce().catch((()=>Promise.resolve())),c("signed-in")}));return e.$$set=e=>{"googleDriveUrl"in e&&n(0,s=e.googleDriveUrl),"currentUserIsSignedIntoGoogle"in e&&n(1,o=e.currentUserIsSignedIntoGoogle),"initializer"in e&&n(2,l=e.initializer),"currentClient"in e&&n(3,r=e.currentClient)},[s,o,l,r,a,()=>a()]}const He=class extends Y{constructor(e){super(),X(this,e,je,Le,o,{googleDriveUrl:0,currentUserIsSignedIntoGoogle:1,initializer:2,currentClient:3})}};function Ge(t){let n,i,s;return{c(){n=p("link"),i=m(),s=p("div"),s.innerHTML='<h2 style="color: red"><i class="fas fa-exclamation-circle"></i> Oops</h2> \n        <span style="color: red">An error has occured while initializing the google drive app</span>',y(n,"rel","stylesheet"),y(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),y(s,"class","center-content")},m(e,t){h(e,n,t),h(e,i,t),h(e,s,t)},p:e,i:e,o:e,d(e){e&&g(n),e&&g(i),e&&g(s)}}}function Oe(e){let t,n,i,s;const o=[Be,qe,Ke],l=[];function r(e,t){return e[0].googleDriveUrl&&e[3]?0:e[2].clientUuid==e[1].clientUuid&&e[3]?1:2}return t=r(e),n=l[t]=o[t](e),{c(){n.c(),i=$()},m(e,n){l[t].m(e,n),h(e,i,n),s=!0},p(e,s){let c=t;t=r(e),t===c?l[t].p(e,s):(G(),q(l[c],1,1,(()=>{l[c]=null})),O(),n=l[t],n?n.p(e,s):(n=l[t]=o[t](e),n.c()),K(n,1),n.m(i.parentNode,i))},i(e){s||(K(n),s=!0)},o(e){q(n),s=!1},d(e){l[t].d(e),e&&g(i)}}}function Ke(e){let t,n;return t=new He({props:{initializer:e[1],currentClient:e[2],currentUserIsSignedIntoGoogle:e[3],googleDriveUrl:e[0].googleDriveUrl}}),t.$on("signed-in",e[9]),{c(){F(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.initializer=e[1]),4&n&&(i.currentClient=e[2]),8&n&&(i.currentUserIsSignedIntoGoogle=e[3]),1&n&&(i.googleDriveUrl=e[0].googleDriveUrl),t.$set(i)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function qe(t){let n,i;return n=new Ie({}),n.$on("picked",t[8]),{c(){F(n.$$.fragment)},m(e,t){W(n,e,t),i=!0},p:e,i(e){i||(K(n.$$.fragment,e),i=!0)},o(e){q(n.$$.fragment,e),i=!1},d(e){V(n,e)}}}function Be(e){let t,n;return t=new ke({props:{initializer:e[1],currentClient:e[2],url:e[0].googleDriveUrl}}),{c(){F(t.$$.fragment)},m(e,i){W(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.initializer=e[1]),4&n&&(i.currentClient=e[2]),1&n&&(i.url=e[0].googleDriveUrl),t.$set(i)},i(e){n||(K(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function Je(t){let n,i,s={ctx:t,current:null,token:null,hasCatch:!1,pending:Ve,then:We,catch:Fe};return B(i=t[4],s),{c(){n=$(),s.block.c()},m(e,t){h(e,n,t),s.block.m(e,s.anchor=t),s.mount=()=>n.parentNode,s.anchor=n},p(e,n){t=e},i:e,o:e,d(e){e&&g(n),s.block.d(e),s.token=null,s=null}}}function Fe(t){return{c:e,m:e,d:e}}function We(e){let t,n,i;return{c(){t=p("link"),n=m(),i=p("div"),i.innerHTML='<span><i class="fa fa-circle-notch fa-spin"></i> Loading google drive app</span>',y(t,"rel","stylesheet"),y(t,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"),y(i,"class","center-content")},m(e,s){h(e,t,s),h(e,n,s),h(e,i,s)},d(e){e&&g(t),e&&g(n),e&&g(i)}}}function Ve(e){let t;return{c(){t=p("div")},m(e,n){h(e,t,n)},d(e){e&&g(t)}}}function Xe(e){let t,n,i,s={ctx:e,current:null,token:null,hasCatch:!0,pending:Je,then:Oe,catch:Ge,error:17,blocks:[,,,]};return B(n=e[5],s),{c(){t=$(),s.block.c()},m(e,n){h(e,t,n),s.block.m(e,s.anchor=n),s.mount=()=>t.parentNode,s.anchor=t,i=!0},p(t,[n]){J(s,e=t,n)},i(e){i||(K(s.block),i=!0)},o(e){for(let e=0;e<3;e+=1)q(s.blocks[e]);i=!1},d(e){e&&g(t),s.block.d(e),s.token=null,s=null}}}function Ye(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function l(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,r)}c((i=i.apply(e,t||[])).next())}))};let s,o,l={googleDriveUrl:null},r=!1,c=new Z({onClientHasLeft:e=>function(e){e!==s.clientUuid||l.googleDriveUrl||c.stopApp()}(e),onReceiveMessageAsHost:e=>e,onReceiveMessageAsClient:e=>{!function(e){switch(e.type){case"receive-google-drive-url":g("Received a message from Kosy: ",e),n(0,l.googleDriveUrl=e.payload,l)}}(e)},onRequestState:()=>l,onProvideState:e=>function(e){n(0,l=e)}(e)}),a=new Promise(((e,t)=>{setTimeout((()=>{e()}),3e3)})),u=c.startApp().then((e=>i(void 0,void 0,void 0,(function*(){var t;n(3,r=yield ue()),n(1,s=e.clients[e.initializerClientUuid]),n(2,o=e.clients[e.currentClientUuid]),n(0,l=null!==(t=e.currentAppState)&&void 0!==t?t:l)})))),d=e=>{g("Relaying message: drive url picked",e),c.relayMessage({type:"receive-google-drive-url",payload:e})},h=()=>i(void 0,void 0,void 0,(function*(){g("Signed in with google -> refreshing views if necessary"),n(3,r=yield ue())}));function g(...e){var t;console.log(`${null!==(t=null==o?void 0:o.clientName)&&void 0!==t?t:"New user"} logged: `,...e)}return[l,s,o,r,a,u,d,h,e=>d(e.detail),()=>h()]}new class extends Y{constructor(e){super(),X(this,e,Ye,Xe,o,{})}}({target:document.getElementById("container"),props:{}})})()})();