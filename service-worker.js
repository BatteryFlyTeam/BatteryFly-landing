if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let r={};const c=e=>s(e,o),l={module:{uri:o},exports:r,require:c};t[o]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-d51a7cef"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.registerRoute(/\.(ttf|png|svg)$/,new e.CacheFirst({cacheName:"static",plugins:[new e.ExpirationPlugin({maxEntries:40})]}),"GET"),e.registerRoute(/api\/image/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:10})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));