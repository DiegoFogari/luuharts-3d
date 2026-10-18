
// LuuhArt's 3D — App completo
const DEFAULT_PASS = "luarts2026";
const DEFAULT_PIX = "00020126800014br.gov.bcb.pix013620df61f4-a128-48e2-86a2-63c904946f840218Placa de Automação52040000530398654072500.005802BR5925DIEGO HENRIQUE VIEGA FOGA6014RIO DE JANEIRO62160512DFEngenharia63046E45";
const DEFAULT_TON = "https://payment-link-v3.ton.com.br/pl_gEAvrKdQaDV32Nnte9sY43Ojl9zbW70L";
const DEFAULT_PIX_KEY = "20df61f4-a128-48e2-86a2-63c904946f84";

const DEFAULT_SETTINGS = {
  brand: "LuuhArt's 3D",
  tagline: "Impressões 3D personalizadas",
  prodT: "Produtos à Venda", prodS: "Peças prontas — entrega rápida",
  amoT: "Modelos de Amostra", amoS: "Sob encomenda — personalize o seu",
  upT: "Enviar seu Arquivo", upS: "STL, OBJ, 3MF — orçamento personalizado",
  pagT: "Carrinho & Pagamento", pagS: "PIX à vista ou cartão até 12x (Ton)",
  logo: "",
  colors: { bg:"#03030f", surface:"#0a0a1c", cyan:"#00f0ff", purple:"#b026ff", pink:"#ff2bd6", text:"#eef6ff" },
  cepOrigem: "13600-000",
  pesoMedio: 0.5,
  freteBase: 25,
  freteMult: 1.2,
  tonLink: DEFAULT_TON,
  pixPayload: DEFAULT_PIX,
  pixKey: DEFAULT_PIX_KEY,
  adminPass: DEFAULT_PASS,
  whatsapp: "5516997828851",
  whatsappName: "Luiza Helena",
  cidadeOrigem: "Araras-SP"
};

