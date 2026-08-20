// BestProviders provider data — single source of truth for all pages.
// status: "pending" = nothing written yet. "profiled" = verified public-info writeup,
// no fabricated hands-on quality score (overall stays null; only price/channels are scored,
// since those are printed facts, not measured performance). "live" = fully hands-on tested,
// reserved for when real testing actually happens. Do not hand-edit scores without real data.
// url: exact provider-verified homepage URL — do not normalize www/subdomain, it's intentional.
const PROVIDERS = [
  {
    "slug": "yourflix",
    "name": "Yourflix",
    "url": "https://www.yourflix.org/",
    "note": "General entertainment-focused IPTV service.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "viking-iptv",
    "name": "Viking IPTV",
    "url": "https://ww1.vikingiptvofficial.com/",
    "note": "Subscription IPTV service marketed on multi-device compatibility.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "iptv-usa",
    "name": "IPTV USA",
    "url": "https://www.iptvusaofficial.com/",
    "note": "US-focused channel package IPTV provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "evestv",
    "name": "EvesTV",
    "url": "https://eves-tv.org/",
    "note": "IPTV subscription service.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "iptv-trends-4k",
    "name": "IPTV Trends 4K",
    "url": "https://www.iptvtrends4k.com/",
    "note": "4K-tier IPTV service \u2014 a distinct offering from IPTV Trends (non-4K).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "trends",
    "tags": []
  },
  {
    "slug": "lux-iptv",
    "name": "Lux IPTV",
    "url": "https://ww1.luxiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "iptv-trends",
    "name": "IPTV Trends",
    "url": "https://iptvtrendsofficial.com/",
    "note": "Standard-tier IPTV service \u2014 separate from IPTV Trends 4K.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "trends",
    "tags": []
  },
  {
    "slug": "eternal-tv",
    "name": "Eternal TV",
    "url": "https://eternaltv.org/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "xtream-iptv",
    "name": "Xtream IPTV",
    "url": "https://www.xtreamiptvofficial.com/",
    "note": "One of three distinct 'Xtream'-branded services covered on this site \u2014 see disambiguation note below.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "xtream",
    "tags": []
  },
  {
    "slug": "drogon-tv",
    "name": "Drogon TV",
    "url": "https://www.drogontvshop.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "xtream-view-iptv",
    "name": "Xtream View IPTV",
    "url": "https://www.xtreamviewiptv.com/",
    "note": "Distinct from Xtream IPTV and Xtream Codes despite the shared naming convention.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "xtream",
    "tags": []
  },
  {
    "slug": "xtream-codes",
    "name": "Xtream Codes",
    "url": "https://www.xtreamcodestv.com/",
    "note": "Distinct commercial service trading on the well-known 'Xtream Codes' panel name; not affiliated with the original open-source Xtream-Codes project.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "xtream",
    "tags": []
  },
  {
    "slug": "king-iptv",
    "name": "King IPTV",
    "url": "https://www.kingiptvpremuim.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "bingetrax",
    "name": "BINGETRAX",
    "url": "https://www.bingetraxofficial.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "ibo-streaming",
    "name": "IBO Streaming",
    "url": "https://www.ibostreamingtv.com/",
    "note": "IPTV subscription provider, name referencing the IBO Player/IBO Pro app ecosystem.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "layerseven-tv",
    "name": "Layerseven TV",
    "url": "https://layerseven-tv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "gold-iptv",
    "name": "Gold IPTV",
    "url": "https://ww2.goldiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "nomad-iptv",
    "name": "Nomad IPTV",
    "url": "https://www.nomadiptvofficial.com/",
    "note": "IPTV subscription provider positioned around travel/multi-region use.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "epix-iptv",
    "name": "Epix IPTV",
    "url": "https://www.epixiptv4k.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "iptv-valley",
    "name": "IPTV Valley",
    "url": "https://www.iptvvalley.store/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "skyhub4k",
    "name": "SkyHub4K",
    "url": "https://ww2.skyhub4k.org/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "24,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": [
      "4k"
    ]
  },
  {
    "slug": "marinios-iptv",
    "name": "Marinios IPTV",
    "url": "https://www.mariniosiptv.org/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "matrix-iptv",
    "name": "Matrix IPTV",
    "url": "https://www.matrixiptv.store/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "trendyscreen",
    "name": "TrendyScreen",
    "url": "https://www.trendy-screen.store/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "expedite-tv",
    "name": "Expedite TV",
    "url": "https://expeditetv.store/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "hypersonic-tv",
    "name": "HyperSonic TV",
    "url": "https://www.hypersonic-tv.org/",
    "note": "IPTV subscription provider marketed on stream speed/stability.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "digitalizard-iptv",
    "name": "DigitaLizard IPTV",
    "url": "https://www.digitalizardiptv.org/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "4k-iptv-spot-store",
    "name": "4K IPTV Spot Store",
    "url": "https://www.4kiptvspotstore.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "4k-live-iptv-store",
    "name": "4K Live IPTV Store",
    "url": "https://www.4kliveiptvstore.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "4xtream-streams",
    "name": "4Xtream Streams",
    "url": "https://www.4xtreamstreams.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "agora-stream-iptv",
    "name": "Agora Stream IPTV",
    "url": "https://www.agorastreamiptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "alia-iptv",
    "name": "Alia IPTV",
    "url": "https://www.aliaiptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "apollo-group-tv",
    "name": "Apollo Group TV",
    "url": "https://www.apollogrouptv1.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (apollo-tv-iptv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "apollo-tv-iptv",
    "name": "Apollo TV IPTV",
    "url": "https://www.apollotviptvi.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (apollo-group-tv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "aroma-iptv",
    "name": "Aroma IPTV",
    "url": "https://www.aromaiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "awakening-tv-iptv",
    "name": "Awakening TV IPTV",
    "url": "https://www.awkngtviptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "axos-cast-iptv",
    "name": "Axos Cast IPTV",
    "url": "https://www.axoscast-iptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "beast-iptv",
    "name": "Beast IPTV",
    "url": "https://www.beastiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "bing-iptv",
    "name": "Bing IPTV",
    "url": "https://www.bingiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "boss-iptv-store",
    "name": "Boss IPTV Store",
    "url": "https://www.bossiptvstore.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "bunny-stream-iptv",
    "name": "Bunny Stream IPTV",
    "url": "https://www.bunnystreamiptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "castoflex-tv",
    "name": "CastOFlex TV",
    "url": "https://www.castoflextv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "digitalizard-iptv-alt",
    "name": "DigitaLizard IPTV",
    "url": "https://www.digitalizardiptvi.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (digitalizard-iptv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "done-iptv",
    "name": "Done IPTV",
    "url": "https://www.doneiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "doxdox-iptv",
    "name": "DoxDox IPTV",
    "url": "https://www.doxdoxiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "eaglecast-tv",
    "name": "Eaglecast TV",
    "url": "https://www.eaglecast-tv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "falcon-iptv",
    "name": "Falcon IPTV",
    "url": "https://www.falconiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "flash-iptv",
    "name": "Flash IPTV",
    "url": "https://www.flashiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "flex-iptv",
    "name": "Flex IPTV",
    "url": "https://www.flexiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "flixora-streams",
    "name": "Flixora Streams",
    "url": "https://www.flixorastreams.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "flixtro-store",
    "name": "Flixtro Store",
    "url": "https://www.flixtrostore.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "focus-4k-iptv",
    "name": "Focus 4K IPTV",
    "url": "https://www.focus4kiptv.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "greatest-iptv",
    "name": "Greatest IPTV",
    "url": "https://www.greatestiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "homeplex-iptv",
    "name": "Homeplex IPTV",
    "url": "https://www.homeplexiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "hoxy-tv",
    "name": "Hoxy TV",
    "url": "https://www.hoxy-tv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "hulux-tv",
    "name": "Hulux TV",
    "url": "https://www.hulux-tv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "iptv-on",
    "name": "IPTV On",
    "url": "https://iptvon1.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "iscreen-hd-iptv",
    "name": "iScreen HD IPTV",
    "url": "https://ww1.iscreenhd-iptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "it-tech-basics-iptv",
    "name": "IT Tech Basics IPTV",
    "url": "https://www.ittechbasicsiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "kenoa-iptv",
    "name": "Kenoa IPTV",
    "url": "https://www.kenoaiptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "krooz-tv",
    "name": "Krooz TV",
    "url": "https://www.krooztvpremuim.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "ky-iptv",
    "name": "KY IPTV",
    "url": "https://www.kyiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "magic-4k-streams",
    "name": "Magic 4K Streams",
    "url": "https://www.magic4kstreams.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "mode-iptv",
    "name": "Mode IPTV",
    "url": "https://www.modeiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "mom-iptv-shop",
    "name": "Mom IPTV Shop",
    "url": "https://www.momiptvshop.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "nigma-streamz-iptv",
    "name": "Nigma Streamz IPTV",
    "url": "https://www.nigmastreamziptvi.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (nigma-tv-iptv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "nigma-tv-iptv",
    "name": "Nigma TV IPTV",
    "url": "https://www.nigmatviptv.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (nigma-streamz-iptv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "nikon-iptv",
    "name": "Nikon IPTV",
    "url": "https://www.nikoniptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "one-dollar-iptv-store",
    "name": "One Dollar IPTV Store",
    "url": "https://www.onedollariptvstore.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 3,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": [
      "budget"
    ]
  },
  {
    "slug": "one-iptv",
    "name": "One IPTV",
    "url": "https://www.oneiptvofficial.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "orla-tv-4k",
    "name": "Orla TV 4K",
    "url": "https://www.orlatv4k.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "overvue-hd",
    "name": "OverVue HD",
    "url": "https://www.overvuehd.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "pulse-4k-store",
    "name": "Pulse 4K Store",
    "url": "https://www.pulse4kstore.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "reflexsat-iptv",
    "name": "Reflexsat IPTV",
    "url": "https://www.reflexsatiptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "royal-stream-tv",
    "name": "Royal Stream TV",
    "url": "https://www.royalstreamtv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "sphere-streams",
    "name": "Sphere Streams",
    "url": "https://www.spherestreams.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "static-iptv",
    "name": "Static IPTV",
    "url": "https://www.staticiptvi.store/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "talk-to-my-tv-iptv",
    "name": "Talk To My TV IPTV",
    "url": "https://www.talktomytviptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "telezic-tv",
    "name": "Telezic TV",
    "url": "https://www.telezictv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "terea-tv",
    "name": "Terea TV",
    "url": "https://tereatv.store/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "the-nexus-4k-tv",
    "name": "The Nexus 4K TV",
    "url": "https://www.thenexus4ktv.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "tivistation",
    "name": "TiviStation",
    "url": "https://www.tivistation4k.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "tivora-streams",
    "name": "Tivora Streams",
    "url": "https://www.tivorastreams.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "tv-nado-store",
    "name": "TV Nado Store",
    "url": "https://www.tvnadostore.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "tv-plans-iptv",
    "name": "TV Plans IPTV",
    "url": "https://www.tvplansiptvstore.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "worthy-stream",
    "name": "Worthy Stream",
    "url": "https://www.worthystreamofficial.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (worthy-stream-tv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "worthy-stream-tv",
    "name": "Worthy Stream TV",
    "url": "https://www.worthystreamtv.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (worthy-stream).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "moly-iptv",
    "name": "Moly IPTV",
    "url": "https://ww2.molyiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "xcodes-iptv",
    "name": "Xcodes IPTV",
    "url": "https://www.xcodesiptvi.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "yeah-iptv",
    "name": "Yeah IPTV",
    "url": "https://www.yeahiptvofficial.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (yeah-iptv-store).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "yeah-iptv-store",
    "name": "Yeah IPTV Store",
    "url": "https://www.yeahiptvstore.com/",
    "note": "IPTV subscription provider sharing a brand name with a separately operated service (yeah-iptv).",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": null,
      "support": null
    },
    "pricing": {
      "monthly": null,
      "quarterly": null,
      "annual": null
    },
    "channel_count": null,
    "trial": null,
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "your-prime-tv-4k",
    "name": "Your Prime TV 4K",
    "url": "https://www.yourprimetv4k.com/",
    "note": "4K-tier IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "4k",
    "tags": []
  },
  {
    "slug": "zyro-iptv",
    "name": "Zyro IPTV",
    "url": "https://www.zyroiptv.com/",
    "note": "IPTV subscription provider.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": 4,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": "25,000+ (provider-claimed)",
    "trial": "Not advertised",
    "last_updated": "2026-07-22",
    "category": "general",
    "tags": []
  },
  {
    "slug": "iptv-smarters-pro",
    "name": "IPTV Smarters Pro",
    "url": "https://iptv-smarters-pro.ai.studio/",
    "note": "Xtream Codes subscription storefront named after the free player app; checkout runs through host4k.",
    "status": "profiled",
    "overall": null,
    "sub": {
      "streaming": null,
      "channels": null,
      "reliability": null,
      "price": 4,
      "support": null
    },
    "pricing": {
      "monthly": 14.95,
      "quarterly": 29.95,
      "annual": 59.95
    },
    "channel_count": null,
    "trial": "Not advertised",
    "last_updated": "2026-08-19",
    "category": "general",
    "tags": []
  }
];

if (typeof module !== 'undefined') { module.exports = PROVIDERS; }
