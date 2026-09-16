const SUPABASE_URL = 'https://pmhjanbcwifyjqhyldni.supabase.co';
const SUPABASE_KEY = 'sb_publishable_nag4MWRF1AprHCdc-cCkjA_XNTnHM2';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const catalog = {
  'custom-pet-necklace': {name:'Custom Pet Necklace', type:'One Pet', price:700, img:'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1100&q=85', desc:'Turn your favorite pet photo into a timeless engraved necklace made just for you.', groups:[['Size',['Classic|0','Large|150']],['Finish',['Silver|0','Gold|100']]]},
  'engraved-pet-bracelet': {name:'Engraved Pet Bracelet', type:'1–4 Pets', price:700, img:'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1100&q=85', desc:'A premium engraved bracelet featuring the pets you love in one connected keepsake.', groups:[['Pets',['1 Pet|0','2 Pets|150','3 Pets|300','4 Pets|450']],['Finish',['Silver|0','Gold|100']]]},
  'custom-pet-portrait': {name:'Custom Pet Portrait', type:'One Pet', price:1060, img:'https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1100&q=85', desc:'A custom physical portrait created from your pet photo. Review the artwork before production.', groups:[['Size',['8 × 10 in|0','12 × 16 in|530','18 × 24 in|1060']],['Style',['Black & White|0','Color|150']]]},
  'custom-pet-keychain': {name:'Custom Pet Keychain', type:'One Pet', price:500, img:'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1100&q=85', desc:'Keep your pet close wherever you go with a custom engraved keychain.', groups:[['Size',['Small|0','Large|100']],['Finish',['Silver|0','Black|0']]]},
  'pet-memorial-piece': {name:'Pet Memorial Piece', type:'One Pet', price:850, img:'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1100&q=85', desc:'A meaningful memorial keepsake made to honor a beloved pet.', groups:[['Size',['Classic|0','Large|250']],['Style',['Black & White|0','Warm Tone|100']]]},
  'custom-pet-mug': {name:'Custom Pet Mug', type:'One Pet', price:499, img:'https://images.unsplash.com/photo-1518882570151-157d7c5e4c8c?auto=format&fit=crop&w=1100&q=85', desc:'Start every morning with your favorite face on a personalized mug.', groups:[['Size',['11 oz|0','15 oz|100']],['Style',['Black & White|0','Color|80']]]},
  'custom-multi-pet-piece': {name:'Custom Multi-Pet Piece', type:'2–4 Pets', price:900, img:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1100&q=85', desc:'Bring the whole pack together in one custom piece with 2–4 recognizable pet portraits.', groups:[['Pets',['2 Pets|0','3 Pets|200','4 Pets|400']],['Style',['Classic|0','Premium|150']]]},
  'pet-gift-set': {name:'Pet Gift Set', type:'Custom Gift', price:1190, img:'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1100&q=85', desc:'A curated custom gift for a pet parent, built around their favorite companion.', groups:[['Set',['Classic Set|0','Premium Set|250']],['Style',['Black & White|0','Color|150']]]}
};

const slug = document.body.dataset.product || 'custom-pet-necklace';
const p = catalog[slug] || catalog['custom-pet-necklace'];
const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

const style = document.createElement('style');
style.textContent = `
:root{--pink:#ff8fa7;--ink:#25263f;--line:#e5e5e5;--blue:#dce8ff}*{box-sizing:border-box}body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#222}a{text-decoration:none;color:inherit}button,input,textarea{font:inherit}.promo{height:38px;background:var(--pink);color:#fff;display:grid;place-items:center;font-size:13px;font-weight:800;text-decoration:underline}.nav{height:70px;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between;padding:0 5%;position:sticky;top:0;background:#fff;z-index:20}.logo{font:700 22px Georgia,serif}.navlinks{display:flex;gap:28px;font-size:12px;font-weight:800}.actions{display:flex;gap:18px;align-items:center}.action{text-align:center;font-size:22px}.action small{display:block;font-size:8px}.cartBtn{border:0;background:none;cursor:pointer;position:relative}.count{position:absolute;top:-6px;right:-8px;background:var(--pink);color:#fff;border-radius:20px;padding:3px 6px;font-size:9px}.deal{height:50px;background:#050505;color:#fff;display:flex;align-items:center;justify-content:center;gap:7px;font-weight:800;font-size:12px}.timer{background:#fff;color:#111;padding:4px 7px;text-align:center;min-width:37px}.timer b{display:block;font-size:14px}.timer small{font-size:7px}.product{max-width:1240px;margin:auto;padding:55px 25px 40px;display:grid;grid-template-columns:1.05fr .95fr;gap:65px}.mainImg{width:100%;aspect-ratio:1.05;object-fit:cover;border-radius:18px;background:#f5f2f0}.thumbs{display:flex;gap:12px;margin-top:18px}.thumb{width:78px;height:78px;object-fit:cover;border-radius:10px;border:2px solid #eee;cursor:pointer}.thumb.active{border-color:var(--pink)}.trustRow{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:35px}.trust{text-align:center;font-size:12px}.trust i{display:grid;place-items:center;margin:0 auto 8px;width:42px;height:42px;border-radius:50%;background:#ffe1e8;color:var(--pink);font-style:normal;font-size:21px}.rating{color:#f4b400;font-size:18px}.rating a{color:var(--pink);font-size:13px;text-decoration:underline}.product h1{font-size:40px;line-height:1.08;margin:12px 0}.subtitle{color:#555;margin-bottom:25px}.steps{display:grid;grid-template-columns:repeat(5,1fr);position:relative;margin:25px 0 35px}.steps:before{content:'';position:absolute;left:8%;right:8%;top:18px;height:5px;background:#eef0f2}.pstep{text-align:center;position:relative;font-size:9px;font-weight:800}.pstep b{display:grid;place-items:center;margin:0 auto 8px;width:38px;height:38px;border-radius:50%;background:#f0f2f4;border:5px solid #fff;box-shadow:0 0 0 1px #e4e4e4}.pstep:first-child b{background:var(--pink);color:#fff}.label{font-size:15px;font-weight:800;margin:20px 0 10px}.opts{display:flex;gap:9px;flex-wrap:wrap}.opt{padding:11px 14px;border:1px solid #d8d8d8;border-radius:9px;background:#fff;cursor:pointer}.opt.selected{border:2px solid #18bd83;padding:10px 13px;background:#f5fffb}.petInput{width:100%;padding:13px;border:1px solid #ddd;border-radius:9px}.upload{border:2px dashed #f0a0b2;border-radius:12px;padding:20px;text-align:center}.preview{display:none;max-width:160px;max-height:160px;margin:12px auto;border-radius:10px}.priceLine{display:flex;justify-content:space-between;align-items:end;margin:27px 0 5px}.subtotal{font-size:23px}.ship{font-size:12px;color:#666}.next{width:100%;border:0;border-radius:28px;background:#292929;color:#fff;padding:16px;font-weight:900;cursor:pointer}.ready{margin-top:12px;border:1px solid #ddd;border-radius:10px;padding:13px;text-align:center;font-weight:800;font-size:13px}.ready span{color:var(--pink);font-size:20px}.tabs{display:flex;border-bottom:1px solid #ddd;margin-top:18px}.tab{flex:1;padding:16px 5px;border:0;background:#fff;font-weight:800;cursor:pointer}.tab.active{border-bottom:2px solid #222}.panel{padding:18px 0;color:#555;line-height:1.65;font-size:14px}.faqSection{padding:55px 20px}.faqSection h2{text-align:center;font-size:38px}.faq{max-width:850px;margin:auto;border-bottom:1px solid #eee}.faq button{width:100%;border:0;background:#fff;padding:24px 0;text-align:left;font-weight:800;display:flex;justify-content:space-between;cursor:pointer}.faq p{display:none;color:#666;line-height:1.6;margin:0 0 20px}.faq.open p{display:block}.faq button span{width:26px;height:26px;border-radius:50%;background:var(--pink);color:#fff;display:grid;place-items:center}.social{background:#e4eaff;padding:70px 20px}.socialGrid{max-width:1180px;margin:auto;display:grid;grid-template-columns:.85fr 1.15fr 1.15fr;gap:14px}.socialCard{background:#fff;border-radius:14px;overflow:hidden}.socialCard img{width:100%;height:300px;object-fit:cover}.socialText{padding:26px}.socialText h3{font-size:34px;margin:0 0 18px}.how{padding:60px 20px}.how h2{text-align:center;font-size:34px}.howGrid{max-width:1180px;margin:35px auto 0;display:grid;grid-template-columns:repeat(3,1fr);gap:60px}.howItem{text-align:center}.howArt{height:220px;background:var(--blue);border-radius:24px;display:grid;place-items:center;font-size:80px}.howItem p{color:#666;line-height:1.55}.love{background:var(--ink);color:#fff;padding:65px 20px}.love h2{text-align:center;font-size:38px;margin:0 0 35px}.reviewGrid{max-width:1200px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.review{background:#fff;color:#222;border-radius:18px;overflow:hidden}.review img{width:100%;height:260px;object-fit:cover}.reviewBody{padding:20px}.pill{display:inline-block;background:var(--pink);color:#fff;padding:7px 15px;border-radius:20px;font-weight:900}.verified{color:#16b77d;font-size:12px;font-weight:800}.footer{background:#080808;color:#fff;padding:50px 20px}.footGrid{max-width:1180px;margin:auto;display:grid;grid-template-columns:1fr 1fr 1fr 1.4fr;gap:35px}.footer a{display:block;color:#bbb;margin:11px 0;font-size:13px}.newsletter{border:1px solid #555;border-radius:35px;padding:16px;color:#888}.rewards{position:fixed;right:18px;bottom:18px;background:var(--pink);color:#fff;border-radius:32px;padding:17px 23px;font-weight:800;z-index:50}.modal{display:none;position:fixed;inset:0;background:#0008;z-index:100;align-items:center;justify-content:center;padding:20px}.modal.show{display:flex}.modalBox{background:#fff;width:min(620px,100%);border-radius:18px;padding:28px;max-height:90vh;overflow:auto}.close{float:right;border:0;background:none;font-size:28px;cursor:pointer}.formGrid{display:grid;grid-template-columns:1fr 1fr;gap:13px}.field{display:flex;flex-direction:column;gap:7px}.full{grid-column:1/-1}.field input,.field textarea{border:1px solid #ddd;border-radius:9px;padding:12px}.cartItem{display:flex;gap:12px;padding:13px 0;border-bottom:1px solid #eee}.cartItem img{width:70px;height:70px;object-fit:cover;border-radius:9px}@media(max-width:900px){.navlinks{display:none}.product{grid-template-columns:1fr;gap:30px}.socialGrid,.howGrid,.reviewGrid{grid-template-columns:1fr}.footGrid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.product{padding:30px 15px}.product h1{font-size:32px}.trustRow{grid-template-columns:1fr}.formGrid{grid-template-columns:1fr}.full{grid-column:auto}.deal{font-size:9px}.timer{min-width:32px}}
`;
document.head.appendChild(style);

document.body.innerHTML = `
<a class="promo" href="/">EXTRA 25% OFF OUR BEST SELLERS</a>
<header class="nav"><a class="logo" href="/">🐾 PAWLUV</a><nav class="navlinks"><a href="/#shop">SHOP</a><a href="/#custom">CUSTOMIZE</a><a href="/#how">HOW IT WORKS</a><a href="/#reviews">REVIEWS</a></nav><div class="actions"><a class="action" href="/login/">◎<small>ACCOUNT</small></a><button class="cartBtn action" id="cartBtn">🛒<i class="count" id="count">0</i><small>CART</small></button></div></header>
<div class="deal">ORDER BY <span class="timer"><b id="d">05</b><small>DAYS</small></span>:<span class="timer"><b id="h">00</b><small>HRS</small></span>:<span class="timer"><b id="m">05</b><small>MIN</small></span>:<span class="timer"><b id="s">00</b><small>SEC</small></span> FOR 25% OFF</div>
<main>
<section class="product"><div><img class="mainImg" id="mainImg" src="${p.img}" alt="${esc(p.name)}"><div class="thumbs"><img class="thumb active" src="${p.img}" onclick="swapImg(this)"><img class="thumb" src="${p.img}&sat=-15" onclick="swapImg(this)"><img class="thumb" src="${p.img}&blur=1" onclick="swapImg(this)"></div><div class="trustRow"><div class="trust"><i>♥</i><b>Real Artists</b></div><div class="trust"><i>✎</i><b>Free Previews & Edits</b></div><div class="trust"><i>★</i><b>5 Star Reviews</b></div></div></div>
<div><div class="rating">★★★★★ <a href="#reviews">See what Pawluv customers said about their purchase</a></div><h1>${esc(p.name)}</h1><p class="subtitle">${esc(p.type)}</p><div class="steps"><div class="pstep"><b>1</b>SIZING</div><div class="pstep"><b>2</b>STYLE</div><div class="pstep"><b>3</b>BACKGROUND</div><div class="pstep"><b>4</b>UPLOAD</div><div class="pstep"><b>5</b>EXTRAS</div></div><div id="options"></div><div class="label">PET NAME</div><input class="petInput" id="petName" placeholder="e.g. Bondo"><div class="label">UPLOAD YOUR PET PHOTO</div><div class="upload"><b>Choose a clear photo</b><br><small>JPG, PNG or WEBP</small><input id="photo" type="file" accept="image/png,image/jpeg,image/webp" style="margin-top:12px"><img class="preview" id="preview"></div><div class="priceLine"><div><div class="subtotal">Subtotal: <b id="price"></b></div><div class="ship">Congrats! You're eligible for <b>FREE SHIPPING</b> on qualifying orders.</div></div></div><button class="next" id="nextBtn">NEXT STEP ❯❯</button><div class="ready"><span>◉</span> Artwork Ready in 1–2 Days</div><div class="tabs"><button class="tab active" data-tab="description">Description</button><button class="tab" data-tab="shipping">Shipping and Returns</button><button class="tab" data-tab="guarantee">Satisfaction Guarantee</button></div><div class="panel" id="description">${esc(p.desc)}<ul><li>Designed around your pet photo</li><li>Artwork proof ready in 1–2 days</li><li>Free design revisions before production</li></ul></div><div class="panel" id="shipping" style="display:none">Orders are prepared after artwork approval. Standard delivery is available across Egypt. Rush production can be requested for an additional EGP 200 when available.</div><div class="panel" id="guarantee" style="display:none">You can review the artwork proof and request revisions before production so the final design matches your request.</div></div></section>
<section class="faqSection"><h2>Frequently Asked Questions</h2><div id="faqs"></div></section>
<section class="social"><div class="socialGrid"><article class="socialCard socialText"><h3>Rated 4.8 from thousands of pet parents</h3><p>“The artwork captured my pet's personality beautifully. The preview made me feel confident ordering.”</p><div class="rating">★★★★★</div></article><article class="socialCard"><img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=85"></article><article class="socialCard"><img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85"></article></div></section>
<section class="how" id="how"><h2>How it works</h2><div class="howGrid"><div class="howItem"><div class="howArt">📤</div><h3>1. Upload a pet photo</h3><p>Choose your options and upload a clear photo of your fur baby.</p></div><div class="howItem"><div class="howArt">✅</div><h3>2. Preview your custom pet art</h3><p>In 1–2 days we'll send a proof. Request edits or approve it for production.</p></div><div class="howItem"><div class="howArt">🐾</div><h3>3. Cherish them forever!</h3><p>We craft, pack and ship your finished keepsake to you.</p></div></div></section>
<section class="love" id="reviews"><h2>Pet owners love their custom artwork!</h2><div class="reviewGrid"><article class="review"><img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=85"><div class="reviewBody"><span class="pill">★★★★★</span><p>“It was beyond amazing! Beautiful detail and such a special gift idea.”</p><b>Maria</b><div class="verified">● Verified Customer</div></div></article><article class="review"><img src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=85"><div class="reviewBody"><span class="pill">★★★★★</span><p>“The final piece looked so much like my pet. I loved every detail.”</p><b>Hayley</b><div class="verified">● Verified Customer</div></div></article><article class="review"><img src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=85"><div class="reviewBody"><span class="pill">★★★★★</span><p>“A thoughtful keepsake and the process was easy from start to finish.”</p><b>Julia</b><div class="verified">● Verified Customer</div></div></article></div></section>
</main><footer class="footer"><div class="footGrid"><div><h3>PAWLUV</h3><p style="color:#aaa">Custom pet jewelry and keepsakes made from the pets you love.</p></div><div><h3>DISCOVER</h3><a href="/#how">How It Works</a><a href="/#reviews">Reviews</a><a href="/#shop">Shop</a><a href="/#custom">Custom Orders</a></div><div><h3>HELP</h3><a href="/login/">My Account</a><a href="/#custom">Contact Us</a><a href="#">Shipping Times</a><a href="#">FAQ</a></div><div><h3>STAY IN THE LOOP</h3><p style="color:#aaa">Leave your email for Pawluv updates.</p><div class="newsletter">Enter your email →</div></div></div><div style="max-width:1180px;margin:40px auto 0;border-top:1px solid #333;padding-top:18px;color:#888;font-size:12px">© 2026 Pawluv. All rights reserved.</div></footer>
<div class="rewards">♧ &nbsp; Rewards</div>
<div class="modal" id="orderModal"><div class="modalBox"><button class="close" id="closeOrder">×</button><h2>Complete your custom order</h2><p>${esc(p.name)} · <b id="modalPrice"></b></p><form id="orderForm"><div class="formGrid"><div class="field"><label>Your name</label><input id="customerName" required placeholder="Your name"></div><div class="field"><label>Phone</label><input id="phone" required placeholder="01xxxxxxxxx"></div><div class="field full"><label>Delivery address</label><textarea id="address" required rows="3" placeholder="Full delivery address"></textarea></div><div class="field full"><label>Notes</label><textarea id="notes" rows="3" placeholder="Font, engraving notes, special requests..."></textarea></div><div class="field full"><label><input id="rush" type="checkbox"> Rush production (+ EGP 200), if available</label></div><div class="field full"><button class="next" type="submit">ADD TO CART & CONTINUE</button><p id="msg" style="font-size:12px;color:#666;text-align:center"></p></div></div></form></div></div>
<div class="modal" id="cartModal"><div class="modalBox"><button class="close" id="closeCart">×</button><h2>Your Cart</h2><div id="cartItems"></div><h3 id="cartTotal"></h3><a class="next" style="display:block;text-align:center" href="/#custom">CHECKOUT</a></div></div>`;

function renderOptions(){
  let html='';
  p.groups.forEach(group=>{
    html += '<div class="label">CHOOSE '+esc(group[0].toUpperCase())+'</div><div class="opts">';
    group[1].forEach((item,i)=>{
      const parts=item.split('|');
      html += '<button class="opt '+(i===0?'selected':'')+'" data-group="'+esc(group[0])+'" data-add="'+parts[1]+'">'+esc(parts[0])+(Number(parts[1])?' <small>+ EGP '+Number(parts[1]).toLocaleString()+'</small>':'')+'</button>';
    });
    html += '</div>';
  });
  $('options').innerHTML=html;
  document.querySelectorAll('.opt').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.opt[data-group="'+CSS.escape(btn.dataset.group)+'"]').forEach(x=>x.classList.remove('selected'));
    btn.classList.add('selected'); calc();
  }));
}
function calc(){
  const total=p.price+[...document.querySelectorAll('.opt.selected')].reduce((a,b)=>a+Number(b.dataset.add||0),0);
  $('price').textContent='EGP '+total.toLocaleString();
  $('modalPrice').textContent='EGP '+total.toLocaleString();
  return total;
}
function swapImg(el){$('mainImg').src=el.src;document.querySelectorAll('.thumb').forEach(x=>x.classList.remove('active'));el.classList.add('active')}
window.swapImg=swapImg;

