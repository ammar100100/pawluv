const fs=require('fs');
const p='index.html';
let s=fs.readFileSync(p,'utf8');
if(!s.includes('<body')||!s.includes('</body>')) throw new Error('Invalid HTML shell');
const bodyStart=s.indexOf('<body');
const gt=s.indexOf('>',bodyStart);
const bodyEnd=s.lastIndexOf('</body>');
let body=s.slice(gt+1,bodyEnd);
const promoCandidates=['<a class="promo"','<div class="promo"'];
let promo=-1;
for(const x of promoCandidates){const i=body.indexOf(x);if(i>=0&&(promo<0||i<promo))promo=i;}
const footer=body.lastIndexOf('</footer>');
if(promo<0||footer<0) throw new Error('Expected promo/footer not found');
body=body.slice(promo,footer+9);
body=body.replace(/<style id="pawluv-mobile-polish-final">[\s\S]*?<\/style>/g,'');
body=body.replace(/<style id="pawluv-mobile-polish">[\s\S]*?<\/style>/g,'');
const css=`<style id="pawluv-vercel-mobile-fix">
html,body{width:100%;max-width:100%;overflow-x:hidden}*{box-sizing:border-box}img{max-width:100%;height:auto}
.categoryNav{position:relative!important;top:auto!important;width:100%;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.categoryNavInner{width:max-content;min-width:100%}
.reviewTrack{width:100%;overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;touch-action:pan-x;overscroll-behavior-x:contain;cursor:grab}.reviewTrack.is-dragging{cursor:grabbing;user-select:none}
@media(max-width:900px){.nav{height:68px;padding:0 18px}.navlinks{display:none}.actions{gap:10px}.logo img{max-width:165px}.hero{min-height:600px;padding:30px 16px}.heroCard{width:100%;max-width:560px;margin:0 auto}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.card{min-width:0}.card h3{overflow-wrap:anywhere}}
@media(max-width:560px){.promo{height:38px;font-size:10px;padding:0 8px;text-align:center}.nav{height:60px;padding:0 12px}.logo img{max-width:142px}.actions{font-size:10px;gap:6px}.hero{min-height:540px;padding:20px 12px}.heroCard{padding:27px 20px}.hero h1{font-size:32px;line-height:1.04}.hero p{font-size:14px}.heroCard .btn{width:100%}.dealCountdown{height:54px;gap:3px;padding:0 7px;overflow:hidden}.dealUnit{width:31px;height:34px}.categoryNavInner{min-width:max-content;justify-content:flex-start;gap:7px;padding:10px 12px}.pill{padding:8px 13px;font-size:10px}.section{padding:38px 0}.container{padding-left:12px;padding-right:12px}.grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.card{padding:6px;border-radius:12px}.card h3{font-size:12px;line-height:1.25;margin:7px 2px}.price{font-size:11px}.card .btn{font-size:10px;padding:9px 5px}.review{flex-basis:280px;width:280px}.review>img{height:250px}}
</style>`;
body=body.replace('</footer>','</footer>'+css);
const drag=`<script id="pawluv-drag-fix">(()=>{const t=document.querySelector('.reviewTrack');if(!t)return;let down=false,startX=0,startLeft=0;const stop=()=>{down=false;t.classList.remove('is-dragging')};t.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;down=true;startX=e.clientX;startLeft=t.scrollLeft;t.classList.add('is-dragging');try{t.setPointerCapture(e.pointerId)}catch{}});t.addEventListener('pointermove',e=>{if(!down)return;t.scrollLeft=startLeft-(e.clientX-startX)});t.addEventListener('pointerup',stop);t.addEventListener('pointercancel',stop);t.addEventListener('lostpointercapture',stop)})();</script>`;
body=body.replace('</body>',drag+'</body>');
s=s.slice(0,gt+1)+body+s.slice(bodyEnd);
fs.writeFileSync(p,s);
console.log('Pawluv homepage repaired for Vercel build');
