function z(){}function Fe(e,t){for(const n in t)e[n]=t[n];return e}function Ve(e){return e()}function je(){return Object.create(null)}function F(e){e.forEach(Ve)}function Ke(e){return typeof e=="function"}function We(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function qe(e){return Object.keys(e).length===0}function He(e,t,n,l){if(e){const r=Me(e,t,n,l);return e[0](r)}}function Me(e,t,n,l){return e[1]&&l?Fe(n.ctx.slice(),e[1](l(t))):n.ctx}function Je(e,t,n,l){if(e[2]&&l){const r=e[2](l(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(t.dirty.length,r.length);for(let o=0;o<s;o+=1)a[o]=t.dirty[o]|r[o];return a}return t.dirty|r}return t.dirty}function Xe(e,t,n,l,r,a){if(r){const s=Me(t,n,l,a);e.p(s,r)}}function Ye(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let l=0;l<n;l++)t[l]=-1;return t}return-1}let oe=!1;function ze(){oe=!0}function Ge(){oe=!1}function Qe(e,t,n,l){for(;e<t;){const r=e+(t-e>>1);n(r)<=l?e=r+1:t=r}return e}function Ze(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const i=[];for(let u=0;u<t.length;u++){const d=t[u];d.claim_order!==void 0&&i.push(d)}t=i}const n=new Int32Array(t.length+1),l=new Int32Array(t.length);n[0]=-1;let r=0;for(let i=0;i<t.length;i++){const u=t[i].claim_order,d=(r>0&&t[n[r]].claim_order<=u?r+1:Qe(1,r,v=>t[n[v]].claim_order,u))-1;l[i]=n[d]+1;const y=d+1;n[y]=i,r=Math.max(y,r)}const a=[],s=[];let o=t.length-1;for(let i=n[r]+1;i!=0;i=l[i-1]){for(a.push(t[i-1]);o>=i;o--)s.push(t[o]);o--}for(;o>=0;o--)s.push(t[o]);a.reverse(),s.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<s.length;i++){for(;u<a.length&&s[i].claim_order>=a[u].claim_order;)u++;const d=u<a.length?a[u]:null;e.insertBefore(s[i],d)}}function c(e,t){if(oe){for(Ze(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function G(e,t,n){oe&&!n?c(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function m(e){return document.createElement(e)}function w(e){return document.createTextNode(e)}function D(){return w(" ")}function xe(){return w("")}function J(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function b(e){return Array.from(e.childNodes)}function $e(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Re(e,t,n,l,r=!1){$e(e);const a=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const i=n(o);return i===void 0?e.splice(s,1):e[s]=i,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const i=n(o);return i===void 0?e.splice(s,1):e[s]=i,r?i===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return l()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function et(e,t,n,l){return Re(e,r=>r.nodeName===t,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||a.push(o.name)}a.forEach(s=>r.removeAttribute(s))},()=>l(t))}function p(e,t,n){return et(e,t,n,m)}function S(e,t){return Re(e,n=>n.nodeType===3,n=>{const l=""+t;if(n.data.startsWith(l)){if(n.data.length!==l.length)return n.splitText(l.length)}else n.data=l},()=>w(t),!0)}function B(e){return S(e," ")}function tt(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function V(e,t){e.value=t??""}function nt(e,t,n,l){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function De(e,t,n){e.classList[n?"add":"remove"](t)}let Ne;function Y(e){Ne=e}const X=[],Be=[],re=[],Oe=[],lt=Promise.resolve();let Ee=!1;function rt(){Ee||(Ee=!0,lt.then(Ue))}function ke(e){re.push(e)}const ge=new Set;let le=0;function Ue(){const e=Ne;do{for(;le<X.length;){const t=X[le];le++,Y(t),it(t.$$)}for(Y(null),X.length=0,le=0;Be.length;)Be.pop()();for(let t=0;t<re.length;t+=1){const n=re[t];ge.has(n)||(ge.add(n),n())}re.length=0}while(X.length);for(;Oe.length;)Oe.pop()();Ee=!1,ge.clear(),Y(e)}function it(e){if(e.fragment!==null){e.update(),F(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ke)}}const ie=new Set;let M;function st(){M={r:0,c:[],p:M}}function ot(){M.r||F(M.c),M=M.p}function se(e,t){e&&e.i&&(ie.delete(e),e.i(t))}function we(e,t,n,l){if(e&&e.o){if(ie.has(e))return;ie.add(e),M.c.push(()=>{ie.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function at(e,t,n,l){const{fragment:r,on_mount:a,on_destroy:s,after_update:o}=e.$$;r&&r.m(t,n),l||ke(()=>{const i=a.map(Ve).filter(Ke);s?s.push(...i):F(i),e.$$.on_mount=[]}),o.forEach(ke)}function ut(e,t){const n=e.$$;n.fragment!==null&&(F(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&(X.push(e),rt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ft(e,t,n,l,r,a,s,o=[-1]){const i=Ne;Y(e);const u=e.$$={fragment:null,ctx:null,props:a,update:z,not_equal:r,bound:je(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(i?i.$$.context:[])),callbacks:je(),dirty:o,skip_bound:!1,root:t.target||i.$$.root};s&&s(u.root);let d=!1;if(u.ctx=n?n(e,t.props||{},(y,v,...E)=>{const C=E.length?E[0]:v;return u.ctx&&r(u.ctx[y],u.ctx[y]=C)&&(!u.skip_bound&&u.bound[y]&&u.bound[y](C),d&&ct(e,y)),v}):[],u.update(),d=!0,F(u.before_update),u.fragment=l?l(u.ctx):!1,t.target){if(t.hydrate){ze();const y=b(t.target);u.fragment&&u.fragment.l(y),y.forEach(h)}else u.fragment&&u.fragment.c();t.intro&&se(e.$$.fragment),at(e,t.target,t.anchor,t.customElement),Ge(),Ue()}Y(i)}class dt{$destroy(){ut(this,1),this.$destroy=z}$on(t,n){const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const r=l.indexOf(n);r!==-1&&l.splice(r,1)}}$set(t){this.$$set&&!qe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t={name:"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F\x8F",email:"\u041F\u043E\u0447\u0442\u0430",phone:"\u0422\u0435\u043B\u0435\u0444\u043E\u043D",message:"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",send:"\u041F\u043E\u0441\u043B\u0430\u0442\u044C",thankyou:"\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0437\u0430 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435! \u041C\u044B \u043E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u0432\u0442\u0435\u0447\u0435\u043D\u0438\u0435 72 \u0447\u0430\u0441\u043E\u0432.",timeout:"\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0435 \u043D\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043B\u043E\u0441\u044C. \u041D\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0430.",error:"\u0417\u0430\u043F\u0440\u043E\u0441 \u043D\u0435 \u043F\u0440\u043E\u0448\u0451\u043B."},ht={name:"Your Name",email:"Email Address",phone:"Phone Number",message:"Message",send:"Send",thankyou:"Thank you for reaching out to us! We typically respond within 48 hours.",timeout:"Connection timed out!",error:"Connection failed!"};function mt(e){let t,n,l,r,a,s=e[7].name+"",o,i,u,d,y,v,E,C=e[7].email+"",K,W,q,N,H,_,j,Te=e[7].phone+"",ae,ue,x,ce,I,O,P,Ie=e[7].message+"",fe,de,_e,A,he,Q,T,Ae=e[7].send+"",me,pe,Le,k=e[2]&&Pe(e);return{c(){t=m("form"),n=m("section"),l=m("fieldset"),r=m("div"),a=m("label"),o=w(s),i=w("\xA0*"),u=D(),d=m("input"),y=D(),v=m("div"),E=m("label"),K=w(C),W=w("\xA0*"),q=D(),N=m("input"),H=D(),_=m("div"),j=m("label"),ae=w(Te),ue=D(),x=m("input"),ce=D(),I=m("fieldset"),O=m("div"),P=m("label"),fe=w(Ie),de=w("\xA0*"),_e=D(),A=m("textarea"),he=D(),k&&k.c(),Q=D(),T=m("button"),me=w(Ae),this.h()},l(g){t=p(g,"FORM",{});var L=b(t);n=p(L,"SECTION",{class:!0});var Z=b(n);l=p(Z,"FIELDSET",{class:!0});var R=b(l);r=p(R,"DIV",{class:!0});var $=b(r);a=p($,"LABEL",{for:!0,class:!0});var ye=b(a);o=S(ye,s),i=S(ye,"\xA0*"),ye.forEach(h),u=B($),d=p($,"INPUT",{type:!0,name:!0,class:!0}),$.forEach(h),y=B(R),v=p(R,"DIV",{class:!0});var ee=b(v);E=p(ee,"LABEL",{for:!0,class:!0});var be=b(E);K=S(be,C),W=S(be,"\xA0*"),be.forEach(h),q=B(ee),N=p(ee,"INPUT",{type:!0,name:!0,class:!0}),ee.forEach(h),H=B(R),_=p(R,"DIV",{class:!0});var te=b(_);j=p(te,"LABEL",{for:!0,class:!0});var Se=b(j);ae=S(Se,Te),Se.forEach(h),ue=B(te),x=p(te,"INPUT",{type:!0,name:!0,class:!0}),te.forEach(h),R.forEach(h),ce=B(Z),I=p(Z,"FIELDSET",{class:!0});var U=b(I);O=p(U,"DIV",{class:!0});var ne=b(O);P=p(ne,"LABEL",{for:!0,class:!0});var ve=b(P);fe=S(ve,Ie),de=S(ve,"\xA0*"),ve.forEach(h),_e=B(ne),A=p(ne,"TEXTAREA",{type:!0,name:!0,class:!0,style:!0}),b(A).forEach(h),ne.forEach(h),he=B(U),k&&k.l(U),Q=B(U),T=p(U,"BUTTON",{type:!0,name:!0,class:!0});var Ce=b(T);me=S(Ce,Ae),Ce.forEach(h),U.forEach(h),Z.forEach(h),L.forEach(h),this.h()},h(){f(a,"for","name"),f(a,"class","label"),f(d,"type","text"),f(d,"name","name"),f(d,"class","input"),f(r,"class","field"),f(E,"for","email"),f(E,"class","label"),f(N,"type","text"),f(N,"name","email"),f(N,"class","input"),f(v,"class","field"),f(j,"for","phone"),f(j,"class","label"),f(x,"type","text"),f(x,"name","phone"),f(x,"class","input"),f(_,"class","field"),f(l,"class","column is-one-third"),f(P,"for","message"),f(P,"class","label"),f(A,"type",""),f(A,"name","message"),f(A,"class","textarea"),nt(A,"min-height","12.3rem"),f(O,"class","field"),f(T,"type","button"),T.value="send",f(T,"name","action"),f(T,"class","button is-primary"),De(T,"is-loading",e[0]),f(I,"class","column"),f(n,"class","columns")},m(g,L){G(g,t,L),c(t,n),c(n,l),c(l,r),c(r,a),c(a,o),c(a,i),c(r,u),c(r,d),V(d,e[3]),c(l,y),c(l,v),c(v,E),c(E,K),c(E,W),c(v,q),c(v,N),V(N,e[4]),c(l,H),c(l,_),c(_,j),c(j,ae),c(_,ue),c(_,x),V(x,e[5]),c(n,ce),c(n,I),c(I,O),c(O,P),c(P,fe),c(P,de),c(O,_e),c(O,A),V(A,e[6]),c(I,he),k&&k.m(I,null),c(I,Q),c(I,T),c(T,me),pe||(Le=[J(d,"input",e[13]),J(N,"input",e[14]),J(x,"input",e[15]),J(A,"input",e[16]),J(T,"click",e[8])],pe=!0)},p(g,L){L&8&&d.value!==g[3]&&V(d,g[3]),L&16&&N.value!==g[4]&&V(N,g[4]),L&32&&x.value!==g[5]&&V(x,g[5]),L&64&&V(A,g[6]),g[2]?k?k.p(g,L):(k=Pe(g),k.c(),k.m(I,Q)):k&&(k.d(1),k=null),L&1&&De(T,"is-loading",g[0])},i:z,o:z,d(g){g&&h(t),k&&k.d(),pe=!1,F(Le)}}}function pt(e){let t,n,l;const r=e[12].default,a=He(r,e,e[11],null),s=a||yt(e);return{c(){t=m("div"),n=m("div"),s&&s.c(),this.h()},l(o){t=p(o,"DIV",{class:!0});var i=b(t);n=p(i,"DIV",{class:!0});var u=b(n);s&&s.l(u),u.forEach(h),i.forEach(h),this.h()},h(){f(n,"class","message-body"),f(t,"class","message is-info")},m(o,i){G(o,t,i),c(t,n),s&&s.m(n,null),l=!0},p(o,i){a&&a.p&&(!l||i&2048)&&Xe(a,r,o,o[11],l?Je(r,o[11],i,null):Ye(o[11]),null)},i(o){l||(se(s,o),l=!0)},o(o){we(s,o),l=!1},d(o){o&&h(t),s&&s.d(o)}}}function Pe(e){let t,n,l;return{c(){t=m("div"),n=m("div"),l=w(e[2]),this.h()},l(r){t=p(r,"DIV",{class:!0});var a=b(t);n=p(a,"DIV",{class:!0});var s=b(n);l=S(s,e[2]),s.forEach(h),a.forEach(h),this.h()},h(){f(n,"class","message-body"),f(t,"class","control message is-danger")},m(r,a){G(r,t,a),c(t,n),c(n,l)},p(r,a){a&4&&tt(l,r[2])},d(r){r&&h(t)}}}function yt(e){let t=e[7].thankyou+"",n;return{c(){n=w(t)},l(l){n=S(l,t)},m(l,r){G(l,n,r)},p:z,d(l){l&&h(n)}}}function bt(e){let t,n,l,r;const a=[pt,mt],s=[];function o(i,u){return i[1]?0:1}return t=o(e),n=s[t]=a[t](e),{c(){n.c(),l=xe()},l(i){n.l(i),l=xe()},m(i,u){s[t].m(i,u),G(i,l,u),r=!0},p(i,[u]){let d=t;t=o(i),t===d?s[t].p(i,u):(st(),we(s[d],1,1,()=>{s[d]=null}),ot(),n=s[t],n?n.p(i,u):(n=s[t]=a[t](i),n.c()),se(n,1),n.m(l.parentNode,l))},i(i){r||(se(n),r=!0)},o(i){we(n),r=!1},d(i){s[t].d(i),i&&h(l)}}}function vt(e,t,n){let{$$slots:l={},$$scope:r}=t,{locale:a="en"}=t,{endpoint:s="/api/v1/contact.json"}=t;const o=(()=>{switch(a){case"ru":return _t;case"kk":return transKK;default:return ht}})();let i=!1,u=!1,d=null,y="",v="",E="",C="";const K=()=>{n(0,i=!0),fetch(s+"?locale="+encodeURIComponent(a),{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors",body:JSON.stringify({name:y,email:v,phone:E,message:C})}).then(async _=>{if(_.status!=200){const j=await _.json();throw j.error?new Error(j.error):new Error(`unexpected response status "${_.status}"`)}return _.json()}).then(_=>{if(_.error){n(2,d=_.error);return}n(1,u=!0)}).catch(_=>{console.log(_),n(2,d=`Connection failed! Reason: ${_}`)}).finally(()=>{n(0,i=!1)})};function W(){y=this.value,n(3,y)}function q(){v=this.value,n(4,v)}function N(){E=this.value,n(5,E)}function H(){C=this.value,n(6,C)}return e.$$set=_=>{"locale"in _&&n(9,a=_.locale),"endpoint"in _&&n(10,s=_.endpoint),"$$scope"in _&&n(11,r=_.$$scope)},[i,u,d,y,v,E,C,o,K,a,s,r,l,W,q,N,H]}class gt extends dt{constructor(t){super(),ft(this,t,vt,bt,We,{locale:9,endpoint:10})}}export{gt as default};