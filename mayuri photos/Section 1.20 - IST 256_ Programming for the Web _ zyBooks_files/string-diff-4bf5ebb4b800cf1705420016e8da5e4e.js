function makeTable(e,t){const n=new Uint16Array(e*t),l=(t,n)=>t*e+n
return{getCell:(e,t)=>n[l(e,t)],setCell:(e,t,s)=>{n[l(e,t)]=s}}}function makeLevenshteinTable(e,t){if(!e||!t)return null
const n=makeTable(e.length+1,t.length+1)
for(let l=0;l<=t.length;l++)n.setCell(l,0,l)
for(let l=0;l<=e.length;l++)n.setCell(0,l,l)
for(let l=1;l<=t.length;l++)for(let s=1;s<=e.length;s++){let r=n.getCell(l-1,s-1)
if(t.charAt(l-1)!==e.charAt(s-1)){r=Math.min(n.getCell(l-1,s-1),n.getCell(l,s-1),n.getCell(l-1,s))+1}n.setCell(l,s,r)}return n}function stringDiff(e,t,n,l){if(!e||!t)return{expectedAnswerIndicies:[],userAnswerIndicies:[]}
const s=2e4
let r=e.slice(0,s),i=t.slice(0,s)
const a=new Array(r.length),o=new Array(i.length)
if(l){for(let e=0,t=0;t<r.length;t++){if(r.charAt(t).match(/\s+/u)){e++
for(let n=e-1;n>0;n--)a[t-n]=e}a[t]=e}for(let e=0,t=0;t<i.length;t++){if(i.charAt(t).match(/\s+/u)){e++
for(let n=e-1;n>0;n--)o[t-n]=e}o[t]=e}r=r.replace(/\s+/gu,""),i=i.replace(/\s+/gu,"")}n&&(r=r.toLowerCase(),i=i.toLowerCase())
const c=makeLevenshteinTable(r,i)
let h=[],f=[],g=i.length,u=r.length
for(;g>0&&u>0;){const e=c.getCell(g,u),t=e-c.getCell(g-1,u-1),n=e-c.getCell(g-1,u),l=e-c.getCell(g,u-1),s=Math.max(t,Math.max(n,l))
s===t?(g--,u--,0!==s&&(h.push(u),f.push(g))):s===n?(g--,f.push(g)):(u--,h.push(u))}for(;g>0;)g--,f.push(g)
for(;u>0;)u--,h.push(u)
return l&&(h=h.map((e=>e+a[e])),f=f.map((e=>e+o[e]))),{expectedAnswerIndicies:h,userAnswerIndicies:f,wasStringShortened:e.length>s||t.length>s}}self.onmessage=function(e){if("undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope){const{expectedAnswerIndicies:t,wasStringShortened:n,userAnswerIndicies:l}=stringDiff(...e.data)
self.postMessage({expectedAnswerIndicies:t,wasStringShortened:n,userAnswerIndicies:l}),self.close()}}
