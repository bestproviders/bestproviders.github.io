(function () {
  var tbody = document.getElementById('compare-body');
  if (!tbody || typeof PROVIDERS === 'undefined') return;

  var CATEGORY_LABEL = { general: 'General', xtream: 'Xtream family', trends: 'Trends family', '4k': '4K' };
  var FOUR_K_SLUGS = [
    'iptv-trends-4k', 'epix-iptv', 'skyhub4k',
    '4k-iptv-spot-store', '4k-live-iptv-store', 'focus-4k-iptv', 'magic-4k-streams',
    'orla-tv-4k', 'pulse-4k-store', 'the-nexus-4k-tv', 'tivistation', 'your-prime-tv-4k'
  ];
  function categoryOf(slug) {
    if (['xtream-iptv', 'xtream-view-iptv', 'xtream-codes'].indexOf(slug) > -1) return 'xtream';
    if (['iptv-trends', 'iptv-trends-4k'].indexOf(slug) > -1) return 'trends';
    if (FOUR_K_SLUGS.indexOf(slug) > -1) return '4k';
    return 'general';
  }

  var state = { sortKey: 'name', sortDir: 'asc', filter: 'all' };

  function cell(val, fallback) {
    return (val === null || val === undefined || val === '') ? (fallback || 'Pending') : val;
  }

  function render() {
    var rows = PROVIDERS.slice();
    var cat = state.filter;
    if (cat && cat !== 'all') {
      rows = rows.filter(function (p) { return categoryOf(p.slug) === cat; });
    }
    rows.sort(function (a, b) {
      var ka, kb;
      if (state.sortKey === 'name') { ka = a.name.toLowerCase(); kb = b.name.toLowerCase(); }
      else if (state.sortKey === 'overall') { ka = a.overall; kb = b.overall; }
      else if (state.sortKey === 'price') { ka = a.pricing && a.pricing.monthly; kb = b.pricing && b.pricing.monthly; }
      else if (state.sortKey === 'reliability') { ka = a.sub && a.sub.reliability; kb = b.sub && b.sub.reliability; }
      else { ka = a.name; kb = b.name; }
      var aNull = ka === null || ka === undefined;
      var bNull = kb === null || kb === undefined;
      if (aNull && bNull) return a.name.localeCompare(b.name);
      if (aNull) return 1;
      if (bNull) return -1;
      if (typeof ka === 'string') {
        var c = ka.localeCompare(kb);
        return state.sortDir === 'asc' ? c : -c;
      }
      var d = ka - kb;
      return state.sortDir === 'asc' ? d : -d;
    });

    tbody.innerHTML = rows.map(function (p, i) {
      var status = p.status === 'live'
        ? '<span class="badge badge-reviewed">Reviewed</span>'
        : p.status === 'profiled'
          ? '<span class="badge badge-profiled">Profiled</span>'
          : '<span class="badge badge-pending">Pending</span>';
      var overall = p.overall !== null ? '<span class="mono">' + p.overall + '/5</span>' : '<span class="mono">&mdash;</span>';
      var price = (p.pricing && p.pricing.monthly) ? '<span class="mono">$' + p.pricing.monthly + '/mo</span>' : '<span class="mono">&mdash;</span>';
      var rank = String(i + 1).padStart(2, '0');
      return '<tr>' +
        '<td class="num rank-num">' + rank + '</td>' +
        '<td><a href="../reviews/' + p.slug + '.html">' + p.name + '</a></td>' +
        '<td>' + CATEGORY_LABEL[categoryOf(p.slug)] + '</td>' +
        '<td class="num">' + overall + '</td>' +
        '<td class="num">' + price + '</td>' +
        '<td>' + status + '</td>' +
        '<td><a class="btn btn-outline" href="../reviews/' + p.slug + '.html" style="padding:6px 12px;font-size:0.82rem">View</a></td>' +
        '</tr>';
    }).join('');
  }

  document.querySelectorAll('#compare-table thead th[data-sort]').forEach(function (th) {
    th.addEventListener('click', function () {
      var key = th.getAttribute('data-sort');
      if (state.sortKey === key) {
        state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
      } else {
        state.sortKey = key;
        state.sortDir = 'asc';
      }
      document.querySelectorAll('#compare-table thead th').forEach(function (h) { h.removeAttribute('aria-sort'); });
      th.setAttribute('aria-sort', state.sortDir === 'asc' ? 'ascending' : 'descending');
      render();
    });
  });

  document.querySelectorAll('.filter-chip').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('.filter-chip').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      state.filter = btn.getAttribute('data-filter');
      render();
    });
  });

  var hash = (location.hash || '').replace('#', '');
  var needsRender = false;
  if (hash === '4k') { state.filter = '4k'; needsRender = true; }
  if (hash === 'cheapest') { state.sortKey = 'price'; needsRender = true; }
  if (hash === 'reliable') { state.sortKey = 'reliability'; needsRender = true; }

  // The default view (all providers, sorted by name) is pre-rendered into the HTML so
  // crawlers see all 94 review links without executing JS. Only re-render when the
  // requested state actually differs from what's already in the document.
  if (needsRender || !tbody.querySelector('a[href^="../reviews/"]')) { render(); }
})();
