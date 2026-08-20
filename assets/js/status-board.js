(function () {
  var board = document.getElementById('status-board');
  if (!board || typeof PROVIDERS === 'undefined') return;

  function live(list) { return list.filter(function (p) { return p.status === 'live' && p.overall !== null; }); }

  function best(list, keyFn) {
    var sorted = list.slice().filter(function (p) { return keyFn(p) !== null && keyFn(p) !== undefined; });
    sorted.sort(function (a, b) { return keyFn(b) - keyFn(a); });
    return sorted[0] || null;
  }

  var liveProviders = live(PROVIDERS);

  var slots = [
    {
      label: 'Best for sports',
      pick: best(liveProviders.filter(function (p) { return (p.tags || []).indexOf('sports') > -1; }), function (p) { return p.overall; }),
      metric: function (p) { return 'Overall ' + p.overall + '/5'; }
    },
    {
      label: 'Best value',
      pick: best(liveProviders, function (p) { return p.sub && p.sub.price; }),
      metric: function (p) { return p.pricing && p.pricing.monthly ? '$' + p.pricing.monthly + '/mo' : 'Price score ' + p.sub.price + '/5'; }
    },
    {
      label: 'Most reliable',
      pick: best(liveProviders, function (p) { return p.sub && p.sub.reliability; }),
      metric: function (p) { return 'Reliability ' + p.sub.reliability + '/5'; }
    },
    {
      label: 'Best 4K',
      pick: best(liveProviders.filter(function (p) { return p.category === '4k'; }), function (p) { return p.overall; }),
      metric: function (p) { return 'Overall ' + p.overall + '/5'; }
    }
  ];

  board.innerHTML = slots.map(function (s) {
    if (!s.pick) {
      return '<div class="status-slot slot-empty">' +
        '<span class="slot-label">' + s.label + '</span>' +
        '<span class="slot-winner">Awaiting a qualifying review</span>' +
        '<span class="slot-meta">Updates automatically once a tested provider qualifies.</span>' +
        '</div>';
    }
    var p = s.pick;
    return '<div class="status-slot">' +
      '<span class="slot-label">' + s.label + '</span>' +
      '<span class="slot-winner"><a href="reviews/' + p.slug + '.html">' + p.name + '</a></span>' +
      '<span class="slot-meta mono">' + s.metric(p) + '</span>' +
      '</div>';
  }).join('');
})();