const faqs=[
 ['Can I print more than one pet on one product?','Yes. Choose a multi-pet product or select the number of pets offered on the product page.'],
 ['Can I see the pet portrait before printing?','Yes. We prepare an artwork proof before production so you can review it and request edits.'],
 ['Is my pet photo good enough to use?','Clear, well-lit photos with the pet face visible usually work best.'],
 ['What if I do not like my pet portrait?','You can request revisions during the proof stage before production.'],
 ['Do you ship across Egypt?','Yes. We offer delivery across Egypt, with timing depending on destination and order type.'],
 ['Do you just design dog portraits?','No. We create custom pieces for dogs, cats and other beloved pets.'],
 ['Can you feature my pet on your website?','Only with your permission. We may ask customers if they would like to share their finished piece.']
];
$('faqs').innerHTML=faqs.map(x=>'<div class="faq"><button>'+esc(x[0])+'<span>⌄</span></button><p>'+esc(x[1])+'</p></div>').join('');
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));

document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));btn.classList.add('active');
  ['description','shipping','guarantee'].forEach(id=>$(id).style.display=id===btn.dataset.tab?'block':'none');
}));

let cart=JSON.parse(localStorage.getItem('pawluv-cart')||'[]');
function updateCart(){
  $('count').textContent=cart.length;
  $('cartItems').innerHTML=cart.length?cart.map((x,i)=>'<div class="cartItem"><img src="'+esc(x.img)+'"><div><b>'+esc(x.name)+'</b><div>'+esc(x.pet||'Pet')+' · EGP '+Number(x.price).toLocaleString()+'</div><button data-remove="'+i+'">Remove</button></div></div>').join(''):'<p>Your cart is empty.</p>';
  document.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{cart.splice(Number(b.dataset.remove),1);localStorage.setItem('pawluv-cart',JSON.stringify(cart));updateCart()}));
  $('cartTotal').textContent='Total: EGP '+cart.reduce((a,x)=>a+Number(x.price),0).toLocaleString();
}
$('cartBtn').addEventListener('click',()=>{$('cartModal').classList.add('show');updateCart()});
$('closeCart').addEventListener('click',()=>$('cartModal').classList.remove('show'));
$('nextBtn').addEventListener('click',()=>{$('orderModal').classList.add('show');calc()});
$('closeOrder').addEventListener('click',()=>$('orderModal').classList.remove('show'));
$('photo').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{$('preview').src=r.result;$('preview').style.display='block'};r.readAsDataURL(f)});

