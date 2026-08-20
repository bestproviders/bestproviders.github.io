(function () {
  var targets = document.querySelectorAll('.scroll-reveal, .signal-meter');
  if (!targets.length) return;

  function revealNow(el) {
    if (el.__revealed) return;
    el.__revealed = true;
    var index = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    var delay = Math.min(index * 70, 420);
    setTimeout(function () { el.classList.add('in-view'); }, delay);
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        revealNow(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (el) { observer.observe(el); });
  } else {
    targets.forEach(revealNow);
  }

  // Safety net: whatever the observer missed (fast scroll, a screenshot/print
  // tool that never fires real scroll events, an edge-case viewport) still
  // becomes visible on its own — nothing on this site stays permanently
  // hidden waiting on a browser event that never comes.
  window.addEventListener('load', function () {
    setTimeout(function () { targets.forEach(revealNow); }, 2500);
  });
})();
