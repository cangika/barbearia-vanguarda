var Bt=Object.defineProperty;var It=(i,e,t)=>e in i?Bt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var g=(i,e,t)=>(It(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window,we=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),Ee=new WeakMap;let tt=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(we&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ee.set(t,e))}return e}toString(){return this.cssText}};const Vt=i=>new tt(typeof i=="string"?i:i+"",void 0,ye),v=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((r,o,n)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[n+1],i[0]);return new tt(t,i,ye)},Ft=(i,e)=>{we?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const r=document.createElement("style"),o=K.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=t.cssText,i.appendChild(r)})},Ae=we?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return Vt(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var se;const Q=window,Le=Q.trustedTypes,Dt=Le?Le.emptyScript:"",Se=Q.reactiveElementPolyfillSupport,fe={toAttribute(i,e){switch(e){case Boolean:i=i?Dt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},it=(i,e)=>e!==i&&(e==e||i==i),le={attribute:!0,type:String,converter:fe,reflect:!1,hasChanged:it},me="finalized";let M=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,r)=>{const o=this._$Ep(r,t);o!==void 0&&(this._$Ev.set(o,r),e.push(o))}),e}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(o){const n=this[e];this[t]=o,this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||le}static finalize(){if(this.hasOwnProperty(me))return!1;this[me]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,r=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of r)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Ae(o))}else e!==void 0&&t.push(Ae(e));return t}static _$Ep(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,r;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)===null||r===void 0||r.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ft(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostConnected)===null||r===void 0?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var r;return(r=t.hostDisconnected)===null||r===void 0?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=le){var o;const n=this.constructor._$Ep(e,r);if(n!==void 0&&r.reflect===!0){const a=(((o=r.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?r.converter:fe).toAttribute(t,r.type);this._$El=e,a==null?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(e,t){var r;const o=this.constructor,n=o._$Ev.get(e);if(n!==void 0&&this._$El!==n){const a=o.getPropertyOptions(n),c=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)===null||r===void 0?void 0:r.fromAttribute)!==void 0?a.converter:fe;this._$El=n,this[n]=c.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,r){let o=!0;e!==void 0&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||it)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),r.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,r))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(r)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(r=>{var o;return(o=r.hostUpdated)===null||o===void 0?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,r)=>this._$EO(r,this[r],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};M[me]=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},Se==null||Se({ReactiveElement:M}),((se=Q.reactiveElementVersions)!==null&&se!==void 0?se:Q.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ce;const Y=window,k=Y.trustedTypes,Re=k?k.createPolicy("lit-html",{createHTML:i=>i}):void 0,ge="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,rt="?"+$,Zt=`<${rt}>`,S=document,z=()=>S.createComment(""),B=i=>i===null||typeof i!="object"&&typeof i!="function",nt=Array.isArray,qt=i=>nt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",de=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,Me=/>/g,A=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oe=/'/g,ke=/"/g,ot=/^(?:script|style|textarea|title)$/i,Wt=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),_=Wt(1),U=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),Ue=new WeakMap,L=S.createTreeWalker(S,129,null,!1);function at(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Re!==void 0?Re.createHTML(e):e}const Kt=(i,e)=>{const t=i.length-1,r=[];let o,n=e===2?"<svg>":"",a=j;for(let c=0;c<t;c++){const s=i[c];let l,d,p=-1,h=0;for(;h<s.length&&(a.lastIndex=h,d=a.exec(s),d!==null);)h=a.lastIndex,a===j?d[1]==="!--"?a=Pe:d[1]!==void 0?a=Me:d[2]!==void 0?(ot.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=A):d[3]!==void 0&&(a=A):a===A?d[0]===">"?(a=o??j,p=-1):d[1]===void 0?p=-2:(p=a.lastIndex-d[2].length,l=d[1],a=d[3]===void 0?A:d[3]==='"'?ke:Oe):a===ke||a===Oe?a=A:a===Pe||a===Me?a=j:(a=A,o=void 0);const u=a===A&&i[c+1].startsWith("/>")?" ":"";n+=a===j?s+Zt:p>=0?(r.push(l),s.slice(0,p)+ge+s.slice(p)+$+u):s+$+(p===-2?(r.push(void 0),c):u)}return[at(i,n+(i[t]||"<?>")+(e===2?"</svg>":"")),r]};class I{constructor({strings:e,_$litType$:t},r){let o;this.parts=[];let n=0,a=0;const c=e.length-1,s=this.parts,[l,d]=Kt(e,t);if(this.el=I.createElement(l,r),L.currentNode=this.el.content,t===2){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(o=L.nextNode())!==null&&s.length<c;){if(o.nodeType===1){if(o.hasAttributes()){const p=[];for(const h of o.getAttributeNames())if(h.endsWith(ge)||h.startsWith($)){const u=d[a++];if(p.push(h),u!==void 0){const Z=o.getAttribute(u.toLowerCase()+ge).split($),P=/([.?@])?(.*)/.exec(u);s.push({type:1,index:n,name:P[2],strings:Z,ctor:P[1]==="."?Jt:P[1]==="?"?Qt:P[1]==="@"?Yt:oe})}else s.push({type:6,index:n})}for(const h of p)o.removeAttribute(h)}if(ot.test(o.tagName)){const p=o.textContent.split($),h=p.length-1;if(h>0){o.textContent=k?k.emptyScript:"";for(let u=0;u<h;u++)o.append(p[u],z()),L.nextNode(),s.push({type:2,index:++n});o.append(p[h],z())}}}else if(o.nodeType===8)if(o.data===rt)s.push({type:2,index:n});else{let p=-1;for(;(p=o.data.indexOf($,p+1))!==-1;)s.push({type:7,index:n}),p+=$.length-1}n++}}static createElement(e,t){const r=S.createElement("template");return r.innerHTML=e,r}}function H(i,e,t=i,r){var o,n,a,c;if(e===U)return e;let s=r!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[r]:t._$Cl;const l=B(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==l&&((n=s==null?void 0:s._$AO)===null||n===void 0||n.call(s,!1),l===void 0?s=void 0:(s=new l(i),s._$AT(i,t,r)),r!==void 0?((a=(c=t)._$Co)!==null&&a!==void 0?a:c._$Co=[])[r]=s:t._$Cl=s),s!==void 0&&(e=H(i,s._$AS(i,e.values),s,r)),e}class Gt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:o}=this._$AD,n=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:S).importNode(r,!0);L.currentNode=n;let a=L.nextNode(),c=0,s=0,l=o[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new F(a,a.nextSibling,this,e):l.type===1?d=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(d=new ei(a,this,e)),this._$AV.push(d),l=o[++s]}c!==(l==null?void 0:l.index)&&(a=L.nextNode(),c++)}return L.currentNode=S,n}v(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class F{constructor(e,t,r,o){var n;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=H(this,e,t),B(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==U&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):qt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&B(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:o}=e,n=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=I.createElement(at(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===n)this._$AH.v(r);else{const a=new Gt(n,this),c=a.u(this.options);a.v(r),this.$(c),this._$AH=a}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new I(e)),t}T(e){nt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,o=0;for(const n of e)o===t.length?t.push(r=new F(this.k(z()),this.k(z()),this,this.options)):r=t[o],r._$AI(n),o++;o<t.length&&(this._$AR(r&&r._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class oe{constructor(e,t,r,o,n){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,o){const n=this.strings;let a=!1;if(n===void 0)e=H(this,e,t,0),a=!B(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{const c=e;let s,l;for(e=n[0],s=0;s<n.length-1;s++)l=H(this,c[r+s],t,s),l===U&&(l=this._$AH[s]),a||(a=!B(l)||l!==this._$AH[s]),l===m?e=m:e!==m&&(e+=(l??"")+n[s+1]),this._$AH[s]=l}a&&!o&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Jt extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const Xt=k?k.emptyScript:"";class Qt extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,Xt):this.element.removeAttribute(this.name)}}class Yt extends oe{constructor(e,t,r,o,n){super(e,t,r,o,n),this.type=5}_$AI(e,t=this){var r;if((e=(r=H(this,e,t,0))!==null&&r!==void 0?r:m)===U)return;const o=this._$AH,n=e===m&&o!==m||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,a=e!==m&&(o===m||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}}class ei{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){H(this,e)}}const He=Y.litHtmlPolyfillSupport;He==null||He(I,F),((ce=Y.litHtmlVersions)!==null&&ce!==void 0?ce:Y.litHtmlVersions=[]).push("2.7.5");const ti=(i,e,t)=>{var r,o;const n=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:e;let a=n._$litPart$;if(a===void 0){const c=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=a=new F(e.insertBefore(z(),c),c,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he,pe;class f extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ti(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return U}}f.finalized=!0,f._$litElement$=!0,(he=globalThis.litElementHydrateSupport)===null||he===void 0||he.call(globalThis,{LitElement:f});const Te=globalThis.litElementPolyfillSupport;Te==null||Te({LitElement:f});((pe=globalThis.litElementVersions)!==null&&pe!==void 0?pe:globalThis.litElementVersions=[]).push("3.3.2");class st extends f{}g(st,"styles",[v`
            :host {
                width: 48px;
                height: 48px;
                
                background-color: black;
                -webkit-mask: url('logo.svg') no-repeat center;
                mask: url('logo.svg') no-repeat center;

                -webkit-mask-size: 100%;
                mask-size: 100%;

                display: block;
            }
        `]);customElements.define("app-logo",st);class lt extends f{render(){return _`<slot>Título</slot>`}}g(lt,"styles",[v`
            :host {
                display: block;
                color: var(--cor-secundaria, #665E57);
                text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
                font-family: var(--fonte-titulo);
                font-size: 48px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%; /* 48px */
            }

            ::slotted(*) {
                font-size: inherit;
                margin: 0;
            }



        `]);customElements.define("app-titulo",lt);class ct extends f{render(){return _`<slot>coloque uma imagem</slot>`}}g(ct,"styles",[v`
            :host {
                display: flex;
                width: 96vw;
                max-width: 768px;
                height: auto;
                justify-content: center;
                align-items: center;

                border-radius: 12px;
                background: #D9D9D9;
                mix-blend-mode: multiply;
                box-shadow: 0px 24px 34px 0px rgba(0, 0, 0, 0.25);

                aspect-ratio: 167 / 130;
                overflow: hidden;
            }

            @media (min-width: 1024px) {
                :host {
                    aspect-ratio: 167 / 112;
            }
        `]);customElements.define("app-quadro",ct);class dt extends f{render(){return _`<p><slot>Parágrafo</slot></p>`}}g(dt,"styles",[v`
            :host {
                display: flex;
                color: var(--cor-secundaria, #665E57);
                font-family: var(--fonte-corpo);
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%; /* 20px */
            }

            P {
                margin: 0;
            }
        `]);customElements.define("app-paragrafo",dt);class ht extends f{render(){return _`
        <slot>
            <button>Pressione</button>
        </slot>
        `}}g(ht,"styles",[v`
            :host {
                display: block;
            }
            ::slotted(button), button, ::slotted(a) {
                width: inherit;

                display: flex;
                padding: 10px 24px;
                justify-content: flex-start;
                align-items: center;
                gap: .625rem;
                border: 0;

                border-radius: 8px;
                background-color: var(--button-background, color-mix(in srgb, white 20%, var(--tom-2, #B38962)));
                box-shadow: 0px 2px 4px 0px #665E57;

                /* tipografia */
                color: var(--color, color-mix(in srgb, black 20%, var(--tom-3, #664E38)));
                text-align: center;
                font-family: var(--fonte-titulo);
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; /* 22.4px */
                white-space: nowrap;
                text-decoration: none;

                transition: all .2s;
                cursor: pointer;
            }

        `]);customElements.define("app-botao",ht);class pt extends f{static get properties(){return{formato:{type:String}}}definirFormato(){return this.formato==="fila-preenchida"?"fila-preenchida":this.formato==="fila-vazada"?"fila-vazada":this.formato==="metade"?"metade":"inteira"}render(){return _`
        <div class=${`bolinhas ${this.definirFormato()}`}></div>
        `}}g(pt,"styles",[v`
            :host {
                width: 100px;
                height: 100px;

                display: block;
            }

            .inteira {
                -webkit-mask: url('bolinhas.svg') no-repeat center;
                mask: url('bolinhas.svg') no-repeat center;
            }
            .fila-preenchida {
                -webkit-mask: url('fileira-bolinhas-preenchidas.svg') no-repeat center;
                mask: url('bolinhas.svg') no-repeat center;
            }
            .fila-vazada {
                -webkit-mask: url('fileira-bolinhas-vazadas.svg') no-repeat center;
                mask: url('bolinhas.svg') no-repeat center;
            }

            .metade {
                -webkit-mask: url('bolinhas-metade.svg') no-repeat center;
                mask: url('bolinhas.svg') no-repeat center;
            }

            .bolinhas {
                width: 100%;
                height: 100%;

                -webkit-mask-size: 100%;
                mask-size: 100%;
                background-color: var(--cor-bolinhas, black);
            }
        `]);customElements.define("app-bolinhas",pt);class ut extends f{render(){return _`
        <figure>
            <slot name="imagem"><img loading="lazy" class="imagem" src= "mapa-1.png" alt="mapa A Barbearia Vanguarda" /></slot>
        </figure>

        <address>
            <slot name="titulo">
                <h2 class="titulo">AV. Marechal Tito 2960</h2>
            </slot>
            <slot name="subtitulo">
                <h3 class="subtitulo">São Miguel Paulista, São Paulo</h3>
            </slot>
        </address>
        
        `}}g(ut,"styles",[v`

        *, ::slotted(*) {
            margin: 0;
        }
            :host {
                display: flex;
                width: 270px;
                height: 200px;
                flex-direction: column;
                align-items: flex-start;

                /* estilos */
                border-radius: 8px;
                color: #FFFFFF;
                text-align: center;
                font-family: var(--fonte-titulo);
                line-height: normal;
                box-shadow: 0px 24px 34px 0px rgba(0,0,0,0.25);

            }

            address {
                /* layout */
                display: flex;
                padding: 10px 12px;
                padding-top: 5px;
                flex-direction: column;
                align-items: flex-start;
                gap: 6px;
                align-self: stretch;

                /* estilos */
               
                border-radius: 0px 0px 8px 8px;
                background: var(--cor-secundaria, #665E57)
            } 

            .titulo, ::slotted(h2) {
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: 0.64px;
            }

            .subtitulo, ::slotted(h3) {
                font-size: .5rem;
                font-style: normal;
                font-weight: 400;
                line-height: 100%;
                letter-spacing: 0.32px;
            }

            figure {
                flex: 1 0 0;
                align-self: stretch;

                display: flex;
                align-items: center;
                overflow: hidden;

                border-radius: 8px 8px 0px 0px;
                border: 4px solid var(--cor-secundaria, #665E57);
            }

            .imagem, ::slotted(img){
                width: 100%;
            }
        `]);customElements.define("app-mapa",ut);class ft extends f{rolarContato(){return E.rolarPara("#contato")}rolarUnidades(){return E.rolarPara("#unidades")}render(){return _`
        <footer>
        <app-logo></app-logo>
        <nav>
            <button @click=${this.rolarUnidades}>Unidades</button>
            <button @click=${this.rolarContato}>Contato</button>
            <a href ="">Serviços</a>
            <a href = "">A Barbearia</a>
            <a href ="/">Home</a>


        </nav>
    </footer>

        <span>
        © Barbearia Vanguarda - Todos os direitos reservados desde 2023.
        </span>

        `}}g(ft,"styles",[v`
            :host {
                display: block;
                color: white;
            }
           
            span {
                display: flex;
                align-items: center;
                justify-content: center;

                width: 100%;
                height: 2rem;
                font-size: 0.5rem;
                font-family: var(--fonte-titulo);
                background-color: color-mix(in srgb, black 40%, var(--tom-3));
            }

            footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: color-mix(in srgb, black 20%, var(--tom-3));
                padding: 2rem;
            }

            nav {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                gap: 10px;
            }
            
            app-logo {
                width: 4rem;
                height: 4rem;
                background-color: white;
                opacity: 0.9;
            }

            a, button {
                color: white;
                text-decoration: none;
                opacity: 0.9;
                font-family: var(--fonte-titulo);
                font-size: 0.75rem;

                cursor: pointer;
                transition: color 300ms;
            }

            a:hover, button:hover {
                color: var(--tom-1)
            }

            a:active, button:active {
                color: var(--cor-primaria)
            }

            button {
                padding: 0;
                border: 0;
                background: transparent;
            }

            @media (min-width: 1024px) {
                :host {
                    border-radius: 2rem 2rem 0 0;
                    overflow: hidden;
                }
            }

        `]);customElements.define("app-rodape",ft);class mt extends f{render(){return _`
        <app-logo></app-logo>
        <feather-icon icon="menu" @click=${E.abrir}></feather-icon>
        `}}g(mt,"styles",[v`
            :host {
                width: 100%;
                box-sizing: border-box;

                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 2rem;

                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
                mix-blend-mode: difference;
                color: white;

                transition: top 1s;
                pointer-events: none;
            }

            app-logo {
                background-color: white;
            }

            feather-icon {
                cursor: pointer;
                pointer-events: auto;
            }

            @media (min-width: 768px) {
                app-logo {
                    width: 96px;
                    height: 96px;
                }
            }
        `]);customElements.define("app-navbar",mt);const D=v`
:host {
    width: 100%;
    max-width: 768;
    height: 100svh; /* smallest View Height */
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4.375rem;

    padding: 2rem;
    overflow: hidden;
    position: relative;
}

button:hover,
button:active,
a:hover,
a:active {
    background-color: color-mix(in srgb, white 15%, var(--button-background, var(--tom-2)));
    color: var(--tom-1);
            }

            @media (min-width: 1024px) {
                :host {
                    overflow: visible
                }

                @media (min-width: 768px) {
                    :host {
                        padding: 3rem;
                    }
                }

                

}
`;class gt extends f{render(){return _`
        <section>
            <app-titulo>
                <h1>Barbearia <br> <span>Vanguarda</span></h1>
                <app-logo></app-logo>
            </app-titulo>
            <app-quadro>
                <swiper-container 
                loop="true" 
                autoplay="true" 
                disabled-on-interaction="false"
                speed="5000"
                effect="coverflow" 
                simulate-touch="false" 
                centered-slides="true"
                slides-per-view="auto" 
                coverflow-effect-rotate="50" 
                coverflow-effect-stretch="0" 
                coverflow-effect-depth="100"
                coverflow-effect-modifier="1" 
                coverflow-effect-slide-shadows="true"
                >

                    <swiper-slide>
                    <img loading="lazy" src="slider-1.png" alt="imagem slider 1" />
                    </swiper-slide>

                    <swiper-slide>
                    <img loading="lazy" src="slider-2.jpg" alt="imagem slider 2" />
                    </swiper-slide>

                    <swiper-slide>
                    <img loading="lazy" src="slider-3.jpg" alt="imagem slider 3" />
                    </swiper-slide>

                </swiper-container>
            </app-quadro>
        </section>
        <app-paragrafo>
        Obtenha um estilo impecável, do cabelo à barba.
        </app-paragrafo>
        
        `}}g(gt,"styles",[D,v`
            section {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 0.5rem;
            }

            span {
                color: var(--tom-3, #664E38);
                font-weight: 800;
            }

            app-titulo {
                display: flex;
                align-items: center;
                align-self: stretch;

                position: relative;
            }

            app-logo {
                display: flex;
                width: 160px;
                height: 160px;
                opacity: 67%;

                position: absolute;
                right: -72px;
                top: -39px;
                z-index: 10;
            }

            img {
                width: auto;
                height: 100%;
            }

            app-paragrafo {
                font-size: 1.25rem;
            }

            swiper-container {
                width: 100%;
                height: 100%;
            }

            @media (min-width: 1024px) {
                app-paragrafo {
                    display: none;
                }

                app-logo {
                    width: 220px;
                    height: 220px;
                }
            }
        `]);customElements.define("hero-section",gt);class vt extends f{render(){return _`
        <app-titulo>A Barbearia</app-titulo>
        <app-bolinhas></app-bolinhas>
        <app-quadro>
            <img loading="lazy" src="a-barbearia.png" alt="image">
        </app-quadro>
        <article>
            <app-paragrafo>
            Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se encontram para proporcionar cortes de cabelo e barbas impecáveis. Com uma equipe de barbeiros especializados, combinamos técnicas tradicionais com as últimas tendências, garantindo um atendimento personalizado em um ambiente acolhedor.
            </app-paragrafo>
            <app-botao>Leia mais</app-botao>
        </article>
        
        `}}g(vt,"styles",[D,v`
            :host {
                justify-content: space-between;
                align-items: flex-start;

            }
            article {
                display: flex;
                padding: 8px 12px 0px 0px;
                flex-direction: column;
                justify-content: flex-end;
                align-items: flex-start;
                gap: 10px;

                background: var(--tom-1, #FAD8C7);

                border: 3px solid;
                border-image-source: linear-gradient(
                    40deg, 
                    rgba(102,78,56,0) 50%, 
                    rgba(102,78,56,1) 100%
                    );
                border-image-slice: 1;

                border-left: 0;
                border-bottom: 0;
            }
            app-paragrafo {
                width: 270px;

                text-align: justify;
                line-height: 140%; /* 22.4px */
                letter-spacing: -1.28px;
            }

            app-quadro {
                width: 335px;
                height: 335px;
                border-radius: 335px;

                position: absolute;
                right: -82px;
                top: 106px;
                z-index: -10;
            }
            app-bolinhas {
                display: flex;
                width: 300px;
                height: 300px;
                align-items: flex-start;
                gap: 10px;
                position: absolute;
                left: -150px;
                top: 72px;
                z-index: -20;

                --cor-bolinhas: var(--tom-3)
            }
            img {
                width: 100%;
            }

            app-botao {
                display: var(--display-botao);
            }

            @media (min-width: 768px) {
                app-quadro {
                    width: 600px;
                    height: 600px;

                    right: -182px;
                    top: 200px;
                }
               
                app-bolinhas {
                    width: 400px;
                    height: 400px;
                    
                    top: 272px;
                }
               
                article {
                    width: 60%;
                }

                app-paragrafo {
                    width: 100%;
                }

                @media (min-width: 1024px) {
                app-quadro {
                    top: 100px;
                }
               
                app-bolinhas {
                    top: 112px;
                }

                article {
                    width: 70%;
                }
            }
            
        `]);customElements.define("a-barbearia-section",vt);class _t extends f{render(){return _`
        <app-paragrafo class="titulo">
        Estilo, cuidado e excelência em cada <span>corte</span>.
        </app-paragrafo>

        <section>
            <app-quadro>
                <swiper-container
                effect="fade"
                loop="true"
                autoplay="true"
                speed="750"
                simulate-touch="false"
                disabe-on-interaction="false"
                
                >
                    <swiper-slide>
                    <img class="primeira-imagem" loading="lazy" src="servicos-1.jpg" alt="imagem serviços 1" />
                    </swiper-slide>
                    <swiper-slide>
                    <img loading="lazy" src="servicos-2.jpg" alt="imagem serviços 2" />
                    </swiper-slide>
                    <swiper-slide>
                    <img loading="lazy" src="servicos-3.jpg" alt="imagem serviços 3" />
                    </swiper-slide>
                </swiper-container>
            </app-quadro>

            <aside>
                <article>
                    <app-paragrafo>Corte</app-paragrafo>
                    <app-paragrafo class="descricao"
                    >Social, degradê, surfista, militar, razor part, undercut
                    </app-paragrafo>
                </article>
                <app-botao><a href="">Ver mais</a></app-botao>
            </aside>
        </section>
        
        <div>
            <app-bolinhas formato="fila-vazada"></app-bolinhas>
            <app-bolinhas formato="fila-preenchida"></app-bolinhas>
        </div>
        `}}g(_t,"styles",[D,v`
        :host {
            padding: 2rem 0;
        }

            app-bolinhas {
                width: 270px;
                height: 23px;
                --cor-bolinhas: var(--tom-3);
            }

            app-bolinhas:first-child {
                transform: rotate(180deg);
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }

            span {
                color: var(--tom-3);
                font-weight: 600;
            }

            .titulo {
                width: 270px;
            }

            section {
                display: flex;
                align-items: center;
                gap: 36px;
                align-self: stretch;
            }
            
            aside {
                display: flex;
                padding: 96px 0px 8px 0px;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                align-self: stretch;
            }

            article {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 16px; 
            }

            article app-paragrafo:first-child {
                font-weight: 700;
                color: var(--tom-3)
            }

            .descricao {
                width: 108px;
                height: .875rem;
                text-align: center;
                font-family: var(--fonte-corpo);
                font-size: 0.875rem;

            }

            img {
                height: 120%;
            }

            app-quadro {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 165px;
                height: 320px;
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }

            swiper-container {
                width: 100%;
                height: 100%;
            }

            swiper-slide {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            @media (min-width: 768px) {
                :host {
                    padding: 3rem 0;
                }
                
                section {
                    align-self: center;
                }

                app-quadro {
                    width: 265px;
                    height: 520px;
                    border-radius: 8px;
                }

                .titulo {
                    width: 330px;
                    font-size: 1.25rem;
                }

                article app-paragrafo:first-child {
                font-size: 1.25rem;
                }

                .descricao {
                    width: 158px;
                    font-size: 1.25rem;
                }

                aside {
                    padding: 176px 0px 16px 0px;
                }
            }
            
        `]);customElements.define("serviços-section",_t);class bt extends f{mensagemWhatsapp(){return encodeURIComponent("Olá! Eu olhei o site da Barbearia e gostaria de mais informações. Com quem posso falar?")}render(){return _`
        <app-titulo>Entre em contato conosco</app-titulo>
        <app-quadro>
            <video src="video-contato.webm" autoplay muted loop></video>
        </app-quadro>
        <div>
            <app-botao>

                <a href="mailto:contato@barbeariavanguarda.com.br">
                    <feather-icon icon="mail"> </feather-icon>Nos envie um email
                </a>

            </app-botao>
            <app-botao class="whatsapp">

                <a href=${`https://wa.me/5511982638586?text=${this.mensagemWhatsapp()}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_141_643)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1169 3.87443C19.0579 2.81493 17.7998 1.97535 16.415 1.40402C15.0302 0.832691 13.546 0.540907 12.0481 0.545463C5.76137 0.545463 0.643638 5.63762 0.641081 11.8978C0.6383 13.8911 1.16374 15.8496 2.16392 17.5739L0.545456 23.4546L6.59233 21.876C8.26614 22.7828 10.1398 23.2573 12.0434 23.2567H12.0481C18.3343 23.2567 23.4515 18.164 23.4545 11.9043C23.4584 10.4115 23.1652 8.93274 22.5922 7.55418C22.0192 6.17562 21.1778 4.92478 20.1169 3.87443ZM12.0481 21.3406H12.044C10.347 21.341 8.68079 20.8869 7.21875 20.0254L6.87255 19.8208L3.28431 20.7576L4.2421 17.2758L4.01659 16.9178C3.0677 15.4155 2.56496 13.6747 2.56688 11.8978C2.56688 6.69563 6.82194 2.46307 12.0516 2.46307C14.5604 2.4586 16.9682 3.45079 18.7454 5.22144C20.5227 6.99208 21.5239 9.39615 21.5288 11.9049C21.5267 17.1075 17.2737 21.3406 12.0481 21.3406ZM17.2481 14.274C16.9633 14.1319 15.5606 13.4457 15.3009 13.351C15.0411 13.2564 14.8493 13.2088 14.6596 13.4932C14.4699 13.7775 13.9233 14.4136 13.757 14.6054C13.5909 14.7972 13.4246 14.8182 13.1398 14.676C12.8551 14.5339 11.9361 14.2346 10.8474 13.2682C10.0001 12.516 9.42836 11.5873 9.26216 11.3036C9.09597 11.0197 9.24427 10.8658 9.38694 10.7247C9.51528 10.5973 9.67176 10.3933 9.81443 10.2276C9.9571 10.0619 10.0047 9.9433 10.0993 9.7541C10.1939 9.56489 10.1468 9.39921 10.0757 9.25756C10.0047 9.11592 9.43449 7.71939 9.19722 7.15125C8.96557 6.59797 8.73085 6.67313 8.55597 6.66444C8.38977 6.65625 8.19801 6.65421 8.00933 6.65421C7.86507 6.65797 7.72315 6.69142 7.5924 6.75248C7.46166 6.81354 7.34491 6.9009 7.24943 7.0091C6.98813 7.29342 6.25176 7.98069 6.25176 9.37569C6.25176 10.7707 7.27449 12.1207 7.41563 12.3099C7.55676 12.4991 9.42528 15.3643 12.2843 16.5931C12.8152 16.8204 13.3576 17.0198 13.9094 17.1903C14.5921 17.4061 15.2134 17.376 15.7043 17.3028C16.252 17.2215 17.3918 16.6166 17.6285 15.9539C17.8654 15.2912 17.8658 14.7236 17.7948 14.6054C17.7237 14.4873 17.5334 14.4157 17.2481 14.274Z" fill="currentColor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1169 3.87443C19.0579 2.81493 17.7998 1.97535 16.415 1.40402C15.0302 0.832691 13.546 0.540907 12.0481 0.545463C5.76137 0.545463 0.643638 5.63762 0.641081 11.8978C0.6383 13.8911 1.16374 15.8496 2.16392 17.5739L0.545456 23.4546L6.59233 21.876C8.26614 22.7828 10.1398 23.2573 12.0434 23.2567H12.0481C18.3343 23.2567 23.4515 18.164 23.4545 11.9043C23.4584 10.4115 23.1652 8.93274 22.5922 7.55418C22.0192 6.17562 21.1778 4.92478 20.1169 3.87443ZM12.0481 21.3406H12.044C10.347 21.341 8.68079 20.8869 7.21875 20.0254L6.87255 19.8208L3.28431 20.7576L4.2421 17.2758L4.01659 16.9178C3.0677 15.4155 2.56496 13.6747 2.56688 11.8978C2.56688 6.69563 6.82194 2.46307 12.0516 2.46307C14.5604 2.4586 16.9682 3.45079 18.7454 5.22144C20.5227 6.99208 21.5239 9.39615 21.5288 11.9049C21.5267 17.1075 17.2737 21.3406 12.0481 21.3406ZM17.2481 14.274C16.9633 14.1319 15.5606 13.4457 15.3009 13.351C15.0411 13.2564 14.8493 13.2088 14.6596 13.4932C14.4699 13.7775 13.9233 14.4136 13.757 14.6054C13.5909 14.7972 13.4246 14.8182 13.1398 14.676C12.8551 14.5339 11.9361 14.2346 10.8474 13.2682C10.0001 12.516 9.42836 11.5873 9.26216 11.3036C9.09597 11.0197 9.24427 10.8658 9.38694 10.7247C9.51528 10.5973 9.67176 10.3933 9.81443 10.2276C9.9571 10.0619 10.0047 9.9433 10.0993 9.7541C10.1939 9.56489 10.1468 9.39921 10.0757 9.25756C10.0047 9.11592 9.43449 7.71939 9.19722 7.15125C8.96557 6.59797 8.73085 6.67313 8.55597 6.66444C8.38977 6.65625 8.19801 6.65421 8.00933 6.65421C7.86507 6.65797 7.72315 6.69142 7.5924 6.75248C7.46166 6.81354 7.34491 6.9009 7.24943 7.0091C6.98813 7.29342 6.25176 7.98069 6.25176 9.37569C6.25176 10.7707 7.27449 12.1207 7.41563 12.3099C7.55676 12.4991 9.42528 15.3643 12.2843 16.5931C12.8152 16.8204 13.3576 17.0198 13.9094 17.1903C14.5921 17.4061 15.2134 17.376 15.7043 17.3028C16.252 17.2215 17.3918 16.6166 17.6285 15.9539C17.8654 15.2912 17.8658 14.7236 17.7948 14.6054C17.7237 14.4873 17.5334 14.4157 17.2481 14.274Z" fill="curretnColor" fill-opacity="0.4"/>
                     </g>
                    </svg>
                    Fale conosco
                </a>

            </app-botao>
        </div>

        `}}g(bt,"styles",[D,v`
        :host {
            justify-content: space-between;
            gap: 0;
        }

        video {
            height: 100%;
        }

        app-botao, div {
            width: 100%;
        }

        div {
            display: flex;
            flex-direction: column;
            gap: 8px;

        }

        .whatsapp {
            --button-background: color-mix(in srgb, white 20%, #128C7E);
            --color: color-mix(in srgb, white 40%, var(--tom-1));
        }

        feather-icon {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @media (min-width: 768px) {
            div {
                flex-direction: row;
            }
        }

        @media (min-width: 1024px) {
                div{
                    max-width: 80%;
                }

                app-quadro {
                    width: 70vw;
                }
            }

        `]);customElements.define("contato-section",bt);class wt extends f{firstUpdated(){const e=this.renderRoot.querySelector("swiper-container");console.log(e),Object.assign(e,{spaceBetween:-75,initialSlide:1,rewind:!0,breakpoints:{768:{spaceBetween:-275},1024:{spaceBetween:-575},1368:{centeredSlide:!0,slidesPerView:3,spaceBetween:0}}}),e.initialize()}render(){return _`
        <app-paragrafo>
        Nossa sede, localizada na zona leste de São Paulo, e as demais unidades, estão abertas todos os dias. <br> <br> Confira os horários específicos de cada unidade.
        </app-paragrafo>
        
        <swiper-container 
        init="false"
        
        >
            <swiper-slide>
                <app-mapa></app-mapa>
            </swiper-slide>
            <swiper-slide>
                <app-mapa>
                    <img slot="imagem" loading="lazy" src="mapa-2.jpg" alt="imagem barbearia vanguarda" >
                </app-mapa>
            </swiper-slide>
            <swiper-slide>
                <app-mapa>
                <img slot="imagem" loading="lazy" src="mapa-3.jpg" alt="imagem barbearia vanguarda" >
                </app-mapa>
            </swiper-slide>
            <swiper-slide>
                <app-mapa>
                <img slot="imagem" loading="lazy" src="mapa-4.jpg" alt="imagem barbearia vanguarda" >
                </app-mapa>
            </swiper-slide>
        </swiper-container>
        <app-bolinhas formato="metade"></app-bolinhas>
        `}}g(wt,"styles",[D,v`
            :host {
                height: fit-content;
                gap: 32px;
                padding: 0 0 4rem 0;
            }

            app-paragrafo {
                width: 270px;
            }

            app-bolinhas {
                display: flex;
                width: 104px;
                height: 208px;
                transform: rotate(90deg);
                align-items: flex-start;
                --cor-bolinhas: var(--tom-3);
                
                /* posicionamento */
                position: absolute;
                left: -64px;
                top: -56px;
                z-index: -10;
            }

            swiper-container {
                width: 100svw;
                height: 300px;

                position: relative;
                left: 50%;
                transform: translatex(-50%);
            }

            swiper-slide {
                padding-top: 1rem;
                display: flex;
                justify-content: center;
                transition: transform 500ms;
            }

            .swiper-slide-active {
                transform: scale(1.1);
            }

            @media (min-width: 768px) {
                app-paragrafo {
                    width: 100%;
                    max-width: 500px;
                    text-align: center;
                }

                app-mapa {
                    width: 400px;
                    height: 300px;
                }

                swiper-container {
                    height: 400px;
                }
            }
        `]);customElements.define("unidades-section",wt);class yt extends f{rolarContato(){return E.rolarPara("#contato")}rolarUnidades(){return E.rolarPara("#unidades")}render(){return _`
        <dialog>

        <app-logo></app-logo>

        <nav>
            <button @click=${this.rolarUnidades}>Unidades <feather-icon icon="map-pin"></feather-icon></button>
            <button @click=${this.rolarContato}>Contato <feather-icon icon="phone"></feather-icon></button>
            <a @click=${E.fechar} href ="">Serviços <feather-icon icon="scissors"></feather-icon></a>
            <a @click=${E.fechar} href = "">A Barbearia 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 48" fill="none">
            <path 
            d="M37.4902 46.5971C37.4347 46.7595 37.3285 46.8999 37.1874 46.9976C37.0462 47.0953 36.8775 47.1453 36.7059 47.1402H34.9939L36.0574 41.8346C36.1847 42.0862 36.2993 42.344 36.4006 42.6071L37.513 46.0793C37.5721 46.2484 37.564 46.4338 37.4902 46.5971ZM0.0626868 46.5996C-0.0114036 46.4362 -0.0201549 46.2506 0.0382289 46.081L1.13797 42.6468C1.24283 42.3707 1.3619 42.1001 1.49471 41.8363L2.5582 47.1402H0.846168C0.693748 47.1416 0.543885 47.101 0.412983 47.0229C0.282081 46.9448 0.175189 46.8322 0.104011 46.6974C0.0881929 46.6657 0.0743907 46.6331 0.0626868 46.5996ZM11.5889 42.3668C11.785 42.6002 12.0414 42.7753 12.3302 42.8728L14.7684 47.1402H12.6903L11.5889 42.3668ZM14.1544 42.6653L16.3396 42.0438C17.0124 42.6374 17.8788 42.9649 18.776 42.9649C19.6733 42.9649 20.5397 42.6374 21.2125 42.0438L23.3977 42.6653L20.8406 47.1402H16.7115L14.1544 42.6653ZM25.2219 42.8728C25.3919 42.8146 25.5516 42.7298 25.695 42.6215C25.7933 42.5465 25.8832 42.4611 25.9632 42.3668L24.8617 47.1402H22.7837L25.2219 42.8728ZM22.4615 31.3238C21.4194 32.1695 20.1181 32.6311 18.776 32.6311C17.4339 32.6311 16.1327 32.1695 15.0906 31.3238C14.4833 30.8262 13.9436 30.3539 13.4291 29.8732C13.4376 29.9576 13.4544 30.0419 13.4629 30.1178C13.5531 30.8623 13.601 31.6112 13.6062 32.3611L18.776 36.7972L23.9459 32.3611C23.9511 31.6112 23.999 30.8623 24.0892 30.1178C24.0977 30.0335 24.1145 29.9576 24.123 29.8732C23.6085 30.3539 23.0688 30.8262 22.4615 31.3238ZM4.7172 38.3743C3.38469 39.3442 3.18228 39.5128 3.11481 39.5803C3.01361 39.6815 2.92084 39.7996 2.82807 39.9008L4.27865 47.1368H6.74127L4.7172 38.3743ZM15.4616 39.4791L12.8725 37.9611V41.2755L15.4616 40.5418C15.4249 40.367 15.4051 40.189 15.4026 40.0104C15.4056 39.8319 15.4254 39.654 15.4616 39.4791ZM15.4616 39.4791L12.8725 37.9611V41.2755L15.4616 40.5418C15.4249 40.367 15.4051 40.189 15.4026 40.0104C15.4056 39.8319 15.4254 39.654 15.4616 39.4791ZM8.67257 37.084C7.85204 37.1365 7.04294 37.304 6.26899 37.5815L8.47016 47.1368H10.9581L8.68101 37.2526C8.66979 37.1972 8.66694 37.1403 8.67257 37.084ZM15.4616 39.4791L12.8725 37.9611V41.2755L15.4616 40.5418C15.4249 40.367 15.4051 40.189 15.4026 40.0104C15.4056 39.8319 15.4254 39.654 15.4616 39.4791ZM15.4616 39.4791L12.8725 37.9611V41.2755L15.4616 40.5418C15.4249 40.367 15.4051 40.189 15.4026 40.0104C15.4056 39.8319 15.4254 39.654 15.4616 39.4791ZM18.776 38.7454C17.8652 38.7454 17.0893 39.3273 17.0893 40.0104C17.0893 40.702 17.8652 41.2755 18.776 41.2755C19.6869 41.2755 20.4628 40.702 20.4628 40.0104C20.4628 39.3273 19.6869 38.7454 18.776 38.7454ZM28.8795 37.084C28.8852 37.1403 28.8823 37.1972 28.8711 37.2526L26.594 47.1368H29.0819L31.2831 37.5815C30.5092 37.304 29.7001 37.1365 28.8795 37.084ZM34.4373 39.5803C34.3698 39.5128 34.1674 39.3442 32.8349 38.3743L30.8108 47.1368H33.2734L34.724 39.9008C34.6313 39.7996 34.5385 39.6815 34.4373 39.5803ZM18.776 38.7454C17.8652 38.7454 17.0893 39.3273 17.0893 40.0104C17.0893 40.702 17.8652 41.2755 18.776 41.2755C19.6869 41.2755 20.4628 40.702 20.4628 40.0104C20.4628 39.3273 19.6869 38.7454 18.776 38.7454ZM18.776 38.7454C17.8652 38.7454 17.0893 39.3273 17.0893 40.0104C17.0893 40.702 17.8652 41.2755 18.776 41.2755C19.6869 41.2755 20.4628 40.702 20.4628 40.0104C20.4628 39.3273 19.6869 38.7454 18.776 38.7454ZM22.0905 39.4791C22.1267 39.654 22.1465 39.8319 22.1495 40.0104C22.147 40.189 22.1272 40.367 22.0905 40.5418L24.6796 41.2755V37.9611L22.0905 39.4791ZM18.776 38.7454C17.8652 38.7454 17.0893 39.3273 17.0893 40.0104C17.0893 40.702 17.8652 41.2755 18.776 41.2755C19.6869 41.2755 20.4628 40.702 20.4628 40.0104C20.4628 39.3273 19.6869 38.7454 18.776 38.7454ZM18.776 38.7454C17.8652 38.7454 17.0893 39.3273 17.0893 40.0104C17.0893 40.702 17.8652 41.2755 18.776 41.2755C19.6869 41.2755 20.4628 40.702 20.4628 40.0104C20.4628 39.3273 19.6869 38.7454 18.776 38.7454ZM15.4616 39.4791L12.8725 37.9611V41.2755L15.4616 40.5418C15.4249 40.367 15.4051 40.189 15.4026 40.0104C15.4056 39.8319 15.4254 39.654 15.4616 39.4791ZM24.6374 33.9973L20.5387 37.5056C20.7965 37.645 21.0348 37.818 21.2471 38.0201L24.0977 36.3502C24.1771 36.2993 24.2661 36.2649 24.3591 36.249C24.6028 36.2021 24.8539 36.2095 25.0944 36.2708C25.335 36.332 25.559 36.4455 25.7507 36.6032C26.0423 36.8413 26.2445 37.1714 26.3241 37.5394L26.9988 36.3587L24.6374 33.9973ZM28.7362 16.4047C28.6796 16.4293 28.6201 16.4464 28.559 16.4553C28.5144 16.4795 28.472 16.5077 28.4325 16.5397C28.0675 18.1378 27.906 19.7757 27.9518 21.4143C28.0611 21.5592 28.1855 21.6921 28.3229 21.8107C28.5253 21.4396 28.8964 20.2589 28.8964 17.6192C28.9203 17.2079 28.8659 16.7958 28.7362 16.4047ZM28.1542 0.110979C27.4964 -0.285401 26.1555 0.448324 24.7302 1.23265C22.9844 2.19408 21.0025 3.28202 18.776 3.28202C9.06052 3.28202 7.81234 6.6639 7.81234 9.60723C7.80855 9.99124 7.83676 10.3749 7.89668 10.7542C8.05922 11.9753 8.47889 13.1481 9.12799 14.1951L12.9653 9.29519C13.1419 9.0451 13.3675 8.83356 13.6285 8.67344C13.8894 8.51331 14.1802 8.40796 14.4831 8.36378C14.7861 8.3196 15.0949 8.33752 15.3907 8.41645C15.6865 8.49538 15.9631 8.63367 16.2038 8.82291C16.9401 9.38822 17.8421 9.69535 18.7704 9.69687C19.6987 9.6984 20.6017 9.39423 21.3399 8.83134C21.5802 8.64031 21.857 8.50033 22.1534 8.41997C22.4497 8.3396 22.7593 8.32055 23.0632 8.36397C23.3672 8.40739 23.6591 8.51237 23.921 8.67249C24.183 8.83261 24.4096 9.0445 24.5868 9.29519L28.2048 13.9168L28.5928 13.9252C29.3423 12.6094 29.7375 11.1216 29.7398 9.60723C29.7398 2.53143 28.8795 0.53266 28.1542 0.110979ZM9.11955 16.5481C9.06955 16.5068 9.01592 16.4701 8.95931 16.4385C8.91085 16.4303 8.86296 16.4191 8.81594 16.4047C8.68525 16.7955 8.63085 17.2078 8.6557 17.6192C8.6557 20.2589 9.02678 21.4396 9.22919 21.8107C9.36657 21.6921 9.49096 21.5592 9.60027 21.4143C9.64608 19.7785 9.48455 18.1434 9.11955 16.5481ZM23.2627 10.341C23.2186 10.2685 23.1599 10.206 23.0904 10.1573C23.0209 10.1087 22.942 10.0749 22.8588 10.0583C22.7756 10.0417 22.6898 10.0425 22.6069 10.0606C22.524 10.0788 22.4458 10.1139 22.3772 10.1639C21.3454 10.9549 20.0818 11.3843 18.7817 11.3858C17.4815 11.3873 16.217 10.9609 15.1833 10.1723C15.115 10.1207 15.0366 10.084 14.9532 10.0644C14.8698 10.0449 14.7832 10.043 14.699 10.0589C14.6149 10.0748 14.535 10.1081 14.4644 10.1567C14.3939 10.2052 14.3342 10.268 14.2894 10.341L10.528 15.1481C10.5364 15.1819 10.5448 15.224 10.5533 15.2662C10.5617 15.3063 10.573 15.3457 10.587 15.3843V15.4096C11.2457 17.8535 11.4571 20.3963 11.2111 22.9155C11.1942 23.0842 11.1858 23.2697 11.1858 23.4552C11.1858 25.0914 12.9484 27.419 16.1532 30.0082C16.894 30.6108 17.8195 30.9406 18.7746 30.9421C19.7296 30.9436 20.6561 30.6169 21.3989 30.0166C24.6037 27.419 26.3663 25.0914 26.3663 23.4552C26.3663 23.2697 26.3579 23.0842 26.341 22.8986C26.1061 20.4609 26.2973 18.001 26.9061 15.6288C26.9145 15.6035 26.9229 15.5529 26.9398 15.5023L26.982 15.3505C26.9988 15.2831 27.0073 15.2156 27.0241 15.1397L23.2627 10.341ZM17.9327 22.6793H19.6194C19.8431 22.6793 20.0576 22.7682 20.2158 22.9264C20.3739 23.0845 20.4628 23.299 20.4628 23.5227C20.4628 23.7464 20.3739 23.9609 20.2158 24.1191C20.0576 24.2772 19.8431 24.3661 19.6194 24.3661H17.9327C17.709 24.3661 17.4945 24.2772 17.3363 24.1191C17.1782 23.9609 17.0893 23.7464 17.0893 23.5227C17.0893 23.299 17.1782 23.0845 17.3363 22.9264C17.4945 22.7682 17.709 22.6793 17.9327 22.6793ZM15.4026 18.4625V19.3059C15.4026 19.5296 15.3137 19.7441 15.1556 19.9022C14.9974 20.0604 14.7829 20.1493 14.5592 20.1493C14.3356 20.1493 14.121 20.0604 13.9629 19.9022C13.8047 19.7441 13.7159 19.5296 13.7159 19.3059V18.4625H12.8725C12.6488 18.4625 12.4343 18.3737 12.2762 18.2155C12.118 18.0574 12.0292 17.8428 12.0292 17.6192C12.0292 17.3955 12.118 17.181 12.2762 17.0228C12.4343 16.8647 12.6488 16.7758 12.8725 16.7758H16.246C16.4696 16.7758 16.6841 16.8647 16.8423 17.0228C17.0005 17.181 17.0893 17.3955 17.0893 17.6192C17.0893 17.8428 17.0005 18.0574 16.8423 18.2155C16.6841 18.3737 16.4696 18.4625 16.246 18.4625H15.4026ZM20.4628 27.7395H17.0893C16.8657 27.7395 16.6511 27.6507 16.493 27.4925C16.3348 27.3343 16.246 27.1198 16.246 26.8962C16.246 26.6725 16.3348 26.458 16.493 26.2998C16.6511 26.1416 16.8657 26.0528 17.0893 26.0528H20.4628C20.6864 26.0528 20.901 26.1416 21.0591 26.2998C21.2173 26.458 21.3061 26.6725 21.3061 26.8962C21.3061 27.1198 21.2173 27.3343 21.0591 27.4925C20.901 27.6507 20.6864 27.7395 20.4628 27.7395ZM24.6796 18.4625H23.8362V19.3059C23.8362 19.5296 23.7474 19.7441 23.5892 19.9022C23.431 20.0604 23.2165 20.1493 22.9929 20.1493C22.7692 20.1493 22.5547 20.0604 22.3965 19.9022C22.2383 19.7441 22.1495 19.5296 22.1495 19.3059V18.4625H21.3061C21.0825 18.4625 20.8679 18.3737 20.7098 18.2155C20.5516 18.0574 20.4628 17.8428 20.4628 17.6192C20.4628 17.3955 20.5516 17.181 20.7098 17.0228C20.8679 16.8647 21.0825 16.7758 21.3061 16.7758H24.6796C24.9033 16.7758 25.1178 16.8647 25.2759 17.0228C25.4341 17.181 25.5229 17.3955 25.5229 17.6192C25.5229 17.8428 25.4341 18.0574 25.2759 18.2155C25.1178 18.3737 24.9033 18.4625 24.6796 18.4625ZM12.9147 33.9973L10.5533 36.3587L11.228 37.5394C11.3228 37.1107 11.5813 36.7359 11.9483 36.4949C12.3153 36.2539 12.7619 36.1657 13.193 36.249C13.286 36.2649 13.3749 36.2993 13.4544 36.3502L16.305 38.0201C16.5173 37.818 16.7555 37.645 17.0134 37.5056L12.9147 33.9973Z" 
            />
        </svg>
            </a>
            <a @click=${E.fechar} href ="/">Home <feather-icon icon="home"></feather-icon></a>

            <button>
                <feather-icon icon="x"></feather-icon>
            </button>
        </nav>

        </dialog>
        `}}g(yt,"styles",[v`
            :host {
                display: block;
            }

            dialog {
                display: flex;
                width: 100%;
                height: 100%;
                max-height: 100%;
                max-width: 100%;
                padding: 2rem;
                border: 0;
                margin: 0;
                box-sizing: border-box;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                flex-shrink: 0;

               opacity: 0;
               pointer-events: none;
               transition: opacity 300ms;

                background-color: rgba(0, 0, 0, 40%);
                position: fixed;
                z-index: 110;
            }

            dialog[open] {
                opacity: 1;
                pointer-events: auto;
            }

            nav {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                align-self: flex-end;
                gap: 24px;
            }

            app-logo {
                width: 96px;
                height: 96px;
                background-color: white;
            }

            a, button {
                /* layout */
                display: flex;
                padding: 10px 5px 10px 10px;
                gap: 10px;
                justify-content: center;
                align-items: center;
                gap: 16px;

                /* tipografia */
                color: #FFF;
                font-family: var(--fonte-titulo);
                font-size: 2rem;
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                text-decoration: none;

                cursor: pointer;
                transition: color 300ms;
            }

            a:hover, button:hover {
                color: var(--tom-1)
            }

            a:active, button:active {
                color: var(--cor-primaria)
            }

            button {
                padding: 0;
                border: 0;
                background: transparent;
            }

            svg, feather-icon {
                width: 24px;
                height: 24px;
                fill: currentColor;
            }
        `]);customElements.define("menu-section",yt);function ee(i){return i=i||[],Array.isArray(i)?i:[i]}function y(i){return`[Vaadin.Router] ${i}`}function ii(i){if(typeof i!="object")return String(i);const e=Object.prototype.toString.call(i).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(i)}`:e}const te="module",ie="nomodule",ve=[te,ie];function je(i){if(!i.match(/.+\.[m]?js$/))throw new Error(y(`Unsupported type for bundle "${i}": .js or .mjs expected.`))}function Ct(i){if(!i||!w(i.path))throw new Error(y('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=i.bundle,t=["component","redirect","bundle"];if(!R(i.action)&&!Array.isArray(i.children)&&!R(i.children)&&!re(e)&&!t.some(r=>w(i[r])))throw new Error(y(`Expected route config "${i.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(w(e))je(e);else if(ve.some(r=>r in e))ve.forEach(r=>r in e&&je(e[r]));else throw new Error(y('Expected route bundle to include either "'+ie+'" or "'+te+'" keys, or both'));i.redirect&&["bundle","component"].forEach(r=>{r in i&&console.warn(y(`Route config "${i.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function Ne(i){ee(i).forEach(e=>Ct(e))}function ze(i,e){let t=document.head.querySelector('script[src="'+i+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",i),e===te?t.setAttribute("type",te):e===ie&&t.setAttribute(ie,""),t.async=!0),new Promise((r,o)=>{t.onreadystatechange=t.onload=n=>{t.__dynamicImportLoaded=!0,r(n)},t.onerror=n=>{t.parentNode&&t.parentNode.removeChild(t),o(n)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&r()})}function ri(i){return w(i)?ze(i):Promise.race(ve.filter(e=>e in i).map(e=>ze(i[e],e)))}function N(i,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${i}`,{cancelable:i==="go",detail:e}))}function re(i){return typeof i=="object"&&!!i}function R(i){return typeof i=="function"}function w(i){return typeof i=="string"}function xt(i){const e=new Error(y(`Page not found (${i.pathname})`));return e.context=i,e.code=404,e}const O=new class{};function ni(i){const e=i.port,t=i.protocol,n=t==="http:"&&e==="80"||t==="https:"&&e==="443"?i.hostname:i.host;return`${t}//${n}`}function Be(i){if(i.defaultPrevented||i.button!==0||i.shiftKey||i.ctrlKey||i.altKey||i.metaKey)return;let e=i.target;const t=i.composedPath?i.composedPath():i.path||[];for(let c=0;c<t.length;c++){const s=t[c];if(s.nodeName&&s.nodeName.toLowerCase()==="a"){e=s;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||ni(e))!==window.location.origin)return;const{pathname:o,search:n,hash:a}=e;N("go",{pathname:o,search:n,hash:a})&&(i.preventDefault(),i&&i.type==="click"&&window.scrollTo(0,0))}const oi={activate(){window.document.addEventListener("click",Be)},inactivate(){window.document.removeEventListener("click",Be)}},ai=/Trident/.test(navigator.userAgent);ai&&!R(window.PopStateEvent)&&(window.PopStateEvent=function(i,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(i,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Ie(i){if(i.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:r}=window.location;N("go",{pathname:e,search:t,hash:r})}const si={activate(){window.addEventListener("popstate",Ie)},inactivate(){window.removeEventListener("popstate",Ie)}};var T=Rt,li=Ce,ci=ui,di=At,hi=St,$t="/",Et="./",pi=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Ce(i,e){for(var t=[],r=0,o=0,n="",a=e&&e.delimiter||$t,c=e&&e.delimiters||Et,s=!1,l;(l=pi.exec(i))!==null;){var d=l[0],p=l[1],h=l.index;if(n+=i.slice(o,h),o=h+d.length,p){n+=p[1],s=!0;continue}var u="",Z=i[o],P=l[2],Ht=l[3],Tt=l[4],q=l[5];if(!s&&n.length){var ae=n.length-1;c.indexOf(n[ae])>-1&&(u=n[ae],n=n.slice(0,ae))}n&&(t.push(n),n="",s=!1);var jt=u!==""&&Z!==void 0&&Z!==u,Nt=q==="+"||q==="*",zt=q==="?"||q==="*",xe=u||a,$e=Ht||Tt;t.push({name:P||r++,prefix:u,delimiter:xe,optional:zt,repeat:Nt,partial:jt,pattern:$e?fi($e):"[^"+x(xe)+"]+?"})}return(n||o<i.length)&&t.push(n+i.substr(o)),t}function ui(i,e){return At(Ce(i,e))}function At(i){for(var e=new Array(i.length),t=0;t<i.length;t++)typeof i[t]=="object"&&(e[t]=new RegExp("^(?:"+i[t].pattern+")$"));return function(r,o){for(var n="",a=o&&o.encode||encodeURIComponent,c=0;c<i.length;c++){var s=i[c];if(typeof s=="string"){n+=s;continue}var l=r?r[s.name]:void 0,d;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(l.length===0){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var p=0;p<l.length;p++){if(d=a(l[p],s),!e[c].test(d))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');n+=(p===0?s.prefix:s.delimiter)+d}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(d=a(String(l),s),!e[c].test(d))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+d+'"');n+=s.prefix+d;continue}if(s.optional){s.partial&&(n+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}return n}}function x(i){return i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function fi(i){return i.replace(/([=!:$/()])/g,"\\$1")}function Lt(i){return i&&i.sensitive?"":"i"}function mi(i,e){if(!e)return i;var t=i.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return i}function gi(i,e,t){for(var r=[],o=0;o<i.length;o++)r.push(Rt(i[o],e,t).source);return new RegExp("(?:"+r.join("|")+")",Lt(t))}function vi(i,e,t){return St(Ce(i,t),e,t)}function St(i,e,t){t=t||{};for(var r=t.strict,o=t.start!==!1,n=t.end!==!1,a=x(t.delimiter||$t),c=t.delimiters||Et,s=[].concat(t.endsWith||[]).map(x).concat("$").join("|"),l=o?"^":"",d=i.length===0,p=0;p<i.length;p++){var h=i[p];if(typeof h=="string")l+=x(h),d=p===i.length-1&&c.indexOf(h[h.length-1])>-1;else{var u=h.repeat?"(?:"+h.pattern+")(?:"+x(h.delimiter)+"(?:"+h.pattern+"))*":h.pattern;e&&e.push(h),h.optional?h.partial?l+=x(h.prefix)+"("+u+")?":l+="(?:"+x(h.prefix)+"("+u+"))?":l+=x(h.prefix)+"("+u+")"}}return n?(r||(l+="(?:"+a+")?"),l+=s==="$"?"$":"(?="+s+")"):(r||(l+="(?:"+a+"(?="+s+"))?"),d||(l+="(?="+a+"|"+s+")")),new RegExp(l,Lt(t))}function Rt(i,e,t){return i instanceof RegExp?mi(i,e):Array.isArray(i)?gi(i,e,t):vi(i,e,t)}T.parse=li;T.compile=ci;T.tokensToFunction=di;T.tokensToRegExp=hi;const{hasOwnProperty:_i}=Object.prototype,_e=new Map;_e.set("|false",{keys:[],pattern:/(?:)/});function Ve(i){try{return decodeURIComponent(i)}catch{return i}}function bi(i,e,t,r,o){t=!!t;const n=`${i}|${t}`;let a=_e.get(n);if(!a){const l=[];a={keys:l,pattern:T(i,l,{end:t,strict:i===""})},_e.set(n,a)}const c=a.pattern.exec(e);if(!c)return null;const s=Object.assign({},o);for(let l=1;l<c.length;l++){const d=a.keys[l-1],p=d.name,h=c[l];(h!==void 0||!_i.call(s,p))&&(d.repeat?s[p]=h?h.split(d.delimiter).map(Ve):[]:s[p]=h&&Ve(h))}return{path:c[0],keys:(r||[]).concat(a.keys),params:s}}function Pt(i,e,t,r,o){let n,a,c=0,s=i.path||"";return s.charAt(0)==="/"&&(t&&(s=s.substr(1)),t=!0),{next(l){if(i===l)return{done:!0};const d=i.__children=i.__children||i.children;if(!n&&(n=bi(s,e,!d,r,o),n))return{done:!1,value:{route:i,keys:n.keys,params:n.params,path:n.path}};if(n&&d)for(;c<d.length;){if(!a){const h=d[c];h.parent=i;let u=n.path.length;u>0&&e.charAt(u)==="/"&&(u+=1),a=Pt(h,e.substr(u),t,n.keys,n.params)}const p=a.next(l);if(!p.done)return{done:!1,value:p.value};a=null,c++}return{done:!0}}}}function wi(i){if(R(i.route.action))return i.route.action(i)}function yi(i,e){let t=e;for(;t;)if(t=t.parent,t===i)return!0;return!1}function Ci(i){let e=`Path '${i.pathname}' is not properly resolved due to an error.`;const t=(i.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function xi(i,e){const{route:t,path:r}=e;if(t&&!t.__synthetic){const o={path:r,route:t};if(!i.chain)i.chain=[];else if(t.parent){let n=i.chain.length;for(;n--&&i.chain[n].route&&i.chain[n].route!==t.parent;)i.chain.pop()}i.chain.push(o)}}class V{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||wi,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){Ne(e);const t=[...ee(e)];this.root.__children=t}addRoutes(e){return Ne(e),this.root.__children.push(...ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,w(e)?{pathname:e}:e),r=Pt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),o=this.resolveRoute;let n=null,a=null,c=t;function s(l,d=n.value.route,p){const h=p===null&&n.value.route;return n=a||r.next(h),a=null,!l&&(n.done||!yi(d,n.value.route))?(a=n,Promise.resolve(O)):n.done?Promise.reject(xt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,n.value),xi(c,n.value),Promise.resolve(o(c)).then(u=>u!=null&&u!==O?(c.result=u.result||u,c):s(l,d,u)))}return t.next=s,Promise.resolve().then(()=>s(!0,this.root)).catch(l=>{const d=Ci(c);if(l?console.warn(d):l=new Error(d),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,r=this.constructor.__createUrl(e,t).href;if(r.slice(0,t.length)===t)return r.slice(t.length)}}V.pathToRegexp=T;const{pathToRegexp:Fe}=V,De=new Map;function Mt(i,e,t){const r=e.name||e.component;if(r&&(i.has(r)?i.get(r).push(e):i.set(r,[e])),Array.isArray(t))for(let o=0;o<t.length;o++){const n=t[o];n.parent=e,Mt(i,n,n.__children||n.children)}}function Ze(i,e){const t=i.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function qe(i){let e=i.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function $i(i,e={}){if(!(i instanceof V))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(r,o)=>{let n=Ze(t,r);if(!n&&(t.clear(),Mt(t,i.root,i.root.__children),n=Ze(t,r),!n))throw new Error(`Route "${r}" not found`);let a=De.get(n.fullPath);if(!a){let s=qe(n),l=n.parent;for(;l;){const u=qe(l);u&&(s=u.replace(/\/$/,"")+"/"+s.replace(/^\//,"")),l=l.parent}const d=Fe.parse(s),p=Fe.tokensToFunction(d),h=Object.create(null);for(let u=0;u<d.length;u++)w(d[u])||(h[d[u].name]=!0);a={toPath:p,keys:h},De.set(s,a),n.fullPath=s}let c=a.toPath(o,e)||"/";if(e.stringifyQueryParams&&o){const s={},l=Object.keys(o);for(let p=0;p<l.length;p++){const h=l[p];a.keys[h]||(s[h]=o[h])}const d=e.stringifyQueryParams(s);d&&(c+=d.charAt(0)==="?"?d:`?${d}`)}return c}}let We=[];function Ei(i){We.forEach(e=>e.inactivate()),i.forEach(e=>e.activate()),We=i}const Ai=i=>{const e=getComputedStyle(i).getPropertyValue("animation-name");return e&&e!=="none"},Li=(i,e)=>{const t=()=>{i.removeEventListener("animationend",t),e()};i.addEventListener("animationend",t)};function Ke(i,e){return i.classList.add(e),new Promise(t=>{if(Ai(i)){const r=i.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;i.setAttribute("style",`position: absolute; ${o}`),Li(i,()=>{i.classList.remove(e),i.removeAttribute("style"),t()})}else i.classList.remove(e),t()})}const Si=256;function ue(i){return i!=null}function Ri(i){const e=Object.assign({},i);return delete e.next,e}function b({pathname:i="",search:e="",hash:t="",chain:r=[],params:o={},redirectFrom:n,resolver:a},c){const s=r.map(l=>l.route);return{baseUrl:a&&a.baseUrl||"",pathname:i,search:e,hash:t,routes:s,route:c||s.length&&s[s.length-1]||null,params:o,redirectFrom:n,getUrl:(l={})=>J(C.pathToRegexp.compile(Ot(s))(Object.assign({},o,l)),a)}}function Ge(i,e){const t=Object.assign({},i.params);return{redirect:{pathname:e,from:i.pathname,params:t}}}function Pi(i,e){e.location=b(i);const t=i.chain.map(r=>r.route).indexOf(i.route);return i.chain[t].element=e,e}function G(i,e,t){if(R(i))return i.apply(t,e)}function Je(i,e,t){return r=>{if(r&&(r.cancel||r.redirect))return r;if(t)return G(t[i],e,t)}}function Mi(i,e){if(!Array.isArray(i)&&!re(i))throw new Error(y(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${i}`));e.__children=[];const t=ee(i);for(let r=0;r<t.length;r++)Ct(t[r]),e.__children.push(t[r])}function W(i){if(i&&i.length){const e=i[0].parentNode;for(let t=0;t<i.length;t++)e.removeChild(i[t])}}function J(i,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(i.replace(/^\//,""),t).pathname:i}function Ot(i){return i.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class C extends V{constructor(e,t){const r=document.head.querySelector("base"),o=r&&r.getAttribute("href");super([],Object.assign({baseUrl:o&&V.__createUrl(o,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=a=>this.__resolveRoute(a);const n=C.NavigationTrigger;C.setTriggers.apply(C,Object.keys(n).map(a=>n[a])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=b({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let r=Promise.resolve();R(t.children)&&(r=r.then(()=>t.children(Ri(e))).then(n=>{!ue(n)&&!R(t.children)&&(n=t.children),Mi(n,t)}));const o={redirect:n=>Ge(e,n),component:n=>{const a=document.createElement(n);return this.__createdByRouter.set(a,!0),a}};return r.then(()=>{if(this.__isLatestRender(e))return G(t.action,[e,o],t)}).then(n=>{if(ue(n)&&(n instanceof HTMLElement||n.redirect||n===O))return n;if(w(t.redirect))return o.redirect(t.redirect);if(t.bundle)return ri(t.bundle).then(()=>{},()=>{throw new Error(y(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(n=>{if(ue(n))return n;if(w(t.component))return o.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const r=++this.__lastStartedRenderId,o=Object.assign({search:"",hash:""},w(e)?{pathname:e}:e,{__renderId:r});return this.ready=this.resolve(o).then(n=>this.__fullyResolveChain(n)).then(n=>{if(this.__isLatestRender(n)){const a=this.__previousContext;if(n===a)return this.__updateBrowserHistory(a,!0),this.location;if(this.location=b(n),t&&this.__updateBrowserHistory(n,r===1),N("location-changed",{router:this,location:this.location}),n.__skipAttach)return this.__copyUnchangedElements(n,a),this.__previousContext=n,this.location;this.__addAppearingContent(n,a);const c=this.__animateIfNeeded(n);return this.__runOnAfterEnterCallbacks(n),this.__runOnAfterLeaveCallbacks(n,a),c.then(()=>{if(this.__isLatestRender(n))return this.__removeDisappearingContent(),this.__previousContext=n,this.location})}}).catch(n=>{if(r===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(o),W(this.__outlet&&this.__outlet.children),this.location=b(Object.assign(o,{resolver:this})),N("error",Object.assign({router:this,error:n},o)),n}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(r=>{const n=r!==t?r:e,c=J(Ot(r.chain),r.resolver)===r.pathname,s=(l,d=l.route,p)=>l.next(void 0,d,p).then(h=>h===null||h===O?c?l:d.parent!==null?s(l,d.parent,h):h:h);return s(r).then(l=>{if(l===null||l===O)throw xt(n);return l&&l!==O&&l!==r?this.__fullyResolveChain(n,l):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(Pi(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(y(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${ii(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},r=t.chain||[],o=e.chain;let n=Promise.resolve();const a=()=>({cancel:!0}),c=s=>Ge(e,s);if(e.__divergedChainIndex=0,e.__skipAttach=!1,r.length){for(let s=0;s<Math.min(r.length,o.length)&&!(r[s].route!==o[s].route||r[s].path!==o[s].path&&r[s].element!==o[s].element||!this.__isReusableElement(r[s].element,o[s].element));s=++e.__divergedChainIndex);if(e.__skipAttach=o.length===r.length&&e.__divergedChainIndex==o.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let s=o.length-1;s>=0;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},r[s]);for(let s=0;s<o.length;s++)n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:c},o[s]),r[s].element.location=b(e,r[s].route)}else for(let s=r.length-1;s>=e.__divergedChainIndex;s--)n=this.__runOnBeforeLeaveCallbacks(n,e,{prevent:a},r[s])}if(!e.__skipAttach)for(let s=0;s<o.length;s++)s<e.__divergedChainIndex?s<r.length&&r[s].element&&(r[s].element.location=b(e,r[s].route)):(n=this.__runOnBeforeEnterCallbacks(n,e,{prevent:a,redirect:c},o[s]),o[s].element&&(o[s].element.location=b(e,o[s].route)));return n.then(s=>{if(s){if(s.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(s.redirect)return this.__redirect(s.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,r,o){const n=b(t);return e.then(a=>{if(this.__isLatestRender(t))return Je("onBeforeLeave",[n,r,this],o.element)(a)}).then(a=>{if(!(a||{}).redirect)return a})}__runOnBeforeEnterCallbacks(e,t,r,o){const n=b(t,o.route);return e.then(a=>{if(this.__isLatestRender(t))return Je("onBeforeEnter",[n,r,this],o.element)(a)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,r){if(t>Si)throw new Error(y(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:r})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(y(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:r=""},o){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==r){const n=o?"replaceState":"pushState";window.history[n](null,document.title,e+t+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let r=this.__outlet;for(let o=0;o<e.__divergedChainIndex;o++){const n=t&&t.chain[o].element;if(n)if(n.parentNode===r)e.chain[o].element=n,r=n;else break}return r}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(n=>this.__addedByRouter.get(n)&&n!==e.result);let o=r;for(let n=e.__divergedChainIndex;n<e.chain.length;n++){const a=e.chain[n].element;a&&(o.appendChild(a),this.__addedByRouter.set(a,!0),o===r&&this.__appearingContent.push(a),o=a)}}__removeDisappearingContent(){this.__disappearingContent&&W(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(W(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let r=t.chain.length-1;r>=e.__divergedChainIndex&&this.__isLatestRender(e);r--){const o=t.chain[r].element;if(o)try{const n=b(e);G(o.onAfterLeave,[n,{},t.resolver],o)}finally{this.__disappearingContent.indexOf(o)>-1&&W(o.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const r=e.chain[t].element||{},o=b(e,e.chain[t].route);G(r.onAfterEnter,[o,{},e.resolver],r)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],o=[],n=e.chain;let a;for(let c=n.length;c>0;c--)if(n[c-1].route.animate){a=n[c-1].route.animate;break}if(t&&r&&a){const c=re(a)&&a.leave||"leaving",s=re(a)&&a.enter||"entering";o.push(Ke(t,c)),o.push(Ke(r,s))}return Promise.all(o).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:r,hash:o}=e?e.detail:window.location;w(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:r,hash:o},!0))}static setTriggers(...e){Ei(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=$i(this)),J(this.__urlForName(e,t),this)}urlForPath(e,t){return J(C.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:r,hash:o}=w(e)?this.__createUrl(e,"http://a"):e;return N("go",{pathname:t,search:r,hash:o})}}const Oi=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,X=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ki(){function i(){return!0}return kt(i)}function Ui(){try{return Hi()?!0:Ti()?X?!ji():!ki():!1}catch{return!1}}function Hi(){return localStorage.getItem("vaadin.developmentmode.force")}function Ti(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ji(){return!!(X&&Object.keys(X).map(e=>X[e]).filter(e=>e.productionMode).length>0)}function kt(i,e){if(typeof i!="function")return;const t=Oi.exec(i.toString());if(t)try{i=new Function(t[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return i(e)}window.Vaadin=window.Vaadin||{};const Xe=function(i,e){if(window.Vaadin.developmentMode)return kt(i,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Ui());function Ni(){}const zi=function(){if(typeof Xe=="function")return Xe(Ni)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});zi();C.NavigationTrigger={POPSTATE:si,CLICK:oi};const Bi="modulepreload",Ii=function(i){return"/"+i},Qe={},Ye=function(e,t,r){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(n=>{if(n=Ii(n),n in Qe)return;Qe[n]=!0;const a=n.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const p=o[d];if(p.href===n&&(!a||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${c}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":Bi,a||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),a)return new Promise((d,p)=>{l.addEventListener("load",d),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e()).catch(n=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=n,window.dispatchEvent(a),!a.defaultPrevented)throw n})};function Vi(){const i=new C(document.querySelector("#app"));return i.setRoutes([{path:"/",component:"home-page",action:()=>Ye(()=>import("./home-page-d3bd6c52.js"),[])},{path:"/a-barbearia",component:"a-barbearia-page",action:()=>Ye(()=>import("./a-barbearia-page-0cdada97.js"),[])}]),i}let ne,be,Ut;document.addEventListener("DOMContentLoaded",function(){Ut=Vi(),ne=document.querySelector("app-navbar"),be=document.querySelector("menu-section").shadowRoot.querySelector("dialog")});const E={abrir:function(){ne.classList.add("escondido"),be.showModal()},rolarPara:function(i){C.go("/"),Ut.ready.then(()=>{document.querySelector("home-page").shadowRoot.querySelector(i).scrollIntoView(),this.fechar()})},fechar:function(){be.close()}};let et=window.pageYOffset;window.onscroll=function(){let i=window.pageYOffset;et>i?ne.classList.remove("escondido"):ne.classList.add("escondido"),et=i};export{v as i,f as s,_ as x};