const DEFAULT_PRODUCTS = [
  {id:1,nome:"Vaso Geométrico Minimalista",preco:59.90,material:"PLA",desc:"Vaso decorativo geométrico moderno. Ideal para suculentas ou decoração. Acabamento fosco.",categoria:"venda",badge:"Pronta entrega",stock:15,peso:0.25,img:"https://images.unsplash.com/photo-1485955900004-4fefcb7d75d4?w=400&h=400&fit=crop"},
  {id:2,nome:"Suporte Headset Gamer",preco:49.90,material:"PETG",desc:"Suporte ergonômico para fones. Base estável, várias cores sob consulta.",categoria:"venda",badge:"Mais vendido",stock:22,peso:0.2,img:"https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop"},
  {id:3,nome:"Organizador de Cabos Modular",preco:29.90,material:"PLA",desc:"Kit organizador para USB, HDMI e carregadores. Mesa limpa.",categoria:"venda",badge:"",stock:40,peso:0.1,img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"},
  {id:4,nome:"Dragão Articulado Flexi",preco:89.90,material:"PLA",desc:"Dragão articulado (flexi) com movimento realista. Colecionável.",categoria:"venda",badge:"Destaque",stock:10,peso:0.15,img:"https://images.unsplash.com/photo-1614726365723-49cfaee6394c?w=400&h=400&fit=crop"},
  {id:5,nome:"Porta-Chaves de Parede",preco:34.90,material:"PLA",desc:"5 ganchos, design minimalista para entrada.",categoria:"venda",badge:"",stock:18,peso:0.12,img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop"},
  {id:6,nome:"Caixa Organizadora Modular",preco:42.90,material:"PETG",desc:"Caixa empilhável com tampa. Resistente.",categoria:"venda",badge:"Novo",stock:20,peso:0.3,img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop"},
  {id:7,nome:"Suporte Celular Criativo",preco:32.90,material:"PLA",desc:"Suporte de mesa para smartphone. Ângulo confortável.",categoria:"venda",badge:"",stock:25,peso:0.08,img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"},
  {id:8,nome:"Miniatura RPG / D&D",preco:24.90,material:"Resina",desc:"Miniatura detalhada para RPG. Pintura sob encomenda.",categoria:"venda",badge:"",stock:30,peso:0.05,img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"},
  {id:101,nome:"Action Figure Personalizada",preco:149,material:"Resina / PLA",desc:"Figure sob encomenda. Envie referência e personalizamos.",categoria:"amostra",badge:"Sob encomenda",stock:99,peso:0.4,img:"https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop"},
  {id:102,nome:"Protótipo Mecânico",preco:95,material:"ABS / PETG",desc:"Protótipo funcional com tolerâncias precisas.",categoria:"amostra",badge:"Engenharia",stock:99,peso:0.35,img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop"},
  {id:103,nome:"Joia / Acessório",preco:75,material:"Resina",desc:"Anéis, pingentes e brincos em resina premium.",categoria:"amostra",badge:"",stock:99,peso:0.05,img:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop"},
  {id:104,nome:"Maquete Arquitetônica",preco:180,material:"PLA / PETG",desc:"Maquete sob medida. Escala personalizada.",categoria:"amostra",badge:"Premium",stock:99,peso:0.8,img:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"},
  {id:105,nome:"Topo de Bolo Personalizado",preco:55,material:"PLA",desc:"Topo de bolo temático para festas e casamentos.",categoria:"amostra",badge:"Festas",stock:99,peso:0.1,img:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop"},
  {id:106,nome:"Peça de Reposição",preco:39,material:"ABS / PETG",desc:"Reposição a partir de modelo 3D ou medição.",categoria:"amostra",badge:"",stock:99,peso:0.2,img:"https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop"}
];


// ===== PIX dinâmico (valor = total do carrinho) =====
function crc16(str) {
  let crc = 0xFFFF;
  for (let i = 0; i < str.length; i++) {
    crc ^= str.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
      crc &= 0xFFFF;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}
function tlv(id, value) {
  const v = String(value);
  return id + String(v.length).padStart(2, "0") + v;
}
/** Gera payload PIX Copia e Cola com valor exato (BRL) */
function buildPixPayload(amount) {
  const key = (settings.pixKey || "20df61f4-a128-48e2-86a2-63c904946f84").trim();
  const name = "LUUHARTS 3D"; // máx ~25 chars
  const city = "ARARAS";
  const txid = "LUUH" + Date.now().toString(36).toUpperCase().slice(-8);

  // Merchant Account Information (ID 26)
  const gui = tlv("00", "br.gov.bcb.pix");
  const chave = tlv("01", key);
  const mai = tlv("26", gui + chave);

  let payload = "";
  payload += tlv("00", "01");           // Payload Format Indicator
  payload += tlv("01", "12");           // Point of Initiation - 12 = dinâmico
  payload += mai;
  payload += tlv("52", "0000");         // MCC
  payload += tlv("53", "986");          // BRL
  if (amount && amount > 0) {
    payload += tlv("54", Number(amount).toFixed(2)); // valor exato
  }
  payload += tlv("58", "BR");
  payload += tlv("59", name.slice(0, 25));
  payload += tlv("60", city.slice(0, 15));
  payload += tlv("62", tlv("05", txid.slice(0, 25))); // TXID
  payload += "6304";
  payload += crc16(payload);
  return payload;
}
function updatePixQR(amount) {
  const payload = buildPixPayload(amount);
  const img = document.getElementById("pix-qr");
  if (img) {
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(payload);
    img.dataset.payload = payload;
  }
  const copyBtn = document.getElementById("btn-copy-pix");
  if (copyBtn) {
    copyBtn.onclick = () => navigator.clipboard.writeText(payload).then(() => toast("PIX (valor R$ " + fmt(amount) + ") copiado!"));
  }
  const valEl = document.getElementById("pix-valor");
  if (valEl) valEl.textContent = "Valor do PIX: R$ " + fmt(amount);
  return payload;
}

let settings = loadJSON("luuh_settings", DEFAULT_SETTINGS);
let products = loadJSON("luuh_products", DEFAULT_PRODUCTS);
let cart = loadJSON("luuh_cart", []);
let currentProduct = null, currentQty = 1, uploadedFiles = [], lastFrete = 0;


// ===== Arquivos de orçamento (IndexedDB) =====
const IDB_NAME = "luuharts_files";
const IDB_STORE = "uploads";

function openIDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbPut(record) {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).put(record);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
async function idbGetAll() {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const req = tx.objectStore(IDB_STORE).getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}
async function idbGet(id) {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readonly");
    const req = tx.objectStore(IDB_STORE).get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function idbDelete(id) {
  const db = await openIDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, "readwrite");
    tx.objectStore(IDB_STORE).delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
function downloadBase64(dataUrl, filename) {
  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
/** Tenta hospedar arquivo e retornar link público (para colar no WhatsApp) */
async function tryUploadPublic(file) {
  try {
    const fd = new FormData();
    fd.append("file", file);
    const ctrl = new AbortController();
    const t = setTimeout(function(){ ctrl.abort(); }, 8000);
    const res = await fetch("https://tmpfiles.org/api/v1/upload", { method: "POST", body: fd, signal: ctrl.signal });
    clearTimeout(t);
    if (!res.ok) throw new Error("upload fail");
    const data = await res.json();
    let url = (data && data.data && data.data.url) ? data.data.url : "";
    if (url) {
      url = url.replace("http://", "https://").replace("tmpfiles.org/", "tmpfiles.org/dl/");
      return url;
    }
  } catch (e) {
    console.warn("upload público falhou", e);
  }
  return null;
}

function loadJSON(k, def) {
  try {
    const s = localStorage.getItem(k);
    if (!s) return Array.isArray(def) ? [...def] : {...def};
    const parsed = JSON.parse(s);
    if (Array.isArray(def)) return Array.isArray(parsed) ? parsed : [...def];
    return {...def, ...parsed};
  } catch (e) {
    console.warn("loadJSON", k, e);
    return Array.isArray(def) ? [...def] : {...def};
  }
}
function saveJSON(k, v) { localStorage.setItem(k, JSON.stringify(v)); }
function saveSettings() { saveJSON("luuh_settings", settings); }
function saveProducts() { saveJSON("luuh_products", products); }
function saveCart() { saveJSON("luuh_cart", cart); }

document.addEventListener("DOMContentLoaded", () => { try {
  // merge defaults for missing keys
  settings = {...DEFAULT_SETTINGS, ...settings};
  if (!Array.isArray(products) || !products.length) products = [...DEFAULT_PRODUCTS];
  applySettings();
  renderProdutos(); renderAmostras(); renderCart();
  setupNav(); setupUpload(); setupCheckout(); setupCEP(); setupMasks(); setupAdmin(); setupFrete(); setupPix();
} catch(err){ console.error('LuuhArt init error', err); alert('Erro ao iniciar o app: '+err.message); }
});

function applySettings() {
  document.getElementById("txt-brand").textContent = settings.brand;
  document.getElementById("txt-tagline").textContent = settings.tagline;
  document.getElementById("txt-prod-t").textContent = settings.prodT;
  document.getElementById("txt-prod-s").textContent = settings.prodS;
  document.getElementById("txt-amo-t").textContent = settings.amoT;
  document.getElementById("txt-amo-s").textContent = settings.amoS;
  document.getElementById("txt-up-t").textContent = settings.upT;
  document.getElementById("txt-up-s").textContent = settings.upS;
  document.getElementById("txt-pag-t").textContent = settings.pagT;
  document.getElementById("txt-pag-s").textContent = settings.pagS;
  const logo = document.getElementById("hero-logo");
  if (settings.logo) logo.src = settings.logo;
  const c = settings.colors || DEFAULT_SETTINGS.colors;
  const r = document.documentElement.style;
  r.setProperty("--bg", c.bg); r.setProperty("--surface", c.surface);
  r.setProperty("--cyan", c.cyan); r.setProperty("--purple", c.purple);
  r.setProperty("--pink", c.pink); r.setProperty("--text", c.text);
  // update ton link
  document.querySelectorAll(".btn-link").forEach(a => { if (settings.tonLink) a.href = settings.tonLink; });
}

function setupPix() {
  const sub = cart.reduce((s,i)=>s+i.preco*i.qty,0);
  updatePixQR(sub > 0 ? sub : 0.01);
}

function setupNav() {
  document.querySelectorAll(".nav-item").forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));
  document.getElementById("cart-btn").addEventListener("click", () => switchTab("pagamento"));
  document.getElementById("detail-back").addEventListener("click", closeDetail);
}
function switchTab(id) {
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const p = document.getElementById("tab-" + id); if (p) p.classList.add("active");
  const n = document.querySelector('.nav-item[data-tab="'+id+'"]'); if (n) n.classList.add("active");
  closeDetail(); document.getElementById("admin-panel").classList.add("hidden");
}

function renderProdutos(f="") {
  const list = products.filter(p => p.categoria==="venda" && (p.nome.toLowerCase().includes(f.toLowerCase())||(p.material||"").toLowerCase().includes(f.toLowerCase())));
  document.getElementById("produtos-grid").innerHTML = list.map(p => cardHTML(p)).join("") || emptyMsg();
}
function renderAmostras() {
  document.getElementById("amostras-grid").innerHTML = products.filter(p=>p.categoria==="amostra").map(p=>cardHTML(p,true)).join("") || emptyMsg();
}
function emptyMsg(){ return '<p style="grid-column:1/-1;text-align:center;color:var(--muted);padding:24px">Nenhum item</p>'; }
function cardHTML(p, amostra=false) {
  return `<div class="product-card" onclick="openDetail(${p.id})"><div class="product-img">${p.img?`<img src="${p.img}" alt="${esc(p.nome)}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=ph>🖨️</div>'"/>`:`<div class="ph">🖨️</div>`}${p.badge?`<span class="product-badge">${esc(p.badge)}</span>`:""}</div><div class="product-info"><h3>${esc(p.nome)}</h3><div class="price">${amostra?"a partir de ":""}R$ ${fmt(p.preco)}</div><div class="mat">${esc(p.material||"")}</div>${p.stock<=0?'<div class="stock-out">Esgotado</div>':""}</div></div>`;
}
function esc(s){ return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c])); }
document.getElementById("search-produtos").addEventListener("input", e => renderProdutos(e.target.value));

function openDetail(id) {
  currentProduct = products.find(p=>p.id===id); if(!currentProduct) return;
  currentQty=1; document.getElementById("qty-value").textContent="1";
  const img=document.getElementById("detail-image"); img.src=currentProduct.img||""; img.alt=currentProduct.nome;
  document.getElementById("detail-title").textContent=currentProduct.nome;
  const a=currentProduct.categoria==="amostra";
  document.getElementById("detail-price").textContent=(a?"a partir de ":"")+`R$ ${fmt(currentProduct.preco)}`;
  document.getElementById("detail-desc").textContent=currentProduct.desc||"";
  document.getElementById("detail-meta").innerHTML=`<span class="tag">${esc(currentProduct.material||"—")}</span><span class="tag">${a?"Sob encomenda":"Pronta entrega"}</span>`;
  document.getElementById("product-detail").classList.remove("hidden");
}
function closeDetail(){ document.getElementById("product-detail").classList.add("hidden"); currentProduct=null; }
document.getElementById("qty-minus").onclick=()=>{if(currentQty>1){currentQty--;document.getElementById("qty-value").textContent=currentQty;}};
document.getElementById("qty-plus").onclick=()=>{currentQty++;document.getElementById("qty-value").textContent=currentQty;};
document.getElementById("btn-add-cart").onclick=()=>{if(!currentProduct||currentProduct.stock<=0){toast("Indisponível");return;} addToCart(currentProduct,currentQty); toast("Adicionado!"); closeDetail();};
document.getElementById("btn-buy-now").onclick=()=>{if(!currentProduct||currentProduct.stock<=0){toast("Indisponível");return;} addToCart(currentProduct,currentQty); closeDetail(); switchTab("pagamento");};

function addToCart(p,q){ const e=cart.find(i=>i.id===p.id); if(e)e.qty+=q; else cart.push({id:p.id,nome:p.nome,preco:p.preco,img:p.img,peso:p.peso||0.3,qty:q}); saveCart(); renderCart(); }
function removeFromCart(id){ cart=cart.filter(i=>i.id!==id); saveCart(); renderCart(); }
function updateCartQty(id,d){ const i=cart.find(x=>x.id===id); if(!i)return; i.qty+=d; if(i.qty<=0)removeFromCart(id); else{saveCart();renderCart();} }
function renderCart(){
  document.getElementById("cart-count").textContent=cart.reduce((s,i)=>s+i.qty,0);
  const empty=document.getElementById("cart-empty"), content=document.getElementById("cart-content");
  if(!cart.length){empty.classList.remove("hidden");content.classList.add("hidden");return;}
  empty.classList.add("hidden");content.classList.remove("hidden");
  document.getElementById("cart-items").innerHTML=cart.map(i=>`<div class="cart-item">${i.img?`<img src="${i.img}" onerror="this.style.display='none'"/>`:"<div style='width:52px;height:52px;background:var(--surface2);border-radius:8px'></div>"}<div class="info"><h4>${esc(i.nome)}</h4><div class="ip">R$ ${fmt(i.preco*i.qty)}</div><div class="qty-row"><button onclick="updateCartQty(${i.id},-1)">−</button><span>${i.qty}</span><button onclick="updateCartQty(${i.id},1)">+</button></div></div><button class="rm" onclick="removeFromCart(${i.id})">🗑️</button></div>`).join("");
  const sub=cart.reduce((s,i)=>s+i.preco*i.qty,0);
  document.getElementById("subtotal").textContent=`R$ ${fmt(sub)}`;
  document.getElementById("total").textContent=`R$ ${fmt(sub)}`;
  document.getElementById("frete-val").textContent=lastFrete?`R$ ${fmt(lastFrete)}`:"Calcular ↓";
  updatePixQR(sub > 0 ? sub : 0.01);
}

function setupFrete(){
  document.getElementById("btn-calc-frete").onclick=calcFrete;
  document.getElementById("frete-cep").addEventListener("input",e=>{let v=e.target.value.replace(/\D/g,"");if(v.length>5)v=v.slice(0,5)+"-"+v.slice(5,8);e.target.value=v;});
}
function calcFrete(){
  const cep=(document.getElementById("frete-cep").value||"").replace(/\D/g,"");
  if(cep.length!==8){toast("Informe um CEP válido");return;}
  const peso=cart.reduce((s,i)=>s+(i.peso||0.3)*i.qty,0) || (settings.pesoMedio||0.5);
  // Estimativa por região (tabela simplificada inspirada em faixas SEDEX)
  const origem=(settings.cepOrigem||"13600").replace(/\D/g,"").slice(0,2);
  const dest=cep.slice(0,2);
  let fator=1;
  if(origem===dest) fator=0.7;
  else if(Math.abs(+origem-+dest)<=5) fator=1;
  else if(Math.abs(+origem-+dest)<=15) fator=1.4;
  else fator=1.9;
  const base=+(settings.freteBase||25);
  const mult=+(settings.freteMult||1.2);
  const pesoExtra=Math.max(0, peso-0.3)*12;
  lastFrete=Math.round((base*fator*mult+pesoExtra)*100)/100;
  document.getElementById("frete-result").innerHTML=`SEDEX estimado: <strong>R$ ${fmt(lastFrete)}</strong> · Peso ~${peso.toFixed(2)} kg<br/><span class="hint">Prazo típico: 1–5 dias úteis (conforme região). Valor pago por você nos Correios.</span>`;
  document.getElementById("frete-val").textContent=`R$ ${fmt(lastFrete)}`;
  // Sync CEP to checkout
  document.getElementById("cli-cep").value=document.getElementById("frete-cep").value;
  document.getElementById("cli-cep").dispatchEvent(new Event("blur"));
  toast("Frete estimado!");
}


function handleFiles(fs) {
  if (!fs || !fs.length) return;
  for (let i = 0; i < fs.length; i++) {
    const f = fs[i];
    if (f.size > 50 * 1024 * 1024) {
      toast(f.name + " muito grande (máx 50 MB)");
      continue;
    }
    uploadedFiles.push(f);
  }
  renderFiles();
}
function renderFiles() {
  const box = document.getElementById("file-list");
  if (!box) return;
  if (!uploadedFiles.length) {
    box.innerHTML = "";
    return;
  }
  box.innerHTML = uploadedFiles.map(function(f, i) {
    return '<div class="file-item"><span>📄 ' + (f.name || "arquivo") +
      ' (' + Math.round((f.size || 0) / 1024) + ' KB)</span>' +
      '<button type="button" onclick="removeUploadFile(' + i + ')">✕</button></div>';
  }).join("");
}
function removeUploadFile(i) {
  uploadedFiles.splice(i, 1);
  renderFiles();
}
window.removeUploadFile = removeUploadFile;
window.handleFiles = handleFiles;
window.renderFiles = renderFiles;

function setupUpload(){
  const waClose = document.getElementById("orc-wa-close");
  if (waClose) waClose.onclick = function() {
    const p = document.getElementById("orc-wa-panel");
    if (p) p.classList.add("hidden");
  };

  const zone=document.getElementById("upload-zone"), input=document.getElementById("file-input");
  if (zone && input) {
    zone.onclick = function(){ input.click(); };
    zone.ondragover = function(e){ e.preventDefault(); zone.classList.add("dragover"); };
    zone.ondragleave = function(){ zone.classList.remove("dragover"); };
    zone.ondrop = function(e){ e.preventDefault(); zone.classList.remove("dragover"); handleFiles(e.dataTransfer.files); };
    input.onchange = function(){ handleFiles(input.files); };
  }
  document.getElementById("upload-form").onsubmit = async (e) => {
    e.preventDefault();
    const desc = (document.getElementById("upload-desc").value || "").trim();
    if (!desc) { toast("Descreva o que você precisa"); return; }
    if (!uploadedFiles.length) { toast("Anexe o arquivo STL/OBJ do projeto"); return; }
    const qtd = document.getElementById("upload-qtd")?.value || 1;
    const nome = document.getElementById("upload-nome")?.value || "";
    const tel = document.getElementById("upload-tel")?.value || "";
    const material = document.getElementById("upload-material").value;
    const cor = document.getElementById("upload-cor").value;
    const btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.textContent = "Salvando..."; }

    const fileMeta = [];
    const orderId = "orc_" + Date.now();

    try {
      for (const f of uploadedFiles) {
        let dataUrl = null;
        try {
          if (f.size <= 4.5 * 1024 * 1024) {
            dataUrl = await fileToBase64(f);
            await idbPut({
              id: orderId + "_" + f.name,
              orderId: orderId,
              name: f.name,
              size: f.size,
              type: f.type || "application/octet-stream",
              dataUrl: dataUrl,
              date: new Date().toISOString()
            });
          }
        } catch (err) { console.warn("idb", err); }

        let link = null;
        try { link = await tryUploadPublic(f); } catch (err) { console.warn("upload", err); }

        fileMeta.push({ name: f.name, size: f.size, link: link || null });
      }

      const record = {
        id: orderId,
        files: fileMeta,
        desc: desc,
        qtd: qtd,
        nome: nome,
        tel: tel,
        material: material,
        cor: cor,
        date: new Date().toISOString(),
        status: "novo"
      };
      const olist = loadJSON("luuh_uploads", []);
      olist.unshift(record);
      saveJSON("luuh_uploads", olist);

      // Texto para WhatsApp (sem anexo — só aviso + nomes dos arquivos + link se houver)
      var text = "Ola Luiza Helena! Novo pedido de ORCAMENTO na LuuhArt's 3D\n\n";
      text += "Qtd: " + qtd + "\n";
      text += "Material: " + material + "\n";
      text += "Cor: " + (cor || "-") + "\n";
      text += "Nome: " + (nome || "-") + "\n";
      text += "Tel: " + (tel || "-") + "\n";
      text += "Detalhes: " + desc.slice(0, 900) + "\n\n";
      text += "Arquivo(s):\n";
      fileMeta.forEach(function(fm) {
        text += "- " + fm.name + "\n";
        if (fm.link) text += "  Link: " + fm.link + "\n";
      });
      text += "\n(Arquivo completo tambem ficou salvo no admin do app.)";

      var num = (settings.whatsapp || "5516997828851").replace(/\D/g, "");
      var waUrl = "https://wa.me/" + num + "?text=" + encodeURIComponent(text);

      // Painel com botão (clique do usuário = WhatsApp sempre abre)
      var panel = document.getElementById("orc-wa-panel");
      var waA = document.getElementById("orc-wa-link");
      if (waA) {
        waA.href = waUrl;
        waA.setAttribute("href", waUrl);
      }
      if (panel) panel.classList.remove("hidden");

      // Tenta abrir automaticamente; se o navegador bloquear, o botão verde resolve
      try {
        var w = window.open(waUrl, "_blank");
        if (!w) {
          toast("Toque em 'Enviar aviso no WhatsApp' abaixo");
        } else {
          toast("WhatsApp aberto — confirme o envio da mensagem");
        }
      } catch (err) {
        toast("Toque no botão verde do WhatsApp abaixo");
      }

      uploadedFiles = [];
      renderFiles();
      document.getElementById("upload-form").reset();
      try { renderOrcamentos(); } catch (_) {}
    } catch (err) {
      console.error(err);
      toast("Erro: " + (err.message || err));
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = "Solicitar Orçamento Prévia"; }
    }
  };
} // fim setupUpload

function setupCheckout(){
  document.querySelectorAll('input[name="pagamento"]').forEach(r=>r.onchange=()=>{
    document.getElementById("pix-area").classList.toggle("hidden", r.value!=="pix");
    document.getElementById("cartao-area").classList.toggle("hidden", r.value!=="cartao");
    document.getElementById("link-area").classList.toggle("hidden", r.value!=="link");
  });
  document.getElementById("btn-copy-pix").onclick=()=>{
    const img=document.getElementById("pix-qr");
    const p=(img&&img.dataset.payload)||buildPixPayload(cart.reduce((s,i)=>s+i.preco*i.qty,0));
    navigator.clipboard.writeText(p).then(()=>toast("PIX copiado com valor do carrinho!"));
  };
  document.getElementById("checkout-form").onsubmit=e=>{
    e.preventDefault(); if(!cart.length){toast("Carrinho vazio");return;}
    const nome=document.getElementById("cli-nome").value.trim(), tel=document.getElementById("cli-tel").value.trim(), cep=document.getElementById("cli-cep").value.trim();
    if(!nome||!tel||!cep){toast("Preencha os obrigatórios");return;}
    const sub=cart.reduce((s,i)=>s+i.preco*i.qty,0);
    const order={items:[...cart],cliente:{nome,email:document.getElementById("cli-email").value,tel,cpf:document.getElementById("cli-cpf").value,cep,rua:document.getElementById("cli-rua").value,num:document.getElementById("cli-num").value,comp:document.getElementById("cli-comp").value,bairro:document.getElementById("cli-bairro").value,cidade:document.getElementById("cli-cidade").value,uf:document.getElementById("cli-uf").value},pagamento:document.querySelector('input[name="pagamento"]:checked').value,parcelas:document.getElementById("parcelas")?.value,frete:lastFrete,subtotal:sub,date:new Date().toISOString()};
    const orders=loadJSON("luuh_orders",[]); orders.push(order); saveJSON("luuh_orders",orders);
    const waMsg = `Olá Luiza Helena! Acabei de fazer um pedido na LuuhArt's 3D.%0ATotal produtos: R$ ${fmt(sub)}%0AFrete SEDEX est.: R$ ${fmt(lastFrete)}%0ANome: ${nome}%0ACEP: ${cep}`;
    document.getElementById("success-msg").innerHTML = `Pedido de R$ ${fmt(sub)} registrado.<br/>Frete SEDEX est. R$ ${fmt(lastFrete)} (pago por você).<br/><br/><a class="btn-link" href="${waLink(`Olá Luiza Helena! Pedido LuuhArt's 3D — R$ ${fmt(sub)}, CEP ${cep}, nome ${nome}`)}" target="_blank">📱 Enviar pedido no WhatsApp (${settings.whatsappName||"Luiza Helena"})</a>`;
    cart=[]; saveCart(); renderCart(); document.getElementById("checkout-form").reset(); lastFrete=0;
    document.getElementById("success-modal").classList.remove("hidden");
  };
}
function closeSuccess(){ document.getElementById("success-modal").classList.add("hidden"); switchTab("produtos"); }

function setupCEP(){
  const cep=document.getElementById("cli-cep");
  cep.oninput=e=>{let v=e.target.value.replace(/\D/g,"");if(v.length>5)v=v.slice(0,5)+"-"+v.slice(5,8);e.target.value=v;};
  cep.onblur=async()=>{
    const c=cep.value.replace(/\D/g,""); if(c.length!==8)return;
    try{ const r=await fetch("https://viacep.com.br/ws/"+c+"/json/"); const d=await r.json(); if(d.erro){toast("CEP não encontrado");return;}
      document.getElementById("cli-rua").value=d.logradouro||""; document.getElementById("cli-bairro").value=d.bairro||"";
      document.getElementById("cli-cidade").value=d.localidade||""; document.getElementById("cli-uf").value=d.uf||"";
    }catch{toast("Erro ao buscar CEP");}
  };
}
function setupMasks(){
  document.getElementById("cli-tel").oninput=e=>{let v=e.target.value.replace(/\D/g,"").slice(0,11); if(v.length>6)v=`(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`; else if(v.length>2)v=`(${v.slice(0,2)}) ${v.slice(2)}`; e.target.value=v;};
}

function setupAdmin(){
  document.getElementById("admin-btn").onclick=()=>{
    const pass=prompt("Senha do administrador:");
    const ok=pass===(settings.adminPass||DEFAULT_PASS);
    if(ok){
      sessionStorage.setItem("luuh_admin_ok","1");
      document.getElementById("admin-panel").classList.remove("hidden");
      renderAdminList(); fillForms(); renderOrcamentos();
    } else if(pass!==null) toast("Senha incorreta");
  };
  const br = document.getElementById("btn-refresh-orc");
  if (br) br.onclick = () => renderOrcamentos();
  document.getElementById("admin-close").onclick=()=>{
    sessionStorage.removeItem("luuh_admin_ok");
    document.getElementById("admin-panel").classList.add("hidden");
    toast("Saiu do admin");
  };
  document.querySelectorAll(".admin-tab").forEach(t=>t.onclick=()=>{
    document.querySelectorAll(".admin-tab").forEach(x=>x.classList.remove("active"));
    document.querySelectorAll(".atab").forEach(x=>x.classList.add("hidden"));
    t.classList.add("active"); document.getElementById("atab-"+t.dataset.atab).classList.remove("hidden");
      if (t.dataset.atab === "orcamentos") renderOrcamentos();
  });
  document.getElementById("btn-new-product").onclick=()=>openEdit(null);
  document.getElementById("edit-cancel").onclick=()=>document.getElementById("edit-modal").classList.add("hidden");
  document.getElementById("edit-form").onsubmit=saveProduct;
  document.getElementById("edit-img-file").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{document.getElementById("edit-img").value=r.result;document.getElementById("edit-preview").innerHTML=`<img src="${r.result}" style="max-width:100%;max-height:100px;border-radius:8px"/>`;};r.readAsDataURL(f);};
  document.getElementById("set-logo-file").onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{document.getElementById("set-logo-url").value=r.result;document.getElementById("set-logo-preview").src=r.result;};r.readAsDataURL(f);};
  document.getElementById("btn-save-aparencia").onclick=()=>{
    settings.logo=document.getElementById("set-logo-url").value.trim();
    settings.colors={bg:document.getElementById("c-bg").value,surface:document.getElementById("c-surface").value,cyan:document.getElementById("c-cyan").value,purple:document.getElementById("c-purple").value,pink:document.getElementById("c-pink").value,text:document.getElementById("c-text").value};
    saveSettings(); applySettings(); toast("Aparência salva!");
  };
  document.getElementById("btn-save-textos").onclick=()=>{
    settings.brand=document.getElementById("set-brand").value; settings.tagline=document.getElementById("set-tagline").value;
    settings.prodT=document.getElementById("set-prod-t").value; settings.prodS=document.getElementById("set-prod-s").value;
    settings.amoT=document.getElementById("set-amo-t").value; settings.amoS=document.getElementById("set-amo-s").value;
    settings.upT=document.getElementById("set-up-t").value; settings.upS=document.getElementById("set-up-s").value;
    settings.pagT=document.getElementById("set-pag-t").value; settings.pagS=document.getElementById("set-pag-s").value;
    saveSettings(); applySettings(); toast("Textos salvos!");
  };
  document.getElementById("btn-save-loja").onclick=()=>{
    settings.cepOrigem=document.getElementById("set-cep-origem").value;
    settings.pesoMedio=+document.getElementById("set-peso").value||0.5;
    settings.freteBase=+document.getElementById("set-frete-base").value||25;
    settings.freteMult=+document.getElementById("set-frete-mult").value||1.2;
    settings.tonLink=document.getElementById("set-ton-link").value||DEFAULT_TON;
    settings.pixPayload=document.getElementById("set-pix-payload").value||DEFAULT_PIX;
    settings.pixKey=document.getElementById("set-pix-key").value||DEFAULT_PIX_KEY;
    settings.whatsapp=document.getElementById("set-whatsapp").value||"5516997828851";
    settings.whatsappName=document.getElementById("set-whatsapp-name").value||"Luiza Helena";
    settings.cidadeOrigem=document.getElementById("set-cidade").value||"Araras-SP";
    const waf=document.getElementById("wa-float");
    if(waf) waf.href=waLink("Olá "+(settings.whatsappName||"Luiza Helena")+"! Gostaria de fazer um pedido na LuuhArt's 3D.");
    const np=document.getElementById("set-admin-pass").value;
    if(np) settings.adminPass=np;
    saveSettings(); setupPix(); applySettings(); toast("Loja salva!");
  };
  document.getElementById("btn-export").onclick=()=>{
    const blob=new Blob([JSON.stringify({products,settings},null,2)],{type:"application/json"});
    const a=document.createElement("a"); a.href=URL.createObjectURL(blob); a.download="luuharts-backup.json"; a.click(); toast("Exportado!");
  };
  document.getElementById("import-json").onchange=e=>{
    const f=e.target.files[0]; if(!f)return; const r=new FileReader();
    r.onload=()=>{try{const d=JSON.parse(r.result); if(d.products){products=d.products;saveProducts();} if(d.settings){settings={...DEFAULT_SETTINGS,...d.settings};saveSettings();applySettings();setupPix();} renderProdutos();renderAmostras();renderAdminList();fillForms();toast("Importado!");}catch{toast("JSON inválido");}};
    r.readAsText(f);
  };
}
function fillForms(){
  document.getElementById("set-logo-url").value=settings.logo||"";
  document.getElementById("set-logo-preview").src=settings.logo||document.getElementById("hero-logo").src;
  const c=settings.colors||DEFAULT_SETTINGS.colors;
  document.getElementById("c-bg").value=c.bg; document.getElementById("c-surface").value=c.surface;
  document.getElementById("c-cyan").value=c.cyan; document.getElementById("c-purple").value=c.purple;
  document.getElementById("c-pink").value=c.pink; document.getElementById("c-text").value=c.text;
  document.getElementById("set-brand").value=settings.brand||""; document.getElementById("set-tagline").value=settings.tagline||"";
  document.getElementById("set-prod-t").value=settings.prodT||""; document.getElementById("set-prod-s").value=settings.prodS||"";
  document.getElementById("set-amo-t").value=settings.amoT||""; document.getElementById("set-amo-s").value=settings.amoS||"";
  document.getElementById("set-up-t").value=settings.upT||""; document.getElementById("set-up-s").value=settings.upS||"";
  document.getElementById("set-pag-t").value=settings.pagT||""; document.getElementById("set-pag-s").value=settings.pagS||"";
  document.getElementById("set-cep-origem").value=settings.cepOrigem||"";
  document.getElementById("set-peso").value=settings.pesoMedio||0.5;
  document.getElementById("set-frete-base").value=settings.freteBase||25;
  document.getElementById("set-frete-mult").value=settings.freteMult||1.2;
  document.getElementById("set-ton-link").value=settings.tonLink||DEFAULT_TON;
  document.getElementById("set-pix-payload").value=settings.pixPayload||DEFAULT_PIX;
  document.getElementById("set-pix-key").value=settings.pixKey||DEFAULT_PIX_KEY;
  const sw=document.getElementById("set-whatsapp"); if(sw) sw.value=settings.whatsapp||"5516997828851";
  const swn=document.getElementById("set-whatsapp-name"); if(swn) swn.value=settings.whatsappName||"Luiza Helena";
  const sc=document.getElementById("set-cidade"); if(sc) sc.value=settings.cidadeOrigem||"Araras-SP";
}
function renderAdminList(){
  document.getElementById("admin-product-list").innerHTML=products.map(p=>`<div class="admin-item">${p.img?`<img src="${p.img}" onerror="this.style.display='none'"/>`:"<div style='width:44px;height:44px;background:var(--surface2);border-radius:6px'></div>"}<div class="ai"><h4>${esc(p.nome)}</h4><span>R$ ${fmt(p.preco)} · ${p.categoria} · est ${p.stock}</span></div><button onclick="openEdit(${p.id})">Editar</button><button class="del" onclick="deleteProduct(${p.id})">Apagar</button></div>`).join("");
}
function openEdit(id){
  const p=id?products.find(x=>x.id===id):null;
  document.getElementById("edit-title").textContent=p?"Editar":"Novo Produto";
  document.getElementById("edit-id").value=p?p.id:""; document.getElementById("edit-nome").value=p?p.nome:"";
  document.getElementById("edit-preco").value=p?p.preco:""; document.getElementById("edit-cat").value=p?p.categoria:"venda";
  document.getElementById("edit-material").value=p?p.material||"":""; document.getElementById("edit-badge").value=p?p.badge||"":"";
  document.getElementById("edit-desc").value=p?p.desc||"":""; document.getElementById("edit-img").value=p?p.img||"":"";
  document.getElementById("edit-stock").value=p?p.stock:10; document.getElementById("edit-peso").value=p?p.peso||0.3:0.3;
  document.getElementById("edit-preview").innerHTML=p&&p.img?`<img src="${p.img}" style="max-width:100%;max-height:90px;border-radius:8px"/>`:"";
  document.getElementById("edit-modal").classList.remove("hidden");
}
function saveProduct(e){
  e.preventDefault();
  const id=document.getElementById("edit-id").value;
  const data={nome:document.getElementById("edit-nome").value.trim(),preco:parseFloat(document.getElementById("edit-preco").value)||0,categoria:document.getElementById("edit-cat").value,material:document.getElementById("edit-material").value.trim(),badge:document.getElementById("edit-badge").value.trim(),desc:document.getElementById("edit-desc").value.trim(),img:document.getElementById("edit-img").value.trim(),stock:parseInt(document.getElementById("edit-stock").value,10)||0,peso:parseFloat(document.getElementById("edit-peso").value)||0.3};
  if(id){ const i=products.findIndex(p=>p.id===+id); if(i>=0) products[i]={...products[i],...data}; }
  else products.push({id:(products.length?Math.max(...products.map(p=>p.id)):0)+1,...data});
  saveProducts(); renderProdutos(); renderAmostras(); renderAdminList(); document.getElementById("edit-modal").classList.add("hidden"); toast("Salvo!");
}
function deleteProduct(id){ if(!confirm("Apagar?"))return; products=products.filter(p=>p.id!==id); saveProducts(); renderProdutos(); renderAmostras(); renderAdminList(); toast("Apagado"); }

function waLink(msg) {
  const num = (settings.whatsapp || "5516997828851").replace(/\D/g, "");
  return "https://wa.me/" + num + (msg ? ("?text=" + encodeURIComponent(msg)) : "");
}
function openWhatsApp(msg) {
  window.open(waLink(msg || "Olá! Gostaria de fazer um pedido na LuuhArt's 3D."), "_blank");
}

function fmt(n){ return (+n).toFixed(2).replace(".",","); }
function toast(m){ const t=document.getElementById("toast"); t.textContent=m; t.classList.remove("hidden"); setTimeout(()=>t.classList.add("hidden"),2500); }

// Expor funções usadas em onclick do HTML
window.openDetail = openDetail;
window.closeDetail = closeDetail;
window.switchTab = switchTab;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.closeSuccess = closeSuccess;
window.openEdit = openEdit;
window.deleteProduct = deleteProduct;
window.removeFile = typeof removeFile === "function" ? removeFile : function(){};


async function renderOrcamentos() {
  const box = document.getElementById("admin-orc-list");
  if (!box) return;
  let list = loadJSON("luuh_uploads", []); if (!Array.isArray(list)) list = [];
  if (!list.length) {
    box.innerHTML = '<p class="hint">Nenhum orçamento ainda.</p>';
    return;
  }
  let html = "";
  for (const o of list) {
    const filesHtml = (o.files || []).map(f => {
      const linkBtn = f.link
        ? `<a class="btn-secondary" style="padding:6px 10px;font-size:.75rem;text-decoration:none;display:inline-block;margin:2px" href="${f.link}" target="_blank">🔗 Link</a>`
        : "";
      const dlBtn = `<button type="button" class="btn-secondary" style="padding:6px 10px;font-size:.75rem;margin:2px" onclick="downloadOrcFile('${o.id}','${String(f.name).replace(/'/g,"\\'")}')">⬇️ Baixar</button>`;
      return `<div style="margin:4px 0;font-size:.8rem">📄 ${esc(f.name)} (${((f.size||0)/1024).toFixed(0)} KB) ${linkBtn} ${dlBtn}</div>`;
    }).join("");
    html += `<div class="admin-item" style="flex-direction:column;align-items:stretch">
      <div style="display:flex;justify-content:space-between;gap:8px;width:100%">
        <div class="ai">
          <h4>${esc(o.nome || "Sem nome")} · qtd ${o.qtd || 1}</h4>
          <span>${new Date(o.date).toLocaleString("pt-BR")} · ${esc(o.material || "")}</span>
        </div>
        <button class="del" onclick="deleteOrcamento('${o.id}')">Apagar</button>
      </div>
      <p style="font-size:.8rem;color:var(--muted);margin:6px 0">${esc(o.desc || "")}</p>
      <p style="font-size:.75rem">Tel: ${esc(o.tel || "—")} · Cor: ${esc(o.cor || "—")}</p>
      ${filesHtml}
      <a class="btn-secondary" style="text-align:center;margin-top:8px;text-decoration:none;display:block" target="_blank"
        href="${waLink("Olá! Sobre seu orçamento LuuhArt's (" + (o.nome||"") + ")...")}">📱 Responder no WhatsApp</a>
    </div>`;
  }
  box.innerHTML = html;
}
async function downloadOrcFile(orderId, fileName) {
  try {
    const rec = await idbGet(orderId + "_" + fileName);
    if (rec && rec.dataUrl) {
      downloadBase64(rec.dataUrl, fileName);
      toast("Download iniciado");
      return;
    }
    // fallback: buscar qualquer registro
    const all = await idbGetAll();
    const found = all.find(x => x.orderId === orderId && x.name === fileName);
    if (found && found.dataUrl) {
      downloadBase64(found.dataUrl, fileName);
      toast("Download iniciado");
      return;
    }
    toast("Arquivo não está neste aparelho. Use o link do WhatsApp ou peça para reenviar.");
  } catch (e) {
    toast("Erro ao baixar");
    console.error(e);
  }
}
function deleteOrcamento(id) {
  if (!confirm("Apagar este orçamento?")) return;
  let list = loadJSON("luuh_uploads", []);
  list = list.filter(o => o.id !== id);
  saveJSON("luuh_uploads", list);
  renderOrcamentos();
  toast("Apagado");
}
window.downloadOrcFile = downloadOrcFile;
window.deleteOrcamento = deleteOrcamento;
window.renderOrcamentos = renderOrcamentos;
