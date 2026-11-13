/* Slide deck viewer — no dependencies */
(function () {
  var TOTAL = 15;
  var img = document.getElementById('deckImage');
  var now = document.getElementById('deckNow');
  var thumbs = document.getElementById('deckThumbs');
  if (!img || !thumbs || !now) return;

  var cur = 1;
  function src(n) {
    return 'assets/deck/slide-' + (n < 10 ? '0' + n : n) + '.jpg';
  }

  function show(n) {
    cur = Math.min(TOTAL, Math.max(1, n));
    img.src = src(cur);
    img.alt = 'Slide ' + cur + ' of ' + TOTAL + ' from the Transformation Tycoon deck';
    now.textContent = cur;
    document.getElementById('deckPrev').disabled = (cur === 1);
    document.getElementById('deckNext').disabled = (cur === TOTAL);
    for (var i = 0; i < thumbs.children.length; i++) {
      var on = (i + 1 === cur);
      thumbs.children[i].classList.toggle('active', on);
      thumbs.children[i].setAttribute('aria-selected', on ? 'true' : 'false');
    }
    var active = thumbs.children[cur - 1];
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
  }

  for (var i = 1; i <= TOTAL; i++) {
    (function (k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'deck-thumb';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-label', 'Go to slide ' + k);
      var t = document.createElement('img');
      t.src = src(k);
      t.loading = 'lazy';
      t.alt = '';
      t.width = 160;
      b.appendChild(t);
      b.addEventListener('click', function () { show(k); });
      thumbs.appendChild(b);
    })(i);
  }

  document.getElementById('deckPrev').addEventListener('click', function () { show(cur - 1); });
  document.getElementById('deckNext').addEventListener('click', function () { show(cur + 1); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });

  show(1);
})();