async function uploadFile(file,userId){
  if(!file)return null;
  const ext=(file.name.split('.').pop()||'jpg').replace(/[^a-z0-9]/gi,'');
  const path=(userId||'guest')+'/'+crypto.randomUUID()+'.'+ext;
  const result=await sb.storage.from('pet-uploads').upload(path,file,{contentType:file.type});
  if(result.error)throw result.error;
  return sb.storage.from('pet-uploads').getPublicUrl(path).data.publicUrl;
}

$('orderForm').addEventListener('submit',async e=>{
  e.preventDefault();$('msg').textContent='Submitting your order…';
  try{
    const {data:{user}}=await sb.auth.getUser();
    const total=calc()+($('rush').checked?200:0);
    const selected=[...document.querySelectorAll('.opt.selected')].map(x=>x.textContent.trim()).join(' · ');
    const photoUrl=await uploadFile($('photo').files[0],user?.id);
    const item={name:p.name,price:total,img:p.img,pet:$('petName').value||'Pet',options:selected,photo_url:photoUrl};
    cart.push(item);localStorage.setItem('pawluv-cart',JSON.stringify(cart));
    if(user){
      const ins=await sb.from('orders').insert({user_id:user.id,customer_name:$('customerName').value,email:user.email||null,phone:$('phone').value,address:$('address').value,status:'pending',total:total,notes:p.name+'; '+selected+'; Pet: '+item.pet+'; '+($('notes').value||'')}).select('id').single();
      if(!ins.error&&ins.data)await sb.from('order_items').insert({order_id:ins.data.id,product_name:p.name,quantity:1,unit_price:total,pet_name:item.pet,pet_count:1,photo_url:photoUrl});
    }
    $('msg').textContent='Added to cart successfully.';updateCart();setTimeout(()=>$('orderModal').classList.remove('show'),700);
  }catch(err){console.error(err);$('msg').textContent='Could not complete the order. Please check your details and try again.';}
});

let end=Date.now()+5*86400000+14*3600000+5*60000;
setInterval(()=>{let x=Math.max(0,end-Date.now());$('d').textContent=String(Math.floor(x/86400000)).padStart(2,'0');x%=86400000;$('h').textContent=String(Math.floor(x/3600000)).padStart(2,'0');x%=3600000;$('m').textContent=String(Math.floor(x/60000)).padStart(2,'0');$('s').textContent=String(Math.floor(x/1000)%60).padStart(2,'0')},1000);

renderOptions();calc();updateCart();