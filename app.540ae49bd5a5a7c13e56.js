(()=>{"use strict";(()=>{function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function o(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e){return 0===Object.keys(e).length}function l(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function a(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function g(){return d("")}function f(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function h(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}function $(e,t,n){e.classList[n?"add":"remove"](t)}let y;function w(e){y=e}function b(){const e=function(){if(!y)throw new Error("Function called outside component initialization");return y}();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const o=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);i.slice().forEach((t=>{t.call(e,o)}))}}}new Set,new Set;const k=[],_=[],x=[],U=[],S=Promise.resolve();let C=!1;function E(e){x.push(e)}let I=!1;const T=new Set;function A(){if(!I){I=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];w(t),M(t.$$)}for(w(null),k.length=0;_.length;)_.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];T.has(t)||(T.add(t),t())}x.length=0}while(k.length);for(;U.length;)U.pop()();C=!1,I=!1,T.clear()}}function M(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(E)}}const D=new Set;let L,N;function j(){L={r:0,c:[],p:L}}function P(){L.r||i(L.c),L=L.p}function R(e,t){e&&e.i&&(D.delete(e),e.i(t))}function H(e,t,n,i){if(e&&e.o){if(D.has(e))return;D.add(e),L.c.push((()=>{D.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function G(e){e&&e.c()}function O(e,n,r,s){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=e.$$;l&&l.m(n,r),s||E((()=>{const n=c.map(t).filter(o);a?a.push(...n):i(n),e.$$.on_mount=[]})),u.forEach(E)}function z(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function K(t,o,r,s,l,c,u=[-1]){const d=y;w(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:o.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(p.ctx=r?r(t,o.props||{},((e,n,...i)=>{const o=i.length?i[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),g&&function(e,t){-1===e.$$.dirty[0]&&(k.push(e),C||(C=!0,S.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n})):[],p.update(),g=!0,i(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const e=(f=o.target,Array.from(f.childNodes));p.fragment&&p.fragment.l(e),e.forEach(a)}else p.fragment&&p.fragment.c();o.intro&&R(t.$$.fragment),O(t,o.target,o.anchor,o.customElement),A()}var f;w(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(N=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:e}=this.$$;this.$$.on_disconnect=e.map(t).filter(o);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}disconnectedCallback(){i(this.$$.on_disconnect)}$destroy(){z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!s(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}});class q{$destroy(){z(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){this.$$set&&!s(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}class J{constructor(e){this.kosyClient=window.parent,this.kosyApp=e}startApp(){return new Promise(((e,t)=>{window.addEventListener("message",(t=>{let n=t.data;switch(n.type){case"receive-initial-info":e(n.payload);break;case"client-has-joined":this.kosyApp.onClientHasJoined(n.payload);break;case"client-has-left":this.kosyApp.onClientHasLeft(n.clientUuid);break;case"get-app-state":const t=this.kosyApp.onRequestState();this._sendMessageToKosy({type:"receive-app-state",payload:t,clientUuids:n.clientUuids});break;case"set-app-state":this.kosyApp.onProvideState(n.state);break;case"receive-message":this.kosyApp.onReceiveMessage(n.payload)}})),this._sendMessageToKosy({type:"ready-and-listening"})}))}stopApp(){this._sendMessageToKosy({type:"stop-app"})}relayMessage(e){this._sendMessageToKosy({type:"relay-message",payload:e})}_sendMessageToKosy(e){this.kosyClient.postMessage(e,"*")}}const B=JSON.parse('{"l":{"x":"616819909997-uh4gnbl6pjhu4p8ic3vrgof49vejr5nn.apps.googleusercontent.com"}}'),F=new RegExp("^(https://\\w+.google.com)"),W=new RegExp("^(https://(drive|docs).google.com)","i"),X=new RegExp("/d/([-\\w]{25,})");function Y(e){let t=new URL(e.replace("/preview","/edit"));return t.searchParams.append("userstoinvite","@"),t.toString()}const Z=new Date("1970-01-01T00:00:00Z").getTime();function Q(e,t){return gapi.auth2.init({client_id:B.l.x,scope:t}).then((()=>e(gapi.auth2.getAuthInstance())))}async function V(){return await ee("auth2"),Q((e=>e.isSignedIn.get()))}async function ee(e){return new Promise(((t,n)=>gapi.load(e,{callback:()=>t({}),onerror:()=>n(),timeout:5e3,ontimeout:()=>n()})))}function te(t){let n,i;return{c(){n=u("iframe"),h(n,"title","google drive "),n.src!==(i=t[0])&&h(n,"src",i),h(n,"class","svelte-tbe2c")},m(e,t){c(e,n,t)},p(e,[t]){1&t&&n.src!==(i=e[0])&&h(n,"src",i)},i:e,o:e,d(e){e&&a(n)}}}function ne(e,t,n){let i,{url:o}=t;return e.$$set=e=>{"url"in e&&n(1,o=e.url)},e.$$.update=()=>{2&e.$$.dirty&&n(0,i=function(e){return W.test(e)?e.replace("/view","/preview"):`https://drive.google.com/file/d/${function(e){let t=e.match(X);return t&&t.length>1?t[1]:null}(e)}/preview`}(o))},[i,o]}const ie=class extends q{constructor(e){super(),K(this,e,ne,te,r,{url:1})}};function oe(e){let t,n,i,o,r,s;return{c(){t=u("label"),n=d("The file is not shared. Please click "),i=u("a"),o=d("here"),s=d(" to enable file sharing."),h(i,"href",r=Y(e[1])),h(i,"target","_blank"),h(t,"for","open-picker"),t.style.setProperty("color","red",""),h(t,"class","svelte-lwjhup")},m(e,r){c(e,t,r),l(t,n),l(t,i),l(i,o),l(t,s)},p(e,t){2&t&&r!==(r=Y(e[1]))&&h(i,"href",r)},d(e){e&&a(t)}}}function re(t){let n,o,r,s,g,m,y,w,b,k,_,x,U,S,C,E,I,T=t[0]&&oe(t);return{c(){n=u("div"),o=u("div"),o.innerHTML='<h3>Embed google drive</h3> \n        <p class="svelte-lwjhup">In Google Docs/Drive, click the Share button,<br/>\n            copy the link and paste below</p>',r=p(),s=u("div"),g=p(),m=u("input"),y=p(),w=u("button"),b=d("Open file"),_=p(),x=u("p"),x.textContent="OR",U=p(),S=u("button"),S.innerHTML='Pick a file\n        <img alt="google drive icon" src="assets/google-drive-icon.svg"/>',C=p(),T&&T.c(),h(o,"class","svelte-lwjhup"),h(s,"class","gap svelte-lwjhup"),h(m,"type","text"),h(m,"placeholder","E.g. https://drive.google.com/..."),h(m,"class","svelte-lwjhup"),$(m,"invalid",!t[2]&&!t[3]),$(m,"valid",t[3]),h(w,"id","open-file"),w.disabled=k=!t[3],$(w,"valid",t[3]),h(x,"class","svelte-lwjhup"),h(S,"name","open-picker"),h(n,"class","picking svelte-lwjhup")},m(e,i){c(e,n,i),l(n,o),l(n,r),l(n,s),l(n,g),l(n,m),v(m,t[1]),l(n,y),l(n,w),l(w,b),l(n,_),l(n,x),l(n,U),l(n,S),l(n,C),T&&T.m(n,null),E||(I=[f(m,"input",t[7]),f(m,"input",t[8]),f(w,"click",t[9]),f(S,"click",t[10])],E=!0)},p(e,[t]){2&t&&m.value!==e[1]&&v(m,e[1]),12&t&&$(m,"invalid",!e[2]&&!e[3]),8&t&&$(m,"valid",e[3]),8&t&&k!==(k=!e[3])&&(w.disabled=k),8&t&&$(w,"valid",e[3]),e[0]?T?T.p(e,t):(T=oe(e),T.c(),T.m(n,null)):T&&(T.d(1),T=null)},i:e,o:e,d(e){e&&a(n),T&&T.d(),E=!1,i(I)}}}function se(e,t,n){let i,o,r;const s=b();let l=!1,c="",a=()=>{!function(e,t){const n=window.outerWidth/2+window.screenX-t.width/2,i=window.outerHeight/2+window.screenY-t.height/2;window.open("picker.html","_blank",`fullscreen=0,menubar=0,location=0,directories=0,toolbar=0,titlebar=0,width=${t.width},height=${t.height},top=${i},left=${n}`)}(0,{width:1024,height:1024}),window.addEventListener("message",(e=>{if(e.data&&e.data.type)switch(e.data.type){case"google-drive-url-picked":e.data.payload.error?(n(0,l=!0),n(1,c=e.data.payload.url)):s("picked",e.data.payload.url)}}))},u=()=>{s("picked",c)};return e.$$.update=()=>{var t;2&e.$$.dirty&&n(2,i=""===c),6&e.$$.dirty&&n(6,o=!(i||(t=c,t&&F.test(t)))),69&e.$$.dirty&&n(3,r=!i&&!(o||l))},[l,c,i,r,a,u,o,function(){c=this.value,n(1,c)},()=>{n(0,l=!1)},()=>u(),()=>a()]}const le=class extends q{constructor(e){super(),K(this,e,se,re,r,{})}};function ce(e){let t,n,i,o=e[2].clientName+"";return{c(){t=u("p"),n=d(o),i=d(" is picking a file to share")},m(e,o){c(e,t,o),l(t,n),l(t,i)},p(e,t){4&t&&o!==(o=e[2].clientName+"")&&m(n,o)},d(e){e&&a(t)}}}function ae(e){let t,n,i,o,r,s=e[2].clientName+"";return{c(){t=u("p"),n=d(s),i=d(" has picked a file to share, "),o=u("br"),r=d("\n            please log in with google to view it.")},m(e,s){c(e,t,s),l(t,n),l(t,i),l(t,o),l(t,r)},p(e,t){4&t&&s!==(s=e[2].clientName+"")&&m(n,s)},d(e){e&&a(t)}}}function ue(t){let n;return{c(){n=u("p"),n.textContent="To start sharing a file, please log in with google"},m(e,t){c(e,n,t)},p:e,d(e){e&&a(n)}}}function de(t){let n,i,o;return{c(){n=u("button"),n.innerHTML='Log in with Google <img alt="google-icon" src="assets/google-icon.svg"/>',h(n,"class","login")},m(e,r){c(e,n,r),i||(o=f(n,"click",t[5]),i=!0)},p:e,d(e){e&&a(n),i=!1,o()}}}function pe(t){let n,i,o,r,s,d,g,f,m,v;function $(e,t){return e[2].clientUuid===e[3].clientUuid?ue:e[0]?ae:ce}let y=$(t),w=y(t),b=!t[1]&&de(t);return{c(){n=u("div"),i=u("h3"),i.textContent="Google Drive sharing",o=p(),w.c(),r=p(),s=u("div"),d=p(),g=u("div"),g.innerHTML='<img alt="waiting" src="assets/waiting.svg"/>',f=p(),m=u("div"),v=p(),b&&b.c(),h(s,"class","gap svelte-168y7ua"),h(g,"class","img-container svelte-168y7ua"),h(m,"class","gap svelte-168y7ua"),h(n,"class","waiting svelte-168y7ua")},m(e,t){c(e,n,t),l(n,i),l(n,o),w.m(n,null),l(n,r),l(n,s),l(n,d),l(n,g),l(n,f),l(n,m),l(n,v),b&&b.m(n,null)},p(e,[t]){y===(y=$(e))&&w?w.p(e,t):(w.d(1),w=y(e),w&&(w.c(),w.m(n,r))),e[1]?b&&(b.d(1),b=null):b?b.p(e,t):(b=de(e),b.c(),b.m(n,null))},i:e,o:e,d(e){e&&a(n),w.d(),b&&b.d()}}}function ge(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((i=i.apply(e,t||[])).next())}))};let{googleDriveUrl:o}=t,{currentUserIsSignedIntoGoogle:r}=t,{initializer:s}=t,{currentClient:l}=t;const c=b();let a=()=>i(void 0,void 0,void 0,(function*(){yield async function(e){let t=JSON.parse(localStorage.getItem("google_access_token")||"{}");return new Date(Z+((null==t?void 0:t.expires_at)||0)-6e4)<new Date&&(t=await async function(e){return await ee("auth2"),await Q((t=>new Promise(((n,i)=>{try{let o=t.currentUser.get();o.hasGrantedScopes(e)?n(o.getAuthResponse(!0)):t.signIn().then((e=>n(e.getAuthResponse(!0)))).catch((e=>i(e)))}catch(e){i()}}))))}(e),localStorage.setItem("google_access_token",JSON.stringify(t))),t}().catch((()=>Promise.resolve())),c("signed-in")}));return e.$$set=e=>{"googleDriveUrl"in e&&n(0,o=e.googleDriveUrl),"currentUserIsSignedIntoGoogle"in e&&n(1,r=e.currentUserIsSignedIntoGoogle),"initializer"in e&&n(2,s=e.initializer),"currentClient"in e&&n(3,l=e.currentClient)},[o,r,s,l,a,()=>a()]}const fe=class extends q{constructor(e){super(),K(this,e,ge,pe,r,{googleDriveUrl:0,currentUserIsSignedIntoGoogle:1,initializer:2,currentClient:3})}};function he(e){let t,n,i,o;const r=[$e,ve,me],s=[];function l(e,t){return e[0].googleDriveUrl&&e[3]?0:e[2].clientUuid==e[1].clientUuid&&e[3]?1:2}return t=l(e),n=s[t]=r[t](e),{c(){n.c(),i=g()},m(e,n){s[t].m(e,n),c(e,i,n),o=!0},p(e,o){let c=t;t=l(e),t===c?s[t].p(e,o):(j(),H(s[c],1,1,(()=>{s[c]=null})),P(),n=s[t],n?n.p(e,o):(n=s[t]=r[t](e),n.c()),R(n,1),n.m(i.parentNode,i))},i(e){o||(R(n),o=!0)},o(e){H(n),o=!1},d(e){s[t].d(e),e&&a(i)}}}function me(e){let t,n;return t=new fe({props:{initializer:e[1],currentClient:e[2],currentUserIsSignedIntoGoogle:e[3]}}),t.$on("signed-in",e[7]),{c(){G(t.$$.fragment)},m(e,i){O(t,e,i),n=!0},p(e,n){const i={};2&n&&(i.initializer=e[1]),4&n&&(i.currentClient=e[2]),8&n&&(i.currentUserIsSignedIntoGoogle=e[3]),t.$set(i)},i(e){n||(R(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function ve(t){let n,i;return n=new le({}),n.$on("picked",t[6]),{c(){G(n.$$.fragment)},m(e,t){O(n,e,t),i=!0},p:e,i(e){i||(R(n.$$.fragment,e),i=!0)},o(e){H(n.$$.fragment,e),i=!1},d(e){z(n,e)}}}function $e(e){let t,n;return t=new ie({props:{url:e[0].googleDriveUrl}}),{c(){G(t.$$.fragment)},m(e,i){O(t,e,i),n=!0},p(e,n){const i={};1&n&&(i.url=e[0].googleDriveUrl),t.$set(i)},i(e){n||(R(t.$$.fragment,e),n=!0)},o(e){H(t.$$.fragment,e),n=!1},d(e){z(t,e)}}}function ye(e){let t,n,i=e[1]&&e[2]&&he(e);return{c(){i&&i.c(),t=g()},m(e,o){i&&i.m(e,o),c(e,t,o),n=!0},p(e,[n]){e[1]&&e[2]?i?(i.p(e,n),6&n&&R(i,1)):(i=he(e),i.c(),R(i,1),i.m(t.parentNode,t)):i&&(j(),H(i,1,1,(()=>{i=null})),P())},i(e){n||(R(i),n=!0)},o(e){H(i),n=!1},d(e){i&&i.d(e),e&&a(t)}}}function we(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(o,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function l(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,l)}c((i=i.apply(e,t||[])).next())}))};let o,r,s={googleDriveUrl:null},l=!1,c=new J({onClientHasJoined:e=>{},onClientHasLeft:e=>function(e){e!==o.clientUuid||s.googleDriveUrl||c.stopApp()}(e),onReceiveMessage:e=>{!function(e){switch(e.type){case"receive-google-drive-url":d("Received a message from Kosy: ",e),n(0,s.googleDriveUrl=e.payload,s)}}(e)},onRequestState:()=>s,onProvideState:e=>function(e){n(0,s=e)}(e)});c.startApp().then((e=>i(void 0,void 0,void 0,(function*(){var t;n(3,l=yield V()),n(1,o=e.clients[e.initializerClientUuid]),n(2,r=e.clients[e.currentClientUuid]),n(0,s=null!==(t=e.currentAppState)&&void 0!==t?t:s)}))));let a=e=>{d("Relaying message: drive url picked",e),c.relayMessage({type:"receive-google-drive-url",payload:e})},u=()=>i(void 0,void 0,void 0,(function*(){d("Signed in with google -> refreshing views if necessary"),n(3,l=yield V())}));function d(...e){var t;console.log(`${null!==(t=null==r?void 0:r.clientName)&&void 0!==t?t:"New user"} logged: `,...e)}return[s,o,r,l,a,u,e=>a(e.detail),()=>u()]}new class extends q{constructor(e){super(),K(this,e,we,ye,r,{})}}({target:document.getElementById("container"),props:{}})})()})();