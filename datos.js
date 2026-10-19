var NORDAL_PROPS = [{"id": 1, "op": "alquiler", "tipo": "piso", "zona": "Eixample", "price": 1850, "m2": 85, "hab": 3, "ban": 2, "img": "flat-eixample", "es": "Piso luminoso", "en": "Bright flat", "des": "Piso reformado con mucha luz natural, tres dormitorios y dos baños. Cocina equipada, calefacción y aire acondicionado. A cinco minutos del metro.", "den": "Renovated flat with plenty of natural light, three bedrooms and two bathrooms. Equipped kitchen, heating and air conditioning. Five minutes from the metro.", "extras": ["balcon-sol", "cocina-blanca"], "tipoEs": "Piso", "tipoEn": "Flat"}, {"id": 2, "op": "venta", "tipo": "atico", "zona": "Gràcia", "price": 540000, "m2": 110, "hab": 3, "ban": 2, "img": "terrace-penthouse", "es": "Ático con terraza", "en": "Penthouse with terrace", "des": "Ático de tres dormitorios con terraza de 30 m² y vistas despejadas. Ascensor, luminoso a todas horas y listo para entrar a vivir.", "den": "Three-bedroom penthouse with a 30 m² terrace and open views. Lift, bright all day and ready to move in.", "extras": ["living", "cocina-blanca"], "tipoEs": "Ático", "tipoEn": "Penthouse"}, {"id": 3, "op": "alquiler", "tipo": "estudio", "zona": "Poblenou", "price": 1150, "m2": 42, "hab": 1, "ban": 1, "img": "studio-light", "es": "Estudio reformado", "en": "Renovated studio", "des": "Estudio completamente reformado, amueblado y con armarios empotrados. Ideal para una persona o pareja.", "den": "Fully renovated, furnished studio with built-in wardrobes. Ideal for one person or a couple.", "extras": ["salon-nordico", "cocina-blanca"], "tipoEs": "Estudio", "tipoEn": "Studio"}, {"id": 4, "op": "venta", "tipo": "piso", "zona": "Sarrià", "price": 410000, "m2": 78, "hab": 2, "ban": 1, "img": "balcony", "es": "Piso con balcón", "en": "Flat with balcony", "des": "Piso tranquilo y soleado con balcón a una calle arbolada. Dos dormitorios, reforma reciente y comunidad con ascensor.", "den": "Quiet, sunny flat with a balcony over a tree-lined street. Two bedrooms, recent renovation and a building with a lift.", "extras": ["dining", "living-verde"], "tipoEs": "Piso", "tipoEn": "Flat"}, {"id": 5, "op": "alquiler", "tipo": "piso", "zona": "Sant Antoni", "price": 1600, "m2": 90, "hab": 3, "ban": 2, "img": "dining", "es": "Piso con comedor amplio", "en": "Flat with large dining room", "des": "Piso de tres dormitorios con un comedor muy amplio, ideal para vivir en familia. Edificio con ascensor y muy bien comunicado.", "den": "Three-bedroom flat with a very large dining room, ideal for family life. Building with a lift and excellent transport links.", "extras": ["salon-nordico", "balcon-sol"], "tipoEs": "Piso", "tipoEn": "Flat"}, {"id": 6, "op": "venta", "tipo": "casa", "zona": "Sant Cugat", "price": 890000, "m2": 240, "hab": 4, "ban": 3, "img": "hero", "es": "Casa con piscina", "en": "House with pool", "des": "Casa de diseño con jardín y piscina, cuatro dormitorios y tres baños. Salón con grandes ventanales y garaje para dos coches.", "den": "Designer house with garden and pool, four bedrooms and three bathrooms. Living room with large windows and a two-car garage.", "extras": ["terrace-penthouse", "living-verde"], "tipoEs": "Casa", "tipoEn": "House"}, {"id": 7, "op": "venta", "tipo": "piso", "zona": "Dreta de l'Eixample", "price": 650000, "m2": 120, "hab": 3, "ban": 2, "img": "heritage", "es": "Piso modernista", "en": "Modernist flat", "des": "Piso en finca modernista con suelos hidráulicos originales y techos altos. Tres dormitorios y dos baños, con carácter y muy luminoso.", "den": "Flat in a modernist building with original hydraulic tile floors and high ceilings. Three bedrooms and two bathrooms, full of character and light.", "extras": ["living", "dining"], "tipoEs": "Piso", "tipoEn": "Flat"}, {"id": 8, "op": "alquiler", "tipo": "piso", "zona": "Poble Sec", "price": 2100, "m2": 105, "hab": 3, "ban": 2, "img": "living-verde", "es": "Piso moderno", "en": "Modern flat", "des": "Piso moderno con salón muy luminoso, tres dormitorios y dos baños. Cocina abierta y suelos de madera. Disponible de inmediato.", "den": "Modern flat with a very bright living room, three bedrooms and two bathrooms. Open kitchen and wooden floors. Available immediately.", "extras": ["cocina-blanca", "salon-nordico"], "tipoEs": "Piso", "tipoEn": "Flat"}, {"id": 9, "op": "alquiler", "tipo": "loft", "zona": "El Born", "price": 1750, "m2": 70, "hab": 1, "ban": 1, "img": "loft-mezzanine", "es": "Loft con altillo", "en": "Loft with mezzanine", "des": "Loft diáfano con altillo y techos de cuatro metros. Mucha luz, suelos de madera y cocina abierta en pleno Born.", "den": "Open-plan loft with a mezzanine and four-metre ceilings. Plenty of light, wooden floors and an open kitchen in the heart of El Born.", "extras": ["cocina-blanca", "living-verde"], "tipoEs": "Loft", "tipoEn": "Loft"}, {"id": 10, "op": "venta", "tipo": "piso", "zona": "Sants", "price": 285000, "m2": 65, "hab": 2, "ban": 1, "img": "balcon-sol", "es": "Piso soleado", "en": "Sunny flat", "des": "Piso soleado de dos dormitorios con balcón, ideal como primera vivienda o para invertir. Muy bien comunicado.", "den": "Sunny two-bedroom flat with a balcony, ideal as a first home or as an investment. Excellent transport links.", "extras": ["salon-nordico", "dining"], "tipoEs": "Piso", "tipoEn": "Flat"}];
var NORDAL_WA = "https://wa.me/34600000000";
/* Lógica de la demo: listado con filtros, ficha por id y calculadora de rentabilidad. Los datos (NORDAL_PROPS) se generan en build.py */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var lang = function () { return document.documentElement.lang === 'en' ? 'en' : 'es'; };
  var nf = { format: function (n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); } };
  var nf1 = new Intl.NumberFormat('es-ES', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  var T = function (es, en) { return lang() === 'en' ? en : es; };

  function priceText(p) {
    return nf.format(p.price) + ' €' + (p.op === 'alquiler' ? '/' + T('mes', 'month') : '');
  }
  function title(p) { return (lang() === 'en' ? p.en : p.es) + ' · ' + p.zona; }
  function baths(p) { return p.ban + ' ' + (lang() === 'en' ? 'bath' : (p.ban > 1 ? 'baños' : 'baño')); }
  function beds(p) { return p.hab + ' ' + (lang() === 'en' ? 'bed' : 'hab.'); }

  function cardHtml(p) {
    var tag = p.op === 'alquiler' ? T('Alquiler', 'Rent') : T('Venta', 'Sale');
    return '<article class="card"><a href="propiedad.html?id=' + p.id + '"><div class="ph"><img src="img/' + p.img + '.jpg" alt="' + title(p) +
      '" loading="lazy" decoding="async"><span class="tag">' + tag + '</span></div><div class="body"><h3>' + title(p) +
      '</h3><div class="meta"><span>' + p.m2 + ' m²</span><span>' + beds(p) + '</span><span>' + baths(p) + '</span></div><p class="price">' +
      priceText(p) + '</p></div></a></article>';
  }

  /* ---------------- listado con filtros ---------------- */
  function initList() {
    var grid = $('#resultados'); if (!grid) return;
    var st = { op: 'all', tipo: 'all', hab: 0, max: 0, orden: 'rel' };
    var selPrecio = $('#f-precio');

    function precioOpciones() {
      var opts = [[0, T('Sin límite', 'No limit')]];
      if (st.op === 'alquiler') [1000, 1500, 2000, 3000].forEach(function (v) { opts.push([v, T('Hasta ', 'Up to ') + nf.format(v) + ' €/' + T('mes', 'month')]); });
      if (st.op === 'venta') [250000, 400000, 600000, 900000].forEach(function (v) { opts.push([v, T('Hasta ', 'Up to ') + nf.format(v) + ' €']); });
      selPrecio.innerHTML = opts.map(function (o) { return '<option value="' + o[0] + '"' + (o[0] === st.max ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('');
      selPrecio.disabled = st.op === 'all';
    }

    function pintar() {
      var r = NORDAL_PROPS.filter(function (p) {
        return (st.op === 'all' || p.op === st.op) && (st.tipo === 'all' || p.tipo === st.tipo) && p.hab >= st.hab && (!st.max || p.price <= st.max);
      });
      if (st.orden === 'asc') r.sort(function (a, b) { return a.price - b.price; });
      if (st.orden === 'desc') r.sort(function (a, b) { return b.price - a.price; });
      grid.innerHTML = r.map(cardHtml).join('');
      var n = r.length;
      $('#contador').textContent = n + ' ' + (lang() === 'en' ? (n === 1 ? 'property' : 'properties') : (n === 1 ? 'propiedad' : 'propiedades'));
      $('#vacio').hidden = n !== 0;
    }

    $$('[data-op]').forEach(function (b) {
      b.addEventListener('click', function () {
        st.op = b.dataset.op; st.max = 0;
        $$('[data-op]').forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        precioOpciones(); pintar();
      });
    });
    $('#f-tipo').addEventListener('change', function (e) { st.tipo = e.target.value; pintar(); });
    $('#f-hab').addEventListener('change', function (e) { st.hab = +e.target.value; pintar(); });
    selPrecio.addEventListener('change', function (e) { st.max = +e.target.value; pintar(); });
    $('#f-orden').addEventListener('change', function (e) { st.orden = e.target.value; pintar(); });
    $('#f-reset').addEventListener('click', function () {
      st = { op: 'all', tipo: 'all', hab: 0, max: 0, orden: 'rel' };
      $('#f-tipo').value = 'all'; $('#f-hab').value = '0'; $('#f-orden').value = 'rel';
      $$('[data-op]').forEach(function (x) { x.setAttribute('aria-pressed', x.dataset.op === 'all'); });
      precioOpciones(); pintar();
    });
    precioOpciones(); pintar();
    window.__nordalRedraw = function () { precioOpciones(); pintar(); };
  }

  /* ---------------- ficha ---------------- */
  function initFicha() {
    var t = $('#f-titulo'); if (!t) return;
    var id = +(new URLSearchParams(location.search).get('id') || 1);
    var p = NORDAL_PROPS.filter(function (x) { return x.id === id; })[0] || NORDAL_PROPS[0];
    function pintar() {
      var ttl = title(p);
      t.textContent = (p.op === 'alquiler' ? T('En alquiler: ', 'For rent: ') : T('En venta: ', 'For sale: ')) + ttl;
      document.title = ttl + ' | Nordal Homes (demo)';
      $('#crumb').textContent = ttl;
      $('#f-precio').textContent = priceText(p);
      $('#f-desc').textContent = lang() === 'en' ? p.den : p.des;
      $('#f-datos').innerHTML = '<div><strong>' + p.m2 + ' m²</strong><span>' + T('Superficie', 'Area') + '</span></div>' +
        '<div><strong>' + p.hab + '</strong><span>' + T('Habitaciones', 'Bedrooms') + '</span></div>' +
        '<div><strong>' + p.ban + '</strong><span>' + T('Baños', 'Bathrooms') + '</span></div>' +
        '<div><strong>' + (lang() === 'en' ? p.tipoEn : p.tipoEs) + '</strong><span>' + T('Tipo', 'Type') + '</span></div>';
      var fe = [T('Calefacción', 'Heating'), T('Cocina equipada', 'Equipped kitchen'), T('Certificado energético', 'Energy certificate'),
        p.op === 'alquiler' ? T('Disponibilidad inmediata', 'Available immediately') : T('Listo para entrar a vivir', 'Ready to move in'), T('Zona bien comunicada', 'Well connected area'), T('Atención en español e inglés', 'Service in Spanish and English')];
      $('#f-feat').innerHTML = fe.map(function (x) { return '<li>' + x + '</li>'; }).join('');
      var g = $('#galeria');
      var imgs = [p.img].concat(p.extras || []);
      g.innerHTML = imgs.map(function (im, i) {
        return '<div class="ph"><img src="img/' + im + '.jpg" alt="' + (i === 0 ? ttl : T('Otra imagen de ', 'Another image of ') + ttl) + '"' + (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') + '>' +
          (i === 0 ? '<span class="tag">' + (p.op === 'alquiler' ? T('Alquiler', 'Rent') : T('Venta', 'Sale')) + '</span>' : '') + '</div>';
      }).join('');
      $('#f-wa').href = NORDAL_WA + '?text=' + encodeURIComponent(T('Hola, me interesa: ', 'Hello, I am interested in: ') + ttl);
    }
    pintar();
    window.__nordalRedraw = pintar;
  }

  /* ---------------- calculadora ---------------- */
  function initCalc() {
    var out = $('#o-bruta'); if (!out) return;
    var ids = { precio: 'k-precio', gastos: 'k-gastos', reforma: 'k-reforma', renta: 'k-renta', vac: 'k-vac', anual: 'k-gasto-anual' };
    var ej = { precio: 300000, gastos: 10, reforma: 30000, renta: 1500, vac: 1, anual: 2400 };
    function val(k) { var v = parseFloat($('#' + ids[k]).value); return isNaN(v) ? 0 : Math.max(0, v); }
    function calc() {
      var inv = val('precio') * (1 + val('gastos') / 100) + val('reforma');
      var ing = val('renta') * Math.max(0, 12 - val('vac'));
      var ben = ing - val('anual');
      var bruta = inv > 0 ? val('renta') * 12 / inv * 100 : 0;
      var neta = inv > 0 ? ben / inv * 100 : 0;
      $('#o-bruta').textContent = nf1.format(bruta) + ' %';
      $('#o-neta').textContent = nf1.format(neta) + ' %';
      $('#o-inv').textContent = nf.format(inv) + ' €';
      $('#o-ing').textContent = nf.format(ing) + ' €';
      $('#o-ben').textContent = nf.format(ben) + ' €';
      $('#o-pay').textContent = ben > 0 && inv > 0 ? nf1.format(inv / ben) : '—';
    }
    function reset() { Object.keys(ids).forEach(function (k) { $('#' + ids[k]).value = ej[k]; }); calc(); }
    Object.keys(ids).forEach(function (k) { $('#' + ids[k]).addEventListener('input', calc); });
    $('#calc-reset').addEventListener('click', reset);
    reset();
  }

  initList(); initFicha(); initCalc();
  $$('.lang button').forEach(function (b) { b.addEventListener('click', function () { setTimeout(function () { if (window.__nordalRedraw) window.__nordalRedraw(); }, 0); }); });
  if (document.documentElement.lang === 'en' && window.__nordalRedraw) window.__nordalRedraw();
})();
